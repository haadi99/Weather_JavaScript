const loadData = search =>{
    const api_key = '3c94ab10ed978c76e40942c28094d60b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = data =>{
    document.getElementById("city").innerText= data.name;
    document.getElementById("temp").innerText=data.main.temp;
    const img = document.getElementById("img");
    if(data.weather[0].main==='Clear'){
        document.body.style.backgroundImage = "url('images/rsz_clear-sky.jpg')";
    }
    else if(data.weather[0].main==='Haze'){
        document.body.style.backgroundImage = "url('images/rsz_haze.jpg')";
    }
    else{
        document.body.style.backgroundImage = "url('images/rsz_1cloudy.jpg')";
    }
    document.getElementById("weather").innerText=data.weather[0].main;
    console.log(data.weather[0].main);
}
document.getElementById("searchField").addEventListener("keyup", function(event){
    console.log(event.key);
    if(event.key==="Enter"){
        
        const search= document.getElementById("searchField").value;
        console.log(search);
        loadData(search);
    }
});

document.getElementById("btn").addEventListener("click",function(){
    const search= document.getElementById("searchField").value;
    loadData(search);
})

