import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { list } from '../util/galleriesList';

function Gallery() {
  return (
    <Container>
      <Row>
        {list.map((item, key) => Object.keys(item).map(function (keyName, keyIndex) {
          if (keyName == 'url') {
            return (
              <Col xs={6} md={4}>
                <Image src={process.env.PUBLIC_URL + item[keyName]} thumbnail />
              </Col>
            )
          }
        }))}
      </Row>
    </Container>
  )
}



export default Gallery;