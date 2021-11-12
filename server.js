const port = 7999

const axios = require('axios')  // HTTP client for nodejs and the browser
const express = require('express') // backend framework
const cheerio = require('cheerio') // parses markup language
const { json, response } = require('express')

const app = express()

const teams = [
    {
        name: "Buffalo Bills",
        id: "bills",
        address: "https://www.buffalobills.com/news",
        base: "",
        conference: "AFC",
        division: "East"
    },
    {
        name: "New England Patriots",
        id: 'patriots',
        address: "https://www.patriots.com/news",
        base: "https://www.patriots.com",
        conference: "AFC",
        division: "East"
    },
    {
        name: "New York Jets",
        id: 'jets',
        address: "https://www.newyorkjets.com/news",
        base: "",
        conference: "AFC",
        division: "East"
    },
    {
        name: "Miami Dolphins",
        id: 'dolphins',
        address: "https://www.miamidolphins.com/news",
        base: "",
        conference: "AFC",
        division: "East"
    },
    {
        name: "Baltimore Ravens",
        id: 'ravens',
        address: "https://www.baltimoreravens.com/news",
        base: "",
        conference: "AFC",
        division: "North"
    },
    {
        name: "Cincinnati Bengals",
        id: 'bengals',
        address: "https://www.bengals.com/news",
        base: "",
        conference: "AFC",
        division: "North"
    },
    {
        name: "Pittsburgh Steelers",
        id: 'steelers',
        address: "https://www.steelers.com/news",
        base: "",
        conference: "AFC",
        division: "North"
    },
    {
        name: "Cleveland Browns",
        id: 'browns',
        address: "http://browns.com/",
        base: "http://browns.com",
        conference: "AFC",
        division: "North"
    },
    {
        name: "Tennessee Titans",
        id: 'titans',
        address: "https://www.tennesseetitans.com/news",
        base: "https://www.tennesseetitans.com",
        conference: "AFC",
        division: "South"
    },
    {
        name: "Indianapolis Colts",
        id: 'colts',
        address: "https://www.colts.com/news",
        base: "https://www.colts.com",
        conference: "AFC",
        division: "South"
    },
    {
        name: "Jacksonville Jaguars",
        id: 'jaguars',
        address: "https://www.jaguars.com/news",
        base: "",
        conference: "AFC",
        division: "South"
    },
    {
        name: "Houston Texans",
        id: 'texans',
        address: "https://www.houstontexans.com/news",
        base: "",
        conference: "AFC",
        division: "South"
    },
    {
        name: "Las Vegas Raiders",
        id: 'raiders',
        address: "https://www.raiders.com/news",
        base: "https://www.raiders.com",
        conference: "AFC",
        division: "West"
    },
    {
        name: "Los Angeles Chargers",
        id: 'chargers',
        address: "https://www.chargers.com/news",
        base: "https://www.chargers.com",
        conference: "AFC",
        division: "West"
    },
    {
        name: "Kansas City Chiefs",
        id: 'chiefs',
        address: "https://www.chiefs.com/news",
        base: "https://www.chiefs.com",
        conference: "AFC",
        division: "West"
    },
    {
        name: "Denver Broncos",
        id: 'broncos',
        address: "https://www.denverbroncos.com/news",
        base: "https://www.denverbroncos.com",
        conference: "AFC",
        division: "West"
    },
    {
        name: "Dallas Cowboys",
        id: 'cowboys',
        address: "https://www.dallascowboys.com/news",
        base: "https://www.dallascowboys.com",
        conference: "NFC",
        division: "East"
    },
    {
        name: "Philadelphia Eagles",
        id: 'eagles',
        address: "https://www.philadelphiaeagles.com/news",
        base: "https://www.philadelphiaeagles.com",
        conference: "NFC",
        division: "East"
    },
    {
        name: "Washington Football Team",
        id: 'washington',
        address: "https://www.washingtonfootball.com/news",
        base: "",
        conference: "NFC",
        division: "East"
    },
    {
        name: "New York Giants",
        id: 'giants',
        address: "https://www.giants.com/news",
        base: "",
        conference: "NFC",
        division: "East"
    },
    {
        name: "Green Bay Packers",
        id: 'packers',
        address: "https://www.packers.com/news",
        base: "",
        conference: "NFC",
        division: "North"
    },
    {
        name: "Minnesota Vikings",
        id: 'vikings',
        address: "https://www.vikings.com/news/all-news",
        base: "https://www.vikings.com",
        conference: "NFC",
        division: "North"
    },
    {
        name: "Chicago Bears",
        id: 'bears',
        address: "https://www.chicagobears.com/news",
        base: "https://www.chicagobears.com",
        conference: "NFC",
        division: "North"
    },
    {
        name: "Detroit Lions",
        id: 'lions',
        address: "https://www.detroitlions.com/news",
        base: "https://www.detroitlions.com",
        conference: "NFC North"
    },
    {
        name: "Tampa Bay Buccanneers",
        id: 'bucs',
        address: "https://www.buccaneers.com/news",
        base: "",
        conference: "NFC",
        division: "South"
    },
    {
        name: "New Orleans Saints",
        id: 'saints',
        address: "https://www.neworleanssaints.com/news",
        base: "",
        conference: "NFC",
        division: "South"
    },
    {
        name: "Carolina Panthers",
        id: 'panthers',
        address: "https://www.panthers.com/news",
        base: "https://www.panthers.com",
        conference: "NFC",
        division: "South"
    },
    {
        name: "Atlanta Falcons",
        id: 'falcons',
        address: "https://www.atlantafalcons.com/news",
        base: "",
        conference: "NFC",
        division: "South"
    },
    {
        name: "Arizona Cardinals",
        id: 'cardinals',
        address: "https://www.azcardinals.com/news",
        base: "",
        conference: "NFC",
        division: "West"
    },
    {
        name: "Los Angeles Rams",
        id: 'rams',
        address: "https://www.therams.com/news",
        base: "",
        conference: "NFC",
        division: "West"
    },
    {
        name: "San Francisco 49ers",
        id: '49ers',
        address: "https://www.49ers.com/news",
        base: "https://www.49ers.com",
        conference: "NFC",
        division: "West"
    },
    {
        name: "Seattle Seahawks",
        id: 'seahawks',
        address: "https://www.seahawks.com/news",
        base: "https://www.seahawks.com",
        conference: "NFC",
        division: "West"
    }

]
const news = []
// pulling the address for each object in the array and displaying it on my web page
teams.forEach(football => {  
    axios.get(football.address)   // chaining -> asynchronous Javascript
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        // pulling the a tags with the href attribute (Week 9)
        $('a:contains("News")', html).each(function () {
                const title = $(this).text().replace(/\n/g, '')
                const url = $(this).attr('href').replace(/\n/g, '')

                news.push({
                    title,
                    url,
                    conference: football.conference,
                    division: football.division,
                    team: football.name
                })
        })

    })

})
        
app.get('/', (req,res) => {
    res.json("Welcome to my NFL News API!")
})

app.get('/nfl', (req,res) => {
    res.json(news)
})

app.get('/nfl/:teamid', (req, res) => {

    const teamid = req.params.teamid

    // const confid = req.params.confid

    const teamAddress = teams.filter(football => football.id == teamid)[0].address
    const teamBase = teams.filter(football => football.id == teamid)[0].address



    // console.log(conferenceAddress)

    axios.get(teamAddress)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const specificConference = []

        $('a:contains("News")',html).each(function () {
            const title = $(this).text()
            const url = $(this).attr('href')
                specificConference.push({
                    title,
                    url: teamBase,
                    source: teamid
                })
        })
        res.json(specificConference)
    }).catch(err => console.log(err))


})



app.listen(port, () => console.log(`Server listening on Port ${port}`))
