<h2 align="center">NEXTFLIX</h2>

  <p align="center">
    A Netflix-inspired movie web application
    <br />
    <a href="https://github.com/AnthonyGunardi/nextflix"><strong>Explore the project »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AnthonyGunardi/nextflix/issues">Report Bug</a>
    ·
    <a href="https://github.com/AnthonyGunardi/nextflix/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary><h3>Table of Contents</h3></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#list-of-available-endpoints">List of available endpoints</a></li>
  </ol>
</details>
<br>


## About The Project
A Netflix-inspired movie web app where users can browse and watch movies. Admin users can perform CRUD actions to movies, users and lists in admin panel.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

#### Back-end Tech Stacks:
* [Node.js](https://nodejs.org/)
* [express.js](https://expressjs.com/)
* [Mongoose](https://www.postgresql.org/)
* [Crypto-js](https://www.npmjs.com/package/crypto-js)
* [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
* [CORS](https://www.npmjs.com/package/cors)
* [Firebase Storage](https://firebase.google.com/)

#### Front-end Tech Stacks:
* [React.js](https://nodejs.org/)
* [Material UI](https://mui.com/)
* [SASS](https://sass-lang.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



## Getting Started


### Prerequisites

* Node.js installed
* MongoDB Atlas account
* Google Firebase account
* API testing tool (Postman, Insomnia, etc)


### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/AnthonyGunardi/flashcoffee.git
   ```
2. Install NPM packages
   Open terminal from each of these folders: api, admin, client, and type:
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



## Usage

### API

1. Rename file .env.example into .env and then change MONGO_URL & SECRET_KEY with your own MongoDB Atlas URL & secret key for JWT
2. Run the application
   ```sh
   npm run dev
   ```
3. Test the API endpoints using API testing tool (Postman, Insomnia, etc)


### Admin

1. Create a firebase storage project and paste your config files into admin/src/firebase.js
2. Run the application
   ```sh
   npm start
   ```


### Client

1. Run the application
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



## List of available endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users/`
- `GET /api/users/find/:id`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`
- `GET /api/users/stats`
- `GET /api/movies/`
- `GET /api/movies/find/:id`
- `GET /api/movies/random`
- `POST /api/movies/`
- `PUT /api/movies/:id`
- `DELETE /api/movies/:id`
- `GET /api/lists/`
- `POST /api/lists/`
- `PUT /api/lists/:id`
- `DELETE /api/lists/:id`


### POST /api/auth/register

description: 
  Register new user

Request:

- data:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:

```json
{
    "id": "616dc671941d332d7b156687",
    "username": "tester",
    "email": "tester@gmail.com"
}
```

- status: 400
- body:

```json
{
    "message": [
      "Username must be unique!",
      "Email must be unique!"
  ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### POST /api/auth/login

description: 
  User login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:

```json
{
    "_id": "616dc671941d332d7b156687",
    "username": "tester",
    "email": "tester@gmail.com",
    "profilePic": "",
    "isAdmin": false,
    "createdAt": "2021-10-18T19:09:37.875Z",
    "updatedAt": "2021-10-18T19:09:37.875Z",
    "__v": 0,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmRjNjcxOTQxZDMzMmQ3YjE1NjY4NyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzQ2MzQ1MDAsImV4cCI6MTYzNTA2NjUwMH0.pWKChek3aaNxEBYVevBpRfxFr0ROkci2OpyOq8VrCXU"
}
```

- status: 401
- body:

```json
{
    "message": "Wrong Email or Password"
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### GET /api/users/

description: 
  get all users

Request:

- headers: token (string)
- user.isAdmin: true

Response:

- status: 200
- body:

```json
[
    {
        "_id": "61680b9797018c2d34628eed",
        "username": "AnthonyGunardi",
        "email": "anthonygunardi@gmail.com",
        "password": "U2FsdGVkX1/ZcnEIRHXmCUhN3h3xbDNnWmz56TynfaY=",
        "profilePic": "",
        "isAdmin": true,
        "createdAt": "2021-10-14T10:51:03.196Z",
        "updatedAt": "2021-10-14T10:51:03.196Z",
        "__v": 0
    },
    {
        "_id": "616aa01e9f86295257b753cf",
        "username": "tester01",
        "email": "tester01@gmail.com",
        "password": "U2FsdGVkX1/fnjabXpQzyXDzvL1XVCOD+EAi0Ce4lZA=",
        "profilePic": "",
        "isAdmin": false,
        "createdAt": "2021-10-16T09:49:18.623Z",
        "updatedAt": "2021-10-18T16:05:16.596Z",
        "__v": 0
    },
    {
        "_id": "616dc671941d332d7b156687",
        "username": "tester",
        "email": "tester@gmail.com",
        "password": "U2FsdGVkX1/dOGVqiSjJ8y6dDPGGUOceqw1+TMI3kTs=",
        "profilePic": "",
        "isAdmin": false,
        "createdAt": "2021-10-18T19:09:37.875Z",
        "updatedAt": "2021-10-18T19:09:37.875Z",
        "__v": 0
    }
]
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": [
      "Token is not valid!",
      "You are unauthorized to do this action!!" 
    ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### GET /api/users/find/:id

description: 
  get an user by id

Request:

- headers: token (string)
- params: id (integer)

Response:

- status: 200
- body:

```json
{
    "_id": "616dc671941d332d7b156687",
    "username": "tester",
    "email": "tester@gmail.com",
    "password": "U2FsdGVkX1/dOGVqiSjJ8y6dDPGGUOceqw1+TMI3kTs=",
    "profilePic": "",
    "isAdmin": false,
    "createdAt": "2021-10-18T19:09:37.875Z",
    "updatedAt": "2021-10-18T19:09:37.875Z",
    "__v": 0
}
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": "Token is not valid!"
    
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### PUT /api/users/:id

description: 
  update an user by id

Request:

- headers: token (string)
- params: id (integer)
- data:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "profilePic": "string"
}
```

Response:

- status: 200
- body:

```json
{
    "_id": "616dc671941d332d7b156687",
    "username": "tester",
    "email": "tester@mail.com",
    "password": "U2FsdGVkX1/e7xAxm0V/YcQUU4gqD1H7fPwyPd/1Kls=",
    "profilePic": "",
    "isAdmin": false,
    "createdAt": "2021-10-18T19:09:37.875Z",
    "updatedAt": "2021-10-19T10:15:30.432Z",
    "__v": 0
}
```

- status: 400
- body:

```json
{
    "message": [
      "Username must be unique!",
      "Email must be unique!"
  ]
}
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": [
      "Token is not valid!",
      "You are unauthorized to do this action!"
    ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>





### DELETE /api/users/:id

description: 
  delete an user by id

Request:

- headers: token (string)
- params: id (integer)

Response:

- status: 200
- body:

```json
{
    "message": "User has been deleted"
}
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": [
      "Token is not valid!",
      "You are unauthorized to do this action!"
    ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### GET /api/users/stats

description: 
  get users statistic

Request:

- 

Response:

- status: 200
- body:

```json
[
    {
        "_id": 10,
        "total": 2
    }
]
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### GET /api/movies

description: 
  get all movies

Request:

- headers: token (string)
- user.isAdmin: true

Response:

- status: 200
- body:

```json
[
    {
        "_id": "616ef16d970111f6b7389ea8",
        "title": "Test Movie 2",
        "desc": "A second Test movie",
        "img": "test2.jpg",
        "imgTitle": "testTitle2.jpg",
        "imgSm": false,
        "trailer": "testtrailer2.mp4",
        "video": "testmovie2.mp4",
        "year": "2021",
        "limit": 18,
        "genre": "horror",
        "isSeries": false,
        "createdAt": "2021-10-19T16:25:17.812Z",
        "updatedAt": "2021-10-19T16:25:17.812Z",
        "__v": 0
    },
    {
        "_id": "616ef008970111f6b7389ea6",
        "title": "Test Movie",
        "desc": "A Test movie",
        "img": "test.jpg",
        "imgTitle": "testTitle.jpg",
        "imgSm": false,
        "trailer": "testtrailer.mp4",
        "video": "testmovie.mp4",
        "year": "2021",
        "limit": 18,
        "genre": "horror",
        "isSeries": false,
        "createdAt": "2021-10-19T16:19:20.159Z",
        "updatedAt": "2021-10-19T16:19:20.159Z",
        "__v": 0
    }
]
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": [
      "Token is not valid!",
      "You are unauthorized to do this action!"
    ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### GET /api/movies/find/:id

description: 
  get a movie by id

Request:

- headers: token (string)
- params: id (integer)

Response:

- status: 200
- body:

```json
{
    "_id": "616ef16d970111f6b7389ea8",
    "title": "Test Movie 2",
    "desc": "A second Test movie",
    "img": "test2.jpg",
    "imgTitle": "testTitle2.jpg",
    "imgSm": false,
    "trailer": "testtrailer2.mp4",
    "video": "testmovie2.mp4",
    "year": "2021",
    "limit": 18,
    "genre": "horror",
    "isSeries": false,
    "createdAt": "2021-10-19T16:25:17.812Z",
    "updatedAt": "2021-10-19T16:25:17.812Z",
    "__v": 0
}
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": "Token is not valid!"
    
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### GET /api/movies/random

description: 
  get an user by id

Request:

- headers: token (string)
- params: id (integer)

Response:

- status: 200
- body:

```json
[
    {
        "_id": "616ef008970111f6b7389ea6",
        "title": "Test Movie",
        "desc": "A Test movie",
        "img": "test.jpg",
        "imgTitle": "testTitle.jpg",
        "imgSm": false,
        "trailer": "testtrailer.mp4",
        "video": "testmovie.mp4",
        "year": "2021",
        "limit": 18,
        "genre": "horror",
        "isSeries": false,
        "createdAt": "2021-10-19T16:19:20.159Z",
        "updatedAt": "2021-10-19T16:19:20.159Z",
        "__v": 0
    }
]
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": "Token is not valid!"
    
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### POST /api/movies

description: 
  add a new movie

Request:

- headers: token (string)
- user.isAdmin: true
- data:

```json
{
  "title": "string",
  "desc": "string",
  "img": "string",
  "imgTitle": "string",
  "imgSm": "boolean",
  "trailer": "string",
  "video": "string",
  "year": "string",
  "limit": "integer",
  "genre": "string",
  "isSeries": "boolean"
}
```

Response:

- status: 200
- body:

```json
{
    "title": "Test Movie",
    "desc": "A Test movie",
    "img": "test.jpg",
    "imgTitle": "testTitle.jpg",
    "imgSm": false,
    "trailer": "testtrailer.mp4",
    "video": "testmovie.mp4",
    "year": "2021",
    "limit": 18,
    "genre": "horror",
    "isSeries": false,
    "_id": "616ef008970111f6b7389ea6",
    "createdAt": "2021-10-19T16:19:20.159Z",
    "updatedAt": "2021-10-19T16:19:20.159Z",
    "__v": 0
}
```

- status: 400
- body:

```json
{
    "message": [
      "Title must be unique!",
      "Title is required!",
      "Description is required!",
      "Image is required!"
  ]
}
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": [
      "Token is not valid!",
      "You are unauthorized to do this action!"
    ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### PUT /api/movies/:id

description: 
  update a movie by id

Request:

- headers: token (string)
- user.isAdmin: true
- params: id (integer)
- data:

```json
{
  "title": "string",
  "desc": "string",
  "img": "string",
  "imgTitle": "string",
  "imgSm": "boolean",
  "trailer": "string",
  "video": "string",
  "year": "string",
  "limit": "integer",
  "genre": "string",
  "isSeries": "boolean"
}
```

Response:

- status: 200
- body:

```json
{
    "title": "Edit Test Movie",
    "desc": "An Edit Test movie",
    "img": "test.jpg",
    "imgTitle": "testTitle.jpg",
    "imgSm": false,
    "trailer": "testtrailer.mp4",
    "video": "testmovie.mp4",
    "year": "2021",
    "limit": 18,
    "genre": "horror",
    "isSeries": false,
    "_id": "616ef008970111f6b7389ea6",
    "createdAt": "2021-10-19T16:19:20.159Z",
    "updatedAt": "2021-10-19T16:19:20.159Z",
    "__v": 0
}
```

- status: 400
- body:

```json
{
    "message": [
      "Title must be unique!",
      "Title is required!",
      "Description is required!",
      "Image is required!"
  ]
}
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": [
      "Token is not valid!",
      "You are unauthorized to do this action!"
    ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### DELETE /api/movies/:id

description: 
  delete a movie by id

Request:

- headers: token (string)
- params: id (integer)

Response:

- status: 200
- body:

```json
{
    "message": "The movie has been deleted"
}
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": [
      "Token is not valid!",
      "You are unauthorized to do this action!"
    ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### GET /api/list/

description: 
  get lists by type / genre

Request:

- headers: token (string)
- query -optional- : type (string), genre (string)

Response:

- status: 200
- body:

```json
[
    {
        "_id": "616f0887d3cf8831d47fc7a2",
        "title": "Test List 3",
        "type": "Movies",
        "genre": "Romance",
        "content": [],
        "createdAt": "2021-10-19T18:03:51.312Z",
        "updatedAt": "2021-10-19T18:03:51.312Z",
        "__v": 0
    },
    {
        "_id": "616f0868d3cf8831d47fc7a0",
        "title": "Test List 2",
        "type": "Series",
        "genre": "Horror",
        "content": [],
        "createdAt": "2021-10-19T18:03:20.864Z",
        "updatedAt": "2021-10-19T18:03:20.864Z",
        "__v": 0
    },
    {
        "_id": "616f0733d3cf8831d47fc79e",
        "title": "Test List",
        "type": "Series",
        "genre": "Horror",
        "content": [],
        "createdAt": "2021-10-19T17:58:11.066Z",
        "updatedAt": "2021-10-19T17:58:11.066Z",
        "__v": 0
    }
]
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": "Token is not valid!"
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### POST /api/lists

description: 
  add a new list

Request:

- headers: token (string)
- user.isAdmin: true
- data:

```json
{
    "title": "string",
    "type": "string",
    "genre": "string",
    "content": "array"
}
```

Response:

- status: 200
- body:

```json
{
    "title": "Test List",
    "type": "Series",
    "genre": "Horror",
    "content": [],
    "_id": "616f0733d3cf8831d47fc79e",
    "createdAt": "2021-10-19T17:58:11.066Z",
    "updatedAt": "2021-10-19T17:58:11.066Z",
    "__v": 0
}
```

- status: 400
- body:

```json
{
    "message": [
      "Title must be unique!",
      "Title is required!"
  ]
}
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": [
      "Token is not valid!",
      "You are unauthorized to do this action!"
    ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### PUT /api/lists/:id

description: 
  update a list by id

Request:

- headers: token (string)
- user.isAdmin: true
- params: id (integer)
- data:

```json
{
    "title": "string",
    "type": "string",
    "genre": "string",
    "content": "array"
}
```

Response:

- status: 200
- body:

```json
{
    "title": "Test List 2",
    "type": "Series",
    "genre": "Horror",
    "content": [],
    "_id": "616f0733d3cf8831d47fc79e",
    "createdAt": "2021-10-19T17:58:11.066Z",
    "updatedAt": "2021-10-19T17:58:11.066Z",
    "__v": 0
}
```

- status: 400
- body:

```json
{
    "message": [
      "Title must be unique!",
      "Title is required!"
  ]
}
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": [
      "Token is not valid!",
      "You are unauthorized to do this action!"
    ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### DELETE /api/lists/:id

description: 
  delete a list by id

Request:

- headers: token (string)
- user.isAdmin: true
- params: id (integer)

Response:

- status: 200
- body:

```json
{
    "message": "The list has been deleted"
}
```

- status: 401
- body:

```json
{
    "message": "Please login first!"
}
```

- status: 403
- body:

```json
{
    "message": [
      "Token is not valid!",
      "You are unauthorized to do this action!"
    ]
}
```

- status: 500
- body:
  ​
```json
{
    "message": "Internal server error"
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>

