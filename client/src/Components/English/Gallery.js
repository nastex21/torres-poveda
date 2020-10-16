import React, { useState, useEffect } from "react";
import axios from 'axios';
import GalleryModule from "react-photo-gallery";

function Gallery() {
  const [imageArray, setArray] = useState([]);

/*   const photos = [
    {
      src: 'http://example.com/example/img1.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1
    }
  ]; */

  useEffect(() => {
    var imageApi = "/api/get-images";
    console.log('image gallery');

    axios.get(imageApi).then((response, err) => {
      console.log("inside")
      if (response) {
        console.log('response');
        console.log(response);
        setArray([...response.data]);

      }
    })
  }, [])

  console.log(imageArray);
  return (
    <div>
    <GalleryModule photos={imageArray} />
    </div>
  )

}


export default Gallery;