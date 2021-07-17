export const mainMenuView=()=>{
    const containerMainMenu= document.createElement("div");
    containerMainMenu.setAttribute("id","containerMainMenu");

    const headerMainMenu=document.createElement("header");
    headerMainMenu.setAttribute("id", "headerMainMenu");
    const tittleMainMenu=document.createElement("tittle");
    tittleMainMenu.innerHTML= 'Tejer & Punto'; 
    headerMainMenu.appendChild(tittleMainMenu); 
    containerMainMenu.appendChild(headerMainMenu);
    
    const mainMenuOptions= document.createElement("main"); 

    const boxKnittingSticks=document.createElement("div");
    boxKnittingSticks.setAttribute("id","boxKnittingSticks");
    const boxSticksImg=document.createElement("img");
    boxSticksImg.setAttribute("id","boxSticksImg");
    boxKnittingSticks.appendChild(boxSticksImg);
    const boxSticksText=document.createElement("p");
    boxSticksText.setAttribute("id","boxSticksText");
    boxSticksText.innerHTML='Palillo';
    boxKnittingSticks.appendChild(boxSticksText);
    mainMenuOptions.appendChild(boxKnittingSticks);

    const boxCrochet=document.createElement("div");
    boxCrochet.setAttribute("id","boxCrochet");
    const boxCrochetImg=document.createElement("img");
    boxCrochetImg.setAttribute("id","boxCrochetImg");
    boxCrochet.appendChild(boxCrochetImg);
    const boxCrochetText=document.createElement("p");
    boxCrochetText.setAttribute("id","boxCrochetText");
    boxCrochetText.innerHTML='Crochet'; 
    boxCrochet.appendChild(boxCrochetText);
    mainMenuOptions.appendChild(boxCrochet);

    containerMainMenu.appendChild(mainMenuOptions);
    const footerMainMenu=document.createElement("footer");
    footerMainMenu.setAttribute("id","footerMainMenu");
    footerMainMenu.innerHTML= 'Derechos Reservados @Tejer&Punto';
    containerMainMenu.appendChild(footerMainMenu);

    return containerMainMenu;

}