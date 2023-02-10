const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    describe('getRole', () => {
        it("When calling 'getRole()' the value of 'Engineer' should be returned", () => {
            const engineer = new Engineer()
            expect(engineer.getRole()).toEqual("Engineer")
        })
        
    });
});

