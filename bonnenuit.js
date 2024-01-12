module.exports.execute = async (client, message, args) =>
{
    const gifs = 
    [
        "https://tenor.com/view/good-night-images-sweet-dreams-gif-25034309",
        "https://tenor.com/view/goodnight-gif-25677317",
        "https://tenor.com/view/cute-goodnight-gif-26116860",
        "https://tenor.com/view/sleep-time-gif-25989059",
        "https://tenor.com/view/love-you-lots-kiss-peach-gif-24771133",
        "https://tenor.com/view/goodnight-sleepwell-gif-25200931",
        "https://tenor.com/view/bonne-nuit-gif-10005817",
        "https://tenor.com/view/cat-sleepy-bonne-nuit-good-night-gif-10005823",
        "https://tenor.com/view/bonne-nuit-gif-13086700",
    ];
    
    const gif = gifs[Math.floor(Math.random() * gifs.length)];
    message.channel.send(gif);
}