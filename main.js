const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'
const secondStr = '&limit=25&q='


let input, btn, output
input = document.getElementById('input')
btn = document.getElementById('btn')
output = document.getElementById('output')

const searchGiphy = async () => {
  let text = input.value
  let url = API + KEY + secondStr + text
  let requset = await fetch(url)
  let response = await requset.json()
  console.log(response.data)
  renderGiphy(response.data)
  input.value =''
  
}

const renderGiphy = (data) => {
    output.innerHTML=''
  data.forEach((el) => {
    let div = document.createElement('div')
    let iframe = document.createElement('iframe')
    let h5 = document.createElement('h5')
    h5.innerHTML = el.title
    iframe.src = el.embed_url
    div.append(h5, iframe)
    output.append(div)
  })
}

btn.addEventListener('click', () => {
  searchGiphy()
})
//  https://randomuser.me/api/?results=25
 