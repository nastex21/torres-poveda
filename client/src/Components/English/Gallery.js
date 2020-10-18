import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Carousel, { Modal, ModalGateway } from "react-images";
import GalleryModule from "react-photo-gallery";
import Measure from "react-measure";
import InfiniteScroll from "react-infinite-scroller";

function Gallery() {
  const [imageArray, setArray] = useState([]);
  const [images, setImages] = useState([]);
  const [apiRequestLoaded, setRequest] = useState(false);

  const [hasMoreItems, setHasMoreItems] = useState(true);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  //get original set of photos
  const getPhotos = () => {
    var imageApi = "/api/get-images";

    axios.get(imageApi).then((response, err) => {
      if (response) {
        setArray([...imageArray, ...response.data]);
        setRequest(true)
      }
    });
  };

  //get next slice of photos
  const loadMorePhotos = () => {
    console.log("constantly being called");
    console.log(
      images.concat(imageArray.slice(images.length, images.length + 6))
    );
    setImages(
      images.concat(imageArray.slice(images.length, images.length + 6))
    );
  };

  useEffect(() => {
    console.log("being called");
    getPhotos();
  }, []);

  useEffect(() => {
    if (images.length == 0) {
      setImages(imageArray.slice(0, 6));
    }
  }, [imageArray]);

  useEffect(() => {
    if (images.length !== 0 && imageArray.length) {
      if (images.length == imageArray.length) {
        setHasMoreItems(false);
      }
    }
  }, [images]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const ImageDiv = () => {
    var items = [];
    images.map((track, i) => {
      items.push(
        <div className="track" key={i}>
          <img src={track.src} alt="" width="150" height="150" />
        </div>
      );
    });
    return items;
  };

  const loader = <div className="loader">Loading ...</div>;

  console.log(imageArray);
  console.log(images);
  return (
   <Container style={{height:100 + 'vh', overflow: 'auto'}} >
      <InfiniteScroll
        pageStart={0}
        loadMore={apiRequestLoaded ? loadMorePhotos : null}
        hasMore={hasMoreItems}
        loader={loader}
        useWindow={false}
        >
        <GalleryModule photos={images} onClick={openLightbox} />
      </InfiniteScroll>
    </Container>
  );
}

export default Gallery;
