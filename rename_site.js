const fs = require('fs');
const path = require('path');

function processDir(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        if (['node_modules', '.git', 'images', 'assets', '.gemini', 'package-lock.json'].includes(file)) continue;

        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else {
            if (!/\.(html|js|json|css|txt|md|xml)$/i.test(fullPath)) continue;

            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content;

            // Page Titles / Headings / Text with correct caps
            newContent = newContent.replace(/Safia Transfers/g, 'Safia Transfers');
            newContent = newContent.replace(/Safia Transfers/g, 'Safia Transfers');
            newContent = newContent.replace(/safia transfers/g, 'safia transfers');

            // Logo span
            newContent = newContent.replace(/Safia<span>Transfers<\/span>/g, 'Safia<span>Transfers</span>');
            newContent = newContent.replace(/Safia<span>Transfers<\/span>/g, 'Safia<span>Transfers</span>');
            newContent = newContent.replace(/safia<span>transfers<\/span>/g, 'safia<span>transfers</span>');

            // Titles
            newContent = newContent.replace(/\| Safia<\/title>/g, '| Safia Transfers</title>');
            newContent = newContent.replace(/\| Safia<\/title>/g, '| Safia Transfers</title>');

            // Contact gold span
            newContent = newContent.replace(/Safia(\s*<\/span>)/g, 'Safia Transfers$1');

            // Email replacements
            newContent = newContent.replace(/@safiatransfers\.com/g, '@safiatransfers.com');
            
            // Text Domain 
            newContent = newContent.replace(/safiatransfers\.com/g, 'safiatransfers.com');
            newContent = newContent.replace(/safia-transfers\.com/g, 'safia-transfers.com');

            // Social media
            newContent = newContent.replace(/@safiatransfers/gi, '@safiatransfers');
            newContent = newContent.replace(/\/safiatransfers/gi, '/safiatransfers');
            newContent = newContent.replace(/SafiaTransfers/g, 'SafiaTransfers');

            // Catch-all
            newContent = newContent.replace(/Safia(?![a-zA-Z\-])/g, 'Safia');
            newContent = newContent.replace(/Safia(?![a-zA-Z\-])/g, 'Safia');
            newContent = newContent.replace(/safia(?![a-zA-Z\-])/g, 'safia');

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Updated ' + fullPath);
            }
        }
    }
}

try {
    processDir(__dirname);
    console.log('Done.');
} catch (err) {
    console.error(err);
}
