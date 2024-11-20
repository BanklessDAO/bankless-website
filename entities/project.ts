export interface ProjectType {
  name: string
  page: string
  category?:
    | 'consulting-and-education'
    | 'sponsorships-and-marketing'
    | 'creative-services'
    | 'software-and-dao-tooling'
  description: string
  image: string
  link?: string
}
