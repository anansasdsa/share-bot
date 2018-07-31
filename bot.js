const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
سيرفر جيب ناس تاخد حسابات فل اكسس انا مجربه 
وعشان عما قريب نفتح سيرفر سيرفايفل في ماين كرافت
خلكم جاهزين
                               [ https://discord.gg/JjRyWyK ] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)
})
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
سيرفر جيب ناس تاخد حسابات فل اكسس انا مجربه 
وعشان عما قريب نفتح سيرفر سيرفايفل في ماين كرافت
خلكم جاهزين
                               [ https://discord.gg/JjRyWyK ] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
