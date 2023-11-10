import { totalmem, freemem } from 'os'
import os from 'os'
import util from 'util'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
const format = sizeFormatter({ std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })

var handler = async (m, { conn }) => {
      
let timestamp = speed()
let latensi = speed() - timestamp

let chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
let groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))

exec(`neofetch --stdout`, (error, stdout, stderr) => {
let child = stdout.toString('utf-8')
let ssd = child.replace(/Memory:/, 'Ram:')
m.reply(`*🏓 Pong  ${latensi.toFixed(4)}*

Grupos: ${groupsIn}`)})

}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']
handler.register = true

export default handler
