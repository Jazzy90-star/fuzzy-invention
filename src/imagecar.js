import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src="https://aliciascleaningservice.com/wp-content/uploads/2019/02/alicias-housecleaning-living-room-1024x673.jpg"
          alt="Clean House"
          className="d-block w-100"
        />
        <Carousel.Caption className="carousel-caption-custom">
        <div class="overlay"></div>
          <h2>Residential Cleaning</h2>
          <p>Enjoy a sparkling clean home with our comprehensive residential cleaning solutions! Our team of trained professionals uses top-notch equipment and eco-friendly products to deliver exceptional results. From one-time deep cleans to regular maintenance cleaning, we tailor our services to meet your unique needs. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://cleanmethod.com/wp-content/uploads/2020/10/Benefits-of-hiring-a-professional-cleaning-service.jpg"
          alt="clean office"
          className="d-block w-100"
        />
        <Carousel.Caption className="carousel-caption-custom">
        <div class="overlay"></div>
          <h2>Commercial Cleaning</h2>
          <p>Keep your business shining with our comprehensive commercial cleaning solutions! Our team of trained professionals uses top-notch equipment and eco-friendly products to deliver exceptional results. From offices and retail spaces to industrial facilities and healthcare environments, we tailor our services to meet your unique needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.avail.co/wp-content/uploads/2020/06/your-guide-to-cleaning-your-apartment-before-moving-out-.jpg"
          alt="Move Out"
          className="d-block w-100"
        />
      <Carousel.Caption className="carousel-caption-custom">
      <div class="overlay"></div>
          <h2>Move Outs</h2>
          <p>
          Leave your old place spotless and get your security deposit back with our expert move-out deep cleaning solutions! Our team of trained professionals uses top-notch equipment and eco-friendly products to deliver exceptional results. We cover every inch of your former home, from the kitchen to the bathrooms, bedrooms, and living areas, to ensure a sparkling clean finish.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;