console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function getDogs() {
    fetch(imgUrl)
    .then(r=>r.json())
    .then(data => dogPics(data))
}

function dogPics(data) {
    console.log(data)
    const dogImg = document.querySelector('#dog-image-container');
    const newDog = document.createElement('img');
    data.message.forEach(d=> {

        newDog.src = d;
        dogImg.appendChild(newDog)
    })
}


document.addEventListener('DOMContentLoaded', function(){
    getDogs()
})