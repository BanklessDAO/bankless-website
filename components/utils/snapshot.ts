export type proposal = {
  id: string
  title: string
  start: number
  choices: []
  end: number
  state: string
  scores: []
  scores_total: number
}

export type proposalList = [proposal]

export const sortPropByState = (proposals: proposalList) => {
  let sortedProps = {}
  let active: object[] = []
  let closed: object[] = []

  proposals.map((prop: proposal) => {
    if (prop.state == 'closed') {
      closed.push(prop)
    } else if (prop.state == 'active') {
      active.push(prop)
    }
  })
  sortedProps['active'] = active
  sortedProps['closed'] = closed

  return sortedProps
}
