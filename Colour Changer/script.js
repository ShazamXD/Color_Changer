// JS Starts Here
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event) // the event object automatically passed to your function when the click happens
        console.log(event.target) // they used event.target here because they want to know exactly which element was clicked
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id; // here event.target.id represents the color only or you can also hard assign by writing the color name 'grey'
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
    });
});