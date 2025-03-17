let IS_PROD = true;

const server = IS_PROD
  ? "https://conectify-call.onrender.com"
  : "http//localhost:8002";

export default server;
