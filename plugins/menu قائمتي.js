let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/9cac649e8a3d0fe37d31f.mp4'
  let { name } = global.db.data.users[who]
  m.react('👑')
let str = `                  ✥━─━⌬ Pan_𝒃𝒐𝒕 ⌬━─━✥
【..≼قــســم المطور≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄

❏..🛡️╎❯ .بان⌉
❏..🛡️╎❯ .بانفك⌉
❏..🛡️╎❯ .بانشات⌉
❏..🛡️╎❯ .بانشاتفك⌉
❏..🛡️╎❯ .حطهابروفايل⌉
❏..🛡️╎❯ .ضيفالماس⌉
❏..🛡️╎❯ .ضيفاكسبي⌉
❏..🛡️╎❯ .اعاده⌉
❏..🛡️╎❯ .اخرج⌉
❏..🛡️╎❯ .ادخل⌉
❏..🛡️╎❯ .تهكير⌉
❏..🛡️╎❯ .تنظيف⌉
❏..🛡️╎❯ .الامردا⌉
❏..🛡️╎❯ .البلوكات⌉
❏..🛡️╎❯ .فكالبلوك⌉
❏..🛡️╎❯ .بلوك⌉
❏..🛡️╎❯ .بريم⌉
❏..🛡️╎❯ .حذف_بريم⌉
❏..🛡️╎❯ .المميزين⌉
❏..🛡️╎❯ .تسريع⌉
❏..🛡️╎❯ .نشر⌉
                    ✥━─━⌬ Pan_𝒃𝒐𝒕 ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['قائمتي' ,'قايمه','القايمه']
handler.rowner = true
export default handler
