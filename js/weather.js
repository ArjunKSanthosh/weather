async function button(){
    const inp=document.getElementById("a").value;
    const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=d82dce617113dc86ab2408e76df76adb`)
    console.log(res.status)
    if(res.status==404){
        console.log("City Not Found");
        console.log();
    }
    else{
        const weather= await res.json()
        document.getElementById("name").innerHTML=`${weather.name}`
        document.getElementById("deg1").innerHTML=`${(weather.main.temp-273.15).toString().substring(0,4)} <sup>°C</sup>`
        document.getElementById("main").innerHTML=`${weather.weather[0].main}`
        document.getElementById("im").src=`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
        document.getElementById("t1").innerHTML=`${weather.main.feels_like}`
        document.getElementById("t2").innerHTML=`${weather.weather[0].main}`
        document.getElementById("t3").innerHTML=`${weather.wind.speed}km/h`
        document.getElementById("t4").innerHTML=`${weather.main.humidity}`
        document.getElementById("t5").innerHTML=`${weather.visibility}`
        document.getElementById("t6").innerHTML=`${weather.main.pressure}`

    }
    
}