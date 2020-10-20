import React, { useState, useEffect, useReducer } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Carousel, { Modal, ModalGateway } from "react-images";
import GalleryModule from "react-photo-gallery";
import Measure from "react-measure";

function Gallery() {
  const [imageArray, setArray] = useState([]);
  const [images, setImages] = useState([]);

  const imgReducer = (state, action) => {
    switch (action.type) {
      case 'STACK_IMAGES':
        return { ...state, images: state.images.concat(imageArray.slice(images.length, images.length + 6)) }
      case 'FETCHING_IMAGES':
        return { ...state, fetching: action.fetching }
      default:
        return state;
    }
  }
  const [imgData, imgDispatch] = useReducer(imgReducer,{ images:[], fetching: true});
  // next code block goes here

  var intObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry)
      console.log(entry.isIntersecting) // returns true if the target intersects the root element
    })
  },
  {
    // default options
  }
);
let target = document.querySelector('#root');
intObserver.observe(target); // start observation

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

  const imageScroll = () => {
    console.log("called");
    return (
      <>
        <GalleryModule photos={images} />

      </>
    );
  };

  return <>{imageArray.length > 0 ? imageScroll() : null}</>;
}

export default Gallery;
