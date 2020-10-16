import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryModule from "react-photo-gallery";

function Gallery() {
  const [imageArray, setArray] = useState([]);

  useEffect(() => {
    var imageApi = "/api/get-images";

    axios.get(imageApi).then((response, err) => {
      if (response) {
        setArray([...response.data]);
      }
    });
  }, []);

  console.log(imageArray);
  return (
    <div>
      <GalleryModule photos={imageArray} />
    </div>
  );
}

export default Gallery;
