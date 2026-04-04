let arr = [
  {
    IPLteam: "CSK",
    TeamName: "Chennai Super Kings",
    primary: "yellow",
    secondary: "magenta",
    trophies: 5,
    years: "2010, 2011, 2018, 2021, 2023,"
  },
  {
    IPLteam: "RCB",
    TeamName: "Royal Challengers Bangalore",
    primary: "red",
    secondary: "lightgreen",
    trophies: 1,
    years: "2025"
  },
  {
    IPLteam: "MI",
    TeamName: "Mumbai Indians",
    primary: "blue",
    secondary: "gray",
    trophies: 5,
    years: "2013, 2015, 2017, 2019, 2020"
  },
  {
    IPLteam: "KKR",
    TeamName: "Kolkata Knight Riders",
    primary: "purple",
    secondary: "brown",
    trophies: 3,
    years: "2012, 2014, 2024"
  },
  {
    IPLteam: "SRH",
    TeamName: "Sunrisers Hyderabad",
    primary: "orange",
    secondary: "pink",
    trophies: 1,
    years: "2016"
  }
]

let btn = document.querySelector("button")
let card = document.querySelector("#card")
let main = document.querySelector("main")

btn.addEventListener('click', function () {
  let winner = arr[Math.floor(Math.random() * arr.length)]

  card.innerHTML = `<h1>${winner.IPLteam}</h1>
   <h3>Team Name: ${winner.TeamName}</h3> 
   <p>Trophies: ${winner.trophies}</p>
   <p>Winning years: ${winner.years}</p>
   `;

    card.style.backgroundColor = winner.secondary;
    main.style.backgroundColor = winner.primary;

    console.log(winner);
})


