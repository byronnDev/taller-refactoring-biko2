function EmployeeManager() {
  let employees = [];

  function addEmployee(employee) {
    employees.push(employee);
  }

  function calculateSalary(employee) {
    let baseSalary = employee.baseSalary;

    let yearsOfService = employee.yearsOfService;
    let performanceRating = employee.performanceRating;
    let bonusPercentage = determineBonusPercentage(
      yearsOfService,
      performanceRating
    );
    let bonus = baseSalary * bonusPercentage;

    let totalSalary = baseSalary + bonus;
    return totalSalary;
  }

  return {
    addEmployee,
    calculateSalary,
  };
}

const employeeManager = EmployeeManager();
employeeManager.addEmployee({
  baseSalary: 50000,
  yearsOfService: 6,
  performanceRating: 5,
});
const totalSalary = employeeManager.calculateSalary(employees[0]);
console.log(`Total Salary: ${totalSalary}`);
