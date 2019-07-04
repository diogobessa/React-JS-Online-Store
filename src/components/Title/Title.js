import React, { Fragment } from 'react';
import './title.css';

const Title = (props) => {
    
    const {title} = props;
    
    return(
        <Fragment>
            <p className="titleTag"> { title }</p>
        </Fragment>
    )

}

export default Title;