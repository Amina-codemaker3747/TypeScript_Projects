import inquirer from "inquirer";
const wordCounter = async () => {
    const answers = await inquirer.prompt([{
            type: "input",
            name: "Sentence",
            message: "Write your Sentence to Count words in your sentence",
        }]);
    const words = answers.Sentence.split("");
    console.log(`${words.length} => Words in your Sentence: ${answers.Sentence}`);
};
export { wordCounter };
