import "./header.css";
import PetsIcon from "@mui/icons-material/Pets";

function Header() {
  return (
    <div className="header">
      <div></div>
      <img
        src={require("../images/logp2.png")}
        alt="logo"
        className="main-logo"
      />
      <div>
        <PetsIcon color="primary" sx={{ mr: 1 }} />
        (0)
      </div>
    </div>
  );
}

export default Header;
