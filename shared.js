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
    id:"pack-simple", name:"Simple", price:4900, accent:"#8FE9B4", badge:null, brands:["BIC", "MAPED", "FUTURA"],
    desc:"L'essentiel bien choisi, pour démarrer l'année sans se ruiner.",
    items:["3 stylos rouges (BIC Cristal)","4 stylos bleus (BIC Cristal)","2 stylos noirs (BIC Cristal)","2 stylos verts (BIC Cristal)","1 crayon noir avec gomme","1 crayon noir sans gomme","2 gommes (MAPED petit modèle)","1 taille-crayon","1 kit de traçage (MAPED petit modèle)","1 compas avec crayon (FUTURA)","1 règle incassable (MAPED Twist'n Flex)","1 correcteur liquide","1 paquet de crayons de couleur (MAPED Mini Color'Peps)"]
  },
  {
    id:"pack-extra", name:"Extra", price:15900, accent:"#EEF17A", badge:null, brands:["BIC", "MAPED"],
    desc:"Le pack le plus complet pour couvrir toute l'année sans y repenser.",
    items:["3 stylos rouges","4 stylos bleus","2 stylos noirs","2 stylos verts","1 stylo 4 couleurs (BIC)","2 crayons noirs avec gomme","2 crayons noirs sans gomme (MAPED Hb2)","2 gommes (MAPED grand + petit modèle)","1 taille-crayon","1 kit de traçage (MAPED Twist'n Flex, grand modèle)","1 compas avec crayon (MAPED Study)","1 règle 20cm flexible (MAPED Twist'n Flex)","2 correcteurs liquides","1 paquet de crayons de couleur (MAPED Color'Peps grand modèle)","1 scotch","1 tube de colle","1 critérium + recharge","1 paquet de surligneurs (pack de 4)"]
  },
  {
    id:"pack-etudiant", name:"Étudiant", price:16900, accent:"#B7D9E8", badge:"New", brands:["SCHNEIDER", "MAPED", "LINC", "Exacompta"],
    desc:"Pensé pour le collège/lycée : de quoi écrire, classer et t'organiser.",
    items:["3 stylos rouges","4 stylos bleus","2 stylos noirs","1 stylo 4 couleurs (SCHNEIDER)","3 crayons noirs (MAPED Hb2)","2 gommes","1 taille-crayon","1 kit de traçage (MAPED, grand modèle)","1 règle incassable","2 correcteurs liquides","1 critérium + 2 recharges","1 paquet de surligneurs (MAPED couleur pastel)","1 agrafeuse + recharge (MAPED)","1 paquet de 12 stylos de couleur (LINC)","1 porte-vue 100 vues ou trieur (Exacompta)","1 cahier A4 200 pages 🎁"]
  },
  {
    id:"pack-ultime", name:"Ultime", price:19900, accent:"#F4938C", badge:null, brands:["BIC", "MAPED", "MILAN", "UHU", "LINC"],
    desc:"Le pack complet, sans rien à racheter en cours d'année.",
    items:["3 stylos rouges","4 stylos bleus","2 stylos noirs","2 stylos verts","1 stylo 4 couleurs","2 crayons noirs avec gomme","2 crayons noirs sans gomme","2 gommes","1 taille-crayon","1 kit de traçage (MAPED, grand modèle)","1 compas avec crayon (MAPED)","1 règle 20cm flexible (MAPED Twist'n Flex)","1 correcteur liquide","1 souris blanco (MILAN)","1 paquet de crayons de couleur (MAPED Color'Peps grand modèle)","2 scotchs","1 tube de colle (UHU grand modèle)","1 critérium + recharge","1 paquet de surligneurs (MAPED couleur pastel)","1 agrafeuse + recharge (MAPED)","1 paire de ciseaux (MAPED)","1 paquet de 12 stylos de couleur (LINC Pentonic)"]
  }
];

/* ---------- ARTICLES VENDUS À L'UNITÉ ----------
   Source : base Notion 📦 Stock (Articles) — mis à jour le 03/09/2026.
   Prix : tous à 0 pour l'instant → affiche "Prix sur demande" + bouton WhatsApp.
   Quand tu as les vrais prix : Ctrl+F → cherche "price:0" → remplace chaque 0.
   Pour AJOUTER : copie un objet {...} entier, colle avant le ], change les valeurs.
   Pour SUPPRIMER : supprime l'objet {...} et sa virgule. */
const ARTICLES = [
  /* — ÉCRITURE — */
  {id:"stylos-rouges-bic", name:"Stylos rouges BIC Cristal", cat:"Écriture", marque:"BIC", price:0,
   image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80",
   desc:"Stylos bille rouge BIC Cristal, pointe medium — vendus à l'unité depuis notre paquet de 50."},
  {id:"stylo-4-couleurs-schneider", name:"Stylo 4 couleurs Schneider", cat:"Écriture", marque:"Schneider", price:0,
   image:"https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80",
   desc:"Stylo bille rétractable 4 couleurs (bleu, noir, rouge, vert) — marque Schneider."},
  {id:"stylo-schneider-normal", name:"Stylo bille Schneider", cat:"Écriture", marque:"Schneider", price:0,
   image:"https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80",
   desc:"Stylo bille Schneider classique — écriture fluide et régulière."},
  {id:"stylos-couleur-linc", name:"Paquet 12 stylos couleur LINC", cat:"Écriture", marque:"LINC", price:0,
   image:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
   desc:"Paquet de 12 stylos couleur LINC Pentonic — assortiment de couleurs vives."},
  {id:"stylos-couleur-schneider-vizz", name:"Paquet 10 stylos couleur Schneider VIZZ", cat:"Écriture", marque:"Schneider", price:0,
   image:"https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80",
   desc:"10 stylos bille de couleur Schneider VIZZ — pointe medium, couleurs assorties."},
  {id:"crayons-noirs", name:"Crayons noirs HB2 (paquet de 12)", cat:"Écriture", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400&q=80",
   desc:"Paquet de 12 crayons noirs HB2 — mine résistante, idéal pour l'écriture et le dessin."},
  {id:"crayons-noirs-gomme", name:"Crayons noirs avec gomme (paquet de 12)", cat:"Écriture", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400&q=80",
   desc:"Paquet de 12 crayons HB2 avec gomme intégrée — pratique pour corriger sans chercher."},
  {id:"gomme-grand-modele", name:"Gomme blanche MAPED grand modèle", cat:"Écriture", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80",
   desc:"Gomme blanche MAPED Technic grand modèle — efface sans déchirer le papier."},
  {id:"gomme-petit-modele", name:"Gomme blanche MAPED petit modèle", cat:"Écriture", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80",
   desc:"Gomme blanche MAPED Technic petit modèle — format compact pour la trousse."},
  {id:"taille-crayon", name:"Taille-crayon", cat:"Écriture", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
   desc:"Taille-crayon simple trou — fiable et compact pour toute la trousse."},
  {id:"surligneur-fluo", name:"Surligneur fluo MAPED", cat:"Écriture", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
   desc:"Surligneur Fluo Peps MAPED — couleurs vives, pointe biseautée, encre longue durée."},
  {id:"surligneur-pastel", name:"Surligneur pastel MAPED", cat:"Écriture", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
   desc:"Surligneur Fluo Peps pastel MAPED — teintes douces qui ne fatiguent pas les yeux."},
  {id:"blanco-liquide", name:"Blanco liquide", cat:"Écriture", marque:"", price:0,
   image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80",
   desc:"Correcteur liquide blanc — sèche rapidement, pour corriger sans arracher le papier."},
  {id:"blanco-souris", name:"Blanco souris", cat:"Écriture", marque:"MILAN", price:0,
   image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80",
   desc:"Correcteur en ruban souris — pratique et propre, sans temps de séchage."},
  {id:"marqueurs-effacables", name:"Étui 4 marqueurs effaçables", cat:"Écriture", marque:"", price:0,
   image:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
   desc:"Étui de 4 marqueurs effaçables à sec — idéal pour tableaux blancs et révisions."},
  /* — TRAÇAGE — */
  {id:"compas-maped", name:"Compas MAPED", cat:"Traçage", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1608500218889-b3f31eba13af?w=400&q=80",
   desc:"Compas MAPED Study avec crayon intégré — précis et robuste pour la géométrie."},
  {id:"kit-tracage-maped", name:"Kit de traçage MAPED", cat:"Traçage", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1608500218889-b3f31eba13af?w=400&q=80",
   desc:"Kit de géométrie MAPED complet : équerre, rapporteur et règle — tout pour la classe."},
  {id:"regle-incassable", name:"Règle 20cm incassable MAPED", cat:"Traçage", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1608500218889-b3f31eba13af?w=400&q=80",
   desc:"Règle 20cm MAPED — transparente, graduée, incassable."},
  {id:"regle-twist-flex", name:"Règle 20cm MAPED Twist'n Flex", cat:"Traçage", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1608500218889-b3f31eba13af?w=400&q=80",
   desc:"Règle flexible 20cm MAPED Twist'n Flex — incassable, disponible en plusieurs couleurs."},
  {id:"crayons-couleur-grand", name:"Crayons de couleur MAPED grand modèle", cat:"Traçage", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
   desc:"Paquet MAPED Color'Peps grand modèle — couleurs vives et mine résistante."},
  {id:"crayons-couleur-petit", name:"Crayons de couleur MAPED petit modèle", cat:"Traçage", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
   desc:"Paquet MAPED Mini Color'Peps — format trousse, couleurs assorties."},
  /* — PAPETERIE — */
  {id:"baton-colle", name:"Bâton de colle", cat:"Papeterie", marque:"", price:0,
   image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
   desc:"Bâton de colle — colle forte, sèche sans traces, idéal pour les travaux manuels."},
  {id:"ciseaux-maped", name:"Paire de ciseaux MAPED", cat:"Papeterie", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80",
   desc:"Ciseaux scolaires MAPED — lames inox, poignée ergonomique, bout arrondi sécurisé."},
  /* — RANGEMENT — */
  {id:"agrafeuse-maped", name:"Agrafeuse MAPED", cat:"Rangement", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
   desc:"Agrafeuse compacte MAPED — agrafes 26/6, capacité 20 feuilles."},
  {id:"recharge-agrafes", name:"Recharge d'agrafes", cat:"Rangement", marque:"MAPED", price:0,
   image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
   desc:"Recharge d'agrafes 26/6 compatible MAPED — boîte de 1000 agrafes."}
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
    ${pack.brands ? `<div class="pack-brands">${pack.brands.map(b=>`<span>${b}</span>`).join('')}</div>` : ''}
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
  const priceDisplay = article.price > 0 ? priceStr(article.price) : 'Prix sur demande';
  const imgHtml = article.image
    ? `<img src="${article.image}" alt="${article.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
    : ARTICLE_ICON;
  return `<div class="article-card-new reveal">
    <div class="article-img-wrap">${imgHtml}</div>
    <div class="article-body-new">
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:6px;">
        ${article.marque ? `<span class="article-brand">${article.marque}</span>` : ''}
        ${article.cat ? `<span class="article-cat">${article.cat}</span>` : ''}
      </div>
      <h4 class="article-title-new">${article.name}</h4>
      <p class="article-desc-new">${article.desc}</p>
      <div class="article-price-new">${priceDisplay}</div>
      ${article.price > 0
        ? `<button class="btn btn-primary btn-sm btn-block" onclick="addToCart('${article.id}')">Ajouter au panier</button>`
        : `<a class="btn btn-whatsapp btn-sm btn-block" target="_blank" href="https://wa.me/221762098743?text=${waMsg}">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 12a8 8 0 1 1-3.6-6.7L20 4l-1 3.6A7.96 7.96 0 0 1 20 12Z" stroke="#fff" stroke-width="1.6"/></svg>
             Demander le prix
           </a>`
      }
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
