# test-app

## Overview

## Running The Project

To get started, here's a list of recommended next steps:

1. clone the project from https://github.com/Parinita789/arive.git
2. Install dependencies
3. cd arive
4. Run Mongo and Redis server
5. npm install
6. create a .env file in the root folder
7. Paste the key values from the sample.env file
8. npm run start


## Dependencies
Node.js
mongoose
Typescript
Inversify
Express

## curl Requests

1. Create User:

curl --location --request POST 'http://localhost:3000/api/v1/user' \
--header 'Content-Type: application/json' \
--data-raw '{
   "first_name": "Rahul",
   "last_name": "Jain",
   "email": "rahuljain@gmail.com"
}'

2. Get user:

curl --location --request GET 'http://localhost:3000/api/v1/users'

3. Update user:

curl --location --request PUT 'http://localhost:3000/api/v1/user/625555d9c1c8937b10028a7b' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "Sunny"
}'
 

4. Delete User:

curl --location --request DELETE 'http://localhost:3000/api/v1/user/625555d9c1c8937b10028a7b'

5. Create Hobby:

curl --location --request POST 'http://localhost:3000/api/v1/hobby' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Painting",
    "from": 2017,
    "user": "625542e910a0e076c2a02033",
    "passion_level": "HIGH"
}'

6. Get Hobbies:

curl --location --request GET 'http://localhost:3000/api/v1/user/625542e910a0e076c2a02033/hobby' \
--data-raw ''

7. Update Hobby:

curl --location --request PUT 'http://localhost:3000/api/v1/hobby/62559a3dbe792268f3f37d18' \
--header 'Content-Type: application/json' \
--data-raw '{
    "passion_level": "MEDIUM"
}'

8. Delete Hobby:

curl --location --request DELETE 'http://localhost:3000/api/v1/hobby/62559a3dbe792268f3f37d18'

