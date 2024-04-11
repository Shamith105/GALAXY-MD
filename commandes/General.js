const { zokou } = require("../framework/zokou");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

zokou({ nomCom: "owner", categorie: "General", reaction: "💞" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

zokou({ nomCom: "developer", categorie: "General", reaction: "👨‍💻" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "💀 *✔️.Creater :Sahan Maduwantha* 💀", numero: "94789958225" },
      { nom: "💀 *✔️.Co Leader : Hemal Veenath* 💀", numero: "94719552053" },
        { nom: "💀 *✔️.Bug Test : Kanishka de Silva* 💀", numero: "94722477361" },
        { nom: "💀 *✔️.Test : Cyber Buddy* 💀", numero: "94728103228" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "👋 *WELCOME TO GALAXY-MD WHATSAPP USER BOT.. GALAXY-MD DEVELOPERS ARE* \n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("💀 *GALAXY-MD Developer @Shamith's Number* 💀 \n *+94761634482* ")
  await zk.sendMessage(auteurMessage,{text : `https://wa.me/94761634482text=Hey_GALAXY-MD_Owner_👨‍💻✅`},{quoted :ms})

});
zokou({ nomCom: "sahan", categorie: "Creator" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("💀 *GALAXY-MD BOT CREATED BY SHAMITH 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀FROM MAWANELLA💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 14 YEARS OLD 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  *© Created By GALAXY MD..👨‍💻* ")
  await zk.sendMessage(auteurMessage,{text : `*Leader Link https://wa.me/94761634482?text=Hey_Owner_👨‍💻✅*`},{quoted :ms})

});
zokou({ nomCom: "shamith", categorie: "Creator" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("💀 *GALAXY-MD Bot  leader is Mr shamith eduwara. 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀From mawanella💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 14 Years Old💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  *© Created By GALAXY MD..👨‍💻* ")
  await zk.sendMessage(auteurMessage,{text : `*Leader Link https://wa.me/+94761634482?text=Hey_Leader_👨‍💻✅*`},{quoted :ms})

});
zokou({ nomCom: "kanishka", categorie: "Creator" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("💀 *GALAXY-MD Bot Bug Tester is Kanishka De Silva 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀From Ambalangoda💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 17 Years Old💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  *© Created By GALAXY MD..👨‍💻* ")
  await zk.sendMessage(auteurMessage,{text : `*Bug Tester Link https://wa.me/+94722477361?text=Hey_Owner_👨‍💻✅*`},{quoted :ms})

});
zokou({ nomCom: "kavi", categorie: "Creator" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("💀 *GALAXY-MD Tester is Mr Cyber kavi 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀From Sri Lanka💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 17 Years Old💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  *© Created By GALAXY MD..👨‍💻* ")
  await zk.sendMessage(auteurMessage,{text : `*Tester Link https://wa.me/+94743579892?text=Hey_Tester_👨‍💻✅*`},{quoted :ms})

})

