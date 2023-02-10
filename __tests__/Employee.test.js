const Employee = require('../lib/Employee');

describe('Employee', () => {

    describe("Initialization", () => {
        // Positive test
        it("should create an object with a 'todos' property set to an empty array when called with the 'new' keyword", () => {
          // Arrange
          const employee = new Employee("bob",1,"email")
    
          // Assert
          expect(employee.name).toEqual("bob"));
        });

    describe('getRole', () => {
        it("When calling 'getRole()' the value of 'Employee' should be returned", () => {
            const employee = new Employee()
            expect(employee.getRole()).toEqual("Employee")
        })
        
    });
});

