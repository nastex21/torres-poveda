const express = require('express');
const router = express.Router();
const readdirp = require('readdirp');

router.get('/', (req, res) => {

  // In this example, this variable will store all the paths of the files and directories inside the providen path
  var allFilePaths = [];

  // Iterate recursively through a folder
  readdirp('./client/public/gallery_photos', { type: 'files', fileFilter: ['*.jpg', '*jpeg', '*.png'], depth: 1 })
    .on('data', (entry) => {
      var { path } = entry;

      var dataObj = {};
      path = path.replace(/\\/g, "/");
      dataObj.src = '/gallery_photos/' + path;
      allFilePaths.push(dataObj);  
    })
    // Optionally call stream.destroy() in `warn()` in order to abort and cause 'close' to be emitted
    .on('warn', error => console.error('non-fatal error', error))
    .on('error', error => console.error('fatal error', error))
    .on('end', () => res.send(allFilePaths));
}
);

module.exports = router;
