import html from "html-literal";

export default (st) => html`
  <header>
    <h1>About Kreators.</h1>
  </header>
  <h1>What is Graphic Design?</h1>
  <p class="p2">
    Graphic design is the profession of creating pictures using page layout
    techniques, typography, and other elements using computer programs to meet
    users' specific needs and focus on the logic of displaying elements in
    interactive designs, to optimize the user experience. Using typography in
    this field is an amazing skill to have, there are many small businesses and
    entrepreneur's who are in need of branding to make their business or
    whatever they do stand out from others. Using this skill is an essential in
    online media, making your brand look unique is very important.
    <img
      src="https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2017/03/psdLogo.png?resize=150%2C150&ssl=1"
      height="20"
    />
  </p>
  <h2>What are Adobe Programs?</h2>
  <p class="p1">
    There are many tools/programs used in Graphic Designing. The main program is
    Photoshop, it is the most versatile and well-used program in the industry.
    Some other common uses of photoshop are product design, website mock-up
    designs, business card design, movie poster designs, various types of
    digital content.Another well known program is Adobe Illustrator, tt is a
    vector drawing program. It is not only limited to artists and graphic
    designers. Those who are looking to create a website can create a mock-up
    through Illustrator, which they can use to create vector images that can be
    used over a wide variety of platforms. The last program is Adobe InDesign,
    it is desktop publishing software. You can apply basic editing and effects
    to images in InDesign. It is also used to create professional work like
    flyers, posters, brochures, magazines, newspapers, and books.
  </p>
  <div>
    ${
      st.photos.map(photo=>{
        return `<img src="https://www.artic.edu/iiif/2/${photo.image_id}/full/843,/0/default.jpg " style="height:120px">`;
      })
    }
  </div>
`;
