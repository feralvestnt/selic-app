import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Selic
      </NavLink>
      {" | "}
      <NavLink to="/historico" activeStyle={activeStyle} exact>
        Histórico
      </NavLink>
      {" | "}
      <NavLink to="/media" activeStyle={activeStyle}>
        Média
      </NavLink>
    </nav>
  );
};

export default Header;
