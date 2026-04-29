import os

file_path = r'F:\sujit-tadadikar-portfolio-webapp\src\pages\Contact.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add motion imports and variants
content = content.replace('import { Textarea } from "@/components/ui/textarea";', '''import { Textarea } from "@/components/ui/textarea";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};''')

# Replace Header Section
header_target = '''    <div className="pt-20 pb-16">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="text-gray-600 mt-4 max-w-3xl">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>
      </section>'''

header_replace = '''    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <section className="py-16 md:py-24 bg-white relative border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Me</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </motion.div>
        </div>
      </section>'''
content = content.replace(header_target, header_replace)

# Main Grid Container
content = content.replace(
    '<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">',
    '<motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">'
)

# Contact Info Section Cards
content = content.replace(
    '<h2 className="text-2xl font-bold mb-6">Get in Touch</h2>',
    '<motion.div variants={fadeUp}><h2 className="text-2xl font-bold mb-6">Get in Touch</h2></motion.div>'
)

content = content.replace(
    '<div className="space-y-6">',
    '<div className="space-y-6">'
) # no change to container

content = content.replace(
    '<Card>',
    '<motion.div variants={fadeUp}><Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">'
)

content = content.replace(
    '</Card>',
    '</Card></motion.div>'
)

# Fix social links
content = content.replace(
    '<h3 className="text-xl font-semibold mb-4">Connect with Me</h3>',
    '<motion.div variants={fadeUp}><h3 className="text-xl font-semibold mb-4">Connect with Me</h3>'
)
content = content.replace(
    '</a>\n                </div>\n              </div>',
    '</a>\n                </div>\n              </motion.div>\n              </div>'
)

# Fix closing of main grid container
content = content.replace(
    '</div>\n        </div>\n      </section>',
    '</motion.div>\n        </div>\n      </section>'
)

# Fix the last Let's Collaborate section
collab_target = '''      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Collaborate</h2>'''

collab_replace = '''      <section className="py-16 bg-white border-t border-gray-100">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Let's Collaborate</h2>'''
content = content.replace(collab_target, collab_replace)

content = content.replace(
    '          </p>\n        </div>\n      </section>',
    '          </p>\n        </motion.div>\n      </section>'
)

# Update form button
content = content.replace(
    '<Button\n                        type="submit"',
    '<Button\n                        type="submit"\n                        size="lg"'
)


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Contact page updated")
