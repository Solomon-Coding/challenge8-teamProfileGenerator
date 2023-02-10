const Intern = require('../lib/Intern');

describe('Intern', () => {

    describe("Initialization", () => {
        it("Sets the class properties", () => {
            const intern = new Intern("name","id","email","school");
            expect(intern.school).toEqual("school");
        })
        
    });

    describe('getName', () => {
        it("When calling 'getName()' the value of 'name' should be returned", () => {
            const intern = new Intern("name","id","email","school");
            expect(intern.getName()).toEqual("name");
        })
        
    });

    describe('getId', () => {
        it("When calling 'getId()' the value of 'id' should be returned", () => {
            const intern = new Intern("name","id","email","school");
            expect(intern.getId()).toEqual("id");
        })
        
    });

    describe('getEmail', () => {
        it("When calling 'getEmail()' the value of 'email' should be returned", () => {
            const intern = new Intern("name","id","email","school");
            expect(intern.getEmail()).toEqual("email");
        })
        
    });

    describe('getSchool', () => {
        it("When calling 'getSchool()' the value of 'school' should be returned", () => {
            const intern = new Intern("name","id","email","school");
            expect(intern.getSchool()).toEqual("school");
        })
        
    });

    describe('getRole', () => {
        it("When calling 'getRole()' the value of 'Intern' should be returned", () => {
            const intern = new Intern("name","id","email","school");
            expect(intern.getRole()).toEqual("Intern");
        })
        
    });
});



