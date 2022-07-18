const btningresar = document.querySelector('.btningresar')
const validar = ()=> {
    const select1 = document.querySelector('#select1').value
    const select2 = document.querySelector('#select2').value
    const select3 = document.querySelector('#select3').value
    const string1 = select1 + select2 + select3;
   
    if (string1 == '911') {
        document.querySelector('span').textContent = "password 1 correcto";
      } else if (string1 === '714') {
        document.querySelector('span').textContent = "password 2 es correcto";
      } else {
        document.querySelector('span').textContent = "password incorrecto";
      }
    }
    
    btningresar.addEventListener("click", validar);
