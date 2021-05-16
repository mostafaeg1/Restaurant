function createHome()
{
    let homediv=document.createElement("div");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let img=document.createElement("img");
    
    img.src="images/razChef.jpg";
    img.alt="chef";

    homediv.classList.add("home");

    homediv.appendChild(createParagraph("Eat with purpose"));
    homediv.appendChild(createParagraph("Made with passion since 1980"));
    homediv.appendChild(img);
    homediv.appendChild(createParagraph("Order online or visit us!"));

    return homediv;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  function loadHome()
  {
    const main = document.getElementById("content");
    main.textContent = "";
    main.appendChild(createHome());
  }

  export default loadHome;