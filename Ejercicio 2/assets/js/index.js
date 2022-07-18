const verificar = document.querySelector('.verificar')

/*console.log(sticker1)*/
const total = () => {
    const sticker1 = document.querySelector('#sticker1').value
    const sticker2 = document.querySelector('#sticker2').value
    const sticker3 = document.querySelector('#sticker3').value
    const sumastickers = +sticker1 + +sticker2 + +sticker3;

    if (sumastickers <= 10){
        document.querySelector('span').textContent = "Llevas " + sumastickers;
        /*console.log(sumastickers)*/
    }
        else{
        document.querySelector('span').textContent = "Llevas demasiados stickers";
        }
    }
    verificar.addEventListener('click', total);
