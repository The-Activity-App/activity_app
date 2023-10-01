# Project Architecture: 

Provide an overview of how the different components of your project will interact and work together. This includes database design, APIs, and front-end components.

## Example: 
This is the project architecture for a simple todo app. The app will have a front-end implemented using React, a back-end using Node.js with Express, and a database using PostgreSQL. Here’s how the components will interact and work together:

### Front-End Components (React):
* **User Interface (UI)**: The front-end will consist of the following components:
   *  A form for logging in.
   *  A form for signing up.
   *  A page hosting a map with a search bar and side menu.
   *  Each place returned after a search will display the name, hours, type, address and ratings of the place. 
   The place component should also include buttons that allow the user to favorite the place, request a status update as well as post a status update. 
   *  The side menu features buttons that allow the user to move between the map and profile pages as well as sign out of their account. 
   *  The profile page unique to each user should display data about each favorited place. place components display the name, address and rating of the place.
* **State Management**:
   * The place component will manage the state of the place, which will track whether a user has favorited it and the rating they've left reflecting the experience the user had at the place.
   

### Back-End Components (Node.js with Express):
* **API Endpoints**: The back-end will expose several API endpoints to handle different actions such as fetching all tasks, adding a new task, updating a task’s status, and deleting a task. These include:
    * `GET /places`
    * `POST /favorites`
    * `PATCH /favorites/:placeID`
    * `DELETE /favorites/:placeID`

### Interaction Flow:
* When a user opens the app, the front-end will load and send an API request to fetch all favorites from the back-end. 
    * The back-end will retrieve the places from the database and return them as a response to the front-end.
    * The front-end will display the places on the UI.
* When a user adds a new place to their favorites, the front-end will send a request to the back-end’s API endpoint to create a new favorite in the database.
    * The back-end will receive the request, ensuring that the required data is provided (user id, place id, place name and place details). The back-end will generate the favorite id and timestamp and set the completion to `false`. It will then create the new favorite and store it in the database. The new favorite place will be sent to the front-end as a response.
    * The front-end will update the UI based on the responses from the back-end.
* When a user removes a favorited place or changes their rating, the front-end will send requests to the respective back-end API endpoints to update or remove the place from the database.
    * The back-end will receive these requests, ensuring that the required data is provided (user id, favorite id). The back-end will perform the appropriate action and send back a success/fail message in response.
    * The front-end will update the UI based on the responses from the back-end.

Please note that this is a simplified architecture for a basic todo app. In real-world projects, you might consider adding authentication, validation, error handling, and other features to enhance security and usability. Additionally, for larger projects, you may use additional technologies like Redux for state management or implement more complex database schemas and relationships.
