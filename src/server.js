const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.Server({
    port: 5000,
    host: "localhost",
  });

  // server.routes( routes );

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};
init();
