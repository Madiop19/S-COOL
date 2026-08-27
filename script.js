/* ---------- DATA ---------- */
const PACK_ICON = `<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M4 11h16" stroke="currentColor" stroke-width="1.2"/><path d="M9 7V5.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5.5V7" stroke="currentColor" stroke-width="1.5"/></svg>`;

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

const RESOURCE_CATS = [
  {name:"Techniques d'étude", desc:"12 fiches pratiques", icon:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 19V6a2 2 0 0 1 2-2h13v15" stroke="#16305B" stroke-width="1.5"/><path d="M6 21a2 2 0 0 1 0-4h13" stroke="#16305B" stroke-width="1.5"/></svg>`},
  {name:"Productivité", desc:"9 fiches pratiques", icon:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 12.5 11 15.5 16 8.5" stroke="#16305B" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="9" stroke="#16305B" stroke-width="1.5"/></svg>`},
  {name:"Gestion du temps", desc:"7 fiches pratiques", icon:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#16305B" stroke-width="1.5"/><path d="M12 7v5l3.5 2" stroke="#16305B" stroke-width="1.6" stroke-linecap="round"/></svg>`},
  {name:"Motivation", desc:"8 fiches pratiques", icon:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3s6 5.5 6 10.5a6 6 0 1 1-12 0C6 8.5 12 3 12 3Z" stroke="#16305B" stroke-width="1.5"/></svg>`},
  {name:"Préparation aux examens", desc:"11 fiches pratiques", icon:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="#16305B" stroke-width="1.5"/><path d="M8 8h8M8 12h8M8 16h5" stroke="#16305B" stroke-width="1.4"/></svg>`},
  {name:"Astuces scolaires", desc:"14 fiches pratiques", icon:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11.2c.6.4 1 1 1 1.8h4c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z" stroke="#16305B" stroke-width="1.5"/></svg>`}
];

const ARTICLES = [
  {tag:"Techniques d'étude", title:"La méthode Feynman expliquée simplement", time:"6 min"},
  {tag:"Gestion du temps", title:"Planifier sa semaine de révisions sans stress", time:"5 min"},
  {tag:"Motivation", title:"Comment garder le rythme jusqu'aux examens", time:"4 min"}
];

const BLOG_POSTS = [
  {tag:"Astuces scolaires", title:"5 erreurs à éviter en début d'année", time:"3 min"},
  {tag:"Coulisses S'Cool", title:"Comment on choisit nos fournisseurs", time:"5 min"},
  {tag:"Parents", title:"Aider son enfant sans faire le travail à sa place", time:"7 min"}
];

const TESTIMONIALS = [
  {name:"Aïssatou D.", role:"Élève en Terminale, Dakar", quote:"Les fiches sur la gestion du temps m'ont vraiment aidée à tenir pendant le Bac blanc. Et le sac tient encore nickel après un an.", color:"#16305B"},
  {name:"Moussa K.", role:"Parent d'élève, Thiès", quote:"Commander sur WhatsApp c'était super simple, livré en 2 jours. La qualité des cahiers est clairement au-dessus de la moyenne.", color:"#2E4E85"},
  {name:"Fatou S.", role:"Étudiante, EPT", quote:"Le contenu Instagram de S'Cool m'a fait découvrir la méthode Pomodoro. Depuis je révise deux fois plus efficacement.", color:"#F6B90A"}
];

const FAQS = [
  {q:"Comment passer une commande ?", a:"Choisissez votre pack, ajoutez-le au panier puis cliquez sur « Valider sur WhatsApp ». On confirme votre commande et le paiement directement sur WhatsApp, en général sous 2h."},
  {q:"Quels sont les délais de livraison ?", a:"Comptez jusqu'à 48h pour Dakar et sa banlieue — vous êtes prévenu(e) en cas de retard. Une livraison dans les autres régions du Sénégal est possible, au cas par cas : écrivez-nous pour un délai précis."},
  {q:"Puis-je retourner un produit ?", a:"Oui, tout article non utilisé peut être échangé sous 7 jours avec preuve d'achat. Contactez-nous simplement sur WhatsApp."},
  {q:"Le contenu éducatif est-il payant ?", a:"Non, l'ensemble des fiches et articles du hub Student Resources est gratuit et accessible à tous, sans compte à créer."},
  {q:"Proposez-vous des tarifs pour les écoles ?", a:"Oui, nous avons des offres dédiées pour les commandes groupées d'écoles ou d'associations de parents d'élèves. Écrivez-nous via le formulaire de contact."}
];

/* ---------- RENDER ---------- */
function priceStr(p){ return p.toLocaleString('fr-FR') + ' FCFA'; }

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

/* ---------- CART ---------- */
// État du panier : un objet { id_pack: { qty, trousse } }.
// En mémoire seulement (pas de localStorage) — le panier se vide si on recharge la page.
let cart = {};

function findPack(id){ return PACKS.find(p => p.id === id); }

function addToCart(id){
  const trousseEl = document.getElementById('trousse-'+id);
  const wantsTrousse = !!(trousseEl && trousseEl.checked);
  if(cart[id]) cart[id].qty += 1;
  else cart[id] = { qty: 1, trousse: wantsTrousse };
  renderCart();
  showToast('Pack ' + findPack(id).name + ' ajouté au panier');
}
function changeQty(id, delta){
  cart[id].qty += delta;
  if(cart[id].qty <= 0) delete cart[id];
  renderCart();
}
function removeFromCart(id){
  delete cart[id];
  renderCart();
}
function cartCount(){
  return Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
}
function cartTotal(){
  return Object.entries(cart).reduce((sum, [id, item]) => sum + findPack(id).price * item.qty, 0);
}
function renderCart(){
  const count = cartCount();
  document.querySelectorAll('.cart-badge').forEach(b=>{
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });

  const itemsEl = document.getElementById('cartItems');
  const entries = Object.entries(cart);
  if(entries.length === 0){
    itemsEl.innerHTML = `<p style="color:var(--ink-soft); text-align:center; padding:40px 0; font-size:14px;">Ton panier est vide pour l'instant.</p>`;
  } else {
    itemsEl.innerHTML = entries.map(([id, item])=>{
      const p = findPack(id);
      return `<div class="cart-item">
        <div class="ci-icon" style="color:${p.accent};">${PACK_ICON}</div>
        <div class="ci-info">
          <h6>${p.name}${item.trousse ? ' <span class="mono" style="font-size:11px; color:var(--ink-soft);">+ trousse</span>' : ''}</h6>
          <span class="mono">${priceStr(p.price)}</span>
          <div class="ci-qty">
            <button onclick="changeQty('${id}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty('${id}', 1)">+</button>
          </div>
        </div>
        <button class="ci-remove" onclick="removeFromCart('${id}')" aria-label="Retirer">✕</button>
      </div>`;
    }).join('');
  }
  document.getElementById('cartTotal').textContent = priceStr(cartTotal());
}

function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

function checkoutCartWhatsapp(){
  const entries = Object.entries(cart);
  if(entries.length === 0){ showToast('Ton panier est vide.'); return; }
  let lines = ["Bonjour S'Cool, je souhaite commander :"];
  entries.forEach(([id, item])=>{
    const p = findPack(id);
    lines.push(`- Pack ${p.name} x${item.qty} (${priceStr(p.price * item.qty)})${item.trousse ? ' + trousse (prix à confirmer)' : ''}`);
  });
  lines.push(`Total packs : ${priceStr(cartTotal())}`);
  const msg = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/221762098743?text=${msg}`, '_blank');
}

document.getElementById('packGrid').innerHTML = PACKS.map(packCard).join('');

document.getElementById('catGrid').innerHTML = RESOURCE_CATS.map(c=>`
  <div class="cat-card reveal" onclick="document.getElementById('resourceArticles').scrollIntoView({behavior:'smooth', block:'center'})">
    <div class="cat-ic">${c.icon}</div>
    <div><h5>${c.name}</h5><p>${c.desc}</p></div>
  </div>`).join('');

function articleCard(a, bg){
  return `<div class="article-card reveal">
    <div class="article-media" style="background:${bg};">
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v13H8l-4 4V4Z" stroke="#fff" stroke-width="1.3" stroke-linejoin="round" opacity="0.9"/></svg>
    </div>
    <div class="article-body">
      <span class="article-tag">${a.tag}</span>
      <h4>${a.title}</h4>
      <div class="meta">📖 ${a.time} de lecture</div>
    </div>
  </div>`;
}
document.getElementById('resourceArticles').innerHTML = ARTICLES.map((a,i)=>articleCard(a, i%2? 'var(--blue-light)':'var(--blue)')).join('');
document.getElementById('blogGrid').innerHTML = BLOG_POSTS.map((a,i)=>articleCard(a, i%2? 'var(--yellow)':'var(--blue)')).join('');

document.getElementById('testiGrid').innerHTML = TESTIMONIALS.map(t=>`
  <div class="testi-card reveal">
    <div class="stars">★★★★★</div>
    <p class="quote">« ${t.quote} »</p>
    <div class="testi-person">
      <div class="avatar" style="background:${t.color};">${t.name.split(' ').map(w=>w[0]).join('')}</div>
      <div><div class="name">${t.name}</div><div class="role">${t.role}</div></div>
    </div>
  </div>`).join('');

document.getElementById('faqList').innerHTML = FAQS.map((f,i)=>`
  <div class="faq-item" id="faq-${i}">
    <div class="faq-q" onclick="toggleFaq(${i})">
      <h5>${f.q}</h5>
      <div class="faq-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 4v16M4 12h16" stroke="#16305B" stroke-width="2" stroke-linecap="round"/></svg></div>
    </div>
    <div class="faq-a"><p>${f.a}</p></div>
  </div>`).join('');
function toggleFaq(i){ document.getElementById('faq-'+i).classList.toggle('open'); }

/* ---------- INTERACTIONS ---------- */
function closeMenu(){ document.getElementById('mmenu').classList.remove('open'); }
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 3200);
}
function submitContact(e){
  e.preventDefault();
  showToast('Message envoyé ! On revient vers vous très vite.');
  e.target.reset();
  return false;
}

/* active nav link on scroll */
const sections = ['home','shop','resources','blog','about','contact'];
const navA = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', ()=>{
  let current = 'home';
  sections.forEach(id=>{
    const el = document.getElementById(id);
    if(el && window.scrollY >= el.offsetTop - 160) current = id;
  });
  navA.forEach(a=> a.classList.toggle('active', a.getAttribute('href') === '#'+current));
});

/* scroll reveal + highlighter */
function observeReveals(){
  const els = document.querySelectorAll('.reveal:not(.in-view), .highlight:not(.in-view)');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in-view'); io.unobserve(en.target);} });
  }, {threshold:0.12});
  els.forEach(el=>io.observe(el));
}
observeReveals();
renderCart();