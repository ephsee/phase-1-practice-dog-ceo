console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function(){
    getDogs()
    getBreeds()
})

function getBreeds(){
    fetch(breedUrl)
    .then(r=>r.json())
    .then(data => dogList(data))
}

function dogList(data){
    //console.log(Object.keys(data.message))
    Object.keys(data.message).forEach(d => {

        const listDog = document.getElementById("dog-breeds")
        const newList = document.createElement("li")
        newList.className = 'dogLi'
        newList.innerText = d
        listDog.appendChild(newList)

        newList.addEventListener('click', (e) => {
            console.log(e)
            newList.style.color = "red";
        })
    })
}

function getDogs() {
    fetch(imgUrl)
    .then(r=>r.json())
    .then(data => dogPics(data))
}

function dogPics(data) {
    data.message.forEach(d=> {
        const dogImg = document.querySelector('#dog-image-container');
        const newDog = document.createElement('img');
        newDog.src = d;
        dogImg.appendChild(newDog)
    })
}