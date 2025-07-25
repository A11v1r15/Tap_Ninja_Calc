const petList = [
	["Frog"      , "Aquatic" ],//07
	["Turtle"    , "Aquatic" ],//13
	["Penguin"   , "Aquatic" ],//18
	["Crab"      , "Aquatic" ],//19
	["Otter"     , "Aquatic" ],//20
	["Bunny"     , "Critter" ],//00
	["Mouse"     , "Critter" ],//08
	["Hedgehog"  , "Critter" ],//11
	["Snake"     , "Critter" ],//12
	["Squirrel"  , "Critter" ],//15
	["Chicken"   , "Flying"  ],//02
	["Crane"     , "Flying"  ],//03
	["Raven"     , "Flying"  ],//04
	["Dragonfly" , "Flying"  ],//10
	["Dragonling", "Flying"  ],//14
	["Parrot"    , "Flying"  ],//17
	["Cat"       , "Beast"   ],//01
	["Dog"       , "Beast"   ],//05
	["Fox"       , "Beast"   ],//06
	["Panda"     , "Beast"   ],//09
	["Racoon"    , "Beast"   ],//16
];

const tintList = [
//	Name           Parent         Enemy  Challenge Amber Dungeon Enemy       Challenge   Amber       Dungeon
	["Frog"      , "Frog"       , 10000000 , 150 , 15000 ,   0 , "#ce180e" , "#c92312" , "#f8941d" , "#000000"],
	["Turtle"    , "Turtle"     , 10000000 , 150 , 15000 ,   0 , "#da372d" , "#1c4dff" , "#3b3b4d" , "#000000"],
	["Penguin"   , "Penguin"    , 10000000 , 150 ,     0 , 100 , "#6d4b39" , "#db721b" , "#000000" , "#7a9ccc"],
	["Crab"      , "Crab"       , 10000000 ,   0 , 15000 , 100 , "#ffad4c" , "#000000" , "#8244e5" , "#2d9de5"],
	["Otter"     , "Otter"      ,        0 , 150 , 15000 , 100 , "#000000" , "#494c54" , "#f2f0c1" , "#b28148"],
	["Bunny"     , "Bunny"      , 10000000 , 150 ,     0 , 100 , "#f187f9" , "#848699" , "#000000" , "#b29159"],
	["Mouse"     , "Mouse"      ,        0 , 150 , 15000 , 100 , "#000000" , "#cfd2dc" , "#b2b2b2" , "#694129"],
	["Hedgehog"  , "Hedgehog"   ,        0 , 150 , 15000 , 100 , "#000000" , "#f2d2c7" , "#2d9de5" , "#6d4b39"],
	["Snake"     , "Snake"      , 10000000 ,   0 , 15000 , 100 , "#8c094e" , "#000000" , "#f8941d" , "#64bd48"],
	["Squirrel"  , "Squirrel"   ,        0 , 150 , 15000 , 100 , "#000000" , "#494c54" , "#7f1ad2" , "#f0e1d6"],
	["Chicken"   , "Chicken"    ,        0 , 150 , 15000 , 100 , "#000000" , "#cc5210" , "#848699" , "#b29159"],
	["Crane"     , "Crane"      ,        0 , 150 , 15000 , 100 , "#000000" , "#b2b2b2" , "#e5d244" , "#ceb4aa"],
	["Raven"     , "Raven"      ,        0 , 150 , 15000 , 100 , "#000000" , "#6d4b39" , "#ceb4aa" , "#2b2b33"],
	["Dragonfly" , "Dragonfly"  , 10000000 , 150 , 15000 ,   0 , "#48b3ed" , "#7bcf3e" , "#bf2629" , "#000000"],
	["Dragonling", "Dragonling" ,        0 , 150 , 15000 , 100 , "#000000" , "#64bd48" , "#4d5966" , "#00aef0"],
	["Parrot"    , "Parrot"     , 10000000 ,   0 , 15000 , 100 , "#fbeed8" , "#000000" , "#4146e5" , "#ff9400"],
	["Cat"       , "Cat"        , 10000000 , 150 , 15000 ,   0 , "#494c54" , "#b3c0cf" , "#161616" , "#000000"],
	["Dog"       , "Dog"        , 10000000 , 150 , 15000 ,   0 , "#292930" , "#99342d" , "#ccaa51" , "#000000"],
	["Fox"       , "Fox"        , 10000000 ,   0 , 15000 , 100 , "#494c54" , "#000000" , "#e1dcd7" , "#f4cca1"],
	["Panda"     , "Panda"      , 10000000 , 150 , 15000 ,   0 , "#ac4200" , "#6d4b39" , "#fd90b7" , "#000000"],
	["Racoon"    , "Racoon"     , 10000000 , 150 , 15000 ,   0 , "#cc8d3c" , "#8e8e8e" , "#b75800" , "#000000"],
//	["LilOtter"  , "Otter"      , 17500000 , 250 , 25000 , 150 , "#000000" , "#000000" , "#000000" , "#000000"],
	["Capybara"  , "Mouse"      , 17500000 , 250 ,     0 , 150 , "#50504f" , "#99491e" , "#000000" , "#cc8d3c"],
	["Duck"      , "Chicken"    , 17500000 , 250 , 25000 , 150 , "#014039" , "#825235" , "#ffef7f" , "#2b2b33"],
	["LuckDragon", "Dragonling" ,        0 , 250 , 25000 , 150 , "#000000" , "#d164ff" , "#ffc61d" , "#3b3b4d"],
	["Peafowl"   , "Parrot"     , 17500000 ,   0 , 25000 , 150 , "#e5d244" , "#000000" , "#b259af" , "#e5e5e5"],
	["LilKitten" , "Cat"        , 17500000 , 250 , 25000 ,   0 , "#494c54" , "#b3c0cf" , "#161616" , "#000000"],
	["LilDoggie" , "Dog"        , 17500000 , 250 , 25000 ,   0 , "#292930" , "#99342d" , "#ccaa51" , "#000000"],
	["LilFox"    , "Fox"        , 17500000 ,   0 , 25000 , 150 , "#494c54" , "#000000" , "#e1dcd7" , "#f4cca1"],
//	["LilChick"  , "Chicken"    , 25000000 , 350 , 35000 , 200 , "#000000" , "#000000" , "#000000" , "#000000"],
	["Wolf"      , "Dog"        , 25000000 , 350 , 35000 ,   0 , "#b27623" , "#2b2b33" , "#dce7ea" , "#000000"],
];

const heroList = [
	["Fin"        , "Legendary" , "Water" , "Warrior"  , "The Scuba Knight"     ],//40
	["Kito"       , "Legendary" , "Water" , "Assassin" , "The Composed Outlaw"  ],//43
	["Tièr"       , "Legendary" , "Water" , "Mage"     , "The Gray Eminence"    ],//44
	["Falkron"    , "Legendary" , "Water" , "Support"  , "The Mystic Angler"    ],//47
	["Dia"        , "Legendary" , "Water" , "Assassin" , "The Rogue"            ],//56
	["Husk"       , "Legendary" , "Earth" , "Warrior"  , "The Immovable Object" ],//33
	["Alivia"     , "Legendary" , "Earth" , "Assassin" , "The Forests Daughter" ],//34
	["Wasp"       , "Legendary" , "Earth" , "Mage"     , "The Sweet Sting"      ],//36
	["Elyanna"    , "Legendary" , "Earth" , "Support"  , "The Natures Guardian" ],//39
	["Ulrik"      , "Legendary" , "Earth" , "Warrior"  , "The Beastmaster"      ],//55
	["Ekho"       , "Legendary" , "Earth" , "Support"  , "The Shaman"           ],//57
	["Hiro"       , "Legendary" , "Wind"  , "Warrior"  , "The Warrior of Honor" ],//25
	["Akira"      , "Legendary" , "Wind"  , "Assassin" , "The Grim Revenge"     ],//27
	["Scythe"     , "Legendary" , "Wind"  , "Mage"     , "The Harvester"        ],//29
	["Irbinok"    , "Legendary" , "Wind"  , "Support"  , "The Puzzled Enigma"   ],//31
	["Alekas"     , "Legendary" , "Wind"  , "Warrior"  , "The Archangel"        ],//52
	["Papyrus"    , "Legendary" , "Wind"  , "Support"  , "The Lore-Master"      ],//53
	["Scorn"      , "Legendary" , "Fire"  , "Warrior"  , "The Scorching Anger"  ],//16
	["Tomak"      , "Legendary" , "Fire"  , "Warrior"  , "The Lifter"           ],//17
	["Scarlet"    , "Legendary" , "Fire"  , "Assassin" , "The Burning Passion"  ],//18
	["Blazer"     , "Legendary" , "Fire"  , "Mage"     , "The Fire Breather"    ],//20
	["Maki"       , "Legendary" , "Fire"  , "Support"  , "The Master Chef"      ],//23
	["Xyzl"       , "Legendary" , "Fire"  , "Mage"     , "The Archdemon"        ],//54
//	["Uchigo"     , "Legendary" , ""      , ""         , "The Swift Blade"      ],//42
//	["Snow"       , "Legendary" , ""      , ""         , "The Tranquil Purity"  ],//46
//	["AmiRot"     , "Legendary" , ""      , ""         , "The Rotting Spirit"   ],//37
	["Demid"      , "Epic"      , "Water" , "Mage"     , "The Water Bender"     ],//14
	["Momo"       , "Epic"      , "Water" , "Support"  , "The Peach Warden"     ],//15
	["Locke"      , "Epic"      , "Water" , "Mage"     , "The Pirate"           ],//50
	["Terra"      , "Epic"      , "Earth" , "Mage"     , "The Earth Mover"      ],//12
	["Duncan"     , "Epic"      , "Earth" , "Warrior"  , "The Highlander"       ],//51
	["Kaoru"      , "Epic"      , "Wind"  , "Mage"     , "The Wind Weaver"      ],//10
	["Belu"       , "Epic"      , "Wind"  , "Warrior"  , "The Old Timer"        ],//11
	["Sayid"      , "Epic"      , "Wind"  , "Assassin" , "The Assassin"         ],//49
	["Ray"        , "Epic"      , "Fire"  , "Mage"     , "The Glimmer of Light" ],//08
	["Waju"       , "Rare"      , "Water" , "Assassin" , ""                     ],//06
	["Kenju"      , "Rare"      , "Water" , "Warrior"  , ""                     ],//07
	["Jie"        , "Rare"      , "Earth" , "Support"  , ""                     ],//05
	["Sketchy"    , "Rare"      , "Earth" , "Mage"     , ""                     ],//48
	["Ninja"      , "Rare"      , "Wind"  , "Assassin" , ""                     ],//00
	["Jari"       , "Rare"      , "Wind"  , "Warrior"  , ""                     ],//02
	["Fang"       , "Rare"      , "Fire"  , "Assassin" , ""                     ] //01
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
		[3126,  8.8],
		[3267,  9.2],
		[3420,  9.6],
		[   0, 10  ]
	],
	"Yubiwa" : [
		[ 500, 0 ],
		[ 625, 4 ],
		[ 750, 8 ],
		[ 875, 12],
		[1000, 16],
		[1125, 20],
		[1250, 24],
		[1375, 28],
		[1500, 32],
		[1625, 36],
		[1750, 40],
		[1875, 44],
		[2000, 48],
		[2125, 52],
		[2250, 56],
		[2375, 60],
		[2500, 64],
		[2625, 68],
		[2750, 72],
		[2875, 76],
		[3000, 80],
		[3125, 84],
		[3250, 88],
		[3375, 92],
		[3500, 96],
		[   0,100]
	]
}

const heroLevelUpExperienceCost = [  0,
	    100,     150,     200,     250,     300,     350,     400,     450,     500,     600,
	    700,     800,     900,    1000,    1200,    1400,    1600,    1800,    2000,    2250,
	   2500,    2750,    3000,    3500,    4000,    4500,    5000,    6000,    7000,    8000,
	   9000,   10000,   12000,   14000,   16000,   18000,   20000,   22000,   24000,   26000,
	  28000,   30000,   32500,   35000,   37500,   40000,   42500,   45000,   47500,   50000,
	  52500,   55000,   57500,   60000,   62500,   65000,   67500,   70000,   72500,   75000,
	  77500,   80000,   82500,   85000,   87500,   90000,   92500,   95000,   97500,  100000,
	 105000,  110000,  115000,  120000,  125000,  130000,  135000,  140000,  145000,  150000,
	 160000,  170000,  180000,  190000,  200000,  210000,  220000,  230000,  240000,  260000,
	 280000,  300000,  320000,  340000,  360000,  380000,  400000,  450000,  500000,  550000,
	 600000,  650000,  700000,  750000,  800000,  850000,  900000,  950000, 1000000, 1050000,
	1100000, 1150000, 1200000, 1250000, 1300000, 1350000, 1400000, 1450000, 1500000,   0x120
]

const currencies = [
	"AquaticFeather",
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
		let td00 = $("<td></td>");
		let fav = $("<a></a>")
			.text(localStorageGetItem(pet[0] + "Toggle", "☆"))
			.attr("id", pet[0] + "Toggle")
			.click(toggleFav);
		td00.append(fav);
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
		tr.append(td00).append(th).append(td0).append(td1).append(td2).append(td3).append(td4).append(td5);
		petTable.append(tr);
	});
	let totalPet = $("<tr class='header'><th rowspan='2' colspan='2'>Total:</th><td rowspan='2' id='outTotalBond'>NaN</td><td rowspan='2' id='outTotalMedals'>NaN</td><td rowspan='2' id='outTotalTime'>NaN</td></td><td rowspan='2' id='outTotalMedalsSpent'>NaN</td><td rowspan='2' id='outTotalPetStars'>NaN</td><td id='outAquaticFeathers' class='Aquatic Feather'>NaN</td><td id='outCritterFeathers' class='Critter Feather'>NaN</td></tr><tr><td id='outFlyingFeathers' class='Flying Feather'>NaN</td><td id='outBeastFeathers' class='Beast Feather'>NaN</td></tr>");
	let hidePetInput = $("<input></input>").attr("type", "checkbox").attr("id", "hidePetCheckbox").change(hidePet);
	let hidePetInputLabel = $("<label>").attr("for", "hidePetCheckbox").text("Hide non-obtained pets");
	let hidePetFavInput = $("<input></input>").attr("type", "checkbox").attr("id", "hidePetFavCheckbox").change(hidePetFav);
	let hidePetFavInputLabel = $("<label>").attr("for", "hidePetFavCheckbox").text("Hide ☆");
	let tdFp = $("<td colspan='5' style='text-align: left;'></td>");
	tdFp.append(hidePetInput).append(hidePetInputLabel).append(hidePetFavInput).append(hidePetFavInputLabel);
	let petStorage0 = $("<tr class='header'></tr>");
	let petStorage1 = $("<td colspan='10'></td>");
	let pstd = $("<td></td>");
	let usePetStorageInput = $("<input></input>").attr("type", "checkbox").attr("id", "usePetStorageCheckbox");
	let petLabelStorage = $("<label for='usePetStorageCheckbox'>Storage:</label>");
	pstd.append(usePetStorageInput).append(petLabelStorage);
	let pstd0 = $("<td class='Medal'><div class='Cell'><input type='number' min='0' max='9999999' id='storageMedal' onchange='onChangeStorage()' title='Medal'><div class='LocalizedLabel' id='labelStorageMedal'>NaN</div></div></td>");
	let pstd1 = $("<td class='Aquatic Feather'><div class='Cell'><input type='number' min='0' max='9999999' id='storageAquaticFeather' onchange='onChangeStorage()' title='Aquatic Feather'><div class='LocalizedLabel' id='labelStorageAquaticFeather'>NaN</div></div></td>");
	let pstd2 = $("<td class='Critter Feather'><div class='Cell'><input type='number' min='0' max='9999999' id='storageCritterFeather' onchange='onChangeStorage()' title='Critter Feather'><div class='LocalizedLabel' id='labelStorageCritterFeather'>NaN</div></div></td>");
	let pstd3 = $("<td class='Flying Feather'><div class='Cell'><input type='number' min='0' max='9999999' id='storageFlyingFeather' onchange='onChangeStorage()' title='Flying Feather'><div class='LocalizedLabel' id='labelStorageFlyingFeather'>NaN</div></div></td>");
	let pstd4 = $("<td class='Beast Feather'><div class='Cell'><input type='number' min='0' max='9999999' id='storageBeastFeather' onchange='onChangeStorage()' title='Beast Feather'><div class='LocalizedLabel' id='labelStorageBeastFeather'>NaN</div></div></td>");
	petStorage1.append(pstd).append(pstd0).append(pstd1).append(pstd2).append(pstd3).append(pstd4);
	petStorage0.append(petStorage1);
	petTable.append(totalPet).append(petStorage0).append(tdFp);
	$("#petTable").append(petTable);

	let heroTable = $("<tbody></tbody>");
	heroList.forEach(hero => {
		let tr = $("<tr></tr>").addClass(hero[1]);
		let td00 = $("<td></td>");
		let fav = $("<a></a>")
			.text(localStorageGetItem(hero[0] + "Toggle", "☆"))
			.attr("id", hero[0] + "Toggle")
			.click(toggleFav);
		td00.append(fav);
		let th = $("<th></th>").addClass(hero[2]).addClass(hero[3]);
		let label = $("<label></label>").attr("for", "in" + hero[0] + "Stars")
			.text(hero[0])
			.attr("title", hero[4]);
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
			.attr("min", 0).attr("max", 120)
			.attr("id", "in" + hero[0] + "Level")
			.attr("name", "in" + hero[0] + "Level")
			.val(localStorageGetItem(hero[0] + "Level", 0));
		input1.change(onChangeHeroLevels);
		td2.append(input1);
		let td3 = $("<td></td>").attr("id", "out" + hero[0] + "ExperienceNeeded")
			.text("NaN").addClass("Experience");
		let td4 = $("<td></td>").attr("id", "out" + hero[0] + "ExperienceCumulated")
			.text("NaN").addClass("Experience");
		tr.append(td00).append(th).append(td0).append(td1).append(td2).append(td3).append(td4);
		heroTable.append(tr);
	});
	let totalHero = $("<tr class='header'><th rowspan='2' colspan='2'>Total:</th><td id='outTotalHeroStars' rowspan='2'>NaN</td><td id='outWaterDust' class='Water Dust'>NaN</td><td id='outEarthDust' class='Earth Dust'>NaN</td><td id='outTotalHeroLevels' rowspan='2'>NaN</td><td id='outTotalHeroExperienceNeeded' rowspan='2'>NaN</td><td id='outTotalHeroExperienceCumulated' rowspan='2'>NaN</td></tr><tr><td id='outWindDust' class='Wind Dust'>NaN</td><td id='outFireDust' class='Fire Dust'>NaN</td></tr>");
	let hideHeroInput = $("<input></input>").attr("type", "checkbox").attr("id", "hideHeroCheckbox").change(hideHero);
	let hideHeroInputLabel = $("<label>").attr("for", "hideHeroCheckbox").text("Hide non-obtained heroes");
	let hideHeroFavInput = $("<input></input>").attr("type", "checkbox").attr("id", "hideHeroFavCheckbox").change(hideHeroFav);
	let hideHeroFavInputLabel = $("<label>").attr("for", "hideHeroFavCheckbox").text("Hide ☆");
	let tdFh = $("<td colspan='5' style='text-align: left;'></td>");
	tdFh.append(hideHeroInput).append(hideHeroInputLabel).append(hideHeroFavInput).append(hideHeroFavInputLabel);
	let heroStorage0 = $("<tr class='header'></tr>");
	let heroStorage1 = $("<td colspan='8'></td>");
	let hstd = $("<td></td>");
	let useHeroStorageInput = $("<input></input>").attr("type", "checkbox").attr("id", "useHeroStorageCheckbox");
	let heroLabelStorage = $("<label for='useHeroStorageCheckbox'>Storage:</label>");
	hstd.append(useHeroStorageInput).append(heroLabelStorage);
	let hstd0 = $("<td class='Water Dust'><div class='Cell'><input type='number' min='0' max='9999999' id='storageWaterDust' onchange='onChangeStorage()' title='Water Dust'><div class='LocalizedLabel' id='labelStorageWaterDust'>NaN</div></div></td>");
	let hstd1 = $("<td class='Earth Dust'><div class='Cell'><input type='number' min='0' max='9999999' id='storageEarthDust' onchange='onChangeStorage()' title='Earth Dust'><div class='LocalizedLabel' id='labelStorageEarthDust'>NaN</div></div></td>");
	let hstd2 = $("<td class='Wind Dust'><div class='Cell'><input type='number' min='0' max='9999999' id='storageWindDust' onchange='onChangeStorage()' title='Wind Dust'><div class='LocalizedLabel' id='labelStorageWindDust'>NaN</div></div></td>");
	let hstd3 = $("<td class='Fire Dust'><div class='Cell'><input type='number' min='0' max='9999999' id='storageFireDust' onchange='onChangeStorage()' title='Fire Dust'><div class='LocalizedLabel' id='labelStorageFireDust'>NaN</div></div></td>");
	let hstd4 = $("<td class='Experience'><div class='Cell'><input type='number' min='0' max='9999999' id='storageExperience' onchange='onChangeStorage()' title='Experience'><div class='LocalizedLabel' id='labelStorageExperience'>NaN</div></div></td>");
	heroStorage1.append(hstd).append(hstd0).append(hstd1).append(hstd2).append(hstd3).append(hstd4);
	heroStorage0.append(heroStorage1);
	heroTable.append(totalHero).append(heroStorage0).append(tdFh);
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
	let equipmentStorage0 = $("<tr class='header'></tr>");
	let equipmentStorage1 = $("<td colspan='6'></td>");
	let estd = $("<td></td>");
	let useEquipmentStorageInput = $("<input></input>").attr("type", "checkbox").attr("id", "useEquipmentStorageCheckbox");
	let equipmentLabelStorage = $("<label for='useEquipmentStorageCheckbox'>Storage:</label>");
	estd.append(useEquipmentStorageInput).append(equipmentLabelStorage);
	let estd0 = $("<td class='Amber'><div class='Cell'><input type='number' min='0' id='storageAmber' onchange='onChangeStorage()' title='Amber'><div class='LocalizedLabel' id='labelStorageAmber'>NaN</div></div></td>");
	equipmentStorage1.append(estd).append(estd0);
	equipmentStorage0.append(equipmentStorage1);
	equipmentTable.append(totalEquipment).append(equipmentStorage0);

	currencies.forEach(currency => {
		$("#storage" + currency).val(localStorageGetItem("storage" + currency, 0));
	})

	let tintTable = $("<tbody></tbody>");
	let header1 = $("<tr class='header'><th>Skin</th><th>17500000 Enemies</th><th>250 Challenges</th><th>25000 Amber</th><th>150 Dungeon</th></tr>");
	let header2 = $("<tr class='header'><th>Skin</th><th>25000000 Enemies</th><th>350 Challenges</th><th>35000 Amber</th><th>200 Dungeon</th></tr>");
	tintList.forEach(tint => {
		let tr = $("<tr></tr>").addClass(getPetClass(tint[1]));
		let th = $("<th></th>");
		let label = $("<label></label>").text(tint[0]);
		th.append(label);
		let td0 = $("<td></td>");
		if (tint[2] != 0) {
			let wrapper0 = $("<div></div>").addClass("Cell");
			let input0 = $("<input></input>").attr("type", "number")
				.attr("min", 0).attr("max", tint[2])
				.attr("id", "in" + tint[0] + "TintEnemies")
				.attr("name", "in" + tint[0] + "TintEnemies")
				.val(localStorageGetItem(tint[0] + "TintEnemies", 0));
			input0.change(onChangeTint);
			let label0 = $("<div></div>").addClass("LocalizedLabel TintEnemies")
				.attr("id", "label" + tint[0] + "TintEnemies")
				.text(Number(input0.val()).toLocaleString());
			wrapper0.append(input0).append(label0);
			td0.append(wrapper0);
		}
		td0.css("background", tint[6]);
		let td1 = $("<td></td>");
		if (tint[3] != 0) {
			let wrapper1 = $("<div></div>").addClass("Cell");
			let input1 = $("<input></input>").attr("type", "number")
				.attr("min", 0).attr("max", tint[3])
				.attr("id", "in" + tint[0] + "TintChallenges")
				.attr("name", "in" + tint[0] + "TintChallenges")
				.val(localStorageGetItem(tint[0] + "TintChallenges", 0));
			input1.change(onChangeTint);
			let label1 = $("<div></div>").addClass("LocalizedLabel TintChallenges")
				.attr("id", "label" + tint[0] + "TintChallenges")
				.text(Number(input1.val()).toLocaleString());
			wrapper1.append(input1).append(label1);
			td1.append(wrapper1);
		}
		td1.css("background", tint[7]);
		let td2 = $("<td></td>");
		if (tint[4] != 0) {
			let wrapper2 = $("<div></div>").addClass("Cell");
			let input2 = $("<input></input>").attr("type", "number")
				.attr("min", 0).attr("max", tint[4])
				.attr("id", "in" + tint[0] + "TintAmber")
				.attr("name", "in" + tint[0] + "TintAmber")
				.val(localStorageGetItem(tint[0] + "TintAmber", 0));
			input2.change(onChangeTint);
			let label2 = $("<div></div>").addClass("LocalizedLabel TintAmber")
				.attr("id", "label" + tint[0] + "TintAmber")
				.text(Number(input2.val()).toLocaleString());
			wrapper2.append(input2).append(label2);
			td2.append(wrapper2);
		}
		td2.css("background", tint[8]);
		let td3 = $("<td></td>");
		if (tint[5] != 0) {
			let wrapper3 = $("<div></div>").addClass("Cell");
			let input3 = $("<input></input>").attr("type", "number")
				.attr("min", 0).attr("max", tint[5])
				.attr("id", "in" + tint[0] + "TintDungeon")
				.attr("name", "in" + tint[0] + "TintDungeon")
				.val(localStorageGetItem(tint[0] + "TintDungeon", 0));
			input3.change(onChangeTint);
			let label3 = $("<div></div>").addClass("LocalizedLabel TintDungeon")
				.attr("id", "label" + tint[0] + "TintDungeon")
				.text(Number(input3.val()).toLocaleString());
			wrapper3.append(input3).append(label3);
			td3.append(wrapper3);
		}
		td3.css("background", tint[9]);
		tr.append(th).append(td0).append(td1).append(td2).append(td3);
		tintTable.append(tr);
		if (tintList.indexOf(tint) == 20)
			tintTable.append(header1);
		if (tintList.indexOf(tint) == 27)
			tintTable.append(header2);
	});
	let totalTint = $("<tr class='header'><th>Total missing:</th><td id='outTotalTintEnemies'>NaN</td><td id='outTotalTintChallenges'>NaN</td><td id='outTotalTintAmber'>NaN</td><td id='outTotalTintDungeon'>NaN</td></tr>");
	let optimalTint = $("<tr class='header'><th>Optmized:</th><td id='outOptimalTintEnemies'>NaN</td><td id='outOptimalTintChallenges'>NaN</td><td id='outOptimalTintAmber'>NaN</td><td id='outOptimalTintDungeon'>NaN</td></tr>");
	let hideTintInput = $("<input></input>").attr("type", "checkbox").attr("id", "hideTintCheckbox")
		.change(hideTint);
	let hideTintInputLabel = $("<label>").attr("for", "hideTintCheckbox").text("Hide completed tints");
	let hideUnobtainedTintInput = $("<input></input>").attr("type", "checkbox").attr("id", "hideUnobtainedTintCheckbox")
		.change(hideUnobtainedTint);
	let hideUnobtainedTintInputLabel = $("<label>").attr("for", "hideUnobtainedTintCheckbox").text("Hide non-obtained pets");
	let tdFt = $("<td colspan='5' style='text-align: left;'></td>");
	tdFt.append(hideTintInput).append(hideTintInputLabel).append(hideUnobtainedTintInput).append(hideUnobtainedTintInputLabel)
	tintTable.append(totalTint).append(optimalTint).append(tdFt);
	$("#tintTable").append(tintTable);

	$("#tintTable .header").eq(0).children().eq(1).text((10000000).toLocaleString() + " Enemies");
	$("#tintTable .header").eq(0).children().eq(3).text((15000).toLocaleString() + " Amber ");
	$("#tintTable .header").eq(1).children().eq(1).text((17500000).toLocaleString() + " Enemies");
	$("#tintTable .header").eq(1).children().eq(3).text((25000).toLocaleString() + " Amber ");
	$("#tintTable .header").eq(2).children().eq(1).text((25000000).toLocaleString() + " Enemies");
	$("#tintTable .header").eq(2).children().eq(3).text((35000).toLocaleString() + " Amber ");

	$("#PetBondCap")  .val(localStorageGetItem("PetBondCap", 15)).change();
	$("#PetStarCap")  .val(localStorageGetItem("PetStarCap", 12)).change();
	$("#HeroStarCap") .val(localStorageGetItem("HeroStarCap", 12)).change();
	$("#HeroLevelCap").val(localStorageGetItem("HeroLevelCap", 120)).change();
	hidePetInput .prop("checked", localStorageGetItem("HidePet",  'false') == 'true').change();
	hideHeroInput.prop("checked", localStorageGetItem("HideHero", 'false') == 'true').change();
	hideTintInput.prop("checked", localStorageGetItem("HideTint", 'false') == 'true').change();
	hideUnobtainedTintInput.prop("checked", localStorageGetItem("HideUnobtainedTint", 'false') == 'true').change();
	onChangeEquipmentBonus();
	onChangeTint();
	onChangeStorage();
	tab(localStorageGetItem("Tab", 'pet'));
	if (localStorageGetItem("noFunMode", 'false') == 'true') {
		$("#noFunButton").click(funMode);
		noFunMode();
	} else {
		$("#noFunButton").click(noFunMode);
	}
}

function toggleFav(event){
	if(event.target.text == "☆")
		event.target.text = "★"
	else
	if(event.target.text == "★")
		event.target.text = "☆"
	localStorage.setItem(event.target.id, event.target.text)
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
			if ($("#usePetStorageCheckbox").prop("checked")) {
				let deltaMedal = $("#out" + pet[0] + "MedalsSpent").text().replace(/\D/g, "") - medalsSpentResult;
				let storageMedalValue = parseInt($("#storageMedal").val(), 10) || 0;
				$("#storageMedal").val(storageMedalValue + deltaMedal);
				$("#storageMedal").trigger("change");
			}
			$("#out" + pet[0] + "MedalsSpent").text(medalsSpentResult);
			medalsSpentTotal += medalsSpentResult;
		}
	});
	timeRanking.sort((a, b) => a[0] - b[0]);
	let x = 3;
	if (bondTotal < 125) {
		x = 2;
		timeRanking.sort((a, b) => b[0] - a[0]);
		if (bondTotal < 60) {
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
	if (bondTotal < 60) {
		titleText += "d with 1 slot";
	} else if (bondTotal < 125) {
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
			if ($("#usePetStorageCheckbox").prop("checked")) {
				let deltaFeathers = $("#out" + pet[0] + "Feathers").text().replace(/\D/g, "") - feathersResult;
				let storageFeatherValue = parseInt($("#storage" + pet[1] + "Feather").val(), 10) || 0;
				$("#storage" + pet[1] + "Feather").val(storageFeatherValue - deltaFeathers);
				$("#storage" + pet[1] + "Feather").trigger("change");
			}
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
			if ($("#useHeroStorageCheckbox").prop("checked")) {
				let deltaDust = $("#out" + hero[0] + "Dust").text().replace(/\D/g, "") - dustResult;
				let storageDustValue = parseInt($("#storage" + hero[2] + "Dust").val(), 10) || 0;
				$("#storage" + hero[2] + "Dust").val(storageDustValue - deltaDust);
				$("#storage" + hero[2] + "Dust").trigger("change");
			}
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
			if ($("#useHeroStorageCheckbox").prop("checked")) {
				let deltaExperience = $("#out" + hero[0] + "ExperienceCumulated").text().replace(/\D/g, "") - experienceCumulated;
				let storageExperienceValue = parseInt($("#storageExperience").val(), 10) || 0;
				$("#storageExperience").val(storageExperienceValue + deltaExperience);
				$("#storageExperience").trigger("change");
			}
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
	$("#usePetStorageCheckbox").prop("checked", false);
	onChangePetBond(event);
}

function onChangePetStarCap(event) {
	localStorage.setItem("PetStarCap", $("#PetStarCap").val());
	$("#usePetStorageCheckbox").prop("checked", false);
	onChangePetStars(event);
}

function onChangeHeroStarCap(event) {
	localStorage.setItem("HeroStarCap", $("#HeroStarCap").val());
	$("#useHeroStorageCheckbox").prop("checked", false);
	onChangeHeroStars(event);
}

function onChangeHeroLevelCap(event) {
	localStorage.setItem("HeroLevelCap", $("#HeroLevelCap").val());
	$("#useHeroStorageCheckbox").prop("checked", false);
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
		if ($("#useEquipmentStorageCheckbox").prop("checked")) {
			let deltaAmber = $("#out" + item + "AmberSpent").text().replace(/\D/g, "") - amberSpent;
			let storageAmberValue = parseInt($("#storageAmber").val(), 10) || 0;
			$("#storageAmber").val(storageAmberValue + deltaAmber);
			$("#storageAmber").trigger("change");
		}
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
		$("#labelStorage" + currency).text(Number($("#storage" + currency).val()).toLocaleString());
	})
}

function onChangeTint(event) {
	let totalTintEnemies = 0;
	let totalTintChallenges = 0;
	let totalTintAmber = 0;
	let totalTintDungeon = 0;
	let rankingEnemies = [];
	let rankingChallenges = [];
	let rankingAmber = [];
	let rankingDungeon = [];
	tintList.forEach(skin => {
		if (skin[2] != 0) {
			localStorage.setItem(skin[0] + "TintEnemies", $("#in" + skin[0] + "TintEnemies").val());
			$("#label" + skin[0] + "TintEnemies").text(Number($("#in" + skin[0] + "TintEnemies").val()).toLocaleString());
			if ($("#in" + skin[1] + "Stars").val() == 0) {
				$("#in" + skin[0] + "TintEnemies").parent().parent().removeClass().addClass("Unobtained");
			} else if ($("#in" + skin[0] + "TintEnemies").val() >= skin[2]) {
				$("#in" + skin[0] + "TintEnemies").parent().parent().removeClass().addClass("Complete");
				$("#hideTintCheckbox").prop("checked", localStorageGetItem("HideTint", 'false') == 'true').change();
			} else {
				$("#in" + skin[0] + "TintEnemies").parent().parent().removeClass();
				totalTintEnemies += $("#in" + skin[0] + "TintEnemies").val() - skin[2];
				tintPush(rankingEnemies,$("#in" + skin[0] + "TintEnemies").val() - skin[2], skin[1]);
			}
		}
		if (skin[3] != 0) {
			localStorage.setItem(skin[0] + "TintChallenges", $("#in" + skin[0] + "TintChallenges").val());
			$("#label" + skin[0] + "TintChallenges").text(Number($("#in" + skin[0] + "TintChallenges").val()).toLocaleString());
			if ($("#in" + skin[1] + "Stars").val() == 0) {
				$("#in" + skin[0] + "TintChallenges").parent().parent().removeClass().addClass("Unobtained");
			} else if ($("#in" + skin[0] + "TintChallenges").val() >= skin[3]) {
				$("#in" + skin[0] + "TintChallenges").parent().parent().removeClass().addClass("Complete");
				$("#hideTintCheckbox").prop("checked", localStorageGetItem("HideTint", 'false') == 'true').change();
			} else {
				$("#in" + skin[0] + "TintChallenges").parent().parent().removeClass();
				totalTintChallenges += $("#in" + skin[0] + "TintChallenges").val() - skin[3];
				tintPush(rankingChallenges,$("#in" + skin[0] + "TintChallenges").val() - skin[3], skin[1]);
			}
		}
		if (skin[4] != 0) {
			localStorage.setItem(skin[0] + "TintAmber", $("#in" + skin[0] + "TintAmber").val());
			$("#label" + skin[0] + "TintAmber").text(Number($("#in" + skin[0] + "TintAmber").val()).toLocaleString());
			if ($("#in" + skin[1] + "Stars").val() == 0) {
				$("#in" + skin[0] + "TintAmber").parent().parent().removeClass().addClass("Unobtained");
			} else if ($("#in" + skin[0] + "TintAmber").val() >= skin[4]) {
				$("#in" + skin[0] + "TintAmber").parent().parent().removeClass().addClass("Complete");
				$("#hideTintCheckbox").prop("checked", localStorageGetItem("HideTint", 'false') == 'true').change();
			} else {
				$("#in" + skin[0] + "TintAmber").parent().parent().removeClass();
				totalTintAmber += $("#in" + skin[0] + "TintAmber").val() - skin[4];
				tintPush(rankingAmber,$("#in" + skin[0] + "TintAmber").val() - skin[4], skin[1]);
			}
		}
		if (skin[5] != 0) {
			localStorage.setItem(skin[0] + "TintDungeon", $("#in" + skin[0] + "TintDungeon").val());
			$("#label" + skin[0] + "TintDungeon").text(Number($("#in" + skin[0] + "TintDungeon").val()).toLocaleString());
			if ($("#in" + skin[1] + "Stars").val() == 0) {
				$("#in" + skin[0] + "TintDungeon").parent().parent().removeClass().addClass("Unobtained");
			} else if ($("#in" + skin[0] + "TintDungeon").val() >= skin[5]) {
				$("#in" + skin[0] + "TintDungeon").parent().parent().removeClass().addClass("Complete");
				$("#hideTintCheckbox").prop("checked", localStorageGetItem("HideTint", 'false') == 'true').change();
			} else {
				$("#in" + skin[0] + "TintDungeon").parent().parent().removeClass();
				totalTintDungeon += $("#in" + skin[0] + "TintDungeon").val() - skin[5];
				tintPush(rankingDungeon,$("#in" + skin[0] + "TintDungeon").val() - skin[5], skin[1]);
			}
		}
	})
	rankingEnemies   .sort((a, b) => a[0] - b[0]);
	rankingChallenges.sort((a, b) => a[0] - b[0]);
	rankingAmber     .sort((a, b) => a[0] - b[0]);
	rankingDungeon   .sort((a, b) => a[0] - b[0]);
	let optimalTintEnemies    = 0;
	let optimalTintChallenges = 0;
	let optimalTintAmber      = 0;
	let optimalTintDungeon    = 0;
	for (let i = 0; i < rankingEnemies.length; i += 3) {
		optimalTintEnemies += rankingEnemies[i][0];
		if (i + 0 < rankingEnemies.length) giveTintGroup(rankingEnemies[i + 0][1], "TintEnemies", i);
		if (i + 1 < rankingEnemies.length) giveTintGroup(rankingEnemies[i + 1][1], "TintEnemies", i);
		if (i + 2 < rankingEnemies.length) giveTintGroup(rankingEnemies[i + 2][1], "TintEnemies", i);
	}
	for (let i = 0; i < rankingChallenges.length; i += 3) {
		optimalTintChallenges += rankingChallenges[i][0];
		if (i + 0 < rankingChallenges.length) giveTintGroup(rankingChallenges[i + 0][1], "TintChallenges", i);
		if (i + 1 < rankingChallenges.length) giveTintGroup(rankingChallenges[i + 1][1], "TintChallenges", i);
		if (i + 2 < rankingChallenges.length) giveTintGroup(rankingChallenges[i + 2][1], "TintChallenges", i);
	}
	for (let i = 0; i < rankingAmber.length; i += 3) {
		optimalTintAmber += rankingAmber[i][0];
		if (i + 0 < rankingAmber.length) giveTintGroup(rankingAmber[i + 0][1], "TintAmber", i);
		if (i + 1 < rankingAmber.length) giveTintGroup(rankingAmber[i + 1][1], "TintAmber", i);
		if (i + 2 < rankingAmber.length) giveTintGroup(rankingAmber[i + 2][1], "TintAmber", i);
	}
	for (let i = 0; i < rankingDungeon.length; i += 3) {
		optimalTintDungeon += rankingDungeon[i][0];
		if (i + 0 < rankingDungeon.length) giveTintGroup(rankingDungeon[i + 0][1], "TintDungeon", i);
		if (i + 1 < rankingDungeon.length) giveTintGroup(rankingDungeon[i + 1][1], "TintDungeon", i);
		if (i + 2 < rankingDungeon.length) giveTintGroup(rankingDungeon[i + 2][1], "TintDungeon", i);
	}
	$("#outTotalTintEnemies")     .text((totalTintEnemies      * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outTotalTintChallenges")  .text((totalTintChallenges   * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outTotalTintAmber")       .text((totalTintAmber        * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outTotalTintDungeon")     .text((totalTintDungeon      * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outOptimalTintEnemies")   .text((optimalTintEnemies    * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outOptimalTintChallenges").text((optimalTintChallenges * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outOptimalTintAmber")     .text((optimalTintAmber      * -1).toLocaleString(undefined, { signDisplay: "negative" }));
	$("#outOptimalTintDungeon")   .text((optimalTintDungeon    * -1).toLocaleString(undefined, { signDisplay: "negative" }));
}

function giveTintGroup(pet, tint, index) {
	tintList.forEach(skin => {
		if (skin[1] == pet)
			$("#in" + skin[0] + tint).parent().parent().removeClass().addClass("Group" + ((index / 3) + 1));
	})
}

function tintPush(ranking, value, pet) {
	const index = ranking.findIndex(element => element[1] == pet);
	if (index !== -1) ranking.splice(index, 1);
	ranking.push([value, pet]);
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
		//console.log("Getting default value for " + key);
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
    const ids = ['pet', 'hero', 'equipment', 'tint'];

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

function hidePetFav(event) {
	let pets = $("#petTable tr a")
	pets.each(i => {
		jQuery(pets[i].parentElement.parentElement)
			.toggle(!event.target.checked || pets[i].text == "★");
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

function hideHeroFav(event) {
	let heroes = $("#heroTable tr a");
	heroes.each(i => {
		jQuery(heroes[i].parentElement.parentElement)
			.toggle(!event.target.checked || heroes[i].text == "★");
	})
	onChangeHeroStars();
	onChangeHeroLevels();
}

function hideTint(event) {
	let checked = event.target.checked;
	localStorage.setItem("HideTint", checked);
	tintList.forEach(tint => {
		let complete = true;
		if (tint[2] != 0) {
			if (Number($("#in" + tint[0] + "TintEnemies").val()) < tint[2]) {
				complete = false;
			}
		}
		if (tint[3] != 0) {
			if (Number($("#in" + tint[0] + "TintChallenges").val()) < tint[3]) {
				complete = false;
			}
		}
		if (tint[4] != 0) {
			if (Number($("#in" + tint[0] + "TintAmber").val()) < tint[4]) {
				complete = false;
			}
		}
		if (tint[5] != 0) {
			if (Number($("#in" + tint[0] + "TintDungeon").val()) < tint[5]) {
				complete = false;
			}
		}
		$("#tintTable label:contains('" + tint[0] + "')").parent().parent().toggle(!(complete && checked));
		$(".Complete").css("opacity", checked? 0.31415926 : 1);
	})
}

function hideUnobtainedTint(event) {
	let checked = event.target.checked;
	localStorage.setItem("HideUnobtainedTint", checked);
	$("#tintTable tr").toggle(true);
	$(".Unobtained").parent().toggle(!checked);
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
