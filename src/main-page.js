import AOS from "aos";
import React from "react";
import { Link } from "react-router-dom";
import AboutPage from "./about-page";
import Contact from "./contact";
import ProjectPage from "./project-page";
import Testimoni from "./testimoni-card";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      intervalId: setInterval(() => {}, 1000),
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    
this.setState({
  intervalId:this.state.intervalId = setInterval(() => {
    this.setState({ index: (this.state.index = this.state.index + 1) });
    return () => clearInterval(this.state.intervalId);
  }, 7000)
})

    AOS.refresh();
  }

  nextSlide = (e) => {
    e.preventDefault();
    this.setState({ index: (this.state.index = this.state.index + 1) });
  };

  prevSlide = (e) => {
    e.preventDefault();
    this.setState({ index: (this.state.index = this.state.index - 1) });
  };

  render() {
    if (this.state.index > 7) {
      this.setState({ index: (this.state.index = 0) });
    }

    return (
      <main className="main-container">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <section className="top-page">
          <div className="top-page-inner">

          <div className="name-title">
              <h2
                className="name"
                data-aos="fade-right"
                data-aos-duration="3000"  
              >
                <span className="hvr-wobble-vertical">H</span>
                <span className="hvr-wobble-vertical">i</span>
                <span className="hvr-wobble-vertical">,</span>
              </h2>
              <h2
                className="name mid"
                data-aos="fade-right"
                data-aos-duration="2500"
                data-aos-delay="10"
                data-aos-easing="ease-in-out"
              >
           <p>
           <span className="hvr-wobble-vertical">I</span>
            <span className="hvr-wobble-vertical">'</span>
            <span className="hvr-wobble-vertical">m</span>
           </p>
           <p>
           <span className="hvr-wobble-vertical">B</span>
              <span className="hvr-wobble-vertical">a</span>
              <span className="hvr-wobble-vertical">y</span>
              <span className="hvr-wobble-vertical">u</span>
           </p>
             <p>
             <span className="hvr-wobble-vertical">S</span>
              <span className="hvr-wobble-vertical">a</span>
              <span className="hvr-wobble-vertical">p</span>
              <span className="hvr-wobble-vertical">u</span>
              <span className="hvr-wobble-vertical">t</span>
              <span className="hvr-wobble-vertical">r</span>
              <span className="hvr-wobble-vertical">a</span>
              <span className="hvr-wobble-vertical">,</span>
             </p>
              </h2>
              <h2
                className="name mid"
                data-aos="fade-right"
                data-aos-duration="2500"
                data-aos-delay="10"
                data-aos-easing="ease-in-out"
              >
           <p>
           <span className="hvr-wobble-vertical">w</span>
            <span className="hvr-wobble-vertical">e</span>
            <span className="hvr-wobble-vertical">b</span>
           </p>
           <p>
           <span className="hvr-wobble-vertical">d</span>
            <span className="hvr-wobble-vertical">e</span>
            <span className="hvr-wobble-vertical">v</span>
            <span className="hvr-wobble-vertical">e</span>
            <span className="hvr-wobble-vertical">l</span>
            <span className="hvr-wobble-vertical">o</span>
            <span className="hvr-wobble-vertical">p</span>
            <span className="hvr-wobble-vertical">e</span>
            <span className="hvr-wobble-vertical">r</span>
           </p>
       
              </h2>
            </div>
            <p className="name-text">Front End Developer / Wordpress Developer</p>
            <button className="hvr-sweep-to-right">
              <Link to="/contact/">Contact Me</Link>
            </button>
          </div>
        </section>

        <section className="project-container">
          <ProjectPage />
        </section>

        <section className="about">
        <div className='about-container' >

<div className='about-left' data-aos="fade-right">
<div className='image-wrap'>
    <img src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
</div>
</div>

<div className='about-right' data-aos="fade-left">
   <div className='title' >
   <div className="judul-span judul " data-aos="fade-up">
<p>
                <span className="hvr-wobble-vertical">A</span>
                <span className="hvr-wobble-vertical">b</span>
                <span className="hvr-wobble-vertical">o</span>
                <span className="hvr-wobble-vertical">u</span>
                <span className="hvr-wobble-vertical">t</span>
</p>
<p>
                <span className="hvr-wobble-vertical">m</span>
                <span className="hvr-wobble-vertical">e</span>
</p>
              </div>
       <div className='text'>
     <p>I love Programming, Technology,</p>
   <p>Story and  Games.</p>
     </div>
       <button className="hvr-sweep-to-right">
              <Link to="/about/">View More</Link>
      </button>
   </div>
</div>
        </div>
        </section>

        <section className="testimoni">
          <div className="judul-span judul " data-aos="fade-up">
<p>
                <span className="hvr-wobble-vertical">T</span>
                <span className="hvr-wobble-vertical">e</span>
                <span className="hvr-wobble-vertical">s</span>
                <span className="hvr-wobble-vertical">t</span>
                <span className="hvr-wobble-vertical">i</span>
                <span className="hvr-wobble-vertical">m</span>
                <span className="hvr-wobble-vertical">o</span>
                <span className="hvr-wobble-vertical">n</span>
                <span className="hvr-wobble-vertical">i</span>
                <span className="hvr-wobble-vertical">a</span>
                <span className="hvr-wobble-vertical">l</span>
                <span className="hvr-wobble-vertical">s</span>
</p>
              </div>
     <div className="scroll-wrap">
     <Testimoni index={this.state.index} />
     </div>
          <div className="arrow-container"  data-aos="fade-left">
            <i
              className="fa fa-long-arrow-left lefts"
              aria-hidden="true"
              style={
                this.state.index < 1
                  ? { display: "none" }
                  : { display: "block" }
              }
              onClick={this.prevSlide}
            ></i>
            <i
              className="fa fa-long-arrow-right rights"
              aria-hidden="true"
              style={
                this.state.index > 7
                  ? { display: "none" }
                  : { display: "block" }
              }
              onClick={this.nextSlide}
            ></i>
          </div>
        </section>

        <section className="contact-container">
          <Contact />
        </section>
      </main>
    );
  }
}

export default MainPage;
