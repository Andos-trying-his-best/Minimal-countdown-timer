const sec15 = document.getElementById("sec15");
const sec30 = document.getElementById("sec30");
const sec45 = document.getElementById("sec45");
const start = document.getElementById("start");
const counter = document.getElementById("counter");

let time=15;
sec15.addEventListener("click",()=>{
    counter.textContent = "00:15";
    sec45.style.backgroundColor = "transparent";
    sec30.style.backgroundColor = "transparent";
    sec45.style.transform = "scale(1.00)";
    sec30.style.transform = "scale(1.00)";
    sec15.style.backgroundColor = "rgba(255, 255, 255, 0.11)";
    sec15.style.transform = "scale(1.05)";
    time=15;
})
sec30.addEventListener("click",()=>{
    counter.textContent = "00:30";
    sec15.style.backgroundColor = "transparent";
    sec45.style.backgroundColor = "transparent";
    sec15.style.transform = "scale(1.00)l";
    sec45.style.transform = "scale(1.00)";
    sec30.style.backgroundColor = "rgba(255, 255, 255, 0.11)";
    sec30.style.transform = "scale(1.05)";
    time=30;
})
sec45.addEventListener("click",()=>{
    counter.textContent = "00:45";
    sec15.style.backgroundColor = "transparent";
    sec30.style.backgroundColor = "transparent";
    sec15.style.transform = "scale(1.00)";
    sec30.style.transform = "scale(1.00)";
    sec45.style.backgroundColor = "rgba(255, 255, 255, 0.11)"
    sec45.style.transform = "scale(1.05)";
    time=45;
})

function ticker(time,eventtracker){

        if(time==-1){
        console.log(time + " seconds passed");
        sec30.style.pointerEvents="all";
        sec30.style.opacity = "100%";
        sec45.style.pointerEvents="all";
        sec45.style.opacity = "100%";
        sec15.style.pointerEvents="all";
        sec15.style.opacity = "100%";
        start.style.pointerEvents = "all";
        start.style.opacity = "100%";
        counter.style.opacity = "100%";
        }else{
        setTimeout(() => {
        if(time<=9){
        counter.textContent = "00:0" + time ;
        sec30.style.pointerEvents="none";
        sec30.style.opacity = "50%";
        sec15.style.pointerEvents="none";
        sec15.style.opacity = "50%";
        sec45.style.pointerEvents="none";
        sec45.style.opacity = "50%";
        start.style.pointerEvents = "none";
        start.style.opacity = "50%";
        counter.style.opacity = "50%";
        }else{
        counter.textContent = "00:" + time;
        sec30.style.pointerEvents="none";
        sec30.style.opacity = "50%";
        sec15.style.pointerEvents="none";
        sec15.style.opacity = "50%";
        sec45.style.pointerEvents="none";
        sec45.style.opacity = "50%";
        start.style.pointerEvents = "none";
        start.style.opacity = "50%";
        counter.style.opacity = "50%";
        }
        time--;
        ticker(time);
        }, 1000);
        }

}
start.addEventListener("click",()=>{
    if(time==15||45||30){
    ticker(time);
    }

})