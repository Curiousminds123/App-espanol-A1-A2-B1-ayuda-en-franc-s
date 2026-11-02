/* Camino al Español · Nivel A1 · contenido */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "a1-ser",
  lvl: "A1",
  k: "g",
  t: "El verbo ser y los pronombres",
  fr: "Le verbe « ser » et les pronoms sujets",
  ic: "🧑",
  th: `<div class="card"><h2>Los pronombres personales <span class="fr">(pronoms sujets)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>yo</td><td>je</td></tr>
<tr><td>tú</td><td>tu (une personne, informel)</td></tr>
<tr><td>él / ella / usted</td><td>il / elle / vous (formel)</td></tr>
<tr><td>nosotros / nosotras</td><td>nous</td></tr>
<tr><td>vosotros / vosotras</td><td>vous (informel, Espagne)</td></tr>
<tr><td>ellos / ellas / ustedes</td><td>ils / elles / vous</td></tr></table>
<p>En Latinoamérica no se usa <i>vosotros</i>: se dice <b>ustedes</b> para todos. <span class="fr">En Amérique latine, « ustedes » s’emploie pour désigner n’importe quel groupe de personnes.</span><br>
En español el pronombre es opcional: <i>Soy Ana</i> = <i>Yo soy Ana</i>. <span class="fr">Le pronom est généralement omis, car le verbe indique qui fait l’action.</span></p></div>
<div class="card"><h2>El verbo SER <span class="fr">(ser : identité)</span></h2>
<table><tr><th>pronombre</th><th>SER</th><th>Français</th></tr>
<tr><td>yo</td><td class="irr">soy</td><td>je suis</td></tr>
<tr><td>tú</td><td class="irr">eres</td><td>tu es</td></tr>
<tr><td>él / ella / usted</td><td class="irr">es</td><td>il / elle est, vous êtes</td></tr>
<tr><td>nosotros/as</td><td class="irr">somos</td><td>nous sommes</td></tr>
<tr><td>vosotros/as</td><td class="irr">sois</td><td>vous êtes</td></tr>
<tr><td>ellos / ellas / ustedes</td><td class="irr">son</td><td>ils sont, vous êtes</td></tr></table>
<h3>¿Para qué usamos SER? <span class="fr">(emplois)</span></h3>
<p>👤 Identidad: Soy Marta. <span class="fr">Je suis Marta.</span><br>
🌍 Origen: Somos de Perú. <span class="fr">Nous venons du Pérou.</span><br>
🏳️ Nacionalidad: Ella es mexicana. <span class="fr">Elle est mexicaine.</span><br>
💼 Profesión: Mi padre es médico. <span class="fr">Mon père est médecin.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Con profesiones no usamos <i>un/una</i>: <i>Soy profesor</i>, no <i>Soy un profesor</i>. <span class="fr">Pas d’article devant une profession.</span></div></div>
<div class="card"><h3>Preguntas <span class="fr">(mots interrogatifs)</span></h3>
<p>¿<b>Quién</b> es? — Es Carlos. <span class="fr">Qui est-ce ? — C’est Carlos.</span><br>
¿De <b>dónde</b> eres? — Soy de Chile. <span class="fr">D’où viens-tu ? — Je viens du Chili.</span><br>
¿<b>Qué</b> eres? / ¿A qué te dedicas? — Soy enfermera. <span class="fr">Que fais-tu ? — Je suis infirmier / infirmière.</span></p>
<p>Las nacionalidades se escriben con minúscula: <i>español, colombiana</i>. <span class="fr">En espagnol, les nationalités ne prennent pas de majuscule.</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Yo es de Italia. ✅ Yo <b>soy</b> de Italia. <span class="fr">Je viens d’Italie.</span><br>
❌ Soy una estudiante. ✅ Soy estudiante. <span class="fr">Je suis étudiant(e).</span><br>
❌ Ella es Francesa. ✅ Ella es francesa. <span class="fr">Elle est française.</span></p></div>`,
  voc: [
    ["🙋", "yo", "je"],
    ["👉", "tú", "tu"],
    ["👨", "él", "il"],
    ["👩", "ella", "elle"],
    ["👥", "nosotros", "nous"],
    ["🌍", "ser de", "venir de"],
    ["🩺", "el médico", "médecin"],
    ["👩‍🏫", "la profesora", "professeure"],
    ["❓", "¿quién?", "qui ?"],
    ["📍", "¿de dónde?", "d’où ?"]
  ],
  ex: [
    { q: "Yo ___ estudiante.", o: ["soy", "es", "eres"], a: 0, t: "Je suis étudiant(e)." },
    { q: "¿De dónde ___ tú?", o: ["es", "eres", "sois"], a: 1, t: "D’où viens-tu ?" },
    { q: "Nosotros ___ de Argentina.", o: ["son", "sois", "somos"], a: 2, t: "Nous venons d’Argentine." },
    { q: "¿___ es ella? — Es mi hermana.", o: ["Quién", "Dónde", "Qué"], a: 0, t: "Qui est-elle ? — C’est ma sœur." },
    { q: "Ella es de Italia. Es ___.", o: ["italiano", "italiana", "Italiana"], a: 1, t: "Elle vient d’Italie. Elle est italienne." },
    { q: "Ellos ___ médicos. (ser)", a: ["son"], t: "Ils sont médecins." },
    { q: "Vosotros ___ de Madrid. (ser)", a: ["sois"], t: "Vous êtes de Madrid." },
    { q: "Usted ___ el señor García, ¿verdad? (ser)", a: ["es"], t: "Vous êtes Monsieur García, n’est-ce pas ?" },
    { q: "¿De ___ eres? — Soy de Cuba. (où)", a: ["dónde", "donde"], t: "D’où viens-tu ? — Je viens de Cuba." },
    { w: "Mi madre es profesora de inglés.", t: "Ma mère est professeure d’anglais." },
    { w: "¿De dónde son ustedes?", t: "D’où venez-vous ?" },
    { w: "Nosotras somos de Bogotá, Colombia.", t: "Nous venons de Bogotá, en Colombie." }
  ],
  tx: {
    ti: "Mi clase de español",
    b: `¡Hola! <u>Soy</u> Daniel y <u>soy</u> de Toronto, Canadá. <u>Soy</u> ingeniero, pero ahora <u>soy</u> estudiante de español en Salamanca. Mi clase <u>es</u> muy internacional. Akiko <u>es</u> japonesa y <u>es</u> fotógrafa. Pierre y Claire <u>son</u> franceses; <u>son</u> hermanos. La profesora se llama Elena y <u>es</u> de Sevilla. <u>Es</u> muy simpática.<br><br>El primer día, Elena pregunta: "¿<u>Quién</u> eres? ¿<u>De dónde</u> eres? ¿<u>Qué</u> haces?". Yo respondo: "<u>Soy</u> Daniel, <u>soy</u> canadiense y <u>soy</u> ingeniero". Nosotros <u>somos</u> de países diferentes, pero <u>somos</u> amigos.`
  },
  q: [
    ["¿De dónde es Daniel?", ["De Salamanca", "De Canadá", "De Francia"], 1],
    ["¿Qué es Akiko?", ["Fotógrafa", "Profesora", "Ingeniera"], 0],
    ["¿Quiénes son hermanos?", ["Daniel y Akiko", "Elena y Daniel", "Pierre y Claire"], 2],
    ["¿Cómo es la profesora?", ["Muy simpática", "Muy seria", "Muy joven"], 0]
  ],
  sp: [
    "Preséntate: ¿cómo te llamas y de dónde eres?",
    "¿Cuál es tu profesión o qué estudias?",
    "¿De dónde es tu familia? ¿Qué nacionalidad tiene?",
    "Describe a un amigo: ¿quién es, de dónde es y qué es?",
    "Pregunta a un compañero de dónde es y qué hace.",
    "¿Quién es tu persona famosa favorita? ¿De dónde es?"
  ]
},
{
  id: "a1-art",
  lvl: "A1",
  k: "g",
  t: "Artículos, género y número",
  fr: "Articles, genre et nombre",
  ic: "📚",
  th: `<div class="card"><h2>Los artículos <span class="fr">(articles définis et indéfinis)</span></h2>
<table><tr><th></th><th>masculino</th><th>femenino</th></tr>
<tr><td>definido singular <i class="fr">le / la</i></td><td>el libro</td><td>la mesa</td></tr>
<tr><td>definido plural <i class="fr">le / la</i></td><td>los libros</td><td>las mesas</td></tr>
<tr><td>indefinido singular <i class="fr">un / une</i></td><td>un libro</td><td>una mesa</td></tr>
<tr><td>indefinido plural <i class="fr">quelques</i></td><td>unos libros</td><td>unas mesas</td></tr></table>
<p>Todos los nombres tienen género: masculino o femenino. <span class="fr">Tous les noms sont masculins ou féminins, même ceux qui désignent des objets.</span></p></div>
<div class="card"><h2>¿Masculino o femenino? <span class="fr">(genre)</span></h2>
<p>Normalmente <b class="reg">-o</b> = masculino: el perr<b class="reg">o</b>, el vas<b class="reg">o</b>. <span class="fr">En général, les mots en -o sont masculins.</span><br>
Normalmente <b class="reg">-a</b> = femenino: la cas<b class="reg">a</b>, la sill<b class="reg">a</b>. <span class="fr">En général, les mots en -a sont féminins.</span><br>
<b class="reg">-ción, -dad</b> = femenino: la canción, la ciudad. <span class="fr">Les mots en -ción et -dad sont féminins.</span><br>
Excepciones: <span class="irr">el día, el mapa, el problema, la mano, la foto, la moto</span>. <span class="fr">Exceptions à apprendre par cœur.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Aprende cada palabra nueva con su artículo: no "casa", sino "<b>la</b> casa". <span class="fr">Apprenez toujours les noms avec el/la.</span></div></div>
<div class="card"><h2>El plural y la concordancia <span class="fr">(pluriel et accord)</span></h2>
<table><tr><th>termina en…</th><th>plural</th><th>ejemplo</th></tr>
<tr><td>vocal</td><td><b class="reg">+s</b></td><td>el gato → los gato<b class="reg">s</b></td></tr>
<tr><td>consonante</td><td><b class="reg">+es</b></td><td>la flor → las flor<b class="reg">es</b></td></tr>
<tr><td>-z</td><td><b class="reg">-ces</b></td><td>el lápiz → los lápi<b class="reg">ces</b></td></tr></table>
<p>El adjetivo concuerda con el nombre: <i>el coche roj<b>o</b>, la casa roj<b>a</b>, los coches roj<b>os</b>, las casas roj<b>as</b></i>. <span class="fr">Les adjectifs s’accordent en genre et en nombre et se placent généralement après le nom.</span><br>
Adjetivos en -e o consonante no cambian de género: <i>un chico inteligente, una chica inteligente</i>. <span class="fr">Les adjectifs en -e ne changent pas selon le genre.</span></p>
<p>En Latinoamérica se dice <i>el carro</i>; en España, <i>el coche</i>. <span class="fr">« Car » varie selon les régions.</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ la problema ✅ <b>el</b> problema <span class="fr">le problème</span><br>
❌ las casas blanco ✅ las casas <b>blancas</b> <span class="fr">les maisons blanches</span><br>
❌ los lápizes ✅ los <b>lápices</b> <span class="fr">les crayons</span></p></div>`,
  voc: [
    ["📖", "el libro", "livre"],
    ["🏠", "la casa", "maison"],
    ["🐱", "el gato", "chat"],
    ["🌸", "la flor", "fleur"],
    ["✏️", "el lápiz", "crayon"],
    ["🗺️", "el mapa", "carte"],
    ["✋", "la mano", "main"],
    ["🏙️", "la ciudad", "ville"],
    ["🚗", "el coche", "voiture (Espagne) / el carro (Amérique latine)"],
    ["🎵", "la canción", "chanson"]
  ],
  ex: [
    { q: "___ problema es difícil.", o: ["La", "El", "Los"], a: 1, t: "Le problème est difficile." },
    { q: "Tengo ___ perro y dos gatos.", o: ["una", "un", "unos"], a: 1, t: "J’ai un chien et deux chats." },
    { q: "Las casas son ___.", o: ["blancos", "blanca", "blancas"], a: 2, t: "Les maisons sont blanches." },
    { q: "___ ciudad es muy bonita.", o: ["La", "El", "Las"], a: 0, t: "La ville est très belle." },
    { q: "el lápiz → los ___ (plural)", a: ["lápices"], t: "le crayon → les crayons" },
    { q: "la flor → las ___ (plural)", a: ["flores"], t: "la fleur → les fleurs" },
    { q: "Es una chica muy ___. (simpático)", a: ["simpática"], t: "C’est une fille très gentille." },
    { q: "___ mano (el / la)", a: ["la"], t: "la main (féminin, une exception)" },
    { q: "Necesito ___ libros para clase. (quelques, unos / unas)", a: ["unos"], t: "J’ai besoin de quelques livres pour le cours." },
    { w: "Los coches rojos son muy rápidos.", t: "Les voitures rouges sont très rapides." },
    { w: "Mi hermana tiene una moto nueva.", t: "Ma sœur a une nouvelle moto." },
    { w: "Hay unas flores amarillas en la mesa.", t: "Il y a quelques fleurs jaunes sur la table." }
  ],
  tx: {
    ti: "Mi habitación nueva",
    b: `Me llamo Valeria y vivo en Quito, Ecuador. Tengo <u>una habitación</u> nueva. Es pequeña, pero muy bonita. Hay <u>una cama</u> grande y <u>un escritorio</u> blanco. En <u>el escritorio</u> hay <u>unos libros</u>, <u>dos lápices</u> y <u>una lámpara</u> azul. En la pared hay <u>un mapa</u> de América del Sur y <u>unas fotos</u> de mis amigos.<br><br><u>La ventana</u> es grande y tiene <u>unas flores</u> rojas. Mi gato, Pepe, duerme en <u>la silla</u>. Es <u>un gato negro</u> y muy perezoso. ¡Me encanta mi habitación!`
  },
  q: [
    ["¿Cómo es la habitación de Valeria?", ["Grande y fea", "Pequeña y bonita", "Vieja y oscura"], 1],
    ["¿Qué hay en la pared?", ["Un mapa y unas fotos", "Una lámpara", "Unas flores"], 0],
    ["¿De qué color es la lámpara?", ["Blanca", "Roja", "Azul"], 2],
    ["¿Dónde duerme el gato?", ["En la cama", "En la silla", "En el escritorio"], 1]
  ],
  sp: [
    "Describe tu habitación: ¿qué hay en ella?",
    "¿Qué cosas hay en tu mochila o bolso?",
    "Di cinco objetos de la clase con el artículo correcto.",
    "¿Cómo es tu casa? Usa tres adjetivos.",
    "¿Tienes animales? ¿Cómo son?",
    "Describe tu ciudad: ¿es grande o pequeña? ¿Qué hay?"
  ]
},
{
  id: "a1-pres",
  lvl: "A1",
  k: "g",
  t: "Presente regular",
  fr: "Le présent régulier",
  ic: "🗣️",
  th: `<div class="card"><h2>Presente regular <span class="fr">(présent régulier)</span></h2>
<p>Hay tres grupos de verbos: <b>-ar</b>, <b>-er</b>, <b>-ir</b>. Quitamos la terminación y añadimos otra. <span class="fr">Retirez la terminaison et ajoutez la nouvelle.</span></p>
<table><tr><th></th><th>-AR hablar</th><th>-ER comer</th><th>-IR vivir</th></tr>
<tr><td>yo</td><td>habl<b class="reg">o</b></td><td>com<b class="reg">o</b></td><td>viv<b class="reg">o</b></td></tr>
<tr><td>tú</td><td>habl<b class="reg">as</b></td><td>com<b class="reg">es</b></td><td>viv<b class="reg">es</b></td></tr>
<tr><td>él/ella/usted</td><td>habl<b class="reg">a</b></td><td>com<b class="reg">e</b></td><td>viv<b class="reg">e</b></td></tr>
<tr><td>nosotros/as</td><td>habl<b class="reg">amos</b></td><td>com<b class="reg">emos</b></td><td>viv<b class="reg">imos</b></td></tr>
<tr><td>vosotros/as</td><td>habl<b class="reg">áis</b></td><td>com<b class="reg">éis</b></td><td>viv<b class="reg">ís</b></td></tr>
<tr><td>ellos/ustedes</td><td>habl<b class="reg">an</b></td><td>com<b class="reg">en</b></td><td>viv<b class="reg">en</b></td></tr></table>
<p>Otros verbos: trabajar, estudiar, escuchar, beber, leer, aprender, escribir, abrir. <span class="fr">travailler, étudier, écouter, boire, lire, apprendre, écrire, ouvrir.</span></p>
<div class="tip"><b>Truco / Astuce :</b> -er y -ir son iguales excepto en <i>nosotros</i> y <i>vosotros</i>: com<b>emos</b> / viv<b>imos</b>. <span class="fr">Les verbes en -er et -ir ne diffèrent qu’aux formes de « nous » et de « vous ».</span></div></div>
<div class="card"><h2>La negación y las preguntas <span class="fr">(phrases négatives et interrogatives)</span></h2>
<p><b>No</b> va antes del verbo: <i>No hablo francés.</i> <span class="fr">Je ne parle pas français.</span><br>
Preguntas sí/no: mismo orden, con entonación ↗ y ¿…?: <i>¿Trabajas aquí?</i> <span class="fr">Tu travailles ici ?</span><br>
Con palabra interrogativa: <i>¿Dónde vives? ¿Qué estudias? ¿Cuándo venirs?</i> <span class="fr">Où habites-tu ? Qu’étudies-tu ? Quand manges-tu ?</span><br>
No hay "do/does" en español. <span class="fr">L’espagnol n’utilise pas d’auxiliaire « do ».</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Yo no hablar inglés. ✅ Yo no <b>hablo</b> inglés. <span class="fr">Je ne parle pas anglais.</span><br>
❌ Hablo no alemán. ✅ <b>No hablo</b> alemán. <span class="fr">Je ne parle pas allemand.</span><br>
❌ Nosotros vivemos en Lima. ✅ Nosotros <b>vivimos</b> en Lima. <span class="fr">Nous vivons à Lima.</span></p></div>`,
  voc: [
    ["💬", "hablar", "parler"],
    ["💼", "trabajar", "travailler"],
    ["📚", "estudiar", "étudier"],
    ["🎧", "escuchar", "écouter"],
    ["🍽️", "comer", "manger"],
    ["🥤", "beber", "boire"],
    ["📖", "leer", "lire"],
    ["🏡", "vivir", "vivre"],
    ["✍️", "escribir", "écrire"],
    ["🚪", "abrir", "ouvrir"]
  ],
  ex: [
    { q: "Yo ___ español y portugués.", o: ["habla", "hablo", "hablas"], a: 1, t: "Je parle espagnol et portugais." },
    { q: "Nosotros ___ en Buenos Aires.", o: ["vivemos", "vivimos", "viven"], a: 1, t: "Nous vivons à Buenos Aires." },
    { q: "¿Tú ___ café por la mañana?", o: ["bebes", "bebe", "bebo"], a: 0, t: "Tu bois du café le matin ?" },
    { q: "Ellos no ___ los sábados.", o: ["trabajamos", "trabajan", "trabaja"], a: 1, t: "Ils ne travaillent pas le samedi." },
    { q: "Mi hermano ___ medicina. (estudiar)", a: ["estudia"], t: "Mon frère étudie la médecine." },
    { q: "Vosotros ___ muchos libros. (leer)", a: ["leéis"], t: "Vous lisez beaucoup de livres." },
    { q: "Yo ___ correos todos los días. (escribir)", a: ["escribo"], t: "J’écris des courriels tous les jours." },
    { q: "Ustedes ___ música clásica. (escuchar)", a: ["escuchan"], t: "Vous écoutez de la musique classique." },
    { q: "Mi padre ___ fruta. (no + comer)", a: ["no venir"], t: "Mon père ne mange pas de fruits." },
    { w: "¿Dónde trabaja tu madre?", t: "Où travaille ta mère ?" },
    { w: "Yo no hablo alemán muy bien.", t: "Je ne parle pas très bien allemand." },
    { w: "Mis amigos comen en un restaurante mexicano.", t: "Mes amis mangent dans un restaurant mexicain." }
  ],
  tx: {
    ti: "Una familia en Valencia",
    b: `La familia Ruiz <u>vive</u> en Valencia. El padre, Andrés, <u>trabaja</u> en un banco y <u>habla</u> inglés y francés. La madre, Sofía, es periodista: <u>escribe</u> artículos para un periódico y <u>lee</u> mucho. Los hijos, Lucas y Nerea, <u>estudian</u> en el instituto.<br><br>Por la tarde, Lucas <u>escucha</u> música y Nerea <u>aprende</u> a tocar la guitarra. A las nueve, toda la familia <u>cena</u> junta. Normalmente <u>comen</u> pescado o verduras y <u>beben</u> agua. Lucas <u>no venir</u> carne porque es vegetariano. Los domingos, ¿qué <u>hacen</u>? <u>Caminan</u> por la playa.`
  },
  q: [
    ["¿Dónde trabaja Andrés?", ["En un periódico", "En un banco", "En un instituto"], 1],
    ["¿Qué escribe Sofía?", ["Libros", "Canciones", "Artículos"], 2],
    ["¿Por qué Lucas no venir carne?", ["Es vegetariano", "No le gusta", "Está enfermo"], 0],
    ["¿Qué hace la familia los domingos?", ["Estudia", "Camina por la playa", "Trabaja"], 1]
  ],
  sp: [
    "¿Dónde vives y con quién?",
    "¿Qué idiomas hablas? ¿Cuáles no hablas?",
    "¿Trabajas o estudias? ¿Qué y dónde?",
    "¿Qué venirs y bebes normalmente para cenar?",
    "¿Qué música escuchas? ¿Qué libros lees?",
    "Haz tres preguntas a un compañero con -ar, -er e -ir."
  ]
},
{
  id: "a1-estar",
  lvl: "A1",
  k: "g",
  t: "Estar y hay",
  fr: "Estar (lieu, états) et hay (il y a)",
  ic: "📍",
  th: `<div class="card"><h2>El verbo ESTAR <span class="fr">(estar : lieu et état)</span></h2>
<table><tr><th>pronombre</th><th>ESTAR</th></tr>
<tr><td>yo</td><td class="irr">estoy</td></tr>
<tr><td>tú</td><td class="irr">estás</td></tr>
<tr><td>él / ella / usted</td><td class="irr">está</td></tr>
<tr><td>nosotros/as</td><td>estamos</td></tr>
<tr><td>vosotros/as</td><td class="irr">estáis</td></tr>
<tr><td>ellos / ustedes</td><td class="irr">están</td></tr></table>
<p>📍 Lugar: El museo está en el centro. <span class="fr">Le musée est au centre.</span><br>
😊 Estado: Estoy cansado. ¿Cómo estás? <span class="fr">Je suis fatigué(e). Et toi, comment vas-tu ?</span><br>
Estados: bien, mal, contento/a, triste, cansado/a, enfermo/a, nervioso/a. <span class="fr">bien, mal, heureux, triste, fatigué, malade, nerveux.</span></p></div>
<div class="card"><h2>HAY o ESTÁ <span class="fr">(hay ou estar pour indiquer l’existence ou la localisation)</span></h2>
<p><b>Hay</b> + un/una/unos/números/nada: presenta algo nuevo. <span class="fr">« Hay » indique l’existence de quelque chose (il y a). Il ne change jamais.</span><br>
Hay un banco en mi calle. <span class="fr">Il y a une banque dans ma rue.</span><br>
Hay tres parques en el barrio. <span class="fr">Il y a trois parcs dans le quartier.</span></p>
<p><b>Está / están</b> + el/la/los/las/mi/nombre propio: localiza algo conocido. <span class="fr">Indique la localisation de quelque chose de précis.</span><br>
El banco está al lado del hotel. <span class="fr">La banque est à côté de l’hôtel.</span><br>
Mis llaves están en la mesa. <span class="fr">Mes clés sont sur la table.</span></p>
<div class="tip"><b>Truco / Astuce :</b> ¿Ves <i>un/una</i>? → <b>hay</b>. ¿Ves <i>el/la</i>? → <b>está</b>. <span class="fr">Indéfini → hay ; défini → está.</span></div></div>
<div class="card"><h3>Preposiciones de lugar <span class="fr">(prépositions de lieu)</span></h3>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>en</td><td>dans / sur</td></tr><tr><td>encima de</td><td>sur</td></tr><tr><td>debajo de</td><td>sous</td></tr>
<tr><td>al lado de</td><td>à côté de</td></tr><tr><td>delante de / detrás de</td><td>devant / derrière</td></tr>
<tr><td>entre … y …</td><td>entre … et …</td></tr><tr><td>cerca de / lejos de</td><td>près de / loin de</td></tr></table>
<p><i>de + el = <b>del</b></i>: El gato está debajo <b>del</b> sofá. <span class="fr">Le chat est sous le canapé.</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Está un supermercado aquí. ✅ <b>Hay</b> un supermercado aquí. <span class="fr">Il y a un supermarché ici.</span><br>
❌ Hay el museo en la plaza. ✅ El museo <b>está</b> en la plaza. <span class="fr">Le musée se trouve sur la place.</span><br>
❌ Hayn dos camas. ✅ <b>Hay</b> dos camas. <span class="fr">Il y a deux lits.</span></p></div>`,
  voc: [
    ["🛋️", "el sofá", "canapé"],
    ["🛏️", "la cama", "lit"],
    ["🔑", "las llaves", "clés"],
    ["🏦", "el banco", "banque"],
    ["🌳", "el parque", "parc"],
    ["⬇️", "debajo de", "sous"],
    ["↔️", "al lado de", "à côté de"],
    ["😴", "cansado", "fatigué(e)"],
    ["😃", "contento", "heureux / heureuse"],
    ["🤒", "enfermo", "malade"]
  ],
  ex: [
    { q: "En mi barrio ___ dos supermercados.", o: ["están", "hay", "es"], a: 1, t: "Il y a deux supermarchés dans mon quartier." },
    { q: "La farmacia ___ al lado del banco.", o: ["hay", "es", "está"], a: 2, t: "La pharmacie est à côté de la banque." },
    { q: "¿Cómo ___ tus padres? — Bien, gracias.", o: ["están", "son", "hay"], a: 0, t: "Comment vont tes parents ? — Bien, merci." },
    { q: "El perro está ___ la mesa. (sous)", o: ["encima de", "debajo de", "lejos de"], a: 1, t: "Le chien est sous la table." },
    { q: "Hoy yo ___ muy cansada. (estar)", a: ["estoy"], t: "Aujourd’hui, je suis très fatigué(e)." },
    { q: "Nosotros ___ en la playa. (estar)", a: ["estamos"], t: "Nous sommes à la plage." },
    { q: "¿___ un cajero automático por aquí? (il y a)", a: ["hay"], t: "Y a-t-il un distributeur de billets dans le coin ?" },
    { q: "El hotel está cerca ___ estación. (de + la)", a: ["de la"], t: "L’hôtel est près de la gare." },
    { q: "Mi casa está al lado ___ parque. (de + el)", a: ["del"], t: "Ma maison est à côté du parc." },
    { w: "Las llaves están encima de la mesa.", t: "Les clés sont sur la table." },
    { w: "Hay un parque muy grande aquí.", t: "Il y a un très grand parc ici." },
    { w: "¿Dónde está la estación de tren?", t: "Où se trouve la gare ?" }
  ],
  tx: {
    ti: "Mi barrio en Ciudad de México",
    b: `Me llamo Tomás y vivo en Coyoacán, un barrio de Ciudad de México. Mi casa <u>está</u> en una calle tranquila. En mi calle <u>hay</u> una panadería, una farmacia y un café pequeño. La panadería <u>está</u> <u>al lado de</u> mi casa y el café <u>está</u> <u>enfrente</u>.<br><br><u>Hay</u> un mercado muy grande <u>cerca de</u> la plaza. Allí <u>hay</u> frutas, flores y comida típica. El museo de Frida Kahlo también <u>está</u> en mi barrio. Hoy <u>estoy</u> muy <u>contento</u> porque mis amigos de Guadalajara <u>están</u> aquí de visita. ¡Vamos al mercado!`
  },
  q: [
    ["¿Dónde está la casa de Tomás?", ["En una calle tranquila", "En la plaza", "Lejos del centro"], 0],
    ["¿Qué está al lado de su casa?", ["El café", "La panadería", "El museo"], 1],
    ["¿Qué hay en el mercado?", ["Libros y ropa", "Frutas, flores y comida", "Coches"], 1],
    ["¿Por qué está contento Tomás?", ["Porque no trabaja", "Porque es su cumpleaños", "Porque sus amigos están de visita"], 2]
  ],
  sp: [
    "¿Cómo estás hoy? ¿Por qué?",
    "¿Qué hay en tu barrio? ¿Qué no hay?",
    "¿Dónde está tu casa? ¿Qué hay cerca?",
    "Describe tu habitación: ¿dónde están la cama, la mesa y la ventana?",
    "Pregunta a un turista: ¿dónde está…? ¿Hay… cerca?",
    "¿Dónde estás normalmente los sábados por la tarde?"
  ]
},
{
  id: "a1-irr",
  lvl: "A1",
  k: "g",
  t: "Presente irregular: e>ie, o>ue, e>i",
  fr: "Le présent irrégulier : les verbes à alternance vocalique",
  ic: "🔄",
  th: `<div class="card"><h2>Verbos con cambio vocálico <span class="fr">(verbes à alternance vocalique)</span></h2>
<p>La vocal de la raíz cambia en todas las personas <b>excepto nosotros y vosotros</b>. <span class="fr">La voyelle du radical change sauf aux formes de « nous » et « vous » (verbes à alternance en « botte »).</span></p>
<table><tr><th></th><th>e→ie querer</th><th>o→ue poder</th><th>o→ue dormir</th><th>e→i pedir</th><th>u→ue jugar</th></tr>
<tr><td>yo</td><td class="irr">quiero</td><td class="irr">puedo</td><td class="irr">duermo</td><td class="irr">pido</td><td class="irr">juego</td></tr>
<tr><td>tú</td><td class="irr">quieres</td><td class="irr">puedes</td><td class="irr">duermes</td><td class="irr">pides</td><td class="irr">juegas</td></tr>
<tr><td>él/ella</td><td class="irr">quiere</td><td class="irr">puede</td><td class="irr">duerme</td><td class="irr">pide</td><td class="irr">juega</td></tr>
<tr><td>nosotros</td><td>queremos</td><td>podemos</td><td>dormimos</td><td>pedimos</td><td>jugamos</td></tr>
<tr><td>vosotros</td><td>queréis</td><td>podéis</td><td>dormís</td><td>pedís</td><td>jugáis</td></tr>
<tr><td>ellos</td><td class="irr">quieren</td><td class="irr">pueden</td><td class="irr">duermen</td><td class="irr">piden</td><td class="irr">juegan</td></tr></table>
<p>Más verbos: e→ie <i>empezar, pensar, preferir, cerrar</i>; o→ue <i>volver, encontrar, costar</i>; e→i <i>repetir, servir</i>. <span class="fr">D’autres verbes de chaque groupe.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Dibuja una bota 👢 alrededor de yo, tú, él y ellos: dentro de la bota la vocal cambia. <span class="fr">Dessinez une botte autour des formes qui changent.</span></div></div>
<div class="card"><h2>Irregulares en la forma <i>yo</i> <span class="fr">(formes irrégulières à la première personne)</span></h2>
<table><tr><th>verbo</th><th>yo</th><th>tú</th><th>él</th><th>nosotros</th><th>ellos</th></tr>
<tr><td>hacer <i class="fr">faire</i></td><td class="irr">hago</td><td>haces</td><td>hace</td><td>hacemos</td><td>hacen</td></tr>
<tr><td>salir <i class="fr">sortir</i></td><td class="irr">salgo</td><td>sales</td><td>sale</td><td>salimos</td><td>salen</td></tr>
<tr><td>poner <i class="fr">mettre</i></td><td class="irr">pongo</td><td>pones</td><td>pone</td><td>ponemos</td><td>ponen</td></tr>
<tr><td>tener <i class="fr">avoir</i></td><td class="irr">tengo</td><td class="irr">tienes</td><td class="irr">tiene</td><td>tenemos</td><td class="irr">tienen</td></tr>
<tr><td>venir <i class="fr">venir</i></td><td class="irr">vengo</td><td class="irr">vienes</td><td class="irr">viene</td><td>venimos</td><td class="irr">vienen</td></tr></table>
<p><i>Tener</i> y <i>venir</i> tienen dos irregularidades: -go en yo y e→ie. <span class="fr">Tener et venir présentent deux irrégularités.</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Yo podo nadar. ✅ Yo <b>puedo</b> nadar. <span class="fr">Je sais nager.</span><br>
❌ Nosotros quieremos. ✅ Nosotros <b>queremos</b>. <span class="fr">Pas de changement avec « nosotros ».</span><br>
❌ Yo tieno un perro. ✅ Yo <b>tengo</b> un perro. <span class="fr">J’ai un chien.</span></p></div>`,
  voc: [
    ["❤️", "querer", "vouloir / aimer"],
    ["💪", "poder", "pouvoir"],
    ["😴", "dormir", "dormir"],
    ["🙋", "pedir", "demander, commander"],
    ["⚽", "jugar", "jouer"],
    ["🛠️", "hacer", "faire"],
    ["🚪", "salir", "sortir, partir"],
    ["📥", "poner", "mettre"],
    ["🤲", "tener", "avoir"],
    ["🏃", "venir", "venir"]
  ],
  ex: [
    { q: "Yo ___ ocho horas cada noche.", o: ["dormo", "duermo", "duerme"], a: 1, t: "Je dors huit heures chaque nuit." },
    { q: "Nosotros ___ ir al cine.", o: ["queremos", "quieremos", "quieren"], a: 0, t: "Nous voulons aller au cinéma." },
    { q: "Mis hijos ___ al fútbol los sábados.", o: ["jugan", "juegamos", "juegan"], a: 2, t: "Mes enfants jouent au football le samedi." },
    { q: "Yo ___ de casa a las ocho.", o: ["salo", "salgo", "sale"], a: 1, t: "Je pars de chez moi à huit heures." },
    { q: "¿Tú ___ hablar más despacio? (poder)", a: ["puedes"], t: "Peux-tu parler plus lentement ?" },
    { q: "En el restaurante, ella siempre ___ pescado. (pedir)", a: ["pide"], t: "Au restaurant, elle commande toujours du poisson." },
    { q: "Yo ___ los deberes por la tarde. (hacer)", a: ["hago"], t: "Je fais mes devoirs l’après-midi." },
    { q: "Yo ___ dos hermanas. (tener)", a: ["tengo"], t: "J’ai deux sœurs." },
    { q: "¿___ (vosotros) a la fiesta esta noche? (venir)", a: ["venís"], t: "Vous venez à la fête ce soir ?" },
    { w: "Yo pongo la mesa a las nueve.", t: "Je mets la table à neuf heures." },
    { w: "¿A qué hora empieza la película?", t: "À quelle heure commence le film ?" },
    { w: "Mi abuelo duerme la siesta todos los días.", t: "Mon grand-père fait la sieste tous les jours." }
  ],
  tx: {
    ti: "Un sábado con Camila",
    b: `Camila tiene veinte años y vive en Montevideo. Los sábados no <u>tiene</u> clase, así que <u>duerme</u> hasta las diez. Después <u>hace</u> el desayuno y <u>pone</u> música. A las doce <u>sale</u> con su hermano Mateo. Ellos <u>juegan</u> al tenis en un parque.<br><br>Por la tarde, sus amigos <u>vienen</u> a su casa. Todos <u>quieren</u> ver una película, pero no <u>pueden</u> decidir cuál. Al final, <u>piden</u> una pizza y <u>juegan</u> a las cartas. Camila dice: "Yo <u>prefiero</u> los sábados tranquilos". La noche <u>empieza</u> tarde y <u>vuelven</u> a casa a la una.`
  },
  q: [
    ["¿Hasta qué hora duerme Camila los sábados?", ["Hasta las ocho", "Hasta las diez", "Hasta las doce"], 1],
    ["¿Qué hace con su hermano?", ["Juega al tenis", "Ve una película", "Hace la comida"], 0],
    ["¿Qué piden los amigos?", ["Sushi", "Una pizza", "Hamburguesas"], 1],
    ["¿Qué prefiere Camila?", ["Las fiestas grandes", "Los sábados tranquilos", "Salir a bailar"], 1]
  ],
  sp: [
    "¿Cuántas horas duermes normalmente?",
    "¿Qué quieres hacer este fin de semana?",
    "¿Qué puedes hacer muy bien? ¿Qué no puedes hacer?",
    "¿Juegas a algún deporte? ¿Cuándo y con quién?",
    "¿A qué hora sales de casa por la mañana? ¿Qué haces después?",
    "Estás en un restaurante: ¿qué pides normalmente?"
  ]
},
{
  id: "a1-refl",
  lvl: "A1",
  k: "g",
  t: "Verbos reflexivos y la rutina",
  fr: "Les verbes pronominaux et la routine quotidienne",
  ic: "⏰",
  th: `<div class="card"><h2>Verbos reflexivos <span class="fr">(verbes pronominaux)</span></h2>
<p>Muchos verbos de la rutina llevan un pronombre: <b>me, te, se, nos, os, se</b>. La acción es sobre uno mismo. <span class="fr">L’action porte sur le sujet lui-même (je me lave).</span></p>
<table><tr><th>pronombre</th><th>levantarse</th><th>ducharse</th><th>acostarse (o→ue)</th></tr>
<tr><td>yo</td><td><b class="reg">me</b> levanto</td><td><b class="reg">me</b> ducho</td><td><b class="reg">me</b> <span class="irr">acuesto</span></td></tr>
<tr><td>tú</td><td><b class="reg">te</b> levantas</td><td><b class="reg">te</b> duchas</td><td><b class="reg">te</b> <span class="irr">acuestas</span></td></tr>
<tr><td>él/ella/usted</td><td><b class="reg">se</b> levanta</td><td><b class="reg">se</b> ducha</td><td><b class="reg">se</b> <span class="irr">acuesta</span></td></tr>
<tr><td>nosotros/as</td><td><b class="reg">nos</b> levantamos</td><td><b class="reg">nos</b> duchamos</td><td><b class="reg">nos</b> acostamos</td></tr>
<tr><td>vosotros/as</td><td><b class="reg">os</b> levantáis</td><td><b class="reg">os</b> ducháis</td><td><b class="reg">os</b> acostáis</td></tr>
<tr><td>ellos/ustedes</td><td><b class="reg">se</b> levantan</td><td><b class="reg">se</b> duchan</td><td><b class="reg">se</b> <span class="irr">acuestan</span></td></tr></table>
<p>Otros: despertarse (e→ie: me <span class="irr">despierto</span>), lavarse, vestirse (e→i: me <span class="irr">visto</span>), peinarse, cepillarse los dientes. <span class="fr">se réveiller, se laver, s’habiller, se peigner, se brosser les dents.</span></p>
<div class="tip"><b>Truco / Astuce :</b> El pronombre va <b>antes</b> del verbo conjugado, pero <b>pegado</b> al infinitivo: <i>Me ducho</i> / <i>Quiero ducharme</i>. <span class="fr">Avant un verbe conjugué, attaché à un infinitif.</span></div></div>
<div class="card"><h2>La hora y las expresiones de tiempo <span class="fr">(expressions de temps)</span></h2>
<p>¿A qué hora te levantas? — <b>A las</b> siete. <span class="fr">À quelle heure te lèves-tu ? — À sept heures.</span><br>
a la una, a las dos y media, a las ocho menos cuarto <span class="fr">à une heure, à deux heures et demie, à huit heures moins le quart</span><br>
por la mañana / por la tarde / por la noche <span class="fr">le matin / l’après-midi / la nuit</span><br>
primero, luego, después, más tarde, antes de, después de <span class="fr">d’abord, ensuite, après cela, plus tard, avant, après</span><br>
siempre, normalmente, a veces, nunca <span class="fr">toujours, généralement, parfois, jamais</span></p>
<p>En Latinoamérica se dice <i>en la mañana / en la tarde</i>. <span class="fr">« En la mañana » est courant en Amérique latine.</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Yo levanto a las siete. ✅ Yo <b>me</b> levanto a las siete. <span class="fr">Je me lève à sept heures.</span><br>
❌ Me lavo mis dientes. ✅ Me lavo <b>los</b> dientes. <span class="fr">Je me brosse les dents (article, pas de possessif).</span><br>
❌ Nosotros se duchamos. ✅ Nosotros <b>nos</b> duchamos. <span class="fr">Nous nous douchons.</span></p></div>`,
  voc: [
    ["⏰", "despertarse", "se réveiller"],
    ["🛌", "levantarse", "se lever"],
    ["🚿", "ducharse", "se doucher"],
    ["🪥", "cepillarse los dientes", "se brosser les dents"],
    ["👕", "vestirse", "s’habiller"],
    ["💇", "peinarse", "se peigner"],
    ["🧼", "lavarse las manos", "se laver les mains"],
    ["😴", "acostarse", "se coucher"],
    ["☕", "desayunar", "prendre le petit-déjeuner"],
    ["🌙", "por la noche", "la nuit"]
  ],
  ex: [
    { q: "Yo ___ levanto a las siete.", o: ["me", "se", "te"], a: 0, t: "Je me lève à sept heures." },
    { q: "¿A qué hora ___ acuestas?", o: ["se", "te", "nos"], a: 1, t: "À quelle heure te couches-tu ?" },
    { q: "Mis hermanos ___ duchan por la noche.", o: ["nos", "os", "se"], a: 2, t: "Mes frères prennent leur douche le soir." },
    { q: "Ella se ___ muy rápido. (vestirse)", o: ["viste", "veste", "vista"], a: 0, t: "Elle s’habille très vite." },
    { q: "Nosotros ___ levantamos temprano. (pronombre)", a: ["nos"], t: "Nous nous levons tôt." },
    { q: "Yo me ___ a las once y media. (acostarse)", a: ["acuesto"], t: "Je me couche à onze heures et demie." },
    { q: "Mi padre se ___ a las seis. (despertarse)", a: ["despierta"], t: "Mon père se réveille à six heures." },
    { q: "Llego a clase ___ las nueve. (at)", a: ["a"], t: "J’arrive en cours à neuf heures." },
    { q: "Antes de comer, me lavo ___ manos. (article défini)", a: ["las"], t: "Avant de manger, je me lave les mains." },
    { w: "Primero me ducho y luego desayuno.", t: "D’abord, je me douche, puis je prends mon petit-déjeuner." },
    { w: "Normalmente me acuesto a las once.", t: "Je me couche généralement à onze heures." },
    { w: "¿A qué hora te levantas los domingos?", t: "À quelle heure te lèves-tu le dimanche ?" }
  ],
  tx: {
    ti: "La rutina de Javier",
    b: `Javier es enfermero en un hospital de Bilbao. De lunes a viernes <u>se despierta</u> a las seis menos cuarto. Primero <u>se ducha</u> con agua fría y <u>se viste</u>. Luego desayuna un café con leche y tostadas. <u>Se cepilla los dientes</u> y sale de casa a las seis y media.<br><br>Trabaja <u>por la mañana</u> y vuelve a casa a las tres. <u>Por la tarde</u> descansa, lee o pasea con su perra, Luna. Cena a las nueve y <u>se acuesta</u> a las diez y media. Los fines de semana es diferente: <u>se levanta</u> tarde, a las diez, y <u>nunca</u> pone el despertador.`
  },
  q: [
    ["¿A qué hora se despierta Javier entre semana?", ["A las 5:45", "A las 6:30", "A las 10:00"], 0],
    ["¿Qué hace primero?", ["Desayuna", "Se ducha", "Pasea al perro"], 1],
    ["¿Cuándo vuelve a casa?", ["A las nueve", "A las tres", "A las diez y media"], 1],
    ["¿Qué hace los fines de semana?", ["Se levanta tarde", "Trabaja en el hospital", "Se acuesta temprano"], 0]
  ],
  sp: [
    "¿A qué hora te levantas de lunes a viernes?",
    "Describe tu rutina de la mañana: primero, luego, después…",
    "¿Te duchas por la mañana o por la noche?",
    "¿A qué hora te acuestas normalmente? ¿Y los sábados?",
    "¿Qué haces por la tarde después del trabajo o de clase?",
    "Compara tu rutina de lunes y tu rutina de domingo."
  ]
},
{
  id: "a1-gustar",
  lvl: "A1",
  k: "g",
  t: "Gustar, encantar y doler",
  fr: "Aimer, adorer et avoir mal",
  ic: "😍",
  th: `<div class="card"><h2>El verbo GUSTAR <span class="fr">(gustar signifie littéralement « plaire »)</span></h2>
<p>Con <i>gustar</i>, la cosa que gusta es el sujeto. El verbo concuerda con la cosa, no con la persona. <span class="fr">La chose aimée est le sujet ; le verbe s’accorde avec elle.</span></p>
<table><tr><th>(a + persona)</th><th>pronombre</th><th>+ singular / infinitivo</th><th>+ plural</th></tr>
<tr><td>(a mí)</td><td><b class="reg">me</b></td><td>gusta</td><td>gustan</td></tr>
<tr><td>(a ti)</td><td><b class="reg">te</b></td><td>gusta</td><td>gustan</td></tr>
<tr><td>(a él / ella / usted)</td><td><b class="reg">le</b></td><td>gusta</td><td>gustan</td></tr>
<tr><td>(a nosotros/as)</td><td><b class="reg">nos</b></td><td>gusta</td><td>gustan</td></tr>
<tr><td>(a vosotros/as)</td><td><b class="reg">os</b></td><td>gusta</td><td>gustan</td></tr>
<tr><td>(a ellos / ustedes)</td><td><b class="reg">les</b></td><td>gusta</td><td>gustan</td></tr></table>
<p>Me gusta el chocolate. <span class="fr">J’aime le chocolat.</span><br>
Me gustan los gatos. <span class="fr">J’aime les chats.</span><br>
Nos gusta bailar. <span class="fr">Nous aimons danser (infinitif = singulier).</span><br>
A Marta le gusta el cine. <span class="fr">Marta aime le cinéma.</span></p></div>
<div class="card"><h2>Encantar y doler <span class="fr">(adorer / avoir mal)</span></h2>
<p><b>Encantar</b> = gustar mucho: Me encanta la playa. Me encantan los tacos. <span class="fr">J’adore la plage. J’adore les tacos.</span><br>
No se dice "me encanta mucho". <span class="fr">« Encantar » exprime déjà une forte intensité.</span><br>
<b>Doler</b> (o→ue) funciona igual: Me <span class="irr">duele</span> la cabeza. Me <span class="irr">duelen</span> los pies. <span class="fr">J’ai mal à la tête. J’ai mal aux pieds.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Piensa "X <i>me gusta</i>" = "X me plaît". Si X es plural → <b>gustan</b>. <span class="fr">Sujet pluriel → verbe au pluriel.</span></div></div>
<div class="card"><h3>Reaccionar <span class="fr">(exprimer son accord et son désaccord)</span></h3>
<table><tr><th>frase</th><th>respuesta igual</th><th>respuesta diferente</th></tr>
<tr><td>Me gusta el café. 😊</td><td>A mí <b>también</b>. <span class="fr">Moi aussi.</span></td><td>A mí <b>no</b>. <span class="fr">Je ne le fais pas.</span></td></tr>
<tr><td>No me gusta el café. 😕</td><td>A mí <b>tampoco</b>. <span class="fr">Moi non plus.</span></td><td>A mí <b>sí</b>. <span class="fr">Je le fais.</span></td></tr></table>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Yo gusto el chocolate. ✅ <b>Me gusta</b> el chocolate. <span class="fr">J’aime le chocolat.</span><br>
❌ Me gusta los perros. ✅ Me <b>gustan</b> los perros. <span class="fr">J’aime les chiens.</span><br>
❌ A Juan gusta leer. ✅ A Juan <b>le</b> gusta leer. <span class="fr">Juan aime lire.</span><br>
❌ No me gusta. — A mí también. ✅ A mí <b>tampoco</b>. <span class="fr">Moi non plus.</span></p></div>`,
  voc: [
    ["👍", "gustar", "aimer"],
    ["😍", "encantar", "adorer (les choses)"],
    ["🤕", "doler", "faire mal"],
    ["🤯", "la cabeza", "tête"],
    ["🦶", "los pies", "pieds"],
    ["🍫", "el chocolate", "chocolat"],
    ["💃", "bailar", "danser"],
    ["🏖️", "la playa", "plage"],
    ["🙌", "también", "aussi"],
    ["🙅", "tampoco", "non plus"]
  ],
  ex: [
    { q: "Me ___ los perros.", o: ["gusta", "gustan", "gusto"], a: 1, t: "J’aime les chiens." },
    { q: "A mi madre ___ gusta cocinar.", o: ["le", "les", "me"], a: 0, t: "Ma mère aime cuisiner." },
    { q: "No me gusta el fútbol. — A mí ___.", o: ["también", "tampoco", "sí también"], a: 1, t: "Je n’aime pas le football. — Moi non plus." },
    { q: "Me ___ la cabeza.", o: ["duelo", "duele", "duelen"], a: 1, t: "J’ai mal à la tête." },
    { q: "A nosotros ___ encanta viajar. (pronombre)", a: ["nos"], t: "Nous adorons voyager." },
    { q: "¿Te ___ las películas de terror? (gustar)", a: ["gustan"], t: "Tu aimes les films d’horreur ?" },
    { q: "A mis abuelos ___ gusta pasear. (pronombre)", a: ["les"], t: "Mes grands-parents aiment se promener." },
    { q: "Después del partido, me ___ las piernas. (doler)", a: ["duelen"], t: "Après le match, j’ai mal aux jambes." },
    { q: "Me gusta la música latina. — A mí ___. (too)", a: ["también"], t: "J’aime la musique latine. — Moi aussi." },
    { w: "A mi hermano le encanta el chocolate.", t: "Mon frère adore le chocolat." },
    { w: "¿Os gustan las fiestas de cumpleaños?", t: "Vous aimez les fêtes d’anniversaire ?" },
    { w: "No me gusta levantarme temprano.", t: "Je n’aime pas me lever tôt." }
  ],
  tx: {
    ti: "Dos amigas muy diferentes",
    b: `Inés y Carmen son amigas, pero son muy diferentes. A Inés <u>le encanta</u> la naturaleza: <u>le gusta</u> caminar por la montaña y <u>le gustan</u> mucho los animales. A Carmen <u>no le gusta</u> el campo; <u>le encantan</u> las ciudades grandes, los museos y las tiendas.<br><br>Las dos tienen algo en común: <u>les gusta</u> mucho la comida peruana. "<u>Me encanta</u> el ceviche", dice Inés. "¡<u>A mí también</u>!", responde Carmen. Hoy no salen porque a Carmen <u>le duele</u> la cabeza y a Inés <u>le duelen</u> los pies. "<u>No me gusta</u> estar en casa", dice Carmen. "<u>A mí tampoco</u>", dice Inés.`
  },
  q: [
    ["¿Qué le encanta a Inés?", ["Las tiendas", "La naturaleza", "Los museos"], 1],
    ["¿Qué les gusta a las dos?", ["La comida peruana", "La montaña", "Las ciudades"], 0],
    ["¿Qué le duele a Carmen?", ["Los pies", "La espalda", "La cabeza"], 2],
    ["¿Qué significa \"A mí tampoco\" en el texto?", ["A Inés tampoco le gusta estar en casa", "A Inés le gusta estar en casa", "Inés quiere salir sola"], 0]
  ],
  sp: [
    "¿Qué te gusta hacer los fines de semana?",
    "¿Qué comida te encanta? ¿Qué comida no te gusta?",
    "¿Qué música les gusta a tus amigos?",
    "Di tres cosas que no te gustan. Tu compañero responde con \"a mí también / tampoco\".",
    "¿Qué te duele cuando haces mucho deporte?",
    "¿Qué le gusta a tu mejor amigo/a? ¿Y a ti?"
  ]
},
{
  id: "a1-ira",
  lvl: "A1",
  k: "g",
  t: "Ir a + infinitivo",
  fr: "Ir a + infinitif (projets d’avenir)",
  ic: "🗓️",
  th: `<div class="card"><h2>Ir a + infinitivo <span class="fr">(ir a + verbe)</span></h2>
<p>Para hablar de planes e intenciones usamos el verbo <b>ir</b> + <b>a</b> + infinitivo. <span class="fr">S’emploie pour les projets et les intentions, comme « aller faire quelque chose ».</span></p>
<table><tr><th>pronombre</th><th>IR</th><th></th><th>infinitivo</th></tr>
<tr><td>yo</td><td class="irr">voy</td><td>a</td><td>estudiar</td></tr>
<tr><td>tú</td><td class="irr">vas</td><td>a</td><td>comer</td></tr>
<tr><td>él / ella / usted</td><td class="irr">va</td><td>a</td><td>viajar</td></tr>
<tr><td>nosotros/as</td><td class="irr">vamos</td><td>a</td><td>salir</td></tr>
<tr><td>vosotros/as</td><td class="irr">vais</td><td>a</td><td>ver</td></tr>
<tr><td>ellos / ustedes</td><td class="irr">van</td><td>a</td><td>dormir</td></tr></table>
<p>Voy a visitar a mis abuelos. <span class="fr">Je vais rendre visite à mes grands-parents.</span><br>
¿Qué vas a hacer mañana? <span class="fr">Qu’est-ce que tu vas faire demain ?</span><br>
No vamos a trabajar el domingo. <span class="fr">Nous n’allons pas travailler dimanche.</span><br>
¡Vamos a bailar! <span class="fr">Dansons !</span></p>
<div class="tip"><b>Truco / Astuce :</b> Solo conjugas <i>ir</i>; el segundo verbo siempre está en infinitivo. Con reflexivos: <i>Voy a ducharme</i>. <span class="fr">Seul « ir » se conjugue ; le deuxième verbe reste à l’infinitif.</span></div></div>
<div class="card"><h2>Expresiones de futuro <span class="fr">(expressions de temps au futur)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>esta tarde / esta noche</td><td>cet après-midi / ce soir</td></tr>
<tr><td>mañana / pasado mañana</td><td>demain / après-demain</td></tr>
<tr><td>mañana por la mañana</td><td>demain matin</td></tr>
<tr><td>este fin de semana / este verano</td><td>ce week-end / cet été</td></tr>
<tr><td>el próximo lunes / la próxima semana</td><td>lundi prochain / la semaine prochaine</td></tr>
<tr><td>el mes que viene / el año que viene</td><td>le mois prochain / l’année prochaine</td></tr></table>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Voy estudiar. ✅ Voy <b>a</b> estudiar. <span class="fr">Je vais étudier.</span><br>
❌ Vamos a comemos. ✅ Vamos a <b>comer</b>. <span class="fr">Nous allons manger.</span><br>
❌ el próxima semana ✅ <b>la próxima</b> semana <span class="fr">la semaine prochaine</span></p></div>`,
  voc: [
    ["🚶", "ir a", "aller + infinitif"],
    ["✈️", "viajar", "voyager"],
    ["🌅", "mañana", "demain"],
    ["🌆", "esta tarde", "cet après-midi"],
    ["🌃", "esta noche", "ce soir"],
    ["📅", "la próxima semana", "la semaine prochaine"],
    ["🎉", "el fin de semana", "week-end"],
    ["☀️", "el verano", "été"],
    ["🧳", "las vacaciones", "vacances"],
    ["🗓️", "el año que viene", "l’année prochaine"]
  ],
  ex: [
    { q: "Mañana yo ___ a estudiar en la biblioteca.", o: ["voy", "va", "vamos"], a: 0, t: "Demain, je vais étudier à la bibliothèque." },
    { q: "¿Qué ___ a hacer tú este fin de semana?", o: ["vas", "va", "van"], a: 0, t: "Qu’est-ce que tu vas faire ce week-end ?" },
    { q: "Ellos van a ___ a Cancún en agosto.", o: ["viajan", "viajar", "viajando"], a: 1, t: "Ils vont voyager à Cancún en août." },
    { q: "___ próximo martes tengo un examen.", o: ["La", "El", "Los"], a: 1, t: "Mardi prochain, j’ai un examen." },
    { q: "Nosotros ___ a cenar en casa de Lola. (ir)", a: ["vamos"], t: "Nous allons dîner chez Lola." },
    { q: "Vosotros ___ a ver la final, ¿no? (ir)", a: ["vais"], t: "Vous allez regarder la finale, n’est-ce pas ?" },
    { q: "Mi hermana va ___ comprar un coche. (preposición)", a: ["a"], t: "Ma sœur va acheter une voiture." },
    { q: "Esta noche no voy a ___ la tele. (ver)", a: ["ver"], t: "Ce soir, je ne vais pas regarder la télévision." },
    { q: "Usted ___ a necesitar el pasaporte. (ir)", a: ["va"], t: "Tu vas avoir besoin de ton passeport." },
    { w: "Esta tarde voy a jugar al fútbol.", t: "Cet après-midi, je vais jouer au football." },
    { w: "¿Qué vais a hacer el próximo verano?", t: "Qu’allez-vous faire l’été prochain ?" },
    { w: "Mis padres van a visitar Cartagena.", t: "Mes parents vont visiter Carthagène." }
  ],
  tx: {
    ti: "Planes para el puente",
    b: `Hola, Marina:<br><br>¡Tengo muchos planes para el puente! El viernes <u>voy a terminar</u> el trabajo pronto y <u>esta noche</u> <u>voy a hacer</u> la maleta. <u>Mañana por la mañana</u> Raúl y yo <u>vamos a tomar</u> el tren a Granada. Allí <u>vamos a visitar</u> la Alhambra y <u>vamos a comer</u> tapas en el Albaicín. El sábado por la noche mis primos <u>van a cantar</u> en un concierto de flamenco.<br><br>El domingo <u>no vamos a hacer</u> nada especial: <u>vamos a descansar</u>. Y tú, ¿qué <u>vas a hacer</u>? ¿<u>Vas a venir</u> a Granada <u>el próximo mes</u>?<br><br>Un abrazo,<br>Noelia`
  },
  q: [
    ["¿Qué va a hacer Noelia esta noche?", ["Ir a un concierto", "Hacer la maleta", "Comer tapas"], 1],
    ["¿Cómo van a viajar a Granada?", ["En tren", "En coche", "En avión"], 0],
    ["¿Quiénes van a cantar?", ["Raúl y Noelia", "Marina", "Los primos de Noelia"], 2],
    ["¿Qué van a hacer el domingo?", ["Visitar la Alhambra", "Descansar", "Volver al trabajo"], 1]
  ],
  sp: [
    "¿Qué vas a hacer esta tarde?",
    "¿Qué planes tienes para este fin de semana?",
    "¿Adónde vas a ir de vacaciones el próximo verano?",
    "¿Qué vas a cenar esta noche?",
    "Cuenta tres cosas que vas a hacer el año que viene.",
    "Invita a un amigo a un plan: ¿qué vamos a hacer, dónde y cuándo?"
  ]
}
);
