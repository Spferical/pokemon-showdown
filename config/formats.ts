// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
	},
	{
		name: "[Gen 8] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661419/">LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657374/">LC Viability Rankings</a>`,
		],

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Rufflet', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix-Alola',
			'Chlorophyll', 'Moody', 'Baton Pass',
		],
	},
		{
		name: "[Gen 8] LC Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/lc-ubers.3614111/">LC Ubers Metagame Discussion</a>`,
		],

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Dragon Rage', 'Sonicboom', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/swsh-lcuu-metagame-discussion-thread.3660866/">LC UU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Rufflet', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix-Alola',
			'Chlorophyll', 'Moody', 'Baton Pass', 'Abra', 'Archen', 'Chinchou', 'Dewpider', 'Diglett-Base', 'Drilbur', 'Dwebble', 'Ferroseed', 'Foongus', 'Grookey', 'Koffing',
      'Magnemite', 'Mareanie', 'Mienfoo', 'Mudbray', 'Onix', 'Pawniard', 'Ponyta-Base', 'Ponyta-Galar', 'Porygon', 'Scorbunny', 'Scraggy', 'Spritzee', 'Staryu', 'Timburr',
      'Trapinch', 'Tyrunt', 'Vullaby', 'Vulpix-Base', 'Farfetch\u2019d-Galar', 'Shellder', 'Wingull',
		],
	},
	{
		name: "[Gen 8] LC RU (Unofficial)",
		threads: [
			`&bullet; <a href="https://discord.gg/rF6UvCvqMv">LC RU Discord Server with Resources</a>`,
		],

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Abra', 'Amaura', 'Archen', 'Baltoy', 'Carvanha', 'Chinchou', 'Corphish', 'Cottonee', 'Croagunk', 'Cufant', 'Cutiefly',
			'Dewpider', 'Diglett-Base', 'Diglett-Alola', 'Drifloon', 'Drilbur', 'Dwebble', 'Elekid', 'Farfetch\u2019d-Galar', 'Ferroseed', 'Foongus', 'Frillish', 'Gastly',
			'Goldeen', 'Gothita', 'Grookey', 'Grubbin', 'Helioptile', 'Hippopotas', 'Joltik', 'Koffing', 'Larvesta', 'Lileep',
			'Magby', 'Magnemite', 'Mareanie', 'Meowth-Base', 'Mienfoo', 'Mudbray', 'Munchlax', 'Natu', 'Omanyte', 'Onix', 'Pancham', 'Pawniard', 'Ponyta-Base',
			'Ponyta-Galar', 'Porygon', 'Pumpkaboo-Small', 'Rufflet', 'Sandshrew-Base', 'Sandshrew-Alola', 'Scraggy', 'Scorbunny', 'Scyther', 'Shellder',
			'Shellos', 'Sneasel', 'Snover', 'Swirlix', 'Spritzee', 'Staryu', 'Stunky', 'Tangela', 'Timburr', 'Tirtouga', 'Trapinch',
			'Tyrunt', 'Vullaby', 'Vulpix-Base', 'Vulpix-Alola', 'Woobat', 'Wingull', 'Zigzagoon', 'Chlorophyll', 'Baton Pass', 'Corsola-Galar', 'Moody',
			'Zorua',
		],
	},
	{
		name: "[Gen 8] LC Monotype",
		desc: `Little Cup but all the Pok&eacute;mon on a team must share a type.`,

		mod: 'gen8',
		ruleset: ['Same Type Clause', 'Standard', 'Dynamax Clause', 'Little Cup'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Rufflet', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Grookey',
			'Chlorophyll', 'Moody', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Doubles",
	},
	{
		name: "[Gen 8] Doubles LC",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause', 'Swagger Clause', 'Sleep Clause Mod'],
		banlist: [
			'Cutiefly', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix-Alola',
			'Drought',
		],
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
	},
	{
		name: "[Gen 8] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed, UU version`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656332/">NFE Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657558/">NFE Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['Not Fully Evolved', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Chansey', 'Doublade', 'Haunter', 'Magneton', 'Pawniard', 'Porygon2', 'Rhydon', 'Scyther', 'Sneasel', 'Type: Null',
			'Arena Trap', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] NFE UU",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656332/">NFE Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657558/">NFE Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['Not Fully Evolved', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Chansey', 'Doublade', 'Haunter', 'Magneton', 'Pawniard', 'Porygon2', 'Rhydon', 'Scyther', 'Sneasel', 'Type: Null',
			'Arena Trap', 'Shadow Tag', 'Baton Pass', 'Thwackey', 'Gurdurr', 'Electabuzz', 'Piloswine', 'Golbat', 'Raboot', 'Kadabra', 'Pikachu',
			'Clefairy', 'Wartortle', 'Tangela', 'Hattrem', 'Corsola-Galar', 'Magmar', 'Carkol', 'Togetic', 'Gabite', 'Mr. Mime-Galar', 'Dusclops',
			'Klang', 'Mareanie', 'Ferroseed', 'Slowpoke', 'Marshtomp', 'Fraxure', 'Lampent', 'Krokorok', 'Machoke', 'Rufflet',
		],
	},
	{
	name: "[Gen 8] LC STAAABmons (Unofficial)",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn. Additionally, Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656429/">STABmons</a>`,
		],

		mod: 'gen8',
		ruleset: ['Little Cup', 'Standard', 'STABmons Move Legality', 'Dynamax Clause','!Obtainable Abilities', 'Species Clause', 'Nickname Clause', '2 Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Double Iron Bash', 'Electrify', 'Extreme Speed', 'Fishious Rend',
			'Geomancy', 'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Spore', 'Thousand Arrows', 'V-create', 'Wicked Blow',
		],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Generations",
	},
	{
		name: "[Gen 7] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/formats/lc/">USM LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3639319/">USM LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621440/">USM LC Viability Rankings</a>`,
		],

		mod: 'gen7',
		// searchShow: false,
		maxLevel: 5,
		ruleset: ['Little Cup', 'Standard', 'Swagger Clause'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon',
			'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Trapinch', 'Vulpix-Base', 'Wingull', 'Yanma',
			'Eevium Z', 'Baton Pass', 'Dragon Rage', 'Sonic Boom',
		],
	},
	{
		name: "[Gen 6] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/lc/">ORAS LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3547566/">ORAS LC Viability Rankings</a>`,
		],

		mod: 'gen6',
		// searchShow: false,
		maxLevel: 5,
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Drifloon', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma',
			'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 5] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3485860/">BW2 LC Viability Rankings</a>`,
		],

		mod: 'gen5',
		// searchShow: false,
		maxLevel: 5,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
		banlist: [
			'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scraggy', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma',
			'Sand Rush', 'Berry Juice', 'Soul Dew', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 4] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dp/articles/little_cup_guide">DPP LC Guide</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7336500/">DPP LC Viability Rankings</a>`,
		],

		mod: 'gen4',
		// searchShow: false,
		maxLevel: 5,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
		banlist: [
			'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma',
			'Berry Juice', 'Deep Sea Tooth', 'Dragon Rage', 'Sonic Boom',
		],
	},
];
