import html from "html-literal";
import Logo from "../asset/images/k12.jpg";
export default st => html`
  <header>
    <img src="${Logo}" alt="my Logo" height="100" />
    <h1>KREATORS | Designing made easy. ${st.header}</h1>
  </header>
`;
