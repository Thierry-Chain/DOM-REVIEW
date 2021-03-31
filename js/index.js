//console.dir(document)
//
document.onload = () => console.log(Load)
let $ = (item) => {
  return document.querySelector(item)
}
let changeTitle = () => {
  // Name = document.title === 'Irambona' ? 'yes' : 'no'
  /*
  if (document.title === 'Irambona') {
    console.log('thierry')
    document.title = 'thierry'
  } else {
    console.log('Irambona')
    document.title = 'Irambona'
  } */
  document.title === 'Irambona'
    ? (document.title = 'thierry')
    : (document.title = 'Irambona')
  // document.title = 'Name'
  // console.log(Name)
  //console.log(document.title)
  // let nav = $('.navbar')
  // nav.classList.add('')
}
console.log(document.styleSheets)
let list = document.querySelectorAll('li')
list.forEach((item) => {
  item.style.background = '#b8bdc1'
})
changeTheme = async () => {
  let body = $('.main')
  console.log(body)
  let theme = body.classList
  theme.contains('dark')
    ? (theme.add('white'), theme.remove('dark'))
    : (theme.add('dark'), theme.remove('white'))
  let Name = await import('./one.js')
  console.log(Name)
  /*Name.then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err) */
}
