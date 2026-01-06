import http from 'http';
import INNER_STATES from './server-data.js';

/* -----------------------------------
            Server Oracle
   -----------------------------------*/
const httpServer = http.createServer((req, res) => {
    
    const url = req.url;
    const method = req.method;
   
    if (url === '/api/oracle' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        /* -----------------------------------
                   Generování Oracle
          -----------------------------------*/
        const oracleData = INNER_STATES;
        console.log(oracleData.length)
        const randomIndex = Math.floor(Math.random() * 64);
        const randomOracle = oracleData[randomIndex];
        res.end(JSON.stringify({ msg: randomOracle, id: randomIndex }));
        console.log(randomOracle)
        
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Stránka nenalezena' }));
    }
});

httpServer.listen(8080, () => {
    console.log('Server běží na http://localhost:8080');
});







