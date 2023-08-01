# Expect(value)

test async stuff, is the promise coming back fulfilled 
test if the call fails 
mimic a promise and reject it -- what should happen? it should alert, it should return an error 

if a person submits a form, what should the response be
what would happen if you had invalid fields? blank required fields 

## Modifiers
- .not

`.not` lets you test the opposite. 

    test('the best flavor is not coconut', () => {
        expect(bestLaCroixFlavor()).not.toBe('coconut')
    })

- .resolves

`.resolves` unwraps the value of a fulfilled promise so other matchers can be chained. If the promise is rejected, the assertion fails. For example, this code tests that the promise resolves and that the resulting value is 'lemon'

    test('resolves to lemon', () => {
        // make sure to add a return statement
        return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
    })

You can also use `async/await` with `.resolves`

    test('resolves to lemon', async () => {
        await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
        await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus')
    })

- .rejects

`.rejects` does the same thing as `.resolves` but unwraps the value of a rejected promise. For example, this code tests that the promise rejects with reason 'octopus'

    test('rejects to octopus', () => {
        // make sure to add a return statement
        return expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus')
    })


## Matchers

### .toHaveProperty(keyPath, value?)
Use to check if property at provided reference `keyPath` exiss for an object. For checking deeply nested properties in an object you may use dot notation or an array containing the keyPath for deep references. 

    const houseForSale = {
        bath: true,
        bedrooms: 4,
        kitchen: {
            amenities: ['oven', 'stove', 'washer'],
            area: 20,
            wallColor: 'white',
            'nice.oven': true,
        }
    }

    test('this house has my desired features', () => {
        expect(houseForSale).toHaveProperty('bath');
        expect(houseForSale).toHaveProperty('bedrooms', 4)
        expec(houseForSale).not.toHaveProperty('pool')

        expect(houseForSale).toHaveProperty('kitchen.area', 20)
        expect(houseForSale).toHaveProperty('kitchen.amenities', [
            'oven',
            'stove',
            'washer'
        ])
    })

## Testing async Code 
### Promises
Return a promise from your test and Jest will wait for that promise to resolve. For example, let's say that `fetchData` returns a promise that is supposed to resolve to the string `peanut butter`. 

    test('the data is peanut butter', () => {
        return fetchData().then(data => {
            expect(data).toBe('peanut butter')
        })
    })

### Async/Await
To write an async test, use the `async` keyword in front of the function passed to test. 

    test('the data is peanut butter', async () => {
        const data = await fetchData();
        expect(data).toBe('peanut butter)
    })

    test('the fetch fails with an error', async () => {
        expect.assertions(1);
        try {
            await fetchData()
        } catch (e) {
            expect(e).toMatch('error')
        }
    })