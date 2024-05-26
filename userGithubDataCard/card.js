const givenUrl=document.getElementById("url")
const givenName=document.getElementById("name")
const givenImage=document.getElementById("image")
const givenFollowers = document.getElementById("followers")
const parent = document.getElementById("parent")
const userInfo = document.getElementById("userInfo")
const userImg = document.getElementById("img")
const submitBtn = document.getElementById("submitBtn")

const xhr = new XMLHttpRequest();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  userImg.innerHTML = ``;
  userInfo.innerHTML = ``;
  parent.style.display="block"
  
  console.log(typeof givenUrl.value)
  xhr.open('GET', givenUrl.value)
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText)

      if (givenName.checked) {
        const userName = document.createElement("div")
        const name = data.login
        userName.innerHTML = `
    <p>Name: ${name}</p>
    `
        userInfo.appendChild(userName)
      }
      if (givenImage.checked) {
        const userImage = document.createElement("div")
        const imageUrl = data.avatar_url
        userImage.innerHTML = `
    <img src=${imageUrl} alt="">
    `
        userImg.appendChild(userImage)
      }
      if (givenFollowers.checked) {
        const userFollowers = document.createElement("div")
        const numOfFollowers = data.followers
        userFollowers.innerHTML = `
    <p>Followers: ${numOfFollowers}</p>
    `
        userInfo.appendChild(userFollowers)
      }
    }
  }
 

})