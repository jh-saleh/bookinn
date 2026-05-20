# [FR] - Bookinn
Créé et conçu par Jean-Hanna SALEH

## Qu'est-ce que Bookinn
BookInn est une application web qui vous permet d'explorer les terres mystiques d'Orlond, de louer une chambre d'auberge et de profiter de la vue !

Parmi les fonctionnalités disponibles, vous pouvez :
* Faire défiler une page d'accueil animée
* Depuis la page principale, vous pouvez :
  * Consulter les chambres disponibles
  * Examiner leurs photos
  * Obtenir les informations de base sur les chambres
* Depuis la page d'une chambre, vous pouvez :
  * Lire ses détails (À propos, Le lieu, section notes)
  * Accéder à des informations supplémentaires via des modales : Équipements, Règles de la maison, Sécurité & propriété et Politique d'annulation
  * Voir où se trouve la chambre grâce à une carte interactive d'Orlond (toutes les villes possibles d'Orlond y sont visibles)
  * Voir l'hôte
  * Accéder à la barre de navigation et rechercher la chambre la plus proche de vos préférences
  * Spécifier les dates d'arrivée et de départ ainsi que le nombre de voyageurs, ce qui affiche automatiquement un prix calculé
* Depuis la page de recherche, vous pouvez :
  * Chercher une chambre correspondant à un lieu, une capacité (nombre de voyageurs) et une disponibilité
  * Voir les résultats de recherche triés par préférences, en commençant par la distance à votre lieu préféré
  * Voir l'emplacement exact en survolant la photo d'une chambre
* Consulter la page de l'hôte pour une chambre qui vous intéresse, où vous trouverez :
  * Les informations de base sur l'hôte : (école, loisirs, langues parlées, etc.)
  * Les informations confirmées (Identité, Numéro de téléphone)
  * Les annonces (autres chambres)
  * Un bouton « Signaler l'hôte »
* Créer un compte et se connecter
* En tant qu'utilisateur, vous pouvez :
  * Réserver une chambre
  * Accéder à la page des voyages qui liste tous les voyages réservés
* Depuis la page d'un voyage, vous pouvez :
  * Accéder à un récapitulatif de la chambre réservée (date d'arrivée, date de départ, nombre de voyageurs, l'adresse exact de la chambre)
  * Annuler la réservation (selon la politique de remboursement, vous obtenez soit un remboursement complet, soit un remboursement partiel, soit aucun remboursement)
* L'application étant conçue selon un design responsive, vous pouvez l'utiliser facilement et ergonomiquement sur un smartphone ou une tablette

## Technologies
* **GSAP** : Pour des animations au pixel près (page d'accueil, la barre de navigation)
* **RxJs** : Pour un système de gestion d'état de l'application
* **Dexie.js** : Pour une utilisation simplifiée du wrapper Indexed DB (persistance de l'état)
* **Leaflet** : Pour l'utilisation de cartes interactives
* **Zone.js** : Pour une gestion simplifiée des dates
* **Emotion.js** : Pour la bibliothèque CSS-in-JS

## Architecture
L'architecture hexagonale est généralement utilisée dans des applications backend, mais elle peut également être appliquée aux applications web frontend.

Ce frontend a été écrit en suivant l'architecture hexagonale afin d'être agnostique aux technologies, facilement maintenable et facilement améliorable.

Mon choix d'architecture permettrait un développement backend à l'avenir, plutôt que de simuler le backend avec Dexie.js.

Il me suffirait de remplir les adaptateurs « normal » (actuellement vides).

# CLI
## Serveur de développement
Exécutez `ng serve` pour lancer un serveur de développement. Naviguez vers `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez l'un des fichiers sources.

## Build
Exécutez `ng build` pour compiler le projet. Les artefacts de compilation seront stockés dans le répertoire `dist/`.

# [EN] - Bookinn
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
 * **GSAP** : For pixel perfect animations (landing page, the nav bar)
 * **RxJs** : For a web app state managment system
 * **Dexie.js** : For an easy to use Indexed DB wrapper (State persistence)
 * **Leaflet** : For interactive map usage
 * **Zone.js** : For easy to use date managment
 * **Emotion.js** : For the js-in-css library

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