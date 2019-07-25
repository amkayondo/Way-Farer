# Way-Farer
[![Maintainability](https://api.codeclimate.com/v1/badges/7c3f8da2d189be616172/maintainability)](https://codeclimate.com/github/amkayondo/Way-Farer/maintainability) [![Coverage Status](https://coveralls.io/repos/github/amkayondo/Way-Farer/badge.svg?branch=develop)](https://coveralls.io/github/amkayondo/Way-Farer?branch=develop) [![Build Status](https://travis-ci.org/amkayondo/Way-Farer.svg?branch=develop)](https://travis-ci.org/amkayondo/Way-Farer)

WayFarer is a public bus transportation booking service.

## UI Required features
- [Sign up.](https://amkayondo.github.io/Way-Farer/UI/signup.html)
- [Sign in.](https://amkayondo.github.io/Way-Farer/UI/signin.html)
- [Admin can create a trip.](https://amkayondo.github.io/Way-Farer/UI/create_trip.html)
- [Admin can cancel a trip.](https://amkayondo.github.io/Way-Farer/UI/admin/trip_del.html)
- [View all trips.](https://amkayondo.github.io/Way-Farer/UI/index.html)
- [View a specific trip.](https://amkayondo.github.io/Way-Farer/UI/trip.html)
- [Book a seat on a trip. ](https://amkayondo.github.io/Way-Farer/UI/book.html)
- [View all bookings.](https://amkayondo.github.io/Way-Farer/UI/admin/index.html)
- [View all bookings by the user.](https://amkayondo.github.io/Way-Farer/UI/bookings.html)

- [Delete a booking.](https://amkayondo.github.io/Way-Farer/UI/booking.html)

# Optional features
- [Filter trips based on origin.](https://amkayondo.github.io/Way-Farer/UI/index.html)
- [Filter trips based on destination.](https://amkayondo.github.io/Way-Farer/UI/index.html) 
- [Specify a seat number when making a booking.](https://amkayondo.github.io/Way-Farer/UI/book.html)

# Technonlogies
- **Express JS** - API development framework
- **Node** - run time environment for JavaScript
- **Mocha and Chai** - for testing
- **Eslint** - code analysis tool for identifying problematic patterns found in JavaScript code
- **Babel JS** - JavaScript compiler (**ES6** to **ES5**)

# Requirements and Installation steps
## **You need the following to be able to run the application**

[Node](https://nodejs.org/en/download/) a runtime environment for JavaScript

[Postman](https://www.getpostman.com/downloads/) to test the Api endpoints

[Visual studio code](https://code.visualstudio.com/download) for editing and running the app

## **Clone the project**
    - git clone https://github.com/amkayondo/Way-Farer.git
    - cd /Way-Farer
    - npm install (to install required dependencies)
    - npm run dev (to start the development server)

## **Testing**
    - npm run test


## **API endpoints**
`- POST /auth/signin - User Signin` 

`- POST /auth/signup - User to create an account` 

`- POST /trips - Create a trip`

`- GET /trips/<:trip-id> - Get a specific trip`

`- GET /trips - Get all trips.`

`- PATCH /trips/<:trip-id>/cancel - Cancel a trip`

`- POST /bookings - Book a seat on a trip`

`- GET /bookings - View all bookings`

`- DELETE /bookings/<:booking-id> - Delete a booking`

`- GET /car?origin=kigali -Filter trips based on origin.`

`- GET /car?destination=kampala -Filter trips based on destination.`


## **Pivotal Tracker Stories**
[https://www.pivotaltracker.com/n/projects/2361292](https://www.pivotaltracker.com/n/projects/2361292)

## **UI Templates**

[https://amkayondo.github.io/Way-Farer/UI/](https://amkayondo.github.io/Way-Farer/UI/)

## **API link**
[https://way-fare.herokuapp.com/](https://way-fare.herokuapp.com/)
# **Author**
## **Kayondo Edward**