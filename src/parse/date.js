/**
 * Convert epoch to CSL date
 *
 * @access protected
 * @memberof Cite.parse
 *
 * @param {Number|String} value - Epoch time or string in format "YYYY-MM-DD"
 *
 * @return {Object} Object with property "date-parts" with the value [[ YYYY, MM, DD ]]
 */
const parseDate = function (value) {
  const date = new Date(value)
  return date.getFullYear()
    ? {'date-parts': [[date.getFullYear(), date.getMonth() + 1, date.getDate()]]}
    : {'raw': value}
}

export const scope = '@date'
export const types = '@date'
export {
  parseDate as parse,
  parseDate as default
}
