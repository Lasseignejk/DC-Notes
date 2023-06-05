Everything you love about Jest with some new stuff which makes it better

Import/export, typescript support out of the box

    npm vite .
    vanilla JS and TS

# Install vitest

    npm i --save-dev vitest

Add the script for it in the `package.json` file and you're all set! 

If you run that script, it'll actually set up as a `watch`

# Coverage 
If you want to see the coverage on your tests, install this: 

    @vitest/coverage-c8

and add `--coverage` to your script 

# To configure the coverage and other settings
Make a new file called `vite.config.ts` and enter in this code: 

    export default defineConfig({
    test: {
        coverage: {
            reporter: ["text"]
        }
    }
})

`text` is what shows up in the terminal. If you put `html` then run the test, a folder will be created with a whole bunch of stuff. One of them is an `index.html` file and if you open it up, it shows you the report on your tests in the browser.

With `vitest`, you can even test inline, by putting the testing code in the same file as the function, like this: 

    export default function sum(...numbers: number[]) {
        return numbers.reduce((total, number) => total + number, 0)
    }

    import { describe, expect, it } from "vitest";

    describe("#sum", () => {
        it("returns 0 with no numbers", () => {
            expect(sum()).toBe(0);
        });

        it("returns same number with one number", () => {
            expect(sum(2)).toBe(2);
        });

        it("returns sum with multiple numbers", () => {
            expect(sum(1, 2, 3)).toBe(6);
        });
    });

If you do it this way, you have to tell the file that this is testing code. We can do this with an if statement.

    export default function sum(...numbers: number[]) {
        return numbers.reduce((total, number) => total + number, 0)
    }

    if (import.meta.vitest) {
        const { describe, expect, it } = import.meta.vitest

        describe("#sum", () => {
            it("returns 0 with no numbers", () => {
                expect(sum()).toBe(0);
            });

            it("returns same number with one number", () => {
                expect(sum(2)).toBe(2);
            });

            it("returns sum with multiple numbers", () => {
                expect(sum(1, 2, 3)).toBe(6);
            });
        });
    }

This gives us an error because we're working with TS, so in the `tsconfig.json`, we can add this: 

    "types": [
      "vitest/importMeta"
    ]

It STILL won't work because now we don't have a .test file and jest is confused. We need to tell jest that the testing code is now in the `sum.ts` file instead of a dedicated `.test` file. Let's go back to the `vite.config` and update it: 

    import {defineConfig} from "vitest/config"

    export default defineConfig({
        test: {
            includeSource: ["src/**/*.{js,ts}"],
            coverage: {
                reporter: ["text", "html"]
            }
        }
    })

With the source line, it'll check files ending in both js and ts for testing code.

This is great and all, but now when we compile, all that testing code will be included in the production code -- NOT GOOD. So let's edit the `vite.config` one more time

    import {defineConfig} from "vitest/config"

    export default defineConfig({
        define: {
            "import.meta.vitest": "undefined",
        },
        test: {
            includeSource: ["src/**/*.{js,ts}"],
            coverage: {
                reporter: ["text", "html"]
            }
        }
    })

By setting the `import.meta.vitest` to `undefined`, the if statement we wrote in the `sum.ts` file will always be false. In addition, the compiler is smart enough that it can look at that, see it will always be false, and ignore it when it compiles the code. 