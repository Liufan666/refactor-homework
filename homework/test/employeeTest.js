const employeeTest = require('ava');
const { Employee } = require('../src/employee');

employeeTest('type is manager', t => {
    let employee = new Employee('kevin', 'manager');
    const result = employee.toString();
    t.is(result, 'kevin (manager)');
})

employeeTest('type is engineer', t => {
    let employee = new Employee('kevin', 'engineer');
    const result = employee.toString();
    t.is(result, 'kevin (engineer)');
})