
import React from "react";
import ModalImage from "./modal";
import movie from "./img/react-movie.png";
import webSd from "./img/website-sd.png";
import img1 from "./img/test.jfif"
import img2 from "./img/test1.jfif"
import img3 from "./img/test3.jfif"
import img4 from "./img/ramayana.png"
import img5 from "./img/test2.jfif"
import img6 from "./img/test5.png"
import AOS from 'aos'

class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state = {
      images: "",
      modal: false,
      link:["https://sdmasjidsyuhada.sch.id/","https://bay-s.github.io/","#","#","#","#","#","#"],
      img:[movie,webSd,img1,img2,img3,img4,img5,img6],
      judul:['React Movie App','Website SD','lorem ipsum app','Lorem ipsum, dolor',' Quibusdam odio','adipisci cupiditate. Minima!','voluptate nesciunt','voluptate nesciunt beatae earum'],
      desc:['Personal Project dibuat dengan React dan TMDB API','Website SD berbasis Wordpress',
      'Lorem ipsum, dolor sit amet consectetur','illo voluptate nesciunt beatae earum',' beatae earum quo adipisci cupiditate. Minima!','ipsum alias incidunt sed explicabo velit nostrum,',' Quibusdam odio, a dolore voluptatem, accusamus','earum quo adipisci cupiditate. Minima'],
      status:['Publish','Publish','N/A','N/A','N/A','N/A','N/A','On progress']
    };
  }

  componentDidMount(){
    AOS.init()
    AOS.refresh()
  }

  modalImage = (e) => {
    e.preventDefault();
    const img = e.target.parentElement.parentElement.firstChild.src;
    this.setState({
      modal: !this.state.modal,
      images: (this.state.images = img),
    });
  };

  removeModal = (e) => {
    this.setState({ modal: false });
  };
  render() {
    return (
<div className='pages-container'>
        <div
          className="project"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="title">
          <div className="judul-span judul " data-aos="fade-up">
<p>
                <span className="hvr-wobble-vertical">P</span>
                <span className="hvr-wobble-vertical">r</span>
                <span className="hvr-wobble-vertical">o</span>
                <span className="hvr-wobble-vertical">j</span>
                <span className="hvr-wobble-vertical">e</span>
                <span className="hvr-wobble-vertical">c</span>
                <span className="hvr-wobble-vertical">t</span>
</p>
              </div>
            <h2 className="sub-judul">
              We have completed many amazing projects that you will not believe
            </h2>
          </div>
          <div className="project-inner">
            <ul class="cards">
           {this.state.link.map((link,index) => {
            const name = this.state.judul[index]
            const img = this.state.img[index]
            const desc = this.state.desc[index]
            const status = this.state.status[index]
           return   <li>
           <div
             class="card"
             data-aos="fade-up"
             data-aos-duration="1500"
           >
             <img src={img} class="card__image" alt="" />
             <div class="card__overlay">
               <div class="card__header">
                 <div class="card__header-text">
                   <h3 class="card__title">
                     <a href={link} >
                      {name}
                     </a>
                   </h3>
                 <div className="info">
                 <span className="desc">{desc}</span>
                   <span className="status">Status : {status}</span>
                 </div>
                 </div>
               </div>
               <button
                 className="detail hvr-sweep-to-right"
                 onClick={this.modalImage}
               >
                 View Detail
               </button>
             </div>
           </div>
         </li>
           })
           }
            </ul>
          </div>
        </div>
        <div
          className={this.state.modal ? "modals" : "modal-container"}
          onClick={this.removeModal}
        >
          {this.state.modal ? <ModalImage images={this.state.images} /> : ""}
        </div>
      </div>
    );
  }
}

export default ProjectPage;
