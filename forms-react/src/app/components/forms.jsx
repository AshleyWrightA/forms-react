import { useEffect } from "react";
import formdata from "../data/form-data";
import { FormLogic } from "../form-logic";

export default function Content() {
  useEffect(() => {
    const x = new FormLogic();
    x.setEventListeners();
  }, []);

  return (
    <div className="content">
      <div className="content__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lobortis est ut
          hendrerit. Proin malesuada dignissim dui, id pulvinar ipsum pulvinar ut. Praesent
          pellentesque tincidunt mauris, ut imperdiet velit pellentesque molestie. Suspendisse
          volutpat elit auctor dapibus pharetra. Morbi tempus non urna sit amet commodo.
        </p>
        <h2>Draw the Cards.</h2>
      </div>
      <Form />
      <Account />
    </div>
  );
}

function Form() {
  const formArray = formdata.map((formdata, index) => (
    <Field key={index} type={formdata.type} text={formdata.text} id={formdata.id} />
  ));

  return (
    <div className="container">
      <form className="form">
        <fieldset className="form__fieldset">{formArray}</fieldset>
        <input className="form__submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

function Field(props) {
  return (
    <label className="form__label" htmlFor={props.id}>
      <p>{props.text}</p>
      <input className={"form__input " + props.id} type={props.type} id={props.id}></input>
      <p className="form__error"></p>
    </label>
  );
}

function Account() {
  return (
    <div className="account">
      <button className="account__button">Create Account</button>
      <div className="account__anchor">
        <p>Already have an account?</p>
        <a>Log In</a>
      </div>
    </div>
  );
}
