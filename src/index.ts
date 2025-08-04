import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port: 8080});

interface User {
  socket: WebSocket,
  room: string
}

let allSocket: User[] = [];

wss.on("connection", function (socket) {

  socket.on("message", (msg) => {
    // @ts-ignore
    const parsedMessage = JSON.parse(msg);
    if(parsedMessage.type == "join"){
      allSocket.push({
        // @ts-ignore
        socket,
        room: parsedMessage.payload.roomId
      })
    }
    if(parsedMessage.type == "chat"){
      let currentSocketroom = null;
      for(let i=0; i< allSocket.length; i++){
        // @ts-ignore
        if(allSocket[i].socket == socket){
          currentSocketroom = allSocket[i].room;
        }
      }

    for (let i = 0; i < allSocket.length; i++) {
      if (allSocket[i].room == currentSocketroom) {
        allSocket[i].socket.send(parsedMessage.payload.message)
        }
      }
    }})
  
});
