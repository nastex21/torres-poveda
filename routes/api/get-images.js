const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, '../../client/src/assets/Images');
const readdirp = require('readdirp');
//const testFolder = '../../client/src/assets/Images/';

router.get('/', (req, res) => {

  // In this example, this variable will store all the paths of the files and directories inside the providen path
  var allFilePaths = [];

  // Iterate recursively through a folder
  /*  readdirp('./', { type: 'files', fileFilter: ['*.jpg', '*jpeg', '*.png'], depth: 1 })
   .on('data', (entry) => {
     const {path} = entry;
     console.log(`${JSON.stringify({path})}`);
   })
     // Optionally call stream.destroy() in `warn()` in order to abort and cause 'close' to be emitted
     .on('warn', error => console.error('non-fatal error', error))
     .on('error', error => console.error('fatal error', error))
     .on('end', () => console.log('done')); */
  readdirp('./client/src/assets/Images', { fileFilter: ['*.jpg', '*.jpeg', '*.png'] })
    .on('data', function (entry) {
      // do something with each JavaScript file entry
      console.log(entry);
    });


}
);

module.exports = router;
