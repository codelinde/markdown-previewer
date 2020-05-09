class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  rawMarkup() {
    let rawMarkup = marked(this.state.input, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    const { title } = this.props;

    return React.createElement("div", { className: "columns" }, React.createElement("div", { className: "box content dark-mode column" },
    React.createElement("h1", null, title),
    React.createElement("textarea", {
      class: "textarea has-fixed-size input",
      wrap: "hard",
      placeholder: "Input some markdown here...",
      onChange: this.handleChange.bind(this),
      value: this.state.input })),

    React.createElement("div", { className: "column box content dark-mode" },
    React.createElement("h1", null, "Markdown Result"),
    React.createElement("div", { dangerouslySetInnerHTML: this.rawMarkup(), class: "result" })));



  }}



const selection = document.querySelector("#app");
ReactDOM.render(React.createElement(Cards, { title: "Input Markdown" }), selection);