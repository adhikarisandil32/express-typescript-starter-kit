import { app } from "./app";
import http from "http";
import { config } from "./config/config";

const server = http.createServer(app);

const PORT = config.PORT;

server.listen(PORT, () => console.log(`[server] Listening at Port ${PORT}`));
