import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info9 = `┓━ ╼━━━╃⌬〔 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 〕⌬╄━━━╾ ━┏
 مـرحــبـا ${taguser} 👋🏻

≼👤≽ مـعـلــومـات الـبــوت╿↶
━ ── • ꕤ • ── ━
 اســم الـبــوت  𝐌𝐄𝐆𝐎 お ‘ 
منـصـه التـشغيــل 【.هيروكو.】
وقت التشغيل : ${uptime}
التاريخ : ${date}
مطوري : wa.me/+201012531172
⋄━───═◞⬪⇊⬪◟═───━⋄
اذا لم يرد عليك البوت عليك ارسال 
⚡⇇.صلح 
⚡⇇.تصليح
━ ── • ꕤ • ── ━
⇊ قوائم بوت ميجو المطلوبه ⇊
.....................
🤖⇇.ذكاءاصطناعي
⛩️⇇ .الجروب
🔮⇇.الانمي
👥⇇.الاعضاء
🕋⇇.الدين
💎⇇.البنك
📥⇇.التحميلات
⚙️⇇.الادوات
♻️⇇.التحويلات
🎮⇇.الترفيه
🔊⇇.الاصوات
👑⇇.المطور
💢⇇.تصاميم
📌⇇. قائمتي
⚡⇇.المعرف 
💯⇇.السورس
📮⇇.قوانين
━ ── • ꕤ • ── ━
👋🏻 هلا اذا اردت الوصول اللي الاوامر مره واحده كامله ارسل

 🚩⇇.المهام

⋄━───═◞⬪قوانين⬪◟═───━⋄
❏╎❯ ممنوع سب البوت لانك سبيت البوت = سبيت المطور
❏╎❯ تمتع بالبوت ولا تكتر اسبام للبوت اذا كان لديك مشكله او تريد اضافه اوامر اخري جديده تواصل مع المطور
❏╎❯ المطور wa.me/+201012531172
*┛━ ╼━━━╃⌬〔 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 〕⌬╄━━━╾ ━┗*
`;

        const videoURL = 'https://telegra.ph/file/e27416d79b6803287c628.mp4';

        await conn.sendMessage(m.chat, { video : { url: videoURL }, caption: info });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^(الاوامر|menu|أوامر|اوامر)$/i

export default handler;
