const mlb_teams = [
    {
        name: "Arizona Diamondbacks",
        id: "dbacks",
        address: "https://www.mlb.com/dbacks/news",
        base: "https://www.mlb.com",
        home_field: "Chase Field",
        league: "National",
        division: "West"
    },
    {
        name: "Atlanta Braves",
        id: 'braves',
        address: "https://www.mlb.com/braves/news",
        base: "https://www.mlb.com",
        home_field: "Truist Park",
        league: "National",
        division: "East"
    },
    {
        name: "Baltimore Orioles",
        id: 'orioles',
        address: "https://www.mlb.com/orioles/news",
        base: "https://www.mlb.com",
        home_field: "Oriole Park",
        league: "American",
        division: "East"
    },
    {
        name: "Boston Red Sox",
        id: 'redsox',
        address: "https://www.mlb.com/redsox/news",
        base: "https://www.mlb.com",
        home_field: "Fenway Park",
        league: "American",
        division: "East"
    },
    {
        name: "Chicago Cubs",
        id: 'cubs',
        address: "https://www.mlb.com/cubs/news",
        base: "https://www.mlb.com",
        home_field: "Wrigley Field",
        league: "National",
        division: "Central"
    },
    {
        name: "Chicago White Sox",
        id: 'whitesox',
        address: "https://www.mlb.com/whitesox/news",
        base: "https://www.mlb.com",
        home_field: "Guaranteed Rate Field",
        league: "American",
        division: "Central"
    },
    {
        name: "Cincinnati Reds",
        id: 'steelers',
        address: "https://www.mlb.com/reds/news",
        base: "https://www.mlb.com",
        home_field: "Great American Ball Park",
        league: "American",
        division: "Central"
    },
    {
        name: "Cleveland Indians",
        id: 'indians',
        address: "https://www.mlb.com/indians/news",
        base: "https://www.mlb.com",
        home_field: "Progressive Field",
        league: "American",
        division: "Central"
    },
    {
        name: "Colorado Rockies",
        id: 'rockies',
        address: "https://www.mlb.com/rockies/news",
        base: "https://www.mlb.com",
        home_field: "Coors Field",
        league: "National",
        division: "West"
    },
    {
        name: "Detroit Tigers",
        id: 'tigers',
        address: "https://www.mlb.com/tigers/news",
        base: "https://www.mlb.com",
        home_field: "Comerica Park",
        league: "American",
        division: "Central"
    },
    {
        name: "Houston Astros",
        id: 'astros',
        address: "https://www.mlb.com/astros/news",
        base: "https://www.mlb.com",
        home_field: "Minute Maid Park",
        league: "American",
        division: "West"
    },
    {
        name: "Kansas City Royals",
        id: 'royals',
        address: "https://www.mlb.com/royals/news",
        base: "https://www.mlb.com",
        home_field: "Kauffman Stadium",
        league: "American",
        division: "Central"
    },
    {
        name: "Los Angeles Angels",
        id: 'angels',
        address: "https://www.mlb.com/angels/news",
        base: "https://www.mlb.com",
        home_field: "Angel Stadium",
        league: "American",
        division: "West"
    },
    {
        name: "Los Angeles Dodgers",
        id: 'dodgers',
        address: "https://www.mlb.com/dodgers/news",
        base: "https://www.mlb.com",
        home_field: "Dodger Stadium",
        league: "National",
        division: "West"
    },
    {
        name: "Miami Marlins",
        id: 'marlins',
        address: "https://www.mlb.com/marlins/news",
        base: "https://www.mlb.com",
        home_field: "loanDepot park",
        league: "National",
        division: "East"
    },
    {
        name: "Milwaukee Brewers",
        id: 'brewers',
        address: "https://www.mlb.com/brewers/news",
        base: "https://www.mlb.com",
        home_field: "American Family Field",
        league: "National",
        division: "Central"
    },
    {
        name: "Minnesota Twins",
        id: 'twins',
        address: "https://www.mlb.com/twins/news",
        base: "https://www.mlb.com",
        home_field: "Target Field",
        league: "American",
        division: "Central"
    },
    {
        name: "New York Mets",
        id: 'mets',
        address: "https://www.mlb.com/mets/news",
        base: "https://www.mlb.com",
        home_field: "Citi Field",
        league: "National",
        division: "East"
    },
    {
        name: "New York Yankees",
        id: 'yankees',
        address: "https://www.mlb.com/yankees/news",
        base: "https://www.mlb.com",
        home_field: "Yankee Stadium",
        league: "American",
        division: "East"
    },
    {
        name: "Oakland Athletics",
        id: 'athletics',
        address: "https://www.mlb.com/athletics/news",
        base: "https://www.mlb.com",
        home_field: "Oakland Coliseum",
        league: "American",
        division: "West"
    },
    {
        name: "Philadelphia Phillies",
        id: 'phillies',
        address: "https://www.mlb.com/phillies/news",
        base: "https://www.mlb.com",
        home_field: "Citizens Bank Park",
        league: "National",
        division: "East"
    },
    {
        name: "Pittsburgh Pirates",
        id: 'pirates',
        address: "https://www.mlb.com/pirates/news",
        base: "https://www.mlb.com",
        home_field: "PNC Park",
        league: "National",
        division: "Central"
    },
    {
        name: "San Diego Padres",
        id: 'padres',
        address: "https://www.mlb.com/padres/news",
        base: "https://www.mlb.com",
        home_field: "Petco Park",
        league: "National",
        division: "West"
    },
    {
        name: "San Francisco Giants",
        id: 'giants',
        address: "https://www.mlb.com/giants/news",
        base: "https://www.mlb.com",
        home_field: "Oracle Park",
        league: "National",
        division: "West"
    },
    {
        name: "Seattle Mariners",
        id: 'mariners',
        address: "https://www.mlb.com/mariners/news",
        base: "https://www.mlb.com",
        home_field: "T-Mobile Park",
        league: "American",
        division: "West"
    },
    {
        name: "St. Louis Cardinals",
        id: 'cardinals',
        address: "https://www.mlb.com/cardinals/news",
        base: "https://www.mlb.com",
        home_field: "Busch Stadium",
        league: "National",
        division: "Central"
    },
    {
        name: "Tampa Bay Rays",
        id: 'rays',
        address: "https://www.mlb.com/rays/news",
        base: "https://www.mlb.com",
        home_field: "Tropicana Field",
        league: "American",
        division: "East"
    },
    {
        name: "Toronto Blue Jays",
        id: 'bluejays',
        address: "https://www.mlb.com/bluejays/news",
        base: "https://www.mlb.com",
        home_field: "Rogers Centre",
        league: "American",
        division: "East"
    },
    {
        name: "Texas Rangers",
        id: 'rangers',
        address: "https://www.mlb.com/rangers/news",
        base: "https://www.mlb.com",
        home_field: "Globe Life Field",
        league: "American",
        division: "West"
    },
    {
        name: "Washington Nationals",
        id: 'nationals',
        address: "https://www.mlb.com/nationals/news",
        base: "https://www.mlb.com",
        home_field: "Nationals Park",
        league: "National",
        division: "East"
    }
]

module.exports = mlb_teams;