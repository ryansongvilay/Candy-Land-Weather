import gingerbreadMan from "../../assets/gingerbread.png";
import Search from "../search/search.js";
import { useNavigate } from "react-router-dom";

const Start = ({ handleOnSearchChange }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="flex-vert">
      <img
        src={gingerbreadMan}
        className="gingerbread-man"
        alt="gingerbread man"
      />
      <p className="dialogue">
        Reporting to you live from Candy Land, it’s the Gingerbread Man! Eager
        to give you today’s weather scoop. Which sweet spot in Candy Land has
        you curious about the forecast?
      </p>
      <div className="search-bar">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <button className="back-button" onClick={onClick}>
        Back to start
      </button>
    </div>
  );
};
export default Start;
