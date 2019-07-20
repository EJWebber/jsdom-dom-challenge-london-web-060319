document.addEventListener("DOMContentLoaded", counting)
// document.addEventListener("DOMContentLoaded", renderLikes)

const counter = document.getElementById('counter')
const plus = document.getElementById('+')
const minus = document.getElementById('-')
const pause = document.getElementById('pause')
let count = parseInt(counter.innerText)

// counter function
function counting(){
    setInterval(incrementCounter, 1000)
}

// counter +/-
plus.addEventListener("click", incrementCounterNoCondition)
minus.addEventListener("click", decrementCounter)

function incrementCounter(){
    if (pause.innerText == "pause"){
    count += 1
    counter.innerText = count
    }
}

function incrementCounterNoCondition(){
    count += 1
    counter.innerText = count
}

function decrementCounter(){
    count -= 1
    counter.innerText = count
}

// pause
pause.addEventListener("click", freeze)

function freeze(){
    if(pause.innerText == "pause"){
        pause.innerText = 'resume'
    }
    else{
        pause.innerText = 'pause'
    }
    
}

// likes
const heart = document.getElementById('<3')
const likes = document.querySelector('ul.likes')
const allLikes = {}
heart.addEventListener("click", addLike)

function addLike(){
    if (typeof(allLikes[`${count}`]) === 'number'){
 allLikes[`${count}`] += 1}
    else{
        allLikes[`${count}`] = 1
    }
    renderLikes()
}

function renderLikes(){
    likes.innerHTML = ""
    for(number in allLikes){
        let liLike = document.createElement('li')
        liLike.innerText = `Number ${number} has ${allLikes[number]} likes!`
        likes.appendChild(liLike)
    }   
}

// comments

// const commentList = document.getElementById('list')
const commentForm = document.getElementById('comment-form')

// commentForm.addEventListener('submit', event => {
//     event.preventDefault()
//     submitComment(event.target)
//   })

// function submitComment(data){
//     console.log(data)
//     let li = document.createElement('li')
//     li.innerText = data.name.value
//     commentList.appendChild(li)
// }

commentForm.addEventListener("submit", addComment);
function addComment(event) {
    event.preventDefault();
    const commentList = document.getElementById("form-input");
    const comments = document.getElementById("list");
    comments.innerHTML += `<li>${commentList.value}</li>`;
  }
  