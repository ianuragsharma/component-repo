const docs = document.querySelector(".docs")
const dropdown = document.querySelector(".dropdown")
const anchorTag = document.querySelectorAll(".anchor-tag")

docs.addEventListener('click',(()=>{
    dropdown.classList.toggle("hide");
}))

// for(let i = 0;i<9;i++){
//     anchorTag[0].addEventListener("click",(()=>{
//      dropdown.classList.toggle("hide");
// }))
// }
document.body.addEventListener('click',((e)=>{
    console.log("hello");
    if(e.target.className !== "docs")
     dropdown.classList.add("hide");
     
})); 