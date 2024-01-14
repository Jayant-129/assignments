let counter = 0;
const timerId = setInterval(() => {
    counter++;
    console.log(counter);
}, 1000);

setTimeout(() => {
    clearInterval(timerId);
},10000);