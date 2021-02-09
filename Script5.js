const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist check',
        isCompleted: false
    }
]

console.log(todos[1].text);

for(let i = 0; i < 10; i++) {
    console.log(i)
    console.log(`For loop number: ${i}`);
}

let i = 0;
while(i < 10){
    console.log(`While loop number: ${i}`);
    i++
}

for(let todo of todos) {
    console.log(todo.id);
}


todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);


const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

 console.log(todoCompleted);


