const express = require('express') //library butuh express dan socket.io u/ API (pintu komunikasi)
const app = express()
const server = require('http').createServer(app) 
const port = process.env.PORT || 3000 //3000 ini bisa diganti
const io = require('socket.io')(server) //komunikasi dua arah, TCP
const path = require('path') //jalannya
const fs = require('fs') //file system
const fileName = 'history.txt' //menyimpan history chat

// Jalankan Web Server pada folder public
app.use(express.static(path.join(__dirname + '/public')))

var ids = [] //variabel array untuk nomor sesi client (player) saat chat

// Dipanggil ketika client pertama kali terhubung
io.on('connection', socket => {

  // Mencatat id client pada variabel (index)
  ids.push(socket.id)
  socket.emit('id', ids.indexOf(socket.id)) //socket emit privat chat ke client
  
  readFile(socket)
  
  // Ketika server menerima pesan dari client
  socket.on('chat', message => {

    // Menetapkan index client
    var index = ids.indexOf(socket.id)
    var message = `[Player ${index}] ${message}`

    // broadcast data ke client
    io.emit('chat', message)

    writeFile(message)
  })
})

// Baca data history dari file .txt
const readFile = socket => {
  fs.readFile(fileName, 'utf8' , (err, data) => {
    if (err) return console.log(err)

    // Kirim history ke client yang baru terhubung
    socket.emit('history', data) //supaya client ga ngirim ke dirinya sendiri
  })
}

// Simpan data ke file .txt
const writeFile = message => { //appendfile menuliskan file baru ke history txt
  fs.appendFile(fileName, message + "\n", function (err) {
    if (err) return console.log(err)
  })
}

// Membuka server
server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})