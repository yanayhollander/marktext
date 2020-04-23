export function newNotebook () {
  return {
    id: 4,
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
