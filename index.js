
const axios = require('axios');

axios.get('https://ozarktechwebdev.com/api/jokes.json')
    .then((response) => {
        const jokes = response.data.jokes;

        const randomIndex = Math.floor(Math.random() * jokes.length);

        const randomJoke = jokes[randomIndex];

        console.log("Here's a developer joke for today:");
        console.log("Q: " + randomJoke.question);
        console.log("A: " + randomJoke.answer);

    })
    .catch((error) => {
        console.log("Could not fetch a joke. Try again later.");
    });
