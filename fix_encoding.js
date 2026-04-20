const fs = require('fs');
const path = require('path');

const replacements = {
    'Ã©': 'é',
    'Ã ': 'à',
    'Ã¢': 'â',
    'Ã¹': 'ù',
    'Ãª': 'ê',
    'Ã¨': 'è',
    'Ã®': 'î',
    'Ã´': 'ô',
    'Ã»': 'û',
    'Ã§': 'ç',
    'Â«': '«',
    'Â»': '»',
    'Â°': '°',
    'â€™': "'",
    'â€œ': '“',
    'â€': '”',
    'Ã€': 'À',
    'Ã‰': 'É',
    'â€¦': '...'
};

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const targetDir = 'c:\\Users\\pc\\.gemini\\antigravity\\scratch\\safia-transfers';

walkDir(targetDir, (filePath) => {
    const ext = path.extname(filePath);
    if (['.html', '.js', '.json', '.css'].includes(ext)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        
        for (const [key, val] of Object.entries(replacements)) {
            newContent = newContent.split(key).join(val);
        }
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Fixed: ${filePath}`);
        }
    }
});
