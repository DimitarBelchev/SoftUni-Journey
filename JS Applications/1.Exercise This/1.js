class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(username, salary, position, department) {
        if (!isValid(username) || !isValid(salary) || !isValid(position) || !isValid(department) || salary < 0) {
            throw new Error("Invalid input!");
        }
        let obj = this.departments.find(obj => obj.name === department);
        if (obj === undefined) {
            obj = {
                name: department,
                employees: [],
                avrSalary: function () {
                    return this.employees.reduce((totalSalary, employee) => {
                        return totalSalary + employee.salary
                    }, 0) / this.employees.length;
                }
            };
            this.departments.push(obj);
        }
        obj.employees.push({ username, salary, position });

        return `New employee is hired. Name: ${username}. Position: ${position}`;
        function isValid(param) {
            if (param === '' || param === undefined || param === null) {
                return false;
            }
            return true;
        }
    }
    bestDepartment() {
        let bestDepartment = this.departments.sort((a, b) => a.avrSalary() - b.avrSalary()).pop();
        let result = '';
        result += `Best Department is: ${bestDepartment.name}\n`;
        result += `Average salary: ${bestDepartment.avrSalary().toFixed(2)}\n`;
        result += bestDepartment.employees
            .sort((a, b) => a.username.localeCompare(b.username))
            .sort((a, b) => b.salary - a.salary)
            .map(obj => Object.values(obj).join(' '))
            .join('\n');
        return result
    }
}