import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import useInfiniteScroll from "../util/useInfiniteScroll";
import Carousel, { Modal, ModalGateway } from "react-images";
import GalleryModule from "react-photo-gallery";
import Measure from "react-measure";

function Gallery() {
  const [imageArray, setArray] = useState([]);
  const [images, setImages] = useState([]);

  const [apiRequestLoaded, setRequest] = useState(false);

  const [hasMoreItems, setHasMoreItems] = useState(true);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [isFetching, setIsFetching] = useInfiniteScroll(loadMorePhotos);

  //get original set of photos
  const getPhotos = () => {
    var imageApi = "/api/get-images";

    axios.get(imageApi).then((response, err) => {
      if (response) {
        setArray([...imageArray, ...response.data]);
        setRequest(true);
      }
    });
  };

  //get next slice of photos
  function loadMorePhotos() {
    console.log("constantly being called");

    setTimeout(() => {
      setImages(
        images.concat(imageArray.slice(images.length, images.length + 6))
      );
      setIsFetching(false);
    }, 2000);
  }

  useEffect(() => {
    console.log("being called");
    getPhotos();
  }, []);

  useEffect(() => {
    if (images.length == 0) {
      setImages(
        images.concat(imageArray.slice(images.length, images.length + 6))
      );
    }
  }, [imageArray]);

  useEffect(() => {
    if (images.length !== 0 && imageArray.length) {
      if (images.length == imageArray.length) {
        setHasMoreItems(false);
      }
    }
  }, [images]);

  /*   {images.map((item, i)  => <img src={item.src}  key={i} style={{height: '1200px', width: '100px'}}/>)}
   */

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const imageScroll = () => {
    console.log("called");
    return (
      <Container>
        <GalleryModule photos={images} onClick={openLightbox} />

        {isFetching && "Fetching more list items..."}
      </Container>
    );
  };

  return <>{imageArray.length > 0 ? imageScroll() : null}</>;
}

export default Gallery;
