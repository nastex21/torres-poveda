import React, { useState, useEffect } from "react";
import axios from "axios";
import useInfiniteScroll from "../util/useInfiniteScroll";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
  const [imageArray, setArray] = useState([]); //original fetched, huge array
  const [images, setImages] = useState([]); //new spliced images array
  const [isFetching, setIsFetching] = useInfiniteScroll(addMoreImages);

  //get original set of photos
  const getPhotos = () => {
    var imageApi = "/api/get-images";

    axios.get(imageApi).then((response, err) => {
      if (response) {
        setArray([...imageArray, ...response.data]);
      }
    });
  };


  function addMoreImages() {
    setTimeout(() => {
      setImages(
        images.concat(imageArray.slice(images.length, images.length + 12))
      );
      setIsFetching(false);
    }, 2000);
  }

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    if (images.length == 0) {
      var newImages = images.concat(
        imageArray.slice(images.length, images.length + 12)
      );
      console.log(newImages);
      setImages([...images, ...newImages]);
    }
  }, [imageArray]);


  const imageScroll = () => {
    return (
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row xs={2} md={4}>
              {images.map(item =>
                <Image src={item.src} thumbnail />
              )
              }
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
        {images.length !== imageArray.length && isFetching ? "Fetching more list items..." : null}
      </Container>
    );
  };

  return <>{imageArray.length > 0 ? imageScroll() : null}</>;
}

export default Gallery;
