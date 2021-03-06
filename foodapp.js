// Food App - EaThis

// Interface
// What does it solve?
// Too many choices, leading to indecisiveness. 
// - Provides one restaurant at random within search parameters.

// Search Parameters:
// Categories (Vegetarian/Asian/Western/etc)
// Distance/Range from user
// Price Range

// Restaurant Info:
// Ratings from Google/Yelp/etc
// Transportation times:
// - Walk time
// - Public Transportation time
// - Car time

//https://whatwebcando.today/ Check if the browser on the device supports certain features, notifications, Geolocation (GPS), 
// Geolocation
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
// [User Interface]  --> REACT & PWA
// https://engineering.musefind.com/build-your-first-progressive-web-app-with-react-8e1449c575cd
// [APIs Involved]
// Yelp, Foursquare, Google Maps API
// Yelp API Resources
// http://jacklyons.me/yelp-fusion-api-access-token/


// [Database]
// https://firebase.google.com/?authuser=0
// [Randomizer Algorithm ] ^^

const request = require('request')
const https = require('https')

let parameters = {
  term: 'indian',
  location: 'vancouver, bc',
  latitude: '49.274330',
  longitude: '-123.123147'
}

const options = {
  url: 'https://api.yelp.com/v3/businesses/search',
  qs: parameters,
  headers: {
    Authorization:
    'Bearer QLwNEoQoCB37JxKVzdqXPe-V7JKCQctqilvLA6mMkHYt1110gj-5vhSe2sWtaxSS-rLQcTQGWnq4g3QrUGUHK9MakysSGoYNAGaF9CY8g8dhUeMDWjlugUzi0b92WnYx'
  }
}


request.get(options, function(err, response) {
  let results = JSON.parse(response.body)
  results.businesses.forEach((value, index) => {
    console.log(value.name)
  })
  // console.log(JSON.parse(response.body))
})  



var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

function success(pos) {
  var crd = pos.coords

  console.log('Your current position is:')
  console.log(`Latitude : ${crd.latitude}`)
  console.log(`Longitude: ${crd.longitude}`)
  console.log(`More or less ${crd.accuracy} meters.`)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}

navigator.geolocation.getCurrentPosition(success, error, options)
