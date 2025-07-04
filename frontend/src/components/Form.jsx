import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = ({ setSuggestion, setLoading }) => {
  const [form, setForm] = useState({
    business_name: "",
    category: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/suggest", form);
      setSuggestion(res.data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Business Name</label>
      <input type="text" name="business_name" onChange={handleChange} required />

      <label>Category</label>
      <input type="text" name="category" onChange={handleChange} required />

      <label>Description</label>
      <textarea name="description" onChange={handleChange} required rows={4} />

      <button type="submit">Generate Suggestion</button>
    </form>
  );
};

export default Form;
