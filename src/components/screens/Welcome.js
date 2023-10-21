import gingerbreadMan from "../../assets/gingerbread.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/start");
  };

  return (
    <div className="flex-vert">
      <img
        src={gingerbreadMan}
        className="gingerbread-man"
        alt="gingerbread man"
      />
      <button className="start-button" onClick={onClick}>
        Start
      </button>
    </div>
  );
};
export default Welcome;
