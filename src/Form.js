import { useLocation } from "react-router-dom";
import config from "./auth_config.json";
import React from "react";
import qs from "qs";

export default function Form() {
  const location = useLocation();
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
  });
  const { state } = qs.parse(
    location.search.substring(1, location.search.length)
  );

  const onInputBlur = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onClickSubmit = () => {
    setTimeout(() => {
      window.location = `https://${
        config.domain
      }/continue?state=${state}&firstname=${encodeURI(
        form.firstName
      )}&lastname=${encodeURI(form.lastName)}`;
    }, 500);
  };

  return (
    <div className="form-page">
      <h3 className="form-page--title">Form Page</h3>
      <div className="form-page--content">
        <label>
          Firstname:
          <input type="text" name="firstName" onBlur={onInputBlur} />
        </label>
        <label>
          Lastname:
          <input type="text" name="lastName" onBlur={onInputBlur} />
        </label>
        <button onClick={onClickSubmit}>Submit Data</button>
      </div>
    </div>
  );
}
