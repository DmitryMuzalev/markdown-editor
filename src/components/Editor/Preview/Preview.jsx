import styles from "./Preview.module.scss";

import HidePreviewIcon from "../../../assets/icon-hide-preview.svg";
import ShowPreviewIcon from "../../../assets/icon-show-preview.svg";

import Markdown from "react-markdown";

const document = {
  id: "initDocsId1",
  createdAt: "04/01/2022",
  name: "welcome.md",
  content:
    "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
};

function Preview({ isShow, cb }) {
  return (
    <div className={styles.preview + " " + "custom-scroll"}>
      <div className={styles.previewHeader}>
        <span className="section-title ">preview</span>
        <button onClick={cb} className={styles.previewSwitcher}>
          {isShow ? (
            <img src={HidePreviewIcon} alt="hide preview" />
          ) : (
            <img src={ShowPreviewIcon} alt="show preview" />
          )}
        </button>
      </div>
      <div className={styles.previewMarkdown}>
        <Markdown>{document.content}</Markdown>
      </div>
    </div>
  );
}
export { Preview };
