import React, {useState, useEffect} from 'react';
import axios from "axios";
import dayjs from "dayjs";
import {CurrentData} from '../../Types/types'
import { FiveDataProps } from '../../Types/types';
import StyledWeather from './Weather.styles';


const Search = () => {

  // State for maintaining city information

  const [inputCity, setInputCity] = useState("");

  // State for resulting current weather data

  const [data, setData] = useState<CurrentData>(Object);

  // State for resulting Next Five Days weather data

  const [fivedata, setFiveData] = useState<FiveDataProps>(Object);


  // api key for getting api results

  const apiKey = "32ba0bfed592484379e51106cef3f204";


  // Array for getting day by using time

  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  // Api call for getting current weather report

  const getCurrentWetherDetails = (cityName : string) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }


  const handleChangeInput = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputCity(e.target.value)
  }

  // Calling Api function for current weather data

  const handleSearch = () => {
    getCurrentWetherDetails(inputCity)
    setInputCity("")
  }


  // Api for getting Next 5 days data

  const getFivedaysWetherDetails = (cityName : string) => {
    if (!cityName) return
    const apiURLData = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${inputCity}&cnt=6&appid=34480b98aa332da53123a0ac63a4ea9d`
    axios.get(apiURLData).then((res) => {
      setFiveData(res.data)  
      }).catch((err) => {
      console.log("err", err)
    })
  }

  // Calling Api function for Next 5 days weather data
  useEffect(() => {
    return () => {
      getFivedaysWetherDetails(inputCity)
    };
  })

  const enterKeyPressed = (e: { keyCode: number; target: { value: string; }; }) => {
    if (e.keyCode === 13) {
      getCurrentWetherDetails(e.target.value)
      setInputCity("")
    }
  };

  return (
    <StyledWeather  data-testid="search">
    <div className="overlay">
    <h1>Weather Forecasting App</h1>
    <div className='header'>
    <div className='search-container'>
            <input type="text" 
            data-testid="search-input"
            onKeyDown={enterKeyPressed}
            placeholder={"  Enter Search City"}
            value={inputCity}
            onChange={handleChangeInput}
            className='search-input'></input>
            <button className='search-button' data-testid="search-button" onClick={handleSearch}>search</button>
    </div>
    </div>
    <div>
        { Object.keys(data).length > 0 && 
        <div className='container'>
        <div className='section section__temperature'>
        <div className="icon">
                <h1>{`${data.name}, ${data.sys.country}`}</h1>
                <img className="image-icon"src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weatherIcon" />
                <h2>{data.weather[0].description}</h2>
        </div>
        <div className="temperature">
                <h1>{`${Math.round(data.main.temp - 273.15)}°${
                  "C"
                }`}</h1>
                <h2>{WEEKDAYS[dayjs.unix(data.dt).day()]}</h2>
        </div>
        </div>
        <div className='bottom-container' data-testid="current-data">
            <div className='inside-container'>
                <div className='title'>Humidity</div>
                <img className="inside-icon" src='/Images/humidity.png' alt='icon'></img>
                <div className='title-content'>{data.main.humidity}</div>
                </div>
                <div className='inside-container'>
                <div className='title'>Pressure</div>
                <img className="inside-icon" src='/Images/pressure.png' alt='icon'></img>
                <div className='title-content'>{data.main.pressure}</div>
                </div>
                <div className='inside-container'>
                <div className='title'>Temperature</div>
                <img className="inside-icon" src='/Images/temp.png' alt='icon'></img>
                <div className='min-temp'>Min:{Math.round(data.main.temp_min - 273.15)}°C Max: {Math.round(data.main.temp_min - 273.15)}°C</div>
                </div>            
                <div className='inside-container'>
                <div className='title'>Wind</div>
                <img className="inside-icon" src='/Images/wind.png' alt='icon'></img>
                <div className='title-content'>{data.wind.speed}</div>
                </div>        
                </div>
        </div>
    }
    </div>{  Object.keys(data).length > 0 &&
    Object.keys(fivedata).length > 0 && 
    <>
    <div className='section-five-day'>
    <div className='five-day-header'>Next Five days Weather</div></div>
    <><div className='five-day-container'>{fivedata.list.slice(1,6).map((item) => 
     <div className='inside-five-container'>
        <span className='card-content-title'>{WEEKDAYS[dayjs.unix(item.dt).day()]}</span>
        <img className="day-icon"  alt="weather-icon"
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
        <span className="day-temp">{Math.round(item.temp.day - 273.15)}°C</span>
        <div className='card-content'>{item.weather[0].description}</div>
     </div> 
     )
        }
        </div>
        </>
    </>
    }
    </div>
    </StyledWeather>
  )
}

export default Search;


