import React from "react";
import axios from "axios";
import {Puff} from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
  }

  let apiKey = "eae061c95483dd066657bfc7525418ed";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <Puff
  visible={true}
  height="80"
  width="80"
  color="blue"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  );
}
