import React, { useState } from "react";
import Title from "./Title";

const Esignature = () => {
  const [name, setname] = useState("Your Signature");
  const [date, setdate] = useState("Select Your Date");
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.5rem 0",
    background: "#eee",
  };

  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  const handleDateChange = (e) => {
    setdate(e.target.value);
  };

  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title
        classes={"main-title mb-4"}
        text={!date ? "Select Your Date" : date}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim,
        voluptate ab, qui exercitationem quidem, dicta eligendi nihil recusandae
        corrupti dolorum iusto veniam nostrum distinctio similique nobis
        sapiente nemo voluptatem.
      </p>

      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
};

export default Esignature;
