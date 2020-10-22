import React, { useState, useEffect } from "react";
import axios from "axios";
import useInfiniteScroll from "../util/useInfiniteScroll";
import Container from "react-bootstrap/Container";
import { SRLWrapper } from "simple-react-lightbox";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

function Gallery() {
  const [imageArray, setArray] = useState([]); //original fetched, huge array
  const [images, setImages] = useState([]); //new spliced images array
  const [isFetching, setIsFetching] = useInfiniteScroll(addMoreImages);
  //Modal stuff
  const [show, setShow] = useState(false);
  //Carousel stuff
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log(e);
    console.log(selectedIndex);
    setIndex(selectedIndex);
  };

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

  const clickModal = function (num) {
    setIndex(num);
    setShow(true);
  };

  console.log(index);
  const imageScroll = () => {
    return (
      <SRLWrapper>
        <Container>
          <Row xs={2} md={4}>
            {images.map((item, num) => (
              <Image
                src={item.src}
                key={num}
                className="w-100"
                data-target="#carousel"
                data-slide-to={num}
                thumbnail
                onClick={() => clickModal(num)}
              />
            ))}
          </Row>
          {images.length !== imageArray.length && isFetching
          ? "Fetching more images.."
          : null}
        </Container>
      </SRLWrapper>
    );
  };

  return <>{imageArray.length > 0 ? imageScroll() : null}</>;
}

export default Gallery;
