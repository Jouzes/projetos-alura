import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { app } from "./app";

const server = createServer(app);
server.listen(3000, () => {console.log("Server running on port 3000")});

const wss = new WebSocketServer({server});
wss.on("connection", (socket) => {
    console.log("connected client");

    socket.on("message", (data) => {
        console.log("Received text " + data.toString());
        for (const client of wss.clients) {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(data.toString());
            }
        }
    });
})
