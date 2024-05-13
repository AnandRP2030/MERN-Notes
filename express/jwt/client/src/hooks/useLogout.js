import { useNavigate } from "react-router-dom";
const useLogout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("workee")
    if (localStorage.getItem("power-token")) {
      localStorage.removeItem("power-token");
    }
    navigate("/");
  };
  return { handleLogout };
};

export {useLogout};