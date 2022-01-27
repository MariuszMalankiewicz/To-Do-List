const button = document.querySelector("button");
const input = document.querySelector('input');
const ol = document.querySelector('ol');
// let span = document.querySelector('span');

// let list = [];

function AddToArray()
{
    list.push(input.value);
}
function RemoveLi(e){
    e.target.remove();
}
function AddLi()
{
    if(input.value == ''){
        return;
    }
    li = document.createElement('li');
    li.textContent = input.value;
    ol.appendChild(li);
    input.value = '';
    li.addEventListener('click', RemoveLi);
}

// function AddI()
// {
//     i = document.createElement('i');
//     i.className = "fas fa-times-circle";
//     li.appendChild(i);
// }

// function CounterTask(){
    // span.innerHTML = "(" + list.length + ")";
// }



button.addEventListener('click', () =>{
    AddToArray();
    AddLi();
    // AddI();
    // CounterTask();
})