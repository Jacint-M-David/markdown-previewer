import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";

/*

Ideas for improvement apart from the genereal aesthetic:

-button to clear everything from the input
-aesthetci upgrade
-responsive 2 column break for tablet and pc so that there is less vertical need
-validating by not allowing imput to update on tags that suggest xss attacks like hmlt tags closed
-adding readme.md
-button to copy all the md contents

*/

function App() {
  const [markdown, setMarkdown] = useState(
      '# Welcome to Jacint\'s Markdown Previewer \n## You can input markdown here and see the what it will look like underneath!\n[This link takes you to my GitHub profile where you can look at my other work!](https://github.com/Jacint-M-David)\n\n`This is what inline code will look like.`\n\n```Ever wondered what code blocks will look like?```\n- these\n- are\n- list\n- items\n \n>This is blockquote text!\n \n![This is an image of my Random Quote Picker App](https://user-images.githubusercontent.com/89414746/163729189-f47d103a-686b-413b-9ab1-0721f6260ef6.jpg "Logo Title Text 1") \n\n**Check out my Random Quote Picker App on GitHub**'
    ),
    handleChange = (event) => {
      setMarkdown(event.target.value);
    },
    html = marked.parse(markdown),
    htmlOutput = { __html: html };

  return (
    // input Markdown
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div id="input">
        <h2>Input</h2>
        <textarea
          id="editor"
          defaultValue={markdown}
          onChange={handleChange}
          rows="27"
          cols="40"
        ></textarea>
      </div>
      {/* <Previewer /> */}
      <div id="output">
        <h2>Output</h2>
        <div id="one">
          <output id="preview" dangerouslySetInnerHTML={htmlOutput}></output>
        </div>
      </div>
      <footer style={{ marginBottom: "0.5rem" }}>
        Created by Jacint M. David
      </footer>
    </div>
  );
}

export default App;
