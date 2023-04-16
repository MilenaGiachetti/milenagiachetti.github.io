export const getYearsDifference = (initialDate: Date, endDate: Date): string => {
  const monthsDifference = (initialDate.getMonth() - endDate.getMonth()) +
    (12 * (initialDate.getFullYear() - endDate.getFullYear()))
  const yearsDifference = `${Math.trunc(monthsDifference / 12)}.${(monthsDifference % 12 >= 6) ? 5 : 0}`
  return yearsDifference
}
