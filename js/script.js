let red = document.getElementById("red");
let blue = document.getElementById("blue");
let teal = document.getElementById("teal");
let black = document.getElementById("black");
let none = document.getElementById("none");
let heading = document.getElementsByTagName("h1");

 blue.addEventListener("click", () => {
    // console.log("Ami Clicked");
    document.body.style.background = "blue"         //jehetu kno tag ke style kori nai tai html file ke dhorte likte hoise document.body
  heading[0].style.color = "white"  

})

red.addEventListener("click", ()=>{
    document.body.style.background = "red"
    heading[0].style.fontWeight = "700"
    heading[0].style.color = "white"            //jehetu getElement diya array type kore html file joto gula ase tag sob gular sirial index ar moto dhorse tai index bole dite hoi
})


teal.addEventListener("click", ()=>{
    document.body.style.background = "teal"
    heading[0].style.color = "tomato"  
})


 function makeblack(){          //function ar nam r id ba class ar nam ak dile function kaj korbe na
    document.body.style.background = "black"
    heading[0].style.color = "white"  
}


none.addEventListener("click", ()=>{
    document.body.style.background = ""
    heading[0].style.color = "black"  

})