import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

import './Header.css';

function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
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
