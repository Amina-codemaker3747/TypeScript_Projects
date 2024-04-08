import inquirer from "inquirer";
const countTimer = async () => {
    let num = await inquirer.prompt({
        type: "number",
        name: "User",
        message: "Enter Your Amount"
    });
    const countDown = (second) => {
        const interval = setInterval(() => {
            console.log(`${second} Remaining seconds!`);
            second--;
            if (second < 0) {
                clearInterval(interval);
                console.log("CountDown Finished!");
            }
        }, 1000);
    };
    countDown(num.User);
};
export { countTimer };
