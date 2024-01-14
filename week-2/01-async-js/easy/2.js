let n = 50;
let counter = 0;
function time(){
    return new Promise((resolve, reject) => {
        (setTimeout(() => {
            counter++;
            resolve(counter);
        },1000));
    });
}
async function count(){
    for(let i = 1; i <= 50; i++){
        let res = await time();
        console.log(res);
    }
}
count();