import { Header, Nav, Main, Footer } from "./components";
import * as state from "./Store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo(window.location.origin);

router.hooks({
  before: (done,params)=>{
    console.log(params);
    const page = params && params.hasOwnProperty("page") ? capitalize(params.page) : "Home";
    switch(page){
      case "About":
        axios.get("https://api.artic.edu/api/v1/artworks")
        .then(response=>{
          console.log (response);
          state.About.photos=response.data.data
          done();
        })
      break;
      default:
        done();
    }
  }
})

router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;

  router.updatePageLinks();

  addEventListeners(st);
}

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  // event listener for the the photo form
  if (st.view === "About") {
    let Header = document.querySelector("header");
    Header.style.display = "none";
  }
}
axios.get(`https://api.artic.edu/api/v1/artworks`).then(response=>{console.log("artworks")});
