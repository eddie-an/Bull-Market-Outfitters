# ShopEase

This application uses ReactJS, TailwindCSS, and Stripe

To run this application in development, follow these steps. Make sure that you have two terminals open (one for client and one for server)

- Start the Stripe server by running the following commands
    - `cd server`
    - `npm install` to install dependencies such as nodemon, cors, dotenv, express, and stripe (if it's the first time running this project)
    - `npm start` or `npm nodemon server.js`
- In another terminal, start ReactJS by running the following commands
    - `cd client`
    - `npm install` to install dependencies such as tailwindcss, react, and react-router-dom (if it's the first time running this project)
    - `npm start` or `npm react-scripts start`