import React from "react";

export default function Form(props) {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
    onCheckboxChange,

    } = props;

  return (
    <form onSubmit={onSubmit}>
    <h1> Add a User: </h1>
    <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
     </div>

      <button disabled={disabled}>submit</button>
      <label> Name 
        <input
          value={values.name}
          onChange={onInputChange}
          name="name"
          type="text"
        />
      </label>

      <label> Email 
        <input
          value={values.email}
          onChange={onInputChange}
          name="email"
          type="text"
        />
      </label>

      <label> Password 
        <input
          value={values.password}
          onChange={onInputChange}
          name="password"
          type="text"
        />
      </label>

      <label> Terms of Service 
        <input
          checked={values.termsOfService}
          onChange={onCheckboxChange}
          name="termsOfService"
          type="checkbox"
        />
      </label>
    </form>
  );
}
