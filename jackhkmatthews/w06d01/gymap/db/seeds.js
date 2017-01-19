const mongoose = require('mongoose');

const databaseURL = process.env.MONGOLAB_URL || 'mongodb://localhost:27017/gymap';
mongoose.connect(databaseURL);

const Gym = require('../models/gym');

const gyms = [
  {
    name: "Nuffield Health Fitness & Wellbeing Gym",
    image: "https://www.nuffieldhealth.com/_image/thumbnail/400x225%5E/?url=https://www.nuffieldhealth.com/local/a6/77/2a5d6ace4542bed8a68f5e4c95e3/covent-garden-fitness-wellbeing-gym-facilities.jpg",
    lat: "51.425376",
    lng: "-0.411931"
  },
  {
    name: "PureGym London Aldgate",
    image: "http://wfccontractors.com/wp-content/uploads/2016/02/DSC5444.jpg",
    lat: "51.514679",
    lng: "-0.077103"
  }
]

gyms.forEach((gym) => {
  Gym.create(gym, (err, gym) => {
    if (err) return console.log(err);
    return console.log(`${gym.name} was saved.`);
  });
});



// const gym1 = Gym.new({
//   title: "blah"
// })
// gym1.save()
