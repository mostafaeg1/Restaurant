function creatMenu(){
    let grid_container=document.createElement("div");


    grid_container.classList.add("menu-grid-container");
   grid_container.appendChild(createMenuItem("Homestyle protien pancake","Our classic homestyle pancakes combine premium whey protein, greek yogurt","Homestyle"));
    grid_container.appendChild(createMenuItem( "bacon wrapped shrimp","Shrimp wrapped in smoked bacon","bacon"));
    grid_container.appendChild(createMenuItem( "ground turkey rice broccoli","Ground 93/7 ground turkey perfectly seasoned with our ICON house blend. Served with rice","ground"));
    grid_container.appendChild(createMenuItem( "del rio chicken","Juicy chicken breast layered with cheese, peppers","chicken"));

    return grid_container;

    
}

function createMenuItem(name,description,src)
{
    const menuItem=document.createElement("div");
    const foodescription=document.createElement("p");
    const foodName=document.createElement("h2");
    const foodimg=document.createElement("img");

    foodimg.src=`images/${src}.jpg`;
    foodimg.alt=name;

    foodName.textContent=name;
    foodescription.textContent=description;

    menuItem.classList.add("menueitem");

    menuItem.appendChild(foodimg);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodescription);

    return menuItem;

}


function loadMenu()
{
    const main = document.getElementById("content");
    main.textContent = "";
    main.appendChild(creatMenu());
}

export default loadMenu;