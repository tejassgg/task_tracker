import Button from "./Button";
import { useLocation } from "react-router-dom";
// const Header = (props) => {
//     return (
//     <header>
//         {/* <h1>Task Tracker</h1> */}
//         <h1>{props.title}</h1>
//     </header>
//     )
// }

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "Red" : "Green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
