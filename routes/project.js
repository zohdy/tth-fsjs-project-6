const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res) => {
    const imageArray = projects[req.params.id - 1].image_urls;
    // Removing the first imgUrl in the array (the landing img)
    const imgUrls = imageArray.slice(1);
    const project = projects[req.params.id - 1];
    res.render('project', { project, imgUrls });
});

module.exports = router;