const router = require('express').Router();

// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('places/new')
})

//POST /places
router.post('/', (req, res) => {
    console.log(req.body);
    // if(!req.body.pic){
    //     //Default image if one is not provided
    //     req.body.pic = 'http://placekitten.com/400/400'
    // }
    // if(!req.body.city){
    //     req.body.city = 'Anytown'
    // }
    // if(!req.body.state){
    //     req.body.state = 'USA'
    // }
    // places.push(req.body);
    res.redirect('/places');
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        // pic: '/images/pexels-pixabay-262978.jpg'
        pic: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        // pic: '/images/pexels-elevate-1267320.jpg'
        pic: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    }];
    res.render('places/index', {places});
});

//HOME ROUTE
router.get('/', (req, res) => {
    res.render('places/index', { places });
})

module.exports = router;

