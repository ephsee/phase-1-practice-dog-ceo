//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function(){
    getDogs()
    getBreeds()
})
function getDogs() {
    fetch(imgUrl)
    .then(r=>r.json())
    .then(data => dogPics(data))
}
function getBreeds(){
    fetch(breedUrl)
    .then(r=>r.json())
    .then(data => dogList(data))
}
const listDog = document.getElementById("dog-breeds")

function dogList(data){
    const listOfDogs = Object.keys(data.message)
    listOfDogs.forEach(d => {
        const newList = document.createElement("li")
        newList.className = 'dogLi'
        newList.innerText = d
        listDog.appendChild(newList)
        newList.addEventListener('click', (e) => {
            console.log(e)
            newList.style.color = "red";
        })
        const menu = document.querySelector('select')
        menu.addEventListener("change", () => {
            if(menu.value === 'a'){
                if(d[0] != 'a'){
                    newList.textContent = d
                    newList.style.display =  'none'
                }else{
                    newList.textContent = d
                }
            }else if(menu.value === 'b'){
                if(d[0] != 'b'){
                newList.remove(newList.textContent === d)
                }
            }
            else if(menu.value === 'c'){
                if(d[0] != 'c'){
                newList.remove(newList.textContent === d)
                }
            }else if(menu.value === 'd'){
                if(d[0] != 'd'){
                    newList.textContent = d
                    newList.style.display =  'none'
                }else{
                    newList.textContent = d
                }
            }
        })
    })
}
function dogPics(data) {
    data.message.forEach(d=> {
        const dogImg = document.querySelector('#dog-image-container');
        const newDog = document.createElement('img');
        newDog.src = d;
        dogImg.appendChild(newDog)
    })
}