const port = process.env.port || 7999 // this is for deploying on Heroku

const axios = require('axios')  // HTTP client for nodejs and the browser
const express = require('express') // backend framework
const cheerio = require('cheerio') // parses markup language

const nfl_teams = require('./nfl_teams') // data from NFL teams 
const mlb_teams = require('./mlb_teams') // export data from MLB teams


const { json, response } = require('express')

const app = express()

const nfl_news = []
// pulling the address for each object in the array and displaying it on my web page
nfl_teams.forEach(football => {  
    axios.get(football.address)   // chaining -> asynchronous Javascript
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        // pulling the a tags with the href attribute (Week 9)
        $('a:contains("News")', html).each(function () {
                const title = $(this).text().replace(/\n/g, '')
                const url = $(this).attr('href')

                nfl_news.push({
                    team: football.name,
                    conference: football.conference,
                    division: football.division,
                    home_field: football.home_field,
                    title,
                    url
                })
        })

    })

})
const mlb_news = []
mlb_teams.forEach(baseball => {  
    axios.get(baseball.address)   // chaining -> asynchronous Javascript
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        // pulling the a tags with the href attribute (Week 9)
        $('a:contains("News")', html).each(function () {
                const title = $(this).text().replace(/\n/g, '')
                const url = $(this).attr('href')

                mlb_news.push({
                    team: baseball.name,
                    league: baseball.league,
                    division: baseball.division,
                    home_field: baseball.home_field,
                    title,
                    url
                })
        })

    })

})

        
app.get('/', (req,res) => {
    res.json("Welcome to my Sports News API! This API is an ongoing project that will enable you to find news related to your favorite NFL and MLB teams.")
})

app.get('/nfl', (req,res) => {
    res.json(nfl_news)
})

app.get('/nfl/:nflid', (req, res) => {

    const nflid = req.params.nflid

    const teamAddress = nfl_teams.filter(football => football.id == nflid)[0].address
    const teamBase = nfl_teams.filter(football => football.id == nflid)[0].address

    axios.get(teamAddress)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const specificTeam = []

        $('a:contains("News")',html).each(function () {
            const title = $(this).text().replace(/\n/g, '')
            const url = $(this).attr('href')
                specificTeam.push({
                    title: title.toString(),
                    url: teamBase,
                    source: nflid
                })
        })
        res.json(specificTeam)
    }).catch(err => console.log(err))


})

app.get('/mlb', (req, res) => {
    res.json(mlb_news)
})

app.get('/mlb/:mlbid', (req, res) => {

    const mlbid = req.params.mlbid

    const teamAddress = mlb_teams.filter(baseball => baseball.id == mlbid)[0].address
    const teamBase = mlb_teams.filter(baseball => baseball.id == mlbid)[0].address

    axios.get(teamAddress)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const specificTeam = []

        $('a:contains("News")',html).each(function () {
            const title = $(this).text().replace(/\n/g, '')
            const url = $(this).attr('href')
                specificTeam.push({
                    title: title.toString(),
                    url: teamBase,
                    source: mlbid
                })
        })
        res.json(specificTeam)
    }).catch(err => console.log(err))


})


app.listen(port, () => console.log(`Server listening on Port ${port}`))
