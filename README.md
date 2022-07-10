# BezKoder Course: Ecommerce-backend

Lesson 3.1 Setup project structure
- [x] Init the project, create some main folders
- [x] Reading env
- [x] Logger
- [x] Connect with the database

Lesson 4
- [x] Create the products, categories, brands models
- [x] Create the products API
- [x] Create the products controller
- [x] Refactoring to BaseController
- [] (optional) Unit test


Lesson 5: Upload file
- [x] API
- [x] Upload to local
  - Use multer
  - Handle file name
  - Create temp folder if not exists
- [x] Local to Cloud
  - Create google storage service, add credentials
  - Call the upload service and parse the result

Lesson 6.1: Sign Up
- [x] User model
  - Encrypt password
- [x] User controller, API


Lesson 6.2: Sign In
- [x] Authenticate user service
- [x] Basic Auth
- [x] JWT
- [x] Cookie Session

Lesson 6.3: Sign In With Google
- [x] PassportJS introduction
- [x] Use PassportJS to sign in with Google, and reuse JWT for managing session

Lesson 7.1: Querying, Filtering, Paging, Sorting
- [x] Insert dummy data
- [x] Design the API
  - Use cases: 
    - category: 'laptop'
    - year: 2019
    - rating: [2, 3], > 2,  < 3
    - price: > 100, [100, 2000]
    - sort by: price, rating
    - search by: name

  - localhost:5000/products?
    &f_category=1
    &f_year=2019
    &f_rating_gte=2
    &f_rating_lte=3

    &f_price_gte=1000
    &f_price_lte=2000

    &s_price=asc
    &s_rating=asc

    &f_name_like=macbook

    type: filter, sort
    property: rating, price, year
    operator: is, gte, lte, like
    value: 100, asc, des, 'macbook'

  - 


