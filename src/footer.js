function createFooter()
{

   let p=document.createElement("p");
   let a=document.createElement("a");
   let footer=document.createElement("footer");
   let img=document.createElement("img");
   img.src="images/GitHub-Mark-64px.png";
   img.alt="github";
   img.classList.add("github-symbol")

    a.href="https://github.com/mostafaeg1";
    a.appendChild(img);
    p.textContent="Copyright © 2021 mostafaeg";

    
    //let footer=document.getElementById("footer") ;
    footer.id="footer";

    footer.appendChild(p);
    footer.appendChild(a);

    return footer;
}


function loadFooter()
{
  let main = document.getElementById("footerdiv");
  main.textContent = "";
  main.appendChild(createFooter());
    
}

export default loadFooter;