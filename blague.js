const {MessageAttachment} = require("discord.js");
const fichier = new MessageAttachment("./gifs/WeepThune.gif");

module.exports.execute = async (client, message, args) =>
{
    const RESPONSE =
    [
        "Où se cache Mozart ? ||Dans le frigo….Car Mozzarella…||",
        "Qu’est-ce qui est jaune et qui attend ? ||Un camion qui attend le feu vert…||",
        "Qu'est ce qu un exorcisme inversé ? ||C'est le démon qui demande au prêtre de sortir de l'enfant||",
        "Quel est le point commun entre un chien et un homme ? ||Ils ont tous les deux une queue…||",
        "Quel est le point commun entre une bièrre congelée, une femme enceinte et une pizza cramé ? ||Tout les trois, on les met dans le four et on attend 10 minutes…||",
        "Quel est le point commun entre une bièrre congelée, une femme enceinte et une pizza cramé ? ||Y'a toujours un homme qui l'à sortie trop tard||",
        "Que dit une femme quand elle a un orgasme ? ||Je vais faire un enfant…||",
        "Que dit une imprimante dans l'eau ? ||J'ai papier||",
        "Comment appelle-t-on un jeudi vraiment nul ? ||Une trajeudi||",
        "Quel est meilleur moyen d'enlever un chewing-gum des cheveux ? ||Le cancer||",
        "Une girafe s'exclame : J'ai un de ces mal de cou !, une autruche répond : J'imagine qu'il y a rien de pire qu'une girafe avec un torticolis, un facochère dit : A part peut-être un mille pattes qui a des ampoules...",
        "Qu'est-ce qui est mignon et tout rouge ? ||Un bébé qui suce un cutter||",
        "C’est l’histoire d’un poil avant il etait bien ||Maintenant il est pubien….||",
        "Quelle est la différence entre un rappeur et un campeur ? ||Le rappeur nique ta mère et le campeur monte ta tente||",
        "Comment appelle t’on un lion qui se rebelle ? ||Une rébellion||",
        "Comment appelle-t-on un chauffeur de corbillard ? ||Un pilote décès…||",
        "C’est une blonde qui passe un entretien d’embauche : \n– Prénom ?\n– Jeanne.\n– Nom ?\n– Mais si !",
        "Qu’est-ce qu’une blonde avec une mèche brune ? ||Un brin d’intelligence||",
        "C’est une blonde qui envoie un sms à son chéri : \n– Mon chouchou, tu as oublié ton portable à la maison…",
        "Pourquoi les blondes ne mangent-elles pas de bananes ? ||Parce qu’elles ne trouvent pas la fermeture éclair !||",
        "Quel est la différence entre une blonde et un miroir ? ||Le miroir réfléchit.||",
        "Comment appelle-t-on une blonde qui ne comprends rien à l’informatique ? ||Une e-conne||",
        "Comment une blonde tue un poisson ? ||Elle essaye de le noyer||",
        "Une blonde entre dans une pharmacie et demande : \n– Avez-vous des lunettes ?\n– Pour le soleil ?\n– Non non, pour moi !",
        "Deux blondes discutent ensemble : \n– Cette année, Noël tombe un vendredi.\n– J’espère que ça ne sera pas un vendredi 13…",
        "Qu’est-ce qu’une blonde avec une coloration brune ? ||L’intelligence artificiel||",
        "Pourquoi est-ce que les blondes n’aiment pas les vibromasseurs ? ||Parce que ça fait mal aux dents !||",
        "Pourquoi les blondes se mettent devant la fenêtre lors d’un orage ? ||Pour être sur la photo||",
        "Que fait une blonde lorsqu’elle est au cinéma ? ||Elle cherche la télécommande||",
        "Une brune dit à une blonde : \"Ho, un oiseau mort !!\"\nEt puis la blonde, regardant vers le ciel : \"Ou ça ?\"",
        "Qu’est-ce qu’un nain qui fait du tir à l’arc ? ||Un Indien||",
        "Quelle est la femme la plus rapide du monde ? ||Laurence Ferrari||",
        "Qu’est-ce que 2 canards qui se battent ? ||Un conflit de canard||",
        "Pourquoi les fonctionnaires font leurs manifs en défilant de la République à la Bastille ? ||Parce que c’est en descente||",
        "Un chameau dit a un dromadaire : \n– Comment ca va ?\n– Bien, je bosse, et toi ?\n– Je bosse, je bosse !",
        "Que disent 2 fromages qui se prennent en photo ? ||Cheeeeese !||",
        "Qu’est-ce qu’une pute au régime ? ||Une grosse pute||",
        "Tu as déjà vu une tomate chanter ?\n– Non, mais j’ai déjà vu une carotte rapper !",
        "Pourquoi ne faut-il jamais parler à un italien qui conduit ? ||Parce qu’il a besoin de ses mains.||",
        "Au jour de l’an, 2 geeks discutent : \n- \"Qu’est-ce que t’as pris comme résolution cette année ?\"\n– \"1024 x 768\"",
        "Que dit une ampoule qui revoit une autre ampoule après plusieurs années ? ||Ça fait des lustres !||",
        "Qu’est-ce qui court et qui se jette ? ||Une courgette||",
        "Comment appelle-t-on un cochon avec des ailes ? ||Un aéro porc||",
        "Quelle est la différence entre une échelle et un fusil ? ||L’échelle sert à monter, le fusil à descendre.||",
        "Deux gars discutent : \n– Tu ferais quoi si aujourd’hui c’était la fin du monde ?\n– Moi je tirerais tout ce qui bouge et toi ?\n– Moi je bougerais pas…",
        "Ce matin je suis allé à la boulangerie, les pains au chocolat étaient rangés dans l'ordre décroissant, ça m'a perturbé !",
    ];
    
    const REPLY = RESPONSE[Math.floor(Math.random() * RESPONSE.length)];
    message.channel.send(`${REPLY}`);
}