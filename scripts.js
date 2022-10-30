
window.onload = (event) => {


const button = document.querySelector("button");

const btnListener =() => button.addEventListener("click", handleClick);


function handleClick(event){
event.preventDefault();
var email = document.querySelector("input").value;
       console.log("Thank you! your email " + email +
" has been added to our mailing list!");
    
	document.querySelector(".message").innerHTML= "Thank you! your email " + email +
" has been added to our mailing list!";
    
}



	btnListener();
};

