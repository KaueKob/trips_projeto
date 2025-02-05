import Logo from "/Users/kauebornhofen/Desktop/projeto_locacao/frontend/trips-locacoes/src/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const goToHome = () => {
    navigate("/");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full bg-[#f5d6d6]">
      <div className=" max-w-[1440px] mx-auto h-[80px] flex items-center justify-between px-6 py-4">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={goToHome}
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-[60px] h-[60px] rounded-full"
          />
          <span className="font-bold text-2xl sm:text-3xl">Trips</span>
        </div>

        <div className="hidden md:flex space-x-8 font-semibold text-lg">
          <span className="cursor-pointer">Quem somos</span>
          <span className="cursor-pointer">Acomodações</span>
          <span className="cursor-pointer">Contato</span>
        </div>

        <div className="md:hidden">
          <MenuIcon className="cursor-pointer" onClick={handleMenuOpen} />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Quem somos</MenuItem>
            <MenuItem onClick={handleMenuClose}>Acomodações</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contato</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
