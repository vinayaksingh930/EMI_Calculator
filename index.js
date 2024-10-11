const loanInput = document.getElementById("amount");
const interestInput = document.getElementById("interest");
const monthInput = document.getElementById("month");
const resultEMI = document.getElementById("emi");
const loanTypeInput = document.getElementById("loanType");
const generateEmiBtn = document.getElementById("generateEmiBtn"); // Added missing declaration for the button

// Set default loan amounts for each type of loan
const loanAmounts = {
    personal: 25000,
    vehicle: 50000,
    educational: 100000,
};

// Function to update loan amount based on selected loan type
const updateLoanAmount = () => {
    const selectedLoanType = loanTypeInput.value;
    loanInput.value = loanAmounts[selectedLoanType]; // Update loan amount based on type
    emiCalculator(); // Recalculate EMI after updating loan amount
};

// EMI Calculation Function
const emiCalculator = () => {
    const LoanAmount = parseFloat(loanInput.value); // Parse loan amount to float
    const annualInterest = parseFloat(interestInput.value); // Parse interest to float
    const monthsToPay = parseInt(monthInput.value); // Parse months to int
    const monthlyInterest = (annualInterest * 0.01) / 12; // Convert annual interest to monthly

    // EMI calculation formula
    const EMI = (
        (LoanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, monthsToPay)) /
        (Math.pow(1 + monthlyInterest, monthsToPay) - 1)
    ).toFixed(2);

    // Display the calculated EMI
    resultEMI.innerText = EMI;
};

// Event listener for loan type selection to update default parameters
loanTypeInput.addEventListener("change", updateLoanAmount); // Changed 'updateLoanParams' to 'updateLoanAmount'

// Event listener for the "Generate EMI" button
generateEmiBtn.addEventListener("click", emiCalculator);
