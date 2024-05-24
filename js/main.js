const petList = [
    ["critter", "Bunny"    ],
    ["critter", "Mouse"    ],
    ["critter", "Hedgehog" ],
    ["critter", "Snake"    ],
    ["critter", "Frog"     ],
    ["critter", "Squirrel" ],

    ["beast",   "Cat"      ],
    ["beast",   "Dog"      ],
    ["beast",   "Fox"      ],
    ["beast",   "Panda"    ],
    ["beast",   "Turtle"   ],
    ["beast",   "Racoon"   ],

    ["bird",    "Chicken"  ],
    ["bird",    "Crane"    ],
    ["bird",    "Raven"    ],
    ["bird",    "Dragonfly"],
    ["bird",    "Dragon"   ],
    ["bird",    "Parrot"   ]
];

const lookUpLvlMedalsTime = [
    [  0,       0],
    [  0,     200],
    [  2,   11520],
    [  5,   46080],
    [ 10,  103680],
    [ 15,  172800],
    [ 20,  270720],
    [ 30,  368640],
    [ 40,  460800],
    [ 60,  604800],
    [ 80,  806400],
    [100, 1152000],
    [125, 1152000],
    [150, 1152000],
    [175, 1152000]
];

function start(){
    let petMedals = $("#petmedals");
    petList.forEach(pet => {
        let tr = $("<tr></tr>").addClass(pet[0]);
        let th = $("<th></th>");
        let label = $("<label></label>").attr("for", "in" + pet[1])
            .text(pet[1]);
        th.append(label);
        let td0 = $("<th></th>");
        let input = $("<input></input>").attr("type", "number")
            .attr("min", 0).attr("max", 15)
            .attr("id", "in" + pet[1])
            .attr("name", "in" + pet[1])
            .val(localStorageGetItem(pet[1]+"Stars", 0));
        input.change(onChangePetStars);
        td0.append(input);
        let td1 = $("<td></td>").attr("id", "out" + pet[1] + "Medals").text("NaN");
        let td2 = $("<td></td>").attr("id", "out" + pet[1] + "Time").text("NaN");
        tr.append(th).append(td0).append(td1).append(td2);
        petMedals.append(tr);
    });
    let total = $("<tr class='header'><th>Total</td><td id='outTotalStars'>NaN</td><td id='outTotalMedals'>NaN</td><td id='outTotalTime'>NaN</td></td>");
    petMedals.append(total);
    onChangePetStars();
}

function onChangePetStars(event){
    let starsTotal = 0;
    let medalTotal = 0;
    let timeTotal = 0;
    petList.forEach(pet => {
        localStorage.setItem(pet[1]+"Stars", Number($("#in" + pet[1]).val()));
        starsTotal += Number($("#in" + pet[1]).val());
        let medalResult = calcMedals($("#in" + pet[1]).val());
        $("#out" + pet[1] + "Medals").text(medalResult);
        medalTotal += medalResult;
        let timeResult = calcTime($("#in" + pet[1]).val());
        $("#out" + pet[1] + "Time").text(toHHMMSS(timeResult));
        timeTotal += timeResult;
    });
    $("#outTotalStars").text(starsTotal);
    $("#outTotalMedals").text(medalTotal);
    $("#outTotalTime").text(toHHMMSS(timeTotal));
}

function calcMedals(stars){
    let result = 0;
    for (let s = Number(stars); s < lookUpLvlMedalsTime.length; s++) {
        result += lookUpLvlMedalsTime[s][0];
    }
    return result;
}

function calcTime(stars){
    let result = 0;
    for (let s = Number(stars); s < lookUpLvlMedalsTime.length; s++) {
        result += lookUpLvlMedalsTime[s][1];
    }
    return result;
}

function localStorageGetItem(key, value){
    return localStorage.getItem(key) == null ? value : localStorage.getItem(key);
}

function toHHMMSS(secs){
    if (Number(secs) == 0) return "00h 00m 00s";
    var sec_num = parseInt(secs, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    result = [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0);

    return result[0] + "h " + result[1] + "m " + result[2] + "s";
}

$(document).ready(start());