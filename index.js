const hr = document.getElementById('hour');
const min = document.getElementById('minute');
const sec = document.getElementById('second');

setInterval(()=>{
    const date = new Date;
    let H = date.getHours();
    let M = date.getMinutes();
    let S = date.getSeconds();
    Hrotation = H*360/12 +((M*360/60)/12);
    Mrotation = (M*6) + (0.1*S);  
    Srotation = S*6;

    hr.style.transform ="rotate(" +Hrotation+"deg)";
    min.style.transform ="rotate(" +Mrotation+"deg)";
    sec.style.transform ="rotate(" +Srotation+"deg)";
},1000)