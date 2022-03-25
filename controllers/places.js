const router = require('express').Router();
const places = require('../models/places.js')

// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('places/new')
})

//POST /places
router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})


router.get('/', (req, res) => {
    // let places = [{
    //     name: 'H-Thai-ML',
    //     city: 'Seattle',
    //     state: 'WA',
    //     cuisines: 'Thai, Pan-Asian',
    //     // pic: '/images/pexels-pixabay-262978.jpg'
    //     pic: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    // }, {
    //     name: 'Coding Cat Cafe',
    //     city: 'Phoenix',
    //     state: 'AZ',
    //     cuisines: 'Coffee, Bakery',
    //     // pic: '/images/pexels-elevate-1267320.jpg'
    //     pic: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    // }];
    res.render('places/index', {places});
});

// GET /PLACES
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show'), { place: places[id]}
    }
})

//HOME ROUTE
router.get('/', (req, res) => {
    res.render('places/index', { places });
})

module.exports = router;

