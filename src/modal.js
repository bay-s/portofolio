import React from 'react'

function ModalImage(props){

    return(
   <div className='image-wraps'>
            <img src={props.images} alt="test" />
      
<div  className="arrow-container">
<i className="fa fa-times close" aria-hidden="true"></i>
</div>
   </div>
    )
}


export default ModalImage;