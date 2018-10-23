console.log("app is running");

const app = {
  title: "indecision",
  subtitle: "apka od andrew",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  render();
};

const removeAll = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
  const random = Math.floor(Math.random() * app.options.length);
  const option = app.options[random];
  alert(option);
};
const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "here are your options" : "no options"} </p>
      <p>{app.options.length}</p>

      <button disabled={app.options.length === 0} onClick={makeDecision}>
        what should I do?
      </button>
      <button onClick={removeAll}>remove All options</button>

      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
