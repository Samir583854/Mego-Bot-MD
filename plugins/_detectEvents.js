// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

 /*Bot: https://github.com/Gatito-kw/nekobot-md */

import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0
  const groupName = (await conn.groupMetadata(m.chat)).subject
  const groupAdmins = participants.filter((p) => p.admin)
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/sinfoto.jpg'
  const img = await (await fetch(pp)).buffer()
  const chat = global.db.data.chats[m.chat]
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]
  const mentionsContentM = [m.sender, m.messageStubParameters[0]]
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `❕ *NUEVO ADMIN* ❕\n\n`
    txt1 += `⚠️ *• Nombre:* @${m.messageStubParameters[0].split`@`[0]}\n`
    txt1 += `⚠️ *• Le otorgó admin:* @${m.sender.split`@`[0]}`
    await delay(3000 * 3);
    await conn.sendMessage(m.chat, {text: txt1, mentions: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": nn, "sourceUrl": nn}}});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `❗ *UN ADMIN MENOS* ❗\n\n`
    txt2 += `⚠️ *• Nombre:* @${m.messageStubParameters[0].split`@`[0]}\n`
    txt2 += `⚠️ *• Le quitó admin:* @${m.sender.split`@`[0]}`
    await delay(3000 * 3);
    await conn.sendMessage(m.chat, {text: txt2, mentions: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": md, "sourceUrl": yt}}});
   // await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fliveLoc})
  }
   
  
}
