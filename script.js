
let modebtn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body");
modebtn.addEventListener("click", () =>{
    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    
    }else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
})
const fruits = new Map([
    [ "Hassan", 550],
    [ "Shaheensha", 450],
    [ "Murtaza", 350],
    [ "Bilal", 150],

]);

document.getElementById("demo").innerHTML = typeof fruits;