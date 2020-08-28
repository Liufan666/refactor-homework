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

employeeTest('type is salesman', t => {
    let employee = new Employee('kevin', 'salesman');
    const result = employee.toString();
    t.is(result, 'kevin (salesman)');
})

employeeTest('type is test', t => {
    try {
        let employee = new Employee('kevin', 'test');
        employee.toString();
        t.fail();
    }
    catch (e) {
        t.is(e.message, 'Employee cannot be of type test');
    }
})