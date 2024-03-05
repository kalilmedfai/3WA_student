import express from 'express'
const playersRouter = express.Router()

const players = [
    { id: 1, playerName: 'Vinicius Jr', club: 'Real Madrid' },
    { id: 2, playerName: 'Mbappé', club: 'Paris Saint-Germain' },
    { id: 3, playerName: 'Haaland', club: 'Manchester City' },
    { id: 4, playerName: 'Bellingham', club: 'Real Madrid' }
]

playersRouter.get('/players', (req, res) => {
    res.render('players', {players})
})

playersRouter.get('/players/:id', (req, res) => {
    const player = players.find(player => player.id === parseInt(req.params.id))
    res.json(movie)
})

playersRouter.get('/addplayer', (req, res) => {
    res.render('addPlayer')
})


playersRouter.post('/players', (req, res) => {
    console.log(req.body)
    const player = {
        id : players.length + 1,
        playerName : req.body.playerName,
        club : req.body.club
    }
    players.push(player)
    res.render('players', {players})
})


playersRouter.put('/players/:id', (req, res) => {
    let {id} = req.params
    const player = players.find(player => player.id === parseInt(id))
    player.playerName = req.body.playerName
    player.club = req.body.club
    res.json(player)
})

playersRouter.delete('/players/:id', (req, res) => {
    let {id} = req.params
    const playerName = players.find(player => player.id === parseInt(id))
    const playerId = players.indexOf(player)
    players.splice(playerId, 1)
    res.json('Player has been deleted')
})


export default playersRouter