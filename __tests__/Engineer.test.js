const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    describe("Initialization", () => {
        it("Sets the class properties", () => {
            const engineer = new Engineer("name","id","email","github");
            expect(engineer.github).toEqual("github");
        })
        
    });

    describe('getName', () => {
        it("When calling 'getName()' the value of 'name' should be returned", () => {
            const engineer = new Engineer("name","id","email","github");
            expect(engineer.getName()).toEqual("name");
        })
        
    });

    describe('getId', () => {
        it("When calling 'getId()' the value of 'id' should be returned", () => {
            const engineer = new Engineer("name","id","email","github");
            expect(engineer.getId()).toEqual("id");
        })
        
    });

    describe('getEmail', () => {
        it("When calling 'getEmail()' the value of 'email' should be returned", () => {
            const engineer = new Engineer("name","id","email","github");
            expect(engineer.getEmail()).toEqual("email");
        })
        
    });

    describe('getGitHub', () => {
        it("When calling 'getGitHub()' the value of 'github' should be returned", () => {
            const engineer = new Engineer("name","id","email","github");
            expect(engineer.getGitHub()).toEqual("github");
        })
        
    });

    describe('getRole', () => {
        it("When calling 'getRole()' the value of 'Engineer' should be returned", () => {
            const engineer = new Engineer("name","id","email","github");
            expect(engineer.getRole()).toEqual("Engineer");
        })
        
    });
});

