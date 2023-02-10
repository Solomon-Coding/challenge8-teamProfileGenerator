const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe('getRole', () => {
        it("When calling 'getRole()' the value of 'Manager' should be returned", () => {
            const manager = new Manager()
            expect(manager.getRole()).toEqual("Manager")
        })
        
    });
});

