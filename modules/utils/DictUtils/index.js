
/**
 * @module Utils
 */

/**
 * getDictList - description
 *
 * @param  {object} dictData 字典表json
 * @param  {string} dicName  对应字典键名
 * @return {array}          对应字典值
 */

export function getDictList(dictData, dicName) {
  // console.log(dictData)
  return dictData[dicName] || []
}

/**
 * getDictLabel - description
 *
 * @param  {object} dictData 字典表json
 * @param  {string} dicName  对应字典键名
 * @param  {string|number} value    需要翻译的值
 * @return {type}          字典翻译后的值
 */
export function getDictLabel(dictData, dicName, value) {
  let label = ''
  try {
    const map = getDictList(dictData, dicName);
    map.forEach(arr => {
      if (arr.value === value) {
        label = arr.label
        // throw 'Finish and value = ' + label
      }
    });
  } catch (e) {
    console.log(e)
  }
  // console.log(label)
  return label
}
