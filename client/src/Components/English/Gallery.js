import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Carousel, { Modal, ModalGateway } from "react-images";
import GalleryModule from "react-photo-gallery";
import Measure from "react-measure";
import InfiniteScroll from "react-infinite-scroll-component";

function Gallery() {
  const [imageArray, setArray] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  //Dynamic Loading
  const [images, setImages] = useState([]);

  const loadMorePhotos = () => {
    console.log('constantly being called')
      setImages(
        images.concat(imageArray.slice(images.length, images.length + 6))
      );

  };

  useEffect(() => {
    console.log('being called')
    var imageApi = "/api/get-images";

    axios.get(imageApi).then((response, err) => {
      if (response) {
        setArray([...response.data]);
      }
    });
  }, []); 


  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  console.log(imageArray);
  return (
          <Container>
            <InfiniteScroll
              dataLength={imageArray.length}
              next={loadMorePhotos()}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <GalleryModule photos={images} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={imageArray.map((x) => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </InfiniteScroll>
          </Container>
  );
}

export default Gallery;
