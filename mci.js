const players = [
    {"name":"Ederson","age":"30","nationality":"Brazilian","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/26.png?lm=1520611569","number":"31","position":"GK","img":"https://img.a.transfermarkt.technology/portrait/header/238223-1661978747.jpg?lm=1"},
    {"name":"Stefan Ortega","age":"30","nationality":"German","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/40.png?lm=1520612525","number":"18","position":"GK","img":"https://img.a.transfermarkt.technology/portrait/header/85941-1668065114.jpg?lm=1"},
    {"name":"Zack Steffen","age":"28","nationality":"American","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/184.png?lm=1520611569","number":"13","position":"GK","img":"https://img.a.transfermarkt.technology/portrait/header/221624-1665127241.jpg?lm=1"},
    {"name":"Scott Carson","age":"37","nationality":"English","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/189.png?lm=1520611569","number":"33","position":"GK","img":"https://img.a.transfermarkt.technology/portrait/header/14555-1666733622.jpg?lm=1"},
    {"name":"Rúben Dias","age":"26","nationality":"Portugese","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569","number":"3","position":"CB","img":"https://img.a.transfermarkt.technology/portrait/medium/258004-1684921271.jpg?lm=1"},
    {"name":"Josko Gvardiol","age":"21","nationality":"Croatian","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/37.png?lm=1520611569","number":"24","position":"CB","img":"https://img.a.transfermarkt.technology/portrait/medium/475959-1663685941.jpg?lm=1"},
    {"name":"Nathan Aké","age":"28","nationality":"Dutch","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/122.png?lm=1520611569","number":"6","position":"CB","img":"https://img.a.transfermarkt.technology/portrait/medium/177476-1666733797.jpg?lm=1"},
    {"name":"John Stones","age":"29","nationality":"English","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/189.png?lm=1520611569","number":"5","position":"CB","img":"https://img.a.transfermarkt.technology/portrait/medium/186590-1684764261.jpg?lm=1"},
    {"name":"Manuel Akanji","age":"28","nationality":"Swiss","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/148.png?lm=1520611569","number":"25","position":"CB","img":"https://img.a.transfermarkt.technology/portrait/medium/284730-1684165752.jpg?lm=1"},
    {"name":"Jérémy Doku","age":"21","nationality":"Belgian","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/19.png?lm=1520611569","number":"11","position":"RW","img":"https://img.a.transfermarkt.technology/portrait/big/486049-1666699113.jpg?lm=1"},
    //{"name":"Taylor Hardwood-Bellis","age":"21","nationality":"English","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/189.png?lm=1520611569","number":"78","position":"CB","img":"https://img.a.transfermarkt.technology/portrait/medium/503977-1687975943.jpg?lm=1"},
    {"name":"Sregio Gomez","age":"22","nationality":"Spanish","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/157.png?lm=1520611569","number":"21","position":"LB","img":"https://img.a.transfermarkt.technology/portrait/medium/366930-1660209686.jpg?lm=1"},
    {"name":"Matheus Nunes","age":"25","nationality":"Portugese","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569","number":"27","position":"CM","img":"https://img.a.transfermarkt.technology/portrait/header/601883-1693561106.jpg?lm=1"},
    {"name":"Rico Lewis","age":"18","nationality":"English","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/189.png?lm=1520611569","number":"82","position":"RB","img":"https://img.a.transfermarkt.technology/portrait/medium/701057-1684856684.jpg?lm=1"},
    {"name":"Kyle Walker","age":"33","nationality":"English","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/189.png?lm=1520611569","number":"2","position":"RB","img":"https://img.a.transfermarkt.technology/portrait/medium/95424-1668090663.jpg?lm=1"},
    {"name":"Rodri","age":"27","nationality":"Spanish","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/157.png?lm=1520611569","number":"16","position":"CDM","img":"https://img.a.transfermarkt.technology/portrait/medium/357565-1682587890.jpg?lm=1"},
    {"name":"Kalvan Phillips","age":"27","nationality":"English","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/189.png?lm=1520611569","number":"4","position":"CDM","img":"https://img.a.transfermarkt.technology/portrait/medium/351749-1661978510.jpg?lm=1"},
    //{"name":"Máximo Perrone","age":"20","nationality":"Argentinian","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569","number":"32","position":"CDM","img":"https://img.a.transfermarkt.technology/portrait/medium/668547-1681246573.jpg?lm=1"},
    {"name":"Mateo Kovacic","age":"29","nationality":"Croatian","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/37.png?lm=1520611569","number":"8","position":"CM","img":"https://img.a.transfermarkt.technology/portrait/medium/51471-1682668192.jpg?lm=1"},
    //{"name":"James McAtee","age":"20","nationality":"English","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/189.png?lm=1520611569","number":"87","position":"CM","img":"https://img.a.transfermarkt.technology/portrait/medium/583199-1692364836.jpg?lm=1"},
    {"name":"Bernardo Silva","age":"29","nationality":"Portugese","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569","number":"20","position":"CAM","img":"https://img.a.transfermarkt.technology/portrait/medium/241641-1684311533.jpg?lm=1"},
    {"name":"Kevin DeBruyne","age":"32","nationality":"Belgian","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/19.png?lm=1520611569","number":"17","position":"CAM","img":"https://img.a.transfermarkt.technology/portrait/medium/88755-1684245748.jpg?lm=1"},
    {"name":"Oscar Bobb","age":"20","nationality":"Norwegian","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/125.png?lm=1520611569","number":"52","position":"CAM","img":"https://img.a.transfermarkt.technology/portrait/header/661207-1648828348.png?lm=1"},
    {"name":"Phil Foden","age":"23","nationality":"English","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/189.png?lm=1520611569","number":"47","position":"LW","img":"https://img.a.transfermarkt.technology/portrait/medium/406635-1668524492.jpg?lm=1"},
    {"name":"Jack Grealish","age":"27","nationality":"English","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/189.png?lm=1520611569","number":"10","position":"LW","img":"https://img.a.transfermarkt.technology/portrait/medium/203460-1676499047.jpg?lm=1"},
    {"name":"Erling Haaland","age":"23","nationality":"Norwegian","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/125.png?lm=1520611569","number":"9","position":"ST","img":"https://img.a.transfermarkt.technology/portrait/medium/418560-1656179352.jpg?lm=1"},
    {"name":"Julián Álvarez","age":"23","nationality":"Argentinian","nationalityLink":"https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569","number":"19","position":"ST","img":"https://img.a.transfermarkt.technology/portrait/medium/576024-1684920938.jpg?lm=1"}
]

const posCodes = {
    "GK":"1",
    "LB":"2",
    "CB":"3",
    "RB":"4",
    "CDM":"5",
    "CM":"6",
    "CAM":"7",
    "LW":"8",
    "ST":"9",
    "RW":"10"
}

let playersSorted = players;
let playersFiltered;

playersSorted = players.sort(function(a, b){return posCodes[a.position] - posCodes[b.position]});
    for(let i=0; i<playersSorted.length; i++){
    document.querySelector("#playersFlexContainer").innerHTML+='<div class="player"><div class="playerName"><h3>'+playersSorted[i].name+'</h3></div><div class="playerImg"><img src='+playersSorted[i].img+'></div><div class="playerDetails"><p>Age: '+playersSorted[i].age+'</p><p>Nationality: <img src='+playersSorted[i].nationalityLink+' width="20"></p><p>Number: '+playersSorted[i].number+'</p><p>Position: '+playersSorted[i].position+'</p><button>More</button></div></div>'
    }

function toggleDropdown() {
    document.getElementById("dropdown-content-container").classList.toggle("show");
}

function toggleFilterDropdown(){
    document.getElementById("filterDropdownContainer").classList.toggle("filterShow");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.filterDropdownB')) {
      var dropdowns = document.getElementsByClassName("filterDropdownContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('filterShow')) {
          openDropdown.classList.remove('filterShow');
        }
      }
    }
}

function sortByPosition(){
    playersSorted = players.sort(function(a, b){return posCodes[a.position] - posCodes[b.position]});
    document.querySelector("#playersFlexContainer").innerHTML="";
    for(let i=0; i<playersSorted.length; i++){
    document.querySelector("#playersFlexContainer").innerHTML+='<div class="player"><div class="playerName"><h3>'+playersSorted[i].name+'</h3></div><div class="playerImg"><img src='+playersSorted[i].img+'></div><div class="playerDetails"><p>Age: '+playersSorted[i].age+'</p><p>Nationality: <img src='+playersSorted[i].nationalityLink+' width="20"></p><p>Number: '+playersSorted[i].number+'</p><p>Position: '+playersSorted[i].position+'</p><button>More</button></div></div>'
    }
}

function sortByAges(){
    playersSorted = players.sort(function(a, b){return a.age - b.age});
    document.querySelector("#playersFlexContainer").innerHTML="";
    for(let i=0; i<playersSorted.length; i++){
    document.querySelector("#playersFlexContainer").innerHTML+='<div class="player"><div class="playerName"><h3>'+playersSorted[i].name+'</h3></div><div class="playerImg"><img src='+playersSorted[i].img+'></div><div class="playerDetails"><p>Age: '+playersSorted[i].age+'</p><p>Nationality: <img src='+playersSorted[i].nationalityLink+' width="20"></p><p>Number: '+playersSorted[i].number+'</p><p>Position: '+playersSorted[i].position+'</p><button>More</button></div></div>'
    }
}

function sortByAgesDown(){
    playersSorted = players.sort(function(a, b){return b.age - a.age });
    document.querySelector("#playersFlexContainer").innerHTML="";
    for(let i=0; i<playersSorted.length; i++){
    document.querySelector("#playersFlexContainer").innerHTML+='<div class="player"><div class="playerName"><h3>'+playersSorted[i].name+'</h3></div><div class="playerImg"><img src='+playersSorted[i].img+'></div><div class="playerDetails"><p>Age: '+playersSorted[i].age+'</p><p>Nationality: <img src='+playersSorted[i].nationalityLink+' width="20"></p><p>Number: '+playersSorted[i].number+'</p><p>Position: '+playersSorted[i].position+'</p><button>More</button></div></div>'
    }
}

function sortByName(){
    playersSorted = players.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
    });
    document.querySelector("#playersFlexContainer").innerHTML="";
    for(let i=0; i<playersSorted.length; i++){
        document.querySelector("#playersFlexContainer").innerHTML+='<div class="player"><div class="playerName"><h3>'+playersSorted[i].name+'</h3></div><div class="playerImg"><img src='+playersSorted[i].img+'></div><div class="playerDetails"><p>Age: '+playersSorted[i].age+'</p><p>Nationality: <img src='+playersSorted[i].nationalityLink+' width="20"></p><p>Number: '+playersSorted[i].number+'</p><p>Position: '+playersSorted[i].position+'</p><button>More</button></div></div>'
    }
}

function sortByNation(){
    playersSorted = players.sort(function (a, b) {
    if (a.nationality < b.nationality) {
        return -1;
    }
    if (a.nationality > b.nationality) {
        return 1;
    }
    return 0;
    });
    document.querySelector("#playersFlexContainer").innerHTML="";
    for(let i=0; i<playersSorted.length; i++){
        document.querySelector("#playersFlexContainer").innerHTML+='<div class="player"><div class="playerName"><h3>'+playersSorted[i].name+'</h3></div><div class="playerImg"><img src='+playersSorted[i].img+'></div><div class="playerDetails"><p>Age: '+playersSorted[i].age+'</p><p>Nationality: <img src='+playersSorted[i].nationalityLink+' width="20"></p><p>Number: '+playersSorted[i].number+'</p><p>Position: '+playersSorted[i].position+'</p><button>More</button></div></div>'
    }
}

function filterPlayers(playerPosition){
    document.querySelector("#playersFlexContainer").innerHTML="";
    playersFiltered = players.filter(player => player.position == playerPosition );
    for(let i=0; i<playersFiltered.length; i++){
        document.querySelector("#playersFlexContainer").innerHTML+='<div class="player"><div class="playerName"><h3>'+playersFiltered[i].name+'</h3></div><div class="playerImg"><img src='+playersFiltered[i].img+'></div><div class="playerDetails"><p>Age: '+playersFiltered[i].age+'</p><p>Nationality: <img src='+playersFiltered[i].nationalityLink+' width="20"></p><p>Number: '+playersFiltered[i].number+'</p><p>Position: '+playersFiltered[i].position+'</p><button>More</button></div></div>'
    }
}

const leagueCups = ["20/21" ,  "19/20" ,  "18/19" ,  "17/18" ,  "15/16" ,  "13/14" ,  "75/76", "69/70"]
const leagueTitles = ["22/23" ,  "21/22" ,  "20/21" ,  "18/19" ,  "17/18" ,  "13/14" ,  "11/12" ,  "67/68" ,  "36/37"]
const faCups = ["22/23" ,  "18/19" ,  "10/11" ,  "68/69" ,  "55/56" ,  "33/34" ,  "1903/04"]
const faCommuntyShields = ["1937", "1968", "1972", "2012", "2018", "2019"]
const ucl = ["22/23"]
const ecwc = ["69/70"]
const usc = ["23/24"]
function displayTrophies(yearArr, id, src) {
    for(let i=0; i<yearArr.length; i++){
        document.querySelector(id).innerHTML+='<div class="imgAndText"><img src='+src+'><figcaption>'+yearArr[i]+'</figcaption></div>'
    }
}
displayTrophies(leagueCups, "#leagueCupsContainer", "https://tmssl.akamaized.net/images/erfolge/medium/47.png?lm=1520606999")
displayTrophies(leagueTitles, "#leagueTitlesContainer", "https://tmssl.akamaized.net/images/erfolge/medium/12.png?lm=1520606997")
displayTrophies(faCups, "#faCupsContainer", "https://tmssl.akamaized.net/images/erfolge/medium/29.png?lm=1520606999")
displayTrophies(faCommuntyShields, "#faCommunityShieldContainer", "https://tmssl.akamaized.net/images/erfolge/medium/316.png?lm=1520606999")
displayTrophies(ucl, "#uclContainer", "https://tmssl.akamaized.net/images/erfolge/medium/4.png?lm=1520606999")
displayTrophies(ecwc, "#ecwcContainer", "https://tmssl.akamaized.net/images/erfolge/medium/53.png?lm=1647507697")
displayTrophies(usc, "#uscContainer", "https://tmssl.akamaized.net/images/erfolge/medium/354.png?lm=1520606999")