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
return btn;
}

function loadHeader()
{
  const main = document.getElementById("header");
  main.textContent = "";
  main.appendChild(createHeader());
}

export default loadHeader;