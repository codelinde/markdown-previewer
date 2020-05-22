class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:
      "# Header \n ## Sub-header \n[This is a link](https://duckduckgo.com) and some \`inline code\` \n but we can also have a \n\n\`    <code block> \n    <like this>\` \n\nand some **bold text** or even a \n* List\n* With\n* Items\n\n> Blockquotes\n> Are also ok \n\n Here's an image:\n\n![Gandalf](https://res.cloudinary.com/dexkfgy3e/image/upload/v1590085142/gandalf.jpg)" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  rawMarkup() {
    marked.setOptions({
      gfm: true,
      breaks: true });

    let rawMarkup = marked(this.state.input, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    const { title } = this.props;

    return (
      React.createElement("div", { className: "columns" },
      React.createElement("div", { className: "box content dark-mode column" },
      React.createElement("h1", null, title),
      React.createElement("textarea", {
        id: "editor",
        class: "textarea has-fixed-size input",
        wrap: "hard",
        placeholder: "Input some markdown here...",
        onChange: this.handleChange.bind(this),
        value: this.state.input })),


      React.createElement("div", { className: "column box content dark-mode" },
      React.createElement("h1", null, "Markdown Result"),
      React.createElement("div", {
        dangerouslySetInnerHTML: this.rawMarkup(),
        class: "result",
        id: "preview" }))));




  }}


const selection = document.querySelector("#app");
ReactDOM.render(React.createElement(Cards, { title: "Input Markdown" }), selection);