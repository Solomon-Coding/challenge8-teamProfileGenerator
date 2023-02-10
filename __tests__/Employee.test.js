const Employee = require('../lib/Employee');

describe('Employee', () => {

    describe("Initialization", () => {
        it("Sets the class properties", () => {
            const employee = new Employee("name","id","email");
            expect(employee.name).toEqual("name");
            expect(employee.id).toEqual("id");
            expect(employee.email).toEqual("email");
        })
        
    });

    describe('getName', () => {
        it("When calling 'getName()' the value of 'name' should be returned", () => {
            const employee = new Employee("name","id","email");
            expect(employee.getName()).toEqual("name");
        })
        
    });

    describe('getId', () => {
        it("When calling 'getId()' the value of 'id' should be returned", () => {
            const employee = new Employee("name","id","email");
            expect(employee.getId()).toEqual("id");
        })
        
    });

    describe('getEmail', () => {
        it("When calling 'getEmail()' the value of 'email' should be returned", () => {
            const employee = new Employee("name","id","email");
            expect(employee.getEmail()).toEqual("email");
        })
        
    });

    describe('getRole', () => {
        it("When calling 'getRole()' the value of 'Employee' should be returned", () => {
            const employee = new Employee("name","id","email");
            expect(employee.getRole()).toEqual("Employee");
        })
        
    });
});

