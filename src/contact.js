function createContact()
{
    let contactdiv=document.createElement("div");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let img=document.createElement("img");
    
    contactdiv.classList.add("contact");

    p1.textContent="Phone: +972 505 970 038";
    p2.textContent="Addres: alkhalayel st, umm al-fahm, israel";
    
    img.src="images/location.png";
    img.alt="location";

    contactdiv.appendChild(p1);
    contactdiv.appendChild(p2);
    contactdiv.appendChild(img);

    return contactdiv;

}

function loadContant()
{
    const main = document.getElementById("content");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContant;