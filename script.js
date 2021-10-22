const socket = io() //untuk berkomunikasi di jaringan
const chat = document.querySelector('.chat-form') //untuk form chat
const clientId = document.querySelector('.client-id') //untuk client
const Input = document.querySelector('.chat-input') //untuk input chat
const chatWindow = document.querySelector('.chat-window') //untuk jendela chat

// Ketika form disubmit / dienter
chat.addEventListener('submit', event => { 
  event.preventDefault() //untuk menghentikan aksi default
  
  // Kirim pesan ke server
  socket.emit('chat', Input.value) //untuk privat mengirim ke server

  // Reset nilai input
  Input.value = '' 
})

// Tampilkan pesan ke layar
const renderMessage = message => {
    const div = document.createElement('div') 
    div.classList.add('render-message')
    div.innerText = message
    chatWindow.appendChild(div) //metode menambahkan node sebagai anak terakhir dari sebuah node.
}

socket.on('id', id => {
  clientId.innerText = id //memperkirakan teks yang akan diterima pengguna
})

// Ketika client menerima list history chat dari server
socket.on('history', message => {
  renderMessage(message)
})

// Ketika client menerima pesan dari server
socket.on('chat', message => {
    renderMessage(message)
})