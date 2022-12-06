import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let textArray = text.split(/\r?\n/);

    textArray = textArray.map(text => {
      const temp = text.replace(/\s/g, '');
      if (temp.charAt(0) == "\"") {
        return text.replace(/"/g, "").replace(".", "").replace(/-/g, "_");
      } else {
        return text;
      }
    })

    let returningText = "";
    for (let txt of textArray) {
      returningText += txt + "\r\n";
    }

    setResult(returningText);
  }

  return (
    <div>
      <a href="https://transform.tools/css-to-js">CSS to JS Object Converter</a>
      <form onSubmit={handleSubmit}>
        <textarea rows="50" cols="50" type="text" value={text} onChange={e => setText(e.target.value)}></textarea>
        <button type="submit">Convert</button>
        <pre>{result}</pre>
      </form>
    </div>
  );
}

export default App;