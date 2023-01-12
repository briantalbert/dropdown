const linksList = ['Home', 'Menu', 'Contact', 'About']

function createDropdownMenu(linksList) {
    //Create container
    const dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('dropdown');

    //Create hoverable button
    const menuButton = document.createElement('button');
    menuButton.classList.add('dropbtn');
    //Add hamburger menu icon
    menuButton.innerHTML = "<img src='./assets/menu.png'>";

    //Create list of links
    const menuContent = document.createElement('div');
    menuContent.classList.add('menulinks');

    //create link elements, add text from list
    linksList.forEach(item => {
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerText = item;
        menuContent.appendChild(link);
    });

    //Append elements to main dropdown container
    dropdownContainer.appendChild(menuButton);
    dropdownContainer.appendChild(menuContent);

    //Append full dropdown to body
    document.querySelector('body').appendChild(dropdownContainer);
}

createDropdownMenu(linksList);