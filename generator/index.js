const writeCode = (developer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${developer} has written code`);
        }, 1000);
    });
};

const debugCode = (developer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${developer} has debugged code`);
        }, 1000);
    });
};

const testCode = (developer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${developer} has tested code`);
        }, 1000);
    });
};

const deployedCode = (developer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${developer} has deployed code`);
        }, 1000);
    });
};

const finishedJob = (developer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${developer} has finished job`);
        }, 1000);
    });
};

async function* solution(developer) {
    yield await writeCode(developer);
    yield await debugCode(developer);
    yield await testCode(developer);
    yield await deployedCode(developer);
    yield await finishedJob(developer);
}

const gen = solution('Khokon');

//===== manually 
// gen.next().then(({ value }) => console.log(value));


//====== all promises
const promises = [gen.next(), gen.next(), gen.next(), gen.next(), gen.next()];
(async function() {
    for await (let p of promises) {
        console.log(` ${p.value}`)
    }
})();