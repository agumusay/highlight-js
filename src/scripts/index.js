// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "highlight.js/styles/agate.css";
import hljs from "highlight.js";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

document.addEventListener("DOMContentLoaded", event => {
  document.querySelectorAll("pre code").forEach(block => {
    hljs.highlightBlock(block);
  });
});
