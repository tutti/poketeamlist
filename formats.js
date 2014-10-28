/*
 *
 * This is a list of formats that a team can be validated for.
 * This includes only official formats starting with generation 6;
 * if you want to play by Smogon's rules, ask Smogon.
 *
 * Each format is identified by a key (e.g. "kalosdex"), containing
 * a single function named "validate". This takes three arguments:
 * a pokédex number, an item name, and the forme's name (""
 * for no forme). If the pokémon is valid, this function must
 * return either true or a string. If a string is returned, it will
 * be displayed underneath the pokémon's data on the print sheet.
 * If the pokémon is not valid, false must be returned. The format
 * must also contain a "name" attribute, being the format's display
 * name.
 *
 * NOTE: This ONLY validates individual pokémon based on their species,
 * item and forme. This will NOT validate the whole team.
 *
 * Kalos lists are "stolen" from Bulbapedia:
    var info = []
    $(".coastaldex tbody tr").each(function(index, elm) {
            var ndex_number = Number($(this).find("td:nth-child(1)").text().trim().substr(1))
            var dex_number = Number($(this).find("td:nth-child(2)").text().trim().substr(1))
            info[ndex_number] = dex_number
    })
    copy(info)
 */

var pokedex = {
    kalos_central: [
        0, // There's nothing at index 0 here
        650, 651, 652, // Chespin
        653, 654, 655, // Fennekin
        656, 657, 658, // Froakie
        659, 660, // Bunnelby
        263, 264, //Zigzagoon
        661, 662, 663, // Fletchling
        16, 17, 18, // Pidgey
        664, 665, 666, // Scatterbug
        10, 11, 12, // Caterpie
        13, 14, 15, // Weedle
        511, 512, // Pansage
        513, 514, // Pansear
        515, 516, // Panpour
        172, 25, 26, // Pichu
        399, 400, // Bidoof
        206, // Dunsparce
        298, 183, 184, // Azurill
        412, 413, 414, // Burmy
        283, 284, // Surskit
        129, 130, // Magikarp
        341, 342, // Corphish
        118, 119, // Goldeen
        318, 319, // Carvanha
        667, 668, // Litleo
        54, 55, // Psyduck
        83, // Farfetch'd
        447, 448, // Riolu
        280, 281, 282, 475, // Ralts
        669, 670, 671, // Flabébé
        406, 315, 407, // Budew
        165, 166, // Ledyba
        415, 416, // Combee
        300, 301, // Skitty
        1, 2, 3, // Bulbasaur
        4, 5, 6, // Charmander
        7, 8, 9, // Squirtle
        672, 673, // Skiddo
        674, 675, // Pancham
        676, // Furfrou
        84, 85, // Doduo
        311, // Plusle
        312, // Minun
        316, 317, // Gulpin
        559, 560, // Scraggy
        63, 64, 65, // Abra
        43, 44, 45, 182, // Oddish
        161, 162, // Sentret
        290, 291, 292, // Nincada
        677, 678, // Espurr
        352, // Kecleon
        679, 680, 681, // Honedge
        543, 544, 545, // Venipede
        531, // Audino
        235, // Smeargle
        453, 454, // Croagunk
        580, 581, // Ducklett
        682, 683, // Spritzee
        684, 685, // Swirlix
        313, // Volbeat
        314, // Illumise
        187, 188, 189, // Hoppip
        446, 143, // Munchlax
        293, 294, 295, // Whismur
        307, 308, // Meditite
        41, 42, 169, // Zubat
        610, 611, 612 // Axew
    ],
    kalos_coastal: [
        0, // There's nothing at index 0 here
        425, 426, // Drifloon
        619, 620, // Mienfoo
        335, // Zangoose
        336, // Seviper
        325, 326, // Spoink
        359, // Absol
        686, 687, // Inkay
        337, // Lunatone
        338, // Solrock
        371, 372, 373, // Bagon
        278, 279, // Wingull
        276, 277, // Taillow
        688, 689, // Binacle
        557, 558, // Dwebble
        72, 73, // Tentacool
        320, 321, // Wailmer
        370, // Luvdisc
        690, 691, // Skrelp
        692, 693, // Clauncher
        120, 121, // Staryu
        90, 91, // Shellder
        211, // Qwilfish
        116, 117, 230, // Horsea
        369, // Relicanth
        551, 552, 553, // Sandile
        694, 695, // Helioptile
        449, 450, // Hippopotas
        111, 112, 464, // Rhyhorn
        95, 208, // Onix
        527, 528, // Woobat
        66, 67, 68, // Machop
        104, 105, // Cubone
        115, // Kangaskhan
        303, // Mawile
        696, 697, // Tyrunt
        698, 699, // Amaura
        142, // Aerodactyl
        597, 598, // Ferroseed
        209, 210, // Snubbull
        309, 310, // Electrike
        228, 229, // Houndour
        133, 134, 135, 136, 196, 197,  470, 471, 700, // Eevee
        587, // Emolga
        193, 469, // Yanma
        701, // Hawlucha
        561, // Sigilyph
        622, 623, // Golett
        299, 476, // Nosepass
        296, 297, // Makuhita
        538, // Throh
        539, // Sawk
        396, 397, 398, // Starly
        434, 435, // Stunky
        29, 30, 31, // Nidoran (f)
        32, 33, 34, // Nidoran (m)
        702, // Dedenne
        433, 358, // Chingling
        439, 122, // Mime Jr.
        577, 578, 579, // Solosis
        360, 202, // Wynaut
        524, 525, 526, // Roggenrola
        302, // Sableye
        703, // Carbink
        128, // Tauros
        241, // Miltank
        179, 180, 181, // Mareep
        127, // Pinsir
        214, // Heracross
        417, // Pachirisu
        79, 80, 199, // Slowpoke
        102, 103, // Exeggcute
        441, // Chatot
        458, 226, // Mantyke
        366, 367, 368, // Clamperl
        223, 224, // Remoraid
        222, // Corsola
        170, 171, // Chinchou
        594, // Alomomola
        131, // Lapras
        144, // Articuno
        145, // Zapdos
        146 // Moltres
    ],
    kalos_mountain: [
        0, // There's nothing at index 0 here
        50, 51, // Diglett
        328, 329, 330, // Trapinch
        443, 444, 445, // Gible
        74, 75, 76, // Geodude
        218, 219, // Slugma
        213, // Shuckle
        451, 452, // Skorupi
        194, 195, // Wooper
        704, 705, 706, // Goomy
        588, 589, // Karrablast
        616, 617, // Shelmet
        69, 70, 71, // Bellsprout
        455, // Carnivine
        92, 93, 94, // Gastly
        60, 61, 62, 186, // Poliwag
        23, 24, // Ekans
        618, // Stunfisk
        339, 340, // Barboach
        509, 510, // Purrloin
        261, 262, // Poochyena
        504, 505, // Patrat
        624, 625, // Pawniard
        707, // Klefki
        198, 430, // Murkrow
        590, 591, // Foongus
        270, 271, 272, // Lotad
        418, 419, // Buizel
        550, // Basculin
        708, 709, // Phantump
        710, 711, // Pumpkaboo
        607, 608, 609, // Litwick
        479, // Rotom
        81, 82, 462, // Magnemite
        100, 101, // Voltorb
        568, 569, // Trubbish
        220, 221, 473, // Swinub
        712, 713, // Bergmite
        613, 614, // Cubchoo
        238, 124, // Smoochum
        582, 583, 584, // Vanillite
        459, 460, // Snover
        225, // Delibird
        215, 461, // Sneasel
        532, 533, 534, // Timburr
        324, // Torkoal
        27, 28, // Sandshrew
        304, 305, 306, // Aron
        246, 247, 248, // Larvitar
        631, // Heatmor
        632, // Durant
        167, 168, // Spinarak
        21, 22, // Spearow
        615, // Cryogonal
        227, // Skarmory
        714, 715, // Noibat
        207, 472, // Gligar
        163, 164, // Hoothoot
        174, 39, 40, // Igglybuff
        353, 354, // Shupper
        570, 571, // Zorua
        574, 575, 576, // Gothita
        438, 185, // Bonsly
        327, // Spinda
        216, 217, // Teddiursa
        108, 463, // Lickitung
        123, 212, // Scyther
        132, // Ditto
        333, 334, // Swablu
        621, // Druddigon
        633, 634, 635, // Deino
        147, 148, 149, // Dratini
        716, // Xerneas
        717, // Yveltal
        718, // Zygarde
        150 // Mewtwo
    ],
    hoenn: [
        0,
        252,
        253,
        254,
        255,
        256,
        257,
        258,
        259,
        260,
        261,
        262,
        263,
        264,
        265,
        266,
        267,
        268,
        269,
        270,
        271,
        272,
        273,
        274,
        275,
        276,
        277,
        278,
        279,
        280,
        281,
        282,
        283,
        284,
        285,
        286,
        287,
        288,
        289,
        63,
        64,
        65,
        290,
        291,
        292,
        293,
        294,
        295,
        296,
        297,
        118,
        119,
        129,
        130,
        298,
        183,
        184,
        74,
        75,
        76,
        299,
        300,
        301,
        41,
        42,
        169,
        72,
        73,
        302,
        303,
        304,
        305,
        306,
        66,
        67,
        68,
        307,
        308,
        309,
        310,
        311,
        312,
        81,
        82,
        100,
        101,
        313,
        314,
        43,
        44,
        45,
        182,
        84,
        85,
        315,
        316,
        317,
        318,
        319,
        320,
        321,
        322,
        323,
        218,
        219,
        324,
        88,
        89,
        109,
        110,
        325,
        326,
        27,
        28,
        327,
        227,
        328,
        329,
        330,
        331,
        332,
        333,
        334,
        335,
        336,
        337,
        338,
        339,
        340,
        341,
        342,
        343,
        344,
        345,
        346,
        347,
        348,
        174,
        39,
        40,
        349,
        350,
        351,
        120,
        121,
        352,
        353,
        354,
        355,
        356,
        357,
        358,
        359,
        37,
        38,
        172,
        25,
        26,
        54,
        55,
        360,
        202,
        177,
        178,
        203,
        231,
        232,
        127,
        214,
        111,
        112,
        361,
        362,
        363,
        364,
        365,
        366,
        367,
        368,
        369,
        222,
        170,
        171,
        370,
        116,
        117,
        230,
        371,
        372,
        373,
        374,
        375,
        376,
        377,
        378,
        379,
        380,
        381,
        382,
        383,
        384,
        385,
        386
    ]
}

Formats = {
    noformat: {
        name: "No format",
        validate: function(dexnum, itemname, forme) {
            return true
        }
    },
    hoenndex: {
        name: "Hoenn pokédex only",
        exclude: [382, 383, 384, 385, 386],
        validate: function(dexnum, itemname, forme) {
            if (this.exclude.indexOf(dexnum) != -1) return false
            if (pokedex.hoenn.indexOf(dexnum) != -1) return "Hoenn Pokédex #"+pokedex.hoenn.indexOf(dexnum)
            return false;
        }
    },
    standard2014: {
        name: "Kalos dex (2014 Standard)",
        exclude: [150, 716, 717, 718],
        validate: function(dexnum, itemname, forme) {
            if (this.exclude.indexOf(dexnum) != -1) return false
            if (pokedex.kalos_central.indexOf(dexnum) != -1) return "Central Kalos #"+pokedex.kalos_central.indexOf(dexnum)
            if (pokedex.kalos_coastal.indexOf(dexnum) != -1) return "Coastal Kalos #"+pokedex.kalos_coastal.indexOf(dexnum)
            if (pokedex.kalos_mountain.indexOf(dexnum) != -1) return "Mountain Kalos #"+pokedex.kalos_mountain.indexOf(dexnum)
            return false
        }
    },
    standard2013: {
        name: "2013 Standard",
        exclude: [150, 151, 249, 250, 251, 382, 383, 384, 385, 386, 441, 483, 484, 487, 489, 490, 491, 492, 493, 494, 643, 644, 646, 647, 648, 649],
        validate: function(dexnum, itemname, forme) {
            if (this.exclude.indexOf(dexnum) != -1) return false
            if (dexnum > 649) return false
            return true
        }
    }
}