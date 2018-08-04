const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**الحقق ضيف ناس وخذ رتبه في هايبكسل
وحسابات ماين كرافت . ودسكورد نيترو
https://discord.gg/EMCdxeJ 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)
})
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**الحقق ضيف ناس وخذ رتبه في هايبكسل
وحسابات ماين كرافت . ودسكورد نيترو
https://discord.gg/EMCdxeJ
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
