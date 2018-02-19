import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "---------------";

class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    //without await, api_call receives a promise. Witht await keyword, it returns the fetch result.
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
  }

  render(){
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App;
