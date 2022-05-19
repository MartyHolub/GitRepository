const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted : true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted : true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted : false
    },
];

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);

const x = 6;
const y = 10
if(x > 5 || y>10){
    console.log('x is more than 5 or y is more than 10');
}
const a = 9;
const color = 'green';
switch(color){
    case 'red':{
        console.log('color is red');
        break;
    }
    case 'blue':{
        console.log('color is blue');
        break;
    }
    default:{
        console.log('color is not red or blue');
        break;
    }
}

