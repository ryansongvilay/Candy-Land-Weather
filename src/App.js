import "./App.css";
import { useState } from "react";
import { WEATHER_API_URL } from "./api";
import { WEATHER_API_KEY } from "./apiKey";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/screens/Welcome.js";
import Start from "./components/screens/Start";
import Weather from "./components/screens/Weather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = async (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    try {
      const response = await fetch(
        `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
      );
      const result = await response.json();
      const response_aqi = await fetch(
        `${WEATHER_API_URL}/air_pollution?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
      );
      const result_aqi = await response_aqi.json();
      // console.log(result_aqi);
      setCurrentWeather({
        city: searchData.label,
        aqi: result_aqi.list[0].main.aqi,
        ...result,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/start"
            element={<Start handleOnSearchChange={handleOnSearchChange} />}
          />
          <Route
            path="/weather"
            element={
              <Weather
                data={currentWeather}
                handleOnSearchChange={handleOnSearchChange}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
