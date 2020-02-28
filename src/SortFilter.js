import React from 'react';

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

function SortFilter() {
  return (
  <ButtonToolbar>
    <Button variant="outline-secondary">Taper</Button>
    <Button variant="outline-secondary">Material</Button>
    <Button variant="outline-secondary">Tip Shape</Button>
    <Button variant="outline-secondary">Tip Material</Button>
    <Button variant="outline-secondary">Finish</Button>
    <Button variant="outline-secondary">Diameter</Button>
    <Button variant="outline-secondary">Series</Button>
    <Button variant="outline-secondary">Length</Button>
    <Button variant="outline-secondary">Link</Button>
  </ButtonToolbar>
  )
}

export default SortFilter;
