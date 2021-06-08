import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { list } from '../util/galleriesList';
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <Container>
      <Row>
        {list.map((item, key) => Object.keys(item).map(function (keyName, keyIndex) {
          if (keyName == 'url') {
            return (
              <Col xs={6} md={4}>
                <Link to={`/gallery/${item.id}`}>
                  <Card className="bg-dark text-white">
                    <Card.Img src={process.env.PUBLIC_URL + item[keyName]} alt="Card image" />
                    <Card.ImgOverlay>
                      <Card.Title>{key + 1}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            )
          }
        }))}
      </Row>
    </Container>
  )
}



export default Gallery;