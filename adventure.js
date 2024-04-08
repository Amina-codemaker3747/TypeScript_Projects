import inquirer from "inquirer";
import chalk from "chalk";
const adventureGame = async () => {
    class Player {
        name;
        fuel = 100;
        constructor(name) {
            this.name = name;
        }
        fuelDecrease() {
            let fuel = this.fuel - 25;
            this.fuel = fuel;
        }
        fuelIncraese() {
            this.fuel = 100;
        }
    }
    class Opponent {
        name;
        fuel = 100;
        constructor(name) {
            this.name = name;
        }
        fuelDecraese() {
            let fuel = this.fuel - 25;
            this.fuel = fuel;
        }
        fuelIncraese() {
            this.fuel = 100;
        }
    }
    let player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Please Enter your Name!"
    });
    console.log(player.name);
    let opponent = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Please Select your Oppoent Player!",
        choices: ["Batman", "Skelton", "Zombie", "Assian", "Ironman"]
    });
    console.log(opponent.select);
    let player1 = new Player(player.name);
    let oppo1 = new Opponent(opponent.name);
    do {
        if (opponent.select === "Batman") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "options",
                message: "What can you do?",
                choices: ["Attack", "Drink", "Run for Life"]
            });
            if (ask.options === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    player1.fuelDecrease();
                    console.log(chalk.bold.red `(${player1.name} fuel is ${player1.fuel})`);
                    console.log(chalk.bold.green `(${oppo1.name} fuel is ${oppo1.fuel})`);
                    if (player1.fuel === 0) {
                        console.log(chalk.bold.red.italic("You Loose!"));
                        process.exit();
                    }
                }
                if (num == 0) {
                    oppo1.fuelDecraese();
                    console.log(chalk.bold.red `(${oppo1.name} fuel is ${oppo1.fuel})`);
                    console.log(chalk.bold.green `(${player1.name} fuel is ${player1.fuel})`);
                    if (oppo1.fuel === 0) {
                        console.log(chalk.bold.red.italic("You Win!"));
                        process.exit();
                    }
                }
            }
            if (ask.options === "Drink") {
                player1.fuelIncraese();
                console.log(chalk.bold.italic.green `(After Drink your Health is ${player1.fuel})`);
            }
            if (ask.options === "Run for Life") {
                console.log(chalk.bold.red.italic("You Loose!"));
                process.exit();
            }
        }
        if (opponent.select === "Skelton") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "options",
                message: "What can you do?",
                choices: ["Attack", "Drink", "Run for Life"]
            });
            if (ask.options === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    player1.fuelDecrease();
                    console.log(chalk.bold.red `( ${player1.name} fuel is ${player1.fuel})`);
                    console.log(chalk.bold.green `( ${oppo1.name} fuel is ${oppo1.fuel})`);
                    if (player1.fuel === 0) {
                        console.log(chalk.bold.red.italic("You Loose!"));
                        process.exit();
                    }
                }
                if (num == 0) {
                    oppo1.fuelDecraese();
                    console.log(chalk.bold.red `(${oppo1.name} fuel is ${oppo1.fuel})`);
                    console.log(chalk.bold.green `(${player1.name} fuel is ${player1.fuel})`);
                    if (oppo1.fuel === 0) {
                        console.log(chalk.bold.red.italic("You Win!"));
                        process.exit();
                    }
                }
            }
            if (ask.options === "Drink") {
                player1.fuelIncraese();
                console.log(chalk.bold.italic.green `(After Drink your Health is ${player1.fuel})`);
            }
            if (ask.options === "Run for Life") {
                console.log(chalk.bold.red.italic("You Loose!"));
                process.exit();
            }
        }
        if (opponent.select === "Zombie") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "options",
                message: "What can you do?",
                choices: ["Attack", "Drink", "Run for Life"]
            });
            if (ask.options === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    player1.fuelDecrease();
                    console.log(chalk.bold.red `(${player1.name} fuel is ${player1.fuel})`);
                    console.log(chalk.bold.green `(${oppo1.name} fuel is ${oppo1.fuel})`);
                    if (player1.fuel === 0) {
                        console.log(chalk.bold.red.italic("You Loose!"));
                        process.exit();
                    }
                }
                if (num == 0) {
                    oppo1.fuelDecraese();
                    console.log(chalk.bold.red `(${oppo1.name} fuel is ${oppo1.fuel})`);
                    console.log(chalk.bold.green `(${player1.name} fuel is ${player1.fuel})`);
                    if (oppo1.fuel === 0) {
                        console.log(chalk.bold.red.italic("You Win!"));
                        process.exit();
                    }
                }
            }
            if (ask.options === "Drink") {
                player1.fuelIncraese();
                console.log(chalk.bold.italic.green `(After Drink your Health is ${player1.fuel})`);
            }
            if (ask.options === "Run for Life") {
                console.log(chalk.bold.red.italic("You Loose!"));
                process.exit();
            }
        }
        if (opponent.select === "Assion") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "options",
                message: "What can you do?",
                choices: ["Attack", "Drink", "Run for Life"]
            });
            if (ask.options === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    player1.fuelDecrease();
                    console.log(chalk.bold.red `(${player1.name} fuel is ${player1.fuel})`);
                    console.log(chalk.bold.green `(${oppo1.name} fuel is ${oppo1.fuel})`);
                    if (player1.fuel === 0) {
                        console.log(chalk.bold.red.italic("You Loose!"));
                        process.exit();
                    }
                }
                if (num == 0) {
                    oppo1.fuelDecraese();
                    console.log(chalk.bold.red `(${oppo1.name} fuel is ${oppo1.fuel})`);
                    console.log(chalk.bold.green `(${player1.name} fuel is ${player1.fuel})`);
                    if (oppo1.fuel === 0) {
                        console.log(chalk.bold.red.italic("You Win!"));
                        process.exit();
                    }
                }
            }
            if (ask.options === "Drink") {
                player1.fuelIncraese();
                console.log(chalk.bold.italic.green `(After Drink your Health is ${player1.fuel})`);
            }
            if (ask.options === "Run for Life") {
                console.log(chalk.bold.red.italic("You Loose!"));
                process.exit();
            }
        }
        if (opponent.select === "Ironman") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "options",
                message: "What can you do?",
                choices: ["Attack", "Drink", "Run for Life"]
            });
            if (ask.options === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    player1.fuelDecrease();
                    console.log(chalk.bold.red `(${player1.name} fuel is ${player1.fuel})`);
                    console.log(chalk.bold.green `(${oppo1.name} fuel is ${oppo1.fuel})`);
                    if (player1.fuel === 0) {
                        console.log(chalk.bold.red.italic("You Loose!"));
                        process.exit();
                    }
                }
                if (num == 0) {
                    oppo1.fuelDecraese();
                    console.log(chalk.bold.red `(${oppo1.name} fuel is ${oppo1.fuel})`);
                    console.log(chalk.bold.green `(${player1.name} fuel is ${player1.fuel})`);
                    if (oppo1.fuel === 0) {
                        console.log(chalk.bold.red.italic("You Win!"));
                        process.exit();
                    }
                }
            }
            if (ask.options === "Drink") {
                player1.fuelIncraese();
                console.log(chalk.bold.italic.green `(After Drink your Health is ${player1.fuel})`);
            }
            if (ask.options === "Run for Life") {
                console.log(chalk.bold.red.italic("You Loose!"));
                process.exit();
            }
        }
    } while (true);
};
export { adventureGame };
