class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:
      "# Header\n## Sub-header\n[This is a link](https://duckduckgo.com) and some \`inline code\`\nbut we can also have a \n\n\t<code block>\n\t<like this>\n\nand some **bold text** or even a \n* List\n* With\n* Items\n\n> Blockquotes\n> Are also ok \n\nHere's an image:\n\n![Gandalf](https://res.cloudinary.com/dexkfgy3e/image/upload/v1590085142/gandalf.jpg)" };

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
      <div className="columns">
        <div className="box content dark-mode column">
          <h1>{title}</h1>
          <textarea
            id="editor"
            class="textarea has-fixed-size input"
            wrap="hard"
            placeholder="Input some markdown here..."
            onChange={this.handleChange.bind(this)}
            value={this.state.input}
          />
        </div>
        <div className="column box content dark-mode">
          <h1>Markdown Result</h1>
          <div
            dangerouslySetInnerHTML={this.rawMarkup()}
            class="result"
            id="preview"
          ></div>
        </div>
      </div>
    );
  }
}

// const selection = document.querySelector("#app");
// ReactDOM.render(<Cards title="Input Markdown" />, selection);

ReactDOM.render(<Cards title="Input Markdown" />, document.getElementById("app"));