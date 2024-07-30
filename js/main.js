const petList = [
	["Bunny"     , "Critter"],
	["Mouse"     , "Critter"],
	["Hedgehog"  , "Critter"],
	["Snake"     , "Critter"],
	["Frog"      , "Critter"],
	["Squirrel"  , "Critter"],
	["Cat"       , "Beast"  ],
	["Dog"       , "Beast"  ],
	["Fox"       , "Beast"  ],
	["Panda"     , "Beast"  ],
	["Turtle"    , "Beast"  ],
	["Racoon"    , "Beast"  ],
	["Chicken"   , "Flying" ],
	["Crane"     , "Flying" ],
	["Raven"     , "Flying" ],
	["Dragonfly" , "Flying" ],
	["Dragonling", "Flying" ],
	["Parrot"    , "Flying" ]
];

const tintList = [
//  Name          Enemy Challenge Amber
	["Bunny"     , "Critter", true , false, false],
	["Mouse"     , "Critter", false, true , false],
	["Capybara"  , "Critter", true , false, false],
	["Hedgehog"  , "Critter", false, false, true ],
	["Snake"     , "Critter", true , false, false],
	["Frog"      , "Critter", false, true , true ],
	["Squirrel"  , "Critter", false, false, true ],
	["Cat"       , "Beast"  , true , true , true ],
	["LilCat"    , "Beast"  , true , true , true ],
	["Dog"       , "Beast"  , true , false, true ],
	["LilDog"    , "Beast"  , true , false, true ],
	["Wolf"      , "Beast"  , true , false, true ],
	["Fox"       , "Beast"  , false, false, true ],
	["LilFox"    , "Beast"  , false, false, true ],
	["Panda"     , "Beast"  , false, false, true ],
	["Turtle"    , "Beast"  , true , true , false],
	["Racoon"    , "Beast"  , false, true , false],
	["Chicken"   , "Flying" , false, true , false],
	["Duck"      , "Flying" , false, true , true ],
	["Crane"     , "Flying" , false, false, true ],
	["Raven"     , "Flying" , false, true , false],
	["Dragonfly" , "Flying" , true , true , true ],
	["Dragonling", "Flying" , false, true , false],
	["LuckDragon", "Flying" , false, true , true ],
	["Parrot"    , "Flying" , true , false, false]
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

const lookUpDustRareEpicLegendary = [
	[    25,     50,     100],
	[   125,    250,     500],
	[   250,    500,    1000],
	[   625,   1250,    2500],
	[  1250,   2500,    5000],
	[  1875,   3750,    7500],
	[  2500,   5000,   10000],
	[  6250,  12500,   25000],
	[ 12500,  25000,   50000],
	[ 25000,  50000,  100000],
	[ 62500, 125000,  250000],
	[250000, 500000, 1000000]
]

const lookUpMedalsTimeFeathers = [
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

const lookUpEquipments = {
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
	],
	"Kote" : [
		[ 200,  0  ],
		[ 220,  0.4],
		[ 378,  0.8],
		[ 559,  1.2],
		[ 678,  1.6],
		[ 814,  2  ],
		[ 997,  2.4],
		[1154,  2.8],
		[1250,  3.2],
		[1437,  3.6],
		[1614,  4  ],
		[1767,  4.4],
		[1882,  4.8],
		[2072,  5.2],
		[2253,  5.6],
		[2418,  6  ],
		[2560,  6.4],
		[2670,  6.8], // Not real values
		[2741,  7.2], // Not real values
		[2779,  7.6], // Not real values
		[3057,  8  ], // Not real values
		[3026,  8.4],
		[2932,  8.8],
		[3167,  9.2],
		[3420,  9.6],
		[   0, 10  ]
	]
}

const heroLevelUpExperienceCost = [ 0,
	  100,   150,   200,   250,   300,   350,   400,   450,   500,   600,
	  700,   800,   900,  1000,  1200,  1400,  1600,  1800,  2000,  2250,
	 2500,  2750,  3000,  3500,  4000,  4500,  5000,  6000,  7000,  8000,
	 9000, 10000, 12000, 14000, 16000, 18000, 20000, 22000, 24000, 26000,
	28000, 30000, 32500, 35000, 37500, 40000, 42500, 45000, 47500, 50000,
	52500, 55000, 57500, 60000, 62500, 65000, 67500, 70000, 72500, 75000,
	 77500,  //0x62,  0x63,  0x64,  0x65,  0x66,  0x67,  0x68,  0x69,  0x70,
//	 0x71,  0x72,  0x73,  0x74,  0x75,  0x76,  0x77,  0x78,  0x79,  0x80,
//	 0x81,  0x82,  0x83,  0x84,  0x85,  0x86,  0x87,  0x88,  0x89,  0x90,
//	 0x91,  0x92,  0x93,  0x94,  0x95,  0x96,  0x97,  0x98,  0x99,  0x100
]

const currencies = [
	"CritterFeather",
	"BeastFeather",
	"FlyingFeather",
	"WaterDust",
	"EarthDust",
	"WindDust",
	"FireDust",
	"Medal",
	"Amber",
	"Experience",
]

function start() {
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
			.val(localStorageGetItem(pet[0] + "Bond", 0));
		input0.change(onChangePetBond);
		td0.append(input0);
		let td1 = $("<td></td>").attr("id", "out" + pet[0] + "Medals")
			.text("NaN").addClass("Medal");
		let td2 = $("<td></td>").attr("id", "out" + pet[0] + "Time").text("NaN");
		let td3 = $("<td></td>").attr("id", "out" + pet[0] + "MedalsSpent")
			.text("NaN").addClass("Medal");
		let td4 = $("<td></td>");
		let input1 = $("<input></input>").attr("type", "number")
			.attr("min", 0).attr("max", 12)
			.attr("id", "in" + pet[0] + "Stars")
			.attr("name", "in" + pet[0] + "Stars")
			.val(localStorageGetItem(pet[0] + "Stars", 0));
		input1.change(onChangePetStars);
		td4.append(input1);
		let td5 = $("<td></td>").attr("id", "out" + pet[0] + "Feathers")
			.text("NaN").addClass("Feather");
		tr.append(th).append(td0).append(td1).append(td2).append(td3).append(td4).append(td5);
		petTable.append(tr);
	});
	let totalPet = $("<tr class='header'><th>Total:</th><td id='outTotalBond'>NaN</td><td id='outTotalMedals'>NaN</td><td id='outTotalTime'>NaN</td></td><td id='outTotalMedalsSpent'>NaN</td><td id='outTotalPetStars'>NaN</td><td id='outTotalFeathers'>NaN</td></tr>");
	let hidePetInput = $("<input></input>").attr("type", "checkbox").attr("id", "hidePetCheckbox")
		.change(hidePet).prop("checked", localStorageGetItem("HidePet", 'false') == 'true').change();
	let hidePetInputLabel = $("<label>").attr("for", "hidePetCheckbox").text("Hide non-obtained pets");
	let tdFp = $("<td colspan='5' style='text-align: left;'></td>");
	tdFp.append(hidePetInput).append(hidePetInputLabel)
	petTable.append(totalPet).append(tdFp);

	let heroTable = $("#heroTable");
	heroList.forEach(hero => {
		let tr = $("<tr></tr>").addClass(hero[1]);
		let th = $("<th></th>").addClass(hero[2]).addClass(hero[3]);
		let label = $("<label></label>").attr("for", "in" + hero[0] + "Stars")
			.text(hero[0]);
		th.append(label);
		let td0 = $("<td></td>");
		let input0 = $("<input></input>").attr("type", "number")
			.attr("min", 0).attr("max", 12)
			.attr("id", "in" + hero[0] + "Stars")
			.attr("name", "in" + hero[0] + "Stars")
			.val(localStorageGetItem(hero[0] + "Stars", 0));
		input0.change(onChangeHeroStars);
		td0.append(input0);
		let td1 = $("<td></td>").attr("id", "out" + hero[0] + "Dust")
			.text("NaN").addClass(hero[2]).addClass("Dust");
		let td2 = $("<td></td>");
		let input1 = $("<input></input>").attr("type", "number")
			.attr("min", 0).attr("max", 100)
			.attr("id", "in" + hero[0] + "Level")
			.attr("name", "in" + hero[0] + "Level")
			.val(localStorageGetItem(hero[0] + "Level", 0));
		input1.change(onChangeHeroLevels);
		td2.append(input1);
		let td3 = $("<td></td>").attr("id", "out" + hero[0] + "ExperienceNeeded")
			.text("NaN").addClass("Experience");
		tr.append(th).append(td0).append(td1).append(td2).append(td3);
		heroTable.append(tr);
	});
	let totalHero = $("<tr class='header'><th>Total:</th><td id='outTotalHeroStars'>NaN</td><td id='outTotalDust'>NaN</td><td id='outTotalHeroLevels'>NaN</td><td id='outTotalHeroExperienceNeeded'>NaN</td></tr>");
	let hideHeroInput = $("<input></input>").attr("type", "checkbox").attr("id", "hideHeroCheckbox")
		.change(hideHero).prop("checked", localStorageGetItem("HideHero", 'false') == 'true').change();
	let hideHeroInputLabel = $("<label>").attr("for", "hideHeroCheckbox").text("Hide non-obtained heroes");
	let tdFh = $("<td colspan='5' style='text-align: left;'></td>");
	tdFh.append(hideHeroInput).append(hideHeroInputLabel);
	heroTable.append(totalHero).append(tdFh);

	let equipmentTable = $("#equipmentTable");
	Object.keys(lookUpEquipments).forEach(item => {
		let tr = $("<tr></tr>").addClass("Equipment");
		let th = $("<th></th>");
		let label = $("<label></label>").attr("for", "in" + item)
			.text(item);
		th.append(label);
		let td0 = $("<td></td>");
		let input = $("<input></input>").attr("type", "number")
			.attr("min", 0).attr("max", lookUpEquipments[item][25][1])
			.attr("step", lookUpEquipments[item][2][1] - lookUpEquipments[item][1][1])
			.attr("id", "in" + item)
			.attr("name", "in" + item)
			.val(localStorageGetItem(item + "Bonus", 0));
		input.change(onChangeEquipmentBonus);
		td0.append(input);
		let td1 = $("<td></td>").attr("id", "out" + item + "Level").text("NaN");
		let td2 = $("<td></td>").attr("id", "out" + item + "Cost").text("NaN").addClass("Amber");
		let td3 = $("<td></td>").attr("id", "out" + item + "Amber").text("NaN").addClass("Amber");
		let td4 = $("<td></td>").attr("id", "out" + item + "AmberSpent").text("NaN").addClass("Amber");
		tr.append(th).append(td0).append(td1).append(td2).append(td3).append(td4);
		equipmentTable.append(tr);
	});
	let totalEquipment = $("<tr class='header'><th>Total:</th><td colspan='3'></td><td id='outTotalAmber'>NaN</td><td id='outTotalAmberSpent'>NaN</td></tr>");
	equipmentTable.append(totalEquipment);
	currencies.forEach(currency => {
			$("#storage" + currency).val(localStorageGetItem("storage" + currency, 0));
		}
	)

	let tintTable = $("#tintTable");
	tintList.forEach(tint => {
		let tr = $("<tr></tr>").addClass(tint[1]);
		let th = $("<th></th>");
		let label = $("<label></label>").text(tint[0]);
		th.append(label);
		let td0 = $("<td></td>");
		if(tint[2]){
			let input0 = $("<input></input>").attr("type", "number")
				.attr("min", 0).attr("max", 10000000)
				.attr("id", "in" + tint[0] + "TintEnemies")
				.attr("name", "in" + tint[0] + "TintEnemies")
				.val(localStorageGetItem(tint[0] + "TintEnemies", 0));
			input0.change(onChangeTint);
			 td0.append(input0);
		}
		let td1 = $("<td></td>");
		if(tint[3]){
			let input1 = $("<input></input>").attr("type", "number")
				.attr("min", 0).attr("max", 150)
				.attr("id", "in" + tint[0] + "TintChallenges")
				.attr("name", "in" + tint[0] + "TintChallenges")
				.val(localStorageGetItem(tint[0] + "TintChallenges", 0));
			input1.change(onChangeTint);
			td1.append(input1);
		}
		let td2 = $("<td></td>");
		if(tint[4]){
			let input2 = $("<input></input>").attr("type", "number")
				.attr("min", 0).attr("max", 15000)
				.attr("id", "in" + tint[0] + "TintAmber")
				.attr("name", "in" + tint[0] + "TintAmber")
				.val(localStorageGetItem(tint[0] + "TintAmber", 0));
			input2.change(onChangeTint);
			td2.append(input2);
		}
		tr.append(th).append(td0).append(td1).append(td2);
		tintTable.append(tr);
	});
	let totalTint = $("<tr class='header'><th>Total missing:</th><td id='outTotalTintEnemies'>NaN</td><td id='outTotalTintChallenges'>NaN</td><td id='outTotalTintAmber'>NaN</td></tr>");
	let hideTintInput = $("<input></input>").attr("type", "checkbox").attr("id", "hideTintCheckbox")
		.change(hideTint).prop("checked", localStorageGetItem("HideTint", 'false') == 'true').change();
	let hideTintInputLabel = $("<label>").attr("for", "hideTintCheckbox").text("Hide completed tints");
	let tdFt = $("<td colspan='5' style='text-align: left;'></td>");
	tdFt.append(hideTintInput).append(hideTintInputLabel)
	tintTable.append(totalTint).append(tdFt);

	$("#PetBondCap").val(localStorageGetItem("PetBondCap", 15));
	$("#PetStarCap").val(localStorageGetItem("PetStarCap", 12));
	$("#HeroStarCap").val(localStorageGetItem("HeroStarCap", 12));
	$("#HeroLevelCap").val(localStorageGetItem("HeroLevelCap", 60));

  $("#tintTable .header").first().children().eq(1).text((10000000).toLocaleString() + " Enemies");
    $("#tintTable .header").first().children().eq(3).text((15000).toLocaleString() + " Amber");
	onChangePetBond();
	onChangePetStars();
	onChangeEquipmentBonus();
	onChangeHeroStars();
	onChangeHeroLevels();
	onChangeTint();
	petTab();
	if (localStorageGetItem("noFunMode", 'false') == 'true') {
		$("#noFunButton").click(funMode);
		noFunMode();
	} else {
		$("#noFunButton").click(noFunMode);
	}
}

function onChangePetBond(event) {
	localStorage.setItem("PetBondCap", $("#PetBondCap").val());
	let bondTotal = 0;
	let medalsTotal = 0;
	let timeTotal = 0;
	let medalsSpentTotal = 0;
	petList.forEach(pet => {
		localStorage.setItem(pet[0] + "Bond", $("#in" + pet[0] + "Bond").val());
		if ($("#in" + pet[0] + "Bond").is(":visible")){
			bondTotal += Number($("#in" + pet[0] + "Bond").val());
			let medalResult = calcMedals($("#in" + pet[0] + "Bond").val());
			$("#out" + pet[0] + "Medals").text(medalResult);
			medalsTotal += medalResult;
			let timeResult = calcTime($("#in" + pet[0] + "Bond").val());
			$("#out" + pet[0] + "Time").text(formatTime(timeResult));
			$("#out" + pet[0] + "Time").attr("title", "About " + Math.ceil(timeResult / 86400) + " days");
			timeTotal += timeResult;
			let medalsSpentResult = calcMedalsSpent($("#in" + pet[0] + "Bond").val());
			$("#out" + pet[0] + "MedalsSpent").text(medalsSpentResult);
			medalsSpentTotal += medalsSpentResult;
		}
	});
	$("#outTotalBond").text(bondTotal);
	$("#outTotalMedals").text(medalsTotal.toLocaleString());
	$("#outTotalTime").text(formatTime(timeTotal));
	let timeInDays = Math.ceil(timeTotal / 86400);
	if (timeInDays >= 365){
		let timeInYears = Math.ceil(timeInDays / 365);
		$("#outTotalTime").attr("title", "About " + timeInYears + "y " + (timeInDays%365) + "d in 1 slot");
	} else{
		$("#outTotalTime").attr("title", "About " + timeInDays + "d in 1 slot");
	}
	$("#outTotalMedalsSpent").text(medalsSpentTotal.toLocaleString());
}

function onChangePetStars(event) {
	localStorage.setItem("PetStarCap", $("#PetStarCap").val());
	$("#PetStarCap").removeClass().addClass("S" + $("#PetStarCap").val());
	let starsTotal = 0;
	let feathers = {};
	feathers["Total"] = 0;
	petList.forEach(pet => {
		feathers[pet[1]] = 0;
	});
	petList.forEach(pet => {
		if ($("#in" + pet[0] + "Stars").is(":visible")){
			localStorage.setItem(pet[0] + "Stars", $("#in" + pet[0] + "Stars").val());
			starsTotal += Number($("#in" + pet[0] + "Stars").val());
			let feathersResult = calcFeathers($("#in" + pet[0] + "Stars").val());
			$("#out" + pet[0] + "Feathers").text(feathersResult.toLocaleString());
			feathers["Total"] += feathersResult;
			feathers[pet[1]] += feathersResult;
			$("#in" + pet[0] + "Stars").removeClass().addClass("S" + $("#in" + pet[0] + "Stars").val());
		}
	});
	$("#outTotalPetStars").text(starsTotal);
	$("#outTotalFeathers").text(feathers["Total"].toLocaleString());
	let title = "";
	Object.keys(feathers).forEach(kind => {
		title += kind + ": " + feathers[kind] + "\n"
	});
	$("#outTotalFeathers").attr("title", title);
}

function onChangeHeroStars(event) {
	localStorage.setItem("HeroStarCap", $("#HeroStarCap").val());
	$("#HeroStarCap").removeClass().addClass("S" + $("#HeroStarCap").val());
	let starsTotal = 0;
	let dust = {};
	dust["Total"] = 0;
	heroList.forEach(hero => {
		dust[hero[2]] = 0;
	});
	heroList.forEach(hero => {
		if ($("#in" + hero[0] + "Stars").is(":visible")){
			localStorage.setItem(hero[0] + "Stars", $("#in" + hero[0] + "Stars").val());
			starsTotal += Number($("#in" + hero[0] + "Stars").val());
			let dustResult = calcDust($("#in" + hero[0] + "Stars").val(), hero[1]);
			$("#out" + hero[0] + "Dust").text(dustResult.toLocaleString());
			dust["Total"] += dustResult;
			dust[hero[2]] += dustResult;
			$("#in" + hero[0] + "Stars").removeClass().addClass("S" + $("#in" + hero[0] + "Stars").val());
		}
	});
	$("#outTotalHeroStars").text(starsTotal);
	$("#outTotalDust").text(dust["Total"].toLocaleString());
	let title = "";
	Object.keys(dust).forEach(faction => {
		title += faction + ": " + dust[faction].toLocaleString() + "\n"
	});
	$("#outTotalDust").attr("title", title);
}

function onChangeHeroLevels(event) {
	localStorage.setItem("HeroLevelCap", $("#HeroLevelCap").val());
	let levelsTotal = 0;
	let experienceNeededTotal = 0;
	heroList.forEach(hero => {
		if ($("#in" + hero[0] + "Level").is(":visible")){
			localStorage.setItem(hero[0] + "Level", $("#in" + hero[0] + "Level").val());
			levelsTotal += Number($("#in" + hero[0] + "Level").val());
			let experienceNeeded = calcExperience($("#in" + hero[0] + "Level").val());
			$("#out" + hero[0] + "ExperienceNeeded").text(experienceNeeded.toLocaleString());
			experienceNeededTotal += experienceNeeded;
		}
	});
	$("#outTotalHeroLevels").text(levelsTotal);
	$("#outTotalHeroExperienceNeeded").text(experienceNeededTotal.toLocaleString());
}

function onChangeEquipmentBonus(event) {
	let lvlTotal = 0;
	let amberTotal = 0;
	let amberSpentTotal = 0;
	Object.keys(lookUpEquipments).forEach(item => {
		localStorage.setItem(item + "Bonus", $("#in" + item).val());
		let step = lookUpEquipments[item][2][1] - lookUpEquipments[item][1][1];
		let lvl = (Number($("#in" + item).val()) * 10) / (step * 10);
		lvlTotal += lvl;
		let cost = lookUpEquipments[item][lvl][0];
		let amber = calcAmber(item, lvl);
		let amberSpent = calcAmberSpent(item, lvl);
		amberTotal += amber;
		amberSpentTotal += amberSpent;
		$("#out" + item + "Level").text(lvl);
		$("#out" + item + "Cost").text(cost.toLocaleString());
		if (item == "Kote" && lvl > 16 && lvl <= 20) {
			$("#out" + item + "Cost").attr("title", "Placeholder value, contact me if you reach here to confirm actual cost");
			$("#out" + item + "Cost").attr("style", "color: #FF0000");
		} else {
			$("#out" + item + "Cost").attr("title", "");
			$("#out" + item + "Cost").attr("style", "");
		}
		$("#out" + item + "Amber").text(amber.toLocaleString());
		$("#out" + item + "AmberSpent").text(amberSpent.toLocaleString());
	});
	$("#outTotalAmber").text(amberTotal.toLocaleString());
	$("#outTotalAmberSpent").text(amberSpentTotal.toLocaleString());
	let lvlTotalWidth = (lvlTotal / (Object.keys(lookUpEquipments).length * 25)) * 100
	$("#equipmentBar div").attr("style", "width:" + lvlTotalWidth + "%;").text("+" + lvlTotal + "%");
}

function onChangeStorage(event) {
	currencies.forEach(currency => {
			localStorage.setItem("storage" + currency, $("#storage" + currency).val());
		}
	)
}

function onChangeTint(event) {
	let totalTintEnemies = 0;
	let totalTintChallenges = 0;
	let totalTintAmber = 0;
	tintList.forEach(tint => {
		if(tint[2]){
			localStorage.setItem(tint[0] + "TintEnemies", $("#in" + tint[0] + "TintEnemies").val());
			if($("#in" + tint[0] + "TintEnemies").val() == 10000000){
				$("#in" + tint[0] + "TintEnemies").parent().addClass("Complete");
			} else {
				$("#in" + tint[0] + "TintEnemies").parent().removeClass();
				totalTintEnemies += $("#in" + tint[0] + "TintEnemies").val() - 10000000;
			}
		}
		if(tint[3]){
			localStorage.setItem(tint[0] + "TintChallenges", $("#in" + tint[0] + "TintChallenges").val());
			if($("#in" + tint[0] + "TintChallenges").val() == 150){
				$("#in" + tint[0] + "TintChallenges").parent().addClass("Complete");
			} else {
				$("#in" + tint[0] + "TintChallenges").parent().removeClass();
				totalTintChallenges += $("#in" + tint[0] + "TintChallenges").val() - 150;
			}
		}
		if(tint[4]){
			localStorage.setItem(tint[0] + "TintAmber", $("#in" + tint[0] + "TintAmber").val());
			if($("#in" + tint[0] + "TintAmber").val() == 15000){
				$("#in" + tint[0] + "TintAmber").parent().addClass("Complete");
			} else {
				$("#in" + tint[0] + "TintAmber").parent().removeClass();
				totalTintAmber += $("#in" + tint[0] + "TintAmber").val() - 15000;
			}
		}
	})
	$("#outTotalTintEnemies").text((totalTintEnemies * -1).toLocaleString(undefined, {signDisplay: "negative"}));
	$("#outTotalTintChallenges").text((totalTintChallenges * -1).toLocaleString(undefined, {signDisplay: "negative"}));
	$("#outTotalTintAmber").text((totalTintAmber * -1).toLocaleString(undefined, {signDisplay: "negative"}));
}

function calcMedals(bond) {
	let result = 0;
	for (let s = Number(bond); s < $("#PetBondCap").val(); s++) {
		result += lookUpMedalsTimeFeathers[s][0];
	}
	return result;
}

function calcMedalsSpent(bond) {
	let result = 0;
	for (let s = 0; s < Number(bond); s++) {
		result += lookUpMedalsTimeFeathers[s][0];
	}
	return result;
}

function calcTime(bond) {
	let result = 0;
	for (let s = Number(bond); s < $("#PetBondCap").val(); s++) {
		result += lookUpMedalsTimeFeathers[s][1];
	}
	return result;
}

function calcFeathers(stars) {
	let result = 0;
	for (let s = Number(stars); s < $("#PetStarCap").val(); s++) {
		result += lookUpMedalsTimeFeathers[s][2];
	}
	return result;
}

function calcDust(stars, rarity) {
	let result = 0;
	let rarityIndex = 0;
	switch (rarity) {
		case "Rare": rarityIndex = 0; break;
		case "Epic": rarityIndex = 1; break;
		case "Legendary": rarityIndex = 2; break;
	}
	for (let s = Number(stars); s < $("#HeroStarCap").val(); s++) {
		result += lookUpDustRareEpicLegendary[s][rarityIndex];
	}
	return result;
}

function calcExperience(experience) {
	let result = 0;
	for (let s = Number(experience); s < $("#HeroLevelCap").val(); s++) {
		result += heroLevelUpExperienceCost[s];
	}
	return result;
}

function calcAmber(item, lvl) {
	let result = 0;
	for (let s = Number(lvl); s < lookUpEquipments[item].length; s++) {
		result += lookUpEquipments[item][s][0];
	}
	return result;
}

function calcAmberSpent(item, lvl) {
	let result = 0;
	for (let s = 0; s < Number(lvl); s++) {
		result += lookUpEquipments[item][s][0];
	}
	return result;
}

function localStorageGetItem(key, value) {
	if (localStorage.getItem(key) == null ||
		localStorage.getItem(key) == 'NaN' ||
		localStorage.getItem(key) == '' ||
		localStorage.getItem(key) == 'undefined' ||
		localStorage.getItem(key) == undefined)
		return value;
	return localStorage.getItem(key);
}

function formatTime(secs) {
	if (Number(secs) == 0) return "00h 00m 00s";
	var sec_num = parseInt(secs, 10);
	var hours = Math.floor(sec_num / 3600);
	var minutes = Math.floor(sec_num / 60) % 60;
	var seconds = sec_num % 60;

	result = [hours, minutes, seconds]
		.map(v => v < 10 ? "0" + v : v)
		.filter((v, i) => v !== "00" || i > 0);

	return result[0].toLocaleString() + "h " + result[1] + "m " + result[2] + "s";
}

function petTab() {
	$("#petTable").show();
	$("#heroTable").hide();
	$("#equipmentTable").hide();
	$("#storageTable").hide();
	$("#tintTable").hide();
	$("#petTabButton").addClass("selected");
	$("#heroTabButton").removeClass();
	$("#equipmentTabButton").removeClass();
	$("#storageTabButton").removeClass();
	$("#tintTabButton").removeClass();
}

function heroTab() {
	$("#petTable").hide();
	$("#heroTable").show();
	$("#equipmentTable").hide();
	$("#storageTable").hide();
	$("#tintTable").hide();
	$("#petTabButton").removeClass();
	$("#heroTabButton").addClass("selected");
	$("#equipmentTabButton").removeClass();
	$("#storageTabButton").removeClass();
	$("#tintTabButton").removeClass();
}

function equipmentTab() {
	$("#petTable").hide();
	$("#heroTable").hide();
	$("#equipmentTable").show();
	$("#storageTable").hide();
	$("#tintTable").hide();
	$("#petTabButton").removeClass();
	$("#heroTabButton").removeClass();
	$("#equipmentTabButton").addClass("selected");
	$("#storageTabButton").removeClass();
	$("#tintTabButton").removeClass();
}

function storageTab() {
	$("#petTable").hide();
	$("#heroTable").hide();
	$("#equipmentTable").hide();
	$("#storageTable").show();
	$("#tintTable").hide();
	$("#petTabButton").removeClass();
	$("#heroTabButton").removeClass();
	$("#equipmentTabButton").removeClass();
	$("#storageTabButton").addClass("selected");
	$("#tintTabButton").removeClass();
}

function tintTab() {
	$("#petTable").hide();
	$("#heroTable").hide();
	$("#equipmentTable").hide();
	$("#storageTable").hide();
	$("#tintTable").show();
	$("#petTabButton").removeClass();
	$("#heroTabButton").removeClass();
	$("#equipmentTabButton").removeClass();
	$("#storageTabButton").removeClass();
	$("#tintTabButton").addClass("selected");
}

function hidePet(event) {
	petList.forEach(pet => {
		if ($("#in" + pet[0] + "Stars").val() == 0) {
			localStorage.setItem("HidePet", event.target.checked);
			$("#in" + pet[0] + "Stars").parent().parent().toggle(!event.target.checked);
		}
	})
	onChangePetBond();
	onChangePetStars();
}

function hideHero(event) {
	heroList.forEach(hero => {
		if ($("#in" + hero[0] + "Stars").val() == 0) {
			localStorage.setItem("HideHero", event.target.checked);
			$("#in" + hero[0] + "Stars").parent().parent().toggle(!event.target.checked);
		}
	})
	onChangeHeroStars();
	onChangeHeroLevels();
}

function hideTint(event) {
	let checked = event.target.checked;
	tintList.forEach(tint => {
		let nonComplete = false;
		if(tint[2]){
			if(Number($("#in" + tint[0] + "TintEnemies").val()) != 10000000){
				nonComplete = true;
			}
		}
		if(tint[3]){
			if(Number($("#in" + tint[0] + "TintChallenges").val()) != 150){
				nonComplete = true;
			}
		}
		if(tint[4]){
			if(Number($("#in" + tint[0] + "TintAmber").val()) != 15000){
				nonComplete = true;
			}
		}
		$("#in" + tint[0] + "TintEnemies").parent().parent().toggle(!(!nonComplete && checked));
		$("#in" + tint[0] + "TintChallenges").parent().parent().toggle(!(!nonComplete && checked));
		$("#in" + tint[0] + "TintAmber").parent().parent().toggle(!(!nonComplete && checked));
	})
}

function noFunMode() {
	localStorage.setItem("noFunMode", 'true');
	$("tr:even").css("background-color", "#FFFFFF");
	$("tr:odd").css("background-color", "#AAAAAA");
	$("tr").css("color", "#000000");
	$("input").css("background-color", "inherit");
	$("input").css("color", "#000000");
	$("body").css("font-family", "Trebuchet MS black");
	$("#noFunButton").click(funMode);
}

function funMode() {
	localStorage.setItem("noFunMode", 'false');
	$("tr:even").attr("style", "");
	$("tr:odd").attr("style", "");
	$("tr").attr("style", "");
	$("input").attr("style", "");
	$("input").attr("style", "");
	$("body").attr("style", "");
	$("#noFunButton").click(noFunMode);
}

$(document).ready(start());
