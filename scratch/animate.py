import sys

file_path = r'F:\sujit-tadadikar-portfolio-webapp\src\pages\About.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []

for i, line in enumerate(lines):
    # 1. Technical Skills container
    if line.startswith('          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">'):
        line = '          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n'
    # 2. Professional Development container
    elif line.startswith('          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">'):
        line = '          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">\n'
    # 3. Personal Interests container
    elif line.startswith('          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">'):
        line = '          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6">\n'
    
    # Tech skills and Personal Interests cards
    elif line.startswith('            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">') or line.startswith('            <div className="bg-white p-6 rounded-lg shadow-sm">'):
        line = line.replace('<div', '<motion.div variants={fadeUp}')
    
    # Prof dev cards
    elif line.startswith('            <Card>'):
        line = '            <motion.div variants={fadeUp}>\n' + line
    elif line.startswith('            </Card>'):
        line = line + '            </motion.div>\n'
        
    # Closing tags for containers
    elif line.startswith('          </div>') and i+1 in [405, 463, 525]:
        line = '          </motion.div>\n'
        
    # Closing tags for cards
    elif line.startswith('            </div>') and i+1 in [198, 218, 237, 256, 276, 295, 310, 327, 345, 363, 383, 404, 487, 500, 512, 524]:
        line = '            </motion.div>\n'

    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print('Animations applied successfully')
