/**
 * Ways of creating Promises
 */

const flatResolved = Promise.resolve('flat resolved value');
const flatRejected = Promise.reject('flat rejected value');

const promiseSyncResolved = new Promise((resolve, reject) => {
    resolve('resolved with sync value');
});

const promiseAsyncResolved = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved with async value after 500ms');
    }, 500);
});

const promiseSyncRejected = new Promise((resolve, reject) => {
    reject('rejected with sync value');
});

const promiseAsyncRejected = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('rejected with async value after 500ms');
    }, 500);
});


/**
 * Even if Promise was created with sync resolving, it will be async:
 */
console.log('Before run sync promises');

flatResolved.then((value) => console.log(value), (value) => console.error('*error*', value));
flatRejected.then((value) => console.log(value), (value) => console.error('*error*', value));

promiseSyncResolved.then((value) => console.log(value), (value) => console.error('*error*', value));
promiseAsyncResolved.then((value) => console.log(value), (value) => console.error('*error*', value));

promiseSyncRejected.then((value) => console.log(value), (value) => console.error('*error*', value));
promiseAsyncRejected.then((value) => console.log(value), (value) => console.error('*error*', value));

console.log('Declared after promises, but will be logged before every of it resolved');

/**
 * Promise.resolve().then will return another promise
 */

flatResolved
    .then((value) => {console.log(value); return 1}, (value) => console.error('*error*', value))
    .then((value) => {console.log(value); return value*10}, (value) => console.error('*error*', value))
    .then((value) => {console.log(value)}, (value) => console.error('*error*', value))
    .then((value) => {throw('some error')}, (value) => console.error('*error*', value))
    .then((value) => console.log(value), (value) => console.error('*error*', value));
