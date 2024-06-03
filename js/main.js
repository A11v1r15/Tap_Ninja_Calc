const petList = [
    ["Bunny"    ,"Critter"],
    ["Mouse"    ,"Critter"],
    ["Hedgehog" ,"Critter"],
    ["Snake"    ,"Critter"],
    ["Frog"     ,"Critter"],
    ["Squirrel" ,"Critter"],
    ["Cat"      ,"Beast"  ],
    ["Dog"      ,"Beast"  ],
    ["Fox"      ,"Beast"  ],
    ["Panda"    ,"Beast"  ],
    ["Turtle"   ,"Beast"  ],
    ["Racoon"   ,"Beast"  ],
    ["Chicken"  ,"Bird"   ],
    ["Crane"    ,"Bird"   ],
    ["Raven"    ,"Bird"   ],
    ["Dragonfly","Bird"   ],
    ["Dragon"   ,"Bird"   ],
    ["Parrot"   ,"Bird"   ]
];

const heroList = [
    ["Falkron", "Legendary", "Water", "Support" ],
    ["Tièr"   , "Legendary", "Water", "Mage"    ],
    ["Kito"   , "Legendary", "Water", "Assassin"],
    ["Fin"    , "Legendary", "Water", "Warrior" ],
    ["Elyanna", "Legendary", "Earth", "Support" ],
    ["Wasp"   , "Legendary", "Earth", "Mage"    ],
    ["Alivia" , "Legendary", "Earth", "Assassin"],
    ["Husk"   , "Legendary", "Earth", "Warrior" ],
    ["Irbinok", "Legendary", "Wind" , "Support" ],
    ["Scythe" , "Legendary", "Wind" , "Mage"    ],
    ["Akira"  , "Legendary", "Wind" , "Assassin"],
    ["Hiro"   , "Legendary", "Wind" , "Warrior" ],
    ["Maki"   , "Legendary", "Fire" , "Support" ],
    ["Blazer" , "Legendary", "Fire" , "Mage"    ],
    ["Scarlet", "Legendary", "Fire" , "Assassin"],
    ["Scorn"  , "Legendary", "Fire" , "Warrior" ],
    ["Ray"    , "Epic"     , "Fire" , "Mage"    ],
    ["Kaoru"  , "Epic"     , "Wind" , "Mage"    ],
    ["Terra"  , "Epic"     , "Earth", "Mage"    ],
    ["Demid"  , "Epic"     , "Water", "Mage"    ],
    ["Fang"   , "Rare"     , "Fire" , "Assassin"],
    ["Jari"   , "Rare"     , "Wind" , "Warrior" ],
    ["Jie"    , "Rare"     , "Earth", "Support" ],
    ["Kenju"  , "Rare"     , "Water", "Warrior" ]
]

const lookUpMedalsTimeMaterials = [
    [  0,       0,      0],
    [  0,     200,     10],
    [  2,   11520,     25],
    [  5,   46080,     50],
    [ 10,  103680,    200],
    [ 15,  172800,    500],
    [ 20,  270720,   1000],
    [ 30,  368640,   2500],
    [ 40,  460800,   5000],
    [ 60,  604800,  10000],
    [ 80,  806400,  25000],
    [100, 1152000, 100000],
    [125, 1152000,      0],
    [150, 1152000,      0],
    [175, 1152000,      0]
];

const lookUpStars = [
    "",
    "☆",
    "☆☆",
    "☆☆☆",
    "☆☆☆☆",
    "☆☆☆☆☆",
    "★",
    "★★",
    "★★★",
    "★★★★",
    "★★★★★",
    "✭",
    "✭✭"
];

const lookUpEquipaments = {
    "Kimono" : [
        [  50,   0],
        [ 140,  25],
        [ 268,  50],
        [ 403,  75],
        [ 526, 100],
        [ 569, 125],
        [ 750, 150],
        [ 871, 175],
        [ 992, 200],
        [1113, 225],
        [1234, 250],
        [1355, 275],
        [1476, 300],
        [1598, 325],
        [1719, 350],
        [1840, 375],
        [1961, 400],
        [2082, 425],
        [2203, 450],
        [2324, 475],
        [2425, 500],
        [2505, 525],
        [2565, 550],
        [2605, 575],
        [2625, 600],
        [   0, 625]
    ],
    "Katana" : [
        [  75,   0  ],
        [ 142,   7.5],
        [ 241,  15  ],
        [ 408,  22.5],
        [ 536,  30  ],
        [ 664,  37.5],
        [ 792,  45  ],
        [ 920,  52.5],
        [1048,  60  ],
        [1176,  67.5],
        [1304,  75  ],
        [1431,  82.5],
        [1559,  90  ],
        [1687,  97.5],
        [1815, 105  ],
        [1943, 112.5],
        [2071, 120  ],
        [2199, 127.5],
        [2327, 135  ],
        [2455, 142.5],
        [2456, 150  ],
        [2457, 157.5],
        [2458, 165  ],
        [2459, 172.5],
        [2460, 180  ],
        [   0, 187.5]
    ],
    "Kabuto" : [
        [ 100,  0  ],
        [ 221,  2.5],
        [ 349,  5  ],
        [ 484,  7.5],
        [ 607, 10  ],
        [ 727, 12.5],
        [ 842, 15  ],
        [ 952, 17.5],
        [1057, 20  ],
        [1158, 22.5],
        [1259, 25  ],
        [1360, 27.5],
        [1461, 30  ],
        [1562, 32.5],
        [1663, 35  ],
        [1764, 37.5],
        [1865, 40  ],
        [1966, 42.5],
        [2067, 45  ],
        [2168, 47.5],
        [2269, 50  ],
        [2370, 52.5],
        [2471, 55  ],
        [2572, 57.5],
        [2673, 60  ],
        [   0, 62.5],
    ],
    "Geta" : [
        [  50,   0],
        [ 100,  15],
        [ 175,  30],
        [ 250,  45],
        [ 330,  60],
        [ 410,  75],
        [ 490,  90],
        [ 570, 105],
        [ 650, 120],
        [ 735, 135],
        [ 820, 150],
        [ 905, 165],
        [ 990, 180],
        [1075, 195],
        [1165, 210],
        [1255, 225],
        [1345, 240],
        [1435, 255],
        [1525, 270],
        [1620, 285],
        [1715, 300],
        [1810, 315],
        [1905, 330],
        [2000, 345],
        [2095, 360],
        [   0, 375]
    ]
}

function start(){
    let petTable = $("#petTable");
    petList.forEach(pet => {
        let tr = $("<tr></tr>").addClass(pet[1]);
        let th = $("<th></th>");
        let label = $("<label></label>").attr("for", "in" + pet[0] + "Bond")
            .text(pet[0]);
        th.append(label);
        let td0 = $("<td></td>");
        let input0 = $("<input></input>").attr("type", "number")
            .attr("min", 0).attr("max", 15)
            .attr("id", "in" + pet[0] + "Bond")
            .attr("name", "in" + pet[0] + "Bond")
            .val(localStorageGetItem(pet[0]+"Bond", 0));
        input0.change(onChangePetBond);
        td0.append(input0);
        let td1 = $("<td></td>").attr("id", "out" + pet[0] + "Medals").text("NaN");
        let td2 = $("<td></td>").attr("id", "out" + pet[0] + "Time").text("NaN");
        let td3 = $("<td></td>").attr("id", "out" + pet[0] + "MedalsSpent").text("NaN");
        let td4 = $("<td></td>");
        let input1 = $("<input></input>").attr("type", "number")
            .attr("min", 0).attr("max", 12)
            .attr("id", "in" + pet[0] + "Stars")
            .attr("name", "in" + pet[0] + "Stars")
            .val(localStorageGetItem(pet[0]+"Stars", 0));
        input1.change(onChangePetStars);
        td4.append(input1);
        let td5 = $("<td></td>").attr("id", "out" + pet[0] + "Materials").text("NaN");
        tr.append(th).append(td0).append(td1).append(td2).append(td3).append(td4).append(td5);
        petTable.append(tr);
    });
    let totalPet = $("<tr class='header'><th>Total</th><td id='outTotalBond'>NaN</td><td id='outTotalMedals'>NaN</td><td id='outTotalTime'>NaN</td></td><td id='outTotalMedalsSpent'>NaN</td><td id='outTotalStars'>NaN</td><td id='outTotalMaterials'>NaN</td></tr>");
    petTable.append(totalPet);

    let equipamentTable = $("#equipamentTable");
    Object.keys(lookUpEquipaments).forEach(item => {
        let tr = $("<tr></tr>").addClass("legend");
        let th = $("<th></th>");
        let label = $("<label></label>").attr("for", "in" + item)
            .text(item);
        th.append(label);
        let td0 = $("<td></td>");
        let input = $("<input></input>").attr("type", "number")
            .attr("min", 0).attr("max", lookUpEquipaments[item][25][1])
            .attr("step", lookUpEquipaments[item][2][1] - lookUpEquipaments[item][1][1])
            .attr("id", "in" + item)
            .attr("name", "in" + item)
            .val(localStorageGetItem(item+"Bonus", 0));
        input.change(onChangeEquipamentBonus);
        td0.append(input);
        let td1 = $("<td></td>").attr("id", "out" + item + "Level").text("NaN");
        let td2 = $("<td></td>").attr("id", "out" + item + "Cost").text("NaN");
        let td3 = $("<td></td>").attr("id", "out" + item + "Amber").text("NaN");
        let td4 = $("<td></td>").attr("id", "out" + item + "AmberSpent").text("NaN");
        tr.append(th).append(td0).append(td1).append(td2).append(td3).append(td4);
        equipamentTable.append(tr);
    });
    let totalEquipament = $("<tr class='header'><th>Total</th><td colspan='3'></td><td id='outTotalAmber'>NaN</td><td id='outTotalAmberSpent'>NaN</td></tr>");
    equipamentTable.append(totalEquipament);

    onChangePetBond();
    onChangePetStars();
    onChangeEquipamentBonus();
    petTab();
}

function onChangePetBond(event){
    let bondTotal = 0;
    let medalsTotal = 0;
    let timeTotal = 0;
    let medalsSpentTotal = 0;
    petList.forEach(pet => {
        localStorage.setItem(pet[0]+"Bond", Number($("#in" + pet[0] + "Bond").val()));
        bondTotal += Number($("#in" + pet[0] + "Bond").val());
        let medalResult = calcMedals($("#in" + pet[0] + "Bond").val());
        $("#out" + pet[0] + "Medals").text(medalResult);
        medalsTotal += medalResult;
        let timeResult = calcTime($("#in" + pet[0] + "Bond").val());
        $("#out" + pet[0] + "Time").text(formatTime(timeResult));
        timeTotal += timeResult;
        let medalsSpentResult = calcMedalsSpent($("#in" + pet[0] + "Bond").val());
        $("#out" + pet[0] + "MedalsSpent").text(medalsSpentResult);
        medalsSpentTotal += medalsSpentResult;
    });
    $("#outTotalBond").text(bondTotal);
    $("#outTotalMedals").text(medalsTotal.toLocaleString());
    $("#outTotalTime").text(formatTime(timeTotal));
    $("#outTotalMedalsSpent").text(medalsSpentTotal.toLocaleString());
}

function onChangePetStars(event){
    let starsTotal = 0;
    let materials = {};
    materials["Total"] = 0;
    petList.forEach(pet => {
        materials[pet[1]] = 0;
    });
    petList.forEach(pet => {
        localStorage.setItem(pet[0]+"Stars", Number($("#in" + pet[0] + "Stars").val()));
        starsTotal += Number($("#in" + pet[0] + "Stars").val());
        let materialsResult = calcMaterials($("#in" + pet[0] + "Stars").val());
        $("#out" + pet[0] + "Materials").text(materialsResult.toLocaleString());
        materials["Total"] += materialsResult;
        materials[pet[1]] += materialsResult;
        $("#in" + pet[0] + "Stars").attr("title", lookUpStars[Number($("#in" + pet[0] + "Stars").val())]);
    });
    $("#outTotalStars").text(starsTotal);
    $("#outTotalMaterials").text(materials["Total"].toLocaleString());
    let title = "";
    Object.keys(materials).forEach(kind => {
        title += kind + ": " + Number(materials[kind]).toLocaleString() + "\n"
    });
    $("#outTotalMaterials").attr("title", title);
}

function onChangeEquipamentBonus(event){
    let lvlTotal = 0;
    let amberTotal = 0;
    let amberSpentTotal = 0;
    Object.keys(lookUpEquipaments).forEach(item => {
        localStorage.setItem(item+"Bonus", Number($("#in" + item).val()));
        let step = lookUpEquipaments[item][2][1] - lookUpEquipaments[item][1][1];
        let lvl = Number($("#in" + item).val())/step;
        lvlTotal += lvl;
        let cost = lookUpEquipaments[item][lvl][0];
        let amber = calcAmber(item, lvl);
        let amberSpent = calcAmberSpent(item, lvl);
        amberTotal += amber;
        amberSpentTotal += amberSpent;
        $("#out" + item + "Level").text(lvl);
        $("#out" + item + "Cost" ).text(cost.toLocaleString());
        $("#out" + item + "Amber").text(amber.toLocaleString());
        $("#out" + item + "AmberSpent").text(amberSpent.toLocaleString());
    });
    $("#outTotalAmber").text(amberTotal.toLocaleString());
    $("#outTotalAmberSpent").text(amberSpentTotal.toLocaleString());
    let lvlTotalWidth = (lvlTotal / (Object.keys(lookUpEquipaments).length * 25)) * 100
    $("#equipamentBar div").attr("style", "width:" + lvlTotalWidth + "%;").text("+" + lvlTotal + "%");
}

function calcMedals(bond){
    let result = 0;
    for (let s = Number(bond); s < lookUpMedalsTimeMaterials.length; s++) {
        result += lookUpMedalsTimeMaterials[s][0];
    }
    return result;
}

function calcMedalsSpent(bond){
    let result = 0;
    for (let s = 0; s < Number(bond); s++) {
        result += lookUpMedalsTimeMaterials[s][0];
    }
    return result;
}

function calcTime(bond){
    let result = 0;
    for (let s = Number(bond); s < lookUpMedalsTimeMaterials.length; s++) {
        result += lookUpMedalsTimeMaterials[s][1];
    }
    return result;
}

function calcMaterials(stars){
    let result = 0;
    for (let s = Number(stars); s < lookUpMedalsTimeMaterials.length; s++) {
        result += lookUpMedalsTimeMaterials[s][2];
    }
    return result;
}

function calcAmber(item, lvl){
    let result = 0;
    for (let s = Number(lvl); s < lookUpEquipaments[item].length; s++) {
        result += lookUpEquipaments[item][s][0];
    }
    return result;
}

function calcAmberSpent(item, lvl){
    let result = 0;
    for (let s = 0; s < Number(lvl); s++) {
        result += lookUpEquipaments[item][s][0];
    }
    return result;
}

function localStorageGetItem(key, value){
    if (localStorage.getItem(key) == null  ||
        localStorage.getItem(key) == 'NaN' ||
        localStorage.getItem(key) == ''    )
        return value;
    return localStorage.getItem(key);
}

function formatTime(secs){
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

function petTab(){
    $("#petTable").show();
    $("#equipamentTable").hide();
    $("#petTabButton").addClass("selected");
    $("#equipamentTabButton").removeClass();
}

function equipamentTab(){
    $("#petTable").hide();
    $("#equipamentTable").show();
    $("#petTabButton").removeClass();
    $("#equipamentTabButton").addClass("selected");
}

$(document).ready(start());