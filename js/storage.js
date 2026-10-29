function saveProducts(){try{localStorage.setItem('moscents_products',JSON.stringify(products))}catch(e){}}
function loadProducts(){try{const saved=localStorage.getItem('moscents_products');if(saved)products.splice(0,products.length,...JSON.parse(saved));else products.forEach(p=>p.stock=2)}catch(e){products.forEach(p=>p.stock=2)}}
