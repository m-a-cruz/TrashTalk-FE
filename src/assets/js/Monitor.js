import { io } from "socket.io-client";

const API = import.meta.env.VITE_SOCKET_URL2;
const socket = io(API, {
  path: "socket.io",
  transports: ["websocket"], // Force only websocket
  withCredentials: true,
  autoConnect: true,
  reconnection: true,
});

console.log("Socket connected:", socket.connected);

export default socket;