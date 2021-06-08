import React from 'react';
import Card from 'react-bootstrap/Card';
import { list } from '../util/galleriesList';

function Gallery() {

  return Object.keys(list).map((item, index) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + list[item]} />
      </Card>
    )
  })
}

export default Gallery;