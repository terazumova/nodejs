const http = require('http');

let likes = 0;

const requestListener = function (req, res) {
  if (!req.url.startsWith('/status') && !req.url.startsWith('/dislike') && !req.url.startsWith('/like')) {
    res.writeHead(404);

    res.write(JSON.stringify({status: 'error'}));
  }

  if (req.url.startsWith('/like')) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);

    res.write(JSON.stringify({status: 'liked'}));

    likes++;
  }

  if (req.url.startsWith('/dislike')) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);

    res.write(JSON.stringify({status: 'disliked'}));

    likes--;
  }

  if (req.url.startsWith('/status')) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    
    res.write('Лайков: ' + likes);
  }

  res.end();
}

const server = http.createServer(requestListener);
server.listen(8080);