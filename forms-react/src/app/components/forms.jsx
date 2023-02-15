import formdata from "../data/form-data";

export default function Content() {
  return (
    <div className="content">
      <div className="content__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lobortis est ut
          hendrerit. Proin malesuada dignissim dui, id pulvinar ipsum pulvinar ut. Praesent
          pellentesque tincidunt mauris, ut imperdiet velit pellentesque molestie. Suspendisse
          volutpat elit auctor dapibus pharetra. Morbi tempus non urna sit amet commodo.
        </p>
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
      <h2>Draw the Cards.</h2>
      <fieldset>
        {formArray}
        <input type="submit" value="Submit" />
      </fieldset>
    </div>
  );
}

function Field(props) {
  return (
    <label htmlFor={props.id}>
      <p>{props.text}</p>
      <input type={props.type} id={props.id} required></input>
    </label>
  );
}

function Account() {
  return (
    <div>
      <button>Create Account</button>
      <p>Already have an account?</p>
      <a>Log In</a>
    </div>
  );
}
