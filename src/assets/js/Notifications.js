import { io } from "socket.io-client";

const API = import.meta.env.VITE_SOCKET_URL;
const socket = io(API, {
  path: "socket.io",
  transports: ["websocket"], // Force only websocket
  withCredentials: true,
  autoConnect: true,
  reconnection: true,
});

console.log("Socket connected:", socket.connected);

export default socket;

// export const socket = io(import.meta.env.VITE_SOCKET_URL, {
//   transports: ["websocket"],
//   withCredentials: true,
// });

// export const updateData = async (id, status) => {
//   try {
//     const response = await axios.put(
//       `${import.meta.env.VITE_GAS_API_URL}notification`,
//       { id, status },
//       { withCredentials: true }
//     );
//     return response.status === 201;
//   } catch (error) {
//     console.log(error.response?.data?.error || error.message);
//     return false;
//   }
// };
