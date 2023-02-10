const Intern = require('../lib/Intern');

describe('Intern', () => {

    describe('getRole', () => {
        it("When calling 'getRole()' the value of 'Intern' should be returned", () => {
            const intern = new Intern()
            expect(intern.getRole()).toEqual("Intern")
        })
        
    });
});

