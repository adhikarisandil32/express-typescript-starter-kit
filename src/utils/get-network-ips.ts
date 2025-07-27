import os from "node:os";

const getNetworkIps = () => {
  const networksExposedTo = [];

  const interfaces = os.networkInterfaces();

  for (const name of Object.keys(interfaces)) {
    if (!name || !interfaces[name]) return;

    for (const iface of interfaces[name]) {
      if (!iface) return;
      // Skip over non-IPv4 and internal (e.g., 127.0.0.1) addresses
      if (iface.family === "IPv4" && !iface.internal) {
        networksExposedTo.push(iface.address);
      }
    }
  }

  return networksExposedTo;
};

export { getNetworkIps };
