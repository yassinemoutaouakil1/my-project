const fs = require('fs');
const glob = require('glob'); // npm install glob
const path = require('path');

const files = glob.sync('**/*.html', { ignore: 'node_modules/**' });
let totalIssues = 0;

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const imgRegex = /<img\s+[^>]*>/g;
    let match;
    while ((match = imgRegex.exec(content)) !== null) {
        const imgTag = match[0];
        const hasWidth = /\bwidth\s*=\s*["']?\d+["']?/i.test(imgTag);
        const hasHeight = /\bheight\s*=\s*["']?\d+["']?/i.test(imgTag);
        if (!hasWidth || !hasHeight) {
            console.log(`File: ${file}`);
            console.log(`Missing width/height: ${imgTag}`);
            totalIssues++;
        }
    }
});

console.log(`Total images missing width or height: ${totalIssues}`);
