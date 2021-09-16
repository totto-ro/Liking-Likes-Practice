console.log("Working!")

function likes(event){
    console.log(event.target.previousElementSibling);
    let numLikes = event.target.previousElementSibling;
    console.log(numLikes);
    let sum = parseInt(numLikes.textContent); 
    console.log(sum); 
    sum += 1;
    console.log(sum + "likes");
    numLikes.textContent = sum + " Likes(s)";
}

let addButton = document.querySelectorAll('.button');
console.log(addButton);

for (let i = 0; i < addButton.length; i++){
    addButton[i].addEventListener("click", likes);
}

