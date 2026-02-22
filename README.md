# Bookinn
Created and designed by Jean-Hanna SALEH

## What is Bookinn
BookInn is web app that allows you to explore the mystical land of Orlond, rent an inn's room and enjoy the view !

Amongst the available features, you can :
* Scroll through an animated landing page
* From the home page, you can :
  * Checkout the available rooms
  * Examine their photos
  * Get basic room informations
* From the room page, you can :
  * Read their details (About, The place, note section)
  * Look into more informations through modals : Amenities, House rules, Safety & property and Cancellation policy
  * See where the room is located through an interactive map of Orlond (you can see every possible town of Orlond on it)
  * See the host
  * Access the navigation bar, and look up the closest room to your preferences
  * Specify the check in and check out date and the number of guests which automatically displays a calculated price
* From the search page, you can :
  * Look for a room matching a location, a capacity (nb of guests), and availability
  * See the search results ordered by preferences starting with the distance to your prefered location
  * See the exact location when hovering above the picture of a room
* Examine the host page regarding a room you are interested in, there you'll find :
  * Basic host informations : (school, hobbys, langages spoken, etc.)
  * Confirmed Informations (Identity, Phone number)
  * Listings (other rooms)
  * a "Report the host" button
* Create an account and sign in
* As a user, you can :
  * Book a room
  * Access the trips page that lists every trip booked
* From the trip page, you can :
  * Access a summary of the room booked (check in date, check out date, number of guests, the exact location of the room)
  * Cancel the reservation (depending on the refund policy, you either get a full refund, half a refund or no refund)
* The web app being design responsive, you can easily and ergonomically use it on a smart phone or a tablet 

## Technologies
 * GSAP : For pixel perfect animations (landing page, the nav bar)
 * RxJs : For a web app state managment system
 * Dexie.js : For an easy to use Indexed DB wrapper (State persistence)
 * Leaflet : For interactive map usage
 * Zone.js : For easy to use date managment
 * Emotion.js : For the js-in-css library

## Architecture
Usually hexagonal architecture is applied onto backend applications, but they can be applied for frontend web applications as well.
This frontend was written following the hexagonal architecture so as to be technology-agnostic, easily maintanable as well as easily improvable.
My choice in architecture would allow for backend development in the future instead of simulating the backend using Dexie.js.
All I would need would be to fill the (currently empty) "normal" adapters.

# CLI

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.