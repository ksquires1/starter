import html from "html-literal";
export default links => html`
  <nav>
    ${links.map(
      link => `<a href="/${link.title}" title="${link.text}">${link.text}</a>`
    )}
  </nav>
`;
