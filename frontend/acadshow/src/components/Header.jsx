// import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import Logo from "../assets/ScholarLogo.png";
import SeeMore from "./SeeMore";
import { useNavigate } from "react-router-dom";
import ScrollComponent from "./ScrollComponent";

const Header = () => {
  const [userLogin, setUserLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setUserLogin(Boolean(authToken));
  }, []);

  const handleUserLogin = () => {
    if (userLogin) {
      localStorage.removeItem("token");
      setUserLogin(false);
    }
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-20 border-b border-white/20 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="flex items-center gap-3 text-left text-white"
          onClick={() => navigate("/")}
        >
          <img
            className="h-11 w-11 rounded-full border border-white/20 object-cover shadow-lg"
            src={Logo}
            alt="ScholarConnect logo"
          />
          <div>
            <p className="text-lg font-semibold tracking-wide">ScholarConnect</p>
            <p className="text-xs text-slate-300">Research community hub</p>
          </div>
        </button>

        <div className="flex items-center gap-3">
          <button
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            onClick={handleUserLogin}
          >
            {userLogin ? "Logout" : "Login"}
          </button>
          <div className="hidden sm:flex">
            <SeeMore />
          </div>
        </div>
      </div>
      <ScrollComponent />
    </header>
  );
};

export default Header;
