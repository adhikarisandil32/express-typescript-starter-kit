// ts-node-dev package doesn't support es6 imports and all, hence ditch and use tsx (for runtime only, doens't compile) instead without any tsconfigs and no need to worry about commonjs or es module imports.
// for esm (ecmascript module) build, because tsc doesn't touch import paths, we have to make sure we import our modules with .js extensions as you can see on below config.js. and if jsons, import them with `with {type: 'json'} assertion`.
// Read about a potential solution here for importing files without extensions here: https://github.com/adhikarisandil32/MY-NOTES/blob/main/ts-express-setup.md or https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-7.html#path-rewriting-for-relative-paths.

import { app } from "./app.js";
import http from "http";
import { config } from "./config/config.js";
import chalk from "chalk";
import { getNetworkIps } from "./utils/get-network-ips.js";

const server = http.createServer(app);

const PORT = config.PORT;
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
