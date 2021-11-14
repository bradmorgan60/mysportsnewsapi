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
                const url = $(this).attr('href').replace(/\n/g, '')

                nfl_news.push({
                    title,
                    url,
                    conference: football.conference,
                    division: football.division,
                    team: football.name
                })
        })

    })

})
const mlb_news = []
mlb_teams.forEach(baseball => {  
    axios.get(basaeball.address)   // chaining -> asynchronous Javascript
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        // pulling the a tags with the href attribute (Week 9)
        $('a:contains("News")', html).each(function () {
                const title = $(this).text().replace(/\n/g, '')
                const url = $(this).attr('href').replace(/\n/g, '')

                mlb_news.push({
                    title,
                    url,
                    conference: baseball.conference,
                    division: baseball.division,
                    team: baseball.name
                })
        })

    })

})

        
app.get('/', (req,res) => {
    res.json("Welcome to my Sports News API! This API is an ongoing project that will enable you to find news related to football and baseball")
})

app.get('/nfl', (req,res) => {
    res.json(nfl_news)
})

app.get('/nfl/:nflid', (req, res) => {

    const nflid = req.params.nflid

    // const confid = req.params.confid

    const teamAddress = nfl_teams.filter(football => football.id == nflid)[0].address
    const teamBase = nfl_teams.filter(football => football.id == nflid)[0].address

    // console.log(conferenceAddress)

    axios.get(teamAddress)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const specificconference = []

        $('a:contains("News")',html).each(function () {
            const title = $(this).text()
            const url = $(this).attr('href')
                specificconference.push({
                    title: title.toString(),
                    url: teamBase,
                    source: nflid
                })
        })
        res.json(specificconference)
    }).catch(err => console.log(err))


})

app.get('/mlb', (req, res) => {
    res.json(mlb_news)
})

app.get('/mlb/:mlbid', (req, res) => {
    const mlbid = req.params.mlbid
})


app.listen(port, () => console.log(`Server listening on Port ${port}`))
