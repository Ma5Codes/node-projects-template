This is the base node js project template ,which I use to start my projects.

`src` -> contains the source code regarding the project,this will not include any kind of tests.

1. `config` -> in this folder all the configuration setup of libraries or module will be done.for example setting up dontenv so that we can use the environment variables anywhere in a cleaner way.this is done in `server-config.js` file.

2.`routes` -> this folder contains ,we register a route and the corresponding middleware and controllers to it.

3. `middlewares` ->they are just going to intercept the incoming requests where we can write our validators ,authentication logic etc.

4. `controllers` -> they are kind of the last middleware as post them you call your business layer to execute the business logic.In controllers we just receive incoming request and data and then pass it to the business layer,and once business layer returns an output, we structure the API response in controllers and send the output.
5. `repository` -> this folder contains all the logic using which we interact with the database by writing queries, all the raw queries or ORM queries will be written here.
6. `services` -> this folder contains all the business logic and interacts with repository layer to get the data from the database.

7. `utils` -> contains helper methods, error classes etc.
