import React from "react";
import AOS from "aos";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      formRef: React.createRef(null),
      name: "",
      intervalId: setInterval(() => {}, 1000),
      loading:false,
      sukses:null,
      message:''
    };
  }

  componentDidMount() {
    AOS.init();
    this.setState({
      intervalId:this.state.intervalId = setInterval(() => {
        this.setState({ message: (this.state.message = '') })
        return () => clearInterval(this.state.intervalId)
      }, 10000)
    })
  
  }

  componentDidUpdate(){
    if(this.state.message > 0){
      console.log("Test");
    }
  }


  InputText = (e) => {
    const { name, value } = e.target;
    this.setState({ name: value });
    console.log(this.state.name);
  };
  sendMessage = (e) => {
    e.preventDefault();
    const formRef = this.state.formRef;
    if (this.state.name.length < 8) {
      console.log(formRef.current);
    } else {
      this.setState({loading:this.state.loading = true})
      const scriptUrl = `https://script.google.com/macros/s/AKfycbxKbGQXTjkq4NKgLqbT75rpXD4EsO6RGnRS7eZbDOc0yFfndhEiTHbJ3prQDw5e3FajlA/exec`;
      fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
        .then((res) => {
          alert("SUCCESSFULLY SUBMITTED");
          e.target.reset();
          this.setState({
            loading:this.state.loading = false,
            sukses:this.state.sukses = true,
            message:this.state.message = 'Your message was sent, thank you!'
          })
        })
        .catch((err) => {
          this.setState({
            sukses:this.state.sukses = false,
            message:this.state.message = err
          })
        })
    }
  };


  render() {
    return (
      <div className="contact-page">
      <section
        classnName="ftco-sections"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="containerz">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
            <div className="judul-span">
<p>
<span className="hvr-wobble-vertical">C</span>
                <span className="hvr-wobble-vertical">o</span>
                <span className="hvr-wobble-vertical">n</span>
                <span className="hvr-wobble-vertical">t</span>
                <span className="hvr-wobble-vertical">a</span>
                <span className="hvr-wobble-vertical">c</span>
                <span className="hvr-wobble-vertical">t</span>
</p>
             <p>
             <span className="hvr-wobble-vertical">m</span>
                <span className="hvr-wobble-vertical">e</span>
             </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6 form-left">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">Send me a message</h3>
               {this.state.sukses ? <div id="form-message-success" className="mb-4">
                   {this.state.message}
                    </div> : <div id="form-message-warning" className="mb-4">
                      {this.state.message}
                    </div>}
    
                      <form
                        ref={this.state.formRef}
                        name="contactForm"
                        className="contactForm"
                        onSubmit={this.sendMessage}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control "
                                name="name"
                                id="name"
                                placeholder="Name"
                                onChange={this.InputText}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={this.InputText}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                onChange={this.InputText}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="6"
                                placeholder="Message"
                                onChange={this.InputText}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
 {this.state.loading ? <button className="load-button">
<div className="spinner-border text-light" role="status">
  <span className="sr-only">Loading...</span>
</div>
</button> : <button type='submit' className='hvr-sweep-to-right'>
    Send Message
</button>}

                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch form-right">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                      <p className="mb-4">
                        We're open for any suggestion or just to have a chat
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Address : </span> Kp Pulo Ceger, Jalan Bonjol , RT.2/RW.3, Jaka Setia, Bekasi Selatan
                            </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div  classnName="text pl-3">
                            <span>Phone:</span>{" "}
                            <a href="https://web.whatsapp.com/" target="_blank">
                              +62 89 644 814 801
                            </a>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3">
                            <span>Email:</span> <span>bayux265@gmail.com</span>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-github"></span>
                        </div>
                        <div className="text pl-3">
                            <a href="https://github.com/bay-s" target="_blank">Github</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Contact;
