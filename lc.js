module.exports.execute = async (client, message, args) =>
{
    let user = message.mentions.users.first();

    if(!user)
    {
        return message.channel.send("Merci de mentionner un utilisateur !");
    }
    
    if(user.bot)
    {
        return message.channel.send("Les bots n'ont pas de love, mais on vous aime quand même !");
    }

    if(user.id === message.author.id)
    {
        return message.channel.send("Arrête d'être narcissique !");
    }

    let love = Math.floor(Math.random() * 100) + 1;
    message.channel.send(`Je calcule le love entre ${user.username} et ${message.author.username}, il y a ${love}% entre vous !`);
}