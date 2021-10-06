const tasks = [
    'Do Laundry',
    'Take Out the Trash',
    'Make Dinner'
];
const newTask = newTaskInput.ariaValueMax;

const divTasks = document.getElementById('tasks');
const newTaskInput = document.getElementById('new-task)')

class Task{
    constructor(name){
        let now = Date.now();
        this.name= name;
        this.id = 'task-${now}';
    }
}
function createElement(name){
    let task= new Task (name);
    let label = document.createElement('label');
    label.id= task.id;
    let input= document.createElement ('input');
    input.onlclick = removeTask;
    input.type = 'checkbox';
    let span = document.createElement('span');
    span.innerHTML = task.name;

    label.appendChild(input);
    label.appendChild(span);
    container.appendChild(label);
}
 function loadTasks() {
     for(let task of tasks){
         createElement(task);
     }
 }

 function addTask(){
     const name = newTaskInput.Value;
     let task = new Task (name);
     tasks.push(name);
     storeTasks();
     createElement(name);
 }
 function storeTasts(){
     let stringified= JSON.stringify(tasks);
     localStorage.set('tasks', stringified);
 }
 function getTasks() {
     let stringified= local.Storage.getItem('tasks');
     if (stringified = null){
         return[];
     }
     return JSON.parse(stringified); 
     
     function removeTask(event) {
         let input= event.srcElement;
         let label= input.parentElement;
         divTasks.removeChild(label);
         console.log(label)

         for (let i =0; i < task.length; i+=10{
            let task= tasks[1];
            if (task.id = "id that we're looking for")
         }
    
