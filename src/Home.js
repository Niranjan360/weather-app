import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {

    let {search} = useParams();
    let [weather , setWeather] = useState(null);
    let [date , setDate] = useState(null);

    useEffect(()=>{

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=67b76b5ef5e130bc5cc9fd1d410cc962`)
        .then((res)=>{return res.json()})
        .then((result)=>{ setWeather(result) })

        setDate(new Date())

    } , [weather]);

    return ( 
        <div className="home-content">

            {weather && <div>

            <h1>Date : {date.toDateString()}</h1>

            <h1>Time : {date.toLocaleTimeString()}</h1>


            <h1>The temperature in searched place is {weather.main.temp-273.15} degree celsius </h1>


            </div>}

            

        </div>
    );
}

export default Home;