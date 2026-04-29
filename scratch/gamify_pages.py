import os

def insert_import(content, statement):
    lines = content.split('\n')
    last_import_idx = 0
    for i, line in enumerate(lines):
        if line.startswith('import '):
            last_import_idx = i
    lines.insert(last_import_idx + 1, statement)
    return '\n'.join(lines)

def insert_hook_and_effect(content, comp_name, action_id, xp_amount, message):
    search_str = f"const {comp_name} = () => {{"
    
    hook_str = f"""  const {{ addXP }} = useGamification();

  useEffect(() => {{
    addXP({xp_amount}, '{action_id}', '{message}');
  }}, [addXP]);"""
    
    if search_str in content:
        parts = content.split(search_str)
        return parts[0] + search_str + "\n" + hook_str + parts[1]
    return content

# 1. Home.tsx
file_path = r'F:\sujit-tadadikar-portfolio-webapp\src\pages\Home.tsx'
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = insert_import(content, "import { useGamification } from '@/context/GamificationContext';")
    content = insert_import(content, "import { useEffect } from 'react';")
    content = insert_hook_and_effect(content, 'Home', 'visit_home', 10, 'Discovered the Home page!')
    # Add click for View My Work
    content = content.replace(
        '<Link to="/projects">View My Work</Link>',
        '<Link to="/projects" onClick={() => addXP(20, "click_view_work", "Checking out the projects!")}>View My Work</Link>'
    )
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 2. About.tsx
file_path = r'F:\sujit-tadadikar-portfolio-webapp\src\pages\About.tsx'
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = insert_import(content, "import { useGamification } from '@/context/GamificationContext';")
    content = insert_import(content, "import { useEffect } from 'react';")
    content = insert_hook_and_effect(content, 'About', 'visit_about', 10, 'Discovered the About page!')
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 3. Experience.tsx
file_path = r'F:\sujit-tadadikar-portfolio-webapp\src\pages\Experience.tsx'
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = insert_import(content, "import { useGamification } from '@/context/GamificationContext';")
    content = insert_import(content, "import { useEffect } from 'react';")
    content = insert_hook_and_effect(content, 'Experience', 'visit_experience', 10, 'Discovered the Experience page!')
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 4. Projects.tsx
file_path = r'F:\sujit-tadadikar-portfolio-webapp\src\pages\Projects.tsx'
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = insert_import(content, "import { useGamification } from '@/context/GamificationContext';")
    content = insert_import(content, "import { useEffect } from 'react';")
    content = insert_hook_and_effect(content, 'Projects', 'visit_projects', 10, 'Discovered the Projects page!')
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 5. Contact.tsx
file_path = r'F:\sujit-tadadikar-portfolio-webapp\src\pages\Contact.tsx'
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = insert_import(content, "import { useGamification } from '@/context/GamificationContext';")
    content = insert_import(content, "import { useEffect } from 'react';")
    # Need to handle Contact carefully since it has multiple state hooks.
    search_str = "const Contact = () => {"
    hook_str = """  const { addXP } = useGamification();
  useEffect(() => { addXP(10, 'visit_contact', 'Discovered the Contact page!'); }, [addXP]);"""
    if search_str in content:
        parts = content.split(search_str)
        content = parts[0] + search_str + "\n" + hook_str + parts[1]
        
    # Also add XP on form submit
    submit_str = "setIsSubmitting(true);"
    submit_replace = """setIsSubmitting(true);
    addXP(100, 'contact_form_submit', 'Sent a message! Massive XP boost!');"""
    content = content.replace(submit_str, submit_replace)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 6. Navbar.tsx
file_path = r'F:\sujit-tadadikar-portfolio-webapp\src\components\Navbar.tsx'
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = insert_import(content, "import { useGamification } from '@/context/GamificationContext';")
    
    search_str = "const Navbar = () => {"
    hook_str = "  const { addXP, unlockAchievement } = useGamification();"
    if search_str in content:
        parts = content.split(search_str)
        content = parts[0] + search_str + "\n" + hook_str + parts[1]
        
    # Networker achievement on social click
    social_str = 'className="text-gray-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"'
    social_replace = 'onClick={() => { addXP(25, "click_social", "Networking!"); unlockAchievement("networker"); }}\n                className="text-gray-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"'
    content = content.replace(social_str, social_replace)
    
    # A11y open
    a11y_str = "onClick={() => setIsA11yOpen(true)}"
    a11y_replace = 'onClick={() => { setIsA11yOpen(true); addXP(15, "open_a11y", "Accessibility matters!"); unlockAchievement("a11y_champ"); }}'
    content = content.replace(a11y_str, a11y_replace)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 7. Footer.tsx
file_path = r'F:\sujit-tadadikar-portfolio-webapp\src\components\Footer.tsx'
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = insert_import(content, "import { useGamification } from '@/context/GamificationContext';")
    
    search_str = "const Footer = () => {"
    hook_str = "  const { addXP, unlockAchievement } = useGamification();"
    if search_str in content:
        parts = content.split(search_str)
        content = parts[0] + search_str + "\n" + hook_str + parts[1]
        
    # Easter egg
    egg_str = '<p className="text-gray-500 text-sm">'
    egg_replace = '''<div 
          onClick={() => { addXP(50, 'easter_egg_footer', 'You found the secret easter egg!'); unlockAchievement('keen_eye'); }}
          className="w-2 h-2 rounded-full bg-primary/10 hover:bg-primary cursor-pointer transition-colors absolute bottom-4 right-4"
          title="?"
        />
        <p className="text-gray-500 text-sm">'''
    content = content.replace(egg_str, egg_replace)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Gamification triggers added!")
