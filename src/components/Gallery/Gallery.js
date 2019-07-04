import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./gallery.css";

const Gallery = (props) => {
        const images = props.images;

        return (
            <Fragment>
              { images && images.map( (img) => <img src={img.url} key={img._id} alt={img._id} className="productImage" />)}
            </Fragment>
        )

  }

export default Gallery;