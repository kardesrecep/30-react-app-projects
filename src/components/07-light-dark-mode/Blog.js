import React,{useContext}  from "react";
import Title from "../01-e-signature/Title";
import Button from "../04-testimonials-app/Button";
import { ThemeContext } from "./context/ThemeContext";

const Blog = () => {
    const {theme,changeTheme}=useContext(ThemeContext)
  return (
    <div className="container p-1 fs-1">
      <Title text={`My Blog with ${theme} Theme`} />
      <span style={{position:'absolute',top:10,right:10}}>
        <Button text={theme==="dark" ? "Light": "Dark"} 
       btnClass={`${theme==="dark" ? "btn-light" : ""} btn-sm`}
        onClick={changeTheme}  />
      </span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem dolores quia recusandae exercitationem maxime hic odit omnis, asperiores, aperiam autem animi eius, facilis neque quisquam a maiores illum similique.</p>
    </div>
  );
};

export default Blog;
