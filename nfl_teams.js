
const nfl_teams = [
    {
        name: "Buffalo Bills",
        id: "bills",
        address: "https://www.buffalobills.com/news",
        base: "",
        home_field: "Highmark Stadium",
        conference: "AFC",
        division: "East"
    },
    {
        name: "New England Patriots",
        id: 'patriots',
        address: "https://www.patriots.com/news",
        base: "https://www.patriots.com",
        home_field: "Gillette Stadium",
        conference: "AFC",
        division: "East"
    },
    {
        name: "New York Jets",
        id: 'jets',
        address: "https://www.newyorkjets.com/news",
        home_field: "MetLife Stadium",
        base: "",
        conference: "AFC",
        division: "East"
    },
    {
        name: "Miami Dolphins",
        id: 'dolphins',
        address: "https://www.miamidolphins.com/news",
        base: "https://www.miamidolphins.com",
        home_field: "Hard Rock Stadium",
        conference: "AFC",
        division: "East"
    },
    {
        name: "Baltimore Ravens",
        id: 'ravens',
        address: "https://www.baltimoreravens.com/news",
        base: "",
        home_field: "M&T Bank Stadium",
        conference: "AFC",
        division: "North"
    },
    {
        name: "Cincinnati Bengals",
        id: 'bengals',
        address: "https://www.bengals.com/news",
        base: "",
        home_field: "Paul Brown Stadium",
        conference: "AFC",
        division: "North"
    },
    {
        name: "Pittsburgh Steelers",
        id: 'steelers',
        address: "https://www.steelers.com/news",
        base: "",
        home_field: "Heinz Field",
        conference: "AFC",
        division: "North"
    },
    {
        name: "Cleveland Browns",
        id: 'browns',
        address: "http://browns.com/",
        base: "http://browns.com",
        home_field: "FirstEnergy Stadium",
        conference: "AFC",
        division: "North"
    },
    {
        name: "Tennessee Titans",
        id: 'titans',
        address: "https://www.tennesseetitans.com/news",
        base: "",
        home_field: "Nissan Stadium",
        conference: "AFC",
        division: "South"
    },
    {
        name: "Indianapolis Colts",
        id: 'colts',
        address: "https://www.colts.com/news",
        base: "https://www.colts.com",
        home_field: "Lucas Oil Stadium",
        conference: "AFC",
        division: "South"
    },
    {
        name: "Jacksonville Jaguars",
        id: 'jaguars',
        address: "https://www.jaguars.com/news",
        base: "",
        home_field: "TIAA Bank Field",
        conference: "AFC",
        division: "South"
    },
    {
        name: "Houston Texans",
        id: 'texans',
        address: "https://www.houstontexans.com/news",
        base: "",
        home_field: "NRG Stadium",
        conference: "AFC",
        division: "South"
    },
    {
        name: "Las Vegas Raiders",
        id: 'raiders',
        address: "https://www.raiders.com/news",
        base: "",
        home_field: "Allegiant Stadium",
        conference: "AFC",
        division: "West"
    },
    {
        name: "Los Angeles Chargers",
        id: 'chargers',
        address: "https://www.chargers.com/news",
        base: "",
        home_field: "SoFi Stadium",
        conference: "AFC",
        division: "West"
    },
    {
        name: "Kansas City Chiefs",
        id: 'chiefs',
        address: "https://www.chiefs.com/news",
        base: "",
        home_field: "Arrowhead Stadium",
        conference: "AFC",
        division: "West"
    },
    {
        name: "Denver Broncos",
        id: 'broncos',
        address: "https://www.denverbroncos.com/news",
        base: "",
        home_field: "Empower Field at Mile High",
        conference: "AFC",
        division: "West"
    },
    {
        name: "Dallas Cowboys",
        id: 'cowboys',
        address: "https://www.dallascowboys.com/news",
        base: "https://www.dallascowboys.com",
        home_field: "AT&T Stadium",
        conference: "NFC",
        division: "East"
    },
    {
        name: "Philadelphia Eagles",
        id: 'eagles',
        address: "https://www.philadelphiaeagles.com/news",
        base: "",
        home_field: "Lincoln Financial Field",
        conference: "NFC",
        division: "East"
    },
    {
        name: "Washington Football Team",
        id: 'washington',
        address: "https://www.washingtonfootball.com/news",
        base: "",
        home_field: "FedExField",
        conference: "NFC",
        division: "East"
    },
    {
        name: "New York Giants",
        id: 'giants',
        address: "https://www.giants.com/news",
        base: "",
        home_field: "MetLife Stadium",
        conference: "NFC",
        division: "East"
    },
    {
        name: "Green Bay Packers",
        id: 'packers',
        address: "https://www.packers.com/news",
        base: "",
        home_field: "Lambeau Field",
        conference: "NFC",
        division: "North"
    },
    {
        name: "Minnesota Vikings",
        id: 'vikings',
        address: "https://www.vikings.com/news/all-news",
        base: "",
        home_field: "U.S. Bank Stadium",
        conference: "NFC",
        division: "North"
    },
    {
        name: "Chicago Bears",
        id: 'bears',
        address: "https://www.chicagobears.com/news",
        base: "https://www.chicagobears.com",
        home_field: "Soldier Field",
        conference: "NFC",
        division: "North"
    },
    {
        name: "Detroit Lions",
        id: 'lions',
        address: "https://www.detroitlions.com/news",
        base: "https://www.detroitlions.com",
        home_field: "Ford Field",
        conference: "NFC",
        division: "North"
    },
    {
        name: "Tampa Bay Buccanneers",
        id: 'bucs',
        address: "https://www.buccaneers.com/news",
        base: "",
        home_field: "Raymond James Stadium",
        conference: "NFC",
        division: "South"
    },
    {
        name: "New Orleans Saints",
        id: 'saints',
        address: "https://www.neworleanssaints.com/news",
        base: "",
        home_field: "Caesars Superdome",
        conference: "NFC",
        division: "South"
    },
    {
        name: "Carolina Panthers",
        id: 'panthers',
        address: "https://www.panthers.com/news",
        base: "",
        home_field: "Bank of America Stadium",
        conference: "NFC",
        division: "South"
    },
    {
        name: "Atlanta Falcons",
        id: 'falcons',
        address: "https://www.atlantafalcons.com/news",
        base: "",
        home_field: "Mercedes Benz Stadium",
        conference: "NFC",
        division: "South"
    },
    {
        name: "Arizona Cardinals",
        id: 'cardinals',
        address: "https://www.azcardinals.com/news",
        base: "",
        home_field: "State Farm Stadium",
        conference: "NFC",
        division: "West"
    },
    {
        name: "Los Angeles Rams",
        id: 'rams',
        address: "https://www.therams.com/news",
        base: "",
        home_field: "SoFi Stadium",
        conference: "NFC",
        division: "West"
    },
    {
        name: "San Francisco 49ers",
        id: '49ers',
        address: "https://www.49ers.com/news",
        base: "https://www.49ers.com",
        home_field: "Levi's Stadium",
        conference: "NFC",
        division: "West"
    },
    {
        name: "Seattle Seahawks",
        id: 'seahawks',
        address: "https://www.seahawks.com/news",
        base: "https://www.seahawks.com",
        home_field: "Lumen Field",
        conference: "NFC",
        division: "West"
    }

]

module.exports = nfl_teams;