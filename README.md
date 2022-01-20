# Florens@Parallelmarkets

### Thank you for taking the time to look at my coding challenge. I look forward to discussing it with you 🖖

### Structure
This repository consists of two main folders:
* `express-app`: the backend using `expressjs` + `sequelize` + `sqlite3::in-memory`
* `react-app`: the frontend using `reactjs` + `axios`

### Installation
For installation and running instructions, please refer to the `READMEs` in each of the above directories.

### What I managed in time
* As mentioned above, we know have a mono repo with a reactjs frontend and an expressjs backend
* All the mandatory deliverables have been achieved: A user is able to input the required form fields on the frontend and post them to the backend
* The frontend will `POST` to the backend on form submission, using `formData`
* The frontend will show a success sweetalert and also let you know the `number of users` that are currently in the database
* Similarly, it will show an error if something went wrong
* The backend inserts the data into an in-memory sqlite3 database and stores the file to the disk
* Additionally, the backend can return all users at `GET /` in json format (used in the success alert on the frontend)

### If I had more time
There are *plenty* of things that I would do if I had more time:
* Authentication & Authorization
* A properly persisted relational database such as Postgresql
* Backend unit tests, with a focus on the request handlers, using something like jest
* Frontend e2e tests, with a focus on the Form, using something like cypress
* Frontend validations for every form field: Phone numbers, zip codes etc need specific validation rules
* Backend validations: We can't leave this responsibility to the frontend. The backend needs to validate every form field before inserting into the database. It currently checks for null and not empty, but there's more to do here.
* Progress indicator on the frontend for larger files
* In general, I would have loved to spend more time polishing and beautifying the react-app, but at least it has got your logo and your colors :)
* Detecting and handling updating addresses for existing customers with matching names/SSNs
* Would have been nice to return more specific error codes from the backend, such that the frontend can let the user know what exactly went wrong
* Tyepscript on the entire application, however for this mvp it made sense to me to stick with plain javascript
* Support for uploading multiple files at once
* I would have used a different ORM like Prisma or TypeORM, but went with sequelize for simplicity