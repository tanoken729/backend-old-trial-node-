// httpモジュールを読み込む
const http = require("http");

// createServerでサーバーを作成
var server = http.createServer(
  // 関数をcreateServerの引数に(request, responseの引数は必須)
  (request, response) => {
    // 引数を実行したらendで終わらす
    // response.end("Hello world js!");
    // response.end("<h1>h1</h1>");

    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html><html lang='ja>");
    response.write("<head><meta charset='utf-8'");
    response.write("<title>Hello</title></head>");
    response.write("<body><h1>Helllo Node.js");
    response.write();
    response.write();
    response.write();
    response.write();
    response.end();
  }
);

// サーバーを起動し、待ち受け
server.listen(3000);
