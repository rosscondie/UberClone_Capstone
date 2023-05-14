<kbd>
 <img width="250"  alt="Uber Logo" src="https://cdn.freebiesupply.com/logos/large/2x/uber-15-logo-png-transparent.png">
 </kbd>
 <br></br>
 
 
# UberCloneApp - CodeClan Capstone Project

The UberCloneApp is a mobile application designed to replicate the functionality of the official Uber App allowing the user to select a pick up and drop off destination to select a ride.

This project was built using:

- React Native
- Expo 
- Redux
- Tailwind CSS
- GooglePlacesAutocomplete
- React Maps
- React Navigation

### Screenshots

## Brief

### Create a similar version of the current Uber Mobile App with modifications to improve the app

### MVP

A user should be able to:

- Enter a pickup destination.
- Enter a drop off destination.
- Select a vehicle type (size).
- Select the tip incentive for the driver to take the ride.
- Select a ride.
- View cost of a ride from point A to point B.
- View duration of a ride.

#### Possible Extensions:

- Rate Driver out of 5 stars.
- Add & Save Addresses to profile.
- Authentication to log into the app.
- Expand on UberEats screen.


## Project Setup

You will need Xcode installed to run this on a simulator locally and the Expo app should automatically download to the simulator or download the Expo app onto your device from the App store or Play store.

Install the requred node modules:

```
npm install
```

You will need an API key from [Google Cloud Platform](https://cloud.google.com/) - Enable Billing(This is all free) & Enable the following API's:

- Places API
- Distance Matrix API
- Directions API


Create a .env file at the top level of the folder directory (alongside .gitignore/App.js) - add the following:

```
GOOGLE_MAPS_APIKEY="your api key goes here"
```

Start the application:

```
npm start
```

You will be offered a QR code to scan with your device if using Expo but if you are using a simulator press 'i' to open.

