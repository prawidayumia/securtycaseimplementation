# Simlpe TCP Chat Client Server using Node.js
<br> This is a short explanation about the program. Build a Chat App with Node.js and Socket.io

# Description
<br> We use Socket.io for the data transfer process system. Socket.io itself, is a library that allows real-time, event-based communication in Node.js and browser-based applications. Uses the implementation of WebSockets protocol. But, is socket.io implement TCP or UDP? What is the difference between TCP and UDP? TCP is a connection-oriented protocol, whereas UDP is a connectionless protocol. The speed for TCP is slower while the speed of UDP is faster. TCP uses handshake protocols like SYN, SYN-ACK, ACK while UDP uses no handshake protocols. (guru99.com)
<br> In my program, it's implementing to be TCP protocol refer to Stack Over Flow discussion about Socket.io. So from the client's perspective, it uses TCP.

<br> And what about WebSockets that I mention before? WebSockets allows you to communicate between a client and a server in a nonstandard way. With WebSockets, there is an open connection established between the client and the server. This open connection makes it possible for both of them to communicate instantly.
But refer to https://socket.io/docs/v3/server-api/index.html. They explain Socket doesn’t relate directly to the actual underlying TCP/IP socket and it is only the name of the class

# Flowchart
<br> Here is the flow between Client and Server
<br> ![Flowchart Client Server](https://user-images.githubusercontent.com/56972989/124861217-54e51d80-dfdd-11eb-85db-abefd8b631bc.png)

# Mind Map Program Explain

> Simple flow of how the app works. Plus it can save the chat history also changing the index of the player

<br>![TCP Client Server - Mind Map Program Explain](https://user-images.githubusercontent.com/56972989/124792542-46641b00-df77-11eb-89a7-031c5cd967b1.png)

<br> Here we have 3 parts as the main program. Those are Server.js as server Script.js as client and index.html as an interface to show the chat program. I write in every line’s comments of codes explained using Bahasa. In short, I use Express and Socket.io as the library for transferring data systems. NPM provides that. We can install it by Windows Power Shell. Messages you send will be displayed on every page of the player you open, how? It uses emit.io for broadcast to all clients. But we use socket.emit to display history chat to new user. It use to private chat between server to clients.

<br> This program using java as a language and Node.js as the server. Picture 2- Mind Map I attach above is simply explaining about the program in short. At first, we use socket.emit to the client that joins by now.  

# Result/Program Output
Activate the program
![Screenshot (278)](https://user-images.githubusercontent.com/56972989/124791101-f59ff280-df75-11eb-97f6-9fbcd2f0bf2b.png)

<br>Open pages on Chrome. Klick Localhost:3000 (the number it can be change depend on the number you set on the code). Now we can start chatting.

<br>Chat from Player 0
![Screenshot (279)](https://user-images.githubusercontent.com/56972989/124791287-21bb7380-df76-11eb-94f3-e5e755230996.png)

<br>Chat from Player 1
![Screenshot (280)](https://user-images.githubusercontent.com/56972989/124791362-30a22600-df76-11eb-8e22-193f50eee567.png)

<br>What about this picture below. Ups. Session expired. What happen? I write down on Pro Tips.
![Screenshot (281)](https://user-images.githubusercontent.com/56972989/124791475-49124080-df76-11eb-9834-4e0ce6721816.png)

<br>The history will be saved on history.txt. The number of player we set by index from the code.
![Screenshot (282)](https://user-images.githubusercontent.com/56972989/124791661-765eee80-df76-11eb-989f-59e25dd79336.png)

# Pro Tips
When you refresh the page of your client, either one of them or all of them. The Player’s index will be changing. For example, if you now write a message from Player 1 and you refresh the page then the player index will be changed to another player. Why? Because the system recognizes it as Player 1’s session chat expired. How to solve or start the client chat? We can reset the node server.js from the Command prompt by writing ctrl+c and type node server.js, note that we should copy and paste the location of the program you saved by type cd “E: Program Chat Client-Server (just example)” and activate the server.

I learn the program from this web (https://blog.crowdbotics.com/build-chat-app-with-nodejs-socket-io/) and modified it also adding features to save chat history into a txt file and adding the number of players by array.  
<br> Written by : Prawida Yumia (4210191005)

<br> You can reach me through email at prawidayumia@gmail.com. 
<br>I write in some platform too, but not about tech. Not yet.

