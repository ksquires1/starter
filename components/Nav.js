import html from "html-literal";
export default links => html`
  <nav>
    ${links.map(
      link => `<a href="/${link.title}" title="${link.text}" data-navigo>${link.text}</a>`
    )}
  </nav>
`;
