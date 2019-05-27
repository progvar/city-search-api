"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var _a = process.env.PORT, PORT = _a === void 0 ? 1234 : _a;
var server = http_1.createServer();
server.on("request", function (event) {
    var method = event.method;
    var path = event.url;
    if (method === "GET" && path === "/citysearch") {
        // TODO
    }
});
server.listen(PORT, function () {
    console.info("Server is listening on port: " + PORT);
});
//# sourceMappingURL=server.js.map