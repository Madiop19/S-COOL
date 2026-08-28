/* ==========================================================================
   shared.js
   Chargé par index.html ET shop.html — données produits + fonctions
   d'affichage de carte, réutilisées sur les deux pages.
   Ordre de chargement obligatoire : shared.js AVANT cart.js AVANT le
   script propre à chaque page (script.js ou shop.js).
   ========================================================================== */

function priceStr(p){ return p.toLocaleString('fr-FR') + ' FCFA'; }

const PACK_ICON = `<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M4 11h16" stroke="currentColor" stroke-width="1.2"/><path d="M9 7V5.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5.5V7" stroke="currentColor" stroke-width="1.5"/></svg>`;

const ARTICLE_ICON = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.3"/></svg>`;

/* ---------- LES 4 VRAIS PACKS ----------
   Pour AJOUTER un pack : copie un objet {...} en entier (de { à },),
   colle-le juste avant le crochet fermant ], change chaque valeur.
   Pour SUPPRIMER un pack : supprime son objet {...} entier (garde la virgule
   correcte : jamais deux virgules à la suite, jamais de virgule après le
   dernier objet du tableau).
   Pour MODIFIER un pack : change juste la valeur voulue (price, desc, items). */
const PACKS = [
  {
    id:"pack-simple", name:"Simple", price:4900, accent:"#8FE9B4", badge:null,
    desc:"L'essentiel bien choisi, pour démarrer l'année sans se ruiner.",
    items:["3 stylos rouges (BIC Cristal)","4 stylos bleus (BIC Cristal)","2 stylos noirs (BIC Cristal)","2 stylos verts (BIC Cristal)","1 crayon noir avec gomme","1 crayon noir sans gomme","2 gommes (MAPED petit modèle)","1 taille-crayon","1 kit de traçage (MAPED petit modèle)","1 compas avec crayon (FUTURA)","1 règle incassable (MAPED Twist'n Flex)","1 correcteur liquide","1 paquet de crayons de couleur (MAPED Mini Color'Peps)"]
  },
  {
    id:"pack-extra", name:"Extra", price:15900, accent:"#EEF17A", badge:null,
    desc:"Le pack le plus complet pour couvrir toute l'année sans y repenser.",
    items:["3 stylos rouges","4 stylos bleus","2 stylos noirs","2 stylos verts","1 stylo 4 couleurs (BIC)","2 crayons noirs avec gomme","2 crayons noirs sans gomme (MAPED Hb2)","2 gommes (MAPED grand + petit modèle)","1 taille-crayon","1 kit de traçage (MAPED Twist'n Flex, grand modèle)","1 compas avec crayon (MAPED Study)","1 règle 20cm flexible (MAPED Twist'n Flex)","2 correcteurs liquides","1 paquet de crayons de couleur (MAPED Color'Peps grand modèle)","1 scotch","1 tube de colle","1 critérium + recharge","1 paquet de surligneurs (pack de 4)"]
  },
  {
    id:"pack-etudiant", name:"Étudiant", price:16900, accent:"#B7D9E8", badge:"New",
    desc:"Pensé pour le collège/lycée : de quoi écrire, classer et t'organiser.",
    items:["3 stylos rouges","4 stylos bleus","2 stylos noirs","1 stylo 4 couleurs (SCHNEIDER)","3 crayons noirs (MAPED Hb2)","2 gommes","1 taille-crayon","1 kit de traçage (MAPED, grand modèle)","1 règle incassable","2 correcteurs liquides","1 critérium + 2 recharges","1 paquet de surligneurs (MAPED couleur pastel)","1 agrafeuse + recharge (MAPED)","1 paquet de 12 stylos de couleur (LINC)","1 porte-vue 100 vues ou trieur (Exacompta)","1 cahier A4 200 pages 🎁"]
  },
  {
    id:"pack-ultime", name:"Ultime", price:19900, accent:"#F4938C", badge:null,
    desc:"Le pack complet, sans rien à racheter en cours d'année.",
    items:["3 stylos rouges","4 stylos bleus","2 stylos noirs","2 stylos verts","1 stylo 4 couleurs","2 crayons noirs avec gomme","2 crayons noirs sans gomme","2 gommes","1 taille-crayon","1 kit de traçage (MAPED, grand modèle)","1 compas avec crayon (MAPED)","1 règle 20cm flexible (MAPED Twist'n Flex)","1 correcteur liquide","1 souris blanco (MILAN)","1 paquet de crayons de couleur (MAPED Color'Peps grand modèle)","2 scotchs","1 tube de colle (UHU grand modèle)","1 critérium + recharge","1 paquet de surligneurs (MAPED couleur pastel)","1 agrafeuse + recharge (MAPED)","1 paire de ciseaux (MAPED)","1 paquet de 12 stylos de couleur (LINC Pentonic)"]
  }
];

/* ---------- ARTICLES VENDUS À L'UNITÉ ----------
   ⚠️ Ce sont des EXEMPLES avec des images génériques — remplace-les par
   tes vrais articles. Même méthode que pour les Packs : copie/colle un
   objet {...}, change les valeurs. "desc" et "price" sont obligatoires. */
const ARTICLES = [
  {
    id:"article-exemple-cahier", name:"[Exemple] Cahier 96 pages", price:500,
    desc:"Ceci est un article d'exemple à modifier — remplace le nom, le prix et la description par un vrai produit."
  },
  {
    id:"article-exemple-stylo", name:"[Exemple] Stylo bille bleu", price:150,
    desc:"Ceci est un article d'exemple à modifier — remplace le nom, le prix et la description par un vrai produit."
  }
];

function findItem(id){
  return PACKS.find(p => p.id === id) || ARTICLES.find(a => a.id === id);
}

function packCard(pack){
  return `<div class="pack-card reveal" style="--accent:${pack.accent};">
    ${pack.badge ? `<span class="product-badge">${pack.badge}</span>` : ''}
    <div class="pack-icon">${PACK_ICON}</div>
    <h3>${pack.name}</h3>
    <p class="pack-desc">${pack.desc}</p>
    <div class="pack-price">${priceStr(pack.price)}</div>
    <button class="pack-toggle" onclick="togglePack('${pack.id}')">
      <span id="toggleLabel-${pack.id}">Voir le contenu (${pack.items.length} articles)</span>
      <svg id="toggleIcon-${pack.id}" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <ul class="pack-items" id="packItems-${pack.id}">
      ${pack.items.map(i=>`<li>${i}</li>`).join('')}
    </ul>
    <label class="pack-trousse">
      <input type="checkbox" id="trousse-${pack.id}">
      + Ajouter une trousse (prix confirmé sur WhatsApp)
    </label>
    <button class="btn btn-primary btn-block" onclick="addToCart('${pack.id}')">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 4h2l1.6 9.6a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.6L20 8H7" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="20" r="1.3" fill="#fff"/><circle cx="17" cy="20" r="1.3" fill="#fff"/></svg>
      Ajouter au panier
    </button>
  </div>`;
}
function togglePack(id){
  const list = document.getElementById('packItems-'+id);
  const icon = document.getElementById('toggleIcon-'+id);
  list.classList.toggle('open');
  icon.style.transform = list.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
}

function articleCard(article){
  const waMsg = encodeURIComponent(`Bonjour S'Cool, je suis intéressé(e) par : ${article.name}. Est-ce disponible ?`);
  return `<div class="pack-card reveal" style="--accent:#D8D2C4;">
    <div class="pack-icon">${ARTICLE_ICON}</div>
    <h3 style="font-size:17px;">${article.name}</h3>
    <p class="pack-desc">${article.desc}</p>
    <div class="pack-price">${priceStr(article.price)}</div>
    <div style="display:flex; gap:8px; margin-top:auto;">
      <button class="btn btn-primary btn-sm" style="flex:1;" onclick="addToCart('${article.id}')">Ajouter au panier</button>
      <a class="btn btn-whatsapp btn-sm" style="flex-shrink:0; padding:10px 12px;" target="_blank" href="https://wa.me/221762098743?text=${waMsg}" aria-label="Commander sur WhatsApp">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 12a8 8 0 1 1-3.6-6.7L20 4l-1 3.6A7.96 7.96 0 0 1 20 12Z" stroke="#fff" stroke-width="1.6"/></svg>
      </a>
    </div>
  </div>`;
}

/* ---------- UTILITAIRES PARTAGÉS (nav, toast, scroll-reveal) ---------- */
function closeMenu(){ document.getElementById('mmenu').classList.remove('open'); }
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 3200);
}
function observeReveals(){
  const els = document.querySelectorAll('.reveal:not(.in-view), .highlight:not(.in-view)');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in-view'); io.unobserve(en.target);} });
  }, {threshold:0.12});
  els.forEach(el=>io.observe(el));
}
