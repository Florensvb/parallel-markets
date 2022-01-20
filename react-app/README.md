# Getting Started with Florens@Parallelmarkets App

## Setup

In the project directory, you can run:
```
nvm use --lts
npm install
```

By default, the app will run on port `3000` and assume that the backend is on port `3001`.
If you wish to overwrite you can do as such:
```
cp .env.local.example .env.local
```
Then overwrite the variables inside `.env.local` as you seem fit.

## Run
```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.