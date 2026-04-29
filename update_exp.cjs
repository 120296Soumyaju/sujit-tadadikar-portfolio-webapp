const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/Experience.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace primary item container
content = content.replace(
  /<div className="border-l-4 border-primary pl-6 relative">/g,
  `<motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative group"
            >
              <div className="absolute left-0 top-1 w-6 h-6 -translate-x-[11px] rounded-full bg-white border-4 border-primary shadow-sm z-10 group-hover:scale-125 transition-transform duration-300"></div>`
);

// Replace gray item container
content = content.replace(
  /<div className="border-l-4 border-gray-300 pl-6 relative">/g,
  `<motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative group"
            >
              <div className="absolute left-0 top-1 w-6 h-6 -translate-x-[11px] rounded-full bg-white border-4 border-gray-300 shadow-sm z-10 group-hover:border-primary group-hover:scale-125 transition-all duration-300"></div>`
);

// Remove the old absolute dots that were inside
content = content.replace(
  /<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"><\/div>/g,
  ``
);
content = content.replace(
  /<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gray-300"><\/div>/g,
  ``
);

// Replace ending divs
content = content.replace(
  /<\/Card>\s+<\/div>/g,
  `</Card>\n            </motion.div>`
);

// Add hover effects to the Card itself
content = content.replace(
  /<Card className="mt-4">/g,
  `<Card className="mt-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Experience.tsx updated successfully');
