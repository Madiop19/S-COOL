/* ==========================================================================
   script.js — logique propre à index.html uniquement.
   Suppose que shared.js et cart.js sont chargés AVANT ce fichier.
   ========================================================================== */

const TESTIMONIALS = [
  {name:"Aïssatou D.", role:"Élève en Terminale, Dakar", quote:"Les fiches sur la gestion du temps m'ont vraiment aidée à tenir pendant le Bac blanc. Et le sac tient encore nickel après un an.", color:"#16305B"},
  {name:"Moussa K.", role:"Parent d'élève, Thiès", quote:"Commander sur WhatsApp c'était super simple, livré en 2 jours. La qualité des cahiers est clairement au-dessus de la moyenne.", color:"#2E4E85"},
  {name:"Fatou S.", role:"Étudiante, EPT", quote:"Le contenu Instagram de S'Cool m'a fait découvrir la méthode Pomodoro. Depuis je révise deux fois plus efficacement.", color:"#F6B90A"}
];

const FAQS = [
  {q:"Comment passer une commande ?", a:"Choisissez votre pack, ajoutez-le au panier puis cliquez sur « Valider sur WhatsApp ». On confirme votre commande et le paiement directement sur WhatsApp, en général sous 2h."},
  {q:"Quels sont les délais de livraison ?", a:"Comptez jusqu'à 48h pour Dakar et sa banlieue — vous êtes prévenu(e) en cas de retard. Une livraison dans les autres régions du Sénégal est possible, au cas par cas : écrivez-nous pour un délai précis."},
  {q:"Puis-je retourner un produit ?", a:"Oui, tout article non utilisé peut être échangé sous 7 jours avec preuve d'achat. Contactez-nous simplement sur WhatsApp."},
  {q:"Le contenu éducatif est-il payant ?", a:"Non, quand le hub Student Resources sera lancé, il sera gratuit et accessible à tous, sans compte à créer."},
  {q:"Proposez-vous des tarifs pour les écoles ?", a:"Oui, nous avons des offres dédiées pour les commandes groupées d'écoles ou d'associations de parents d'élèves. Écrivez-nous via le formulaire de contact."}
];

/* ---------- RENDER ---------- */
document.getElementById('packGrid').innerHTML = PACKS.map(packCard).join('');

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

observeReveals();
