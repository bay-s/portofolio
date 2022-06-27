import React from 'react'
import arrL from './img/left-arrow.png'
import arrR from './img/right-arrow.png'
function ModalImage(props){

    return(
<>
<div className='image-wraps ' ref={props.imgRef} >
            <img src={props.images} alt="test" ref={props.imgRef}/>
      
{/* <div  className="arrow-container">
<i className="fa fa-times closes" aria-hidden="true" onClick={props.close}></i>
</div> */}
<i className="fa fa-times closes" aria-hidden="true" onClick={props.close}></i>
   </div>
   <div className='slider'>
   <i className="fa fa-long-arrow-left left-slide" aria-hidden="true" onClick={props.prevSlide}></i>
<i className="fa fa-long-arrow-right right-slide" aria-hidden="true" onClick={props.nextSlide}></i>
</div>
</>
    )
}


export default ModalImage;