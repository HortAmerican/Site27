const Discord = require('discord.js')

module.exports.execute = async(client, message, args) =>
{

    if (!message.member.hasPermission("MANAGE_MESSAGE"))
    {
        return message.channel.send("Vous n'avez pas la permission !");
    }

    amount = args[0];

    if (!amount || isNaN(amount) || amount < 1 || amount > 100)
    {
        return message.channel.send('Merci de me donner un nombre de message(s) à supprimer !')
    }

    message.channel.messages.fetch({ limit: amount }).then(messages =>
    {
        message.channel.bulkDelete(messages);
        message.channel.send(`J'ai supprimé ${amount} message(s) !`).then(message =>
        {
            setTimeout(() =>
            {
                message.delete();
            }, 1000 * 5);
        })
    })
}