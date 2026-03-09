const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/pc/.gemini/antigravity/scratch/moutaouakil-transfers';

function fixFaqStructure(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /<div\s+class="faq-item">\s*<h3[^>]*>(.*?)<\/h3>(.*?)<\/div>/gs;

    let updated = false;
    const newContent = content.replace(regex, (match, question, answer) => {
        updated = true;
        return `<div class="faq-item">
                        <button class="faq-question">
                            <span>${question.trim()}</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="faq-answer">
                            ${answer.trim()}
                        </div>
                    </div>`;
    });

    if (updated) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filePath}`);
        return true;
    }
    return false;
}

function walkSync(dir, filelist = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            if (file === 'node_modules' || file === '.git') continue;
            filelist = walkSync(filepath, filelist);
        } else if (file.endsWith('.html')) {
            filelist.push(filepath);
        }
    }
    return filelist;
}

let count = 0;
const htmlFiles = walkSync(directory);
for (const file of htmlFiles) {
    if (fixFaqStructure(file)) {
        count++;
    }
}
console.log(`Total files updated: ${count}`);
