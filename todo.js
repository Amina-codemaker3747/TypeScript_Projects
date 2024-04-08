import inquirer from "inquirer";
const todos = [];
let loop = true;
const TODOS = async () => {
    while (loop) {
        const answers = await inquirer.prompt([{
                type: "confirm",
                name: "TODO",
                message: "Please Enter Your TODO",
            },
            {
                type: "input",
                name: "addMore",
                message: "Do you want to add more Todo?",
                default: false,
            },
        ]);
        const { TODO, addMore } = answers;
        loop = addMore;
        if (TODO) {
            todos.push(TODO);
        }
        else {
            console.log("Kindly add More Todos");
        }
    }
    if (todos.length > 0) {
        console.log(todos);
        todos.forEach((todos) => {
            console.log(todos);
        });
    }
    else {
        console.log("No todos found");
    }
};
export { TODOS };
