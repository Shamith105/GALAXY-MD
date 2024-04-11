"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "✅", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝗙𝗢𝗥𝗞 𝗔𝗡𝗗 𝗗𝗘𝗣𝗟𝗢𝗬 𝗠𝗬 𝗚𝗔𝗟𝗔𝗫𝗬-𝗠𝗗 𝗨𝗦𝗘𝗥 𝗕𝗢𝗧  \n\n ' + "𝗚𝗜𝗧𝗛𝗨𝗕 𝗟𝗜𝗡𝗞*";
    let d = ' https://github.com/shamith105/GALAXY-MD/tree/main';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/479b0423f97190a279200.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *GALAXY-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Shamith Eduwara*'
      let varmess=z+d
      var img='https://telegra.ph/file/479b0423f97190a279200.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
