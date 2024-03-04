import express from 'express';
const app = express();

const port = 3002;

app.use(express.json());

const players = [
    { id: 1, player: 'Vinicius Jr', club: 'Real Madrid' },
    { id: 2, player: 'Mbappé', club: 'Paris Saint-Germain' },
    { id: 3, player: 'Haaland', club: 'Manchester City' },
    { id: 4, player: 'Bellingham', club: 'Real Madrid' }
];

app.get('/api/players', (req, res) => {
    res.send(players);
});

app.get('/api/players/:id', (req, res) => {
    let id = req.params.id;
    let player = players.find(player => player.id === parseInt(id));
    res.send(player);
});

app.post('/api/players', (req, res) => {
    const newPlayer = {
        id: players.length + 1,
        player: req.body.player,
        club: req.body.club
    };
    players.push(newPlayer);
    res.send(players);
});

app.put('/api/players/:id', (req, res) => {
    let {id} = req.params
    const joueur = players.find(e => e.id === parseInt(id))
    joueur.player = req.body.player
    res.send(joueur)
})

app.delete('/api/players/:id', (req, res) => {
    let {id} = req.params
    const joueur = players.find(e => e.id === parseInt(id))
    const index = players.indexOf(joueur)
    players.splice(index, 1)
    res.send('My player has been deleted')
})

app.listen(port, () => {
    console.log('Welcome to our first API using express');
});
