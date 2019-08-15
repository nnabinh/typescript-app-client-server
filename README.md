# webapp-ts
Design a web application that allows employees to submit feedback toward each other's performance review. 
- Run both client & server
- Access localhost:3000
<img width="1054" alt="Screen Shot 2019-08-15 at 10 54 59 PM" src="https://user-images.githubusercontent.com/10094591/63099469-20fb4c00-bfb0-11e9-8045-8a531b5079c5.png">
<img width="446" alt="Screen Shot 2019-08-15 at 10 53 48 PM" src="https://user-images.githubusercontent.com/10094591/63099436-0f19a900-bfb0-11e9-9b50-88c38d40ab49.png">


# installation

- To install mongodb (MacOS):
```
Open the Terminal app and type brew update.
After updating Homebrew brew install mongodb
After downloading Mongo, create the “db” directory. This is where the Mongo data files will live. You can create the directory in the default location by running mkdir -p /data/db
Make sure that the /data/db directory has the right permissions by running

> sudo chown -R `id -un` /data/db
> # Enter your password
Run the Mongo daemon, in one of your terminal windows run mongod. This should start the Mongo server.
Run the Mongo shell, with the Mongo daemon running in one terminal, type mongo in another terminal window. This will run the Mongo shell which is an application to access data in MongoDB.
To exit the Mongo shell run quit()
To stop the Mongo daemon hit ctrl-c
```
- To run server: 
```
cd ./server && yarn && yarn start-dev
```
- To run client:
```
cd ./client && yarn && yarn start
```

# common
- yarn 1.16


# client
- react
- typescript


# server
- node 12.1 / npm 6.9
- overnightjs 1.6.9 (TS decorators for ExpressJS)
- typescript 3.1
- mongodb
