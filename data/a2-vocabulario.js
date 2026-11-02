/* Camino al Español · Nivel A2 · contenido */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "a2-rest",
  lvl: "A2",
  k: "v",
  t: "Comida y restaurante",
  fr: "La nourriture et les restaurants",
  ic: "🍽️",
  th: `<div class="card"><h2>En el restaurante <span class="fr">(au restaurant)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>la carta / el menú</td><td>carte</td></tr>
<tr><td>el menú del día</td><td>menu du jour</td></tr>
<tr><td>la cuenta</td><td>l’addition (aux États-Unis : l’addition)</td></tr>
<tr><td>el camarero / la camarera</td><td>serveur / serveuse (Amérique latine : el mesero / la mesera)</td></tr>
<tr><td>el primer plato / el segundo plato / el postre</td><td>entrée / plat principal / dessert</td></tr>
<tr><td>la propina</td><td>pourboire</td></tr>
<tr><td>el pollo, el pescado, la carne</td><td>chicken, fish, meat</td></tr>
<tr><td>las verduras, la fruta</td><td>vegetables, fruit</td></tr>
<tr><td>picante, dulce, salado</td><td>spicy, sweet, salty</td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> En España, el <b>menú del día</b> incluye primer plato, segundo plato, postre, pan y bebida por un precio fijo. <span class="fr">En Espagne, le « menú del día » est un déjeuner à prix fixe comprenant une entrée, un plat, un dessert, du pain et une boisson.</span></div></div>
<div class="card"><h3>Frases útiles <span class="fr">(expressions utiles)</span></h3>
<p>Una mesa para dos, por favor. <span class="fr">Une table pour deux, s’il vous plaît.</span><br>
¿Tienen mesa en la terraza? <span class="fr">Vous avez une table en terrasse ?</span><br>
Quisiera la paella. <span class="fr">Je voudrais la paella.</span><br>
De primero, una ensalada; de segundo, pescado. <span class="fr">En entrée, une salade ; en plat, du poisson.</span><br>
¿Qué me recomienda? <span class="fr">Que recommandez-vous ?</span><br>
Soy alérgico a los frutos secos. <span class="fr">Je suis allergique aux fruits à coque.</span><br>
¿Nos trae la cuenta, por favor? <span class="fr">Pourriez-vous nous apporter l’addition ?</span><br>
Estaba riquísimo. <span class="fr">C’était délicieux.</span></p></div>
<div class="card"><h3>Cocinar y describir la comida <span class="fr">(cuisiner et décrire les aliments)</span></h3>
<table><tr><th>¿Cómo está hecho?</th><th>Français</th></tr>
<tr><td>a la plancha</td><td>grillé (à la plancha)</td></tr>
<tr><td>frito / asado / al horno</td><td>fried / roasted / baked</td></tr>
<tr><td>poco hecho / muy hecho</td><td>rare / well done</td></tr>
<tr><td>rico, sabroso, soso</td><td>tasty, flavourful, bland</td></tr></table>
<p>La sopa está fría. <span class="fr">La soupe est froide.</span><br>Este plato está muy rico. <span class="fr">Ce plat est vraiment délicieux.</span><br>
En México: el carro, la comida <b>picosa</b>; en España: el coche, la comida <b>picante</b>. <span class="fr">Le vocabulaire varie selon les pays.</span></p></div>`,
  voc: [
    ["📋", "la carta", "menu"],
    ["🧾", "la cuenta", "addition"],
    ["🤵", "el camarero", "serveur"],
    ["🍗", "el pollo", "poulet"],
    ["🐟", "el pescado", "poisson"],
    ["🥩", "la carne", "viande"],
    ["🥦", "las verduras", "légumes"],
    ["🍎", "la fruta", "fruits"],
    ["🥗", "la ensalada", "salade"],
    ["🍰", "el postre", "dessert"],
    ["🍞", "el pan", "pain"],
    ["🍷", "el vino", "vin"],
    ["💧", "el agua", "eau"],
    ["🥘", "la paella", "paella"],
    ["🌶️", "picante", "épicé"],
    ["🍬", "dulce", "sucré"],
    ["🪙", "la propina", "pourboire"],
    ["🍴", "el tenedor", "fourchette"]
  ],
  ex: [
    { q: "la cuenta", o: ["addition", "carte", "pourboire"], a: 0, t: "la cuenta = l’addition" },
    { q: "el camarero", o: ["cuisinier", "serveur", "client"], a: 1, t: "el camarero = serveur" },
    { q: "Quisiera ___ la carta, por favor.", o: ["ver", "ser", "dar"], a: 0, t: "Je voudrais voir la carte, s’il vous plaît." },
    { q: "Para beber, ___ agua con gas.", o: ["quisiera", "quiere", "quieren"], a: 0, t: "À boire, je voudrais de l’eau gazeuse." },
    { q: "Dulce es lo contrario de...", o: ["salado", "caliente", "rico"], a: 0, t: "« Doux » est le contraire de « salé »." },
    { q: "el postre", o: ["dessert", "entrée", "boisson"], a: 0, t: "el postre = dessert" },
    { q: "¿Nos trae la ___, por favor? (addition)", a: ["cuenta"], t: "Pourriez-vous nous apporter l’addition, s’il vous plaît ?" },
    { q: "Una ___ para dos, por favor. (table)", a: ["mesa"], t: "Une table pour deux, s’il vous plaît." },
    { q: "Al final dejamos una ___ al camarero. (tip)", a: ["propina"], t: "Finalement, nous avons laissé un pourboire au serveur." },
    { w: "De primero quiero una ensalada mixta.", t: "En entrée, je voudrais une salade composée." },
    { w: "¿Qué me recomienda de postre?", t: "Que recommandez-vous comme dessert ?" },
    { w: "El pescado a la plancha está riquísimo.", t: "Le poisson grillé est délicieux." }
  ],
  tx: {
    ti: "Una cena en Valencia",
    b: `Ayer fuimos a un restaurante nuevo en el centro de Valencia. Era viernes y había mucha gente, pero teníamos una reserva. El <u>camarero</u> nos dio la <u>carta</u> y nos recomendó la paella de la casa. Pedimos de <u>primer plato</u> una ensalada con tomate y aguacate. De segundo, yo tomé <u>pescado</u> a la plancha con <u>verduras</u> y mi novio, <u>carne</u> asada con patatas. Para beber, pedimos agua y una botella de vino blanco.<br><br>De <u>postre</u> compartimos una tarta de chocolate. Estaba riquísimo, aunque un poco <u>dulce</u> para mí. Al final pedimos la <u>cuenta</u>: fueron cincuenta euros. Pagamos con tarjeta y dejamos una <u>propina</u> de cinco euros porque el servicio fue excelente. Queremos volver el mes que viene para probar la paella.`
  },
  q: [
    ["¿Qué pidieron de primer plato?", ["Sopa", "Ensalada", "Paella"], 1],
    ["¿Qué comió el novio?", ["Carne", "Pescado", "Pollo"], 0],
    ["¿Qué dejaron al final?", ["Una nota", "Una propina", "Nada"], 1],
    ["¿Por qué quieren volver?", ["Para probar la paella", "Porque es barato", "Para trabajar allí"], 0]
  ],
  sp: [
    "¿Cuál es tu plato favorito? Descríbelo.",
    "Estás en un restaurante: pide una mesa y tu comida.",
    "¿Qué comes normalmente para desayunar?",
    "¿Te gusta la comida picante? ¿Por qué?",
    "¿Qué plato típico de tu país recomiendas?",
    "Cuenta la última vez que comiste en un restaurante: ¿qué pediste y cómo estaba?"
  ]
},
{
  id: "a2-ropa",
  lvl: "A2",
  k: "v",
  t: "Ropa y compras",
  fr: "Les vêtements et les achats",
  ic: "👗",
  th: `<div class="card"><h2>La ropa <span class="fr">(vêtements)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>la camiseta / la camisa</td><td>tee-shirt / chemise</td></tr>
<tr><td>los pantalones / los vaqueros</td><td>trousers / jeans (LatAm: los jeans)</td></tr>
<tr><td>la falda / el vestido</td><td>skirt / dress</td></tr>
<tr><td>el jersey / la chaqueta / el abrigo</td><td>pull / veste / manteau (Amérique latine : el suéter)</td></tr>
<tr><td>los zapatos / las zapatillas / las botas</td><td>shoes / trainers / boots</td></tr>
<tr><td>el bolso / la gorra / la bufanda</td><td>sac à main / casquette / écharpe</td></tr></table>
<p>Llevo una camiseta blanca y unos vaqueros. <span class="fr">Je porte un tee-shirt blanc et un jean.</span></p></div>
<div class="card"><h3>Colores, tallas y materiales <span class="fr">(couleurs, tailles et matières)</span></h3>
<table><tr><th>Colores</th><th>Tallas</th><th>Materiales</th></tr>
<tr><td>rojo, azul, verde, amarillo</td><td>la talla S, M, L</td><td>de algodón <span class="fr">coton</span></td></tr>
<tr><td>negro, blanco, gris, marrón</td><td>el número (zapatos): el 38</td><td>de lana <span class="fr">laine</span></td></tr>
<tr><td>rosa, naranja, morado</td><td>grande / pequeño</td><td>de cuero <span class="fr">cuir</span></td></tr></table>
<p>El adjetivo concuerda: <b>una falda roja</b>, <b>unos zapatos rojos</b>. Pero <b>rosa</b>, <b>naranja</b> y <b>azul</b> no cambian de género: <b>una camisa azul</b>, <b>un jersey rosa</b>. <span class="fr">Les couleurs s’accordent avec le nom, sauf rosa/naranja (invariables) et azul/verde (identiques aux deux genres).</span></p>
<div class="tip"><b>Truco / Astuce :</b> Ropa = <i>talla</i> (taille). Zapatos = <i>número</i>. ¿Qué número tiene? <span class="fr">Quelle pointure faites-vous ?</span></div></div>
<div class="card"><h3>En la tienda <span class="fr">(dans un magasin)</span></h3>
<p>¿Me lo puedo probar? / ¿Puedo probármelo? <span class="fr">Je peux l’essayer ?</span><br>
¿Dónde están los probadores? <span class="fr">Où sont les cabines d’essayage ?</span><br>
¿Tiene una talla más grande? <span class="fr">Vous avez une taille au-dessus ?</span><br>
Me queda pequeño / grande / bien. <span class="fr">C’est trop petit / trop grand / ça va bien.</span><br>
¿Cuánto cuesta? / ¿Cuánto es? <span class="fr">Combien ça coûte ?</span><br>
Está de rebajas / en oferta. <span class="fr">C’est en promotion.</span><br>
¿Puedo pagar con tarjeta? — Sí, o en efectivo. <span class="fr">Je peux payer par carte ? — Oui, ou en espèces.</span><br>
Me lo llevo. <span class="fr">Je la prends.</span></p></div>`,
  voc: [
    ["👕", "la camiseta", "tee-shirt"],
    ["👔", "la camisa", "chemise"],
    ["👖", "los vaqueros", "jean"],
    ["👗", "el vestido", "robe"],
    ["🧥", "el abrigo", "manteau"],
    ["👟", "las zapatillas", "baskets"],
    ["👞", "los zapatos", "chaussures"],
    ["👢", "las botas", "bottes"],
    ["👜", "el bolso", "sac à main"],
    ["🧢", "la gorra", "casquette"],
    ["🧣", "la bufanda", "écharpe"],
    ["🧦", "los calcetines", "chaussettes"],
    ["🧤", "los guantes", "gants"],
    ["🏷️", "el precio", "prix"],
    ["💳", "la tarjeta", "carte bancaire"],
    ["💶", "el efectivo", "espèces"],
    ["🛍️", "la bolsa", "sac de courses"],
    ["🪞", "el probador", "cabine d’essayage"]
  ],
  ex: [
    { q: "¿Me lo puedo ___? (to try on)", o: ["probar", "llevar", "pagar"], a: 0, t: "Je peux l’essayer ?" },
    { q: "Necesito un ___ más grande de zapatos.", o: ["número", "talla", "precio"], a: 0, t: "Il me faut une pointure au-dessus." },
    { q: "Quiero una falda ___.", o: ["rojo", "roja", "rojas"], a: 1, t: "Je veux une jupe rouge." },
    { q: "Estos pantalones me quedan ___. Necesito una talla menos.", o: ["grandes", "pequeños", "bien"], a: 0, t: "Ce pantalon est trop grand pour moi. Il me faut une taille en dessous." },
    { q: "el abrigo", o: ["manteau", "chemise", "écharpe"], a: 0, t: "el abrigo = manteau" },
    { q: "¿Puedo pagar en ___? — Sí, claro, o con tarjeta.", o: ["efectivo", "probador", "rebaja"], a: 0, t: "Je peux payer en espèces ? — Oui, bien sûr, ou par carte." },
    { q: "Un jersey de ___ es muy caliente para el invierno. (laine)", a: ["lana"], t: "Un pull en laine tient très chaud en hiver." },
    { q: "¿Cuánto ___ esta camisa? (costar)", a: ["cuesta"], t: "Combien coûte cette chemise ?" },
    { q: "Me gusta mucho. Me lo ___. (llevar)", a: ["llevo"], t: "Elle me plaît beaucoup. Je la prends." },
    { w: "¿Tiene esta chaqueta en talla mediana?", t: "Vous avez cette veste en taille moyenne ?" },
    { w: "Los probadores están al fondo a la derecha.", t: "Les cabines d’essayage sont au fond, à droite." },
    { w: "Hoy llevo una camiseta azul y vaqueros.", t: "Aujourd’hui, je porte un tee-shirt bleu et un jean." }
  ],
  tx: {
    ti: "De rebajas en Madrid",
    b: `El sábado Clara fue de compras con su amiga Inés porque estaban de <u>rebajas</u>. Primero entraron en una tienda de ropa en la calle Fuencarral. Clara buscaba un <u>abrigo</u> para el invierno. Encontró uno <u>negro</u>, de <u>lana</u>, muy bonito, y le preguntó a la dependienta: «¿Me lo puedo <u>probar</u>?». Fue al <u>probador</u>, pero el abrigo le quedaba <u>grande</u>. Por suerte, tenían una <u>talla</u> más pequeña.<br><br>Inés no necesitaba nada, pero vio unas <u>botas</u> marrones de cuero y no pudo resistirse. Pidió el número 38 y le quedaban perfectas. El abrigo costaba noventa euros, pero con el descuento solo pagó sesenta. Las botas costaban cuarenta y cinco. Clara pagó con <u>tarjeta</u> e Inés en <u>efectivo</u>. Después tomaron un café para celebrar sus compras.`
  },
  q: [
    ["¿Qué buscaba Clara?", ["Unas botas", "Un abrigo", "Un vestido"], 1],
    ["¿Qué problema tenía el primer abrigo?", ["Era muy caro", "Le quedaba grande", "Era de color rojo"], 1],
    ["¿Cuánto pagó Clara por el abrigo?", ["Sesenta euros", "Noventa euros", "Cuarenta y cinco euros"], 0],
    ["¿Cómo pagó Inés?", ["Con tarjeta", "No pagó", "En efectivo"], 2]
  ],
  sp: [
    "¿Qué ropa llevas hoy? Describe los colores y los materiales.",
    "¿Cuál es tu ropa favorita para el fin de semana? ¿Por qué?",
    "Estás en una tienda: pide una talla diferente y pregunta si te lo puedes probar.",
    "¿Prefieres comprar ropa en tiendas o por internet? ¿Por qué?",
    "¿Cuál fue tu última compra? ¿Cuánto costó y cómo pagaste?",
    "Describe la ropa que llevas normalmente en invierno y en verano."
  ]
},
{
  id: "a2-viajes",
  lvl: "A2",
  k: "v",
  t: "Viajes y hotel",
  fr: "Les voyages et les hôtels",
  ic: "🧳",
  th: `<div class="card"><h2>En el aeropuerto y en la estación <span class="fr">(à l’aéroport et à la gare)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>el vuelo / el avión</td><td>flight / plane</td></tr>
<tr><td>la tarjeta de embarque</td><td>carte d’embarquement</td></tr>
<tr><td>la puerta de embarque</td><td>porte d’embarquement</td></tr>
<tr><td>facturar la maleta</td><td>enregistrer la valise</td></tr>
<tr><td>el equipaje de mano</td><td>bagage à main</td></tr>
<tr><td>el billete de ida / de ida y vuelta</td><td>one-way / return ticket (LatAm: el boleto, el pasaje)</td></tr>
<tr><td>el andén / la vía</td><td>quai / voie</td></tr>
<tr><td>el retraso / cancelado</td><td>delay / cancelled</td></tr></table>
<p>El vuelo a Lima sale con retraso. <span class="fr">Le vol pour Lima est retardé.</span><br>
El tren para Sevilla sale del andén 5. <span class="fr">Le train pour Séville part de la voie 5.</span></p></div>
<div class="card"><h3>Reservar un hotel <span class="fr">(réserver un hôtel)</span></h3>
<p>Quería reservar una habitación doble para dos noches. <span class="fr">Je voudrais réserver une chambre double pour deux nuits.</span><br>
¿Está incluido el desayuno? <span class="fr">Le petit-déjeuner est-il compris ?</span><br>
Tengo una reserva a nombre de Ramírez. <span class="fr">J’ai une réservation au nom de Ramírez.</span><br>
¿A qué hora es la salida? <span class="fr">À quelle heure faut-il libérer la chambre ?</span><br>
habitación individual / doble, con vistas al mar <span class="fr">chambre simple / double, avec vue sur la mer</span><br>
la recepción, el ascensor, la llave <span class="fr">réception, ascenseur, clé</span></p>
<div class="tip"><b>Truco / Astuce :</b> «Quería…» (imperfecto) suena más amable que «quiero…» para pedir algo. <span class="fr">« Quería » paraît plus poli que « quiero » pour demander quelque chose.</span></div></div>
<div class="card"><h3>Problemas en el hotel <span class="fr">(problèmes à l’hôtel)</span></h3>
<p>El aire acondicionado no funciona. <span class="fr">La climatisation ne fonctionne pas.</span><br>
No hay agua caliente. <span class="fr">Il n’y a pas d’eau chaude.</span><br>
La habitación está sucia / es muy ruidosa. <span class="fr">La chambre est sale / très bruyante.</span><br>
He perdido la llave. <span class="fr">J’ai perdu la clé.</span><br>
Mi maleta no ha llegado. <span class="fr">Ma valise n’est pas arrivée.</span><br>
¿Me puede cambiar de habitación? <span class="fr">Pouvez-vous changer ma chambre ?</span></p></div>`,
  voc: [
    ["✈️", "el avión", "avion"],
    ["🛫", "el vuelo", "vol"],
    ["🧳", "la maleta", "valise"],
    ["🎒", "la mochila", "sac à dos"],
    ["🛂", "el pasaporte", "passeport"],
    ["🎫", "el billete", "billet"],
    ["🚆", "el tren", "train"],
    ["🚉", "la estación", "gare"],
    ["🏨", "el hotel", "hôtel"],
    ["🛎️", "la recepción", "réception"],
    ["🔑", "la llave", "clé"],
    ["🛏️", "la habitación doble", "chambre double"],
    ["🗺️", "el mapa", "carte"],
    ["⏰", "el retraso", "retard"],
    ["🌊", "las vistas al mar", "vue sur la mer"],
    ["🚿", "la ducha", "douche"],
    ["🛗", "el ascensor", "ascenseur"]
  ],
  ex: [
    { q: "Antes de subir al avión necesitas la tarjeta de ___.", o: ["embarque", "crédito", "visita"], a: 0, t: "Avant d’embarquer, il faut la carte d’embarquement." },
    { q: "Quería ___ una habitación doble para el viernes.", o: ["reservar", "facturar", "perder"], a: 0, t: "Je voudrais réserver une chambre double pour vendredi." },
    { q: "el andén", o: ["quai", "porte d embarquement", "bagages"], a: 0, t: "el andén = quai (de gare)" },
    { q: "Un billete de ida y ___, por favor.", o: ["vuelta", "venida", "salida"], a: 0, t: "Un billet aller-retour, s’il vous plaît." },
    { q: "La ducha no tiene agua caliente. Es un ___.", o: ["problema", "equipaje", "vuelo"], a: 0, t: "Il n’y a pas d’eau chaude dans la douche. C’est un problème." },
    { q: "Tengo una ___ a nombre de López. (booking)", a: ["reserva"], t: "J’ai une réservation au nom de López." },
    { q: "Voy a ___ la maleta grande en el mostrador. (to check in)", a: ["facturar"], t: "Je vais enregistrer la grande valise au comptoir." },
    { q: "El tren llega tarde: tiene un ___ de veinte minutos. (delay)", a: ["retraso"], t: "Le train est en retard : il a vingt minutes de retard." },
    { q: "Para subir al quinto piso tomamos el ___. (lift)", a: ["ascensor"], t: "Pour monter au cinquième étage, nous prenons l’ascenseur." },
    { w: "¿Está incluido el desayuno en el precio?", t: "Le petit-déjeuner est-il compris dans le prix ?" },
    { w: "El aire acondicionado de mi habitación no funciona.", t: "La climatisation de ma chambre ne fonctionne pas." },
    { w: "Nuestro vuelo sale de la puerta doce.", t: "Notre vol part de la porte douze." }
  ],
  tx: {
    ti: "Un viaje complicado a Cartagena",
    b: `En marzo, Diego y su hermana viajaron de Bogotá a Cartagena de Indias. En el aeropuerto <u>facturaron</u> una <u>maleta</u> grande y llevaron una <u>mochila</u> como <u>equipaje de mano</u>. El <u>vuelo</u> salió con una hora de <u>retraso</u>, pero el viaje fue tranquilo.<br><br>Cuando llegaron, la maleta no apareció. Tuvieron que ir a una oficina del aeropuerto y explicar el problema. Después tomaron un taxi al <u>hotel</u>. En la <u>recepción</u> dijeron: «Tenemos una <u>reserva</u> a nombre de Diego Rojas». La <u>habitación doble</u> tenía <u>vistas al mar</u>, pero el aire acondicionado no funcionaba y hacía mucho calor. El recepcionista fue muy amable y les cambió de habitación. Al día siguiente, la maleta llegó al hotel. Al final, las vacaciones fueron fantásticas: playa, comida rica y paseos por la ciudad antigua.`
  },
  q: [
    ["¿Qué problema tuvo el vuelo?", ["Fue cancelado", "Salió con retraso", "Salió antes"], 1],
    ["¿Qué pasó con la maleta?", ["No llegó con ellos", "Se rompió", "La olvidaron en el hotel"], 0],
    ["¿Qué no funcionaba en la habitación?", ["La ducha", "El aire acondicionado", "La televisión"], 1],
    ["¿Cómo fueron las vacaciones al final?", ["Horribles", "Aburridas", "Fantásticas"], 2]
  ],
  sp: [
    "¿Prefieres viajar en avión, en tren o en coche? ¿Por qué?",
    "Llamas a un hotel: reserva una habitación para tu familia y pregunta por el desayuno.",
    "Cuenta un viaje que hiciste: ¿adónde fuiste y dónde dormiste?",
    "¿Qué llevas siempre en tu equipaje de mano?",
    "Estás en la recepción de un hotel: explica un problema con tu habitación.",
    "¿Cuál es el viaje de tus sueños? Descríbelo."
  ]
},
{
  id: "a2-salud",
  lvl: "A2",
  k: "v",
  t: "Salud y cuerpo",
  fr: "La santé et le corps",
  ic: "🩺",
  th: `<div class="card"><h2>El cuerpo <span class="fr">(corps humain)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>la cabeza, la cara, el pelo</td><td>tête, visage, cheveux</td></tr>
<tr><td>los ojos, la nariz, la boca, los dientes, la oreja</td><td>eyes, nose, mouth, teeth, ear</td></tr>
<tr><td>el cuello, la garganta, la espalda</td><td>cou, gorge, dos</td></tr>
<tr><td>el brazo, la mano, el dedo</td><td>arm, hand, finger</td></tr>
<tr><td>la pierna, la rodilla, el pie</td><td>jambe, genou, pied</td></tr>
<tr><td>el estómago / la barriga</td><td>estomac / ventre (en Amérique latine : la panza)</td></tr></table></div>
<div class="card"><h3>¿Qué te pasa? Me duele… <span class="fr">(Qu’est-ce qui ne va pas ? J’ai mal…)</span></h3>
<p><b>Doler</b> funciona como <b>gustar</b>: me duele + singular, me duelen + plural. <span class="fr">Doler fonctionne comme gustar.</span><br>
Me duele la cabeza. <span class="fr">J’ai mal à la tête.</span><br>
Me duelen los pies. <span class="fr">J’ai mal aux pieds.</span><br>
A mi hijo le duele la garganta. <span class="fr">Mon fils a mal à la gorge.</span></p>
<table><tr><th>tener…</th><th>estar…</th></tr>
<tr><td>tener fiebre <span class="fr">avoir de la fièvre</span></td><td>estar enfermo/a <span class="fr">être malade</span></td></tr>
<tr><td>tener tos <span class="fr">tousser</span></td><td>estar resfriado/a <span class="fr">être enrhumé(e)</span></td></tr>
<tr><td>tener gripe <span class="fr">avoir la grippe</span></td><td>estar mareado/a <span class="fr">avoir des vertiges</span></td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> En español no decimos «mi cabeza duele», sino «<b>me</b> duele <b>la</b> cabeza»: con partes del cuerpo usamos el artículo, no el posesivo. <span class="fr">Utilisez l’article (la, el), et non « mi », avec les parties du corps.</span></div></div>
<div class="card"><h3>En el médico y en la farmacia <span class="fr">(chez le médecin et à la pharmacie)</span></h3>
<p>Quería pedir cita con el médico. <span class="fr">Je voudrais prendre rendez-vous chez le médecin.</span><br>
¿Desde cuándo se encuentra mal? — Desde ayer. <span class="fr">Depuis quand vous sentez-vous mal ? — Depuis hier.</span><br>
Tiene que tomar este jarabe tres veces al día. <span class="fr">Vous devez prendre ce sirop trois fois par jour.</span><br>
¿Tiene algo para el dolor de cabeza? <span class="fr">Vous avez quelque chose contre le mal de tête ?</span><br>
la receta, las pastillas, la tirita (LatAm: la curita) <span class="fr">ordonnance, médicaments, pansement</span></p></div>`,
  voc: [
    ["🧠", "la cabeza", "tête"],
    ["👁️", "el ojo", "œil"],
    ["👃", "la nariz", "nez"],
    ["👄", "la boca", "bouche"],
    ["🦷", "el diente", "dent"],
    ["👂", "la oreja", "oreille"],
    ["💪", "el brazo", "bras"],
    ["✋", "la mano", "main"],
    ["🦵", "la pierna", "jambe"],
    ["🦶", "el pie", "pied"],
    ["🤒", "la fiebre", "fièvre"],
    ["🤧", "el resfriado", "rhume"],
    ["🧑‍⚕️", "el médico", "médecin"],
    ["💊", "la pastilla", "comprimé"],
    ["🏥", "el hospital", "hôpital"],
    ["🌡️", "el termómetro", "thermomètre"],
    ["🩹", "la tirita", "pansement"]
  ],
  ex: [
    { q: "Me ___ los pies después de caminar tanto.", o: ["duele", "duelen", "dolen"], a: 1, t: "J’ai mal aux pieds après avoir tant marché." },
    { q: "A Marta le duele ___ cabeza.", o: ["su", "la", "mi"], a: 1, t: "Marta a mal à la tête." },
    { q: "Tengo 39 grados. Tengo ___.", o: ["fiebre", "tos", "hambre"], a: 0, t: "J’ai 39 degrés de fièvre." },
    { q: "la rodilla", o: ["genou", "coude", "cou"], a: 0, t: "la rodilla = genou" },
    { q: "Para comprar este medicamento necesita una ___ del médico.", o: ["receta", "cita", "tirita"], a: 0, t: "Pour acheter ce médicament, il faut une ordonnance du médecin." },
    { q: "No puedo hablar bien: me duele la ___. (throat)", a: ["garganta"], t: "Je n’arrive pas à parler correctement : j’ai mal à la gorge." },
    { q: "Mi hermano ___ resfriado y no va a clase. (estar)", a: ["está"], t: "Mon frère est enrhumé et ne va pas en cours." },
    { q: "¿A ti te ___ la espalda? (doler)", a: ["duele"], t: "Est-ce que tu as mal au dos ?" },
    { q: "Me corté el dedo. ¿Tienes una ___? (plaster)", a: ["tirita", "curita"], t: "Je me suis coupé le doigt. Vous avez un pansement ?" },
    { w: "Quería pedir cita con el médico, por favor.", t: "Je voudrais prendre rendez-vous chez le médecin, s’il vous plaît." },
    { w: "Tome estas pastillas tres veces al día.", t: "Prenez ces comprimés trois fois par jour." },
    { w: "¿Tiene algo para el dolor de estómago?", t: "Vous avez quelque chose contre le mal de ventre ?" }
  ],
  tx: {
    ti: "Un lunes en el centro de salud",
    b: `Pablo vive en Santiago de Chile y trabaja en una oficina. El lunes se levantó muy mal: le <u>dolía la cabeza</u>, tenía <u>tos</u> y le <u>dolía la garganta</u>. Se puso el <u>termómetro</u> y vio que tenía treinta y ocho grados de <u>fiebre</u>. Llamó a su jefa para decir que estaba <u>enfermo</u> y después pidió <u>cita</u> en el centro de salud.<br><br>La <u>médica</u> le preguntó: «¿Desde cuándo se encuentra mal?». Pablo respondió que desde el domingo por la noche. La doctora le miró la garganta y le dijo que tenía <u>gripe</u>. Le escribió una <u>receta</u> y le recomendó beber mucha agua, descansar y no ir a trabajar en tres días. Pablo fue a la <u>farmacia</u>, compró las <u>pastillas</u> y un jarabe para la tos, y volvió a casa a dormir. El jueves ya se sentía mucho mejor.`
  },
  q: [
    ["¿Cuánta fiebre tenía Pablo?", ["Treinta y seis grados", "Treinta y ocho grados", "Cuarenta grados"], 1],
    ["¿Qué le dijo la médica?", ["Que tenía gripe", "Que no tenía nada", "Que tenía que ir al hospital"], 0],
    ["¿Qué compró en la farmacia?", ["Tiritas", "Pastillas y un jarabe", "Un termómetro"], 1],
    ["¿Cuándo se sentía mejor?", ["El martes", "El domingo", "El jueves"], 2]
  ],
  sp: [
    "¿Qué haces cuando te duele la cabeza?",
    "Estás en el médico: explica tus síntomas (¿qué te duele y desde cuándo?).",
    "¿Cuándo fue la última vez que estuviste enfermo/a? ¿Qué te pasó?",
    "Estás en la farmacia: pide algo para la tos y la garganta.",
    "¿Qué haces para estar sano/a? Habla de comida, deporte y sueño.",
    "¿Qué remedios caseros usa tu familia para el resfriado?"
  ]
},
{
  id: "a2-trabajo",
  lvl: "A2",
  k: "v",
  t: "Trabajo y estudios",
  fr: "Le travail et les études",
  ic: "💼",
  th: `<div class="card"><h2>Las profesiones <span class="fr">(professions)</span></h2>
<table><tr><th>Masculino</th><th>Femenino</th><th>Français</th></tr>
<tr><td>el médico</td><td>la médica</td><td>doctor</td></tr>
<tr><td>el profesor</td><td>la profesora</td><td>teacher</td></tr>
<tr><td>el enfermero</td><td>la enfermera</td><td>nurse</td></tr>
<tr><td>el abogado</td><td>la abogada</td><td>lawyer</td></tr>
<tr><td>el cocinero</td><td>la cocinera</td><td>cuisinier / cuisinière</td></tr>
<tr><td>el ingeniero</td><td>la ingeniera</td><td>engineer</td></tr>
<tr><td>el periodista</td><td>la periodista</td><td>journalist (same form)</td></tr>
<tr><td>el policía</td><td>la policía</td><td>police officer (same form)</td></tr></table>
<p>Soy enfermera. <span class="fr">Je suis infirmier / infirmière.</span> (sin artículo «una») <br>Trabajo en un hospital. <span class="fr">Je travaille dans un hôpital.</span><br>Trabaja de camarero. <span class="fr">Il travaille comme serveur.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Con <b>ser</b> + profesión no usamos «un/una»: «Soy profesor», no «Soy un profesor». <span class="fr">Pas d’article après ser devant une profession.</span></div></div>
<div class="card"><h3>En el trabajo <span class="fr">(au travail)</span></h3>
<p>la oficina, la empresa, la reunión, el jefe / la jefa, el compañero de trabajo, el sueldo (LatAm: el salario) <span class="fr">bureau, entreprise, réunion, patron, collègue, salaire</span><br>
Trabajo a tiempo completo / a media jornada. <span class="fr">Je travaille à temps plein / à temps partiel.</span><br>
Tengo un horario de nueve a cinco. <span class="fr">Mes horaires sont de neuf à dix-sept heures.</span><br>
Mañana tengo una entrevista de trabajo. <span class="fr">Demain, j’ai un entretien d’embauche.</span></p></div>
<div class="card"><h3>Los estudios <span class="fr">(études)</span></h3>
<p>el colegio / el instituto / la universidad <span class="fr">école primaire / collège / lycée / université</span><br>
las asignaturas (LatAm: las materias): matemáticas, historia, lengua, inglés, biología, química, educación física <span class="fr">matières : mathématiques, histoire, langue, anglais, biologie, chimie, éducation physique</span><br>
aprobar / suspender un examen (LatAm: reprobar) <span class="fr">réussir / échouer à un examen</span><br>
Estudio Derecho en la Universidad de Salamanca. <span class="fr">J’étudie le droit à l’université de Salamanque.</span><br>
Las clases empiezan a las ocho y media. <span class="fr">Les cours commencent à huit heures et demie.</span></p></div>`,
  voc: [
    ["👨‍⚕️", "el médico", "médecin"],
    ["👩‍🏫", "la profesora", "professeur"],
    ["👩‍🍳", "la cocinera", "cuisinier / cuisinière"],
    ["👨‍🚒", "el bombero", "pompier / pompière"],
    ["👮", "el policía", "policier / policière"],
    ["👩‍💻", "la programadora", "programmeuse"],
    ["👨‍🌾", "el agricultor", "agricultrice"],
    ["⚖️", "la abogada", "avocate"],
    ["🏢", "la oficina", "bureau"],
    ["💼", "la reunión", "réunion"],
    ["💰", "el sueldo", "salaire"],
    ["🏫", "el colegio", "école"],
    ["🎓", "la universidad", "université"],
    ["📚", "la asignatura", "matière"],
    ["📝", "el examen", "examen"],
    ["➗", "las matemáticas", "mathématiques"],
    ["🧪", "la química", "chimie"],
    ["🕘", "el horario", "emploi du temps"]
  ],
  ex: [
    { q: "Mi madre es ___. Trabaja en un hospital.", o: ["enfermera", "una enfermera", "enfermero"], a: 0, t: "Ma mère est infirmière. Elle travaille dans un hôpital." },
    { q: "Ana estudió mucho y ___ el examen.", o: ["aprobó", "suspendió", "trabajó"], a: 0, t: "Ana a beaucoup étudié et a réussi l’examen." },
    { q: "La persona que apaga fuegos es el ___.", o: ["bombero", "abogado", "periodista"], a: 0, t: "La personne qui éteint les incendies est pompier / pompière." },
    { q: "el sueldo", o: ["salaire", "patron", "réunion"], a: 0, t: "el sueldo = salaire" },
    { q: "Trabajo cuatro horas al día: trabajo a media ___.", o: ["jornada", "semana", "oficina"], a: 0, t: "Je travaille quatre heures par jour : je travaille à temps partiel." },
    { q: "Esta tarde tengo una ___ con mi jefa a las cuatro. (meeting)", a: ["reunión"], t: "Cet après-midi, j’ai une réunion avec mon patron à quatre heures." },
    { q: "Mi asignatura favorita es la ___: me encantan los números. (maths)", a: ["matemáticas"], t: "Ma matière préférée, ce sont les maths : j’adore les nombres." },
    { q: "Mi hermano ___ Medicina en Buenos Aires. (estudiar)", a: ["estudia"], t: "Mon frère étudie la médecine à Buenos Aires." },
    { q: "Si no estudias, vas a ___ el examen. (to fail, Spain)", a: ["suspender", "reprobar"], t: "Si tu n’étudies pas, tu vas échouer à l’examen." },
    { w: "Mañana tengo una entrevista de trabajo importante.", t: "Demain, j’ai un entretien d’embauche important." },
    { w: "Trabajo en una empresa de nueve a cinco.", t: "Je travaille dans une entreprise de neuf heures à dix-sept heures." },
    { w: "Las clases empiezan a las ocho y media.", t: "Les cours commencent à huit heures et demie." }
  ],
  tx: {
    ti: "Estudiar y trabajar en Guadalajara",
    b: `Me llamo Valeria, tengo veintidós años y vivo en Guadalajara, México. Estudio <u>Ingeniería</u> informática en la <u>universidad</u> y también trabajo a <u>media jornada</u> en una <u>empresa</u> de videojuegos. Mi <u>horario</u> es complicado: por la mañana tengo clases de ocho a una y por la tarde voy a la <u>oficina</u> de tres a siete.<br><br>Mis <u>materias</u> favoritas son programación y <u>matemáticas</u>, pero no me gusta nada la física. El semestre pasado <u>reprobé</u> un <u>examen</u> de física y tuve que repetirlo. En el trabajo mis <u>compañeros</u> son muy simpáticos y mi <u>jefa</u> me ayuda mucho. El <u>sueldo</u> no es muy alto, pero aprendo muchísimo. Los viernes tenemos una <u>reunión</u> para hablar de los proyectos. Cuando termine la carrera, quiero ser programadora de videojuegos.`
  },
  q: [
    ["¿Qué estudia Valeria?", ["Medicina", "Ingeniería informática", "Física"], 1],
    ["¿Cuándo va a la oficina?", ["Por la tarde", "Por la mañana", "Los fines de semana"], 0],
    ["¿Qué asignatura no le gusta?", ["Programación", "Matemáticas", "Física"], 2],
    ["¿Qué pasa los viernes?", ["No trabaja", "Tiene una reunión", "Tiene un examen"], 1]
  ],
  sp: [
    "¿A qué te dedicas? ¿Trabajas o estudias?",
    "Describe tu horario de un día normal de trabajo o de clase.",
    "¿Cuál era tu asignatura favorita en el colegio? ¿Y la que menos te gustaba?",
    "¿Qué profesión te gustaría tener en el futuro? ¿Por qué?",
    "Imagina que estás en una entrevista de trabajo: preséntate y habla de tus estudios.",
    "¿Qué es más importante para ti en un trabajo: el sueldo, el horario o los compañeros?"
  ]
},
{
  id: "a2-ocio",
  lvl: "A2",
  k: "v",
  t: "Tiempo libre y deporte",
  fr: "Les loisirs et le sport",
  ic: "⚽",
  th: `<div class="card"><h2>Jugar, hacer, practicar <span class="fr">(jouer, faire, pratiquer)</span></h2>
<table><tr><th>Verbo</th><th>Uso</th><th>Ejemplos</th></tr>
<tr><td><b>jugar al</b> / <b>a la</b></td><td>juegos y deportes de pelota <span class="fr">jeux, sports de ballon</span></td><td>jugar al fútbol, al tenis, a las cartas</td></tr>
<tr><td><b>hacer</b></td><td>actividades en general <span class="fr">activités</span></td><td>hacer deporte, yoga, senderismo, natación</td></tr>
<tr><td><b>practicar</b></td><td>deportes (más formal) <span class="fr">sports, registre plus soutenu</span></td><td>practicar atletismo, surf, escalada</td></tr>
<tr><td><b>ir a</b> / <b>montar en</b></td><td>lugares / vehículos <span class="fr">lieux / véhicules</span></td><td>ir al gimnasio, montar en bici</td></tr></table>
<p>Juego <span class="irr">(u→ue)</span> al baloncesto los martes. <span class="fr">Je joue au basket le mardi.</span><br>
Mis padres hacen senderismo en la sierra. <span class="fr">Mes parents font de la randonnée en montagne.</span></p>
<div class="tip"><b>Truco / Astuce :</b> En España se dice <b>jugar al fútbol</b>; en muchos países de América se dice también <b>jugar fútbol</b>, sin «al». <span class="fr">Dans une grande partie de l’Amérique latine, on omet souvent « al ».</span></div></div>
<div class="card"><h3>Aficiones <span class="fr">(loisirs)</span></h3>
<p>leer, pintar, cocinar, bailar, tocar la guitarra, ver series, sacar fotos, ir al cine, quedar con amigos <span class="fr">lire, peindre, cuisiner, danser, jouer de la guitare, regarder des séries, prendre des photos, aller au cinéma, retrouver des amis</span><br>
Me encanta bailar salsa. <span class="fr">J’adore danser la salsa.</span><br>
En mi tiempo libre suelo leer novelas. <span class="fr">Pendant mon temps libre, je lis généralement des romans.</span><br>
Voy al gimnasio dos veces por semana. <span class="fr">Je vais à la salle de sport deux fois par semaine.</span></p></div>
<div class="card"><h3>Hacer planes e invitar <span class="fr">(faire des projets et proposer des sorties)</span></h3>
<p>¿Quedamos el sábado? <span class="fr">On se retrouve samedi ?</span><br>
¿Te apetece ir al cine? (LatAm: ¿Tienes ganas de…? / ¿Quieres…?) <span class="fr">Ça te dit d’aller au cinéma ?</span><br>
¿Por qué no vamos a la playa? <span class="fr">Et si on allait à la plage ?</span><br>
¡Vale! / ¡Genial! / ¡Me parece buena idea! <span class="fr">D’accord ! / Super ! / Ça marche !</span><br>
Lo siento, no puedo, tengo que estudiar. <span class="fr">Désolé(e), je ne peux pas, je dois étudier.</span><br>
¿A qué hora quedamos? — A las seis en la puerta del cine. <span class="fr">On se retrouve à quelle heure ? — À six heures, à l’entrée du cinéma.</span></p></div>`,
  voc: [
    ["⚽", "el fútbol", "football"],
    ["🏀", "el baloncesto", "basket"],
    ["🎾", "el tenis", "tennis"],
    ["🏊", "la natación", "natation"],
    ["🚴", "el ciclismo", "cyclisme"],
    ["🥾", "el senderismo", "randonnée"],
    ["🧘", "el yoga", "yoga"],
    ["🏋️", "el gimnasio", "salle de sport"],
    ["🏄", "el surf", "surf"],
    ["📖", "leer", "lire"],
    ["🎨", "pintar", "peindre"],
    ["💃", "bailar", "danser"],
    ["🎸", "tocar la guitarra", "jouer de la guitare"],
    ["📷", "sacar fotos", "prendre des photos"],
    ["🎬", "el cine", "cinéma"],
    ["🎮", "los videojuegos", "jeux vidéo"],
    ["🃏", "las cartas", "cartes"]
  ],
  ex: [
    { q: "Los domingos ___ al fútbol con mis amigos.", o: ["juego", "hago", "toco"], a: 0, t: "Le dimanche, je joue au football avec mes amis." },
    { q: "Mi abuela ___ yoga todas las mañanas.", o: ["juega", "hace", "toca"], a: 1, t: "Ma grand-mère fait du yoga tous les matins." },
    { q: "Mi hermano ___ la guitarra en un grupo.", o: ["juega", "toca", "hace"], a: 1, t: "Mon frère joue de la guitare dans un groupe." },
    { q: "¿Te apetece ir al cine esta noche? — ¡___! Me parece buena idea.", o: ["Vale", "Lo siento", "Nunca"], a: 0, t: "Ça te dit d’aller au cinéma ce soir ? — D’accord ! Ça marche." },
    { q: "el senderismo", o: ["randonnée", "natation", "voile"], a: 0, t: "el senderismo = randonnée" },
    { q: "Nosotros ___ al tenis los jueves. (jugar)", a: ["jugamos"], t: "Nous jouons au tennis le jeudi." },
    { q: "Lo siento, no puedo: ___ que trabajar. (tener)", a: ["tengo"], t: "Désolé(e), je ne peux pas : je dois travailler." },
    { q: "Me encanta ___ salsa los viernes. (to dance)", a: ["bailar"], t: "J’adore danser la salsa le vendredi." },
    { q: "Voy al ___ tres veces por semana para hacer pesas. (gym)", a: ["gimnasio"], t: "Je vais à la salle de sport trois fois par semaine pour faire de la musculation." },
    { w: "¿Quedamos el sábado por la tarde?", t: "On se retrouve samedi après-midi ?" },
    { w: "En mi tiempo libre suelo leer novelas.", t: "Pendant mon temps libre, je lis généralement des romans." },
    { w: "¿Por qué no vamos a la playa mañana?", t: "Et si on allait à la plage demain ?" }
  ],
  tx: {
    ti: "Un fin de semana activo",
    b: `Hola, Lucas:<br><br>¿Qué tal estás? Te escribo para hacer <u>planes</u> para el fin de semana. El sábado por la mañana Sofía y yo vamos a <u>hacer senderismo</u> en la sierra de Guadarrama. Es una ruta fácil de tres horas. ¿Te <u>apetece</u> venir? Después podemos comer en un restaurante del pueblo.<br><br>Por la tarde tengo partido: <u>juego al baloncesto</u> en un equipo del barrio y jugamos contra el equipo de Getafe. Si quieres, puedes venir a vernos. El domingo prefiero descansar un poco: quiero <u>leer</u>, <u>tocar la guitarra</u> y por la noche ir al <u>cine</u>. Ponen una película argentina muy buena. ¿<u>Quedamos</u> a las ocho en la puerta del cine?<br><br>Escríbeme pronto y dime si puedes.<br><br>Un abrazo,<br>Marcos`
  },
  q: [
    ["¿Qué van a hacer el sábado por la mañana?", ["Jugar al baloncesto", "Hacer senderismo", "Ir al cine"], 1],
    ["¿Qué deporte practica Marcos en un equipo?", ["Fútbol", "Tenis", "Baloncesto"], 2],
    ["¿Qué quiere hacer Marcos el domingo?", ["Descansar e ir al cine", "Trabajar", "Hacer una ruta larga"], 0],
    ["¿Dónde propone quedar el domingo?", ["En el restaurante", "En la puerta del cine", "En la sierra"], 1]
  ],
  sp: [
    "¿Qué haces en tu tiempo libre? ¿Con qué frecuencia?",
    "¿Practicas algún deporte? ¿Cuál y dónde?",
    "Invita a un amigo a hacer algo este fin de semana: propón el día, la hora y el lugar.",
    "Un amigo te invita a una fiesta, pero no puedes ir: rechaza la invitación con amabilidad.",
    "¿Qué deporte te gusta ver en la tele? ¿Tienes un equipo favorito?",
    "¿Qué afición nueva te gustaría empezar? ¿Por qué?"
  ]
},
{
  id: "a2-natur",
  lvl: "A2",
  k: "v",
  t: "Tiempo y naturaleza",
  fr: "Le temps et la nature",
  ic: "🌦️",
  th: `<div class="card"><h2>¿Qué tiempo hace? <span class="fr">(Quel temps fait-il ?)</span></h2>
<table><tr><th>Estructura</th><th>Ejemplos</th></tr>
<tr><td><b>hace</b> + sustantivo</td><td>hace sol, hace calor, hace frío, hace viento, hace buen / mal tiempo <span class="fr">il y a du soleil, il fait chaud, froid, il y a du vent, il fait beau / mauvais</span></td></tr>
<tr><td><b>hay</b> + sustantivo</td><td>hay niebla, hay tormenta, hay nubes <span class="fr">il y a du brouillard, il y a un orage, le ciel est nuageux</span></td></tr>
<tr><td><b>está</b> + adjetivo</td><td>está nublado, está despejado <span class="fr">le ciel est nuageux, le ciel est dégagé</span></td></tr>
<tr><td>verbos</td><td>llueve <span class="irr">(llover)</span>, nieva <span class="irr">(nevar)</span>, graniza <span class="fr">il pleut, il neige, il grêle</span></td></tr></table>
<p>Hoy hace mucho calor: estamos a treinta y cinco grados. <span class="fr">Aujourd’hui, il fait très chaud : 35 degrés.</span><br>
Mañana va a llover en el norte. <span class="fr">Demain, il va pleuvoir dans le nord.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Con <b>hace</b> usamos <b>mucho</b>: «hace <b>mucho</b> frío», nunca «hace muy frío». Con adjetivos usamos <b>muy</b>: «está <b>muy</b> nublado». <span class="fr">« Mucho » s’emploie avec les noms, « muy » avec les adjectifs.</span></div></div>
<div class="card"><h3>Paisajes y geografía <span class="fr">(paysages et géographie)</span></h3>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>la montaña, la sierra, el volcán</td><td>mountain, mountain range, volcano</td></tr>
<tr><td>el río, el lago, la cascada</td><td>river, lake, waterfall</td></tr>
<tr><td>la costa, la playa, el mar, la isla</td><td>côte, plage, mer, île</td></tr>
<tr><td>el bosque, la selva, el desierto, el campo</td><td>forêt, jungle, désert, campagne</td></tr>
<tr><td>el norte, el sur, el este, el oeste</td><td>north, south, east, west</td></tr></table>
<p>El río Amazonas es el más caudaloso del mundo. <span class="fr">L’Amazone transporte le plus grand volume d’eau au monde.</span><br>
Galicia está en el noroeste de España y tiene una costa preciosa. <span class="fr">La Galice se trouve au nord-ouest de l’Espagne et possède une magnifique côte.</span></p></div>
<div class="card"><h3>Los animales <span class="fr">(animaux)</span></h3>
<p>el perro, el gato, el caballo, la vaca, la oveja <span class="fr">chien, chat, cheval, vache, mouton</span><br>
el pájaro, el águila, el oso, el lobo <span class="fr">oiseau, aigle, ours, loup</span><br>
el delfín, la ballena, la tortuga, el mono <span class="fr">dauphin, baleine, tortue, singe</span><br>
En las islas Galápagos viven tortugas gigantes. <span class="fr">Des tortues géantes vivent dans les îles Galápagos.</span></p></div>`,
  voc: [
    ["☀️", "el sol", "soleil"],
    ["🌧️", "la lluvia", "pluie"],
    ["❄️", "la nieve", "neige"],
    ["🌬️", "el viento", "vent"],
    ["⛈️", "la tormenta", "orage"],
    ["🌫️", "la niebla", "brouillard"],
    ["⛰️", "la montaña", "montagne"],
    ["🏞️", "el río", "rivière"],
    ["🌋", "el volcán", "volcan"],
    ["🏝️", "la isla", "île"],
    ["🏖️", "la costa", "côte"],
    ["🌲", "el bosque", "forêt"],
    ["🏜️", "el desierto", "désert"],
    ["🐻", "el oso", "ours"],
    ["🐺", "el lobo", "loup"],
    ["🐬", "el delfín", "dauphin"],
    ["🐢", "la tortuga", "tortue"],
    ["🦅", "el águila", "aigle"]
  ],
  ex: [
    { q: "En agosto en Sevilla ___ mucho calor.", o: ["hace", "está", "hay"], a: 0, t: "En août, il fait très chaud à Séville." },
    { q: "No veo nada en la carretera: hay mucha ___.", o: ["niebla", "sol", "calor"], a: 0, t: "Je ne vois rien sur la route : il y a beaucoup de brouillard." },
    { q: "Hoy el cielo ___ nublado.", o: ["hace", "está", "hay"], a: 1, t: "Aujourd’hui, le ciel est nuageux." },
    { q: "Hace ___ frío en Ushuaia en invierno.", o: ["muy", "mucho", "mucha"], a: 1, t: "Il fait très froid à Ushuaïa en hiver." },
    { q: "el bosque", o: ["forêt", "désert", "plage"], a: 0, t: "el bosque = forêt" },
    { q: "En los Pirineos ___ mucho en invierno. (nevar)", a: ["nieva"], t: "Dans les Pyrénées, il neige beaucoup en hiver." },
    { q: "Lleva paraguas: va a ___ esta tarde. (to rain)", a: ["llover"], t: "Prends un parapluie : il va pleuvoir cet après-midi." },
    { q: "El ___ Ebro pasa por Zaragoza. (river)", a: ["río"], t: "L’Èbre traverse Saragosse." },
    { q: "El Teide es un ___ en la isla de Tenerife. (volcano)", a: ["volcán"], t: "Le Teide est un volcan sur l’île de Tenerife." },
    { w: "Mañana va a hacer sol en la costa.", t: "Demain, il fera soleil sur la côte." },
    { w: "En el bosque viven osos y lobos.", t: "Les ours et les loups vivent dans la forêt." },
    { w: "Galicia está en el noroeste de España.", t: "La Galice se trouve au nord-ouest de l’Espagne." }
  ],
  tx: {
    ti: "Un viaje por Costa Rica",
    b: `Costa Rica es un país pequeño, pero tiene una naturaleza increíble. En solo dos semanas, Laura y Javier visitaron <u>playas</u>, <u>volcanes</u>, <u>selvas</u> y <u>ríos</u>. Primero fueron a la <u>costa</u> del Caribe. Allí <u>hacía mucho calor</u> y <u>llovía</u> casi todas las tardes, pero las mañanas estaban <u>despejadas</u>. En el parque nacional vieron <u>monos</u>, perezosos y muchos <u>pájaros</u> de colores. Por la noche, en la playa, vieron <u>tortugas</u> poniendo huevos.<br><br>Después subieron a la <u>montaña</u>, cerca del <u>volcán</u> Arenal. Allí el clima era diferente: <u>hacía viento</u> y por la noche <u>hacía fresco</u>. Se bañaron en un <u>río</u> de aguas termales y caminaron por un <u>bosque</u> lleno de <u>niebla</u>. Al final, en la costa del Pacífico, vieron <u>delfines</u> desde un barco. Laura dice que fue el mejor viaje de su vida.`
  },
  q: [
    ["¿Qué tiempo hacía en la costa del Caribe?", ["Frío y nieve", "Calor y lluvia por la tarde", "Viento y niebla todo el día"], 1],
    ["¿Qué animales vieron por la noche en la playa?", ["Tortugas", "Delfines", "Osos"], 0],
    ["¿Cómo era el clima cerca del volcán?", ["Muy caluroso", "Seco y despejado", "Con viento y fresco por la noche"], 2],
    ["¿Dónde vieron los delfines?", ["En el río", "Desde un barco en el Pacífico", "En el lago"], 1]
  ],
  sp: [
    "¿Qué tiempo hace hoy donde estás?",
    "¿Cuál es tu estación del año favorita? ¿Por qué?",
    "Describe un paisaje bonito de tu país: ¿hay montañas, ríos, costa?",
    "¿Prefieres la playa o la montaña para las vacaciones? ¿Por qué?",
    "¿Cuál es tu animal favorito? ¿Dónde vive y cómo es?",
    "Haz el pronóstico del tiempo de mañana para tu ciudad."
  ]
}
);
