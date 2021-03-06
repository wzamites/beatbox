import React from 'react';
import MyNavbar from './MyNavbar'
import SortFilter from './SortFilter'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import Image1 from './images/productimages/scm-corpsmaster-snare-colin-mcnutt.png'
import Image2 from './images/productimages/smap-corpsmaster-signature-snare-john-mapes.png'
import Image3 from './images/productimages/srhn-corpsmaster-signature-snare-ralph-hardimon-nylon-tip.png'
import Image4 from './images/productimages/sth-corpsmaster-signature-snare-thom-hannum.png'
import Image5 from './images/productimages/sth3-corpsmaster-signature-snare-thom-hannum-piccolo-tip.png'

function CardSection() {
  return (
<div>
<div className="containerLayout">
<SortFilter />
</div>

    <div className="containerLayout">
  <Card className="cardContainer" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image1} vspace="75" />
  <Card.Body>
    <Card.Title>Colin Mcnutt</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark">Subscribe</Button><span>  </span>
    <Button variant="light">Add to Cart</Button>
  </Card.Body>
</Card>

<Card className="cardContainer" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image2} vspace="75"/>
  <Card.Body>
    <Card.Title>John Mapes</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark">Subscribe</Button><span>  </span>
    <Button variant="light">Add to Cart</Button>
  </Card.Body>
</Card>

<Card className="cardContainer" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image3} vspace="75"/>
  <Card.Body>
    <Card.Title>Ralph Hardimon</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark">Subscribe</Button><span>  </span>
    <Button variant="light">Add to Cart</Button>
  </Card.Body>
</Card>

<Card className="cardContainer" style={{ width: '18rem' }}>
<Card.Img variant="top" src={Image5} vspace="75"/>
<Card.Body>
  <Card.Title>Thom Hannum Piccolo</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="dark">Subscribe</Button><span>  </span>
  <Button variant="light">Add to Cart</Button></Card.Body>
</Card>

<Card className="cardContainer" style={{ width: '18rem' }}>
<Card.Img variant="top" src={Image1} vspace="75" />
<Card.Body>
  <Card.Title>Colin Mcnutt</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="dark">Subscribe</Button><span>  </span>
  <Button variant="light">Add to Cart</Button>
</Card.Body>
</Card>

<Card className="cardContainer" style={{ width: '18rem' }}>
<Card.Img variant="top" src={Image4} vspace="75"/>
<Card.Body>
  <Card.Title>Thom Hannum</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="dark">Subscribe</Button><span>  </span>
  <Button variant="light">Add to Cart</Button></Card.Body>
</Card>
</div>

<div className="containerLayout-sm">
<Button variant="outline-secondary" size="lg" block>
  Load More (23)
</Button>
</div>

</div>
  );
}

export default CardSection;
