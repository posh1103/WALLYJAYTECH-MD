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

const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┠┌─⦿  *Owner Menu*  ⦿
┃│
┃│ ❏${prefix}autoread 🅞
┃│ ❏${prefix}autobio 🅞
┃│ ❏${prefix}autotype 🅞
┃│ ❏${prefix}unavailable 🅞
┃│ ❏${prefix}autorecord 🅞
┃│ ❏${prefix}autorecordtype 🅞
┃│ ❏${prefix}autoswview 🅞
┃│ ❏${prefix}setautoblock 🅞
┃│ ❏${prefix}setantiforeign 🅞
┃│ ❏${prefix}autoblock 🅞
┃│ ❏${prefix}onlygc 🅞
┃│ ❏${prefix}onlypc 🅞
┃│ ❏${prefix}onlyindia 🅞
┃│ ❏${prefix}onlyindo 🅞
┃│ ❏${prefix}anticall 🅞
┃│ ❏${prefix}self 🅞
┃│ ❏${prefix}public 🅞
┃│ ❏${prefix}join 🅞
┃│ ❏${prefix}poll 🅞
┃│ ❏${prefix}bc 🅞
┃│ ❏${prefix}bcgroup 🅞
┃│ ❏${prefix}setmenu 🅞
┃│ ❏${prefix}setimgmenu 🅞
┃│ ❏${prefix}setvidmenu 🅞
┃│ ❏${prefix}setgifmenu 🅞
┃│ ❏${prefix}setreply 🅞
┃│ ❏${prefix}setprefix 🅞
┃│ ❏${prefix}addlimit 🅞
┃│ ❏${prefix}dellimit 🅞
┃│ ❏${prefix}resethit 🅞
┃│ ❏${prefix}resetuser 🅞
┃│ ❏${prefix}creategc 🅞
┃│ ❏${prefix}setexif 🅞
┃│ ❏${prefix}userjid 🅞
┃│ ❏${prefix}setbotbio 🅞
┃│ ❏${prefix}delppbot 🅞
┃│ ❏${prefix}shutdown 🅞
┃│ ❏${prefix}setppbot 🅞
┃│ ❏${prefix}addprem 🅞
┃│ ❏${prefix}delprem 🅞
┃│ ❏${prefix}addowner 🅞
┃│ ❏${prefix}delowner 🅞
┃│ ❏${prefix}addvn 🅞
┃│ ❏${prefix}addapk 🅞
┃│ ❏${prefix}addzip 🅞
┃│ ❏${prefix}addpdf 🅞
┃│ ❏${prefix}delapk 🅞
┃│ ❏${prefix}delzip 🅞
┃│ ❏${prefix}delpdf 🅞
┃│ ❏${prefix}delvn 🅞
┃│ ❏${prefix}addsticker 🅞
┃│ ❏${prefix}delsticker 🅞
┃│ ❏${prefix}addimage 🅞
┃│ ❏${prefix}delimage 🅞
┃│ ❏${prefix}addvideo 🅞
┃│ ❏${prefix}delvideo 🅞
┃│ ❏${prefix}addtitle 🅞
┃│ ❏${prefix}deltitle 🅞
┃│ ❏${prefix}upswteks 🅞
┃│ ❏${prefix}upswvideo 🅞
┃│ ❏${prefix}upswimag 🅞
┃│ ❏${prefix}upswaudio 🅞
┃│ ❏${prefix}block 🅞
┃│ ❏${prefix}unblock 🅞
┃│ ❏${prefix}leavegc 🅞
┃│ ❏${prefix}pushcontact 🅞
┃│ ❏${prefix}pushcontactv2 🅞
┃│
┃│
┃└───⦿
┃
┃
┃
┠┌─⦿  *Group Menu*  ⦿
┃│
┃│
┃│ ❏${prefix}antibot 🅖
┃│ ❏${prefix}antiviewonce 🅖
┃│ ❏${prefix}welcome 🅖
┃│ ❏${prefix}adminevent 🅖
┃│ ❏${prefix}groupevent 🅖
┃│ ❏${prefix}antiforeign 🅖
┃│ ❏${prefix}antimedia 🅖
┃│ ❏${prefix}antiaudio 🅖
┃│ ❏${prefix}antivideo 🅖
┃│ ❏${prefix}antiimage 🅖
┃│ ❏${prefix}antidocument 🅖
┃│ ❏${prefix}antilocation 🅖
┃│ ❏${prefix}anticontact 🅖
┃│ ❏${prefix}antisticker 🅖
┃│ ❏${prefix}antipoll 🅖
┃│ ❏${prefix}antilink 🅖
┃│ ❏${prefix}antilinkgc 🅖
┃│ ❏${prefix}antivirtex 🅖
┃│ ❏${prefix}grouplink 🅖
┃│ ❏${prefix}listadmin 🅖
┃│ ❏${prefix}invite 🅖
┃│ ❏${prefix}ephemeral 🅖
┃│ ❏${prefix}delete 🅖
┃│ ❏${prefix}setppgroup 🅖
┃│ ❏${prefix}delppgroup 🅖
┃│ ❏${prefix}setnamegc 🅖
┃│ ❏${prefix}setdesc 🅖
┃│ ❏${prefix}add 🅖
┃│ ❏${prefix}kick 🅖
┃│ ❏${prefix}promote 🅖
┃│ ❏${prefix}demote 🅖
┃│ ❏${prefix}getcontact 🅞
┃│ ❏${prefix}savecontact 🅞
┃│ ❏${prefix}sendcontact 🅞
┃│ ❏${prefix}contactag 🅞
┃│ ❏${prefix}hidetag 🅖
┃│ ❏${prefix}totag 🅖
┃│ ❏${prefix}tagall 🅖
┃│ ❏${prefix}editinfo 🅖
┃│ ❏${prefix}opentime 🅖
┃│ ❏${prefix}closetime 🅖
┃│ ❏${prefix}resetlink 🅖
┃│ ❏${prefix}getbio 🅖
┃│ ❏${prefix}vote 🅖
┃│ ❏${prefix}upvote 🅖
┃│ ❏${prefix}downvote 🅖
┃│ ❏${prefix}checkvote 🅖
┃│ ❏${prefix}delvote 🅖
┃│ ❏${prefix}autostickergc 🅖
┃│ ❏${prefix}antitoxic 🅖
┃│ ❏${prefix}nsfw 🅖
┃│ ❏${prefix}react 🅖
┃│
┃│
┃└────⦿
┃
┃
┃
┠┌─⦿ *Download Menu* ⦿
┃│
┃│ ❏${prefix}ytsearch 🅕
┃│ ❏${prefix}itunes 🅕
┃│ ❏${prefix}ytmp4 🅕
┃│ ❏${prefix}apk 🅕
┃│ ❏${prefix}igvideo 🅕
┃│ ❏${prefix}igimage 🅕
┃│ ❏${prefix}facebook 🅕
┃│ ❏${prefix}mediafire 🅕
┃│ ❏${prefix}google 🅕
┃│ ❏${prefix}imdb 🅕
┃│ ❏${prefix}weather 🅕
┃│ ❏${prefix}wanumber 🅕
┃│ ❏${prefix}spotify 🅟
┃│ ❏${prefix}gitclone 🅕
┃│ ❏${prefix}happymod 🅕
┃│ ❏${prefix}gdrive 🅕
┃│ ❏${prefix}pinterest 🅕
┃│ ❏${prefix}ringtone 🅕
┃│
┃└────⦿
┃
┃
┃
┠┌─⦿ *Random Video* ⦿
┃│
┃│
┃│ ❏${prefix}tiktokgirl 🅕
┃│ ❏${prefix}tiktokkayes 🅕
┃│ ❏${prefix}tiktokpanrika 🅕
┃│ ❏${prefix}tiktoknotnot 🅕
┃│ ❏${prefix}tiktokghea 🅕
┃│ ❏${prefix}tiktoksantuy 🅕
┃│ ❏${prefix}tiktokbocil 🅕
┃│
┃│
┃└────⦿
┃
┃
┃
┠┌─⦿ *Stalker* ⦿
┃│
┃│
┃│ ❏${prefix}tiktokstalk 🅕
┃│ ❏${prefix}mlstalk 🅕
┃│ ❏${prefix}npmstalk 🅕
┃│ ❏${prefix}ghstalk 🅕
┃│
┃│
┃└───⦿
┃
┃
┃
┃
┃
┠┌─⦿ *OpenAI* ⦿
┃│
┃│
┃│ ❏${prefix}openai 🅕
┃│ ❏${prefix}chatgpt 🅕
┃│ ❏${prefix}mathsai 🅕
┃│ ❏${prefix}photoleapai 🅕
┃│ ❏${prefix}lamaai 🅕
┃│ ❏${prefix}geminiai 🅕
┃│ ❏${prefix}enhance 🅕
┃│ ❏${prefix}dehaze 🅕
┃│ ❏${prefix}ai 🅕
┃│ ❏${prefix}remini 🅕
┃│
┃│
┃└───⦿
┃
┃
┃
┠┌─⦿ *Fun Menu* ⦿
┃│
┃│
┃│ ❏${prefix}define 🅕
┃│ ❏${prefix}math 🅕
┃│ ❏${prefix}tictactoe 🅕
┃│ ❏${prefix}fact 🅕
┃│ ❏${prefix}truth 🅕
┃│ ❏${prefix}dare 🅕
┃│ ❏${prefix}couple 🅕
┃│ ❏${prefix}soulmate 🅕
┃│ ❏${prefix}stupidcheck 🅕
┃│ ❏${prefix}handsomecheck 🅕
┃│ ❏${prefix}uncleancheck 🅕
┃│ ❏${prefix}hotcheck 🅕
┃│ ❏${prefix}smartcheck 🅕
┃│ ❏${prefix}greatcheck 🅕
┃│ ❏${prefix}evilcheck 🅕
┃│ ❏${prefix}dogcheck 🅕
┃│ ❏${prefix}coolcheck 🅕
┃│ ❏${prefix}waifucheck 🅕
┃│ ❏${prefix}awesomecheck 🅕
┃│ ❏${prefix}gaycheck 🅕
┃│ ❏${prefix}cutecheck 🅕
┃│ ❏${prefix}lesbiancheck 🅕
┃│ ❏${prefix}hornycheck 🅕
┃│ ❏${prefix}prettycheck 🅕
┃│ ❏${prefix}lovelycheck 🅕
┃│ ❏${prefix}uglycheck 🅕
┃│ ❏${prefix}pick 🅕
┃│ ❏${prefix}pickupline 🅕
┃│ ❏${prefix}quotes 🅕
┃│ ❏${prefix}can 🅕
┃│ ❏${prefix}is 🅕
┃│ ❏${prefix}when 🅕
┃│ ❏${prefix}where 🅕
┃│ ❏${prefix}what 🅕
┃│ ❏${prefix}how 🅕
┃│ ❏${prefix}rate 🅕
┃│ ❏${prefix}checkme 🅕
┃│ ❏${prefix}sound1 - sound161 🅕
┃│
┃│
┃└───⦿
┃
┃
┃
┠┌─⦿ *Random Photo* ⦿
┃│
┃│
┃│ ❏${prefix}aesthetic 🅕
┃│ ❏${prefix}coffee 🅕
┃│ ❏${prefix}wikimedia 🅕
┃│ ❏${prefix}wallpaper 🅕
┃│ ❏${prefix}art 🅕
┃│ ❏${prefix}bts 🅕
┃│ ❏${prefix}dogwoof 🅕
┃│ ❏${prefix}catmeow 🅕
┃│ ❏${prefix}lizardpic 🅕
┃│ ❏${prefix}goosebird 🅕
┃│ ❏${prefix}8ballpool 🅕
┃│ ❏${prefix}cosplay 🅕
┃│ ❏${prefix}hacker 🅕
┃│ ❏${prefix}cyber 🅕
┃│ ❏${prefix}gamewallpaper 🅕
┃│ ❏${prefix}islamic 🅕
┃│ ❏${prefix}jennie 🅕
┃│ ❏${prefix}jiso 🅕
┃│ ❏${prefix}satanic 🅕
┃│ ❏${prefix}justina 🅕
┃│ ❏${prefix}cartoon 🅕
┃│ ❏${prefix}pentol 🅕
┃│ ❏${prefix}cat 🅕
┃│ ❏${prefix}kpop 🅕
┃│ ❏${prefix}exo 🅕
┃│ ❏${prefix}lisa 🅕
┃│ ❏${prefix}space 🅕
┃│ ❏${prefix}car 🅕
┃│ ❏${prefix}technology 🅕
┃│ ❏${prefix}bike 🅕
┃│ ❏${prefix}shortquote 🅕
┃│ ❏${prefix}antiwork 🅕
┃│ ❏${prefix}hacking 🅕
┃│ ❏${prefix}boneka 🅕
┃│ ❏${prefix}rose 🅕
┃│ ❏${prefix}ryujin 🅕
┃│ ❏${prefix}ulzzangboy 🅕
┃│ ❏${prefix}ulzzanggirl 🅕
┃│ ❏${prefix}wallml 🅕
┃│ ❏${prefix}wallphone 🅕
┃│ ❏${prefix}mountain 🅕
┃│ ❏${prefix}goose 🅕
┃│ ❏${prefix}profilepic 🅕
┃│ ❏${prefix}couplepp 🅕
┃│ ❏${prefix}programming 🅕
┃│ ❏${prefix}pubg 🅕
┃│ ❏${prefix}blackpink 🅕
┃│ ❏${prefix}randomboy 🅕  
┃│ ❏${prefix}randomgirl 🅕
┃│ ❏${prefix}hijab 🅕  
┃│ ❏${prefix}chinese 🅕
┃│ ❏${prefix}indo 🅕
┃│ ❏${prefix}japanese 🅕
┃│ ❏${prefix}korean 🅕
┃│ ❏${prefix}malay 🅕
┃│ ❏${prefix}thai 🅕
┃│ ❏${prefix}vietnamese 🅕
┃│
┃│
┃└───⦿
┃
┃
┃
┠┌─⦿ *Sticker* ⦿
┃│
┃│
┃│   Under Maintenance 
┃│      thank you 💘 
┃│
┃│
┃└───⦿
┃
┃
┃
┃
┠┌─⦿ *Anime* ⦿
┃│
┃│
┃│ ❏${prefix}akira 🅕
┃│ ❏${prefix}akiyama 🅕
┃│ ❏${prefix}ana 🅕
┃│ ❏${prefix}asuna 🅕
┃│ ❏${prefix}ayuzawa 🅕
┃│ ❏${prefix}boruto 🅕
┃│ ❏${prefix}chiho 🅕
┃│ ❏${prefix}chitoge 🅕
┃│ ❏${prefix}cosplayloli 🅕
┃│ ❏${prefix}cosplaysagiri 🅕
┃│ ❏${prefix}deidara 🅕
┃│ ❏${prefix}doraemon 🅕
┃│ ❏${prefix}elaina 🅕
┃│ ❏${prefix}emilia 🅕
┃│ ❏${prefix}erza 🅕
┃│ ❏${prefix}gremory 🅕
┃│ ❏${prefix}hestia 🅕
┃│ ❏${prefix}husbu 🅕
┃│ ❏${prefix}inori 🅕
┃│ ❏${prefix}isuzu 🅕
┃│ ❏${prefix}itachi 🅕
┃│ ❏${prefix}itori 🅕
┃│ ❏${prefix}kaga 🅕
┃│ ❏${prefix}kagura 🅕
┃│ ❏${prefix}kakasih 🅕
┃│ ❏${prefix}kaori 🅕
┃│ ❏${prefix}keneki 🅕
┃│ ❏${prefix}kotori 🅕
┃│ ❏${prefix}kurumi 🅕
┃│ ❏${prefix}loli 🅕
┃│ ❏${prefix}loli2 🅕
┃│ ❏${prefix}madara 🅕
┃│ ❏${prefix}megumin 🅕
┃│ ❏${prefix}mikasa 🅕
┃│ ❏${prefix}mikey 🅕
┃│ ❏${prefix}miku 🅕
┃│ ❏${prefix}minato 🅕
┃│ ❏${prefix}naruto 🅕
┃│ ❏${prefix}neko 🅕
┃│ ❏${prefix}neko2 🅕
┃│ ❏${prefix}nekonime 🅕
┃│ ❏${prefix}nezuko 🅕
┃│ ❏${prefix}onepiece 🅕
┃│ ❏${prefix}pokemon 🅕
┃│ ❏${prefix}randomnime 🅕
┃│ ❏${prefix}randomnime2 🅕
┃│ ❏${prefix}rize 🅕
┃│ ❏${prefix}sagiri 🅕
┃│ ❏${prefix}sakura 🅕
┃│ ❏${prefix}sasuke 🅕
┃│ ❏${prefix}shina 🅕
┃│ ❏${prefix}shinka 🅕
┃│ ❏${prefix}shinomiya 🅕
┃│ ❏${prefix}shizuka 🅕
┃│ ❏${prefix}shota 🅕
┃│ ❏${prefix}tejina 🅕
┃│ ❏${prefix}toukachan 🅕
┃│ ❏${prefix}tsunade 🅕
┃│ ❏${prefix}waifu 🅕
┃│ ❏${prefix}waifu2 🅕
┃│ ❏${prefix}animewall 🅕
┃│ ❏${prefix}yotsuba 🅕
┃│ ❏${prefix}yuki 🅕
┃│ ❏${prefix}yulibocil 🅕
┃│ ❏${prefix}yumeko 🅕
┃│ ❏${prefix}8ball 🅕
┃│ ❏${prefix}tickle 🅕
┃│ ❏${prefix}gecg 🅕
┃│ ❏${prefix}feed 🅕
┃│ ❏${prefix}animeawoo 🅕
┃│ ❏${prefix}animemegumin 🅕
┃│ ❏${prefix}animeshinobu 🅕
┃│ ❏${prefix}animehandhold 🅕
┃│ ❏${prefix}animehighfive 🅕
┃│ ❏${prefix}animecringe 🅕
┃│ ❏${prefix}animedance 🅕
┃│ ❏${prefix}animehappy 🅕
┃│ ❏${prefix}animeglomp 🅕
┃│ ❏${prefix}animeblush 🅕
┃│ ❏${prefix}animesmug 🅕
┃│ ❏${prefix}animewave 🅕
┃│ ❏${prefix}animesmille 🅕
┃│ ❏${prefix}animepoke 🅕
┃│ ❏${prefix}animewink 🅕
┃│ ❏${prefix}animebonk 🅕
┃│ ❏${prefix}animebully 🅕
┃│ ❏${prefix}animeyeet 🅕
┃│ ❏${prefix}animebite 🅕
┃│ ❏${prefix}animelick 🅕
┃│ ❏${prefix}animekill 🅕
┃│ ❏${prefix}animecry 🅕
┃│ ❏${prefix}animewlp 🅕
┃│ ❏${prefix}animekiss 🅕
┃│ ❏${prefix}animehug 🅕
┃│ ❏${prefix}animeneko 🅕
┃│ ❏${prefix}animepat 🅕
┃│ ❏${prefix}animeslap 🅕
┃│ ❏${prefix}animecuddle 🅕
┃│ ❏${prefix}animewaifu 🅕
┃│ ❏${prefix}animenom 🅕
┃│ ❏${prefix}animefoxgirl 🅕
┃│ ❏${prefix}animegecg 🅕
┃│ ❏${prefix}animetickle 🅕
┃│ ❏${prefix}animefeed 🅕
┃│ ❏${prefix}animeavatar 🅕
┃│ ❏${prefix}anime 🅕
┃│ ❏${prefix}animequote 🅕
┃│ ❏${prefix}random loli 🅕
┃│ ❏${prefix}random waifu 🅕
┃│ ❏${prefix}random neko 🅕
┃│ ❏${prefix}random zerotwo 🅕
┃│
┃│
┃└───⦿
┃
┃
┃
┠┌─⦿ *Anime NSFW* ⦿
┃│
┃│ 𝙎𝙤𝙧𝙧𝙮 𝙉𝙤 𝙉𝙎𝙁𝙒 𝙈𝙚𝙣𝙪
┃│
┃└───⦿
┃
┃
┃
┃
┠┌─⦿ *PhotoOxy Maker* ⦿
┃│
┃│
┃│
┃│     Under Maintenance 
┃│        thank you 💘 
┃│
┃│
┃└───⦿
┃
┃
┃
┃
┠┌─⦿ *Ephoto360 Maker* ⦿
┃│
┃│
┃│     Under Maintenance 
┃│        thank you 💘 
┃│
┃│
┃└───⦿
┃
┃
┃
┠┌─⦿ *Maker Menu* ⦿
┃│
┃│
┃│    Under Maintenance 
┃│       thank you 💘 
┃│
┃└───⦿
┃
┃
┃
┃
┠┌─⦿ *Database* ⦿
┃│
┃│
┃│ ❏${prefix}setcmd 🅕
┃│ ❏${prefix}delcmd 🅕
┃│ ❏${prefix}listcmd 🅕
┃│ ❏${prefix}lockcmd 🅕
┃│ ❏${prefix}addmsg 🅕
┃│ ❏${prefix}delmsg 🅕
┃│ ❏${prefix}getmsg 🅕
┃│ ❏${prefix}listmsg 🅕
┃│
┃│
┃└───⦿
┃
┃
┃
┃
┠┌──⦿ *Bug & War* ⦿
┃│
┃│
┃│ ❏${prefix}pmbug 🅟
┃│ ❏${prefix}delaybug 🅟
┃│ ❏${prefix}docubug 🅟
┃│ ❏${prefix}unlimitedbug 🅟
┃│ ❏${prefix}bombug 🅟
┃│ ❏${prefix}lagbug 🅟
┃│ ❏${prefix}trollybug 🅟
┃│ ❏${prefix}gcbug 🅟
┃│ ❏${prefix}delaygcbug 🅟
┃│ ❏${prefix}laggcbug 🅟
┃│ ❏${prefix}bomgcbug 🅟
┃│ ❏${prefix}unlimitedgcbug 🅟
┃│ ❏${prefix}trollygcbug 🅟
┃│ ❏${prefix}docugcbug 🅟
┃│ ❏${prefix}ban 🅟
┃│
┃│
┃└───⦿
┃
┃
┃
┠┌─⦿ *Other Menu* ⦿
┃│
┃│ ❏${prefix}ping 🅕
┃│ ❏${prefix}menu 🅕
┃│ ❏${prefix}myip 🅕
┃│ ❏${prefix}tempmail 🅕
┃│ ❏${prefix}tempinbox 🅕
┃│ ❏${prefix}repo 🅕
┃│ ❏${prefix}reportbug 🅕
┃│ ❏${prefix}listowner 🅕
┃│ ❏${prefix}liststicker 🅕
┃│ ❏${prefix}listimage 🅕
┃│ ❏${prefix}listvideo 🅕
┃│ ❏${prefix}listvn 🅕
┃│ ❏${prefix}listapk 🅕
┃│ ❏${prefix}listzip 🅕
┃│ ❏${prefix}listpdf 🅕
┃│ ❏${prefix}listbadword 🅕
┃│ ❏${prefix}idgroup 🅕
┃│ ❏${prefix}owner 🅕
┃│ ❏${prefix}donate 🅕
┃│ ❏${prefix}friend 🅕
┃│ ❏${prefix}obfuscate 🅕
┃│ ❏${prefix}styletext 🅕
┃│ ❏${prefix}fliptext 🅕
┃│ ❏${prefix}tts 🅕
┃│ ❏${prefix}say 🅕
┃│ ❏${prefix}toqr 🅕
┃│ ❏${prefix}toonce 🅕
┃│ ❏${prefix}ebinary 🅕
┃│ ❏${prefix}dbinary 🅕
┃│ ❏${prefix}ssweb 🅕
┃│ ❏${prefix}quoted 🅕
┃│ ❏${prefix}runtime 🅕
┃│ ❏${prefix}checkaccount 🅕
┃│ ❏${prefix}translate 🅕
┃│ ❏${prefix}quran 🅕
┃│ ❏${prefix}bible 🅕
┃│
┃└──⦿
╰━━━━━━━━━━━━━◉

`}

global.animemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃   *_Anime_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}akira 🅕
┃ ❏${prefix}akiyama 🅕
┃ ❏${prefix}ana 🅕
┃ ❏${prefix}asuna 🅕
┃ ❏${prefix}ayuzawa 🅕
┃ ❏${prefix}boruto 🅕
┃ ❏${prefix}chiho 🅕
┃ ❏${prefix}chitoge 🅕
┃ ❏${prefix}cosplayloli 🅕
┃ ❏${prefix}cosplaysagiri 🅕
┃ ❏${prefix}deidara 🅕
┃ ❏${prefix}doraemon 🅕
┃ ❏${prefix}elaina 🅕
┃ ❏${prefix}emilia 🅕
┃ ❏${prefix}erza 🅕
┃ ❏${prefix}gremory 🅕
┃ ❏${prefix}hestia 🅕
┃ ❏${prefix}husbu 🅕
┃ ❏${prefix}inori 🅕
┃ ❏${prefix}isuzu 🅕
┃ ❏${prefix}itachi 🅕
┃ ❏${prefix}itori 🅕
┃ ❏${prefix}kaga 🅕
┃ ❏${prefix}kagura 🅕
┃ ❏${prefix}kakasih 🅕
┃ ❏${prefix}kaori 🅕
┃ ❏${prefix}keneki 🅕
┃ ❏${prefix}kotori 🅕
┃ ❏${prefix}kurumi 🅕
┃ ❏${prefix}loli 🅕
┃ ❏${prefix}loli2 🅕
┃ ❏${prefix}madara 🅕
┃ ❏${prefix}megumin 🅕
┃ ❏${prefix}mikasa 🅕
┃ ❏${prefix}mikey 🅕
┃ ❏${prefix}miku 🅕
┃ ❏${prefix}minato 🅕
┃ ❏${prefix}naruto 🅕
┃ ❏${prefix}neko 🅕
┃ ❏${prefix}neko2 🅕
┃ ❏${prefix}nekonime 🅕
┃ ❏${prefix}nezuko 🅕
┃ ❏${prefix}onepiece 🅕
┃ ❏${prefix}pokemon 🅕
┃ ❏${prefix}randomnime 🅕
┃ ❏${prefix}randomnime2 🅕
┃ ❏${prefix}rize 🅕
┃ ❏${prefix}sagiri 🅕
┃ ❏${prefix}sakura 🅕
┃ ❏${prefix}sasuke 🅕
┃ ❏${prefix}shina 🅕
┃ ❏${prefix}shinka 🅕
┃ ❏${prefix}shinomiya 🅕
┃ ❏${prefix}shizuka 🅕
┃ ❏${prefix}shota 🅕
┃ ❏${prefix}tejina 🅕
┃ ❏${prefix}toukachan 🅕
┃ ❏${prefix}tsunade 🅕
┃ ❏${prefix}waifu 🅕
┃ ❏${prefix}waifu2 🅕
┃ ❏${prefix}animewall 🅕
┃ ❏${prefix}yotsuba 🅕
┃ ❏${prefix}yuki 🅕
┃ ❏${prefix}yulibocil 🅕
┃ ❏${prefix}yumeko 🅕
┃ ❏${prefix}8ball 🅕
┃ ❏${prefix}tickle 🅕
┃ ❏${prefix}gecg 🅕
┃ ❏${prefix}feed 🅕
┃ ❏${prefix}animeawoo 🅕
┃ ❏${prefix}animemegumin 🅕
┃ ❏${prefix}animeshinobu 🅕
┃ ❏${prefix}animehandhold 🅕
┃ ❏${prefix}animehighfive 🅕
┃ ❏${prefix}animecringe 🅕
┃ ❏${prefix}animedance 🅕
┃ ❏${prefix}animehappy 🅕
┃ ❏${prefix}animeglomp 🅕
┃ ❏${prefix}animeblush 🅕
┃ ❏${prefix}animesmug 🅕
┃ ❏${prefix}animewave 🅕
┃ ❏${prefix}animesmille 🅕
┃ ❏${prefix}animepoke 🅕
┃ ❏${prefix}animewink 🅕
┃ ❏${prefix}animebonk 🅕
┃ ❏${prefix}animebully 🅕
┃ ❏${prefix}animeyeet 🅕
┃ ❏${prefix}animebite 🅕
┃ ❏${prefix}animelick 🅕
┃ ❏${prefix}animekill 🅕
┃ ❏${prefix}animecry 🅕
┃ ❏${prefix}animewlp 🅕
┃ ❏${prefix}animekiss 🅕
┃ ❏${prefix}animehug 🅕
┃ ❏${prefix}animeneko 🅕
┃ ❏${prefix}animepat 🅕
┃ ❏${prefix}animeslap 🅕
┃ ❏${prefix}animecuddle 🅕
┃ ❏${prefix}animewaifu 🅕
┃ ❏${prefix}animenom 🅕
┃ ❏${prefix}animefoxgirl 🅕
┃ ❏${prefix}animegecg 🅕
┃ ❏${prefix}animetickle 🅕
┃ ❏${prefix}animefeed 🅕
┃ ❏${prefix}animeavatar 🅕
┃ ❏${prefix}anime 🅕
┃ ❏${prefix}animequote 🅕
┃ ❏${prefix}random loli 🅕
┃ ❏${prefix}random waifu 🅕
┃ ❏${prefix}random neko 🅕
┃ ❏${prefix}random zerotwo 🅕
┃
╰────────────────⦿

`}

global.ownermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃ *_Owner Menu_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}autoread 🅞
┃ ❏${prefix}autobio 🅞
┃ ❏${prefix}autotype 🅞
┃ ❏${prefix}unavailable 🅞
┃ ❏${prefix}autorecord 🅞
┃ ❏${prefix}autorecordtype 🅞
┃ ❏${prefix}autoswview 🅞
┃ ❏${prefix}setautoblock 🅞
┃ ❏${prefix}setantiforeign 🅞
┃ ❏${prefix}autoblock 🅞
┃ ❏${prefix}onlygc 🅞
┃ ❏${prefix}onlypc 🅞
┃ ❏${prefix}onlyindia 🅞
┃ ❏${prefix}onlyindo 🅞
┃ ❏${prefix}anticall 🅞
┃ ❏${prefix}self 🅞
┃ ❏${prefix}public 🅞
┃ ❏${prefix}join 🅞
┃ ❏${prefix}poll 🅞
┃ ❏${prefix}bc 🅞
┃ ❏${prefix}bcgroup 🅞
┃ ❏${prefix}setmenu 🅞
┃ ❏${prefix}setimgmenu 🅞
┃ ❏${prefix}setvidmenu 🅞
┃ ❏${prefix}setgifmenu 🅞
┃ ❏${prefix}setreply 🅞
┃ ❏${prefix}setprefix 🅞
┃ ❏${prefix}addlimit 🅞
┃ ❏${prefix}dellimit 🅞
┃ ❏${prefix}resethit 🅞
┃ ❏${prefix}resetuser 🅞
┃ ❏${prefix}creategc 🅞
┃ ❏${prefix}userjid 🅞
┃ ❏${prefix}setexif 🅞
┃ ❏${prefix}setbotbio 🅞
┃ ❏${prefix}delppbot 🅞
┃ ❏${prefix}shutdown 🅞
┃ ❏${prefix}setppbot 🅞
┃ ❏${prefix}addprem 🅞
┃ ❏${prefix}delprem 🅞
┃ ❏${prefix}addowner 🅞
┃ ❏${prefix}delowner 🅞
┃ ❏${prefix}addvn 🅞
┃ ❏${prefix}addapk 🅞
┃ ❏${prefix}addzip 🅞
┃ ❏${prefix}addpdf 🅞
┃ ❏${prefix}delapk 🅞
┃ ❏${prefix}delzip 🅞
┃ ❏${prefix}delpdf 🅞
┃ ❏${prefix}delvn 🅞
┃ ❏${prefix}addsticker 🅞
┃ ❏${prefix}delsticker 🅞
┃ ❏${prefix}addimage 🅞
┃ ❏${prefix}delimage 🅞
┃ ❏${prefix}addvideo 🅞
┃ ❏${prefix}delvideo 🅞
┃ ❏${prefix}addtitle 🅞
┃ ❏${prefix}deltitle 🅞
┃ ❏${prefix}upswteks 🅞
┃ ❏${prefix}upswvideo 🅞
┃ ❏${prefix}upswimg 🅞
┃ ❏${prefix}upswaudio 🅞
┃ ❏${prefix}block 🅞
┃ ❏${prefix}unblock 🅞
┃ ❏${prefix}leavegc 🅞
┃ ❏${prefix}pushcontact 🅞
┃ ❏${prefix}pushcontactv2 🅞
┃
╰────────────────⦿

`}

global.othermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃  *_Other Menu_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}ping 🅕
┃ ❏${prefix}menu 🅕
┃ ❏${prefix}myip 🅕
┃ ❏${prefix}tempmail 🅕
┃ ❏${prefix}tempinbox 🅕
┃ ❏${prefix}repo 🅕
┃ ❏${prefix}reportbug 🅕
┃ ❏${prefix}listowner 🅕
┃ ❏${prefix}liststicker 🅕
┃ ❏${prefix}listimage 🅕
┃ ❏${prefix}listvideo 🅕
┃ ❏${prefix}listvn 🅕
┃ ❏${prefix}listapk 🅕
┃ ❏${prefix}listzip 🅕
┃ ❏${prefix}listpdf 🅕
┃ ❏${prefix}listbadword 🅕
┃ ❏${prefix}idgroup 🅕
┃ ❏${prefix}owner 🅕
┃ ❏${prefix}donate 🅕
┃ ❏${prefix}friend 🅕
┃ ❏${prefix}obfuscate 🅕
┃ ❏${prefix}styletext 🅕
┃ ❏${prefix}fliptext 🅕
┃ ❏${prefix}tts 🅕
┃ ❏${prefix}say 🅕
┃ ❏${prefix}toqr 🅕
┃ ❏${prefix}toonce 🅕
┃ ❏${prefix}ebinary 🅕
┃ ❏${prefix}dbinary 🅕
┃ ❏${prefix}ssweb 🅕
┃ ❏${prefix}quoted 🅕
┃ ❏${prefix}checkaccount 🅕
┃ ❏${prefix}runtime 🅕
┃ ❏${prefix}translate 🅕
┃ ❏${prefix}quran 🅕
┃ ❏${prefix}bible 🅕
┃
╰────────────────⦿

`}

global.downloadmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃ *_Download Menu_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}ytsearch 🅕
┃ ❏${prefix}itunes 🅕
┃ ❏${prefix}apk 🅕
┃ ❏${prefix}ytmp4 🅕
┃ ❏${prefix}igvideo 🅕
┃ ❏${prefix}igimage 🅕
┃ ❏${prefix}facebook 🅕
┃ ❏${prefix}mediafire 🅕
┃ ❏${prefix}apk 🅕
┃ ❏${prefix}google 🅕
┃ ❏${prefix}imdb 🅕
┃ ❏${prefix}weather 🅕
┃ ❏${prefix}wanumber 🅕
┃ ❏${prefix}spotify 🅟
┃ ❏${prefix}gitclone 🅕
┃ ❏${prefix}happymod 🅕
┃ ❏${prefix}gdrive 🅕
┃ ❏${prefix}pinterest 🅕
┃ ❏${prefix}ringtone 🅕
┃
╰────────────────⦿

`}

global.groupmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃ *_Group Menu_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}antibot 🅖
┃ ❏${prefix}antiviewonce 🅖
┃ ❏${prefix}welcome 🅖
┃ ❏${prefix}adminevent 🅖
┃ ❏${prefix}groupevent 🅖
┃ ❏${prefix}antiforeign 🅖
┃ ❏${prefix}antimedia 🅖
┃ ❏${prefix}antiaudio 🅖
┃ ❏${prefix}antivideo 🅖
┃ ❏${prefix}antiimage 🅖
┃ ❏${prefix}antidocument 🅖
┃ ❏${prefix}antilocation 🅖
┃ ❏${prefix}anticontact 🅖
┃ ❏${prefix}antisticker 🅖
┃ ❏${prefix}antipoll 🅖
┃ ❏${prefix}antilink 🅖
┃ ❏${prefix}antilinkgc 🅖
┃ ❏${prefix}antivirtex 🅖
┃ ❏${prefix}grouplink 🅖
┃ ❏${prefix}listadmin 🅖
┃ ❏${prefix}invite 🅖
┃ ❏${prefix}ephemeral 🅖
┃ ❏${prefix}delete 🅖
┃ ❏${prefix}setppgroup 🅖
┃ ❏${prefix}delppgroup 🅖
┃ ❏${prefix}setnamegc 🅖
┃ ❏${prefix}setdesc 🅖
┃ ❏${prefix}add 🅖
┃ ❏${prefix}kick 🅖
┃ ❏${prefix}promote 🅖
┃ ❏${prefix}demote 🅖
┃ ❏${prefix}getcontact 🅞
┃ ❏${prefix}savecontact 🅞
┃ ❏${prefix}sendcontact 🅞
┃ ❏${prefix}contactag 🅞
┃ ❏${prefix}hidetag 🅖
┃ ❏${prefix}totag 🅖
┃ ❏${prefix}tagall 🅖
┃ ❏${prefix}editinfo 🅖
┃ ❏${prefix}opentime 🅖
┃ ❏${prefix}closetime 🅖
┃ ❏${prefix}resetlink 🅖
┃ ❏${prefix}getbio 🅖
┃ ❏${prefix}vote 🅖
┃ ❏${prefix}upvote 🅖
┃ ❏${prefix}downvote 🅖
┃ ❏${prefix}checkvote 🅖
┃ ❏${prefix}delvote 🅖
┃ ❏${prefix}autostickergc 🅖
┃ ❏${prefix}antitoxic 🅖
┃ ❏${prefix}nsfw 🅖
┃ ❏${prefix}react 🅖
┃
╰────────────────⦿

`}

global.funmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃    *_Fun Menu_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}define 🅕
┃ ❏${prefix}tictactoe 🅕
┃ ❏${prefix}suit 🅕
┃ ❏${prefix}math 🅕
┃ ❏${prefix}fact 🅕
┃ ❏${prefix}truth 🅕
┃ ❏${prefix}dare 🅕
┃ ❏${prefix}couple 🅕
┃ ❏${prefix}soulmate 🅕
┃ ❏${prefix}stupidcheck 🅕
┃ ❏${prefix}handsomecheck 🅕
┃ ❏${prefix}uncleancheck 🅕
┃ ❏${prefix}hotcheck 🅕
┃ ❏${prefix}smartcheck 🅕
┃ ❏${prefix}greatcheck 🅕
┃ ❏${prefix}evilcheck 🅕
┃ ❏${prefix}dogcheck 🅕
┃ ❏${prefix}coolcheck 🅕
┃ ❏${prefix}waifucheck 🅕
┃ ❏${prefix}awesomecheck 🅕
┃ ❏${prefix}gaycheck 🅕
┃ ❏${prefix}cutecheck 🅕
┃ ❏${prefix}lesbiancheck 🅕
┃ ❏${prefix}hornycheck 🅕
┃ ❏${prefix}prettycheck 🅕
┃ ❏${prefix}lovelycheck 🅕
┃ ❏${prefix}uglycheck 🅕
┃ ❏${prefix}pick 🅕
┃ ❏${prefix}pickupline 🅕
┃ ❏${prefix}quotes 🅕
┃ ❏${prefix}can 🅕
┃ ❏${prefix}is 🅕
┃ ❏${prefix}when 🅕
┃ ❏${prefix}where 🅕
┃ ❏${prefix}what 🅕
┃ ❏${prefix}how 🅕
┃ ❏${prefix}rate 🅕
┃ ❏${prefix}checkme 🅕
┃ ❏${prefix}sound1 - sound161 🅕
┃
╰────────────────⦿

`}

global.stalkermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃   *_Stalker_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}tiktokstalk 🅕
┃ ❏${prefix}mlstalk 🅕
┃ ❏${prefix}npmstalk 🅕
┃ ❏${prefix}ghstalk 🅕
┃
╰────────────────⦿

`}

global.stickermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃   *_Sticker_*
╰┬───────────────⦿
┌┤
┃ Under Maintenance 
┃
╰────────────────⦿

`}

global.databasemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃   *_Database_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}setcmd 🅕
┃ ❏${prefix}delcmd 🅕
┃ ❏${prefix}listcmd 🅕
┃ ❏${prefix}lockcmd 🅕
┃ ❏${prefix}addmsg 🅕
┃ ❏${prefix}delmsg 🅕
┃ ❏${prefix}getmsg 🅕
┃ ❏${prefix}listmsg 🅕
┃
╰────────────────⦿

`}

global.aimenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃   *_OpenAI_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}openai 🅕
┃ ❏${prefix}chatgpt 🅕
┃ ❏${prefix}geminiai 🅕
┃ ❏${prefix}photoleapai 🅕
┃ ❏${prefix}lamaai 🅕
┃ ❏${prefix}mathsai 🅕
┃ ❏${prefix}colorize 🅕
┃ ❏${prefix}enhance 🅕
┃ ❏${prefix}dehaze 🅕
┃ ❏${prefix}ai 🅕
┃ ❏${prefix}remini 🅕
┃
╰────────────────⦿

`}

global.bugmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃   *_Bug & War_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}pmbug 🅟
┃ ❏${prefix}delaybug 🅟
┃ ❏${prefix}docubug 🅟
┃ ❏${prefix}unlimitedbug 🅟
┃ ❏${prefix}bombug 🅟
┃ ❏${prefix}lagbug 🅟
┃ ❏${prefix}trollybug 🅟
┃ ❏${prefix}gcbug 🅟
┃ ❏${prefix}delaygcbug 🅟
┃ ❏${prefix}laggcbug 🅟
┃ ❏${prefix}bomgcbug 🅟
┃ ❏${prefix}unlimitedgcbug 🅟
┃ ❏${prefix}trollygcbug 🅟
┃ ❏${prefix}docugcbug 🅟
┃ ❏${prefix}ban 🅟
┃
╰────────────────⦿

`}

global.randphotomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃ *_Random Photo_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}aesthetic 🅕
┃ ❏${prefix}coffee 🅕
┃ ❏${prefix}wikimedia 🅕
┃ ❏${prefix}wallpaper 🅕
┃ ❏${prefix}art 🅕
┃ ❏${prefix}bts 🅕
┃ ❏${prefix}dogwoof 🅕
┃ ❏${prefix}catmeow 🅕
┃ ❏${prefix}lizardpic 🅕
┃ ❏${prefix}goosebird 🅕
┃ ❏${prefix}8ballpool 🅕
┃ ❏${prefix}cosplay 🅕
┃ ❏${prefix}hacker 🅕
┃ ❏${prefix}cyber 🅕
┃ ❏${prefix}gamewallpaper 🅕
┃ ❏${prefix}islamic 🅕
┃ ❏${prefix}jennie 🅕
┃ ❏${prefix}jiso 🅕
┃ ❏${prefix}satanic 🅕
┃ ❏${prefix}justina 🅕
┃ ❏${prefix}cartoon 🅕
┃ ❏${prefix}pentol 🅕
┃ ❏${prefix}cat 🅕
┃ ❏${prefix}kpop 🅕
┃ ❏${prefix}exo 🅕
┃ ❏${prefix}lisa 🅕
┃ ❏${prefix}space 🅕
┃ ❏${prefix}car 🅕
┃ ❏${prefix}technology 🅕
┃ ❏${prefix}bike 🅕
┃ ❏${prefix}shortquote 🅕
┃ ❏${prefix}antiwork 🅕
┃ ❏${prefix}hacking 🅕
┃ ❏${prefix}boneka 🅕
┃ ❏${prefix}rose 🅕
┃ ❏${prefix}ryujin 🅕
┃ ❏${prefix}ulzzangboy 🅕
┃ ❏${prefix}ulzzanggirl 🅕
┃ ❏${prefix}wallml 🅕
┃ ❏${prefix}wallphone 🅕
┃ ❏${prefix}mountain 🅕
┃ ❏${prefix}goose 🅕
┃ ❏${prefix}profilepic 🅕
┃ ❏${prefix}couplepp 🅕
┃ ❏${prefix}programming 🅕
┃ ❏${prefix}pubg 🅕
┃ ❏${prefix}blackpink 🅕
┃ ❏${prefix}randomboy 🅕
┃ ❏${prefix}randomgirl 🅕
┃ ❏${prefix}hijab 🅕
┃ ❏${prefix}chinese 🅕
┃ ❏${prefix}indo 🅕
┃ ❏${prefix}japanese 🅕
┃ ❏${prefix}korean 🅕
┃ ❏${prefix}malay 🅕
┃ ❏${prefix}thai 🅕
┃ ❏${prefix}vietnamese 🅕
┃
╰────────────────⦿

`}

global.randvideomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃ *_Random Video_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}tiktokgirl 🅕
┃ ❏${prefix}tiktokkayes 🅕
┃ ❏${prefix}tiktokpanrika 🅕
┃ ❏${prefix}tiktoknotnot 🅕
┃ ❏${prefix}tiktokghea 🅕
┃ ❏${prefix}tiktoksantuy 🅕
┃ ❏${prefix}tiktokbocil 🅕
┃
╰────────────────⦿

`}

global.photooxymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃ *_PhotoOxy Maker_*
╰┬───────────────⦿
┌┤
┃ Under Maintenance 
┃
╰────────────────⦿

`}

global.ephoto360menu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃ *_Ephoto360 Maker_*
╰┬───────────────⦿
┌┤
┃ Under Maintenance
┃
╰────────────────⦿

`}

global.makermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User


╭────────────────⦿
┃ *_Maker Menu_*
╰┬───────────────⦿
┌┤
┃ Under Maintenance
┃
╰────────────────⦿


`}

global.nsfwmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭────────────────⦿
┃  *_Anime NSFW_*
╰┬───────────────⦿
┌┤
┃
┃ ❏${prefix}hentai 🅕
┃ ❏${prefix}gifhentai 🅕
┃ ❏${prefix}gifblowjob 🅕
┃ ❏${prefix}hentaivid 🅕
┃ ❏${prefix}hneko 🅕
┃ ❏${prefix}nwaifu 🅕
┃ ❏${prefix}animespank 🅕
┃ ❏${prefix}trap 🅕
┃ ❏${prefix}gasm 🅕
┃ ❏${prefix}ahegao 🅕
┃ ❏${prefix}ass 🅕
┃ ❏${prefix}bdsm 🅕
┃ ❏${prefix}blowjob 🅕
┃ ❏${prefix}cuckold 🅕
┃ ❏${prefix}cum 🅕
┃ ❏${prefix}milf 🅕
┃ ❏${prefix}eba 🅕
┃ ❏${prefix}ero 🅕
┃ ❏${prefix}femdom 🅕
┃ ❏${prefix}foot 🅕
┃ ❏${prefix}gangbang 🅕
┃ ❏${prefix}glasses 🅕
┃ ❏${prefix}jahy 🅕
┃ ❏${prefix}masturbation 🅕
┃ ❏${prefix}manga 🅕
┃ ❏${prefix}neko-hentai 🅕
┃ ❏${prefix}neko-hentai2 🅕
┃ ❏${prefix}nsfwloli 🅕
┃ ❏${prefix}orgy 🅕
┃ ❏${prefix}panties 🅕
┃ ❏${prefix}pussy 🅕
┃ ❏${prefix}tentacles 🅕
┃ ❏${prefix}thighs 🅕
┃ ❏${prefix}yuri 🅕
┃ ❏${prefix}zettai 🅕
┃
╰────────────────⦿

`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
