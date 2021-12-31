const przechowujeNowaCzynnosc = document.querySelector('.przechowujeNowaCzynnosc');
const inputWpiszCzynnosc = document.querySelector('.inputWpiszCzynnosc');
const przyciskDodajCzynnosc = document.querySelector('.przyciskDodajCzynnosc');


function dodajCzynnosc(){
    const nowaCzynnosc = document.createElement('p');
    nowaCzynnosc.innerHTML = inputWpiszCzynnosc.value;
    przechowujeNowaCzynnosc.appendChild(nowaCzynnosc);
    
}






przyciskDodajCzynnosc.addEventListener('click', dodajCzynnosc)