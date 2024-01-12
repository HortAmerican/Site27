const ms = require("ms");
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'Mute');
    let muteTime = (args[1] || '600000');

    message.delete()

    if (!muteRole) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'Mute',
                color: '#000',
                permission: []
            }
        });

        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                CONNECT: false
            });
        });
    }
    
    await user.roles.add(muteRole.id);
    message.channel.send(`<@${user.id}> est réduit au silence pour ${ms(ms(muteTime))} !`);

    setTimeout(() => {
      user.roles.remove(muteRole.id);
    }, ms(muteTime));
};