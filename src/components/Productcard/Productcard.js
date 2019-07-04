import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Title, Price } from '../../components';
import './Productcard.css';

const Productcard = (props) => {   

        const {id, title , price, image } = props.info;

        return(
            <Link to={ `/product/${id}` } className="productCardLink">
                <div className="productCard" id={ id }>
                    <figure>
                        <Image src={ image } alt={ title }></Image>
                        <figcaption>
                            <Title title={ title }></Title>
                            <Price className="cardPrice" price={ price }></Price>
                        </figcaption>
                    </figure>
                </div>
            </Link>
        )
}

export default Productcard;