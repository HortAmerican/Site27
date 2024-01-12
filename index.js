const Discord = require('discord.js');
const CLIENT = new Discord.Client();
const CONFIG = require('./config.json');
const fs = require('fs');
// const monnaie = require('./monnaie.json');

require('dotenv').config();

CLIENT.on('ready', async () =>
{
    console.log(`${CLIENT.user.username} : Je suis en ligne, prêt à être utilisé ...`);

    const STATUSES =
    [
        "Site-27 crée par hort ",
        "Soldat et Hort sont les meilleurs !",
    ];

    setInterval(function ()
    {
        let status = STATUSES[Math.floor(Math.random() * STATUSES.length)];
        CLIENT.user.setActivity(status, { type: 'PLAYING' });
    }, 5000);

    // // Vérifie si une personne à le rôle prison
    // setInterval(function()
    // {
    //     let rolePrison = CLIENT.guilds.cache.get("804492972762071040").roles.cache.find(role => role.name === "❌Prison❌");
    //     let roleChaton = CLIENT.guilds.cache.get("804492972762071040").roles.cache.find(role => role.name === "🐱CHATON🐱");
    //     let membres = CLIENT.guilds.cache.get("804492972762071040").members.cache.filter(membre => membre.roles.cache.has(rolePrison.id));
    //     membres.forEach(membre =>
    //     {
    //         let date = new Date();
    //         let dateActuelle = date.getTime();
    //         let dateFin = membre.roles.cache.get(rolePrison.id).hoist;
    //         if(dateActuelle >= dateFin)
    //         {
    //             membre.roles.remove(rolePrison);
    //             membre.roles.add(roleChaton);
    //         }
    //     });
    // }, 10000);

    let fileAttente = [];

    CLIENT.on('message', async message =>
    {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        

        if (message.content == `${CONFIG.prefix}attente`)
        {
            // Si l'auteur du message est déjà dans la liste d'attente, on lui dit.
            if (fileAttente.includes(message.author.username))
            {
                message.channel.send(`Tu es déjà dans la liste d'attente !`);
                return;
            }

            // Si l'auteur du message n'est pas dans la liste d'attente, on l'ajoute et on lui dit.
            if (!fileAttente.includes(message.author.id))
            {
                fileAttente.push(message.author.username);
                console.log(fileAttente);
                message.channel.send(`Tu as été ajouté à la liste d'attente !`);
                return;
            }

            // Si l'auteur du message est le bot, on lui dit.
            if (message.author.bot)
            {
                message.channel.send(`Je ne peux pas te mettre dans la liste d'attente !`);
                return;
            }
        }

        if (message.content == `${CONFIG.prefix}listeattente`)
        {
            console.log(fileAttente);
            message.channel.send(`La liste d'attente est : ${fileAttente}`);
        }

        switch (message.content) {
            case "<@1066690811858788362>":
                message.channel.send(`Mon préfix est \`${CONFIG.prefix}\``);
                break;

                
            case "A":
                message.channel.send(`B`);
                break;

            case "B":
                message.channel.send(`C`);
                break;

            case "C":
                message.channel.send(`D`);
                break;

            case "D":
                message.channel.send(`E`);
                break;

            case "E":
                message.channel.send(`F`);
                break;

            case "F":
                message.channel.send(`G`);
                break;

            case "G":
                message.channel.send(`H`);
                break;

            case "H":
                message.channel.send(`I`);
                break;

            case "I":
                message.channel.send(`J`);
                break;

            case "J":
                message.channel.send(`K`);
                break;

            case "K":
                message.channel.send(`L`);
                break;

            case "L":
                message.channel.send(`M`);
                break;

            case "M":
                message.channel.send(`N`);
                break;

            case "N":
                message.channel.send(`O`);
                break;

            case "O":
                message.channel.send(`P`);
                break;

            case "P":
                message.channel.send(`Q`);
                break;

            case "Q":
                message.channel.send(`R`);
                break;

            case "R":
                message.channel.send(`S`);
                break;

            case "S":
                message.channel.send(`T`);
                break;

            case "T":
                message.channel.send(`U`);
                break;

            case "U":
                message.channel.send(`V`);
                break;

            case "V":
                message.channel.send(`W`);
                break;

            case "W":
                message.channel.send(`X`);
                break;

            case "X":
                message.channel.send(`Y`);
                break;

            case "Y":
                message.channel.send(`Z`);
                message.channel.send(`On recommence ?`);
                break;

            case "Z":
                message.channel.send(`On recommence ?`);
                break;
        }
        
        let bjr =
        [
            "Bonjour",
            "Salut",
            "Yo",
            "Hey",
            "Coucou",
            "Hi",
            "Coucou",
            "Hello",
            "Hi",
            "bonjour",
            "salut",
            "yo",
            "hey",
            "coucou",
            "hi",
            "coucou",
            "hello",
            "hi",
            "Heyo",
            "Bonjouuuuur",
            "Coucouuuu",
            "Bonjoureeeuh",
            "Holaaa",
            "bonjouuuuur",
            "coucouuuu",
            "bonjoureeeuh",
            "holaaa",
            "Salutation",
            "salutation",
            "bonjour a tous comment ca va?",
            "Coucou tous le monde vous allez bien",
            "bonjour tout le monde !",
            "Coucou. Comment ça va ?",
            "bonjour !",
            "Coucouuu",
            "Bonjour comment allez-vous ?",
            "Salut !",
            "Bonjour bonjour !",
            "hey coucou à tous comment ça va",
            "hey coucou à tous comment ça va ?",
            "coucou tous le monde",
            "Bonjoureuuuuuh",
            "Bonjour bonjour ! Comment allez vous ?",
            "Coucou tout le monde !!",
            "Bonjour tout le monde passez une bonne journée",
            "Hello hello !!",
            "Coucou tout le monde",
            "Coucou tout le monde !",
            "bonjour a tous, ca va?",
            "bonjour !!",
            "Coucou comment cava ?",
            "coucou tous le monde vous allez bien",
            "bonjour a tous ca va?",
            "Bonjouuur",
            "Bonjour !",
            "Salut salut !",
            "Bonjour bonjour !!",
            "Coucou tout le monde !",
            "salut !",
        ]

        if (bjr.includes(message.content))
        {
            message.react(":wave:");
        }

        let cv =
        [
            "Comment ça va ?",
            "bonjour à tous comment ca va?",
            "comment ca va par ici ?",
            "Comment vous allez ?",
            "Bonjour comment allez-vous ?",
            "comment allez-vous ?",
            "vous allez bien tout le monde ??",
            "Comment tu vas ?",
            "comment vas-tu ?",
            "hey coucou à tous comment ça va",
            "hey coucou à tous comment ça va ?",
            "comment allez vous?",
            "Coucou tous le monde vous allez bien",
            "Bonjour bonjour ! Comment allez vous ?",
            "Comment allez-vous ?",
            "bonjour a tous comment ca va?",
            "bonjour a tous, ca va?",
            "What's up?",
            "coucou tous le monde vous allez bien",
            "Coucou comment cava ?",
            "comment allez-vous?",
            "coucou tous le monde vous allez bien",
            "bonjour a tous ca va?",
            "vous allez bien ?",
            "Comment CV bien",
            "Ca va tous le monde ?",
            "Comment vous allez",
            "vous allez bien ?",
            "comment vous allez ?",
            "Comment allez vous?",
            "Comment ca va par ici ?",
        ]

        if (cv.includes(message.content))
        {
            const RESPONSE =
            [
                "je vais bien, merci ! Et toi ?",
                "nickel, merci ! Et toi ?",
                "super, merci ! Et toi ?",
                "très bien, merci ! Et toi ?",
                "parfaitement, merci ! Et toi ?",
                "génial, merci ! Et toi ?",
                "parfait, merci ! Et toi ?",
                "bien, merci ! Et toi ?",
            ];

            const REPLY = RESPONSE[Math.floor(Math.random() * RESPONSE.length)];
            message.reply(`${REPLY}`);
        }

        let bn =
        [
            "Bonne nuit",
            "Bonne nuit à tous",
            "Bisous les gens !",
            "Bonne nuit !",
        ]

        if (bn.includes(message.content))
        {
            message.react("<:MangoLuv:1088074439595413665>");
            message.react("<:MuchuLove:1088074362579591268>");
            message.reply(`bonne nuit à toi aussi ! <:MangoLuv:1088074439595413665><:MuchuLove:1088074362579591268>`);
        }

        /*if (!monnaie[message.author.id])
        {
            monnaie[message.author.id] =
            {
                monnaie: 0,
            };
        }

        let baseMonnaie = Math.floor(Math.random() * 5) + 1;
        let ajoutMonnaie = Math.floor(Math.random() * 3) + 1;

        if (ajoutMonnaie === baseMonnaie)
        {
            monnaie[message.author.id] =
            {
                monnaie: monnaie[message.author.id].monnaie + ajoutMonnaie
            };

            fs.writeFile("./monnaie.json", JSON.stringify(monnaie), (err) =>
            {
                if (err) console.log(err);
            });
        }*/

        let prefix = CONFIG.prefix;
        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        if (message.content.startsWith(CONFIG.prefix))
        {
            if (message.content.startsWith(prefix + "listeattente"))
            {
                return;
            }

            if (message.content.startsWith(prefix + "listerem"))
            {
                return;
            }

            try
            {
                let commandFile = require(`./commands/${command.slice(prefix.length)}.js`)
                commandFile.execute(CLIENT, message, args);
            }
            
            catch (err)
            {
                console.log(`L'utilisateur ${message.author.username} a essayé d'utiliser la commande ${command} mais elle n'existe pas.`);
                console.warn(err);
                return;
            }
        }
    });
});

CLIENT.login(process.env.TOKEN);