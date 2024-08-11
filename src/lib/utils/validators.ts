export const isJson = (str: string): boolean => {
  try {
    const result = JSON.parse(str)
    const type = Object.prototype.toString.call(result)
    return type === '[object Object]' || type === '[object Array]'
  } catch (err) {
    return false
  }
}
