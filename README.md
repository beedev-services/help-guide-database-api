# help-guide-database-api
API/ Database for the New Help Guide Front End

## What is Working?
1. This is live https://beedev-services-help-guide-api.herokuapp.com/
2. Posts can be added
3. Login is working with seed users

## What is needed?
Here is what can be worked on

## AT THIS TIME PLEASE DO NOT TOUCH DATABASE FILES OTHER THAN TO VIEW

### 1) Register new user bug
There is currently a bug in the system that does not allow new users to be created

1. Seed users can log in
2. Please do not touch Seed files

### 2) Register roles
By default all new users are General users Admin by postman only

1. Create permissions Admin and General users
4. Admin remains postman add only but has permission to edit and delete all areas of database

### 2) Documentation
There is a static public folder for the documentation

1. The HTML doc in the public folder will need to be finished after routes are tested. The layout is there just the data parts need to be fixed.

### 3) New Router
New router for when front end submits a new tip

1. Database is set for newtips CRUD operations need to be added to a new Router file
2. This should NOT be a log in route this should be for anyone who visits the site to submit
3. Delete can be behind auth as only Admin will have access to delete funciton



## Repo for Front End
https://github.com/beedev-services/new-help-guide

## Rules
1. Do not push to master branch
2. Create your own branch and create a pull request
3. Do not merge any pull requests.

# Questions?
Please feel free to reach out to Melissa Longenberger (owner):
1. melissa@beedev-services.com 
2. Slack Channel = https://join.slack.com/t/beedev-itservices/shared_invite/zt-i21p28jo-P3LBfEjpMRCO7yxwmqA7Og

## Run app
1. Clone repo
2. Create your own branch
3. npm install
4. npm start