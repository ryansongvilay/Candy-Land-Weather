import Search from "../search/search.js";
import { useNavigate } from "react-router-dom";

const Weather = ({ data, handleOnSearchChange }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="flex-vert" style={{ marginTop: "5%" }}>
      <div className="search-bar">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      {data && (
        <div>
          <p>City: {data.city.split(",")[0]}</p>
          <p>Wind speed: {data.wind.speed} m/s</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>
            Visibility:{" "}
            {data.visibility === 10000 ? "10+" : data.visiblity / 1000} km
          </p>
          <p>Forecast: {data.weather[0].description}</p>
          <p>
            {/* kelvin to fahrenheit */}
            Temperature: {Math.round(
              (data.main.temp - 273.15) * (9 / 5) + 32
            )}{" "}
            °F
          </p>
          <p>AQI: {data.aqi}</p>
          <p className="weather-text">
            Gingerbread man says:{" "}
            {Math.round((data.main.temp - 273.15) * (9 / 5) + 32) > 100 &&
              `Woah, ${
                data.city.split(",")[0]
              } is baking today! Remember to stay hydrated with a refreshing candy juice. Avoid melting out there!`}
            {Math.round((data.main.temp - 273.15) * (9 / 5) + 32) <= 100 &&
              Math.round((data.main.temp - 273.15) * (9 / 5) + 32) > 85 &&
              `It’s warming up in ${
                data.city.split(",")[0]
              }! Perfect weather to bask under the gumdrop trees. Don’t forget your sun hat!`}
            {Math.round((data.main.temp - 273.15) * (9 / 5) + 32) <= 85 &&
              Math.round((data.main.temp - 273.15) * (9 / 5) + 32) > 65 &&
              `A pleasant day in ${
                data.city.split(",")[0]
              } with mild temperatures. A great day for a stroll along the candy cane lane!`}
            {Math.round((data.main.temp - 273.15) * (9 / 5) + 32) <= 65 &&
              Math.round((data.main.temp - 273.15) * (9 / 5) + 32) > 32 &&
              `It’s a chilly day in ${
                data.city.split(",")[0]
              }, with temperatures that might have you reaching for warm cocoa. Stay cozy!`}
            {Math.round((data.main.temp - 273.15) * (9 / 5) + 32) <= 32 &&
              `Brrr! ${
                data.city.split(",")[0]
              } is frosting over here with a temperature below freezing. Bundle up in your sweetest scarf and mittens!`}
            {data.weather.main &&
              data.weather.main.toLowerCase().includes("rain") &&
              "However, expect some syrupy rain. If you’re venturing out, don’t forget your candy cane umbrella!"}
            {data.weather.main &&
              data.weather.main.toLowerCase().includes("storm") &&
              "But watch out! There’s a storm brewing. Best to find shelter and wait it out."}
            {data.weather.main &&
              data.weather.main.toLowerCase().includes("hail") &&
              "And be cautious! The sky is dropping icy surprises with a hailstorm. Better to stay indoors."}
            {data.weather.main &&
              data.weather.main.toLowerCase().includes("clear") &&
              "And the skies? As clear as a freshly unwrapped lollipop. Enjoy."}
            {data.weather.main &&
              data.weather.main.toLowerCase().includes("fog") &&
              "But visibility is a tad sticky with thick fog. Travel with caution on those candy roads."}
          </p>
        </div>
      )}
      <button className="back-button" onClick={onClick}>
        Back to start
      </button>
    </div>
  );
};
export default Weather;
