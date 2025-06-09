import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function LogoutButton() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return <button onClick={handleLogout}>Sair</button>;
}

export default LogoutButton;
