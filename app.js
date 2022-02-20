'use strict'

let text = document.querySelector(".text");
let background = document.querySelector(".background");
let closing = document.querySelector(".closing");
let btn = document.querySelector(".btn");
let h1js = document.querySelector(".h1js");



   btn.addEventListener("click", function(){
	/*let question = prompt("what is your name");*/
	text.classList.remove("hide");
	background.classList.remove("hide");
	/*h1js.textContent = `Welcome ${question}`;*/
})

function closeEverything(){
	text.classList.add("hide");
	background.classList.add("hide");
}

closing.addEventListener("click", closeEverything)


background.addEventListener("click", closeEverything);

document.addEventListener("keydown", function(e){
	if(e.key === "Escape" && !text.classList.contains("hide")){
		closeEverything();
	}
})
