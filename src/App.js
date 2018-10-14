import React from 'react';
import './App.css';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const APIKEY = "0bfdbb5c40aa44b13478951b236a0625";

class WeatherApp extends React.Component {

state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
}

getWeather = async (e) => {
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  e.preventDefault();
  const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`);
  const response = await api_call.json();
  console.log(response);
  if(city && country){
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })
  }else{
    this.setState({
      error: "Пожалуйста, введите свой город и страну."
    })
  }
}

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  <Titles />
                </div>
                <div className="col-7 form-container">
                  <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherApp;