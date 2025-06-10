import { useDispatch } from "react-redux";
import { logout } from "../../Store/authSlice";
import { useNavigate } from "react-router-dom";

import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="header">
      <h1>Meu Aplicativo React</h1>
      <button onClick={handleLogout}>Sair</button>
    </header>
  );
}

export default Header;
