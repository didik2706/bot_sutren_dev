require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("guys", ctx => {
  ctx.reply("@Samsul10999 @dzun_nn")
});

bot.hears("kontol", ctx => {
  ctx.reply("Huss mulutnya, gk boleh gitu ya")
})

bot.launch()