import inquirer from 'inquirer';
const BMI = async () => {
    // Function to calculate BMI
    function calculateBMI(weight, height) {
        // BMI Formula: weight (kg) / (height (m) * height (m))
        return weight / (height * height);
    }
    // Function to interpret BMI category
    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return 'Underweight';
        }
        else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        }
        else if (bmi >= 24.9 && bmi < 29.9) {
            return 'Overweight';
        }
        else {
            return 'Obesity';
        }
    }
    // Function to start the BMI calculator
    async function startBMI() {
        const questions = await inquirer.prompt([
            {
                type: 'number',
                name: 'weight',
                message: 'Enter your weight in kilograms:'
            },
            {
                type: 'number',
                name: 'height',
                message: 'Enter your height in meters:'
            }
        ]);
        try {
            const answers = await inquirer.prompt(questions);
            const { weight, height } = answers;
            const bmi = calculateBMI(weight, height);
            const category = getBMICategory(bmi);
            console.log(`Your BMI is: ${bmi.toFixed(2)}`);
            console.log(`You are in the category of: ${category}`);
        }
        catch (error) {
            console.error('An error occurred:', error);
        }
    }
    // Start the BMI calculator
    startBMI();
};
export { BMI };
