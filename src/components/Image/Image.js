import React, { Fragment } from 'react';

const Image = (props) => {
    const { src, alt } = props;
    const noimg = "http://diogobessa.com/_remote/imgs/noimg.png";
    return(
        <Fragment>
            { src ? <img alt={ alt } src={ src } /> : <img src={ noimg } alt={ alt } />}
        </Fragment>
    )
}

export default Image;