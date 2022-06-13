const ul = document.querySelector('ul');
const numberTask = document.querySelector('.counter');




const AddTask = ()=>{
let TitleTask = document.querySelector('.TitleTask');
if(TitleTask.value === ''){
    alert('Write Something :)');
    return;
}
    let li = document.createElement('li');
    li.textContent = TitleTask.value;
    let i = document.createElement('i');
    i.classList.add('fa-solid');
    i.classList.add('fa-delete-left');
    li.appendChild(i);
    ul.appendChild(li);
    let liEle = document.querySelectorAll('li');
    numberTask.textContent = liEle.length;
    TitleTask.value = '';
}



const RemoveTask = ()=>{
    // let li = document.querySelectorAll('li');
    //     li.forEach(li => {
    //         li.addEventListener('click', (e)=>{
    //         ul.removeChild(li);
    //         let liEle = document.querySelectorAll('li');
    //         numberTask.textContent = liEle.length;
    //     })
    // });
    let btnDelete = document.querySelectorAll('.fa-delete-left');
    btnDelete.forEach(btn => btn.addEventListener('click', ()=>{
        ul.removeChild(btn.parentElement);
        let liEle = document.querySelectorAll('li');
        numberTask.textContent = liEle.length;
    }))
}



document.querySelector('.btnAddTask').addEventListener('click', ()=>{
    AddTask();
    RemoveTask();
})

document.querySelector('.Search').addEventListener('input', (e)=>{
    let LiElements = document.querySelectorAll('li');
    let searchText = e.target.value.toLowerCase();
    for (var i = 0; i < LiElements.length; i++) {
        if(LiElements[i].textContent.toLowerCase().includes(searchText.toLowerCase())){
            LiElements[i].style.display = '';
        }else{
            LiElements[i].style.display = 'none';
        }
    }
});
