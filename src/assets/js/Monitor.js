import { io } from "socket.io-client";

const API = import.meta.env.VITE_CAM_API_URL;
const socket = io(API, {
  transports: ["websocket"],
//   autoConnect: false,
  withCredentials: true,
});

export default socket;