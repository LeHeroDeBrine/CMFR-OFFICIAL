const Discord = require("discord.js");
const Canvas = require("canvas");
const ownerID = "933276326922698802";
const botID = "988468031673995324";
const Client = new Discord.Client ({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
    ]
});

Client.on("ready", () => {
    console.log("En ligne");
   
});

const prefix = "%";

Client.on("messageCreate", message => {
    if (message.author.bot) return;


  //%help  
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setTitle("Commande CMFR")
            .setColor("#FFD700")
            .setDescription("Préfixe = %")
            .addFields([
                {name: "help" , value: "affiche la liste des commande"},
                {name: "nombre <votre nombre>" , value: "donne un nombre alératoire entre 0 et votre nombre"},
                {name: "say <votre message> " ,value: "renvoi votre message"},
                {name: "kick <mention de l'utilisateur>" ,value: "kick le membre"},
                {name: "ban <mention de l'utilisateur> " ,value: "ban le membre"},
                {name: "suggect <votre suggection> " ,value: "fait une suggection"},
    ]);
        message.channel.send({ embeds : [embed]})
    };

    if(message.content.startsWith (prefix + "suggest ")){
        message.delete();
        const member4 = message.member.displayName
        const suggest = message.content.slice(9).trim();
        const embed2 = new Discord.MessageEmbed()
            .setColor("#FFD700")
            .setDescription("***"+ suggest + "***")
            .setAuthor(member4)
            

            message.channel.send({embeds : [embed2]}).then(msg => {
                msg.react("✅")
                msg.react("❌")
            });
            
    };
    
    if(message.content == "quoi"){
        message.reply("https://tenor.com/view/feur-quoi-clip-gif-21195505");
    };   
    
    if(message.content == "Quoi"){
        message.reply("https://tenor.com/view/feur-quoi-clip-gif-21195505");
    };

    if(message.content == "QUOI"){
        message.reply("https://tenor.com/view/feur-quoi-clip-gif-21195505");
    };

    if(message.content == "ping"){
        message.reply("pong !");
    };

    if(message.content == "Ping"){
        message.reply("pong !");
    };

    if(message.content == "PING"){
        message.reply("pong !");
    };

    if(message.content == "kinder"){
        message.reply("beuno !");
    };

    if(message.content == "Kinder"){
        message.reply("beuno !");
    };

    if(message.content == "oui"){
        message.reply("fi !");
    };

    if(message.content == "Oui"){
        message.reply("fi !");
    };

    if(message.content == "OUI"){
        message.reply("fi !");
    };

    if(message.content == "non"){
        message.reply("brile !");
    };

    if(message.content == "Non"){
        message.reply("brile !");
    };

    if(message.content == "NON"){
        message.reply("brile !");
    }; 

    if(message.content == "cv"){
        message.reply("oui est toi ?");
    }; 

    if(message.content == "Cv"){
        message.reply("oui est toi ?");
    }; 

    if(message.content == "CV"){
        message.reply("oui est toi ?");
    }; 

    if(message.content == "oui est toi"){
        message.reply("trkl bg ");
    }; 

    if(message.content == "Oui est toi"){
        message.reply("trkl bg ");
    }; 

    if(message.content == "ca va"){
        message.reply("oui est toi ?");
    }; 

    if(message.content == "Ca Va"){
        message.reply("oui est toi ?");
    }; 

    if(message.content == "CA VA"){
        message.reply("oui est toi ?");
    }; 

    if(message.content.startsWith (prefix + "nombre "))   
    {
        const number = message.content.slice(8).trim();
         var result = Math.floor((Math.random() * number) + 1)
        message.reply("Ton nombre est " + result + " !")
    };


    if (message.content.startsWith(prefix + 'say')) {
        const SayMessage = message.content.slice(5).trim();
        message.channel.send(SayMessage)
    };

    if(message.member.permissions.has("BAN_MEMBERS")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("***membre non ou mal mentionné***");
            }
            else{
                if(mention.bannable){
                    mention.ban();
                    console.log(mention.displayName + " a été ban")
                    message.channel.send(mention.displayName + " ***est banni avec succèe !***")
                    message.channel.send("https://tenor.com/view/thor-strike-admin-ban-admin-ban-gif-22545175")
                }
                else{
                    message.reply("***impossible de bannir ce membre***");
                }
            }
        }
        if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("***membre non ou mal mentionné***");
            }
            else{
                if(mention.kickable){
                    mention.kick();
                    console.log(mention.displayName + " a été kick !")
                    message.channel.send(mention.displayName + " ***est kick avec succèe*** !")
                    message.channel.send("https://tenor.com/view/thor-strike-admin-ban-admin-ban-gif-22545175")
                }
                else{
                    message.reply("***impossible de kick ce membre***");
                }
            }
        }
    }

    if(message.content === prefix + "stop"){
        if(message.member.id === ownerID){
            message.channel.send("le bot sera down dans un instant ...");
        }
        else("vous navez pas les permission de fair cela");
    }

    



});

Client.on("messageCreate", message => {
    if(message.content ==="le bot sera down dans un instant ..."){
        if(message.member.id === botID){
            Client.destroy();
        }
    }
});


Client.on("guildMemberAdd", async member => {
    console.log("un membre est arrivé ! ");
    Client.channels.cache.get("1008824866360803460").send(member.displayName + " est arrivé ! ");

    var canvas = Canvas.createCanvas(1809, 1080);

    ctx = canvas.getContext("2d");

    var background = await Canvas.loadImage("./background2.png");
    ctx.drawImage(background, 0, 0, 1809, 1080);

    ctx.font = "100px Comic Sans MS";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText("  " + member.user.tag.toUpperCase() , 900, 950);
    ctx.fillText("      BIENVENUE    " , 900, 1050);


    ctx.beginPath();
    ctx.arc(900, 275 , 175 , 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();



    var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        format : "png",
        size : 2048
    }));

    ctx.drawImage(avatar, 725, 100, 350, 350);

    var attachment = new Discord.MessageAttachment(canvas.toBuffer(), "Welcome.png");

    Client.channels.cache.get("1008824866360803460").send({files : [attachment]});

});


Client.on("guildMemberRemove", async member => {
    console.log("un membre est partie . ");
    Client.channels.cache.get("1008824866360803461").send(member.displayName + " est partie . ");

    var canvas = Canvas.createCanvas(1809, 1080);

    ctx = canvas.getContext("2d");

    var background = await Canvas.loadImage("./background3.png");
    ctx.drawImage(background, 0, 0, 1809, 1080);

    ctx.font = "100px Comic Sans MS";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText("  " + member.user.tag.toUpperCase() , 900, 950);
    ctx.fillText("      EST PARTIE    " , 900, 1050);


    ctx.beginPath();
    ctx.arc(900, 275 , 175 , 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();



    var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        format : "png",
        size : 2048
    }));

    ctx.drawImage(avatar, 725, 100, 350, 350);

    var attachment2 = new Discord.MessageAttachment(canvas.toBuffer(), "Bye.png");

    Client.channels.cache.get("1008824866360803461").send({files : [attachment2]});

});






Client.login(process.env.TOKEN);
