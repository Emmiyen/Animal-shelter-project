import "./header.css";
import PetsIcon from "@mui/icons-material/Pets";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="header">
      <div></div>
      <img
        src={require("../images/logp2.png")}
        alt="logo"
        className="main-logo"
      />
      <div>
        <Link to="/cart">
          <PetsIcon color="primary" sx={{ mr: 1 }} />({cart.length})
        </Link>
      </div>
    </div>
  );
}

export default Header;
