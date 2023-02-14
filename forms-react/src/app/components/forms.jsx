export default function Content() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lobortis est ut
        hendrerit. Proin malesuada dignissim dui, id pulvinar ipsum pulvinar ut. Praesent
        pellentesque tincidunt mauris, ut imperdiet velit pellentesque molestie. Suspendisse
        volutpat elit auctor dapibus pharetra. Morbi tempus non urna sit amet commodo.
      </p>
      <h2>Draw the Cards.</h2>
      <Form />
      <Account />
    </div>
  );
}

function Form() {
  return (
    <div className="form">
      <h3>Lets do this!</h3>
      <form>
        <fieldset>
          <Field />
          <Field />
        </fieldset>
        <fieldset>
          <Field />
          <Field />
        </fieldset>
        <fieldset>
          <Field />
          <Field />
        </fieldset>
      </form>
    </div>
  );
}

function Field(props) {
  return (
    <label for={props.id}>
      <p>{props.name}</p>
      <input type="text" id={props.id} required></input>
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
