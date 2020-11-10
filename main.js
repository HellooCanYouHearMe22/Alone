const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const db = require('quick.db');
const app = express();

const fs = require("fs");

app.get("/", (req, res) => {
  res.send("v12 Boş Altyapı, Alone sizlerle");
});
app.listen(process.env.PORT);

client.commands = new Discord.Collection();

  var team = ('<a:team2:774534412100304896> ')
var settings = ('<a:settings:774534413236830228>')
var team2 = ('<a:team1:774534412117344276')
var fire2green = ('<a:fire2green:774930792358477854>')
var yes = ('<a:yes:774534413714718731>')
var no = ('<a:no:774534413659930624>')
var team3 = ('<a:help:774534412485918780>')
var dragon = ('<a:dragon:775305157901680650> ')
var blue = ('<a:red:774534416710107147>')

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`${client.user.tag}! Aktif!`);

  //kod ekliceksen burdan aşağıya ekle
client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    return permlvl;
};

client.on('message', async (message,member) => {
  const sas = await db.fetch(`saas_${message.guild.id}`)
  if(!sas || sas===null) return
  if(message.author.bot === true) { return
   }else { if(message.content.toLowerCase() ==='sa'||message.content.toLowerCase() ==='sea'||message.content.toLowerCase() ==='selam'||message.content.toLowerCase() ==='selamun aleykum'||message.content.toLowerCase() ==='selamun aleyküm'||message.content.includes === `Esselamın aleyküme rahmetullahı berekatühü`){
  message.channel.send('Aleyküm Selam')
}
}})//otorol destekçi sadece sunucu 1
  
  client.on('guildCreate',guild => {
  const ow = guild.owner
  const owners = []
  client.guilds.cache.forEach(a=>{
    owners.push(a.owner.id)
  })
  if(owners.includes(ow.id)) {
    const destekS = client.guilds.cache.get('774524858868432897')
    const rol = destekS.roles.cache.get('775419559834026045')
    const destekCh = destekS.channels.cache.get('775419689215983677')
    let msj = team2 +`${guild.name} kişisinin sunucusuna katıldığım için, sunucu sahibi ${ow.user.username} kişisine ${rol.name} isimli rolü başarı ile verdim!.` + yes
    const varMı = destekS.members.cache.find(a=>a.id == ow.id)
    if(!varMı) {
      msj = `Katıldığım sunucunun sahibine rol veremedim çünkü destek sunucusunda değil!` + no
      destekCh.send(msj)
      
    }else {
      destekCh.send(msj)
      varMı.roles.add(rol)
    }
  }else return 
}


);});;

client.login(process.env.TOKEN);
