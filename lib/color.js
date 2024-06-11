//*
 //  * @project_name : WALLYJAYTECH-MD
 //  * @author : wallyjaytechy
 //  * @youtube : https://www.youtube.com/@wallyjaytechy
//   * @description : WALLYJAYTECH-V3 ,A Multi-functional whatsapp user bot.
//*
//* 
//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//Instagram: wallyjaytechy
//Telegram: t.me/anjafrieda
//GitHub: @wallyjaytechy
//WhatsApp: +2348144317152
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//   * Created By Github: DGXeon.
//   * Credit To Xeon
//   * © 2024 WALLYJAYTECH-MD.
// ⛥┌┤
// */
const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
