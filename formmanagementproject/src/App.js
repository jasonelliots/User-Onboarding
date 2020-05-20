import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import axios from "axios";
import * as yup from "yup";
import formSchema from './formSchema'

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  termsOfService: "",
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  termsOfService: "",
};

const initialUsers = [];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewUser = newUser => {

    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res)
        setUsers([res.data, ...users])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    };
    postNewUser(newUser)
  };

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = (evt) => {
    const { name } = evt.target;
    const { checked } = evt.target;

    setFormValues({
      ...formValues, [name]: checked 
    });
  };



  return (
    <div>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        errors={formErrors}
        onCheckboxChange={onCheckboxChange}
      />

      {users.map(user => {
        return (
          <div> 
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
           </div>
        ); 
      })}

    </div>
  );
}

export default App;
