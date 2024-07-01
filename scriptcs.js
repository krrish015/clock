var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

    setInterval(
        function() {
            d= new Date();
            second= d.getSeconds() * 6;
            minute= d.getMinutes() * 6;
            hour= d.getHours() * 30 + Math.round(minute / 12);
            document.getElementById("sec").style.transform = "rotate(" + second + "deg)";
            document.getElementById("min").style.transform = "rotate(" + minute + "deg)";
            document.getElementById("hour").style.transform = "rotate(" + hour + "deg)";
        }, 1000
            
    );

    let hourrot= 30*hhour + hmin/2;
                let minrot= 6*hmin;
                let secrot= 6*hsec;

        hour.style.transform = 'rotate(${hourrot}deg)';
        min.style.transform = 'rotate(${minrot}deg)';
        sec.style.transform = 'rotate(${secrot}deg)';