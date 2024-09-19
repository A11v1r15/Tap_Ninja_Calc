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
//	Name           Parent        Enemy Challenge Amber
	["Bunny"     , "Bunny"      , true , false, false],
	["Mouse"     , "Mouse"      , false, true , false],
	["Capybara"  , "Mouse"      , true , false, false],
	["Hedgehog"  , "Hedgehog"   , false, false, true ],
	["Snake"     , "Snake"      , true , false, false],
	["Frog"      , "Frog"       , false, true , true ],
	["Squirrel"  , "Squirrel"   , false, false, true ],
	["Cat"       , "Cat"        , true , true , true ],
	["LilKitten" , "Cat"        , true , true , true ],
	["Dog"       , "Dog"        , true , false, true ],
	["LilDoggie" , "Dog"        , true , false, true ],
	["Wolf"      , "Dog"        , true , false, true ],
	["Fox"       , "Fox"        , false, false, true ],
	["LilFox"    , "Fox"        , false, false, true ],
	["Panda"     , "Panda"      , false, false, true ],
	["Turtle"    , "Turtle"     , true , true , false],
	["Racoon"    , "Racoon"     , false, true , false],
	["Chicken"   , "Chicken"    , false, true , false],
	["Duck"      , "Chicken"    , false, true , true ],
	["Crane"     , "Crane"      , false, false, true ],
	["Raven"     , "Raven"      , false, true , false],
	["Dragonfly" , "Dragonfly"  , true , true , true ],
	["Dragonling", "Dragonling" , false, true , false],
	["LuckDragon", "Dragonling" , false, true , true ],
	["Parrot"    , "Parrot"     , true , false, false]
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
		[2782,  6.8],
		[2754,  7.2],
		[2779,  7.6],
		[3057,  8  ],
		[3026,  8.4],
		[2932,  8.8],
		[3167,  9.2],
		[3420,  9.6],
		[   0, 10  ]
	]
}

const heroLevelUpExperienceCost = [      0,
	   100,    150,    200,    250,    300,    350,    400,    450,    500,    600,
	   700,    800,    900,   1000,   1200,   1400,   1600,   1800,   2000,   2250,
	  2500,   2750,   3000,   3500,   4000,   4500,   5000,   6000,   7000,   8000,
	  9000,  10000,  12000,  14000,  16000,  18000,  20000,  22000,  24000,  26000,
	 28000,  30000,  32500,  35000,  37500,  40000,  42500,  45000,  47500,  50000,
	 52500,  55000,  57500,  60000,  62500,  65000,  67500,  70000,  72500,  75000,
	 77500,  80000,  82500,  85000,  87500,  90000,  92500,  95000,  97500, 100000,
	105000, 110000, 115000, 120000, 125000, 130000, 135000, 140000, 145000, 150000,
	160000, 170000, 180000, 190000, 200000, 210000, 220000, 230000, 240000, 260000,
	280000, 300000, 320000, 340000, 360000, 380000, 400000, 450000, 500000,  0x100,
	 0x101,  0x102,  0x103,  0x104,  0x105,  0x106,  0x107,  0x108,  0x109,  0x110,
	 0x111,  0x112,  0x113,  0x114,  0x115,  0x116,  0x117,  0x118,  0x119,  0x120
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
	let petTable = $("<tbody></tbody>");
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
		let td5 = $("<td colspan='3'></td>").attr("id", "out" + pet[0] + "Feathers")
			.text("NaN").addClass("Feather");
		tr.append(th).append(td0).append(td1).append(td2).append(td3).append(td4).append(td5);
		petTable.append(tr);
	});
	let totalPet = $("<tr class='header'><th>Total:</th><td id='outTotalBond'>NaN</td><td id='outTotalMedals'>NaN</td><td id='outTotalTime'>NaN</td></td><td id='outTotalMedalsSpent'>NaN</td><td id='outTotalPetStars'>NaN</td><td id='outCritterFeathers' class='Critter Feather'>NaN</td><td id='outBeastFeathers' class='Beast Feather'>NaN</td><td id='outFlyingFeathers' class='Flying Feather'>NaN</td></tr>");
	let hidePetInput = $("<input></input>").attr("type", "checkbox").attr("id", "hidePetCheckbox")
		.change(hidePet);
	let hidePetInputLabel = $("<label>").attr("for", "hidePetCheckbox").text("Hide non-obtained pets");
	let tdFp = $("<td colspan='5' style='text-align: left;'></td>");
	tdFp.append(hidePetInput).append(hidePetInputLabel)
	petTable.append(totalPet).append(tdFp);
	$("#petTable").append(petTable);

	let heroTable = $("<tbody></tbody>");
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
		let td1 = $("<td colspan='2'></td>").attr("id", "out" + hero[0] + "Dust")
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
		let td4 = $("<td></td>").attr("id", "out" + hero[0] + "ExperienceCumulated")
			.text("NaN").addClass("Experience");
		tr.append(th).append(td0).append(td1).append(td2).append(td3).append(td4);
		heroTable.append(tr);
	});
	let totalHero = $("<tr class='header'><th rowspan='2'>Total:</th><td id='outTotalHeroStars' rowspan='2'>NaN</td><td id='outFireDust' class='Fire Dust'>NaN</td><td id='outWindDust' class='Wind Dust'>NaN</td><td id='outTotalHeroLevels' rowspan='2'>NaN</td><td id='outTotalHeroExperienceNeeded' rowspan='2'>NaN</td><td id='outTotalHeroExperienceCumulated' rowspan='2'>NaN</td></tr><tr><td id='outWaterDust' class='Water Dust'>NaN</td><td id='outEarthDust' class='Earth Dust'>NaN</td></tr>");
	let hideHeroInput = $("<input></input>").attr("type", "checkbox").attr("id", "hideHeroCheckbox")
		.change(hideHero);
	let hideHeroInputLabel = $("<label>").attr("for", "hideHeroCheckbox").text("Hide non-obtained heroes");
	let tdFh = $("<td colspan='5' style='text-align: left;'></td>");
	tdFh.append(hideHeroInput).append(hideHeroInputLabel);
	heroTable.append(totalHero).append(tdFh);
	$("#heroTable").append(heroTable);

	let equipmentTable = $("#equipmentTable tbody");
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
	})

	let tintTable = $("<tbody></tbody>");
	tintList.forEach(tint => {
		let tr = $("<tr></tr>").addClass(getPetClass(tint[1]));
		let th = $("<th></th>");
		let label = $("<label></label>").text(tint[0]);
		th.append(label);
		let td0 = $("<td></td>");
		if (tint[2]) {
			let input0 = $("<input></input>").attr("type", "number")
				.attr("min", 0).attr("max", 10000000)
				.attr("id", "in" + tint[0] + "TintEnemies")
				.attr("name", "in" + tint[0] + "TintEnemies")
				.val(localStorageGetItem(tint[0] + "TintEnemies", 0));
			input0.change(onChangeTint);
			td0.append(input0);
		}
		let td1 = $("<td></td>");
		if (tint[3]) {
			let input1 = $("<input></input>").attr("type", "number")
				.attr("min", 0).attr("max", 150)
				.attr("id", "in" + tint[0] + "TintChallenges")
				.attr("name", "in" + tint[0] + "TintChallenges")
				.val(localStorageGetItem(tint[0] + "TintChallenges", 0));
			input1.change(onChangeTint);
			td1.append(input1);
		}
		let td2 = $("<td></td>");
		if (tint[4]) {
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
	let optimalTint = $("<tr class='header'><th>Optmized:</th><td id='outOptimalTintEnemies'>NaN</td><td id='outOptimalTintChallenges'>NaN</td><td id='outOptimalTintAmber'>NaN</td></tr>");
	let hideTintInput = $("<input></input>").attr("type", "checkbox").attr("id", "hideTintCheckbox")
		.change(hideTint);
	let hideTintInputLabel = $("<label>").attr("for", "hideTintCheckbox").text("Hide completed tints");
	let tdFt = $("<td colspan='5' style='text-align: left;'></td>");
	tdFt.append(hideTintInput).append(hideTintInputLabel)
	tintTable.append(totalTint).append(optimalTint).append(tdFt);
	$("#tintTable").append(tintTable);

	$("#tintTable .header").first().children().eq(1).text((10000000).toLocaleString() + " Enemies");
	$("#tintTable .header").first().children().eq(3).text((15000).toLocaleString() + " Amber");

	$("#PetBondCap")  .val(localStorageGetItem("PetBondCap", 15)).change();
	$("#PetStarCap")  .val(localStorageGetItem("PetStarCap", 12)).change();
	$("#HeroStarCap") .val(localStorageGetItem("HeroStarCap", 12)).change();
	$("#HeroLevelCap").val(localStorageGetItem("HeroLevelCap", 100)).change();
	hidePetInput .prop("checked", localStorageGetItem("HidePet",  'false') == 'true').change();
	hideHeroInput.prop("checked", localStorageGetItem("HideHero", 'false') == 'true').change();
	hideTintInput.prop("checked", localStorageGetItem("HideTint", 'false') == 'true').change();
	onChangeEquipmentBonus();
	onChangeTint();
	tab(localStorageGetItem("Tab", 'pet'));
	if (localStorageGetItem("noFunMode", 'false') == 'true') {
		$("#noFunButton").click(funMode);
		noFunMode();
	} else {
		$("#noFunButton").click(noFunMode);
	}
}

function onChangePetBond(event) {
	let bondTotal = 0;
	let medalsTotal = 0;
	let timeTotal = 0;
	let medalsSpentTotal = 0;
	let timeRanking = [];
	petList.forEach(pet => {
		localStorage.setItem(pet[0] + "Bond", $("#in" + pet[0] + "Bond").val());
		if ($("#in" + pet[0] + "Bond").is(":visible")) {
			bondTotal += Number($("#in" + pet[0] + "Bond").val());
			let medalResult = calcMedals($("#in" + pet[0] + "Bond").val());
			$("#out" + pet[0] + "Medals").text(medalResult);
			medalsTotal += medalResult;
			let timeResult = calcTime($("#in" + pet[0] + "Bond").val());
			$("#out" + pet[0] + "Time").text(formatTime(timeResult));
			$("#out" + pet[0] + "Time").attr("title", "About " + Math.ceil(timeResult / 86400) + " days");
			if ($("#in" + pet[0] + "Stars").val() == 0) {
				$("#out" + pet[0] + "Time").removeClass().addClass("Unobtained");
			} else if (timeResult != 0) {
				timeRanking.push([timeResult, pet[0]]);
			} else {
				$("#out" + pet[0] + "Time").removeClass().addClass("Complete");
			}
			let medalsSpentResult = calcMedalsSpent($("#in" + pet[0] + "Bond").val());
			$("#out" + pet[0] + "MedalsSpent").text(medalsSpentResult);
			medalsSpentTotal += medalsSpentResult;
		}
	});
	timeRanking.sort((a, b) => a[0] - b[0]);
	let x = 3;
	if (bondTotal < 90) {
		x = 2;
		timeRanking.sort((a, b) => b[0] - a[0]);
		if (bondTotal < 55) {
			x = 1;
		}
	}
	for (let i = 0; i < timeRanking.length; i += x) {
		timeTotal += timeRanking[i][0];
		if (x >= 1 && i + 0 < timeRanking.length) $("#out" + timeRanking[i + 0][1] + "Time").removeClass().addClass("Group" + ((i / x) < 9 ? ((i / x) + 1) : 0));
		if (x >= 2 && i + 1 < timeRanking.length) $("#out" + timeRanking[i + 1][1] + "Time").removeClass().addClass("Group" + ((i / x) < 9 ? ((i / x) + 1) : 0));
		if (x >= 3 && i + 2 < timeRanking.length) $("#out" + timeRanking[i + 2][1] + "Time").removeClass().addClass("Group" + ((i / x) < 9 ? ((i / x) + 1) : 0));
	}
	$("#outTotalBond").text(bondTotal);
	$("#outTotalMedals").text(medalsTotal.toLocaleString());
	$("#outTotalTime").text(formatTime(timeTotal));
	let timeInDays = Math.ceil(timeTotal / 86400);
	let timeInYears = Math.ceil(timeInDays / 365);
	let titleText = "Optimally about ";
	if (timeInDays >= 365) {
		titleText += timeInYears + "y " + (timeInDays % 365);
	} else {
		titleText += timeInDays;
	}
	if (bondTotal < 55) {
		titleText += "d with 1 slot";
	} else if (bondTotal < 90) {
		titleText += "d with 2 slots";
	} else {
		titleText += "d with 3 slots";
	}
	$("#outTotalTime").attr("title", titleText);
	$("#outTotalMedalsSpent").text(medalsSpentTotal.toLocaleString());
}

function onChangePetStars(event) {
	$("#PetStarCap").removeClass().addClass("S" + $("#PetStarCap").val());
	let starsTotal = 0;
	let feathers = {};
	petList.forEach(pet => {
		feathers[pet[1]] = 0;
	});
	petList.forEach(pet => {
		if ($("#in" + pet[0] + "Stars").is(":visible")) {
			localStorage.setItem(pet[0] + "Stars", $("#in" + pet[0] + "Stars").val());
			starsTotal += Number($("#in" + pet[0] + "Stars").val());
			let feathersResult = calcFeathers($("#in" + pet[0] + "Stars").val());
			$("#out" + pet[0] + "Feathers").text(feathersResult.toLocaleString());
			feathers[pet[1]] += feathersResult;
			$("#in" + pet[0] + "Stars").removeClass().addClass("S" + $("#in" + pet[0] + "Stars").val());
			if ($("#in" + pet[0] + "Stars").val() > 0 && $("#in" + pet[0] + "Bond").val() == 0)
				$("#in" + pet[0] + "Bond").val(1).change();
			if ($("#in" + pet[0] + "Stars").val() == 0)
				$("#in" + pet[0] + "Bond").val(0).change();
		}
	});
	$("#outTotalPetStars").text(starsTotal);
	Object.keys(feathers).forEach(kind => {
		$("#out" + kind + "Feathers").text(feathers[kind].toLocaleString());
	});
	onChangeTint(event);
}

function onChangeHeroStars(event) {
	$("#HeroStarCap").removeClass().addClass("S" + $("#HeroStarCap").val());
	let starsTotal = 0;
	let dust = {};
	heroList.forEach(hero => {
		dust[hero[2]] = 0;
	});
	heroList.forEach(hero => {
		if ($("#in" + hero[0] + "Stars").is(":visible")) {
			localStorage.setItem(hero[0] + "Stars", $("#in" + hero[0] + "Stars").val());
			starsTotal += Number($("#in" + hero[0] + "Stars").val());
			let dustResult = calcDust($("#in" + hero[0] + "Stars").val(), hero[1]);
			$("#out" + hero[0] + "Dust").text(dustResult.toLocaleString());
			dust["Total"] += dustResult;
			dust[hero[2]] += dustResult;
			$("#in" + hero[0] + "Stars").removeClass().addClass("S" + $("#in" + hero[0] + "Stars").val());
			if ($("#in" + hero[0] + "Stars").val() > 0 && $("#in" + hero[0] + "Level").val() == 0)
				$("#in" + hero[0] + "Level").val(1).change();
			if ($("#in" + hero[0] + "Stars").val() == 0)
				$("#in" + hero[0] + "Level").val(0).change();
		}
	});
	$("#outTotalHeroStars").text(starsTotal);
	Object.keys(dust).forEach(faction => {
		$("#out" + faction + "Dust").text(dust[faction].toLocaleString());
	});
}

function onChangeHeroLevels(event) {
	let levelsTotal = 0;
	let experienceNeededTotal = 0;
	let experienceCumulatedTotal = 0;
	heroList.forEach(hero => {
		if ($("#in" + hero[0] + "Level").is(":visible")) {
			localStorage.setItem(hero[0] + "Level", $("#in" + hero[0] + "Level").val());
			levelsTotal += Number($("#in" + hero[0] + "Level").val());
			let experienceNeeded = calcExperience($("#in" + hero[0] + "Level").val());
			$("#out" + hero[0] + "ExperienceNeeded").text(experienceNeeded.toLocaleString());
			experienceNeededTotal += experienceNeeded;
			let experienceCumulated = calcCumulatedExperience($("#in" + hero[0] + "Level").val());
			$("#out" + hero[0] + "ExperienceCumulated").text(experienceCumulated.toLocaleString());
			experienceCumulatedTotal += experienceCumulated;
		}
	});
	$("#outTotalHeroLevels").text(levelsTotal);
	$("#outTotalHeroExperienceNeeded").text(experienceNeededTotal.toLocaleString());
	$("#outTotalHeroExperienceCumulated").text(experienceCumulatedTotal.toLocaleString());
}

function onChangePetBondCap(event) {
	localStorage.setItem("PetBondCap", $("#PetBondCap").val());
	onChangePetBond(event);
}

function onChangePetStarCap(event) {
	localStorage.setItem("PetStarCap", $("#PetStarCap").val());
	onChangePetStars(event);
}

function onChangeHeroStarCap(event) {
	localStorage.setItem("HeroStarCap", $("#HeroStarCap").val());
	onChangeHeroStars(event);
}

function onChangeHeroLevelCap(event) {
	localStorage.setItem("HeroLevelCap", $("#HeroLevelCap").val());
	onChangeHeroLevels(event);
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
	})
}

function onChangeTint(event) {
	let totalTintEnemies = 0;
	let totalTintChallenges = 0;
	let totalTintAmber = 0;
	let rankingEnemies = [];
	let rankingChallenges = [];
	let rankingAmber = [];
	tintList.forEach(tint => {
		if (tint[2]) {
			localStorage.setItem(tint[0] + "TintEnemies", $("#in" + tint[0] + "TintEnemies").val());
			if ($("#in" + tint[1] + "Stars").val() == 0) {
				$("#in" + tint[0] + "TintEnemies").parent().removeClass().addClass("Unobtained");
			} else if ($("#in" + tint[0] + "TintEnemies").val() == 10000000) {
				$("#in" + tint[0] + "TintEnemies").parent().removeClass().addClass("Complete");
				$("#hideTintCheckbox").prop("checked", localStorageGetItem("HideTint", 'false') == 'true').change();
			} else {
				$("#in" + tint[0] + "TintEnemies").parent().removeClass();
				totalTintEnemies += $("#in" + tint[0] + "TintEnemies").val() - 10000000;
				rankingEnemies.push([$("#in" + tint[0] + "TintEnemies").val() - 10000000, tint[0]]);
			}
		}
		if (tint[3]) {
			localStorage.setItem(tint[0] + "TintChallenges", $("#in" + tint[0] + "TintChallenges").val());
			if ($("#in" + tint[1] + "Stars").val() == 0) {
				$("#in" + tint[0] + "TintChallenges").parent().removeClass().addClass("Unobtained");
			} else if ($("#in" + tint[0] + "TintChallenges").val() == 150) {
				$("#in" + tint[0] + "TintChallenges").parent().removeClass().addClass("Complete");
				$("#hideTintCheckbox").prop("checked", localStorageGetItem("HideTint", 'false') == 'true').change();
			} else {
				$("#in" + tint[0] + "TintChallenges").parent().removeClass();
				totalTintChallenges += $("#in" + tint[0] + "TintChallenges").val() - 150;
				rankingChallenges.push([$("#in" + tint[0] + "TintChallenges").val() - 150, tint[0]]);
			}
		}
		if (tint[4]) {
			localStorage.setItem(tint[0] + "TintAmber", $("#in" + tint[0] + "TintAmber").val());
			if ($("#in" + tint[1] + "Stars").val() == 0) {
				$("#in" + tint[0] + "TintAmber").parent().removeClass().addClass("Unobtained");
			} else if ($("#in" + tint[0] + "TintAmber").val() == 15000) {
				$("#in" + tint[0] + "TintAmber").parent().removeClass().addClass("Complete");
				$("#hideTintCheckbox").prop("checked", localStorageGetItem("HideTint", 'false') == 'true').change();
			} else {
				$("#in" + tint[0] + "TintAmber").parent().removeClass();
				totalTintAmber += $("#in" + tint[0] + "TintAmber").val() - 15000;
				rankingAmber.push([$("#in" + tint[0] + "TintAmber").val() - 15000, tint[0]]);
			}
		}
	})
	rankingEnemies   .sort((a, b) => a[0] - b[0]);
	rankingChallenges.sort((a, b) => a[0] - b[0]);
	rankingAmber     .sort((a, b) => a[0] - b[0]);
	let optimalTintEnemies = 0;
	let optimalTintChallenges = 0;
	let optimalTintAmber = 0;
	for (let i = 0; i < rankingEnemies.length; i += 3) {
		optimalTintEnemies += rankingEnemies[i][0];
		if (i + 0 < rankingEnemies.length) $("#in" + rankingEnemies[i + 0][1] + "TintEnemies").parent().removeClass().addClass("Group" + ((i / 3) + 1));
		if (i + 1 < rankingEnemies.length) $("#in" + rankingEnemies[i + 1][1] + "TintEnemies").parent().removeClass().addClass("Group" + ((i / 3) + 1));
		if (i + 2 < rankingEnemies.length) $("#in" + rankingEnemies[i + 2][1] + "TintEnemies").parent().removeClass().addClass("Group" + ((i / 3) + 1));
	}
	for (let i = 0; i < rankingChallenges.length; i += 3) {
		optimalTintChallenges += rankingChallenges[i][0];
		if (i + 0 < rankingChallenges.length) $("#in" + rankingChallenges[i + 0][1] + "TintChallenges").parent().removeClass().addClass("Group" + ((i / 3) + 1));
		if (i + 1 < rankingChallenges.length) $("#in" + rankingChallenges[i + 1][1] + "TintChallenges").parent().removeClass().addClass("Group" + ((i / 3) + 1));
		if (i + 2 < rankingChallenges.length) $("#in" + rankingChallenges[i + 2][1] + "TintChallenges").parent().removeClass().addClass("Group" + ((i / 3) + 1));
	}
	for (let i = 0; i < rankingAmber.length; i += 3) {
		optimalTintAmber += rankingAmber[i][0];
		if (i + 0 < rankingAmber.length) $("#in" + rankingAmber[i + 0][1] + "TintAmber").parent().removeClass().addClass("Group" + ((i / 3) + 1));
		if (i + 1 < rankingAmber.length) $("#in" + rankingAmber[i + 1][1] + "TintAmber").parent().removeClass().addClass("Group" + ((i / 3) + 1));
		if (i + 2 < rankingAmber.length) $("#in" + rankingAmber[i + 2][1] + "TintAmber").parent().removeClass().addClass("Group" + ((i / 3) + 1));
	}
	$("#outTotalTintEnemies")     .text((totalTintEnemies      * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outTotalTintChallenges")  .text((totalTintChallenges   * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outTotalTintAmber")       .text((totalTintAmber        * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outOptimalTintEnemies")   .text((optimalTintEnemies    * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outOptimalTintChallenges").text((optimalTintChallenges * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outOptimalTintAmber")     .text((optimalTintAmber      * -1).toLocaleString(undefined, { signDisplay: "negative" }));
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

function calcExperience(level) {
	let result = 0;
	for (let s = Number(level); s < $("#HeroLevelCap").val(); s++) {
		result += heroLevelUpExperienceCost[s];
	}
	return result;
}

function calcCumulatedExperience(level) {
	let result = 0;
	for (let s = 0; s < Number(level); s++) {
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
    const storage = localStorage.getItem(key);
	if (storage == null ||
		storage == 'NaN' ||
		storage == '' ||
		storage == 'undefined' ||
		storage == undefined) {
		console.log("Getting default value for " + key);
		return value;
	}
	return storage;
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

function getPetClass(test) {
	let result = "";
	petList.forEach(pet => {
		if (pet[0] == test) result = pet[1];
	});
	return result;
}

function tab(id){
	localStorage.setItem("Tab", id);
    const ids = ['pet', 'hero', 'equipment', 'storage', 'tint'];
    
    ids.forEach(test => {
        if (test === id) {
            $("#" + id + "Table").show();
            $("#" + id + "TabButton").addClass("selected");
        } else {
            $("#" + test + "Table").hide();
            $("#" + test + "TabButton").removeClass("selected");
        }
    });
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
	localStorage.setItem("HideTint", checked);
	tintList.forEach(tint => {
		let nonComplete = false;
		if (tint[2]) {
			if (Number($("#in" + tint[0] + "TintEnemies").val()) != 10000000) {
				nonComplete = true;
			}
		}
		if (tint[3]) {
			if (Number($("#in" + tint[0] + "TintChallenges").val()) != 150) {
				nonComplete = true;
			}
		}
		if (tint[4]) {
			if (Number($("#in" + tint[0] + "TintAmber").val()) != 15000) {
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
	$("body").addClass("noFunMode");
	$("#noFunButton").off("click").on("click", funMode);
}

function funMode() {
	localStorage.setItem("noFunMode", 'false');
	$("body").removeClass("noFunMode");
	$("#noFunButton").off("click").on("click", noFunMode);
}

$(document).ready(start());