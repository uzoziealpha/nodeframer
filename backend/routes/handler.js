const express = require('express');


const router = express.Router();


router.get('/openlid', (req,res) => {
    const str = [{
        "lid": ['Open', 'Closed']
    }]
    res.end(JSON.stringify(str));
})

router.get('/closelid', (req,res) => {
    const str = [{
        "lid": ['Open', 'Closed']
    }]
    res.end(JSON.stringify(str));
})

module.exports = router;