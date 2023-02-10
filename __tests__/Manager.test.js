const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe("Initialization", () => {
        it("Sets the class properties", () => {
            const manager = new Manager("name","id","email","officeNumber");
            expect(manager.officeNumber).toEqual("officeNumber");
        })
        
    });

    describe('getName', () => {
        it("When calling 'getName()' the value of 'name' should be returned", () => {
            const manager = new Manager("name","id","email","officeNumber");
            expect(manager.getName()).toEqual("name");
        })
        
    });

    describe('getId', () => {
        it("When calling 'getId()' the value of 'id' should be returned", () => {
            const manager = new Manager("name","id","email","officeNumber");
            expect(manager.getId()).toEqual("id");
        })
        
    });

    describe('getEmail', () => {
        it("When calling 'getEmail()' the value of 'email' should be returned", () => {
            const manager = new Manager("name","id","email","officeNumber");
            expect(manager.getEmail()).toEqual("email");
        })
        
    });

    describe('getRole', () => {
        it("When calling 'getRole()' the value of 'Manager' should be returned", () => {
            const manager = new Manager("name","id","email","officeNumber");
            expect(manager.getRole()).toEqual("Manager");
        })
        
    });
});



