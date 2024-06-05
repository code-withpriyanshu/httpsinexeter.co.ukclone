
let counter = 0;
function submenu(n) {
    counter++;
    let arr = document.getElementsByClassName("arrowbutton")
    // arr[n].style.backgroundColor = "red";
    let container = document.getElementById(`subcon${n}`)
    if(counter%2 != 0){
        container.style.display = "block"
    }
    else{
        container.style.display = "none"
    }
}
function intro(){
    let color = document.getElementById("nav0")
    let border = document.getElementById("li0")
    color.style.color = "black";
    border.style.borderBottom = " 2px solid #0e595a";

}

function introl(){
    let color = document.getElementById("nav0")
    let border = document.getElementById("li0")
    color.style.color = "grey"
    border.style.borderBottom = "2px solid #f5f4ee"
}
function bid(){
    let color = document.getElementById("nav1")
    let border = document.getElementById("li1")
    color.style.color = "black"
    border.style.borderBottom = " 2px solid #0e595a";

}
function bidl(){
    let color = document.getElementById("nav1")
    color.style.color = "grey"
    let border = document.getElementById("li1")
    border.style.borderBottom = "2px solid #f5f4ee"
}
function desc(){
    let color = document.getElementById("nav2")
    color.style.color = "black"
    let border = document.getElementById("li2")
    border.style.borderBottom = " 2px solid #0e595a";

}
function descl(){
    let color = document.getElementById("nav2")
    let border = document.getElementById("li2")
    color.style.color = "grey"
    border.style.borderBottom = "2px solid #f5f4ee"
}
let con2 = 0 
function rotate(n){
   let button = document.getElementById(`rot${n}`)
   let hidded = document.getElementById(`hiddencontent${n}`)
   con2++
   if(con2%2!=0){
       button.style.transform = "rotate(45deg)"
       button.style.transition = "transform 0.5s ease"
       hidded.style.display="block"
    } 
    else{
       button.style.transform = "rotate(0deg)"
       button.style.transition = "transform 0.5s ease"
       hidded.style.display = "none"

   }

}
