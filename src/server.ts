import { app } from "./app";
import http from "http";
import { config } from "./config/config";
import chalk from "chalk";
import { getNetworkIps } from "./utils/get-network-ips";

const server = http.createServer(app);

const PORT = config.appConfig.PORT ?? 3000;
const NETWORK_ADDRESSES = getNetworkIps();

server.listen(PORT, () => {
  console.log(
    `
${chalk.green.bold("Express Server")} ready at
${chalk.green.bold.green("-→")} ${chalk.bold("Local: ")}   ${chalk.blue(`http://localhost:${PORT}`)}
${NETWORK_ADDRESSES && NETWORK_ADDRESSES.length > 0 ? NETWORK_ADDRESSES.map((address) => `${chalk.bold.green("-→")} ${chalk.bold("Network: ")} ${chalk.blue(`http://${address}:${PORT}`)}`).join("\n") : ""}
    `,
  );
});
