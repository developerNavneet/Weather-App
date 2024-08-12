function getData()
{
    const city = search.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
     .then(Response => Response.json())
     .then(res => {
        console.log(res);
        temp.innerHTML = res.temp;
        ws.innerHTML = res.wind_speed;
        hmdty.innerHTML = res.humidity;

     })
     .catch(err => console.log(err));
    
    
}
