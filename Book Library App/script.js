const url = 'https://raw.githubusercontent.com/attainu/attainu-flamingo/master/assignments/data/books.json'
let data = []

$(document).ready(() => {
  fetchData(url)
  $('#submit').on('click', e => {
    e.preventDefault()
    createTable(data, $('#languageInput').val())
  })
})

const fetchData = url => {
  jQuery.get(url, result => {
    data = jQuery.parseJSON(result)
    createTable(data)
  })
}

const createTable = (data, language) => {
  let rows = ''
  if (language) {
    data.forEach(entry => {
      if (entry.language.toLowerCase() == language.toLowerCase()) {
        rows += `
        <tr>
        <td>${entry.title}</td>
        <td>${entry.author}</td>
        <td>${entry.country}</td>
        <td>${entry.language}</td>
        <td><a href="${entry.link}">link</a></td>
        <td>${entry.pages}</td>
        <td>${entry.year}</td>
        </tr>
        `
      }
    })
  } else {
    data.forEach(entry => {
      rows += `
      <tr>
      <td>${entry.title}</td>
      <td>${entry.author}</td>
      <td>${entry.country}</td>
      <td>${entry.language}</td>
      <td><a href="${entry.link}">link</a></td>
      <td>${entry.pages}</td>
      <td>${entry.year}</td>
      </tr>
      `
    })
  }
  $('#tbody').html(rows)
}