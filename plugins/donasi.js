let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Gopay [0895805304433]
│ • Three [0895805304433]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895805304433
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa Three"
3.)Dan terus masukkan nomor kami 0895805304433
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
