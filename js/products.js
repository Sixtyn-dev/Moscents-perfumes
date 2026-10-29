const products=[
{name:'Yara Risa',brand:'Lattafa',price:199,cat:'Feminino',notes:'Doce · Cremoso · Envolvente',img:'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80',tag:'Queridinho'},
{name:'Yara Candy',brand:'Lattafa',price:189,cat:'Feminino',notes:'Frutado · Gourmand · Alegre',img:'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=700&q=80',tag:'Em destaque'},
{name:'Asad',brand:'Lattafa',price:220,cat:'Masculino',notes:'Especiado · Âmbar · Intenso',img:'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80',tag:'Clássico'},
{name:'Fakhar Black',brand:'Lattafa',price:220,cat:'Masculino',notes:'Aromático · Elegante · Marcante',img:'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=700&q=80',tag:''},
{name:'Qaed Al Fursan',brand:'Lattafa',price:169,cat:'Compartilhável',notes:'Abacaxi · Amadeirado · Vibrante',img:'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=700&q=80',tag:'Ótimo custo-benefício'},
{name:'Khamrah',brand:'Lattafa',price:199,cat:'Compartilhável',notes:'Canela · Baunilha · Âmbar',img:'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80',tag:'Mais procurado'},
{name:'Salvo',brand:'Maison Alhambra',price:189,cat:'Masculino',notes:'Fresco · Cítrico · Versátil',img:'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80',tag:''},
{name:'Ameerati',brand:'Al Wataniah',price:169,cat:'Compartilhável',notes:'Oriental · Quente · Sofisticado',img:'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=700&q=80',tag:''},
{name:'Vulcan',brand:'French Avenue',price:290,cat:'Compartilhável',notes:'Frutado · Exótico · Poderoso',img:'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=700&q=80',tag:'Seleção premium'},
{name:'Liquid Brun',brand:'French Avenue',price:290,cat:'Masculino',notes:'Baunilha · Especiado · Amadeirado',img:'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=700&q=80',tag:''},
{name:'Asad Elixir',brand:'Lattafa',price:250,cat:'Masculino',notes:'Âmbar · Especiado · Profundo',img:'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=700&q=80',tag:'Novidade'},
{name:'The Kingdom',brand:'Lattafa',price:220,cat:'Masculino',notes:'Doce · Aromático · Moderno',img:'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80',tag:''},
{name:'Khanjar',brand:'Lattafa',price:230,cat:'Masculino',notes:'Amadeirado · Oriental · Distinto',img:'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=700&q=80',tag:''},
{name:'Asad Bourbon',brand:'Lattafa',price:230,cat:'Masculino',notes:'Bourbon · Baunilha · Especiarias',img:'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80',tag:''},
{name:'Khamrah Waha',brand:'Lattafa',price:329,cat:'Compartilhável',notes:'Gourmand · Frutado · Envolvente',img:'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=700&q=80',tag:'Premium'}
];let category='Todos',cart=[];
const money=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
