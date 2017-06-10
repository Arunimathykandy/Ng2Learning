interface PromiseResult {
    id: number,
    name: string,
    reason?: string
}

function doHeavyWork(input: number): Promise<PromiseResult> {
    let promise = new Promise<PromiseResult>(
        (resolve, reject) => {
            setTimeout(() => {
                if (!input) {
                    reject({
                        reason: 'Invalid Input Specified!'
                    });
                } else {
                    resolve({
                        id: input + input,
                        name: 'doHeavyWork'
                    });
                }
            }, 5000);
        });

    return promise;
}

function doHeavyWork2(input: number): Promise<PromiseResult> {
    let promise = new Promise<PromiseResult>(
        (resolve, reject) => {
            setTimeout(() => {
                if (!input) {
                    reject({
                        reason: 'Invalid Input Specified!'
                    });
                } else {
                    resolve({
                        id: input + input,
                        name: 'doHeavyWork2'
                    });
                }
            }, 5000);
        });

    return promise;
}

async function process(input: number) {
    let heavyWork1Result = await doHeavyWork(input);
    let heavyWork2Result = await doHeavyWork2(input);

    console.log(JSON.stringify(heavyWork1Result) + ', ' +
        JSON.stringify(heavyWork2Result));
}

// process(10);

// async enables JS runtime to call the function async.
// await waits current promise to be resolved.
async function processAsync(input: number) {
    try {
        let results = await Promise.all(
            [doHeavyWork(input),
            doHeavyWork2(input)]);

        console.log(results);
    } catch (error) {
        console.log('Error : ' + JSON.stringify(error));
    }
}

processAsync(10);

console.log('Continuing to work with other instructions ...');