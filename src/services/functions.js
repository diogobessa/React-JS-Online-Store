import { configData } from '../config';

const getPrice = (price) => {
  return (price/100).toLocaleString('en-EN', { style: 'currency', currency: 'EUR' });;
}

const returnFeaturedImage = (imgs) => {
  const featuredImage = imgs.find( (img) => {
      return img.featured === true;
  });
  return featuredImage.url;
}

const convertToTimeStamp = (strDate) => {
  const stamp = Date.parse(strDate);
  return stamp/1000;
}

const cartTotal = (itemsOnCart) => {
  let cartValue = 0;
  itemsOnCart.forEach( (i) => {
    cartValue += (i.price*i.quantity)
  });
  console.log('cart', cartValue);
  return (getPrice(cartValue));
}

export {
    getPrice,
    returnFeaturedImage,
    convertToTimeStamp,
    cartTotal
}