import React, { useState, useEffect } from "react";
import axios from 'axios';

function Gallery() {
  useEffect(() => {
    var imageApi = "/api/get-images";
    console.log('image gallery');

    axios.get(imageApi).then((response, err) => {
      console.log("inside")
      if (response){
        console.log('response');
        console.log(response)
      } else {
        console.log('else');
        console.err(err);
      }
  })
}, [])

return (
  <p>HI!</p>
)

}


export default Gallery;