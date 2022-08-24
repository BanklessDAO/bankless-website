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

export const snapshotBaseURL =
  'https://snapshot.org/#/banklessvault.eth/proposal/'

export const sortPropByState = (proposals: proposalList) => {
  const sortedProps = {}
  const active: object[] = []
  const closed: object[] = []

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

export const calcTimeLeft = (endInSec: number) => {
  const end = endInSec * 1000
  const now = Date.now()
  const timeLeft = end - now
  // const days = timeLeft / (1000 * 60 * 60 * 24)

  if (timeLeft < 86400000) {
    const hoursLeft = Math.round(timeLeft / (1000 * 60 * 60))

    if (hoursLeft < 1) {
      return 'Less than an hour left, Vote Now!'
    } else {
      return `${hoursLeft} hours left`
    }
  } else {
    const days = Math.round(timeLeft / (1000 * 60 * 60 * 24))
    return `${days} days left`
  }
}

export const organizeVoteInfo = (
  total: number,
  choices: number[],
  results: []
) => {
  const voteInfo = {}

  // the snapshot api returns 2 arrays choices and scores, the index in scores
  // lines up to the index in choices.  This function brings them together to make them easier to read.
  for (const i in choices) {
    const score = results[i]
    const percentVote = Math.round((score / total) * 100)
    voteInfo[choices[i]] = percentVote
  }
  return voteInfo
}
