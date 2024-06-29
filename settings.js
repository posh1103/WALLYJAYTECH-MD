//*
 //  * @project_name : WALLYJAYTECH-MD
 //  * @author : wallyjaytechy
 //  * @youtube : https://www.youtube.com/@wallyjaytechy
//   * @description : WALLYJAYTECH-MD ,A Multi-functional whatsapp user bot.
//*
//* 
 //base by Wallyjaytechinc
//re-upload? recode? copy code? give credit ya :)
//Instagram: wallyjaytechy
//Telegram: t.me/anjafrieda
//GitHub: @wallyjaytechy
//WhatsApp: +2348144317152
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@wallyjaytechy
//   * Created By Github: Wallyjaytechinc.
//   * Credit To Wallyjaytech
//   * © 2024 WALLYJAYTECH-MD.
// ⛥┌┤
// */

const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//owmner v card
//________________________________________________________________________________________________________
global.ytname = process.env.YT_NAME || "YT: WALLY JAY TECH" //ur yt chanel name
//________________________________________________________________________________________________________
global.socialm = process.env.MEDIA || "GitHub: wallyjaytechy" //ur github or insta name
//________________________________________________________________________________________________________
global.location = process.env.GL_INFO || "Nigria, Osun, Ife" //ur location
//________________________________________________________________________________________________________

//new
//________________________________________________________________________________________________________
global.botname = process.env.BOT_NAME || 'POSH-MD' //ur bot name
//________________________________________________________________________________________________________
global.ownernumber = process.env.SUDO || '2349066686756' //ur owner number
//________________________________________________________________________________________________________
global.ownername = process.env.SUDO_NAME || 'POSH-MD' //ur owner name
//________________________________________________________________________________________________________
global.websitex = process.env.YT_LINK || "https://youtube.com/@wallyjaytechy"
//________________________________________________________________________________________________________
global.wagc = process.env.GL_PUSH || "https://wa.me/2349066686756"
//________________________________________________________________________________________________________
global.themeemoji = process.env.GL_EMOJI || '🤖'
//________________________________________________________________________________________________________
global.wm = process.env.GL_WM || "© 2024 WALLYJAYTECH-INC"
//________________________________________________________________________________________________________
global.botscript = process.env.GL_SC || 'https://github.com/wallyjaytechy/WALLYJAYTECH-MD' //script link
//________________________________________________________________________________________________________
global.packname = process.env.PACK_NAME || "WALLYJAYTECH-MD"
//________________________________________________________________________________________________________
global.author = process.env.AUTHER_NAME || "MADE BY WALLY JAY TECH"
//________________________________________________________________________________________________________
global.creator = process.env.GL_DEVS || "2349066686756@s.whatsapp.net"
//________________________________________________________________________________________________________
global.xprefix = process.env.PREFIX || '.'
//________________________________________________________________________________________________________
global.premium = process.env.GL_VIP || ["2349066686756"] // Premium User
//________________________________________________________________________________________________________
global.hituet = 0
//________________________________________________________________________________________________________

//bot sett
//________________________________________________________________________________________________________
global.typemenu = process.env.MENU_DESIGN || 'v4' // menu type 'v1' => 'v8'
//________________________________________________________________________________________________________
global.typereply = process.env.REPLY_TYPE || 'v2' // reply type 'v1' => 'v3'
//________________________________________________________________________________________________________
global.autoblocknumber = process.env.AUTO_BAN || '212' //set autoblock country code
//________________________________________________________________________________________________________
global.antiforeignnumber = process.env.AUTO_BLOCK || '212' //set anti foreign number country code
//________________________________________________________________________________________________________
global.welcome = process.env.WELCOME_MSG || true //welcome/left in groups
//________________________________________________________________________________________________________
global.anticall = process.env.GL_NOCALL || true //bot blocks user when called
//________________________________________________________________________________________________________
global.autoswview = process.env.AUTO_STATUS_SEEN || true //auto status/story view
//________________________________________________________________________________________________________
global.adminevent = process.env.ANNOUNCE_MSG  || true //show promote/demote message
//________________________________________________________________________________________________________
global.groupevent = process.env.GROUP_ANNOUNCE_MSG || true //show update messages in group chat
//________________________________________________________________________________________________________


//msg
global.mess = {
	limit: '_*Your limit is up!*_',
	nsfw: '_*Nsfw is disabled in this group, Please tell the admin to enable, or contact sir wally jay tech the bot creator, thank you ♥*_',
    done: '_*Successful ✓*_',
    error: '_*I am having error to execute this, please try again later dear*_',
    success: '_*Here you go! wally jay tech did it*_'
}
//thumbnail
global.thumb = fs.readFileSync('./WallyjaytechMedia/theme/Wallyjaytechpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
