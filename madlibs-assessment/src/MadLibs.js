import React, { useState } from "react";

const outPut = {
  story1: (color, noun, adjective, noun2) => (`There was a ${color} ${noun} who loved a ${adjective} ${noun2}.`),
  story2: (color, noun, adjective, noun2) => (`He became a ${color} ${noun} that jumped like a ${adjective} ${noun2}.`),
  story3: (color, noun, adjective, noun2) => (`She liked a ${color} ${noun} who flys a ${adjective} ${noun2}.`),
  story4: (color, noun, adjective, noun2) => (`There was a ${color} ${noun} who loved a ${adjective} ${noun2}.`)
}



const MadLibs = () => {
  const INITIAL_STATE = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [output, setOutput] = useState(null)
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.values(outPut)
    const property = values[Math.floor(Math.random() * values.length)];
    
    setOutput(property(formData.color, formData.noun, formData.adjective, formData.noun2));
    // setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="noun"
        type="text"
        name="noun"
        value={formData.noun}
        onChange={handleChange}
        placeholder="noun"
      ></input>
      <input
        id="noun2"
        type="text"
        name="noun2"
        value={formData.noun2}
        onChange={handleChange}
        placeholder="noun 2"
      ></input>
      <input
        id="adjective"
        type="text"
        name="adjective"
        value={formData.adjective}
        onChange={handleChange}
        placeholder="adjective"
      ></input>
      <input
        id="color"
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
        placeholder="color"
      ></input>
      <button>make story</button>
      <div>{output}</div>
    </form>
  );
};

export default MadLibs;
