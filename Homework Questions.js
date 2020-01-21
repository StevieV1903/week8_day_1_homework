// What is responsible for defining the routes of the games resource?
// The create router function () within the create_router.js file and app.use provides the starting point.

// What do you notice about the folder structure? Whats the client responsible for? Whats the server responsible for?
// The folder structure is split into two main responsibilities; Client and Server, with both owning a package.json files. The client is resonsible for the src files including all the component files, whilst the server folder is responsible for hosting the seed data and managing the restful routes for the app and connection to the database.

// What are the the responsibilities of server.js?
// The server.js details connections to the database, in this instance mongodb. Sets up router with the right collection and starts talking and listening to the database.

// What are the responsibilities of the gamesRouter?
// The gamesRouter creates the restful routes to allow the CRUD elements to access and send data to the mongodb.

// What process does the the client (front-end) use to communicate with the server?
// The client (front-end) uses the fetch method and payload within the GamesService.js to communicate with the server. Converts json to objects and back again.

// What optional second argument does the fetch method take? And what is it used for in this application? Hint: See Using Fetch on the MDN docs
// You can optionally pass in an init options object as the second argument including methods and headers and body in this case.

// Which of the games API routes does the front-end application consume (i.e. make requests to)?
// INDEX, DESTROY, CREATE get games, post games and delete games.

// What are we using the MongoDB Driver for?
// I am not clear about this? I couldn't find the driver in any of the files? Is this the MongoClient? Link application to Mongodb in a nice JS objects with methods type of way.
