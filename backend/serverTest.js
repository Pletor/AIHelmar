/* -----------------------------------
           Test status & data 
   -----------------------------------*/
async function testGetOracle() {
    const response = await fetch('http://localhost:8080/api/oracle');
    const data = await response.json();
    if (response.status === 200) {
        console.log('✅ Status 200 OK');
    } else {
        console.log('❌ Očekával status 2OO, dostal:', response.status);
    }
    
    if (data.msg.title && data.msg.core) {
        console.log('Data mají title a core')
    } else {
        console.log('Chybí title nebo core')
    }
}
testGetOracle();

/* -----------------------------------
        Test methody POST & chyby
   -----------------------------------*/
async function testPostOracle() {
    const url = 'http://localhost:8080/api/oracle'
    const response = await fetch(url, { method: 'POST' });
    const data = await response.json();
    
    if (response.status === 404) {
        console.log('Status 404 chyba, metoda POST |', response.statusText, '|', data.error)
    } else {
        console.log('Chyba, špatný status', response.status)
    }
    
    if (data.error) {
        console.log('Vrátil chybovou hlášku')
    } else {
        console.log('Nevrátil chybovou hlášku')
    }
    
}
testPostOracle();

/* ------------------------------------------------
    Test generování odpovědí po každém API volání 
   ------------------------------------------------*/
async function testRandomNumber() {
    
    let oracleTitle = []
    const url = 'http://localhost:8080/api/oracle';
    
    
    for (let i = 0; i < 10; i++) {
        const response = await fetch(url, {method: 'GET'});
        const data = await response.json();
        oracleTitle.push(data.msg.title);
    } 
    console.log(oracleTitle)
}
testRandomNumber();

/* ------------------------------------------------
        Test kontrola pravděpodobnosti čísel
   ------------------------------------------------*/
async function testFrequencies() {
    const frequencies = {};
    const url = 'http://localhost:8080/api/oracle';
    
    for (let i = 0; i < 1000; i++) {
        const response = await fetch(url, {method: 'GET'});
        const data = await response.json();
        const id = data.msg.number
        frequencies[id] = (frequencies[id] || 0) + 1
        
    }
    const uniqueCount = Object.keys(frequencies).length;
    const counts = Object.values(frequencies);
    const min = Math.min(...counts);
    const max = Math.max(...counts);

    console.log('Unikátních čísel:', uniqueCount);
    console.log('Min výskytů:', min, 'Max výskytů:', max);
}
testFrequencies();