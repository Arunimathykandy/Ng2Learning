var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function doHeavyWork(input) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!input) {
                reject({
                    reason: 'Invalid Input Specified!'
                });
            }
            else {
                resolve({
                    id: input + input,
                    name: 'doHeavyWork'
                });
            }
        }, 5000);
    });
    return promise;
}
function doHeavyWork2(input) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!input) {
                reject({
                    reason: 'Invalid Input Specified!'
                });
            }
            else {
                resolve({
                    id: input + input,
                    name: 'doHeavyWork2'
                });
            }
        }, 5000);
    });
    return promise;
}
function process(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let heavyWork1Result = yield doHeavyWork(input);
        let heavyWork2Result = yield doHeavyWork2(input);
        console.log(JSON.stringify(heavyWork1Result) + ', ' +
            JSON.stringify(heavyWork2Result));
    });
}
// process(10);
// async enables JS runtime to call the function async.
// await waits current promise to be resolved.
function processAsync(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let results = yield Promise.all([doHeavyWork(input),
                doHeavyWork2(input)]);
            console.log(results);
        }
        catch (error) {
            console.log('Error : ' + JSON.stringify(error));
        }
    });
}
processAsync(10);
console.log('Continuing to work with other instructions ...');
