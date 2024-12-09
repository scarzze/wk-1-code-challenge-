const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Gross 
    const grossSalary = basicSalary + benefits;

    // NSSF
    const nssf = Math.min(grossSalary * 0.06, 1080); 

    // Taxable Income
    const taxableIncome = grossSalary - nssf;

    // PAYE
    let paye = 0;
    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1; 
    } else if (taxableIncome <= 32333) {
        paye = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
    } else {
        paye = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.3);
    }

    // NHIF
    let nhif = 0;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
    else nhif = 1700; 

    // Total Deductions and Net Salary
    const totalDeductions = nssf + paye + nhif;
    const netSalary = grossSalary - totalDeductions;

    // Return Results
    return {
        grossSalary: grossSalary.toFixed(2),
        nssf: nssf.toFixed(2),
        paye: paye.toFixed(2),
        nhif: nhif.toFixed(2),
        totalDeductions: totalDeductions.toFixed(2),
        netSalary: netSalary.toFixed(2),
    };
}

rl.question("Enter your basic salary: ", (basicSalaryInput) => {
rl.question("Enter your benefits: ", (benefitsInput) => {
  const basicSalary = parseFloat(basicSalaryInput);
  const benefits = parseFloat(benefitsInput);

  if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log("Please enter valid numbers for both fields.");
  } else {
            const results = calculateNetSalary(basicSalary, benefits);

// Display Results
console.log("\n--- Salary Breakdown ---");
console.log(`Gross Salary: KES ${results.grossSalary}`);
console.log(`NSSF Deduction: KES ${results.nssf}`);
console.log(`PAYE (Tax): KES ${results.paye}`);
console.log(`NHIF Deduction: KES ${results.nhif}`);
console.log(`Total Deductions: KES ${results.totalDeductions}`);
console.log(`Net Salary: KES ${results.netSalary}`);
  }

  rl.close();
});
});
