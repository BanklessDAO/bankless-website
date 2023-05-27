export function getCurrentDate(separator = '-') {
  let newDate = new Date()
  let date = newDate.getDate()
  let month = newDate.getMonth() + 1
  let year = newDate.getFullYear()
  let hour = newDate.getHours()
  let min = newDate.getMinutes()

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date} ${hour}:${min}`
}

export function formatEndDate(separator, endate) {
  let newDate = new Date(endate)
  let date = newDate.getDate()
  let month = newDate.getMonth() + 1
  let year = newDate.getFullYear()
  let hour = newDate.getHours()
  let min = newDate.getMinutes()

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date} ${hour}:${min}`
}

export function getUnlockDate(separator, startDate, durationMonths) {
  // Create a new Date object for the start date
  const endDate = new Date(startDate)

  // Add the duration in months to the month value
  endDate.setMonth(endDate.getMonth() + durationMonths)

  // Return the end date
  // return endDate;
  let date = endDate.getDate()
  let month = endDate.getMonth() + 1
  let year = endDate.getFullYear()
  let hour = endDate.getHours()
  let min = endDate.getMinutes()

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date} ${hour}:${min}`
}

export function getUnlockDateRaw(startDate, durationMonths) {
  // Create a new Date object for the start date
  const endDate = new Date(startDate)

  // Add the duration in months to the month value
  endDate.setMonth(endDate.getMonth() + durationMonths)

  return Math.floor(endDate / 1000.0)
}

export function formatWalletAddress(address) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0'
}
