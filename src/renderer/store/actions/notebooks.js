export function newNotebook (existingNotebooks) {
  let flattenNotebooks2 = flattenNotebooks(existingNotebooks)
  return {
    id: getUniqueId(flattenNotebooks2),
    label: 'Untitled Notebook'
  }
}

export function getDummyNotebooks () {
  return [
    {
      id: 1,
      label: 'Fake Notebook 12312321312',
      markup: '111'
    }, {
      id: 2,
      label: 'Notebook With Childrens',
      markup: '161',
      children: [{
        id: 5,
        label: 'Level two 2-1',
        markup: '117'
      }, {
        id: 6,
        label: 'Level two 2-2',
        markup: '118'
      }]
    }]
}

function getUniqueId (existingNotebooks) {
  let potentialId = 1
  existingNotebooks.forEach(notebook => {
    if (notebook.id > 1) {
      potentialId = notebook.id + 1
    }
  })
  return potentialId
}

function flattenNotebooks (arr) {
  var res = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].children) {
      console.log(`id = ${arr[i]}, children = ${arr[i].children.length}`)
      res.push(arr[i])
      res = res.concat(flattenNotebooks(arr[i].children))
    } else {
      console.log(`id = ${arr[i]}`)
      res.push(arr[i])
    }
  }
  return res
}
