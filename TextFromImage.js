//in codul html includem <script src='https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js'></script>


const { createWorker } = require('tesseract.js'); //

const worker = createWorker();

(async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('...'); //... -> imaginea
    console.log(text); //afisare text
    await worker.terminate();
  })();