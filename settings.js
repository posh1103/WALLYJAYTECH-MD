
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                WALLYJAYTECH-MD BOT                                                   //
//                                                                                                      // 
//                                         NEW VERSION                                                  // 
//                                                                                                      // 
( )  _  ( )  _  ) )   ( )   ( )   ( )___  )  _  ) )   ( )_   _)  _ \(  _ \( ) ( )      / \_/ \  _ \ 
| | ( ) | | (_) | |   | |    \ \_/ /    | | (_) |\ \_/ /  | | | (_(_) ( (_) |_| |______|     | | ) |
| | | | | |  _  ) |  _| |  _   \ /   _  | |  _  )  \ /    | | |  _)_| |  _|  _  |______) (_) | | | )
| (_/ \_) | | | | |_( ) |_( )  | |  ( )_| | | | |  | |    | | | (_( ) (_( ) | | |      | | | | |_) |
 \__/\___/(_) (_)____/(____/   (_)   \___/(_) (_)  (_)    (_) (____/(____/(_) (_)      (_) (_)____/
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
 //  * @project_name : WALLYJAYTECH-MD
 //  * @author : wallyjaytechy
 //  * @youtube : https://www.youtube.com/@wallyjaytecgy
//   * @description : WALLYJAYTECH-MD ,A Multi-functional whatsapp user bot.
//*
//* 
//base by wallyjaytechy
//re-upload? recode? copy code? give credit ya :)
//Instagram: wallyjaytechy
//Telegram: t.me/anjafrieda
//GitHub: @walyjaytechy
//WhatsApp: +2348144317152
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@wallyjaytechy
//   * Created By Github: wallyjaytechy.
//   * Credit To Xeon
//   * © 2024 WALLYJAYTECH-MD.
// ⛥┌┤
// */

const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//owmner v card
//________________________________________________________________________________________________________
global.ytname = process.env.YT_NAME || "YT: WALLY JAY TECH YT" //ur yt chanel name
//________________________________________________________________________________________________________
global.socialm = process.env.MEDIA || "GitHub: wallyjaytechy" //ur github or insta name
//________________________________________________________________________________________________________
global.location = process.env.GL_INFO || "Nigeria, Osun, Ifer" //ur location
//________________________________________________________________________________________________________

//new
//________________________________________________________________________________________________________
global.botname = process.env.BOT_NAME || 'WALLYJAYTECH-MD' //ur bot name
//________________________________________________________________________________________________________
global.ownernumber = process.env.SUDO || '2348144317152' //ur owner number
//________________________________________________________________________________________________________
global.ownername = process.env.SUDO_NAME || 'Wally Jay' //ur owner name
//________________________________________________________________________________________________________
global.websitex = process.env.YT_LINK || "https://youtube.com/@wallyjaytechy"
//________________________________________________________________________________________________________
global.wagc = process.env.GL_PUSH || "https://wa.me/2348144317152"
//________________________________________________________________________________________________________
global.themeemoji = process.env.GL_EMOJI || '🏮'
//________________________________________________________________________________________________________
global.wm = process.env.GL_WM || "© WALLYJAYTECH-MD-Iɴᴄ"
//________________________________________________________________________________________________________
global.botscript = process.env.GL_SC || 'https://github.com/salmanytofficial/XLICON-V3-MD' //script link
//________________________________________________________________________________________________________
global.packname = process.env.PACK_NAME || "WALLYJAYTECH-MD"
//________________________________________________________________________________________________________
global.author = process.env.AUTHER_NAME || "ᗰᗩᗪE ᗷY WALLY JAY"
//________________________________________________________________________________________________________
global.creator = process.env.GL_DEVS || "2348144317152@s.whatsapp.net"
//________________________________________________________________________________________________________
global.xprefix = process.env.PREFIX || '.'
//________________________________________________________________________________________________________
global.premium = process.env.GL_VIP || ["2348144317152"] // Premium User
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
	nsfw: '_*Nsfw is disabled in this group, Please tell the admin to enable*_',
    done: '_*Done ✓*_',
    error: '_*I am having error to execute this*_',
    success: '_*Here you go!*_'
}
//thumbnail
global.thumb = fs.readFileSync('./XliconMedia/theme/xliconpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
