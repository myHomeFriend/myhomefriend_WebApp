import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import modularKitchen from '../../images/modularKitchen.jpg'
import './AdvertisementCarousel.css';

const AdvertisementCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={modularKitchen}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hettic</h3>
          <p>Kitchen Hardware</p>
          <Link to={'/'}>Shop Now</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={modularKitchen}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Kaff</h3>
          <p>Premium Kitchen Cooktops</p>
          <Link to={'/'}>Shop Now</Link>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  )
}

export default AdvertisementCarousel;