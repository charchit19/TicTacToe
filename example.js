// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TTT</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body style="background-color: peachpuff;">
        <nav>
          <ul>
            <li>TicTacToe</li>
          </ul>
        </nav>
    
        <div class="gamecontainer">
          <div class="container">
            <div class="line"></div>
            <div class="box bt-0 bl-0"><samp class="boxtext"></samp></div>
            <div class="box bt-0"><samp class="boxtext"></samp></div>
            <div class="box bt-0 br-0"><samp class="boxtext"></samp></div>
            <div class="box bl-0"><samp class="boxtext"></samp></div>
            <div class="box"><samp class="boxtext"></samp></div>
            <div class="box br-0"><samp class="boxtext"></samp></div>
            <div class="box bb-0 bl-0"><samp class="boxtext"></samp></div>
            <div class="box bb-0"><samp class="boxtext"></samp></div>
            <div class="box bb-0 br-0"><samp class="boxtext"></samp></div>
          </div>
    
          <div class="gameinfo">
            <h1>Welcome to TicTacToe</h1>
            <div>
              <span class="info">Turn for X</span>
              <button id="reset">Reset</button> 
            </div>
            <div class="imgbox">
              <img src="excited.gif" alt="" />
            </div>
          </div>
        </div>
    
        <script src="script.js"></script>
      </body>
    </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});