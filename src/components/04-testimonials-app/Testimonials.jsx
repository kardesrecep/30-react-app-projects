import React, { useEffect, useState } from "react";
import Title from "../01-e-signature/Title";
import Button from "./Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

const Testimonials = () => {
/*   const handleClick = () => { 
    console.log("Clicked")
  } */

  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [testimonials]);

  return (
    <div className="container m-auto">
      <Title text={"Testimonials App"} />
      <Button
        text={"Posts"}
        btnClass="btn-info btn-lg text-light"
        icon={<BsFillFileEarmarkPostFill className="" />}
        onClick={() => setTestimonials("posts")}
      />
      <Button
        text={"Users"}
        btnClass="btn-info btn-lg text-light"
        icon={<FaUserAlt />}
        onClick={() => setTestimonials("users")}
      />
      <Button
        text={"Comments"}
        btnClass="btn-info btn-lg text-light"
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials("comments")}
      />
      <Title classes="subtitle text-primary" text={!testimonials ? "Select form above" : testimonials} />

   {
!items ?  null :

    items.map((item)=>{
      return(
        <div className="card card-primary mb-2" key={item.id}>
        {  item.name && <h2 className="card-header">{item.name}</h2>}
        <div className="card-body">
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
        {  item.email && <small className="card-footer">{item.email}</small>}
          
        </div>
      )
    })




   }


     
    </div>
  );
};

export default Testimonials;