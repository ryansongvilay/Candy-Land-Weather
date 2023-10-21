import Search from "../search/search.js";
import { useNavigate } from "react-router-dom";

const Weather = ({ data, handleOnSearchChange }) => {
  const navigate = useNavigate();

  const temperature = Math.round((data.main.temp - 273.15) * (9 / 5) + 32);
  const city = data.city.split(",")[0];

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
          <p>City: {city}</p>
          <p>Wind speed: {data.wind.speed} m/s</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>
            Visibility:{" "}
            {data.visibility === 10000 ? "10+" : data.visiblity / 1000} km
          </p>
          <p>Forecast: {data.weather[0].description}</p>
          <p>
            {/* kelvin to fahrenheit */}
            Temperature: {temperature} °F
          </p>
          <p>AQI: {data.aqi}</p>
          <p>
            Gingerbread man says:
            {temperature > 100 &&
              `Woah, ${city} is baking today! Remember to stay hydrated with a refreshing candy juice. Avoid melting out there!`}
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
