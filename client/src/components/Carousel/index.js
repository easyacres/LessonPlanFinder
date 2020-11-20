import React from 'react';
import {Carousel} from 'react-bootstrap'
import './Carousel.css'


function CarouselPDF() {
    return (
<Carousel>
  <Carousel.Item>
    <img
      height={500}
      style={{borderRadius: '8px', boxShadow: 'inherit'}}
      className="d-block"
      src="https://s3.studylib.net/store/data/007883124_2-e1384524eea4face6ed834a58ae0ccc6.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      height={500}
      style={{borderRadius: '8px', boxShadow: 'inherit'}}
      className="d-block"
      src="https://s3.studylib.net/store/data/007883124_2-e1384524eea4face6ed834a58ae0ccc6.png"
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      height={500}
      style={{borderRadius: '8px', boxShadow: 'inherit'}}
      className="d-block"
      src="https://s3.studylib.net/store/data/007883124_2-e1384524eea4face6ed834a58ae0ccc6.png"
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

);
}
export default CarouselPDF;