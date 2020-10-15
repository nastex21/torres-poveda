import React, { useState, useEffect } from "react";
import axios from 'axios';

function Gallery() {
  useEffect(() => {
    var imageApi = "/api/get-images";
    console.log('image gallery');

    axios.get(imageApi).then((response) => {
      
  })
})

return (
  <p>HI!</p>
)

}


export default Gallery;