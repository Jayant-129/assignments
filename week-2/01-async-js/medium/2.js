let min = 0;
let sec = 0;
let hrs = 11;
let time = "AM";
let timeid = setInterval(() => {
        sec++;
        if(sec === 60){
            min += 1;
            sec = 0;
            if(min === 60){
                hrs += 1;
                min = 0;
                if(hrs === 12){
                    hrs = 0;
                    if(time === "AM"){
                        time = "PM";
                    }
                    else{
                        time = "AM";
                    }
                }
            }
        }
    console.log(`${hrs} : ${min} : ${sec} -> ${time}`);
}, 1);