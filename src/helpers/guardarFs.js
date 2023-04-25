const fs = require("fs");

const guardar = async (nombre, data) => {
  await fs.writeFileSync(nombre, data);
};

const leer = async (nombre) => {
  return await fs.readFileSync(nombre, "utf-8");
};

module.exports = {
  guardar,
  leer,
};
