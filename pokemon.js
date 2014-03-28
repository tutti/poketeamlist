/**
Most of this was ripped from Bulbapedia.
Source to do that:
var info = []
$(".sortable tbody tr").each(function(index, elm) {
        var dex_number = Number($(this).find("td:nth-child(1)").text())
        var name = $(this).find("td:nth-child(3) a").text()
        var ab1 = $(this).find("td:nth-child(4) a").text()
        var ab2 = $(this).find("td:nth-child(5) a").text()
        var ab3 = $(this).find("td:nth-child(6) a").text()
        if (!info[dex_number]) {
                var newinfo = {
                        name: name,
                        formes: {
                                regular: []
                        }
                }
                if (ab1 != "") { newinfo.formes.regular.push(ab1) }
                if (ab2 != "") { newinfo.formes.regular.push(ab2) }
                if (ab3 != "") { newinfo.formes.regular.push(ab3) }
                info[dex_number] = newinfo
        }
})
copy(info)

This does not copy Formes; those are manually edited after the fact.
**/

Pokemon = [
    {
        name: "None",
        formes: {
            regular: [
                "No Ability"
            ]
        }
    },
    {
        name: "Bulbasaur",
        formes: {
            regular: [
                "Overgrow",
                "Chlorophyll"
            ]
        }
    },
    {
        name: "Ivysaur",
        formes: {
            regular: [
                "Overgrow",
                "Chlorophyll"
            ]
        }
    },
    {
        name: "Venusaur",
        formes: {
            regular: [
                "Overgrow",
                "Chlorophyll"
            ]
        }
    },
    {
        name: "Charmander",
        formes: {
            regular: [
                "Blaze",
                "Solar Power"
            ]
        }
    },
    {
        name: "Charmeleon",
        formes: {
            regular: [
                "Blaze",
                "Solar Power"
            ]
        }
    },
    {
        name: "Charizard",
        formes: {
            regular: [
                "Blaze",
                "Solar Power"
            ]
        }
    },
    {
        name: "Squirtle",
        formes: {
            regular: [
                "Torrent",
                "Rain Dish"
            ]
        }
    },
    {
        name: "Wartortle",
        formes: {
            regular: [
                "Torrent",
                "Rain Dish"
            ]
        }
    },
    {
        name: "Blastoise",
        formes: {
            regular: [
                "Torrent",
                "Rain Dish"
            ]
        }
    },
    {
        name: "Caterpie",
        formes: {
            regular: [
                "Shield Dust",
                "Run Away"
            ]
        }
    },
    {
        name: "Metapod",
        formes: {
            regular: [
                "Shed Skin"
            ]
        }
    },
    {
        name: "Butterfree",
        formes: {
            regular: [
                "Compound Eyes",
                "Tinted Lens"
            ]
        }
    },
    {
        name: "Weedle",
        formes: {
            regular: [
                "Shield Dust",
                "Run Away"
            ]
        }
    },
    {
        name: "Kakuna",
        formes: {
            regular: [
                "Shed Skin"
            ]
        }
    },
    {
        name: "Beedrill",
        formes: {
            regular: [
                "Swarm",
                "Sniper"
            ]
        }
    },
    {
        name: "Pidgey",
        formes: {
            regular: [
                "Keen Eye",
                "Tangled Feet",
                "Big Pecks"
            ]
        }
    },
    {
        name: "Pidgeotto",
        formes: {
            regular: [
                "Keen Eye",
                "Tangled Feet",
                "Big Pecks"
            ]
        }
    },
    {
        name: "Pidgeot",
        formes: {
            regular: [
                "Keen Eye",
                "Tangled Feet",
                "Big Pecks"
            ]
        }
    },
    {
        name: "Rattata",
        formes: {
            regular: [
                "Run Away",
                "Guts",
                "Hustle"
            ]
        }
    },
    {
        name: "Raticate",
        formes: {
            regular: [
                "Run Away",
                "Guts",
                "Hustle"
            ]
        }
    },
    {
        name: "Spearow",
        formes: {
            regular: [
                "Keen Eye",
                "Sniper"
            ]
        }
    },
    {
        name: "Fearow",
        formes: {
            regular: [
                "Keen Eye",
                "Sniper"
            ]
        }
    },
    {
        name: "Ekans",
        formes: {
            regular: [
                "Intimidate",
                "Shed Skin",
                "Unnerve"
            ]
        }
    },
    {
        name: "Arbok",
        formes: {
            regular: [
                "Intimidate",
                "Shed Skin",
                "Unnerve"
            ]
        }
    },
    {
        name: "Pikachu",
        formes: {
            regular: [
                "Static",
                "Lightning Rod"
            ]
        }
    },
    {
        name: "Raichu",
        formes: {
            regular: [
                "Static",
                "Lightning Rod"
            ]
        }
    },
    {
        name: "Sandshrew",
        formes: {
            regular: [
                "Sand Veil",
                "Sand Rush"
            ]
        }
    },
    {
        name: "Sandslash",
        formes: {
            regular: [
                "Sand Veil",
                "Sand Rush"
            ]
        }
    },
    {
        name: "Nidoran♀",
        formes: {
            regular: [
                "Poison Point",
                "Rivalry",
                "Hustle"
            ]
        }
    },
    {
        name: "Nidorina",
        formes: {
            regular: [
                "Poison Point",
                "Rivalry",
                "Hustle"
            ]
        }
    },
    {
        name: "Nidoqueen",
        formes: {
            regular: [
                "Poison Point",
                "Rivalry",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Nidoran♂",
        formes: {
            regular: [
                "Poison Point",
                "Rivalry",
                "Hustle"
            ]
        }
    },
    {
        name: "Nidorino",
        formes: {
            regular: [
                "Poison Point",
                "Rivalry",
                "Hustle"
            ]
        }
    },
    {
        name: "Nidoking",
        formes: {
            regular: [
                "Poison Point",
                "Rivalry",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Clefairy",
        formes: {
            regular: [
                "Cute Charm",
                "Magic Guard",
                "Friend Guard"
            ]
        }
    },
    {
        name: "Clefable",
        formes: {
            regular: [
                "Cute Charm",
                "Magic Guard",
                "Unaware"
            ]
        }
    },
    {
        name: "Vulpix",
        formes: {
            regular: [
                "Flash Fire",
                "Drought"
            ]
        }
    },
    {
        name: "Ninetales",
        formes: {
            regular: [
                "Flash Fire",
                "Drought"
            ]
        }
    },
    {
        name: "Jigglypuff",
        formes: {
            regular: [
                "Cute Charm",
                "Competitive",
                "Friend Guard"
            ]
        }
    },
    {
        name: "Wigglytuff",
        formes: {
            regular: [
                "Cute Charm",
                "Competitive",
                "Frisk"
            ]
        }
    },
    {
        name: "Zubat",
        formes: {
            regular: [
                "Inner Focus",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Golbat",
        formes: {
            regular: [
                "Inner Focus",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Oddish",
        formes: {
            regular: [
                "Chlorophyll",
                "Run Away"
            ]
        }
    },
    {
        name: "Gloom",
        formes: {
            regular: [
                "Chlorophyll",
                "Stench"
            ]
        }
    },
    {
        name: "Vileplume",
        formes: {
            regular: [
                "Chlorophyll",
                "Effect Spore"
            ]
        }
    },
    {
        name: "Paras",
        formes: {
            regular: [
                "Effect Spore",
                "Dry Skin",
                "Damp"
            ]
        }
    },
    {
        name: "Parasect",
        formes: {
            regular: [
                "Effect Spore",
                "Dry Skin",
                "Damp"
            ]
        }
    },
    {
        name: "Venonat",
        formes: {
            regular: [
                "Compound Eyes",
                "Tinted Lens",
                "Run Away"
            ]
        }
    },
    {
        name: "Venomoth",
        formes: {
            regular: [
                "Shield Dust",
                "Tinted Lens",
                "Wonder Skin"
            ]
        }
    },
    {
        name: "Diglett",
        formes: {
            regular: [
                "Sand Veil",
                "Arena Trap",
                "Sand Force"
            ]
        }
    },
    {
        name: "Dugtrio",
        formes: {
            regular: [
                "Sand Veil",
                "Arena Trap",
                "Sand Force"
            ]
        }
    },
    {
        name: "Meowth",
        formes: {
            regular: [
                "Pickup",
                "Technician",
                "Unnerve"
            ]
        }
    },
    {
        name: "Persian",
        formes: {
            regular: [
                "Limber",
                "Technician",
                "Unnerve"
            ]
        }
    },
    {
        name: "Psyduck",
        formes: {
            regular: [
                "Damp",
                "Cloud Nine",
                "Swift Swim"
            ]
        }
    },
    {
        name: "Golduck",
        formes: {
            regular: [
                "Damp",
                "Cloud Nine",
                "Swift Swim"
            ]
        }
    },
    {
        name: "Mankey",
        formes: {
            regular: [
                "Vital Spirit",
                "Anger Point",
                "Defiant"
            ]
        }
    },
    {
        name: "Primeape",
        formes: {
            regular: [
                "Vital Spirit",
                "Anger Point",
                "Defiant"
            ]
        }
    },
    {
        name: "Growlithe",
        formes: {
            regular: [
                "Intimidate",
                "Flash Fire",
                "Justified"
            ]
        }
    },
    {
        name: "Arcanine",
        formes: {
            regular: [
                "Intimidate",
                "Flash Fire",
                "Justified"
            ]
        }
    },
    {
        name: "Poliwag",
        formes: {
            regular: [
                "Water Absorb",
                "Damp",
                "Swift Swim"
            ]
        }
    },
    {
        name: "Poliwhirl",
        formes: {
            regular: [
                "Water Absorb",
                "Damp",
                "Swift Swim"
            ]
        }
    },
    {
        name: "Poliwrath",
        formes: {
            regular: [
                "Water Absorb",
                "Damp",
                "Swift Swim"
            ]
        }
    },
    {
        name: "Abra",
        formes: {
            regular: [
                "Synchronize",
                "Inner Focus",
                "Magic Guard"
            ]
        }
    },
    {
        name: "Kadabra",
        formes: {
            regular: [
                "Synchronize",
                "Inner Focus",
                "Magic Guard"
            ]
        }
    },
    {
        name: "Alakazam",
        formes: {
            regular: [
                "Synchronize",
                "Inner Focus",
                "Magic Guard"
            ]
        }
    },
    {
        name: "Machop",
        formes: {
            regular: [
                "Guts",
                "No Guard",
                "Steadfast"
            ]
        }
    },
    {
        name: "Machoke",
        formes: {
            regular: [
                "Guts",
                "No Guard",
                "Steadfast"
            ]
        }
    },
    {
        name: "Machamp",
        formes: {
            regular: [
                "Guts",
                "No Guard",
                "Steadfast"
            ]
        }
    },
    {
        name: "Bellsprout",
        formes: {
            regular: [
                "Chlorophyll",
                "Gluttony"
            ]
        }
    },
    {
        name: "Weepinbell",
        formes: {
            regular: [
                "Chlorophyll",
                "Gluttony"
            ]
        }
    },
    {
        name: "Victreebel",
        formes: {
            regular: [
                "Chlorophyll",
                "Gluttony"
            ]
        }
    },
    {
        name: "Tentacool",
        formes: {
            regular: [
                "Clear Body",
                "Liquid Ooze",
                "Rain Dish"
            ]
        }
    },
    {
        name: "Tentacruel",
        formes: {
            regular: [
                "Clear Body",
                "Liquid Ooze",
                "Rain Dish"
            ]
        }
    },
    {
        name: "Geodude",
        formes: {
            regular: [
                "Rock Head",
                "Sturdy",
                "Sand Veil"
            ]
        }
    },
    {
        name: "Graveler",
        formes: {
            regular: [
                "Rock Head",
                "Sturdy",
                "Sand Veil"
            ]
        }
    },
    {
        name: "Golem",
        formes: {
            regular: [
                "Rock Head",
                "Sturdy",
                "Sand Veil"
            ]
        }
    },
    {
        name: "Ponyta",
        formes: {
            regular: [
                "Run Away",
                "Flash Fire",
                "Flame Body"
            ]
        }
    },
    {
        name: "Rapidash",
        formes: {
            regular: [
                "Run Away",
                "Flash Fire",
                "Flame Body"
            ]
        }
    },
    {
        name: "Slowpoke",
        formes: {
            regular: [
                "Oblivious",
                "Own Tempo",
                "Regenerator"
            ]
        }
    },
    {
        name: "Slowbro",
        formes: {
            regular: [
                "Oblivious",
                "Own Tempo",
                "Regenerator"
            ]
        }
    },
    {
        name: "Magnemite",
        formes: {
            regular: [
                "Magnet Pull",
                "Sturdy",
                "Analytic"
            ]
        }
    },
    {
        name: "Magneton",
        formes: {
            regular: [
                "Magnet Pull",
                "Sturdy",
                "Analytic"
            ]
        }
    },
    {
        name: "Farfetch'd",
        formes: {
            regular: [
                "Keen Eye",
                "Inner Focus",
                "Defiant"
            ]
        }
    },
    {
        name: "Doduo",
        formes: {
            regular: [
                "Run Away",
                "Early Bird",
                "Tangled Feet"
            ]
        }
    },
    {
        name: "Dodrio",
        formes: {
            regular: [
                "Run Away",
                "Early Bird",
                "Tangled Feet"
            ]
        }
    },
    {
        name: "Seel",
        formes: {
            regular: [
                "Thick Fat",
                "Hydration",
                "Ice Body"
            ]
        }
    },
    {
        name: "Dewgong",
        formes: {
            regular: [
                "Thick Fat",
                "Hydration",
                "Ice Body"
            ]
        }
    },
    {
        name: "Grimer",
        formes: {
            regular: [
                "Stench",
                "Sticky Hold",
                "Poison Touch"
            ]
        }
    },
    {
        name: "Muk",
        formes: {
            regular: [
                "Stench",
                "Sticky Hold",
                "Poison Touch"
            ]
        }
    },
    {
        name: "Shellder",
        formes: {
            regular: [
                "Shell Armor",
                "Skill Link",
                "Overcoat"
            ]
        }
    },
    {
        name: "Cloyster",
        formes: {
            regular: [
                "Shell Armor",
                "Skill Link",
                "Overcoat"
            ]
        }
    },
    {
        name: "Gastly",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Haunter",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Gengar",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Onix",
        formes: {
            regular: [
                "Rock Head",
                "Sturdy",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Drowzee",
        formes: {
            regular: [
                "Insomnia",
                "Forewarn",
                "Inner Focus"
            ]
        }
    },
    {
        name: "Hypno",
        formes: {
            regular: [
                "Insomnia",
                "Forewarn",
                "Inner Focus"
            ]
        }
    },
    {
        name: "Krabby",
        formes: {
            regular: [
                "Hyper Cutter",
                "Shell Armor",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Kingler",
        formes: {
            regular: [
                "Hyper Cutter",
                "Shell Armor",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Voltorb",
        formes: {
            regular: [
                "Soundproof",
                "Static",
                "Aftermath"
            ]
        }
    },
    {
        name: "Electrode",
        formes: {
            regular: [
                "Soundproof",
                "Static",
                "Aftermath"
            ]
        }
    },
    {
        name: "Exeggcute",
        formes: {
            regular: [
                "Chlorophyll",
                "Harvest"
            ]
        }
    },
    {
        name: "Exeggutor",
        formes: {
            regular: [
                "Chlorophyll",
                "Harvest"
            ]
        }
    },
    {
        name: "Cubone",
        formes: {
            regular: [
                "Rock Head",
                "Lightning Rod",
                "Battle Armor"
            ]
        }
    },
    {
        name: "Marowak",
        formes: {
            regular: [
                "Rock Head",
                "Lightning Rod",
                "Battle Armor"
            ]
        }
    },
    {
        name: "Hitmonlee",
        formes: {
            regular: [
                "Limber",
                "Reckless",
                "Unburden"
            ]
        }
    },
    {
        name: "Hitmonchan",
        formes: {
            regular: [
                "Keen Eye",
                "Iron Fist",
                "Inner Focus"
            ]
        }
    },
    {
        name: "Lickitung",
        formes: {
            regular: [
                "Own Tempo",
                "Oblivious",
                "Cloud Nine"
            ]
        }
    },
    {
        name: "Koffing",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Weezing",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Rhyhorn",
        formes: {
            regular: [
                "Lightning Rod",
                "Rock Head",
                "Reckless"
            ]
        }
    },
    {
        name: "Rhydon",
        formes: {
            regular: [
                "Lightning Rod",
                "Rock Head",
                "Reckless"
            ]
        }
    },
    {
        name: "Chansey",
        formes: {
            regular: [
                "Natural Cure",
                "Serene Grace",
                "Healer"
            ]
        }
    },
    {
        name: "Tangela",
        formes: {
            regular: [
                "Chlorophyll",
                "Leaf Guard",
                "Regenerator"
            ]
        }
    },
    {
        name: "Kangaskhan",
        formes: {
            regular: [
                "Early Bird",
                "Scrappy",
                "Inner Focus"
            ]
        }
    },
    {
        name: "Horsea",
        formes: {
            regular: [
                "Swift Swim",
                "Sniper",
                "Damp"
            ]
        }
    },
    {
        name: "Seadra",
        formes: {
            regular: [
                "Poison Point",
                "Sniper",
                "Damp"
            ]
        }
    },
    {
        name: "Goldeen",
        formes: {
            regular: [
                "Swift Swim",
                "Water Veil",
                "Lightning Rod"
            ]
        }
    },
    {
        name: "Seaking",
        formes: {
            regular: [
                "Swift Swim",
                "Water Veil",
                "Lightning Rod"
            ]
        }
    },
    {
        name: "Staryu",
        formes: {
            regular: [
                "Illuminate",
                "Natural Cure",
                "Analytic"
            ]
        }
    },
    {
        name: "Starmie",
        formes: {
            regular: [
                "Illuminate",
                "Natural Cure",
                "Analytic"
            ]
        }
    },
    {
        name: "Mr. Mime",
        formes: {
            regular: [
                "Soundproof",
                "Filter",
                "Technician"
            ]
        }
    },
    {
        name: "Scyther",
        formes: {
            regular: [
                "Swarm",
                "Technician",
                "Steadfast"
            ]
        }
    },
    {
        name: "Jynx",
        formes: {
            regular: [
                "Oblivious",
                "Forewarn",
                "Dry Skin"
            ]
        }
    },
    {
        name: "Electabuzz",
        formes: {
            regular: [
                "Static",
                "Vital Spirit"
            ]
        }
    },
    {
        name: "Magmar",
        formes: {
            regular: [
                "Flame Body",
                "Vital Spirit"
            ]
        }
    },
    {
        name: "Pinsir",
        formes: {
            regular: [
                "Hyper Cutter",
                "Mold Breaker",
                "Moxie"
            ]
        }
    },
    {
        name: "Tauros",
        formes: {
            regular: [
                "Intimidate",
                "Anger Point",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Magikarp",
        formes: {
            regular: [
                "Swift Swim",
                "Rattled"
            ]
        }
    },
    {
        name: "Gyarados",
        formes: {
            regular: [
                "Intimidate",
                "Moxie"
            ]
        }
    },
    {
        name: "Lapras",
        formes: {
            regular: [
                "Water Absorb",
                "Shell Armor",
                "Hydration"
            ]
        }
    },
    {
        name: "Ditto",
        formes: {
            regular: [
                "Limber",
                "Imposter"
            ]
        }
    },
    {
        name: "Eevee",
        formes: {
            regular: [
                "Run Away",
                "Adaptability",
                "Anticipation"
            ]
        }
    },
    {
        name: "Vaporeon",
        formes: {
            regular: [
                "Water Absorb",
                "Hydration"
            ]
        }
    },
    {
        name: "Jolteon",
        formes: {
            regular: [
                "Volt Absorb",
                "Quick Feet"
            ]
        }
    },
    {
        name: "Flareon",
        formes: {
            regular: [
                "Flash Fire",
                "Guts"
            ]
        }
    },
    {
        name: "Porygon",
        formes: {
            regular: [
                "Trace",
                "Download",
                "Analytic"
            ]
        }
    },
    {
        name: "Omanyte",
        formes: {
            regular: [
                "Swift Swim",
                "Shell Armor",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Omastar",
        formes: {
            regular: [
                "Swift Swim",
                "Shell Armor",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Kabuto",
        formes: {
            regular: [
                "Swift Swim",
                "Battle Armor",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Kabutops",
        formes: {
            regular: [
                "Swift Swim",
                "Battle Armor",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Aerodactyl",
        formes: {
            regular: [
                "Rock Head",
                "Pressure",
                "Unnerve"
            ]
        }
    },
    {
        name: "Snorlax",
        formes: {
            regular: [
                "Immunity",
                "Thick Fat",
                "Gluttony"
            ]
        }
    },
    {
        name: "Articuno",
        formes: {
            regular: [
                "Pressure",
                "Snow Cloak"
            ]
        }
    },
    {
        name: "Zapdos",
        formes: {
            regular: [
                "Pressure",
                "Static"
            ]
        }
    },
    {
        name: "Moltres",
        formes: {
            regular: [
                "Pressure",
                "Flame Body"
            ]
        }
    },
    {
        name: "Dratini",
        formes: {
            regular: [
                "Shed Skin",
                "Marvel Scale"
            ]
        }
    },
    {
        name: "Dragonair",
        formes: {
            regular: [
                "Shed Skin",
                "Marvel Scale"
            ]
        }
    },
    {
        name: "Dragonite",
        formes: {
            regular: [
                "Inner Focus",
                "Multiscale"
            ]
        }
    },
    {
        name: "Mewtwo",
        formes: {
            regular: [
                "Pressure",
                "Unnerve"
            ]
        }
    },
    {
        name: "Mew",
        formes: {
            regular: [
                "Synchronize"
            ]
        }
    },
    {
        name: "Chikorita",
        formes: {
            regular: [
                "Overgrow",
                "Leaf Guard"
            ]
        }
    },
    {
        name: "Bayleef",
        formes: {
            regular: [
                "Overgrow",
                "Leaf Guard"
            ]
        }
    },
    {
        name: "Meganium",
        formes: {
            regular: [
                "Overgrow",
                "Leaf Guard"
            ]
        }
    },
    {
        name: "Cyndaquil",
        formes: {
            regular: [
                "Blaze",
                "Flash Fire"
            ]
        }
    },
    {
        name: "Quilava",
        formes: {
            regular: [
                "Blaze",
                "Flash Fire"
            ]
        }
    },
    {
        name: "Typhlosion",
        formes: {
            regular: [
                "Blaze",
                "Flash Fire"
            ]
        }
    },
    {
        name: "Totodile",
        formes: {
            regular: [
                "Torrent",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Croconaw",
        formes: {
            regular: [
                "Torrent",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Feraligatr",
        formes: {
            regular: [
                "Torrent",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Sentret",
        formes: {
            regular: [
                "Run Away",
                "Keen Eye",
                "Frisk"
            ]
        }
    },
    {
        name: "Furret",
        formes: {
            regular: [
                "Run Away",
                "Keen Eye",
                "Frisk"
            ]
        }
    },
    {
        name: "Hoothoot",
        formes: {
            regular: [
                "Insomnia",
                "Keen Eye",
                "Tinted Lens"
            ]
        }
    },
    {
        name: "Noctowl",
        formes: {
            regular: [
                "Insomnia",
                "Keen Eye",
                "Tinted Lens"
            ]
        }
    },
    {
        name: "Ledyba",
        formes: {
            regular: [
                "Swarm",
                "Early Bird",
                "Rattled"
            ]
        }
    },
    {
        name: "Ledian",
        formes: {
            regular: [
                "Swarm",
                "Early Bird",
                "Iron Fist"
            ]
        }
    },
    {
        name: "Spinarak",
        formes: {
            regular: [
                "Swarm",
                "Insomnia",
                "Sniper"
            ]
        }
    },
    {
        name: "Ariados",
        formes: {
            regular: [
                "Swarm",
                "Insomnia",
                "Sniper"
            ]
        }
    },
    {
        name: "Crobat",
        formes: {
            regular: [
                "Inner Focus",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Chinchou",
        formes: {
            regular: [
                "Volt Absorb",
                "Illuminate",
                "Water Absorb"
            ]
        }
    },
    {
        name: "Lanturn",
        formes: {
            regular: [
                "Volt Absorb",
                "Illuminate",
                "Water Absorb"
            ]
        }
    },
    {
        name: "Pichu",
        formes: {
            regular: [
                "Static",
                "Lightning Rod"
            ]
        }
    },
    {
        name: "Cleffa",
        formes: {
            regular: [
                "Cute Charm",
                "Magic Guard",
                "Friend Guard"
            ]
        }
    },
    {
        name: "Igglybuff",
        formes: {
            regular: [
                "Cute Charm",
                "Competitive",
                "Friend Guard"
            ]
        }
    },
    {
        name: "Togepi",
        formes: {
            regular: [
                "Hustle",
                "Serene Grace",
                "Super Luck"
            ]
        }
    },
    {
        name: "Togetic",
        formes: {
            regular: [
                "Hustle",
                "Serene Grace",
                "Super Luck"
            ]
        }
    },
    {
        name: "Natu",
        formes: {
            regular: [
                "Synchronize",
                "Early Bird",
                "Magic Bounce"
            ]
        }
    },
    {
        name: "Xatu",
        formes: {
            regular: [
                "Synchronize",
                "Early Bird",
                "Magic Bounce"
            ]
        }
    },
    {
        name: "Mareep",
        formes: {
            regular: [
                "Static",
                "Plus"
            ]
        }
    },
    {
        name: "Flaaffy",
        formes: {
            regular: [
                "Static",
                "Plus"
            ]
        }
    },
    {
        name: "Ampharos",
        formes: {
            regular: [
                "Static",
                "Plus"
            ]
        }
    },
    {
        name: "Bellossom",
        formes: {
            regular: [
                "Chlorophyll",
                "Healer"
            ]
        }
    },
    {
        name: "Marill",
        formes: {
            regular: [
                "Thick Fat",
                "Huge Power",
                "Sap Sipper"
            ]
        }
    },
    {
        name: "Azumarill",
        formes: {
            regular: [
                "Thick Fat",
                "Huge Power",
                "Sap Sipper"
            ]
        }
    },
    {
        name: "Sudowoodo",
        formes: {
            regular: [
                "Sturdy",
                "Rock Head",
                "Rattled"
            ]
        }
    },
    {
        name: "Politoed",
        formes: {
            regular: [
                "Water Absorb",
                "Damp",
                "Drizzle"
            ]
        }
    },
    {
        name: "Hoppip",
        formes: {
            regular: [
                "Chlorophyll",
                "Leaf Guard",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Skiploom",
        formes: {
            regular: [
                "Chlorophyll",
                "Leaf Guard",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Jumpluff",
        formes: {
            regular: [
                "Chlorophyll",
                "Leaf Guard",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Aipom",
        formes: {
            regular: [
                "Run Away",
                "Pickup",
                "Skill Link"
            ]
        }
    },
    {
        name: "Sunkern",
        formes: {
            regular: [
                "Chlorophyll",
                "Solar Power",
                "Early Bird"
            ]
        }
    },
    {
        name: "Sunflora",
        formes: {
            regular: [
                "Chlorophyll",
                "Solar Power",
                "Early Bird"
            ]
        }
    },
    {
        name: "Yanma",
        formes: {
            regular: [
                "Speed Boost",
                "Compound Eyes",
                "Frisk"
            ]
        }
    },
    {
        name: "Wooper",
        formes: {
            regular: [
                "Damp",
                "Water Absorb",
                "Unaware"
            ]
        }
    },
    {
        name: "Quagsire",
        formes: {
            regular: [
                "Damp",
                "Water Absorb",
                "Unaware"
            ]
        }
    },
    {
        name: "Espeon",
        formes: {
            regular: [
                "Synchronize",
                "Magic Bounce"
            ]
        }
    },
    {
        name: "Umbreon",
        formes: {
            regular: [
                "Synchronize",
                "Inner Focus"
            ]
        }
    },
    {
        name: "Murkrow",
        formes: {
            regular: [
                "Insomnia",
                "Super Luck",
                "Prankster"
            ]
        }
    },
    {
        name: "Slowking",
        formes: {
            regular: [
                "Oblivious",
                "Own Tempo",
                "Regenerator"
            ]
        }
    },
    {
        name: "Misdreavus",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Unown",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Wobbuffet",
        formes: {
            regular: [
                "Shadow Tag",
                "Telepathy"
            ]
        }
    },
    {
        name: "Girafarig",
        formes: {
            regular: [
                "Inner Focus",
                "Early Bird",
                "Sap Sipper"
            ]
        }
    },
    {
        name: "Pineco",
        formes: {
            regular: [
                "Sturdy",
                "Overcoat"
            ]
        }
    },
    {
        name: "Forretress",
        formes: {
            regular: [
                "Sturdy",
                "Overcoat"
            ]
        }
    },
    {
        name: "Dunsparce",
        formes: {
            regular: [
                "Serene Grace",
                "Run Away",
                "Rattled"
            ]
        }
    },
    {
        name: "Gligar",
        formes: {
            regular: [
                "Hyper Cutter",
                "Sand Veil",
                "Immunity"
            ]
        }
    },
    {
        name: "Steelix",
        formes: {
            regular: [
                "Rock Head",
                "Sturdy",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Snubbull",
        formes: {
            regular: [
                "Intimidate",
                "Run Away",
                "Rattled"
            ]
        }
    },
    {
        name: "Granbull",
        formes: {
            regular: [
                "Intimidate",
                "Quick Feet",
                "Rattled"
            ]
        }
    },
    {
        name: "Qwilfish",
        formes: {
            regular: [
                "Poison Point",
                "Swift Swim",
                "Intimidate"
            ]
        }
    },
    {
        name: "Scizor",
        formes: {
            regular: [
                "Swarm",
                "Technician",
                "Light Metal"
            ]
        }
    },
    {
        name: "Shuckle",
        formes: {
            regular: [
                "Sturdy",
                "Gluttony",
                "Contrary"
            ]
        }
    },
    {
        name: "Heracross",
        formes: {
            regular: [
                "Swarm",
                "Guts",
                "Moxie"
            ]
        }
    },
    {
        name: "Sneasel",
        formes: {
            regular: [
                "Inner Focus",
                "Keen Eye",
                "Pickpocket"
            ]
        }
    },
    {
        name: "Teddiursa",
        formes: {
            regular: [
                "Pickup",
                "Quick Feet",
                "Honey Gather"
            ]
        }
    },
    {
        name: "Ursaring",
        formes: {
            regular: [
                "Guts",
                "Quick Feet",
                "Unnerve"
            ]
        }
    },
    {
        name: "Slugma",
        formes: {
            regular: [
                "Magma Armor",
                "Flame Body",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Magcargo",
        formes: {
            regular: [
                "Magma Armor",
                "Flame Body",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Swinub",
        formes: {
            regular: [
                "Oblivious",
                "Snow Cloak",
                "Thick Fat"
            ]
        }
    },
    {
        name: "Piloswine",
        formes: {
            regular: [
                "Oblivious",
                "Snow Cloak",
                "Thick Fat"
            ]
        }
    },
    {
        name: "Corsola",
        formes: {
            regular: [
                "Hustle",
                "Natural Cure",
                "Regenerator"
            ]
        }
    },
    {
        name: "Remoraid",
        formes: {
            regular: [
                "Hustle",
                "Sniper",
                "Moody"
            ]
        }
    },
    {
        name: "Octillery",
        formes: {
            regular: [
                "Suction Cups",
                "Sniper",
                "Moody"
            ]
        }
    },
    {
        name: "Delibird",
        formes: {
            regular: [
                "Vital Spirit",
                "Hustle",
                "Insomnia"
            ]
        }
    },
    {
        name: "Mantine",
        formes: {
            regular: [
                "Swift Swim",
                "Water Absorb",
                "Water Veil"
            ]
        }
    },
    {
        name: "Skarmory",
        formes: {
            regular: [
                "Keen Eye",
                "Sturdy",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Houndour",
        formes: {
            regular: [
                "Early Bird",
                "Flash Fire",
                "Unnerve"
            ]
        }
    },
    {
        name: "Houndoom",
        formes: {
            regular: [
                "Early Bird",
                "Flash Fire",
                "Unnerve"
            ]
        }
    },
    {
        name: "Kingdra",
        formes: {
            regular: [
                "Swift Swim",
                "Sniper",
                "Damp"
            ]
        }
    },
    {
        name: "Phanpy",
        formes: {
            regular: [
                "Pickup",
                "Sand Veil"
            ]
        }
    },
    {
        name: "Donphan",
        formes: {
            regular: [
                "Sturdy",
                "Sand Veil"
            ]
        }
    },
    {
        name: "Porygon2",
        formes: {
            regular: [
                "Trace",
                "Download",
                "Analytic"
            ]
        }
    },
    {
        name: "Stantler",
        formes: {
            regular: [
                "Intimidate",
                "Frisk",
                "Sap Sipper"
            ]
        }
    },
    {
        name: "Smeargle",
        formes: {
            regular: [
                "Own Tempo",
                "Technician",
                "Moody"
            ]
        }
    },
    {
        name: "Tyrogue",
        formes: {
            regular: [
                "Guts",
                "Steadfast",
                "Vital Spirit"
            ]
        }
    },
    {
        name: "Hitmontop",
        formes: {
            regular: [
                "Intimidate",
                "Technician",
                "Steadfast"
            ]
        }
    },
    {
        name: "Smoochum",
        formes: {
            regular: [
                "Oblivious",
                "Forewarn",
                "Hydration"
            ]
        }
    },
    {
        name: "Elekid",
        formes: {
            regular: [
                "Static",
                "Vital Spirit"
            ]
        }
    },
    {
        name: "Magby",
        formes: {
            regular: [
                "Flame Body",
                "Vital Spirit"
            ]
        }
    },
    {
        name: "Miltank",
        formes: {
            regular: [
                "Thick Fat",
                "Scrappy",
                "Sap Sipper"
            ]
        }
    },
    {
        name: "Blissey",
        formes: {
            regular: [
                "Natural Cure",
                "Serene Grace",
                "Healer"
            ]
        }
    },
    {
        name: "Raikou",
        formes: {
            regular: [
                "Pressure",
                "Volt Absorb"
            ]
        }
    },
    {
        name: "Entei",
        formes: {
            regular: [
                "Pressure",
                "Flash Fire"
            ]
        }
    },
    {
        name: "Suicune",
        formes: {
            regular: [
                "Pressure",
                "Water Absorb"
            ]
        }
    },
    {
        name: "Larvitar",
        formes: {
            regular: [
                "Guts",
                "Sand Veil"
            ]
        }
    },
    {
        name: "Pupitar",
        formes: {
            regular: [
                "Shed Skin"
            ]
        }
    },
    {
        name: "Tyranitar",
        formes: {
            regular: [
                "Sand Stream",
                "Unnerve"
            ]
        }
    },
    {
        name: "Lugia",
        formes: {
            regular: [
                "Pressure",
                "Multiscale"
            ]
        }
    },
    {
        name: "Ho-Oh",
        formes: {
            regular: [
                "Pressure",
                "Regenerator"
            ]
        }
    },
    {
        name: "Celebi",
        formes: {
            regular: [
                "Natural Cure"
            ]
        }
    },
    {
        name: "Treecko",
        formes: {
            regular: [
                "Overgrow",
                "Unburden"
            ]
        }
    },
    {
        name: "Grovyle",
        formes: {
            regular: [
                "Overgrow",
                "Unburden"
            ]
        }
    },
    {
        name: "Sceptile",
        formes: {
            regular: [
                "Overgrow",
                "Unburden"
            ]
        }
    },
    {
        name: "Torchic",
        formes: {
            regular: [
                "Blaze",
                "Speed Boost"
            ]
        }
    },
    {
        name: "Combusken",
        formes: {
            regular: [
                "Blaze",
                "Speed Boost"
            ]
        }
    },
    {
        name: "Blaziken",
        formes: {
            regular: [
                "Blaze",
                "Speed Boost"
            ]
        }
    },
    {
        name: "Mudkip",
        formes: {
            regular: [
                "Torrent",
                "Damp"
            ]
        }
    },
    {
        name: "Marshtomp",
        formes: {
            regular: [
                "Torrent",
                "Damp"
            ]
        }
    },
    {
        name: "Swampert",
        formes: {
            regular: [
                "Torrent",
                "Damp"
            ]
        }
    },
    {
        name: "Poochyena",
        formes: {
            regular: [
                "Run Away",
                "Quick Feet",
                "Rattled"
            ]
        }
    },
    {
        name: "Mightyena",
        formes: {
            regular: [
                "Intimidate",
                "Quick Feet",
                "Moxie"
            ]
        }
    },
    {
        name: "Zigzagoon",
        formes: {
            regular: [
                "Pickup",
                "Gluttony",
                "Quick Feet"
            ]
        }
    },
    {
        name: "Linoone",
        formes: {
            regular: [
                "Pickup",
                "Gluttony",
                "Quick Feet"
            ]
        }
    },
    {
        name: "Wurmple",
        formes: {
            regular: [
                "Shield Dust",
                "Run Away"
            ]
        }
    },
    {
        name: "Silcoon",
        formes: {
            regular: [
                "Shed Skin"
            ]
        }
    },
    {
        name: "Beautifly",
        formes: {
            regular: [
                "Swarm",
                "Rivalry"
            ]
        }
    },
    {
        name: "Cascoon",
        formes: {
            regular: [
                "Shed Skin"
            ]
        }
    },
    {
        name: "Dustox",
        formes: {
            regular: [
                "Shield Dust",
                "Compound Eyes"
            ]
        }
    },
    {
        name: "Lotad",
        formes: {
            regular: [
                "Swift Swim",
                "Rain Dish",
                "Own Tempo"
            ]
        }
    },
    {
        name: "Lombre",
        formes: {
            regular: [
                "Swift Swim",
                "Rain Dish",
                "Own Tempo"
            ]
        }
    },
    {
        name: "Ludicolo",
        formes: {
            regular: [
                "Swift Swim",
                "Rain Dish",
                "Own Tempo"
            ]
        }
    },
    {
        name: "Seedot",
        formes: {
            regular: [
                "Chlorophyll",
                "Early Bird",
                "Pickpocket"
            ]
        }
    },
    {
        name: "Nuzleaf",
        formes: {
            regular: [
                "Chlorophyll",
                "Early Bird",
                "Pickpocket"
            ]
        }
    },
    {
        name: "Shiftry",
        formes: {
            regular: [
                "Chlorophyll",
                "Early Bird",
                "Pickpocket"
            ]
        }
    },
    {
        name: "Taillow",
        formes: {
            regular: [
                "Guts",
                "Scrappy"
            ]
        }
    },
    {
        name: "Swellow",
        formes: {
            regular: [
                "Guts",
                "Scrappy"
            ]
        }
    },
    {
        name: "Wingull",
        formes: {
            regular: [
                "Keen Eye",
                "Rain Dish"
            ]
        }
    },
    {
        name: "Pelipper",
        formes: {
            regular: [
                "Keen Eye",
                "Rain Dish"
            ]
        }
    },
    {
        name: "Ralts",
        formes: {
            regular: [
                "Synchronize",
                "Trace",
                "Telepathy"
            ]
        }
    },
    {
        name: "Kirlia",
        formes: {
            regular: [
                "Synchronize",
                "Trace",
                "Telepathy"
            ]
        }
    },
    {
        name: "Gardevoir",
        formes: {
            regular: [
                "Synchronize",
                "Trace",
                "Telepathy"
            ]
        }
    },
    {
        name: "Surskit",
        formes: {
            regular: [
                "Swift Swim",
                "Rain Dish"
            ]
        }
    },
    {
        name: "Masquerain",
        formes: {
            regular: [
                "Intimidate",
                "Unnerve"
            ]
        }
    },
    {
        name: "Shroomish",
        formes: {
            regular: [
                "Effect Spore",
                "Poison Heal",
                "Quick Feet"
            ]
        }
    },
    {
        name: "Breloom",
        formes: {
            regular: [
                "Effect Spore",
                "Poison Heal",
                "Technician"
            ]
        }
    },
    {
        name: "Slakoth",
        formes: {
            regular: [
                "Truant"
            ]
        }
    },
    {
        name: "Vigoroth",
        formes: {
            regular: [
                "Vital Spirit"
            ]
        }
    },
    {
        name: "Slaking",
        formes: {
            regular: [
                "Truant"
            ]
        }
    },
    {
        name: "Nincada",
        formes: {
            regular: [
                "Compound Eyes",
                "Run Away"
            ]
        }
    },
    {
        name: "Ninjask",
        formes: {
            regular: [
                "Speed Boost",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Shedinja",
        formes: {
            regular: [
                "Wonder Guard",
                "Wonder Guard"
            ]
        }
    },
    {
        name: "Whismur",
        formes: {
            regular: [
                "Soundproof",
                "Rattled"
            ]
        }
    },
    {
        name: "Loudred",
        formes: {
            regular: [
                "Soundproof",
                "Scrappy"
            ]
        }
    },
    {
        name: "Exploud",
        formes: {
            regular: [
                "Soundproof",
                "Scrappy"
            ]
        }
    },
    {
        name: "Makuhita",
        formes: {
            regular: [
                "Thick Fat",
                "Guts",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Hariyama",
        formes: {
            regular: [
                "Thick Fat",
                "Guts",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Azurill",
        formes: {
            regular: [
                "Thick Fat",
                "Huge Power",
                "Sap Sipper"
            ]
        }
    },
    {
        name: "Nosepass",
        formes: {
            regular: [
                "Sturdy",
                "Magnet Pull",
                "Sand Force"
            ]
        }
    },
    {
        name: "Skitty",
        formes: {
            regular: [
                "Cute Charm",
                "Normalize",
                "Wonder Skin"
            ]
        }
    },
    {
        name: "Delcatty",
        formes: {
            regular: [
                "Cute Charm",
                "Normalize",
                "Wonder Skin"
            ]
        }
    },
    {
        name: "Sableye",
        formes: {
            regular: [
                "Keen Eye",
                "Stall",
                "Prankster"
            ]
        }
    },
    {
        name: "Mawile",
        formes: {
            regular: [
                "Hyper Cutter",
                "Intimidate",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Aron",
        formes: {
            regular: [
                "Sturdy",
                "Rock Head",
                "Heavy Metal"
            ]
        }
    },
    {
        name: "Lairon",
        formes: {
            regular: [
                "Sturdy",
                "Rock Head",
                "Heavy Metal"
            ]
        }
    },
    {
        name: "Aggron",
        formes: {
            regular: [
                "Sturdy",
                "Rock Head",
                "Heavy Metal"
            ]
        }
    },
    {
        name: "Meditite",
        formes: {
            regular: [
                "Pure Power",
                "Telepathy"
            ]
        }
    },
    {
        name: "Medicham",
        formes: {
            regular: [
                "Pure Power",
                "Telepathy"
            ]
        }
    },
    {
        name: "Electrike",
        formes: {
            regular: [
                "Static",
                "Lightning Rod",
                "Minus"
            ]
        }
    },
    {
        name: "Manectric",
        formes: {
            regular: [
                "Static",
                "Lightning Rod",
                "Minus"
            ]
        }
    },
    {
        name: "Plusle",
        formes: {
            regular: [
                "Plus",
                "Lightning Rod"
            ]
        }
    },
    {
        name: "Minun",
        formes: {
            regular: [
                "Minus",
                "Volt Absorb"
            ]
        }
    },
    {
        name: "Volbeat",
        formes: {
            regular: [
                "Illuminate",
                "Swarm",
                "Prankster"
            ]
        }
    },
    {
        name: "Illumise",
        formes: {
            regular: [
                "Oblivious",
                "Tinted Lens",
                "Prankster"
            ]
        }
    },
    {
        name: "Roselia",
        formes: {
            regular: [
                "Natural Cure",
                "Poison Point",
                "Leaf Guard"
            ]
        }
    },
    {
        name: "Gulpin",
        formes: {
            regular: [
                "Liquid Ooze",
                "Sticky Hold",
                "Gluttony"
            ]
        }
    },
    {
        name: "Swalot",
        formes: {
            regular: [
                "Liquid Ooze",
                "Sticky Hold",
                "Gluttony"
            ]
        }
    },
    {
        name: "Carvanha",
        formes: {
            regular: [
                "Rough Skin",
                "Speed Boost"
            ]
        }
    },
    {
        name: "Sharpedo",
        formes: {
            regular: [
                "Rough Skin",
                "Speed Boost"
            ]
        }
    },
    {
        name: "Wailmer",
        formes: {
            regular: [
                "Water Veil",
                "Oblivious",
                "Pressure"
            ]
        }
    },
    {
        name: "Wailord",
        formes: {
            regular: [
                "Water Veil",
                "Oblivious",
                "Pressure"
            ]
        }
    },
    {
        name: "Numel",
        formes: {
            regular: [
                "Oblivious",
                "Simple",
                "Own Tempo"
            ]
        }
    },
    {
        name: "Camerupt",
        formes: {
            regular: [
                "Magma Armor",
                "Solid Rock",
                "Anger Point"
            ]
        }
    },
    {
        name: "Torkoal",
        formes: {
            regular: [
                "White Smoke",
                "Shell Armor"
            ]
        }
    },
    {
        name: "Spoink",
        formes: {
            regular: [
                "Thick Fat",
                "Own Tempo",
                "Gluttony"
            ]
        }
    },
    {
        name: "Grumpig",
        formes: {
            regular: [
                "Thick Fat",
                "Own Tempo",
                "Gluttony"
            ]
        }
    },
    {
        name: "Spinda",
        formes: {
            regular: [
                "Own Tempo",
                "Tangled Feet",
                "Contrary"
            ]
        }
    },
    {
        name: "Trapinch",
        formes: {
            regular: [
                "Hyper Cutter",
                "Arena Trap",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Vibrava",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Flygon",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Cacnea",
        formes: {
            regular: [
                "Sand Veil",
                "Water Absorb"
            ]
        }
    },
    {
        name: "Cacturne",
        formes: {
            regular: [
                "Sand Veil",
                "Water Absorb"
            ]
        }
    },
    {
        name: "Swablu",
        formes: {
            regular: [
                "Natural Cure",
                "Cloud Nine"
            ]
        }
    },
    {
        name: "Altaria",
        formes: {
            regular: [
                "Natural Cure",
                "Cloud Nine"
            ]
        }
    },
    {
        name: "Zangoose",
        formes: {
            regular: [
                "Immunity",
                "Toxic Boost"
            ]
        }
    },
    {
        name: "Seviper",
        formes: {
            regular: [
                "Shed Skin",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Lunatone",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Solrock",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Barboach",
        formes: {
            regular: [
                "Oblivious",
                "Anticipation",
                "Hydration"
            ]
        }
    },
    {
        name: "Whiscash",
        formes: {
            regular: [
                "Oblivious",
                "Anticipation",
                "Hydration"
            ]
        }
    },
    {
        name: "Corphish",
        formes: {
            regular: [
                "Hyper Cutter",
                "Shell Armor",
                "Adaptability"
            ]
        }
    },
    {
        name: "Crawdaunt",
        formes: {
            regular: [
                "Hyper Cutter",
                "Shell Armor",
                "Adaptability"
            ]
        }
    },
    {
        name: "Baltoy",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Claydol",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Lileep",
        formes: {
            regular: [
                "Suction Cups",
                "Storm Drain"
            ]
        }
    },
    {
        name: "Cradily",
        formes: {
            regular: [
                "Suction Cups",
                "Storm Drain"
            ]
        }
    },
    {
        name: "Anorith",
        formes: {
            regular: [
                "Battle Armor",
                "Swift Swim"
            ]
        }
    },
    {
        name: "Armaldo",
        formes: {
            regular: [
                "Battle Armor",
                "Swift Swim"
            ]
        }
    },
    {
        name: "Feebas",
        formes: {
            regular: [
                "Swift Swim",
                "Oblivious",
                "Adaptability"
            ]
        }
    },
    {
        name: "Milotic",
        formes: {
            regular: [
                "Marvel Scale",
                "Competitive",
                "Cute Charm"
            ]
        }
    },
    {
        name: "Castform",
        formes: {
            regular: [
                "Forecast"
            ]
        }
    },
    {
        name: "Kecleon",
        formes: {
            regular: [
                "Color Change",
                "Protean"
            ]
        }
    },
    {
        name: "Shuppet",
        formes: {
            regular: [
                "Insomnia",
                "Frisk",
                "Cursed Body"
            ]
        }
    },
    {
        name: "Banette",
        formes: {
            regular: [
                "Insomnia",
                "Frisk",
                "Cursed Body"
            ]
        }
    },
    {
        name: "Duskull",
        formes: {
            regular: [
                "Levitate",
                "Frisk"
            ]
        }
    },
    {
        name: "Dusclops",
        formes: {
            regular: [
                "Pressure",
                "Frisk"
            ]
        }
    },
    {
        name: "Tropius",
        formes: {
            regular: [
                "Chlorophyll",
                "Solar Power",
                "Harvest"
            ]
        }
    },
    {
        name: "Chimecho",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Absol",
        formes: {
            regular: [
                "Pressure",
                "Super Luck",
                "Justified"
            ]
        }
    },
    {
        name: "Wynaut",
        formes: {
            regular: [
                "Shadow Tag",
                "Telepathy"
            ]
        }
    },
    {
        name: "Snorunt",
        formes: {
            regular: [
                "Inner Focus",
                "Ice Body",
                "Moody"
            ]
        }
    },
    {
        name: "Glalie",
        formes: {
            regular: [
                "Inner Focus",
                "Ice Body",
                "Moody"
            ]
        }
    },
    {
        name: "Spheal",
        formes: {
            regular: [
                "Thick Fat",
                "Ice Body",
                "Oblivious"
            ]
        }
    },
    {
        name: "Sealeo",
        formes: {
            regular: [
                "Thick Fat",
                "Ice Body",
                "Oblivious"
            ]
        }
    },
    {
        name: "Walrein",
        formes: {
            regular: [
                "Thick Fat",
                "Ice Body",
                "Oblivious"
            ]
        }
    },
    {
        name: "Clamperl",
        formes: {
            regular: [
                "Shell Armor",
                "Rattled"
            ]
        }
    },
    {
        name: "Huntail",
        formes: {
            regular: [
                "Swift Swim",
                "Water Veil"
            ]
        }
    },
    {
        name: "Gorebyss",
        formes: {
            regular: [
                "Swift Swim",
                "Hydration"
            ]
        }
    },
    {
        name: "Relicanth",
        formes: {
            regular: [
                "Swift Swim",
                "Rock Head",
                "Sturdy"
            ]
        }
    },
    {
        name: "Luvdisc",
        formes: {
            regular: [
                "Swift Swim",
                "Hydration"
            ]
        }
    },
    {
        name: "Bagon",
        formes: {
            regular: [
                "Rock Head",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Shelgon",
        formes: {
            regular: [
                "Rock Head",
                "Overcoat"
            ]
        }
    },
    {
        name: "Salamence",
        formes: {
            regular: [
                "Intimidate",
                "Moxie"
            ]
        }
    },
    {
        name: "Beldum",
        formes: {
            regular: [
                "Clear Body",
                "Light Metal"
            ]
        }
    },
    {
        name: "Metang",
        formes: {
            regular: [
                "Clear Body",
                "Light Metal"
            ]
        }
    },
    {
        name: "Metagross",
        formes: {
            regular: [
                "Clear Body",
                "Light Metal"
            ]
        }
    },
    {
        name: "Regirock",
        formes: {
            regular: [
                "Clear Body",
                "Sturdy"
            ]
        }
    },
    {
        name: "Regice",
        formes: {
            regular: [
                "Clear Body",
                "Ice Body"
            ]
        }
    },
    {
        name: "Registeel",
        formes: {
            regular: [
                "Clear Body",
                "Light Metal"
            ]
        }
    },
    {
        name: "Latias",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Latios",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Kyogre",
        formes: {
            regular: [
                "Drizzle"
            ]
        }
    },
    {
        name: "Groudon",
        formes: {
            regular: [
                "Drought"
            ]
        }
    },
    {
        name: "Rayquaza",
        formes: {
            regular: [
                "Air Lock"
            ]
        }
    },
    {
        name: "Jirachi",
        formes: {
            regular: [
                "Serene Grace"
            ]
        }
    },
    {
        name: "Deoxys",
        formes: {
            "Normal Forme": [
                "Pressure"
            ],
            "Attack Forme": [
                "Pressure"
            ],
            "Defense Forme": [
                "Pressure"
            ],
            "Speed Forme": [
                "Pressure"
            ]
        }
    },
    {
        name: "Turtwig",
        formes: {
            regular: [
                "Overgrow",
                "Shell Armor"
            ]
        }
    },
    {
        name: "Grotle",
        formes: {
            regular: [
                "Overgrow",
                "Shell Armor"
            ]
        }
    },
    {
        name: "Torterra",
        formes: {
            regular: [
                "Overgrow",
                "Shell Armor"
            ]
        }
    },
    {
        name: "Chimchar",
        formes: {
            regular: [
                "Blaze",
                "Iron Fist"
            ]
        }
    },
    {
        name: "Monferno",
        formes: {
            regular: [
                "Blaze",
                "Iron Fist"
            ]
        }
    },
    {
        name: "Infernape",
        formes: {
            regular: [
                "Blaze",
                "Iron Fist"
            ]
        }
    },
    {
        name: "Piplup",
        formes: {
            regular: [
                "Torrent",
                "Defiant"
            ]
        }
    },
    {
        name: "Prinplup",
        formes: {
            regular: [
                "Torrent",
                "Defiant"
            ]
        }
    },
    {
        name: "Empoleon",
        formes: {
            regular: [
                "Torrent",
                "Defiant"
            ]
        }
    },
    {
        name: "Starly",
        formes: {
            regular: [
                "Keen Eye",
                "Reckless"
            ]
        }
    },
    {
        name: "Staravia",
        formes: {
            regular: [
                "Intimidate",
                "Reckless"
            ]
        }
    },
    {
        name: "Staraptor",
        formes: {
            regular: [
                "Intimidate",
                "Reckless"
            ]
        }
    },
    {
        name: "Bidoof",
        formes: {
            regular: [
                "Simple",
                "Unaware",
                "Moody"
            ]
        }
    },
    {
        name: "Bibarel",
        formes: {
            regular: [
                "Simple",
                "Unaware",
                "Moody"
            ]
        }
    },
    {
        name: "Kricketot",
        formes: {
            regular: [
                "Shed Skin",
                "Run Away"
            ]
        }
    },
    {
        name: "Kricketune",
        formes: {
            regular: [
                "Swarm",
                "Technician"
            ]
        }
    },
    {
        name: "Shinx",
        formes: {
            regular: [
                "Rivalry",
                "Intimidate",
                "Guts"
            ]
        }
    },
    {
        name: "Luxio",
        formes: {
            regular: [
                "Rivalry",
                "Intimidate",
                "Guts"
            ]
        }
    },
    {
        name: "Luxray",
        formes: {
            regular: [
                "Rivalry",
                "Intimidate",
                "Guts"
            ]
        }
    },
    {
        name: "Budew",
        formes: {
            regular: [
                "Natural Cure",
                "Poison Point",
                "Leaf Guard"
            ]
        }
    },
    {
        name: "Roserade",
        formes: {
            regular: [
                "Natural Cure",
                "Poison Point",
                "Technician"
            ]
        }
    },
    {
        name: "Cranidos",
        formes: {
            regular: [
                "Mold Breaker",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Rampardos",
        formes: {
            regular: [
                "Mold Breaker",
                "Sheer Force"
            ]
        }
    },
    {
        name: "Shieldon",
        formes: {
            regular: [
                "Sturdy",
                "Soundproof"
            ]
        }
    },
    {
        name: "Bastiodon",
        formes: {
            regular: [
                "Sturdy",
                "Soundproof"
            ]
        }
    },
    {
        name: "Burmy",
        formes: {
            "Plant Cloak": [
                "Shed Skin",
                "Overcoat"
            ],
            "Sandy Cloak": [
                "Shed Skin",
                "Overcoat"
            ],
            "Trash Cloak": [
                "Shed Skin",
                "Overcoat"
            ]
        }
    },
    {
        name: "Wormadam",
        formes: {
            "Plant Cloak": [
                "Shed Skin",
                "Overcoat"
            ],
            "Sandy Cloak": [
                "Shed Skin",
                "Overcoat"
            ],
            "Trash Cloak": [
                "Shed Skin",
                "Overcoat"
            ]
        }
    },
    {
        name: "Mothim",
        formes: {
            regular: [
                "Swarm",
                "Tinted Lens"
            ]
        }
    },
    {
        name: "Combee",
        formes: {
            regular: [
                "Honey Gather",
                "Hustle"
            ]
        }
    },
    {
        name: "Vespiquen",
        formes: {
            regular: [
                "Pressure",
                "Unnerve"
            ]
        }
    },
    {
        name: "Pachirisu",
        formes: {
            regular: [
                "Run Away",
                "Pickup",
                "Volt Absorb"
            ]
        }
    },
    {
        name: "Buizel",
        formes: {
            regular: [
                "Swift Swim",
                "Water Veil"
            ]
        }
    },
    {
        name: "Floatzel",
        formes: {
            regular: [
                "Swift Swim",
                "Water Veil"
            ]
        }
    },
    {
        name: "Cherubi",
        formes: {
            regular: [
                "Chlorophyll"
            ]
        }
    },
    {
        name: "Cherrim",
        formes: {
            regular: [
                "Flower Gift"
            ]
        }
    },
    {
        name: "Shellos",
        formes: {
            regular: [
                "Sticky Hold",
                "Storm Drain",
                "Sand Force"
            ]
        }
    },
    {
        name: "Gastrodon",
        formes: {
            regular: [
                "Sticky Hold",
                "Storm Drain",
                "Sand Force"
            ]
        }
    },
    {
        name: "Ambipom",
        formes: {
            regular: [
                "Technician",
                "Pickup",
                "Skill Link"
            ]
        }
    },
    {
        name: "Drifloon",
        formes: {
            regular: [
                "Aftermath",
                "Unburden",
                "Flare Boost"
            ]
        }
    },
    {
        name: "Drifblim",
        formes: {
            regular: [
                "Aftermath",
                "Unburden",
                "Flare Boost"
            ]
        }
    },
    {
        name: "Buneary",
        formes: {
            regular: [
                "Run Away",
                "Klutz",
                "Limber"
            ]
        }
    },
    {
        name: "Lopunny",
        formes: {
            regular: [
                "Cute Charm",
                "Klutz",
                "Limber"
            ]
        }
    },
    {
        name: "Mismagius",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Honchkrow",
        formes: {
            regular: [
                "Insomnia",
                "Super Luck",
                "Moxie"
            ]
        }
    },
    {
        name: "Glameow",
        formes: {
            regular: [
                "Limber",
                "Own Tempo",
                "Keen Eye"
            ]
        }
    },
    {
        name: "Purugly",
        formes: {
            regular: [
                "Thick Fat",
                "Own Tempo",
                "Defiant"
            ]
        }
    },
    {
        name: "Chingling",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Stunky",
        formes: {
            regular: [
                "Stench",
                "Aftermath",
                "Keen Eye"
            ]
        }
    },
    {
        name: "Skuntank",
        formes: {
            regular: [
                "Stench",
                "Aftermath",
                "Keen Eye"
            ]
        }
    },
    {
        name: "Bronzor",
        formes: {
            regular: [
                "Levitate",
                "Heatproof",
                "Heavy Metal"
            ]
        }
    },
    {
        name: "Bronzong",
        formes: {
            regular: [
                "Levitate",
                "Heatproof",
                "Heavy Metal"
            ]
        }
    },
    {
        name: "Bonsly",
        formes: {
            regular: [
                "Sturdy",
                "Rock Head",
                "Rattled"
            ]
        }
    },
    {
        name: "Mime Jr.",
        formes: {
            regular: [
                "Soundproof",
                "Filter",
                "Technician"
            ]
        }
    },
    {
        name: "Happiny",
        formes: {
            regular: [
                "Natural Cure",
                "Serene Grace",
                "Friend Guard"
            ]
        }
    },
    {
        name: "Chatot",
        formes: {
            regular: [
                "Keen Eye",
                "Tangled Feet",
                "Big Pecks"
            ]
        }
    },
    {
        name: "Spiritomb",
        formes: {
            regular: [
                "Pressure",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Gible",
        formes: {
            regular: [
                "Sand Veil",
                "Rough Skin"
            ]
        }
    },
    {
        name: "Gabite",
        formes: {
            regular: [
                "Sand Veil",
                "Rough Skin"
            ]
        }
    },
    {
        name: "Garchomp",
        formes: {
            regular: [
                "Sand Veil",
                "Rough Skin"
            ]
        }
    },
    {
        name: "Munchlax",
        formes: {
            regular: [
                "Pickup",
                "Thick Fat",
                "Gluttony"
            ]
        }
    },
    {
        name: "Riolu",
        formes: {
            regular: [
                "Steadfast",
                "Inner Focus",
                "Prankster"
            ]
        }
    },
    {
        name: "Lucario",
        formes: {
            regular: [
                "Steadfast",
                "Inner Focus",
                "Justified"
            ]
        }
    },
    {
        name: "Hippopotas",
        formes: {
            regular: [
                "Sand Stream",
                "Sand Force"
            ]
        }
    },
    {
        name: "Hippowdon",
        formes: {
            regular: [
                "Sand Stream",
                "Sand Force"
            ]
        }
    },
    {
        name: "Skorupi",
        formes: {
            regular: [
                "Battle Armor",
                "Sniper",
                "Keen Eye"
            ]
        }
    },
    {
        name: "Drapion",
        formes: {
            regular: [
                "Battle Armor",
                "Sniper",
                "Keen Eye"
            ]
        }
    },
    {
        name: "Croagunk",
        formes: {
            regular: [
                "Anticipation",
                "Dry Skin",
                "Poison Touch"
            ]
        }
    },
    {
        name: "Toxicroak",
        formes: {
            regular: [
                "Anticipation",
                "Dry Skin",
                "Poison Touch"
            ]
        }
    },
    {
        name: "Carnivine",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Finneon",
        formes: {
            regular: [
                "Swift Swim",
                "Storm Drain",
                "Water Veil"
            ]
        }
    },
    {
        name: "Lumineon",
        formes: {
            regular: [
                "Swift Swim",
                "Storm Drain",
                "Water Veil"
            ]
        }
    },
    {
        name: "Mantyke",
        formes: {
            regular: [
                "Swift Swim",
                "Water Absorb",
                "Water Veil"
            ]
        }
    },
    {
        name: "Snover",
        formes: {
            regular: [
                "Snow Warning",
                "Soundproof"
            ]
        }
    },
    {
        name: "Abomasnow",
        formes: {
            regular: [
                "Snow Warning",
                "Soundproof"
            ]
        }
    },
    {
        name: "Weavile",
        formes: {
            regular: [
                "Pressure",
                "Pickpocket"
            ]
        }
    },
    {
        name: "Magnezone",
        formes: {
            regular: [
                "Magnet Pull",
                "Sturdy",
                "Analytic"
            ]
        }
    },
    {
        name: "Lickilicky",
        formes: {
            regular: [
                "Own Tempo",
                "Oblivious",
                "Cloud Nine"
            ]
        }
    },
    {
        name: "Rhyperior",
        formes: {
            regular: [
                "Lightning Rod",
                "Solid Rock",
                "Reckless"
            ]
        }
    },
    {
        name: "Tangrowth",
        formes: {
            regular: [
                "Chlorophyll",
                "Leaf Guard",
                "Regenerator"
            ]
        }
    },
    {
        name: "Electivire",
        formes: {
            regular: [
                "Motor Drive",
                "Vital Spirit"
            ]
        }
    },
    {
        name: "Magmortar",
        formes: {
            regular: [
                "Flame Body",
                "Vital Spirit"
            ]
        }
    },
    {
        name: "Togekiss",
        formes: {
            regular: [
                "Hustle",
                "Serene Grace",
                "Super Luck"
            ]
        }
    },
    {
        name: "Yanmega",
        formes: {
            regular: [
                "Speed Boost",
                "Tinted Lens",
                "Frisk"
            ]
        }
    },
    {
        name: "Leafeon",
        formes: {
            regular: [
                "Leaf Guard",
                "Chlorophyll"
            ]
        }
    },
    {
        name: "Glaceon",
        formes: {
            regular: [
                "Snow Cloak",
                "Ice Body"
            ]
        }
    },
    {
        name: "Gliscor",
        formes: {
            regular: [
                "Hyper Cutter",
                "Sand Veil",
                "Poison Heal"
            ]
        }
    },
    {
        name: "Mamoswine",
        formes: {
            regular: [
                "Oblivious",
                "Snow Cloak",
                "Thick Fat"
            ]
        }
    },
    {
        name: "Porygon-Z",
        formes: {
            regular: [
                "Adaptability",
                "Download",
                "Analytic"
            ]
        }
    },
    {
        name: "Gallade",
        formes: {
            regular: [
                "Steadfast",
                "Justified"
            ]
        }
    },
    {
        name: "Probopass",
        formes: {
            regular: [
                "Sturdy",
                "Magnet Pull",
                "Sand Force"
            ]
        }
    },
    {
        name: "Dusknoir",
        formes: {
            regular: [
                "Pressure",
                "Frisk"
            ]
        }
    },
    {
        name: "Froslass",
        formes: {
            regular: [
                "Snow Cloak",
                "Cursed Body"
            ]
        }
    },
    {
        name: "Rotom",
        formes: {
            "Normal Rotom": [
                "Levitate"
            ],
            "Heat Rotom": [
                "Levitate"
            ],
            "Wash Rotom": [
                "Levitate"
            ],
            "Frost Rotom": [
                "Levitate"
            ],
            "Fan Rotom": [
                "Levitate"
            ],
            "Mow Rotom": [
                "Levitate"
            ]
        }
    },
    {
        name: "Uxie",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Mesprit",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Azelf",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Dialga",
        formes: {
            regular: [
                "Pressure",
                "Telepathy"
            ]
        }
    },
    {
        name: "Palkia",
        formes: {
            regular: [
                "Pressure",
                "Telepathy"
            ]
        }
    },
    {
        name: "Heatran",
        formes: {
            regular: [
                "Flash Fire",
                "Flame Body"
            ]
        }
    },
    {
        name: "Regigigas",
        formes: {
            regular: [
                "Slow Start"
            ]
        }
    },
    {
        name: "Giratina",
        formes: {
            "Altered Forme": [
                "Pressure",
                "Telepathy"
            ],
            "Origin Forme": [
                "Levitate"
            ]
        }
    },
    {
        name: "Cresselia",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Phione",
        formes: {
            regular: [
                "Hydration"
            ]
        }
    },
    {
        name: "Manaphy",
        formes: {
            regular: [
                "Hydration"
            ]
        }
    },
    {
        name: "Darkrai",
        formes: {
            regular: [
                "Bad Dreams"
            ]
        }
    },
    {
        name: "Shaymin",
        formes: {
            "Land Forme": [
                "Natural Cure"
            ],
            "Sky Forme": [
                "Serene Grace"
            ]
        }
    },
    {
        name: "Arceus",
        formes: {
            regular: [
                "Multitype"
            ]
        }
    },
    {
        name: "Victini",
        formes: {
            regular: [
                "Victory Star"
            ]
        }
    },
    {
        name: "Snivy",
        formes: {
            regular: [
                "Overgrow",
                "Contrary"
            ]
        }
    },
    {
        name: "Servine",
        formes: {
            regular: [
                "Overgrow",
                "Contrary"
            ]
        }
    },
    {
        name: "Serperior",
        formes: {
            regular: [
                "Overgrow",
                "Contrary"
            ]
        }
    },
    {
        name: "Tepig",
        formes: {
            regular: [
                "Blaze",
                "Thick Fat"
            ]
        }
    },
    {
        name: "Pignite",
        formes: {
            regular: [
                "Blaze",
                "Thick Fat"
            ]
        }
    },
    {
        name: "Emboar",
        formes: {
            regular: [
                "Blaze",
                "Reckless"
            ]
        }
    },
    {
        name: "Oshawott",
        formes: {
            regular: [
                "Torrent",
                "Shell Armor"
            ]
        }
    },
    {
        name: "Dewott",
        formes: {
            regular: [
                "Torrent",
                "Shell Armor"
            ]
        }
    },
    {
        name: "Samurott",
        formes: {
            regular: [
                "Torrent",
                "Shell Armor"
            ]
        }
    },
    {
        name: "Patrat",
        formes: {
            regular: [
                "Run Away",
                "Keen Eye",
                "Analytic"
            ]
        }
    },
    {
        name: "Watchog",
        formes: {
            regular: [
                "Illuminate",
                "Keen Eye",
                "Analytic"
            ]
        }
    },
    {
        name: "Lillipup",
        formes: {
            regular: [
                "Vital Spirit",
                "Pickup",
                "Run Away"
            ]
        }
    },
    {
        name: "Herdier",
        formes: {
            regular: [
                "Intimidate",
                "Sand Rush",
                "Scrappy"
            ]
        }
    },
    {
        name: "Stoutland",
        formes: {
            regular: [
                "Intimidate",
                "Sand Rush",
                "Scrappy"
            ]
        }
    },
    {
        name: "Purrloin",
        formes: {
            regular: [
                "Limber",
                "Unburden",
                "Prankster"
            ]
        }
    },
    {
        name: "Liepard",
        formes: {
            regular: [
                "Limber",
                "Unburden",
                "Prankster"
            ]
        }
    },
    {
        name: "Pansage",
        formes: {
            regular: [
                "Gluttony",
                "Overgrow"
            ]
        }
    },
    {
        name: "Simisage",
        formes: {
            regular: [
                "Gluttony",
                "Overgrow"
            ]
        }
    },
    {
        name: "Pansear",
        formes: {
            regular: [
                "Gluttony",
                "Blaze"
            ]
        }
    },
    {
        name: "Simisear",
        formes: {
            regular: [
                "Gluttony",
                "Blaze"
            ]
        }
    },
    {
        name: "Panpour",
        formes: {
            regular: [
                "Gluttony",
                "Torrent"
            ]
        }
    },
    {
        name: "Simipour",
        formes: {
            regular: [
                "Gluttony",
                "Torrent"
            ]
        }
    },
    {
        name: "Munna",
        formes: {
            regular: [
                "Forewarn",
                "Synchronize",
                "Telepathy"
            ]
        }
    },
    {
        name: "Musharna",
        formes: {
            regular: [
                "Forewarn",
                "Synchronize",
                "Telepathy"
            ]
        }
    },
    {
        name: "Pidove",
        formes: {
            regular: [
                "Big Pecks",
                "Super Luck",
                "Rivalry"
            ]
        }
    },
    {
        name: "Tranquill",
        formes: {
            regular: [
                "Big Pecks",
                "Super Luck",
                "Rivalry"
            ]
        }
    },
    {
        name: "Unfezant",
        formes: {
            regular: [
                "Big Pecks",
                "Super Luck",
                "Rivalry"
            ]
        }
    },
    {
        name: "Blitzle",
        formes: {
            regular: [
                "Lightning Rod",
                "Motor Drive",
                "Sap Sipper"
            ]
        }
    },
    {
        name: "Zebstrika",
        formes: {
            regular: [
                "Lightning Rod",
                "Motor Drive",
                "Sap Sipper"
            ]
        }
    },
    {
        name: "Roggenrola",
        formes: {
            regular: [
                "Sturdy",
                "Sand Force"
            ]
        }
    },
    {
        name: "Boldore",
        formes: {
            regular: [
                "Sturdy",
                "Sand Force"
            ]
        }
    },
    {
        name: "Gigalith",
        formes: {
            regular: [
                "Sturdy",
                "Sand Force"
            ]
        }
    },
    {
        name: "Woobat",
        formes: {
            regular: [
                "Unaware",
                "Klutz",
                "Simple"
            ]
        }
    },
    {
        name: "Swoobat",
        formes: {
            regular: [
                "Unaware",
                "Klutz",
                "Simple"
            ]
        }
    },
    {
        name: "Drilbur",
        formes: {
            regular: [
                "Sand Rush",
                "Sand Force",
                "Mold Breaker"
            ]
        }
    },
    {
        name: "Excadrill",
        formes: {
            regular: [
                "Sand Rush",
                "Sand Force",
                "Mold Breaker"
            ]
        }
    },
    {
        name: "Audino",
        formes: {
            regular: [
                "Healer",
                "Regenerator",
                "Klutz"
            ]
        }
    },
    {
        name: "Timburr",
        formes: {
            regular: [
                "Guts",
                "Sheer Force",
                "Iron Fist"
            ]
        }
    },
    {
        name: "Gurdurr",
        formes: {
            regular: [
                "Guts",
                "Sheer Force",
                "Iron Fist"
            ]
        }
    },
    {
        name: "Conkeldurr",
        formes: {
            regular: [
                "Guts",
                "Sheer Force",
                "Iron Fist"
            ]
        }
    },
    {
        name: "Tympole",
        formes: {
            regular: [
                "Swift Swim",
                "Hydration",
                "Water Absorb"
            ]
        }
    },
    {
        name: "Palpitoad",
        formes: {
            regular: [
                "Swift Swim",
                "Hydration",
                "Water Absorb"
            ]
        }
    },
    {
        name: "Seismitoad",
        formes: {
            regular: [
                "Swift Swim",
                "Poison Touch",
                "Water Absorb"
            ]
        }
    },
    {
        name: "Throh",
        formes: {
            regular: [
                "Guts",
                "Inner Focus",
                "Mold Breaker"
            ]
        }
    },
    {
        name: "Sawk",
        formes: {
            regular: [
                "Sturdy",
                "Inner Focus",
                "Mold Breaker"
            ]
        }
    },
    {
        name: "Sewaddle",
        formes: {
            regular: [
                "Swarm",
                "Chlorophyll",
                "Overcoat"
            ]
        }
    },
    {
        name: "Swadloon",
        formes: {
            regular: [
                "Leaf Guard",
                "Chlorophyll",
                "Overcoat"
            ]
        }
    },
    {
        name: "Leavanny",
        formes: {
            regular: [
                "Swarm",
                "Chlorophyll",
                "Overcoat"
            ]
        }
    },
    {
        name: "Venipede",
        formes: {
            regular: [
                "Poison Point",
                "Swarm",
                "Speed Boost"
            ]
        }
    },
    {
        name: "Whirlipede",
        formes: {
            regular: [
                "Poison Point",
                "Swarm",
                "Speed Boost"
            ]
        }
    },
    {
        name: "Scolipede",
        formes: {
            regular: [
                "Poison Point",
                "Swarm",
                "Speed Boost"
            ]
        }
    },
    {
        name: "Cottonee",
        formes: {
            regular: [
                "Prankster",
                "Infiltrator",
                "Chlorophyll"
            ]
        }
    },
    {
        name: "Whimsicott",
        formes: {
            regular: [
                "Prankster",
                "Infiltrator",
                "Chlorophyll"
            ]
        }
    },
    {
        name: "Petilil",
        formes: {
            regular: [
                "Chlorophyll",
                "Own Tempo",
                "Leaf Guard"
            ]
        }
    },
    {
        name: "Lilligant",
        formes: {
            regular: [
                "Chlorophyll",
                "Own Tempo",
                "Leaf Guard"
            ]
        }
    },
    {
        name: "Basculin",
        formes: {
            "Red-Striped": [
                "Reckless",
                "Adaptability",
                "Mold Breaker"
            ],
            "Blue-Striped": [
                "Rock Head",
                "Adaptability",
                "Mold Breaker"
            ]
        }
    },
    {
        name: "Sandile",
        formes: {
            regular: [
                "Intimidate",
                "Moxie",
                "Anger Point"
            ]
        }
    },
    {
        name: "Krokorok",
        formes: {
            regular: [
                "Intimidate",
                "Moxie",
                "Anger Point"
            ]
        }
    },
    {
        name: "Krookodile",
        formes: {
            regular: [
                "Intimidate",
                "Moxie",
                "Anger Point"
            ]
        }
    },
    {
        name: "Darumaka",
        formes: {
            regular: [
                "Hustle",
                "Inner Focus"
            ]
        }
    },
    {
        name: "Darmanitan",
        formes: {
            regular: [
                "Sheer Force",
                "Zen Mode"
            ]
        }
    },
    {
        name: "Maractus",
        formes: {
            regular: [
                "Water Absorb",
                "Chlorophyll",
                "Storm Drain"
            ]
        }
    },
    {
        name: "Dwebble",
        formes: {
            regular: [
                "Sturdy",
                "Shell Armor",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Crustle",
        formes: {
            regular: [
                "Sturdy",
                "Shell Armor",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Scraggy",
        formes: {
            regular: [
                "Shed Skin",
                "Moxie",
                "Intimidate"
            ]
        }
    },
    {
        name: "Scrafty",
        formes: {
            regular: [
                "Shed Skin",
                "Moxie",
                "Intimidate"
            ]
        }
    },
    {
        name: "Sigilyph",
        formes: {
            regular: [
                "Wonder Skin",
                "Magic Guard",
                "Tinted Lens"
            ]
        }
    },
    {
        name: "Yamask",
        formes: {
            regular: [
                "Mummy"
            ]
        }
    },
    {
        name: "Cofagrigus",
        formes: {
            regular: [
                "Mummy"
            ]
        }
    },
    {
        name: "Tirtouga",
        formes: {
            regular: [
                "Solid Rock",
                "Sturdy",
                "Swift Swim"
            ]
        }
    },
    {
        name: "Carracosta",
        formes: {
            regular: [
                "Solid Rock",
                "Sturdy",
                "Swift Swim"
            ]
        }
    },
    {
        name: "Archen",
        formes: {
            regular: [
                "Defeatist"
            ]
        }
    },
    {
        name: "Archeops",
        formes: {
            regular: [
                "Defeatist"
            ]
        }
    },
    {
        name: "Trubbish",
        formes: {
            regular: [
                "Stench",
                "Sticky Hold",
                "Aftermath"
            ]
        }
    },
    {
        name: "Garbodor",
        formes: {
            regular: [
                "Stench",
                "Weak Armor",
                "Aftermath"
            ]
        }
    },
    {
        name: "Zorua",
        formes: {
            regular: [
                "Illusion"
            ]
        }
    },
    {
        name: "Zoroark",
        formes: {
            regular: [
                "Illusion"
            ]
        }
    },
    {
        name: "Minccino",
        formes: {
            regular: [
                "Cute Charm",
                "Technician",
                "Skill Link"
            ]
        }
    },
    {
        name: "Cinccino",
        formes: {
            regular: [
                "Cute Charm",
                "Technician",
                "Skill Link"
            ]
        }
    },
    {
        name: "Gothita",
        formes: {
            regular: [
                "Frisk",
                "Competitive",
                "Shadow Tag"
            ]
        }
    },
    {
        name: "Gothorita",
        formes: {
            regular: [
                "Frisk",
                "Competitive",
                "Shadow Tag"
            ]
        }
    },
    {
        name: "Gothitelle",
        formes: {
            regular: [
                "Frisk",
                "Competitive",
                "Shadow Tag"
            ]
        }
    },
    {
        name: "Solosis",
        formes: {
            regular: [
                "Overcoat",
                "Magic Guard",
                "Regenerator"
            ]
        }
    },
    {
        name: "Duosion",
        formes: {
            regular: [
                "Overcoat",
                "Magic Guard",
                "Regenerator"
            ]
        }
    },
    {
        name: "Reuniclus",
        formes: {
            regular: [
                "Overcoat",
                "Magic Guard",
                "Regenerator"
            ]
        }
    },
    {
        name: "Ducklett",
        formes: {
            regular: [
                "Keen Eye",
                "Big Pecks",
                "Hydration"
            ]
        }
    },
    {
        name: "Swanna",
        formes: {
            regular: [
                "Keen Eye",
                "Big Pecks",
                "Hydration"
            ]
        }
    },
    {
        name: "Vanillite",
        formes: {
            regular: [
                "Ice Body",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Vanillish",
        formes: {
            regular: [
                "Ice Body",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Vanilluxe",
        formes: {
            regular: [
                "Ice Body",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Deerling",
        formes: {
            regular: [
                "Chlorophyll",
                "Sap Sipper",
                "Serene Grace"
            ]
        }
    },
    {
        name: "Sawsbuck",
        formes: {
            regular: [
                "Chlorophyll",
                "Sap Sipper",
                "Serene Grace"
            ]
        }
    },
    {
        name: "Emolga",
        formes: {
            regular: [
                "Static",
                "Motor Drive"
            ]
        }
    },
    {
        name: "Karrablast",
        formes: {
            regular: [
                "Swarm",
                "Shed Skin",
                "No Guard"
            ]
        }
    },
    {
        name: "Escavalier",
        formes: {
            regular: [
                "Swarm",
                "Shell Armor",
                "Overcoat"
            ]
        }
    },
    {
        name: "Foongus",
        formes: {
            regular: [
                "Effect Spore",
                "Regenerator"
            ]
        }
    },
    {
        name: "Amoonguss",
        formes: {
            regular: [
                "Effect Spore",
                "Regenerator"
            ]
        }
    },
    {
        name: "Frillish",
        formes: {
            regular: [
                "Water Absorb",
                "Cursed Body",
                "Damp"
            ]
        }
    },
    {
        name: "Jellicent",
        formes: {
            regular: [
                "Water Absorb",
                "Cursed Body",
                "Damp"
            ]
        }
    },
    {
        name: "Alomomola",
        formes: {
            regular: [
                "Healer",
                "Hydration",
                "Regenerator"
            ]
        }
    },
    {
        name: "Joltik",
        formes: {
            regular: [
                "Compound Eyes",
                "Unnerve",
                "Swarm"
            ]
        }
    },
    {
        name: "Galvantula",
        formes: {
            regular: [
                "Compound Eyes",
                "Unnerve",
                "Swarm"
            ]
        }
    },
    {
        name: "Ferroseed",
        formes: {
            regular: [
                "Iron Barbs"
            ]
        }
    },
    {
        name: "Ferrothorn",
        formes: {
            regular: [
                "Iron Barbs",
                "Anticipation"
            ]
        }
    },
    {
        name: "Klink",
        formes: {
            regular: [
                "Plus",
                "Minus",
                "Clear Body"
            ]
        }
    },
    {
        name: "Klang",
        formes: {
            regular: [
                "Plus",
                "Minus",
                "Clear Body"
            ]
        }
    },
    {
        name: "Klinklang",
        formes: {
            regular: [
                "Plus",
                "Minus",
                "Clear Body"
            ]
        }
    },
    {
        name: "Tynamo",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Eelektrik",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Eelektross",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Elgyem",
        formes: {
            regular: [
                "Telepathy",
                "Synchronize",
                "Analytic"
            ]
        }
    },
    {
        name: "Beheeyem",
        formes: {
            regular: [
                "Telepathy",
                "Synchronize",
                "Analytic"
            ]
        }
    },
    {
        name: "Litwick",
        formes: {
            regular: [
                "Flash Fire",
                "Flame Body",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Lampent",
        formes: {
            regular: [
                "Flash Fire",
                "Flame Body",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Chandelure",
        formes: {
            regular: [
                "Flash Fire",
                "Flame Body",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Axew",
        formes: {
            regular: [
                "Rivalry",
                "Mold Breaker",
                "Unnerve"
            ]
        }
    },
    {
        name: "Fraxure",
        formes: {
            regular: [
                "Rivalry",
                "Mold Breaker",
                "Unnerve"
            ]
        }
    },
    {
        name: "Haxorus",
        formes: {
            regular: [
                "Rivalry",
                "Mold Breaker",
                "Unnerve"
            ]
        }
    },
    {
        name: "Cubchoo",
        formes: {
            regular: [
                "Snow Cloak",
                "Rattled"
            ]
        }
    },
    {
        name: "Beartic",
        formes: {
            regular: [
                "Snow Cloak",
                "Swift Swim"
            ]
        }
    },
    {
        name: "Cryogonal",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Shelmet",
        formes: {
            regular: [
                "Hydration",
                "Shell Armor",
                "Overcoat"
            ]
        }
    },
    {
        name: "Accelgor",
        formes: {
            regular: [
                "Hydration",
                "Sticky Hold",
                "Unburden"
            ]
        }
    },
    {
        name: "Stunfisk",
        formes: {
            regular: [
                "Static",
                "Limber",
                "Sand Veil"
            ]
        }
    },
    {
        name: "Mienfoo",
        formes: {
            regular: [
                "Inner Focus",
                "Regenerator",
                "Reckless"
            ]
        }
    },
    {
        name: "Mienshao",
        formes: {
            regular: [
                "Inner Focus",
                "Regenerator",
                "Reckless"
            ]
        }
    },
    {
        name: "Druddigon",
        formes: {
            regular: [
                "Rough Skin",
                "Sheer Force",
                "Mold Breaker"
            ]
        }
    },
    {
        name: "Golett",
        formes: {
            regular: [
                "Iron Fist",
                "Klutz",
                "No Guard"
            ]
        }
    },
    {
        name: "Golurk",
        formes: {
            regular: [
                "Iron Fist",
                "Klutz",
                "No Guard"
            ]
        }
    },
    {
        name: "Pawniard",
        formes: {
            regular: [
                "Defiant",
                "Inner Focus",
                "Pressure"
            ]
        }
    },
    {
        name: "Bisharp",
        formes: {
            regular: [
                "Defiant",
                "Inner Focus",
                "Pressure"
            ]
        }
    },
    {
        name: "Bouffalant",
        formes: {
            regular: [
                "Reckless",
                "Sap Sipper",
                "Soundproof"
            ]
        }
    },
    {
        name: "Rufflet",
        formes: {
            regular: [
                "Keen Eye",
                "Sheer Force",
                "Hustle"
            ]
        }
    },
    {
        name: "Braviary",
        formes: {
            regular: [
                "Keen Eye",
                "Sheer Force",
                "Defiant"
            ]
        }
    },
    {
        name: "Vullaby",
        formes: {
            regular: [
                "Big Pecks",
                "Overcoat",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Mandibuzz",
        formes: {
            regular: [
                "Big Pecks",
                "Overcoat",
                "Weak Armor"
            ]
        }
    },
    {
        name: "Heatmor",
        formes: {
            regular: [
                "Gluttony",
                "Flash Fire",
                "White Smoke"
            ]
        }
    },
    {
        name: "Durant",
        formes: {
            regular: [
                "Swarm",
                "Hustle",
                "Truant"
            ]
        }
    },
    {
        name: "Deino",
        formes: {
            regular: [
                "Hustle"
            ]
        }
    },
    {
        name: "Zweilous",
        formes: {
            regular: [
                "Hustle"
            ]
        }
    },
    {
        name: "Hydreigon",
        formes: {
            regular: [
                "Levitate"
            ]
        }
    },
    {
        name: "Larvesta",
        formes: {
            regular: [
                "Flame Body",
                "Swarm"
            ]
        }
    },
    {
        name: "Volcarona",
        formes: {
            regular: [
                "Flame Body",
                "Swarm"
            ]
        }
    },
    {
        name: "Cobalion",
        formes: {
            regular: [
                "Justified"
            ]
        }
    },
    {
        name: "Terrakion",
        formes: {
            regular: [
                "Justified"
            ]
        }
    },
    {
        name: "Virizion",
        formes: {
            regular: [
                "Justified"
            ]
        }
    },
    {
        name: "Tornadus",
        formes: {
            "Incarnate Forme": [
                "Prankster",
                "Defiant"
            ],
            "Therian Forme": [
                "Regenerator"
            ]
        }
    },
    {
        name: "Thundurus",
        formes: {
            "Incarnate Forme": [
                "Prankster",
                "Defiant"
            ],
            "Therian Forme": [
                "Volt Absorb"
            ]
        }
    },
    {
        name: "Reshiram",
        formes: {
            regular: [
                "Turboblaze"
            ]
        }
    },
    {
        name: "Zekrom",
        formes: {
            regular: [
                "Teravolt"
            ]
        }
    },
    {
        name: "Landorus",
        formes: {
            "Incarnate Forme": [
                "Sand Force",
                "Sheer Force"
            ],
            "Therian Forme": [
                "Intimidate"
            ]
        }
    },
    {
        name: "Kyurem",
        formes: {
            "Regular": [
                "Pressure"
            ],
            "White Kyurem": [
                "Turboblaze"
            ],
            "Black Kyurem": [
                "Teravolt"
            ]
        }
    },
    {
        name: "Keldeo",
        formes: {
            regular: [
                "Justified"
            ]
        }
    },
    {
        name: "Meloetta",
        formes: {
            regular: [
                "Serene Grace"
            ]
        }
    },
    {
        name: "Genesect",
        formes: {
            regular: [
                "Download"
            ]
        }
    },
    {
        name: "Chespin",
        formes: {
            regular: [
                "Overgrow",
                "Bulletproof"
            ]
        }
    },
    {
        name: "Quilladin",
        formes: {
            regular: [
                "Overgrow",
                "Bulletproof"
            ]
        }
    },
    {
        name: "Chesnaught",
        formes: {
            regular: [
                "Overgrow",
                "Bulletproof"
            ]
        }
    },
    {
        name: "Fennekin",
        formes: {
            regular: [
                "Blaze",
                "Magician"
            ]
        }
    },
    {
        name: "Braixen",
        formes: {
            regular: [
                "Blaze",
                "Magician"
            ]
        }
    },
    {
        name: "Delphox",
        formes: {
            regular: [
                "Blaze",
                "Magician"
            ]
        }
    },
    {
        name: "Froakie",
        formes: {
            regular: [
                "Torrent",
                "Protean"
            ]
        }
    },
    {
        name: "Frogadier",
        formes: {
            regular: [
                "Torrent",
                "Protean"
            ]
        }
    },
    {
        name: "Greninja",
        formes: {
            regular: [
                "Torrent",
                "Protean"
            ]
        }
    },
    {
        name: "Bunnelby",
        formes: {
            regular: [
                "Pickup",
                "Cheek Pouch",
                "Huge Power"
            ]
        }
    },
    {
        name: "Diggersby",
        formes: {
            regular: [
                "Pickup",
                "Cheek Pouch",
                "Huge Power"
            ]
        }
    },
    {
        name: "Fletchling",
        formes: {
            regular: [
                "Big Pecks",
                "Gale Wings"
            ]
        }
    },
    {
        name: "Fletchinder",
        formes: {
            regular: [
                "Flame Body",
                "Gale Wings"
            ]
        }
    },
    {
        name: "Talonflame",
        formes: {
            regular: [
                "Flame Body",
                " Gale Wings"
            ]
        }
    },
    {
        name: "Scatterbug",
        formes: {
            regular: [
                "Shield Dust",
                "Compound Eyes",
                "Friend Guard"
            ]
        }
    },
    {
        name: "Spewpa",
        formes: {
            regular: [
                "Shed Skin",
                "Friend Guard"
            ]
        }
    },
    {
        name: "Vivillon",
        formes: {
            regular: [
                "Shield Dust",
                "Compound Eyes",
                "Friend Guard"
            ]
        }
    },
    {
        name: "Litleo",
        formes: {
            regular: [
                "Rivalry",
                "Unnerve",
                "Moxie"
            ]
        }
    },
    {
        name: "Pyroar",
        formes: {
            regular: [
                "Rivalry",
                "Unnerve",
                "Moxie"
            ]
        }
    },
    {
        name: "Flabébé",
        formes: {
            regular: [
                "Flower Veil",
                "Symbiosis"
            ]
        }
    },
    {
        name: "Floette",
        formes: {
            regular: [
                "Flower Veil",
                "Symbiosis"
            ]
        }
    },
    {
        name: "Florges",
        formes: {
            regular: [
                "Flower Veil",
                "Symbiosis"
            ]
        }
    },
    {
        name: "Skiddo",
        formes: {
            regular: [
                "Sap Sipper",
                "Grass Pelt"
            ]
        }
    },
    {
        name: "Gogoat",
        formes: {
            regular: [
                "Sap Sipper",
                "Grass Pelt"
            ]
        }
    },
    {
        name: "Pancham",
        formes: {
            regular: [
                "Iron Fist",
                "Mold Breaker",
                "Scrappy"
            ]
        }
    },
    {
        name: "Pangoro",
        formes: {
            regular: [
                "Iron Fist",
                "Mold Breaker",
                "Scrappy"
            ]
        }
    },
    {
        name: "Furfrou",
        formes: {
            regular: [
                "Fur Coat"
            ]
        }
    },
    {
        name: "Espurr",
        formes: {
            regular: [
                "Keen Eye",
                "Infiltrator",
                "Own Tempo"
            ]
        }
    },
    {
        name: "Meowstic",
        formes: {
            regular: [
                "Keen Eye",
                "Infiltrator",
                "Prankster"
            ]
        }
    },
    {
        name: "Honedge",
        formes: {
            regular: [
                "No Guard"
            ]
        }
    },
    {
        name: "Doublade",
        formes: {
            regular: [
                "No Guard"
            ]
        }
    },
    {
        name: "Aegislash",
        formes: {
            regular: [
                "Stance Change"
            ]
        }
    },
    {
        name: "Spritzee",
        formes: {
            regular: [
                "Healer",
                "Aroma Veil"
            ]
        }
    },
    {
        name: "Aromatisse",
        formes: {
            regular: [
                "Healer",
                "Aroma Veil"
            ]
        }
    },
    {
        name: "Swirlix",
        formes: {
            regular: [
                "Sweet Veil",
                "Unburden"
            ]
        }
    },
    {
        name: "Slurpuff",
        formes: {
            regular: [
                "Sweet Veil",
                "Unburden"
            ]
        }
    },
    {
        name: "Inkay",
        formes: {
            regular: [
                "Contrary",
                "Suction Cups",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Malamar",
        formes: {
            regular: [
                "Contrary",
                "Suction Cups",
                "Infiltrator"
            ]
        }
    },
    {
        name: "Binacle",
        formes: {
            regular: [
                "Tough Claws",
                "Sniper",
                "Pickpocket"
            ]
        }
    },
    {
        name: "Barbaracle",
        formes: {
            regular: [
                "Tough Claws",
                " Sniper",
                "Pickpocket"
            ]
        }
    },
    {
        name: "Skrelp",
        formes: {
            regular: [
                "Poison Point",
                "Poison Touch",
                "Adaptability"
            ]
        }
    },
    {
        name: "Dragalge",
        formes: {
            regular: [
                "Poison Point",
                "Poison Touch",
                "Adaptability"
            ]
        }
    },
    {
        name: "Clauncher",
        formes: {
            regular: [
                "Mega Launcher"
            ]
        }
    },
    {
        name: "Clawitzer",
        formes: {
            regular: [
                "Mega Launcher"
            ]
        }
    },
    {
        name: "Helioptile",
        formes: {
            regular: [
                "Dry Skin",
                " Sand Veil",
                "Solar Power"
            ]
        }
    },
    {
        name: "Heliolisk",
        formes: {
            regular: [
                "Dry Skin",
                " Sand Veil",
                "Solar Power"
            ]
        }
    },
    {
        name: "Tyrunt",
        formes: {
            regular: [
                "Strong Jaw",
                "Rock Head"
            ]
        }
    },
    {
        name: "Tyrantrum",
        formes: {
            regular: [
                "Strong Jaw",
                "Rock Head"
            ]
        }
    },
    {
        name: "Amaura",
        formes: {
            regular: [
                "Refrigerate",
                "Snow Warning"
            ]
        }
    },
    {
        name: "Aurorus",
        formes: {
            regular: [
                "Refrigerate",
                "Snow Warning"
            ]
        }
    },
    {
        name: "Sylveon",
        formes: {
            regular: [
                "Cute Charm",
                "Pixilate"
            ]
        }
    },
    {
        name: "Hawlucha",
        formes: {
            regular: [
                "Unburden",
                "Limber",
                "Mold Breaker"
            ]
        }
    },
    {
        name: "Dedenne",
        formes: {
            regular: [
                "Cheek Pouch",
                "Pickup",
                "Plus"
            ]
        }
    },
    {
        name: "Carbink",
        formes: {
            regular: [
                "Clear Body",
                "Sturdy"
            ]
        }
    },
    {
        name: "Goomy",
        formes: {
            regular: [
                "Sap Sipper",
                "Hydration",
                "Gooey"
            ]
        }
    },
    {
        name: "Sliggoo",
        formes: {
            regular: [
                "Sap Sipper",
                "Hydration",
                "Gooey"
            ]
        }
    },
    {
        name: "Goodra",
        formes: {
            regular: [
                "Sap Sipper",
                "Hydration",
                "Gooey"
            ]
        }
    },
    {
        name: "Klefki",
        formes: {
            regular: [
                "Prankster",
                "Magician"
            ]
        }
    },
    {
        name: "Phantump",
        formes: {
            regular: [
                "Natural Cure",
                "Frisk",
                "Harvest"
            ]
        }
    },
    {
        name: "Trevenant",
        formes: {
            regular: [
                "Natural Cure",
                "Frisk",
                "Harvest"
            ]
        }
    },
    {
        name: "Pumpkaboo",
        formes: {
            "Small": [
                "Pickup",
                "Frisk",
                "Insomnia"
            ],
            "Average": [
                "Pickup",
                "Frisk",
                "Insomnia"
            ],
            "Large": [
                "Pickup",
                "Frisk",
                "Insomnia"
            ],
            "Super": [
                "Pickup",
                "Frisk",
                "Insomnia"
            ]
        }
    },
    {
        name: "Gourgeist",
        formes: {
            "Small": [
                "Pickup",
                "Frisk",
                "Insomnia"
            ],
            "Average": [
                "Pickup",
                "Frisk",
                "Insomnia"
            ],
            "Large": [
                "Pickup",
                "Frisk",
                "Insomnia"
            ],
            "Super": [
                "Pickup",
                "Frisk",
                "Insomnia"
            ]
        }
    },
    {
        name: "Bergmite",
        formes: {
            regular: [
                "Own Tempo",
                "Ice Body",
                "Sturdy"
            ]
        }
    },
    {
        name: "Avalugg",
        formes: {
            regular: [
                "Own Tempo",
                "Ice Body",
                "Sturdy"
            ]
        }
    },
    {
        name: "Noibat",
        formes: {
            regular: [
                "Frisk",
                "Infiltrator",
                "Telepathy"
            ]
        }
    },
    {
        name: "Noivern",
        formes: {
            regular: [
                "Frisk",
                "Infiltrator",
                "Telepathy"
            ]
        }
    },
    {
        name: "Xerneas",
        formes: {
            regular: [
                "Fairy Aura"
            ]
        }
    },
    {
        name: "Yveltal",
        formes: {
            regular: [
                "Dark Aura"
            ]
        }
    },
    {
        name: "Zygarde",
        formes: {
            regular: [
                "Aura Break"
            ]
        }
    },
    {
        name: "Diancie",
        formes: {
            regular: [
                "Clear Body"
            ]
        }
    }
]