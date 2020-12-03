export const setTextFilter = (text) => ({
  type: 'SETTEXTFILTER',
  text
})

export const sortByDate = () => ({
  type: 'SORTBYDATE'
})

export const sortByAmount = () => ({
  type: 'SORTBYAMOUNT'
})

export const setStartDate = (date) => ({
  type: 'SETSTARTDATE',
  date
})

export const setEndDate = (date) => ({
  type: 'SETENDDATE',
  date
})