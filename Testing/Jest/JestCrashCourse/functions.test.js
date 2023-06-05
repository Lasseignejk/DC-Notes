const functions = require('./functions')

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initialized...')
const closeDatabase = () => console.log('Database Closed...')

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4)
})

// not toBe
test("Adds 2 + 2 to not equal 5", () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test("should be null", () => {
	expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("should be falsy", () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test("user should be Brad Traversy object", () => {
	expect(functions.createUser()).toEqual({firstName: 'Brad', lastName: 'Traversy'});
});

//less than/greater than
test("should be under 1600", () => {
	const load1 = 800
    const load2 = 700
    expect(load1 + load2).toBeLessThan(1600)
});

// Regex -- toMatch
test("There is no 'I' in team", () => {
    expect("team").not.toMatch(/I/)
})

// Arrays -- toContain
test("Admin should be in usernames", () => {
    let usernames = ["John", "Karen", "Admin"]
    expect(usernames).toContain("Admin")
})

// Working with async data

// Promise
// test("User fetched name should be Leanne Graham", () => {
//     expect.assertions(1)
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual("Leanne Graham1")
//     })
// })

// Async Await
test("User fetched name should be Leanne Graham", async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual("Leanne Graham");
});