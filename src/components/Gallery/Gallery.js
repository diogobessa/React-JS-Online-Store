import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./gallery.css";

class Gallery extends React.Component{
    
   constructor(props){
       super(props);
   }
    //console.log('gallery props', props.images);
    handleOnDragStart = e => e.preventDefault();

    responsive = {
        0: { items: 1 },
        1024: { items: 2 },
      }
      render(){
        const images = this.props.images;
        console.log(images);
        return (
            <Fragment>
              { images && images.map( (img) => <img src={img.url} key={img._id} alt={img._id} onDragStart={this.handleOnDragStart} className="productImage" />)}
            </Fragment>
        )
    }
  }

export default Gallery;

/*
{ images && <AliceCarousel responsive={this.responsive} mouseDragEnabled>{images && images.map( (img) => <img src={img.url} key={img._id} alt={img._id} onDragStart={this.handleOnDragStart} className="productImage" />)}</AliceCarousel> }
*/
