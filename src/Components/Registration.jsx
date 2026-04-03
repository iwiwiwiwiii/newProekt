import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
        passwordConfirmation : ""

    }
    )
};

const [error, setError] = useState( "");
const navigate = useNavigate ();

const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 const [errors, setErrors] = useState ({}) ;

const handleSubmit = (e) => {
  e.preventDefault();
    const newErrors = {};

    if(!formData.name) newErrors.name= "Имя обязательно";
    if(!formData.email) newErrors.email = "Email обязателен ";
    if(!formData.password) newErrors.password = "Пароль обязателен";
    if(formData.password !== formData.passwordConfirmation) { newErrors.passwordConfirmation = "Пароли не совпадают";}
    if(formData.password.length < 5 || formData.password) {newErrors.password = "Длина пароля должна быть минимум 5 символов";}}

const users = JSON.parse(localStorage.getItem("users") || "[]");
if(users.some(user => user.email === formData.email)) {newErrors.email = "Такой Email уже есть" ;}

const newUser = {
    name : "formData.name",
    email : "formData.email",
    password : "formData.password",
}
