
import loadMenu from "./menu.js";
import loadHome from "./home.js";
//import loadHeader from "./header.js";
import loadFooter from "./footer.js";
import loadContant from "./contact.js";

function createHeader()
{

   let flex_container=document.createElement("div");
   let h1=document.createElement("h1");
   let  nav=document.createElement("nav");

    h1.textContent="Eat clean";
    
    flex_container.classList.add("flex-container");
    h1.classList.add("restaurant-name");

    nav.appendChild(createButton("Home","button-nav"));
    nav.appendChild(createButton("Menu","button-nav"));
    nav.appendChild(createButton("Contact","button-nav"));

   

    flex_container.appendChild(h1);
    flex_container.appendChild(nav);
    
 

    return flex_container;

}

function createButton(text,classname)
{
let btn= document.createElement("button");
btn.textContent=text;
btn.classList.add(classname);
btn.addEventListener("click",(e)=>{
if(e.target.textContent==="Home"){
    loadHome();
    e.target.classList.add("btn-active");
    let btns=document.querySelectorAll(".button-nav");
    for(let i=0;i<btns.length;i++)
    {
        if(btns[i].textContent!==e.target.textContent)
        {
            btns[i].classList.remove("btn-active");
        }
    }
}
if(e.target.textContent==="Menu"){ 
    loadMenu();
    e.target.classList.add("btn-active");
    let btns=document.querySelectorAll(".button-nav");
    for(let i=0;i<btns.length;i++)
    {
        if(btns[i].textContent!==e.target.textContent)
        {
            btns[i].classList.remove("btn-active");
        }
    }}
if(e.target.textContent==="Contact"){
    loadContant();
    e.target.classList.add("btn-active");
    let btns=document.querySelectorAll(".button-nav");
    
    for(let i=0;i<btns.length;i++)
    {
        console.log(i<btns.length);
        if(btns[i].textContent!==e.target.textContent)
        {
            btns[i].classList.remove("btn-active");
        }
    }   
}
})
return btn;
}


function loadHeader()
{
  const main = document.getElementById("header");
  main.textContent = "";
  main.appendChild(createHeader());
}

loadHeader();
loadHome();
loadFooter();


