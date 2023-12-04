import './App.css'

function App() {
  return (
    <>
  <header className="header">
    <p className="fs-1 titulo-pag headers orange">
      <strong>Foods</strong>
    </p>
    <nav className="navs-d">
      <a href="#" className="text-decoration-none headers">
        <strong>Home</strong>
      </a>
      <a href="#" className="text-decoration-none headers">
        <strong>About</strong>
      </a>
      <a href="#" className="text-decoration-none headers">
        <strong>Menu</strong>
      </a>
      <a href="#" className="text-decoration-none headers">
        <strong>Service</strong>
      </a>
      <a href="#" className="text-decoration-none headers">
        <strong>Contact</strong>
      </a>
    </nav>
  </header>
  <section className="sections">
    <div className="div-s div-inf">
      <h1 className="orange">Full Website</h1>
      <p className="fs-2">
        Foods the <br />
        Most precious thing
      </p>
      <button>Today's Menu</button>
    </div>
    <img src="./img/home.png" alt="Home.png" className="big-img" />
  </section>
  <section className="sections diferencia">
    <div className="div-s div-inf">
      <p className="orange">About Us</p>
      <p className="fs-2">
        We speak the good <br />
        food languaje
      </p>
      <p>
        It is a long established fact that a <br />
        be distracted by the readable content <br />
        looking at its layout. The point of
      </p>
      <button>Learn More</button>
    </div>
    <img src="./img/about.png" alt="About.png" />
  </section>
  <section className="sections comidas">
    <div className="div-s comidas">
      <p className="orange">Food Menu</p>
      <h2>Fresh taste and grat price</h2>
    </div>
    <div className="div-s">
      <div className="div-s div-inf">
        <img src="./img/food1.png" alt="food1.png" className="img-imp" />
        <p className="fs-5">Chicken Burger</p>
        <p className="fs-6">Tasty Food</p>
        <p className="fs-6 orange">$11.00</p>
      </div>
      <div className="div-s div-inf">
        <img src="./img/food2.png" alt="food2.png" className="img-imp" />
        <p className="fs-5">Special Beef Burger</p>
        <p className="fs-6">Tasty Food</p>
        <p className="fs-6 orange">$11.00</p>
      </div>
      <div className="div-s  div-inf">
        <img src="./img/food3.png" alt="food3.png" className="img-imp" />
        <p className="fs-5">Chicken Fry Pack</p>
        <p className="fs-6">Tasty Food</p>
        <p className="fs-6 orange">$11.00</p>
      </div>
    </div>
  </section>
  <section className="sections comidas">
    <div className="div-s comidas">
      <div className="div-s comidas">
        <p className="fs-6 orange">Services</p>
        <p className="fs-2">We provide best food services</p>
      </div>
      <div className="div-s ">
        <div className="div-s div-inf">
          <img src="./img/s1.png" alt="s1.png" className="img-imp" />
          <p className="fs-5 orange">Order</p>
          <p className="fs-5">
            It is a long established <br />
            be distracted by the readable <br />
            looking at its layout.{" "}
          </p>
        </div>
        <div className="div-s div-inf">
          <img src="./img/s2.png" alt="s2.png" className="img-imp" />
          <p className="fs-5 orange">Shipping</p>
          <p className="fs-5 ">
            It is a long established <br />
            be distracted by the readable <br />
            looking at its layout.
          </p>
        </div>
        <div className="div-s div-inf">
          <img src="./img/s3.png" alt="s3.png" className="img-imp" />
          <p className="fs-5 orange">Dellvered</p>
          <p className="fs-5">
            It is a long established <br />
            be distracted by the readable <br />
            looking at its layout.{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="sections boxing">
    <div className="div-s">
      <p className="fs-2">We make quality food Everyday</p>
      <button>Learn More</button>
    </div>
  </section>
  <footer className="footer">
    <div className="div-s about">
      <div className="div-s- div-s-s">
        <p className="fs-5">Menu Links</p>
        <p className="text-decoration-line-through orange">
          <strong>----</strong>
        </p>
        <a href="#" className="fs-6 line">
          Home
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          About
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          Menu
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          Service{" "}
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          Contact
        </a>
      </div>
    </div>
    <div className="div-s about">
      <div className="div-s- div-s-s">
        <p className="fs-5">Our Servive</p>
        <p className="text-decoration-line-through orange">
          <strong>----</strong>
        </p>
        <a href="#" className="fs-6 line">
          Web Design
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          Web Development
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          Marketing
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          Product Management
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          Graphic Design
        </a>
      </div>
    </div>
    <div className="div-s about">
      <div className="div-s- div-s-s">
        <p className="fs-5">Information</p>
        <p className="text-decoration-line-through orange">
          <strong>----</strong>
        </p>
        <a href="#" className="fs-6 line">
          About Us
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          Delivery Information
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          Privacy Policy
        </a>{" "}
        <br />
        <a href="#" className="fs-6 line">
          Terms &amp; Conditions
        </a>
      </div>
    </div>
    <div className="div-s about">
      <div className="div-s- div-s-s">
        <p className="fs-5">Contact Us</p>
        <p className="text-decoration-line-through orange">
          <strong>----</strong>
        </p>
        <div className="div-s">
          <a href="#">
            <i className="bx bxl-facebook item" />
          </a>
          <a href="#">
            <i className="bx bxl-instagram item" />
          </a>
          <a href="#">
            <i className="bx bxl-twitter item" />
          </a>
          <a href="#">
            <i className="bx bxl-linkedin-square item" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</>

  )
}

export default App
