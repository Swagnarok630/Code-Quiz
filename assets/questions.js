// List of all questions used for quiz

// Coding Questions
var codeQs = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", 
        "How To Meet Ladies", 
        "High Tech Machine Link", 
        "High Tech Mockup Language", 
        "HyperTech Module Law"],
        answer: "HyperText Markup Language",
        image: ""
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", 
        "Counter-Strike Stop", 
        "Creative Suite Sheets", 
        "Cascading Style Source", 
        "Central Science Scope"],
        answer: "Cascading Style Sheets",
        image: ""
    },
    {
        question: "Which command prompt would you use to create a new file?",
        options: ["Make", 
        "Touch", 
        "Create", 
        "New", 
        "Generate"],
        answer: "Touch",
        image: ""
    },
    {
        question: "What does ‘cd’ stand for when used in the command prompt?",
        options: ["Create Directory", 
        "Change Disk", 
        "Change Directory", 
        "Call Data", 
        "Checkout Directory"],
        answer: "Change Directory",
        image: ""
    },
    {
        question: "What is the proper tag to adding a line break element in HTML?",
        options: ["<linebreak>", 
        "<br>", 
        "<lb>", 
        "<break>", 
        "<line>"],
        answer: "<br>",
        image: ""
    },
    {
        question: "What method is used to generate a random number in JavaScript?",
        options: ["Math.floor();", 
        "Math.integer();", 
        "Math.random();", 
        "Math.number();", 
        "Mtah.decimal();"],
        answer: "Math.random();",
        image: ""
    },
    {
        question: "When linking an external script, in which part of the HTML document does it go?",
        options: ["<body>", 
        "<head>", 
        "<header>", 
        "<head> or <body>", 
        "<section>"],
        answer: "<head> or <body>",
        image: ""
    },
    {
        question: "Which of the following is not a JavaScript operator?",
        options: ["++", 
        "*=", 
        "**", 
        "%=", 
        "=/"],
        answer: "=/",
        image: ""
    },
    {
        question: "Which property can you add to your CSS code ensures that the style cannot be overwritten?",
        options: ["!paramount", 
        "!critical", 
        "!urgent", 
        "!important", 
        "!vital"],
        answer: "!important",
        image: ""
    },
    {
        question: "Which CSS property creates space around elements, inside of defined borders?",
        options: ["Margin", 
        "Border", 
        "Width", 
        "Height", 
        "Padding"],
        answer: "Padding",
        image: ""
    }
];

// Marvel questions
var marvelQs = [
    {
        question: "The original Avengers was founded by:",
        options: ["Captain America, Iron Man, Thor, Hulk, Hawkeye", 
        "Captain America, Iron Man, Thor, Ant-Man, Wasp", 
        "Iron Man, Thor, Hulk, Ant-Man, Wasp", 
        "Iron Man, Thor, Black Widow, Hawkeye, Captain America", 
        "Iron Man, Quicksilver, Scarlet Witch, Hawkeye, Black Widow"],
        answer: "Iron Man, Thor, Hulk, Ant-Man, Wasp",
        image: ""
    },
    {
        question: "What is Spider-Man’s secret (original) identity?",
        options: ["Peter Parker", 
        "Ben Reilly", 
        "Kaine Parker", 
        "Peter Ross", 
        "Ben Parker"],
        answer: "Peter Parker",
        image: ""
    },
    {
        question: "Name this character",
        options: ["Spider-Woman", 
        "Silk", 
        "Spider-Girl", 
        "Silkstress", 
        "Madame Web"],
        answer: "Silk",
        image: "assets/images/Silk.jpg"
    },
    {
        question: "Who of the following is a clone of Peter Parker Spider-Man?",
        options: ["Ben Parker", 
        "May Parker", 
        "April Parker", 
        "Ben Reilly", 
        "Mayday Parker"],
        answer: "Ben Reilly",
        image: ""
    },
    {
        question: "Which Earth is known as our prime and standard universe?",
        options: ["Earth-65", 
        "Earth-616", 
        "Earth-928", 
        "Earth-1610", 
        "Earth-13393"],
        answer: "Earth-616",
        image: ""
    },
    {
        question: "Who were the original mutants that made up the first X-Men?",
        options: ["Cyclops, Wolverine, Jean Grey, Storm, Gambit", 
        "Wolverine, Morph, Rogue, Beast, Jubilee", 
        "Phoenix, Cyclops, Wolverine, Iceman, Cable", 
        "Cyclops, Iceman, Angel, Beast, Marvel Girl", 
        "Wolverine, Colossus, Beast, Cyclops, White Queen"],
        answer: "Cyclops, Iceman, Angel, Beast, Marvel Girl",
        image: ""
    },
    {
        question: "Name this character",
        options: ["Wolverine", 
        "X-23", 
        "Talon", 
        "Clawdia", 
        "Honey Badger"],
        answer: "X-23",
        image: "assets/images/X-23.jpg"
    },
    {
        question: "Who are the original members of the Illuminati?",
        options: ["Professor X, Iron Man, Black Panther, Captain America, Mr. Fantastic, Thor", 
        "Dr. Strange, Mr. Fantastic, Professor X, Iron Man, Black Bolt, Namor", 
        "Mr. Fantastic, Bruce Banner, Iron Man, Black Panther, Nick Fury, Captain Britain", 
        "Black Panther, Beast, Yellowjacket, Iron Man, Professor X, Captain America", 
        "Medusa, Amadeus Cho, Mr. Fantastic, Namor, Thor, Black Bolt"],
        answer: "Dr. Strange, Mr. Fantastic, Professor X, Iron Man, Black Bolt, Namor",
        image: ""
    },
    {
        question: "Wolverine’s skeleton has been coated in what indestructible metal?",
        options: ["Adamantium", 
        "Vibranium", 
        "Carbonadium", 
        "Mysterium", 
        "Gravitonium"],
        answer: "Adamantium",
        image: ""
    },
    {
        question: "Name this character",
        options: ["Annihilus", 
        "Apocalypse", 
        "Thanos", 
        "Darkseid", 
        "Blastaar"],
        answer: "Thanos",
        image: "assets/images/Thanos.jpg"
    }
];

// King of Fighters questions
var kofQs = [
    {
        question: "Which of the following is not a story arc in The King of Fighters?",
        options: ["Orochi Saga", 
        "NESTS Chronicles", 
        "Rivals Saga", 
        "Tales of Ash", 
        "Shun’ei Saga"],
        answer: "Rivals Saga",
        image: ""
    },
    {
        question: "The new Shatter Strike mechanic in KOFXV is how advantageous/disadvantageous on block?",
        options: ["-10f", 
        "-5f", 
        "0f", 
        "+5f", 
        "+10f"],
        answer: "-10f",
        image: ""
    },
    {
        question: "Name this character",
        options: ["Seirah", 
        "Dolores", 
        "Mary", 
        "Vanessa", 
        "Liz"],
        answer: "Vanessa",
        image: "assets/images/Vanessa.png"
    },
    {
        question: "Which Sacred Treasures did Ash successfully steal?",
        options: ["The Yata Mirror and the Sword of Kusanagi", 
        "The Sword of Kusanagi and the Yasakani Jewel", 
        "The Yasakani Jewel and the Yata Mirror", 
        "All three of the Sacred Treasures", 
        "None of the Sacred Treasures"],
        answer: "The Yasakani Jewel and the Yata Mirror",
	    image: ""
    },
    {
        question: "Which character has won the most King of Fighters tournaments?",
        options: ["Benimaru Nikaido", 
        "Kyo Kusanagi", 
        "Iori Yagami", 
        "Terry Bogard", 
        "Kim Kaphwan"],
        answer: "Benimaru Nikaido",
	    image: ""
    },
    {
        question: "Name this character",
        options: ["Heavy D", 
        "Lucky Glauber", 
        "Alba Meira", 
        "Duck King", 
        "Richard Meyer"],
        answer: "Duck King",
	    image: "assets/images/Duck_King.png"
    },
    {
        question: "Which of these characters does not play in the Band of Fighters?",
        options: ["Athena", 
        "Chris", 
        "Terry", 
        "Iori", 
        "Kyo"],
        answer: "Chris",
	    image: ""
    },
    {
        question: "American Sports Team is a fan favorite team that people hope return, but what running gag always prevents their return?",
        options: ["Their invites always get lost in the mail", 
        "KOF host always forgets to invite American Sports Team", 
        "Their invite always gets stolen by another team", 
        "Brian Battler always fumbles and loses the invite", 
        "The American Sports Team never existed, they are but a myth…"],
        answer: "Their invite always gets stolen by another team",
	    image: ""
    },
    {
        question: "Which character has made an appearance and was playable by default in every KOF tournament thus far?",
        options: ["Athena Asamiya", 
        "Terry Bogard", 
        "Kyo Kusanagi", 
        "Ryo Sakazaki", 
        "Iori Yagami"],
        answer: "Athena Asamiya",
	    image: ""
    },
    {
        question: "Name this character",
        options: ["Ron", 
        "Mukai", 
        "Shion", 
        "Botan", 
        "Shroom"],
        answer: "Shion",
	    image: "assets/images/Shion.png"
    }
];

// Final Fantasy questions
var ffQs = [
    {
        question: "What lovable creature is recurring in the series that you may ride around on?",
        options: ["Tonberries", 
        "Chocobos", 
        "Malboros", 
        "Bombs", 
        "Cactuars"],
        answer: "Chocobos",
        image: ""
    },
    {
        question: "Which of the following is not an official mage job in the series?",
        options: ["White Mage", 
        "Black Mage", 
        "Red Mage", 
        "Blue Mage", 
        "Yellow Mage"],
        answer: "Yellow Mage",
        image: ""
    },
    {
        question: "Name this character",
        options: ["Yunalesca", 
        "Yuna", 
        "Lulu", 
        "Lululesca", 
        "Yunalulu"],
        answer: "Yunalesca",
        image: "assets/images/Yunalesca.jpg"
    },
    {
        question: "Who are the original Four Fiends in the series?",
        options: ["Scarmiglione, Cagnazzo, Barbariccia, Rubicante", 
        "Flamerus Rex, Ice Golem, Dualhead Hydra, Pazuzu", 
        "Genbu, Seiryu, Byakko, Suzaku", 
        "Lich, Marilith, Kraken, Tiamat", 
        "Shango, Cocytus, Impireo, Gehenna"],
        answer: "Lich, Marilith, Kraken, Tiamat",
	    image: ""
    },
    {
        question: "Not all the main titles of FF made it to North America the first round. Final Fantasy 1, 2, & 3 in NA are actually which FFs in Japan respectively?",
        options: ["1, 4, 6", 
        "1, 3, 5", 
        "1, 3, 6", 
        "1, 2, 4", 
        "1, 4, 5"],
        answer: "1, 4, 6",
	    image: ""
    },
    {
        question: "Name this character",
        options: ["Tifa Lockhart", 
        "Aerith Gainsborough", 
        "Celes Chere", 
        "Faris Scherwiz", 
        "Rinoa Heartilly"],
        answer: "Tifa Lockhart",
	    image: "assets/images/Tifa.jpg"
    },
    {
        question: "The creator of Final Fantasy has been heavily addicted to FFXIV lately. So much so, he’s designed his own clothing line in-game that he sells on the market board. What is the name of his clothing line?",
        options: ["MPrada", 
        "SakaGUCCI", 
        "Forever Fantasy", 
        "Dioraga", 
        "Gilvenchy"],
        answer: "SakaGUCCI",
	    image: ""
    },
    {
        question: "Which of these trios is considered to be The Warring Triad?",
        options: ["Ruby Weapon, Emerald Weapon, Diamond Weapon", 
        "Sophia the Goddess, Zurvan the Demon, Sephirot the Fiend", 
        "Magnai the Older, Sadu Heavensflame, Cirina of the Laughing Reeds", 
        "Hraesvelgr the Peaceful, Nidhogg the Enraged, Ratatoskr the Loved", 
        "Ultima Weapon, Atma Weapon, Omega Weapon"],
        answer: "Sophia the Goddess, Zurvan the Demon, Sephirot the Fiend",
	    image: ""
    },
    {
        question: "Name this character",
        options: ["Odin", 
        "Yojimbo", 
        "Gilgamesh", 
        "Ultros", 
        "Gaffgarion"],
        answer: "Gilgamesh",
	    image: "assets/images/Gilgamesh.jpg"
    },
    {
        question: "Which Final Fantasy is the best Final Fantasy of all time?",
        options: ["Final Fantasy V", 
        "Final Fantasy X", 
        "Final Fantasy VI", 
        "Final Fantasy XIV", 
        "Final Fantasy VII"],
        answer: "Final Fantasy VI",
	    image: ""
    }
];