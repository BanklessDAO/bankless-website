import { TextRow } from './TextRow'

const Middle = () => {
  return (
    <>
      <TextRow
        reversed={true}
        imageSrc='/images/about-us/bankless-movement.png'
        imageAlt='abstract image of ethereum'
        title='Bankless is a movement for Web3 pioneers'
        para='We seek new ways to build wealth, solve human coordination problems, create culture, and develop cutting-edge thought leadership in the crypto space. Going Bankless means taking control of your financial health by adopting decentralized and permissionless money systems. Bankless is the movement educating the world on how to do it.'
      />
      <TextRow
        imageSrc='/images/about-us/bankless-dao.png'
        imageAlt='abstract image of ethereum'
        title='BanklessDAO is the homebase'
        para="BanklessDAO is a community of passionate Web3 thought-leaders who aim to educate new users, produce written and audio media, build DAO tooling, provide consulting services, develop Web3 scholarship, and create a social and creative home base for anyone in Web3. We're so much more than a social DAO—we're a shipping, building, and
      innovating DAO."
      />
    </>
  )
}

export default Middle
