import { createServer, Server } from "http";

const { PORT = 1234 } = process.env;
const server: Server = createServer();

server.on("request",  (event: Request) => {
    const method: string = event.method;
    const path: string = event.url;

    if (method === "GET" && path === "/citysearch") {
        // TODO
    }
});

server.listen(PORT, () => {
    console.info(`Server is listening on port: ${PORT}`);
});
