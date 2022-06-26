import React from 'react'


class Testimoni extends React.Component{
    constructor(){
        super()
        this.state = {
            data:[],
            loading:true,
            intervalId: setInterval(() => {},1000)
        }
    }

   async componentDidMount(){    

    this.state.intervalId = setInterval(() => {
        this.setState({loading:this.state. loading = false})
        return () => clearInterval(this.state.intervalId)
      }, 2100);

   const getTest = await fetch('https://testimonialapi.toolcarton.com/api')
   const respon = await getTest.json()
if(respon){
    this.setState({
        data:respon
    })
}
    }


    render(){

        const styles = {
            transform:`translateX(-${this.props.index * 100}%)`,
        }
        const Card = this.state.data.map(item => {

                return  <figure class="snip1390" style={styles} data-aos="fade-left"  data-aos-duration="700">
                <img src={item.avatar} alt="profile-sample3" class="profile" />
                <figcaption>
                  <h2>{item.name}</h2>
                  <h4>{item.designation}</h4>
                  <blockquote>{item.message}</blockquote>
                </figcaption>
              </figure>
            }) 

        return(
     <div className='testimoni-container'>

        { this.state.loading ? this.state.data.map(item => {
        	return <div className="skeleton-card">
            <div className="card-img skeleton">
            </div>
            <div className="card-body">
                <h2 className="card-title skeleton">
                </h2>
                <p className="card-intro skeleton">   
                </p>
            </div>
        </div>
        }) : Card
        }

     </div>
        )
    }
}




export default Testimoni;