const { promisify } = require('util');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const template = require('./template');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const writeFileAsync = promisify(fs.writeFile);

const saveGeneratedFile = async (name, content) => {
    const filename = path.resolve(__dirname, '../../src/api', name);
    await writeFileAsync(filename, content, 'utf8');
};

const loadSchema = (action) => fetch(`http://localhost:58043/api/codegen/${action}`)
    .then(response => response.json());

(async () => {
    try {
        const data = await loadSchema('api');
        const apiFile = template(data);
        await saveGeneratedFile('generated.ts', apiFile);
    } catch (ex) {
        console.error('Error', ex);
    }
})();
