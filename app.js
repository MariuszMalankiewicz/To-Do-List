const btnAdd = document.querySelector(".AddTask");
const TaskName = document.querySelector('.TaskName');
const ActivOl = document.querySelector('.active');

btnAdd.addEventListener('click', () => {
    li = document.createElement('li');
    if(TaskName.value == ''){
        return
    }else{
        li.textContent = TaskName.value;
    }
    ActivOl.appendChild(li);
    i = document.createElement('i');
    i.className = "fas fa-times-circle";
    li.appendChild(i);
    TaskName.value = '';


    

    i.addEventListener('click', () => {
        ActivOl.removeChild(li);
    })

})

