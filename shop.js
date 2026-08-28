/* ==========================================================================
   shop.js — logique propre à shop.html uniquement.
   Suppose que shared.js et cart.js sont chargés AVANT ce fichier.
   ========================================================================== */

let activeCat = 'Tous';

function renderShop(){
  const query = document.getElementById('shopSearch').value.trim().toLowerCase();

  let items = [];
  if(activeCat === 'Tous' || activeCat === 'Packs') items = items.concat(PACKS.map(p => ({...p, _type:'pack'})));
  if(activeCat === 'Tous' || activeCat === 'Articles') items = items.concat(ARTICLES.map(a => ({...a, _type:'article'})));

  if(query){
    items = items.filter(i =>
      i.name.toLowerCase().includes(query) ||
      (i.desc && i.desc.toLowerCase().includes(query))
    );
  }

  const grid = document.getElementById('shopGrid');
  const empty = document.getElementById('shopEmpty');

  if(items.length === 0){
    grid.innerHTML = '';
    grid.style.display = 'none';
    empty.style.display = 'block';
    document.getElementById('shopEmptyTitle').textContent = query
      ? `Aucun résultat pour "${query}" — pas encore ajouté au site`
      : `Rien dans cette catégorie pour l'instant`;
    const waMsg = encodeURIComponent(query
      ? `Bonjour S'Cool, je cherche : "${query}". Est-ce disponible ?`
      : `Bonjour S'Cool, avez-vous d'autres produits que ceux du site ?`);
    document.getElementById('shopEmptyBtn').href = `https://wa.me/221762098743?text=${waMsg}`;
  } else {
    grid.style.display = 'grid';
    empty.style.display = 'none';
    grid.innerHTML = items.map(i => i._type === 'pack' ? packCard(i) : articleCard(i)).join('');
  }
  observeReveals();
}

function runSearch(){ renderShop(); }

document.getElementById('shopSearch').addEventListener('input', renderShop);
document.getElementById('shopSearch').addEventListener('keydown', e=>{ if(e.key === 'Enter') runSearch(); });

document.querySelectorAll('.shop-tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.shop-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    activeCat = tab.dataset.cat;
    renderShop();
  });
});

renderShop();
