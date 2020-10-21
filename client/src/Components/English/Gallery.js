import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useInfiniteScroll from "../util/useInfiniteScroll";
import GalleryModule from "react-photo-gallery";
import Container from "react-bootstrap/Container";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
  const [imageArray, setArray] = useState([]); //original fetched, huge array
  const [images, setImages] = useState([]); //new spliced images array
  const [isFetching, setIsFetching] = useInfiniteScroll(addMoreImages);

  //get original set of photos
  const getPhotos = () => {
    console.log("getPhotos()");
    var imageApi = "/api/get-images";

    axios.get(imageApi).then((response, err) => {
      if (response) {
        setArray([...imageArray, ...response.data]);
      }
    });
  };


  function addMoreImages() {
    console.log("addMoreImages()");

    setTimeout(() => {
      setImages(
        images.concat(imageArray.slice(images.length, images.length + 6))
      );
      setIsFetching(false);
    }, 2000);
  }

  useEffect(() => {
    console.log("useEffect, []");
    getPhotos();
  }, []);

  useEffect(() => {
    console.log("useEffect, [imageArray]");
    if (images.length == 0) {
      var newImages = images.concat(
        imageArray.slice(images.length, images.length + 6)
      );
      console.log(newImages);
      setImages([...images, ...newImages]);
    }
  }, [imageArray]);


  const imageScroll = () => {
    console.log("called");
    return (
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <GalleryModule photos={images} />
          </SRLWrapper>
        </SimpleReactLightbox>
        {isFetching && "Fetching more list items..."}
      </Container>
    );
  };

  return <>{imageArray.length > 0 ? imageScroll() : null}</>;
}

export default Gallery;
