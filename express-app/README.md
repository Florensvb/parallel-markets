# Parallelmarkets express-app

## Setup
```
nvm use --lts
npm install
```

By default, the app will run on port `3001` and assume that the frontend is on port `3000`.
If you wish to overwrite you can do as such:
```
cp .env.local.example .env.local
```
Then overwrite the variables inside `.env.local` as you seem fit.

## Run
```
npm start
```
Or the below runs the app in the with hot reload
```
npm run watch
```

The API now spawns at [http://localhost:3001](http://localhost:3001).

The application uses a Sqlite3 in-memory database, so data will not persist an application restart.

Files are saved to disk using `formidable` which saves them to a temporary path on your local machine.
The said path is saved in the `Users` table in the `file` column, along with all other form fields.