const przechowujeNowaCzynnosc = document.querySelector('.przechowujeNowaCzynnosc');
const inputWpiszCzynnosc = document.querySelector('.inputWpiszCzynnosc');
const przyciskDodajCzynnosc = document.querySelector('.przyciskDodajCzynnosc');



function dodajCzynnosc(){
    // stworzenie elementu p
    const nowaCzynnosc = document.createElement('p');
    // jeśli nie wpisano czynności to zwróć, inaczej dodaj 
    if(inputWpiszCzynnosc.value === ''){
        return;
    }else{
        nowaCzynnosc.innerHTML = inputWpiszCzynnosc.value;
    }
    // dodanie nowej czynności do pojemnika
    przechowujeNowaCzynnosc.appendChild(nowaCzynnosc);
    // wyczyszczenie inputu z czynnością
    inputWpiszCzynnosc.value = '';
    nowaCzynnosc.addEventListener('click', function(){
        nowaCzynnosc.style.textDecoration = "line-through";
    })
    // Usuwanie czynności 2x clikiem
    nowaCzynnosc.addEventListener('dblclick', function(){
        przechowujeNowaCzynnosc.removeChild(nowaCzynnosc);
    })   
}





przyciskDodajCzynnosc.addEventListener('click', dodajCzynnosc)