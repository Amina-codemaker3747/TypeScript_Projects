#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { ATM } from "./atm.js";
import { adventureGame } from "./adventure.js";
import { TODOS } from "./todo.js";
import { wordCounter } from "./wordCounter.js";
import { countTimer } from "./timer.js";
import { stdManagement } from "./std.js";
// Main menu
const mainMenu = async () => {
    const { choose } = await inquirer.prompt({
        type: 'list',
        name: 'choose',
        message: 'Select a game to play:',
        choices: ['Adventure Game', 'ATM', 'TODO List', 'CountDown Timer', 'Word Counter', 'Stuent Management System', 'Quit']
    });
    switch (choose) {
        case 'Adventure Game':
            await adventureGame();
            break;
        case 'ATM':
            await ATM();
            break;
        case 'TODO List':
            await TODOS();
            break;
        case 'CountDown Timer':
            await countTimer();
            break;
        case 'Word Counter':
            await wordCounter();
            break;
        case 'Student Management System':
            await stdManagement();
            break;
        case 'Quit':
            console.log(chalk.bgCyanBright.redBright.italic('Goodbye!'));
            process.exit(0);
    }
};
// Start the main menu
mainMenu();
