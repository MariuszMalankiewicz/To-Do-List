const btnAdd = document.querySelector(".AddTask");
const TaskName = document.querySelector('.TaskName');
const ActivOl = document.querySelector('.active');

btnAdd.addEventListener('click', () => {

const list = [];

    if(TaskName.value == ''){
        alert('Write Task');
        return;
    }else{
        li = document.createElement('li');
        li.textContent = TaskName.value;
        ActivOl.appendChild(li);
        i = document.createElement('i');
        i.className = "fas fa-times-circle";
        li.appendChild(i);
        TaskName.value === '';
        
        
        list.push(li.value);
        console.log(list);
    }


    

    i.addEventListener('click', (e) => {
        ActivOl.removeChild(li);
        
    })
})

