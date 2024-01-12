module.exports.execute = async (client, message, args) =>
{
    const gifs = 
    [
        "https://tenor.com/view/thibaultbrock-thibault-brock-wesh-bonjour-gif-25480951",
        "https://tenor.com/view/kaeloo-bonjour-les-amis-gif-22604982",
        "https://tenor.com/view/morgie-morgiepractice-twitch-stream-french-gif-23032216",
        "https://tenor.com/view/kitty-cat-hello-chat-gif-26128152",
        "https://tenor.com/view/les-pneus-bonjour-hello-friends-gif-24099216",
        "https://tenor.com/view/calimero-coucou-hello-hi-%C3%A7a-va-gif-26490209",
        "https://tenor.com/view/hello-gif-19970672",
        "https://tenor.com/view/norman-thavaud-pijon-bonjour-chat-hello-chat-gif-25746617",
        "https://tenor.com/view/love-hearts-cute-bonjour-hello-gif-17421322",
        "https://tenor.com/view/hello-there-hello-bonjour-bonjourno-salute-gif-23698029",
        "https://tenor.com/view/bonjour-hi-hello-greet-gif-16182315",
        "https://tenor.com/view/bonjour-les-tipneus-bonjour-nounours-hello-coucou-gif-24099463",
        "https://tenor.com/view/0001-gif-25597406",
        "https://tenor.com/view/bonjour-et-bonne-journe-gif-25777995",
        "https://tenor.com/view/coffee-bonjour-bonne-journee-have-a-good-day-hello-gif-17812919",
        "https://tenor.com/view/hello-bonjour-gif-20115397",
        "https://tenor.com/view/hi-hello-cat-xatta-hola-gif-25953270",
    ];
    
    const gif = gifs[Math.floor(Math.random() * gifs.length)];
    message.channel.send(gif);
};