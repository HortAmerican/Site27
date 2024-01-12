module.exports.execute = async (client, message, args) =>
{
    const RESPONSE =
    [
        "Mmmm il/elle apprécie <:fouet:1033678392043782295><:Aaaah:823965965657309267>",
        "Un coup de fouet a été lancé, RIP a vos petites fesses <:fouet:1033678392043782295>",
        "Oupsi, j'ai raté les fesses.. <:Kappa:823946065795481671><:fouet:1033678392043782295>",
        "La ou les personne(s) touchée(s) réclame(nt) plus !!",
    ];
        
    const REPLY = RESPONSE[Math.floor(Math.random() * RESPONSE.length)];
    message.channel.send(`${REPLY}`);
    message.channel.send(`*Jouissement de Mini-Pok*`);
}