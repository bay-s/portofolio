
import React from "react";
import ModalImage from "./modal";
import movie from "./img/react-movie.png";
import webSd from "./img/website-sd.png";
import theme  from "./img/screenshot.png"
import img2 from "./img/test1.jfif"
import img3 from "./img/test3.jfif"
import img4 from "./img/ramayana.png"
import img5 from "./img/test2.jfif"
import img6 from "./img/test5.png"
import forums from "./img/forums.png"
import AOS from 'aos'

class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state = {
      images: "",
      modal: false,
      link:["https://sdmasjidsyuhada.sch.id/","https://bay-s.github.io/","https://github.com/bay-s/tema-wordpress-1","https://simple-forums.netlify.app","#","#","#","#","#"],
      img:[movie,webSd,theme,forums ,img2,img3,img4,img5,img6],
      judul:['React Movie App','Website SD','Tema Wordpress','Simple Forum','Lorem ipsum, dolor',' Quibusdam odio','adipisci cupiditate. Minima!','voluptate nesciunt','voluptate nesciunt beatae earum'],
      desc:['Personal Project created with React and TMDB API','School website create with Wordpress',
      'Wordpress themes','Simple forums created with React and Firebase','illo voluptate nesciunt beatae earum',' beatae earum quo adipisci cupiditate. Minima!','ipsum alias incidunt sed explicabo velit nostrum,',' Quibusdam odio, a dolore voluptatem, accusamus','earum quo adipisci cupiditate. Minima'],
      status:['Publish','Publish','Publish','Publish','N/A','N/A','N/A','N/A','On progress'],
      index:0,
      imgSlide:[],
      imgRef:React.createRef(),
      intervalId: setInterval(() => {}, 100),
    };
  }

  componentDidMount(){
    AOS.init()
    AOS.refresh()

    this.setState({
    intervalId:this.state.intervalId = setInterval(() => {
      const imgRef = this.state.imgRef.current
      imgRef.classList.remove('fadez')
    return () => clearInterval(this.state.intervalId);
    }, 1500)
    })
  }

  modalImage = (e) => {
    e.preventDefault();
    const img = e.target.parentElement.parentElement.firstChild.src;
    const indexes = parseInt(e.target.parentElement.parentElement.firstChild.dataset.index)

    this.setState({
      modal: !this.state.modal,
      images: (this.state.images = img),
      index:this.state.index = indexes
    });
  };

  removeModal = (e) => {
    this.setState({ modal:this.state.modal = false });
  };

  nextSlide = e => {
e.preventDefault()
const imgRef = this.state.imgRef.current
imgRef.classList.toggle('fadez')
this.setState({
  index:this.state.index = this.state.index + 1,
  images:this.state.images = this.state.img[this.state.index]
})

if (this.state.index > this.state.img.length - 1) {
  this.setState({
    index:this.state.index = 0,
    images:this.state.images = this.state.img[this.state.index]
  })
}
  }

  prevSlide = e => {
    e.preventDefault()
    const imgRef = this.state.imgRef.current
imgRef.classList.add('fadez')
    this.setState({
      index:this.state.index = this.state.index - 1,
      images:this.state.images = this.state.img[this.state.index]
    })
    
<<<<<<< HEAD
    if (this.state.index < 0) {
=======
    if (this.state.index < 0){
>>>>>>> 183864468128ab5c8850e49251d364b291606b01
      this.setState({
        index:this.state.index = 7,
        images:this.state.images = this.state.img[this.state.index]
      })
    }
  }


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
             A small gallery of my recent projects.
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
             key={index}
           >
             <img src={img} class="card__image" alt="" data-index={index}/>
             <div class="card__overlay">
               <div class="card__header">
                 <div class="card__header-text">
                   <h3 class="card__title">
                     <a href={link}  target="_blank">
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
        {/* END PROJECT INNER */}
        <div
          className={this.state.modal ? "modals" : "modal-container"}
        >
          {this.state.modal ? <ModalImage images={this.state.images} nextSlide={this.nextSlide}
            prevSlide={this.prevSlide} imgRef={this.state.imgRef} close={this.removeModal}
          /> : ""}
        </div>
      </div>
    );
  }
}

export default ProjectPage;



