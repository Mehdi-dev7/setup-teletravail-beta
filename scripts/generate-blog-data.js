const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Chemins
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const OUTPUT_FILE = path.join(process.cwd(), 'JsonData', 'JsonBlog', 'BlogData.json');

console.log('🚀 Génération des données du blog...\n');

// Vérifier si le dossier existe
if (!fs.existsSync(BLOG_DIR)) {
  console.error('❌ Le dossier content/blog n\'existe pas !');
  process.exit(1);
}

// Lire tous les fichiers .md (en excluant README.md)
const files = fs.readdirSync(BLOG_DIR).filter(file => 
  file.endsWith('.md') && !file.toLowerCase().includes('readme')
);

if (files.length === 0) {
  console.warn('⚠️  Aucun fichier Markdown trouvé dans content/blog/');
  console.warn('   Utilisation des données existantes ou création d\'un tableau vide.\n');
}

console.log(`📄 ${files.length} fichier(s) Markdown trouvé(s)\n`);

// Traiter chaque fichier
const blogData = files.map((filename, index) => {
  const filePath = path.join(BLOG_DIR, filename);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Parser le front matter et le contenu
  const { data, content } = matter(fileContent);
  
  console.log(`   ✓ ${filename}`);
  
  // Vérifier les champs obligatoires
  const requiredFields = ['id', 'title', 'desc', 'tag', 'postby', 'date', 'image'];
  const missingFields = requiredFields.filter(field => !data[field]);
  
  if (missingFields.length > 0) {
    console.warn(`     ⚠️  Champs manquants: ${missingFields.join(', ')}`);
  }
  
  // Créer l'objet de données
  return {
    id: data.id || filename.replace('.md', ''),
    image: data.image || '/blog/default.jpg',
    imageDet: data.imageDet || data.image || '/blog/default.jpg',
    tag: data.tag || 'Article',
    postby: data.postby || 'Auteur',
    date: data.date || new Date().toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    title: data.title || 'Sans titre',
    desc: data.desc || '',
    content: content.trim()
  };
});

// Trier par date (plus récent en premier) - optionnel
blogData.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB - dateA;
});

// Créer le dossier de sortie si nécessaire
const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Écrire le fichier JSON
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(blogData, null, 2), 'utf-8');

console.log(`\n✅ Fichier généré avec succès : ${OUTPUT_FILE}`);
console.log(`📊 ${blogData.length} article(s) exporté(s)\n`);

// Afficher un résumé
blogData.forEach((article, index) => {
  console.log(`   ${index + 1}. ${article.title}`);
  console.log(`      ID: ${article.id}`);
  console.log(`      Date: ${article.date}`);
  console.log('');
});

console.log('🎉 Génération terminée !\n');
