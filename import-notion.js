/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const axios = require('axios')
const fs = require('fs')
const crc32 = require('js-crc').crc32

const DEFAULT_NOTION_ID = '6b3a4ffc3bb146a7873e654f1209d979'
const POTION_API = 'https://potion.banklessacademy.com'

const args = process.argv
const NOTION_ID =
  args[2] && args[2].length === 32
    ? args[2]
    : DEFAULT_NOTION_ID
console.log('NOTION_ID', NOTION_ID)

const KEY_MATCHING = {
  'Name': 'name',
  'Type': 'type',
  'Description': 'description',
  'Image': 'image',
  'Link': 'link',
}

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/<[^>]*>?/gm, '') // remove tags
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

const download_image = (url, image_path) =>
  axios({
    url,
    responseType: 'stream',
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream(image_path))
  })

const get_img = (imageLink, slug, image_name) => {
  const [file_name] = imageLink.split('?')
  const file_extension = file_name
    .match(/\.(png|svg|jpg|jpeg|webp|webm|mp4|gif)/)[1]
    .replace('jpeg', 'jpg')
  // console.log(file_extension)
  // create "unique" hash based on Notion imageLink (different when re-uploaded)
  const hash = crc32(file_name)
  const image_dir = `/images/${slug}/`
  const image_path = `${image_dir}${slugify(
    image_name
  )}-${hash}.${file_extension}`
  // console.log('image_path', image_path)
  const local_image_path = `public${image_path}`
  if (!fs.existsSync(local_image_path)) {
    download_image(imageLink, local_image_path)
    console.log('downloading image: ', local_image_path)
  }
  return image_path
}

const pages = []

axios
  .get(`${POTION_API}/table?id=${NOTION_ID}`)
  .then((response) => {
    // console.log(response.data)
    response.data.map((notion) => {
      let page = {}
      // console.log(notion)
      page = Object.keys(KEY_MATCHING).reduce(
        (obj, k) =>
          Object.assign(obj, {
            [KEY_MATCHING[k]]: notion.fields[k],
          }),
        {}
      )
      if (page.type.length > 0 && page.image !== undefined) {
        page.type = page.type[0]
        if (page.link === null) {
          delete page.link
        }
        page.image = get_img(page.image, page.type, slugify(page.name))
        pages.push(page)
      } else {
        console.log('pb missing field', page)
      }
    })
    // console.log(pages)
    const departments = pages.filter(page => page.type === 'department')
    console.log('departments', departments)
    const guilds = pages.filter(page => page.type === 'guild')
    console.log('guilds', guilds)
    const projects = pages.filter(page => page.type === 'project')
    console.log('projects', projects)
    const fileContent = `import { ProjectType } from 'entities/project'

export const DEPARTMENTS: ProjectType[] = ${JSON.stringify(departments, null, 2)}

export const GUILDS: ProjectType[] = ${JSON.stringify(guilds, null, 2)}

export const PROJECTS: ProjectType[] = ${JSON.stringify(projects, null, 2)}
`
    const filePath = `constants/data.ts`
    fs.writeFile(
      filePath,
      fileContent,
      (error) => {
        if (error) throw error
      }
    )
    console.log(`export done -> check ${filePath}`)
  })
  .catch((error) => {
    console.log(error)
  })
