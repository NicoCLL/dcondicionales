const perritoclick = document.querySelector('.foto')

perritoclick.addEventListener('click', () =>{
    if(perritoclick.style.borderStyle != "solid"){
        perritoclick.style.border = "solid red 2px";}
        else{
            perritoclick.style.removeProperty("Border")
        }
    }    
)
