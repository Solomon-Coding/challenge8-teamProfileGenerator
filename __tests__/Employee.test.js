const Employee = require('../lib/Employee');

describe('Employee', () => {

    // const employee = new Employee("bob",1,"email")
    
    // // Assert
    // expect(employee.name).toEqual("bob"));

    describe('getRole', () => {
        it("When calling 'getRole()' the value of 'Employee' should be returned", () => {
            const employee = new Employee()
            expect(employee.getRole()).toEqual("Employee")
        })
        
    });
});

