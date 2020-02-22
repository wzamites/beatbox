import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Image1 from './images/productimages/scm-corpsmaster-snare-colin-mcnutt.png'
import Image2 from './images/productimages/smap-corpsmaster-signature-snare-john-mapes.png'
import Image3 from './images/productimages/scm-corpsmaster-snare-colin-mcnutt.png'
import Image4 from './images/productimages/scm-corpsmaster-snare-colin-mcnutt.png'
import Image5 from './images/productimages/scm-corpsmaster-snare-colin-mcnutt.png'



function CardSection() {
  return (
    <div className="containerLayout">

  <Card className="cardContainer" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image1} />
  <Card.Body>
    <Card.Title>Colin Mcnutt</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="light">Go somewhere</Button>
  </Card.Body>
</Card>

<Card className="cardContainer" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image2} />
  <Card.Body>
    <Card.Title>John Mapes</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="light">Go somewhere</Button>
  </Card.Body>
</Card>

<Card className="cardContainer" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image3} />
  <Card.Body>
    <Card.Title>Ralph Hardimon</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="light">Go somewhere</Button>
  </Card.Body>
</Card>

<Card className="cardContainer" style={{ width: '18rem' }}>
<Card.Img variant="top" src={Image1} />
<Card.Body>
  <Card.Title>Colin Mcnutt</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="light">Go somewhere</Button>
</Card.Body>
</Card>

<Card className="cardContainer" style={{ width: '18rem' }}>
<Card.Img variant="top" src={Image2} />
<Card.Body>
  <Card.Title>John Mapes</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="light">Go somewhere</Button>
</Card.Body>
</Card>

<Card className="cardContainer" style={{ width: '18rem' }}>
<Card.Img variant="top" src={Image3} />
<Card.Body>
  <Card.Title>Ralph Hardimon</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="light">Go somewhere</Button>
</Card.Body>
</Card>

</div>
  );
}

export default CardSection;
