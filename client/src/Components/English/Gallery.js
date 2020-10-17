import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Carousel, { Modal, ModalGateway } from "react-images";
import GalleryModule from "react-photo-gallery";
import Measure from 'react-measure';
import debounce from 'debounce';

function Gallery() {
  const [imageArray, setArray] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  //Dynamic Loading
  const [images, setImages] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [loadedAll, setLoadedAll] = useState(false);
  const TOTAL_PAGES = 3;

  const loadMorePhotos = debounce(() => {
    console.log("triggered")
    if (pageNum > TOTAL_PAGES) {
      setLoadedAll(true);
      return;
    }

    setImages(images.concat(imageArray.slice(images.length, images.length + 6)));
    setPageNum(pageNum + 1);
  }, 200);

  useEffect(() => {
    var imageApi = "/api/get-images";

    axios.get(imageApi).then((response, err) => {
      if (response) {
        setArray([...response.data]);
      }
    });
  }, []);

  useEffect(() => {
    setImages(imageArray.slice(0, 6))
  }, [imageArray])

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    let scrollY =
      document.body.scrollY ||
      document.body.pageYOffset ||
      document.documentElement.scrollTop;
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
      loadMorePhotos();
    }
  };

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
    <Measure bounds onResize={(contentRect) => setWidth({ width: contentRect.bounds.width })}>
      {   
        ({ measureRef }) => {
          if (width < 1 ){
            return <div ref={measureRef}></div>;
          }   
          let columns = 1;
          if (width >= 480){
            columns = 2;
          }   
          if (width >= 1024){
            columns = 3;
          }   
          if (width >= 1824){
            columns = 4;
          }   
          return (
          <Container>
          <GalleryModule photos={images} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={imageArray.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </Container>
          )
        }   
      }   
      </Measure>

  );
}

export default Gallery;
