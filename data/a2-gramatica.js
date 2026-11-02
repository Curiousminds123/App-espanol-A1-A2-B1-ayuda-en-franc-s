/* Camino al Español · Nivel A2 · contenido (gramática) */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(

/* ───────────── 1. SER Y ESTAR ───────────── */
{
  id: "a2-ser",
  lvl: "A2",
  k: "g",
  t: "Ser y estar",
  fr: "Ser et estar (tous deux signifient « être »)",
  ic: "🎭",
  th: `<div class="card"><h2>Ser y estar <span class="fr">(tous deux signifient « être »)</span></h2>
<p>En español hay dos verbos para <i>être</i>. Los dos son irregulares. <span class="fr">En espagnol, deux verbes signifient « être ». Ils sont tous deux irréguliers.</span></p>
<table><tr><th></th><th>SER</th><th>ESTAR</th></tr>
<tr><td>yo</td><td class="irr">soy</td><td class="irr">estoy</td></tr>
<tr><td>tú</td><td class="irr">eres</td><td class="irr">estás</td></tr>
<tr><td>él/ella/usted</td><td class="irr">es</td><td class="irr">está</td></tr>
<tr><td>nosotros/as</td><td class="irr">somos</td><td>estamos</td></tr>
<tr><td>vosotros/as</td><td class="irr">sois</td><td>estáis</td></tr>
<tr><td>ellos/ellas/ustedes</td><td class="irr">son</td><td class="irr">están</td></tr></table>
<p>🌎 En Latinoamérica no se usa <i>vosotros</i>: se dice <i>ustedes son / ustedes están</i>. <span class="fr">En Amérique latine, « ustedes » remplace « vosotros ».</span></p></div>
<div class="card"><h3>SER = identidad, origen, profesión, hora, características</h3>
<p>Soy estudiante. <span class="fr">Je suis étudiant(e).</span><br>Es de México. <span class="fr">Il vient du Mexique.</span><br>Son las tres. <span class="fr">Il est trois heures.</span><br>Hoy es martes. <span class="fr">Nous sommes mardi.</span><br>La mesa es de madera. <span class="fr">La table est en bois.</span><br>El coche es de Ana. <span class="fr">La voiture est à Ana.</span><br>La fiesta es en mi casa. <span class="fr">La fête a lieu chez moi (événement).</span></p>
<h3>ESTAR = lugar, estados temporales, emociones, acciones (estoy comiendo)</h3>
<p>Madrid está en España. <span class="fr">Madrid se trouve en Espagne.</span><br>Estoy cansado. <span class="fr">Je suis fatigué(e).</span><br>La sopa está fría. <span class="fr">La soupe est froide (en ce moment).</span><br>Estamos de vacaciones. <span class="fr">Nous sommes en vacances.</span><br>¿Estás bien? <span class="fr">Tu vas bien ?</span></p>
<div class="tip"><b>Truco / Astuce :</b> Ser = <i>ce qu’est une chose</i> (su esencia). Estar = <i>dans quel état ou à quel endroit elle se trouve maintenant</i> (su estado o lugar). <span class="fr">« Bien » et « mal » s’emploient toujours avec estar : Está bien.</span></div></div>
<div class="card"><h3>Adjetivos que cambian de significado <span class="fr">(adjectifs dont le sens change)</span></h3>
<table><tr><th>adjetivo</th><th>con SER</th><th>con ESTAR</th></tr>
<tr><td>listo</td><td>Pablo es listo. <span class="fr">Pablo est intelligent.</span></td><td>Pablo está listo. <span class="fr">Pablo est prêt.</span></td></tr>
<tr><td>aburrido</td><td>La clase es aburrida. <span class="fr">Le cours est ennuyeux.</span></td><td>Estoy aburrido. <span class="fr">Je m’ennuie.</span></td></tr>
<tr><td>rico</td><td>Su familia es rica. <span class="fr">Sa famille est riche.</span></td><td>La paella está rica. <span class="fr">La paella est délicieuse.</span></td></tr>
<tr><td>malo</td><td>Este café es malo. <span class="fr">Ce café est mauvais (qualité).</span></td><td>Mi hijo está malo. <span class="fr">Mon fils est malade (Espagne).</span></td></tr>
<tr><td>verde</td><td>La manzana es verde. <span class="fr">La pomme est verte (couleur).</span></td><td>El plátano está verde. <span class="fr">La banane n’est pas mûre.</span></td></tr>
<tr><td>abierto</td><td>Ana es muy abierta. <span class="fr">Ana est très ouverte d’esprit.</span></td><td>La tienda está abierta. <span class="fr">Le magasin est ouvert.</span></td></tr></table>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Soy cansado. ✅ Estoy cansado. <span class="fr">Je suis fatigué(e).</span><br>❌ Estoy profesor. ✅ Soy profesor. <span class="fr">Je suis professeur(e).</span><br>❌ La fiesta está en mi casa. ✅ La fiesta es en mi casa. <span class="fr">Pour les événements, on emploie ser.</span><br>❌ Es bien. ✅ Está bien. <span class="fr">Ça va.</span></p></div>`,
  voc: [
    ["🧑‍🏫", "ser profesor", "être professeur"],
    ["🌍", "ser de", "venir de"],
    ["📍", "estar en casa", "être à la maison"],
    ["😴", "cansado", "fatigué(e)"],
    ["😊", "contento", "heureux / heureuse, content(e)"],
    ["🧠", "listo", "intelligent(e) (ser) / prêt(e) (estar)"],
    ["🥱", "aburrido", "ennuyeux (ser) / ennuyé (estar)"],
    ["😋", "rico", "riche (ser) / délicieux (estar)"],
    ["🤒", "enfermo", "malade"],
    ["🍏", "verde", "vert (ser) / pas mûr (estar)"]
  ],
  ex: [
    { q: "Mi hermana ___ profesora.", o: ["es", "está"], a: 0, t: "Ma sœur est professeure. (profession → ser)" },
    { q: "Hoy ___ muy cansado.", o: ["soy", "estoy"], a: 1, t: "Aujourd’hui, je suis très fatigué(e). (état temporaire → estar)" },
    { q: "La fiesta ___ en mi casa.", o: ["es", "está"], a: 0, t: "La fête a lieu chez moi. (événement → ser)" },
    { q: "Madrid ___ en España.", o: ["es", "está"], a: 1, t: "Madrid se trouve en Espagne. (location → estar)" },
    { q: "La sopa ___ fría.", o: ["es", "está"], a: 1, t: "La soupe est froide. (état actuel → estar)" },
    { q: "¿Qué hora ___?", o: ["es", "está"], a: 0, t: "Quelle heure est-il ? (heure → ser)" },
    { q: "Ellos ___ de Colombia. (ser)", a: ["son"], t: "Ils viennent de Colombie." },
    { q: "Nosotros ___ contentos hoy. (estar)", a: ["estamos"], t: "Aujourd’hui, nous sommes heureux." },
    { q: "Esta película ___ muy aburrida; no me gusta. (ser)", a: ["es"], t: "Ce film est très ennuyeux ; il ne me plaît pas." },
    { w: "Mi hermano es muy listo.", t: "Mon frère est très intelligent." },
    { w: "Esta tortilla está muy rica.", t: "Cette omelette est délicieuse." },
    { w: "La cena ya está lista.", t: "Le dîner est prêt maintenant." }
  ],
  tx: {
    ti: "Lucía, de Sevilla",
    b: `Me llamo Lucía y <u>soy</u> de Sevilla. <u>Soy</u> profesora de inglés en un instituto. Hoy <u>estoy</u> un poco cansada porque <u>es</u> lunes y anoche dormí poco. Mi casa <u>está</u> cerca del centro y <u>es</u> muy luminosa, pero ahora <u>está</u> un poco desordenada.<br><br>Ahora <u>estoy</u> en el trabajo y mis alumnos <u>están</u> en clase. Algunos <u>están aburridos</u>, pero la clase no <u>es aburrida</u>: hoy hablamos de comida. Mi alumno Pablo <u>es</u> muy <u>listo</u> y siempre termina primero. Cuando todos <u>están listos</u>, salimos al patio.<br><br>Por la tarde voy a casa de mi madre. Su gazpacho siempre <u>está</u> muy <u>rico</u>. Mi madre no <u>es rica</u>, pero <u>es</u> una mujer muy feliz.`
  },
  q: [
    ["¿De dónde es Lucía?", ["De Madrid", "De Sevilla", "De Inglaterra"], 1],
    ["¿Por qué está cansada?", ["Porque es lunes", "Porque no venir", "Porque está enferma"], 0],
    ["¿Dónde está su casa?", ["Lejos", "En el trabajo", "Cerca del centro"], 2],
    ["¿Quién es Pablo?", ["Un alumno muy listo", "El hermano de Lucía", "Un profesor aburrido"], 0]
  ],
  sp: [
    "Preséntate: ¿cómo te llamas, de dónde eres y qué haces?",
    "¿Cómo estás hoy y por qué?",
    "Describe a tu mejor amigo/a (¿cómo es?).",
    "¿Dónde está tu casa? ¿Cómo es?",
    "¿Cómo es tu ciudad? ¿Dónde está?",
    "Piensa en una comida que siempre está muy rica y en una película que es aburrida. Explica por qué."
  ]
},

/* ───────────── 2. PRESENTE IRREGULAR ───────────── */
{
  id: "a2-irr",
  lvl: "A2",
  k: "g",
  t: "Presente irregular",
  fr: "Le présent irrégulier",
  ic: "🔄",
  th: `<div class="card"><h2>Presente regular <span class="fr">(verbes réguliers)</span></h2>
<table><tr><th></th><th>-AR hablar</th><th>-ER comer</th><th>-IR vivir</th></tr>
<tr><td>yo</td><td>habl<b class="reg">o</b></td><td>com<b class="reg">o</b></td><td>viv<b class="reg">o</b></td></tr>
<tr><td>tú</td><td>habl<b class="reg">as</b></td><td>com<b class="reg">es</b></td><td>viv<b class="reg">es</b></td></tr>
<tr><td>él/ella</td><td>habl<b class="reg">a</b></td><td>com<b class="reg">e</b></td><td>viv<b class="reg">e</b></td></tr>
<tr><td>nosotros</td><td>habl<b class="reg">amos</b></td><td>com<b class="reg">emos</b></td><td>viv<b class="reg">imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b class="reg">áis</b></td><td>com<b class="reg">éis</b></td><td>viv<b class="reg">ís</b></td></tr>
<tr><td>ellos</td><td>habl<b class="reg">an</b></td><td>com<b class="reg">en</b></td><td>viv<b class="reg">en</b></td></tr></table></div>
<div class="card"><h2>Irregulares importantes <span class="fr">(principaux verbes irréguliers)</span></h2>
<table><tr><th></th><th>ir <i class="fr">aller</i></th><th>tener <i class="fr">avoir</i></th><th>hacer <i class="fr">faire</i></th><th>querer <i class="fr">vouloir</i></th><th>poder <i class="fr">pouvoir</i></th></tr>
<tr><td>yo</td><td class="irr">voy</td><td class="irr">tengo</td><td class="irr">hago</td><td class="irr">quiero</td><td class="irr">puedo</td></tr>
<tr><td>tú</td><td class="irr">vas</td><td class="irr">tienes</td><td>haces</td><td class="irr">quieres</td><td class="irr">puedes</td></tr>
<tr><td>él/ella</td><td class="irr">va</td><td class="irr">tiene</td><td>hace</td><td class="irr">quiere</td><td class="irr">puede</td></tr>
<tr><td>nosotros</td><td class="irr">vamos</td><td>tenemos</td><td>hacemos</td><td>queremos</td><td>podemos</td></tr>
<tr><td>vosotros</td><td class="irr">vais</td><td>tenéis</td><td>hacéis</td><td>queréis</td><td>podéis</td></tr>
<tr><td>ellos</td><td class="irr">van</td><td class="irr">tienen</td><td>hacen</td><td class="irr">quieren</td><td class="irr">pueden</td></tr></table>
<table><tr><th>verbo</th><th>yo</th><th>tú</th><th>él</th><th>nos.</th><th>ellos</th></tr>
<tr><td>venir <i class="fr">venir</i></td><td class="irr">vengo</td><td class="irr">vienes</td><td class="irr">viene</td><td>venimos</td><td class="irr">vienen</td></tr>
<tr><td>decir <i class="fr">dire</i></td><td class="irr">digo</td><td class="irr">dices</td><td class="irr">dice</td><td>decimos</td><td class="irr">dicen</td></tr>
<tr><td>saber <i class="fr">savoir</i></td><td class="irr">sé</td><td>sabes</td><td>sabe</td><td>sabemos</td><td>saben</td></tr>
<tr><td>salir <i class="fr">sortir</i></td><td class="irr">salgo</td><td>sales</td><td>sale</td><td>salimos</td><td>salen</td></tr>
<tr><td>poner <i class="fr">mettre</i></td><td class="irr">pongo</td><td>pones</td><td>pone</td><td>ponemos</td><td>ponen</td></tr>
<tr><td>dar <i class="fr">donner</i></td><td class="irr">doy</td><td>das</td><td>da</td><td>damos</td><td>dan</td></tr></table>
<p><span class="irr">Rojo</span> = cambio irregular. <span class="fr">En rouge : forme irrégulière. Les alternances du radical (e→ie, o→ue, e→i) ne touchent pas nosotros/vosotros.</span></p></div>
<div class="card"><h3>Cambios en la raíz <span class="fr">(verbes à alternance vocalique)</span></h3>
<table><tr><th>cambio</th><th>ejemplos</th><th>yo / nosotros</th></tr>
<tr><td>e → ie</td><td>querer, pensar, empezar, preferir, entender</td><td><span class="irr">empiezo</span> / empezamos</td></tr>
<tr><td>o → ue</td><td>poder, dormir, volver, encontrar, contar</td><td><span class="irr">duermo</span> / dormimos</td></tr>
<tr><td>u → ue</td><td>jugar</td><td><span class="irr">juego</span> / jugamos</td></tr>
<tr><td>e → i</td><td>pedir, repetir, servir, vestirse</td><td><span class="irr">pido</span> / pedimos</td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> Son "verbos bota" 👢: si escribes la tabla, las formas que cambian (yo, tú, él, ellos) forman una bota. Nosotros y vosotros quedan fuera. <span class="fr">« Verbes en botte » : les formes à alternance dessinent une botte ; nosotros/vosotros restent réguliers.</span></div>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Yo sabo. ✅ Yo sé. <span class="fr">Je sais.</span><br>❌ Yo salo a las ocho. ✅ Yo salgo a las ocho. <span class="fr">Je pars à huit heures.</span><br>❌ Nosotros quieremos. ✅ Nosotros queremos. <span class="fr">Nous voulons.</span><br>❌ Él juga al tenis. ✅ Él juega al tenis. <span class="fr">Il joue au tennis.</span></p></div>`,
  voc: [
    ["🚶", "ir", "aller"],
    ["🤲", "tener", "avoir"],
    ["🛠️", "hacer", "faire"],
    ["❤️", "querer", "vouloir / aimer"],
    ["💪", "poder", "pouvoir"],
    ["🗣️", "decir", "dire"],
    ["🧠", "saber", "savoir"],
    ["🚪", "salir", "sortir / partir"],
    ["😴", "dormir", "dormir"],
    ["🍽️", "pedir", "demander / commander"]
  ],
  ex: [
    { q: "Yo ___ dos hermanos. (tener)", a: ["tengo"], t: "J’ai deux frères et sœurs." },
    { q: "Ella ___ al cine. (ir)", a: ["va"], t: "Elle va au cinéma." },
    { q: "Nosotros ___ pizza. (querer)", a: ["queremos"], t: "Nous voulons de la pizza." },
    { q: "Ellos ___ la verdad. (decir)", a: ["dicen"], t: "Ils disent la vérité." },
    { q: "¿Tú ___ venir mañana? (poder)", o: ["puedes", "podes", "puedas"], a: 0, t: "Peux-tu venir demain ?" },
    { q: "Yo ___ deporte los lunes.", o: ["hago", "hace", "hacho"], a: 0, t: "Je fais du sport le lundi." },
    { q: "Yo no ___ la respuesta.", o: ["sabo", "sé", "sabe"], a: 1, t: "Je ne connais pas la réponse." },
    { q: "Yo ___ a las ocho. (salir)", o: ["salo", "salgo", "sale"], a: 1, t: "Je pars à huit heures." },
    { w: "Mi hermano duerme ocho horas.", t: "Mon frère dort huit heures." },
    { w: "Nosotros jugamos al fútbol los sábados.", t: "Nous jouons au football le samedi." },
    { w: "¿A qué hora vuelves a casa?", t: "À quelle heure rentres-tu à la maison ?" },
    { w: "Yo pongo la mesa para cenar.", t: "Je mets la table pour le dîner." }
  ],
  tx: {
    ti: "Un día normal",
    b: `Todos los días <u>me levanto</u> a las siete y <u>desayuno</u> café con tostadas. Mi hermano <u>tiene</u> clase a las nueve, así que <u>sale</u> pronto. Yo <u>voy</u> al trabajo en metro y normalmente leo un libro en el viaje.<br><br>En la oficina <u>empiezo</u> a trabajar a las ocho y media. A mediodía mis compañeros y yo comemos en un bar pequeño; yo siempre <u>pido</u> el menú del día porque es barato. Por la tarde <u>vuelvo</u> a casa y <u>hago</u> deporte en el parque.<br><br>Los viernes mis amigos <u>quieren</u> cenar fuera, pero yo no <u>puedo</u> porque <u>tengo</u> que estudiar alemán. Mi profesora <u>dice</u> que ya <u>sé</u> mucho, pero yo <u>prefiero</u> estudiar más. Por la noche <u>duermo</u> muy bien.`
  },
  q: [
    ["¿Cómo va al trabajo?", ["En coche", "En metro", "A pie"], 1],
    ["¿Qué hace por la tarde?", ["Deporte", "Compras", "Nada"], 0],
    ["¿Por qué no cena con sus amigos?", ["Está enfermo", "Tiene que estudiar", "No quiere"], 1],
    ["¿Qué pide a mediodía?", ["Una ensalada", "El menú del día", "Un bocadillo"], 1]
  ],
  sp: [
    "¿Qué haces todos los días? Usa 'voy', 'tengo', 'hago'.",
    "¿Qué quieres hacer este fin de semana?",
    "¿Qué puedes hacer muy bien? ¿Qué no puedes hacer?",
    "¿A qué hora sales de casa?",
    "¿Qué dices cuando no sabes algo?",
    "¿Cuántas horas duermes normalmente? ¿A qué hora vuelves a casa?"
  ]
},

/* ───────────── 3. ESTAR + GERUNDIO ───────────── */
{
  id: "a2-ger",
  lvl: "A2",
  k: "g",
  t: "Estar + gerundio",
  fr: "Le présent progressif (être en train de)",
  ic: "🏃",
  th: `<div class="card"><h2>Estar + gerundio <span class="fr">(action en cours)</span></h2>
<p>Usamos <b>estar</b> (presente) + <b>gerundio</b> para hablar de una acción que pasa en este momento. <span class="fr">On emploie estar + gérondif pour une action en cours.</span></p>
<table><tr><th>verbo</th><th>gerundio</th><th>ejemplo</th></tr>
<tr><td>-AR hablar</td><td>habl<b class="reg">ando</b></td><td>Estoy hablando por teléfono. <span class="fr">Je parle au téléphone.</span></td></tr>
<tr><td>-ER comer</td><td>com<b class="reg">iendo</b></td><td>Estamos comiendo. <span class="fr">Nous mangeons.</span></td></tr>
<tr><td>-IR escribir</td><td>escrib<b class="reg">iendo</b></td><td>Ana está escribiendo. <span class="fr">Ana est en train d’écrire.</span></td></tr></table>
<table><tr><th>estar</th><th>+ gerundio</th></tr>
<tr><td>yo estoy</td><td rowspan="6">trabajando / leyendo / durmiendo…</td></tr>
<tr><td>tú estás</td></tr><tr><td>él/ella/usted está</td></tr><tr><td>nosotros estamos</td></tr><tr><td>vosotros estáis</td></tr><tr><td>ellos/ustedes están</td></tr></table>
<p>También para situaciones temporales: Este mes estoy trabajando en Lima. <span class="fr">Ce mois-ci, je travaille à Lima.</span></p></div>
<div class="card"><h3>Gerundios irregulares <span class="fr">(gérondifs irréguliers)</span></h3>
<table><tr><th>cambio</th><th>verbos</th></tr>
<tr><td>vocal + -iendo → <b>-yendo</b></td><td>leer → <span class="irr">leyendo</span>, oír → <span class="irr">oyendo</span>, ir → <span class="irr">yendo</span>, traer → <span class="irr">trayendo</span>, construir → <span class="irr">construyendo</span></td></tr>
<tr><td>e → i</td><td>decir → <span class="irr">diciendo</span>, pedir → <span class="irr">pidiendo</span>, servir → <span class="irr">sirviendo</span>, sentir → <span class="irr">sintiendo</span>, venir → <span class="irr">viniendo</span></td></tr>
<tr><td>o → u</td><td>dormir → <span class="irr">durmiendo</span>, morir → <span class="irr">muriendo</span>, poder → <span class="irr">pudiendo</span></td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> Si la raíz termina en vocal (<i>le-er, o-ír</i>), la <i>i</i> se convierte en <i>y</i>: leyendo. <span class="fr">Si le radical se termine par une voyelle, -iendo devient -yendo.</span></div>
<p>Pronombres: <b>Me estoy duchando</b> = <b>Estoy duchándome</b>. <span class="fr">Je suis en train de me doucher. (Notez l’accent lorsque le pronom est attaché.)</span></p>
<p>🌎 España: <i>Estoy conduciendo</i>. Latinoamérica: <i>Estoy manejando</i>. <span class="fr">Je conduis.</span></p></div>
<div class="card"><h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Estoy leiendo. ✅ Estoy leyendo. <span class="fr">Je lis.</span><br>❌ Soy comiendo. ✅ Estoy comiendo. <span class="fr">Je mange.</span><br>❌ Mañana estoy viajando a Roma. ✅ Mañana viajo / voy a viajar a Roma. <span class="fr">Pour les projets futurs, l’espagnol emploie le présent ou « ir a ».</span><br>❌ Estoy teniendo un coche nuevo. ✅ Tengo un coche nuevo. <span class="fr">Les verbes comme tener, saber et querer ne s’emploient généralement pas avec -ando.</span></p></div>`,
  voc: [
    ["📖", "leyendo", "lecture"],
    ["😴", "durmiendo", "sommeil"],
    ["🗣️", "diciendo", "parole"],
    ["🍳", "cocinando", "cuisine"],
    ["🏃", "corriendo", "course"],
    ["🎧", "escuchando", "écoute"],
    ["✍️", "escribiendo", "écriture"],
    ["🍽️", "pidiendo", "commander / demander"],
    ["👂", "oyendo", "ouïe"],
    ["🚗", "conduciendo", "conduite"]
  ],
  ex: [
    { q: "Ahora mismo yo ___ la tele.", o: ["estoy viendo", "soy viendo", "estoy vendo"], a: 0, t: "En ce moment, je regarde la télévision." },
    { q: "El bebé está ___. ¡No hagas ruido!", o: ["dormiendo", "durmiendo", "duermendo"], a: 1, t: "Le bébé dort. Ne fais pas de bruit !" },
    { q: "¿Qué estás ___? — Una novela de García Márquez.", o: ["leyendo", "leiendo", "leendo"], a: 0, t: "Qu’est-ce que tu lis ? — Un roman de García Márquez." },
    { q: "Mis padres ___ en un restaurante ahora.", o: ["están cenando", "están cenado", "son cenando"], a: 0, t: "Mes parents dînent au restaurant en ce moment." },
    { q: "Nosotros ___ español este año. (estar + estudiar)", a: ["estamos estudiando"], t: "Cette année, nous étudions l’espagnol." },
    { q: "¿Qué ___ tú? No te oigo bien. (estar + decir)", a: ["estás diciendo"], t: "Qu’est-ce que tu dis ? Je ne t’entends pas bien." },
    { q: "El camarero está ___ la comida. (servir)", a: ["sirviendo"], t: "Le serveur sert le repas." },
    { q: "Ella está ___ un café. (pedir)", a: ["pidiendo"], t: "Elle commande un café." },
    { w: "¿Qué estás haciendo ahora mismo?", t: "Qu’est-ce que tu fais en ce moment ?" },
    { w: "Mi hermana está escribiendo un correo.", t: "Ma sœur écrit un courriel." },
    { w: "Los niños están jugando en el parque.", t: "Les enfants jouent dans le parc." },
    { w: "Me estoy duchando, te llamo luego.", t: "Je prends une douche, je t’appellerai plus tard." }
  ],
  tx: {
    ti: "Un domingo en casa",
    b: `Es domingo por la tarde y mi familia está en casa, en Guadalajara (México). Mi madre <u>está cocinando</u> pozole en la cocina y mi padre <u>está leyendo</u> el periódico en el sofá. Mi abuelo <u>está durmiendo</u> la siesta y ronca un poco.<br><br>Mi hermano Diego <u>está jugando</u> a los videojuegos con un amigo. Los dos <u>están gritando</u> mucho, y mi madre les <u>está diciendo</u>: «¡Más bajo, por favor!». Mi hermana pequeña <u>está viendo</u> dibujos animados.<br><br>¿Y yo? Yo <u>estoy escribiendo</u> este texto para mi clase de español. Este mes <u>estoy aprendiendo</u> muchas cosas nuevas. Ahora <u>está empezando</u> a llover y mi perro <u>está durmiendo</u> debajo de la mesa. ¡Qué tranquilo!`
  },
  q: [
    ["¿Qué está haciendo la madre?", ["Está leyendo", "Está cocinando", "Está durmiendo"], 1],
    ["¿Quién está durmiendo la siesta?", ["El abuelo", "El padre", "Diego"], 0],
    ["¿Para qué está escribiendo el texto?", ["Para un amigo", "Para su clase de español", "Para el periódico"], 1],
    ["¿Qué tiempo hace al final?", ["Hace sol", "Está empezando a llover", "Hace mucho frío"], 1]
  ],
  sp: [
    "¿Qué estás haciendo ahora mismo?",
    "¿Qué crees que está haciendo tu familia en este momento?",
    "¿Qué estás aprendiendo este año? ¿Qué libro o serie estás viendo?",
    "Mira por la ventana y describe qué está pasando en la calle.",
    "¿Qué crees que están haciendo tus amigos ahora?",
    "Un amigo te llama, pero no puedes hablar. Explícale por qué usando estar + gerundio."
  ]
},

/* ───────────── 4. PRETÉRITO PERFECTO ───────────── */
{
  id: "a2-perf",
  lvl: "A2",
  k: "g",
  t: "Pretérito perfecto",
  fr: "Le passé composé (he hablado)",
  ic: "✅",
  th: `<div class="card"><h2>Pretérito perfecto <span class="fr">(j’ai fait)</span></h2>
<p>Se forma con <b>haber</b> (presente) + <b>participio</b>. <span class="fr">Il se forme avec haber + le participe passé.</span></p>
<table><tr><th></th><th>haber</th><th>-AR hablar</th><th>-ER comer</th><th>-IR vivir</th></tr>
<tr><td>yo</td><td class="irr">he</td><td rowspan="6">habl<b class="reg">ado</b></td><td rowspan="6">com<b class="reg">ido</b></td><td rowspan="6">viv<b class="reg">ido</b></td></tr>
<tr><td>tú</td><td class="irr">has</td></tr>
<tr><td>él/ella/usted</td><td class="irr">ha</td></tr>
<tr><td>nosotros</td><td class="irr">hemos</td></tr>
<tr><td>vosotros</td><td>habéis</td></tr>
<tr><td>ellos/ustedes</td><td class="irr">han</td></tr></table>
<p>Hoy he comido con mi jefa. <span class="fr">Aujourd’hui, j’ai déjeuné avec mon patron.</span><br>¿Habéis vivido en el extranjero? <span class="fr">As-tu vécu à l’étranger ?</span></p></div>
<div class="card"><h3>Participios irregulares <span class="fr">(participes passés irréguliers)</span></h3>
<table><tr><th>infinitivo</th><th>participio</th><th>infinitivo</th><th>participio</th></tr>
<tr><td>hacer <i class="fr">faire</i></td><td class="irr">hecho</td><td>volver <i class="fr">revenir</i></td><td class="irr">vuelto</td></tr>
<tr><td>decir <i class="fr">dire</i></td><td class="irr">dicho</td><td>abrir <i class="fr">ouvrir</i></td><td class="irr">abierto</td></tr>
<tr><td>ver <i class="fr">voir</i></td><td class="irr">visto</td><td>romper <i class="fr">casser</i></td><td class="irr">roto</td></tr>
<tr><td>escribir <i class="fr">écrire</i></td><td class="irr">escrito</td><td>morir <i class="fr">mourir</i></td><td class="irr">muerto</td></tr>
<tr><td>poner <i class="fr">mettre</i></td><td class="irr">puesto</td><td>descubrir <i class="fr">découvrir</i></td><td class="irr">descubierto</td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> El participio no cambia nunca: <i>Ella ha comido</i> (no "ha comida"). Y no ponemos nada entre <i>haber</i> y el participio: <i>Ya lo he visto.</i> <span class="fr">Le participe ne change jamais et rien ne s’intercale entre haber et le participe.</span></div></div>
<div class="card"><h3>¿Cuándo lo usamos? <span class="fr">(quand l’emploie-t-on ?)</span></h3>
<p>Con tiempo que no ha terminado y con experiencias: <b>hoy, esta mañana, esta semana, este año, ya, todavía no, alguna vez, nunca, últimamente</b>.</p>
<p>Ya he terminado. <span class="fr">J’ai déjà terminé.</span><br>Todavía no hemos comprado los billetes. <span class="fr">Nous n’avons pas encore acheté les billets.</span><br>¿Has estado alguna vez en Cuba? <span class="fr">Es-tu déjà allé(e) à Cuba ?</span><br>Nunca he visto la nieve. <span class="fr">Je n’ai jamais vu la neige.</span></p>
<p>🌎 En gran parte de Latinoamérica se prefiere el indefinido: <i>¿Ya comiste?</i> (España: <i>¿Ya has comido?</i>). <span class="fr">Dans une grande partie de l’Amérique latine, on préfère ici le passé simple.</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ He hacido los deberes. ✅ He hecho los deberes. <span class="fr">J’ai fait mes devoirs.</span><br>❌ Ayer he ido al cine. ✅ Ayer fui al cine. <span class="fr">« Ayer » exige l’indefinido.</span><br>❌ He no visto la película. ✅ No he visto la película. <span class="fr">Je n’ai pas vu le film.</span><br>❌ Ellas han comidas. ✅ Ellas han comido. <span class="fr">Ils ont mangé.</span></p></div>`,
  voc: [
    ["✅", "ya", "déjà"],
    ["⏳", "todavía no", "pas encore"],
    ["❓", "alguna vez", "déjà"],
    ["🚫", "nunca", "jamais"],
    ["📅", "esta semana", "cette semaine"],
    ["🛠️", "hecho", "fait"],
    ["👀", "visto", "vu"],
    ["✍️", "escrito", "écrit"],
    ["💔", "roto", "cassé"],
    ["🔙", "vuelto", "revenir"]
  ],
  ex: [
    { q: "Esta mañana ___ café con leche.", o: ["he tomado", "ha tomado", "he tomada"], a: 0, t: "Ce matin, j’ai bu un café au lait." },
    { q: "¿___ alguna vez en México?", o: ["Has estado", "Has estada", "Ha estás"], a: 0, t: "Es-tu déjà allé(e) au Mexique ?" },
    { q: "Todavía no ___ los deberes.", o: ["he hacido", "he hecho", "he hago"], a: 1, t: "Je n’ai pas encore fait mes devoirs." },
    { q: "Hoy los niños ___ muy pronto.", o: ["se han levantado", "se ha levantado", "han se levantado"], a: 0, t: "Aujourd’hui, les enfants se sont levés très tôt." },
    { q: "¿Quién ___ la ventana? (romper)", a: ["ha roto"], t: "Qui a cassé la fenêtre ?" },
    { q: "Nosotros nunca ___ esa película. (ver)", a: ["hemos visto"], t: "Nous n’avons jamais vu ce film." },
    { q: "Ana ya ___ el correo. (escribir)", a: ["ha escrito"], t: "Ana a déjà écrit le courriel." },
    { q: "¿Qué ___ vosotros este fin de semana? (hacer)", a: ["habéis hecho"], t: "Qu’avez-vous fait ce week-end ?" },
    { w: "Esta semana he trabajado mucho.", t: "Cette semaine, j’ai beaucoup travaillé." },
    { w: "Todavía no hemos comprado los billetes.", t: "Nous n’avons pas encore acheté les billets." },
    { w: "¿Has estado alguna vez en Perú?", t: "Es-tu déjà allé(e) au Pérou ?" },
    { w: "Mis padres han vuelto de Italia.", t: "Mes parents sont revenus d’Italie." }
  ],
  tx: {
    ti: "Un correo de Carmen",
    b: `¡Hola, Marta! ¿Qué tal? Yo estoy muy bien. Esta semana <u>ha sido</u> muy intensa. <u>He empezado</u> un curso de cocina y <u>ya</u> <u>he aprendido</u> a hacer una tortilla de patatas perfecta. También <u>he visto</u> dos películas en el cine con mi primo Andrés.<br><br>Hoy <u>he tenido</u> un día un poco raro: esta mañana se me <u>ha roto</u> el móvil y no <u>he podido</u> llamar a nadie. Por eso te <u>he escrito</u> este correo desde el ordenador.<br><br>¿Y tú? ¿<u>Has terminado</u> ya los exámenes? ¿<u>Has estado</u> <u>alguna vez</u> en Valencia? Yo <u>todavía no</u> la <u>he visitado</u>, pero quiero ir en mayo. ¡Escríbeme pronto!<br><br>Un abrazo,<br>Carmen`
  },
  q: [
    ["¿Qué ha aprendido Carmen?", ["A hacer paella", "A hacer tortilla de patatas", "A bailar salsa"], 1],
    ["¿Con quién ha ido al cine?", ["Con su primo Andrés", "Con Marta", "Sola"], 0],
    ["¿Por qué escribe desde el ordenador?", ["Porque no está en casa", "Porque se le ha roto el móvil", "Porque está en clase"], 1],
    ["¿Ha visitado Carmen Valencia?", ["Sí, muchas veces", "Sí, esta semana", "No, todavía no"], 2]
  ],
  sp: [
    "¿Qué has hecho hoy desde que te has levantado?",
    "¿Has estado alguna vez en un país hispanohablante? ¿Dónde?",
    "Di tres cosas que ya has hecho esta semana y dos que todavía no has hecho.",
    "¿Cuál es la comida más rara que has probado alguna vez?",
    "¿Has leído un buen libro o has visto una buena serie últimamente? Cuéntalo.",
    "¿Qué cosa no has hecho nunca y quieres hacer?"
  ]
},

/* ───────────── 5. PRETÉRITO INDEFINIDO ───────────── */
{
  id: "a2-indef",
  lvl: "A2",
  k: "g",
  t: "Pretérito indefinido",
  fr: "Le passé simple (pretérito indefinido)",
  ic: "📜",
  th: `<div class="card"><h2>Pretérito indefinido <span class="fr">(passé simple : actions terminées)</span></h2>
<table><tr><th></th><th>-AR hablar</th><th>-ER comer</th><th>-IR vivir</th></tr>
<tr><td>yo</td><td>habl<b class="reg">é</b></td><td>com<b class="reg">í</b></td><td>viv<b class="reg">í</b></td></tr>
<tr><td>tú</td><td>habl<b class="reg">aste</b></td><td>com<b class="reg">iste</b></td><td>viv<b class="reg">iste</b></td></tr>
<tr><td>él/ella/usted</td><td>habl<b class="reg">ó</b></td><td>com<b class="reg">ió</b></td><td>viv<b class="reg">ió</b></td></tr>
<tr><td>nosotros</td><td>habl<b class="reg">amos</b></td><td>com<b class="reg">imos</b></td><td>viv<b class="reg">imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b class="reg">asteis</b></td><td>com<b class="reg">isteis</b></td><td>viv<b class="reg">isteis</b></td></tr>
<tr><td>ellos/ustedes</td><td>habl<b class="reg">aron</b></td><td>com<b class="reg">ieron</b></td><td>viv<b class="reg">ieron</b></td></tr></table>
<p>Cambios de ortografía en <i>yo</i>: llegar → <span class="irr">llegué</span>, buscar → <span class="irr">busqué</span>, empezar → <span class="irr">empecé</span>. Y leer → <span class="irr">leyó, leyeron</span>. <span class="fr">Les changements orthographiques préservent le son.</span></p>
<p>Ayer hablé con mi madre. <span class="fr">Hier, j’ai parlé à ma mère.</span><br>En 2010 vivimos en Quito. <span class="fr">En 2010, nous vivions à Quito.</span></p></div>
<div class="card"><h3>Irregulares clave <span class="fr">(principaux verbes irréguliers)</span></h3>
<p><b>ser / ir</b> (¡iguales!): <span class="irr">fui, fuiste, fue, fuimos, fuisteis, fueron</span></p>
<p>Otros irregulares: raíz nueva + <b class="reg">-e, -iste, -o, -imos, -isteis, -ieron</b> <span class="fr">(nouveau radical + ces terminaisons, sans accent)</span></p>
<table><tr><th>verbo</th><th>yo</th><th>tú</th><th>él/ella</th><th>nosotros</th><th>ellos</th></tr>
<tr><td>tener</td><td class="irr">tuve</td><td class="irr">tuviste</td><td class="irr">tuvo</td><td class="irr">tuvimos</td><td class="irr">tuvieron</td></tr>
<tr><td>estar</td><td class="irr">estuve</td><td class="irr">estuviste</td><td class="irr">estuvo</td><td class="irr">estuvimos</td><td class="irr">estuvieron</td></tr>
<tr><td>hacer</td><td class="irr">hice</td><td class="irr">hiciste</td><td class="irr">hizo</td><td class="irr">hicimos</td><td class="irr">hicieron</td></tr>
<tr><td>poder</td><td class="irr">pude</td><td class="irr">pudiste</td><td class="irr">pudo</td><td class="irr">pudimos</td><td class="irr">pudieron</td></tr>
<tr><td>poner</td><td class="irr">puse</td><td class="irr">pusiste</td><td class="irr">puso</td><td class="irr">pusimos</td><td class="irr">pusieron</td></tr>
<tr><td>venir</td><td class="irr">vine</td><td class="irr">viniste</td><td class="irr">vino</td><td class="irr">vinimos</td><td class="irr">vinieron</td></tr>
<tr><td>decir</td><td class="irr">dije</td><td class="irr">dijiste</td><td class="irr">dijo</td><td class="irr">dijimos</td><td class="irr">dijeron</td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> Los irregulares no llevan tilde: <i>tuve, hizo, vino</i>. <i>Fui</i> puede ser de <i>ser</i> o de <i>ir</i>: el contexto lo explica (Fui profesor / Fui a Lima). <span class="fr">Les formes irrégulières ne portent pas d’accent écrit ; « fui » = j’étais / je suis allé(e).</span></div></div>
<div class="card"><h3>Marcadores temporales <span class="fr">(expressions de temps)</span></h3>
<p><b>ayer, anoche, anteayer, el lunes pasado, la semana pasada, el año pasado, hace dos años, en 2010</b></p>
<p>Hace dos años fuimos a Cuba. <span class="fr">Il y a deux ans, nous sommes allés à Cuba.</span><br>La semana pasada no pude ir al gimnasio. <span class="fr">La semaine dernière, je n’ai pas pu aller à la salle de sport.</span></p>
<p>🌎 En Latinoamérica se usa también para el pasado reciente: <i>Hoy comí con mi jefe.</i> <span class="fr">En Amérique latine, on l’emploie aussi pour les actions d’aujourd’hui.</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Ayer he ido al médico. ✅ Ayer fui al médico. <span class="fr">Hier, je suis allé(e) chez le médecin.</span><br>❌ Él hació la cena. ✅ Él hizo la cena. <span class="fr">Il a préparé le dîner.</span><br>❌ Yo tení un perro. ✅ Yo tuve un perro. <span class="fr">J’avais un chien.</span><br>❌ Ellos dijieron. ✅ Ellos dijeron. <span class="fr">Ils ont dit.</span><br>❌ Ayer yo hable con Pepe. ✅ Ayer yo hablé con Pepe. <span class="fr">L’accent est important : hable ≠ hablé.</span></p></div>`,
  voc: [
    ["📅", "ayer", "hier"],
    ["🌙", "anoche", "hier soir"],
    ["🗓️", "el año pasado", "l’année dernière"],
    ["⏪", "hace dos años", "il y a deux ans"],
    ["✈️", "fui", "je suis allé(e) / j’étais"],
    ["🤲", "tuve", "j’avais"],
    ["🛠️", "hice", "j’ai fait"],
    ["🗣️", "dije", "j’ai dit"],
    ["🚶", "vine", "je suis venu(e)"],
    ["📦", "puse", "j’ai mis"]
  ],
  ex: [
    { q: "Ayer ___ al cine con mis amigos.", o: ["fui", "fue", "he ido"], a: 0, t: "Hier, je suis allé(e) au cinéma avec mes amis." },
    { q: "El año pasado Pedro ___ un viaje a Chile.", o: ["hizo", "hació", "hice"], a: 0, t: "L’année dernière, Pedro a fait un voyage au Chili." },
    { q: "En 2010 mis padres ___ en Buenos Aires.", o: ["vivieron", "vivió", "vivimos"], a: 0, t: "En 2010, mes parents vivaient à Buenos Aires." },
    { q: "¿Qué le ___ tú a Marta anoche?", o: ["dijiste", "diciste", "dijistes"], a: 0, t: "Qu’as-tu dit à Marta hier soir ?" },
    { q: "Anoche yo no ___ dormir bien. (poder)", a: ["pude"], t: "Hier soir, je n’ai pas bien dormi." },
    { q: "Ellos ___ a la fiesta en taxi. (venir)", a: ["vinieron"], t: "Ils sont venus à la fête en taxi." },
    { q: "¿Dónde ___ las llaves? (tú, poner)", a: ["pusiste"], t: "Où as-tu mis les clés ?" },
    { q: "La semana pasada nosotros ___ en Granada. (estar)", a: ["estuvimos"], t: "La semaine dernière, nous étions à Grenade." },
    { w: "Ayer llegué a casa muy tarde.", t: "Hier, je suis rentré(e) très tard." },
    { w: "El verano pasado fuimos a Cuba.", t: "L’été dernier, nous sommes allés à Cuba." },
    { w: "Mi abuela nació en un pueblo pequeño.", t: "Ma grand-mère est née dans un petit village." },
    { w: "¿Qué hiciste el fin de semana?", t: "Qu’as-tu fait ce week-end ?" }
  ],
  tx: {
    ti: "Un viaje a Perú",
    b: `El año pasado <u>fui</u> a Perú con mi amiga Sofía. <u>Llegamos</u> a Lima en julio y <u>estuvimos</u> allí tres días. <u>Comimos</u> ceviche en un restaurante del barrio de Miraflores y <u>visitamos</u> muchos museos.<br><br>Después <u>tomamos</u> un autobús a Cusco. El viaje <u>fue</u> muy largo, pero el paisaje <u>fue</u> espectacular. En Cusco <u>tuve</u> un pequeño problema: el segundo día no <u>pude</u> salir del hotel porque me <u>dolió</u> mucho la cabeza por la altura. Sofía me <u>hizo</u> un té de coca y al día siguiente <u>pude</u> salir sin problemas.<br><br>Finalmente <u>subimos</u> a Machu Picchu. Un guía muy simpático nos <u>dijo</u> que la ciudad se <u>construyó</u> en el siglo XV. ¡<u>Hicimos</u> cien fotos! <u>Volvimos</u> a España en agosto, cansadas pero muy felices.`
  },
  q: [
    ["¿Cuándo llegaron a Lima?", ["En julio", "En agosto", "En mayo"], 0],
    ["¿Qué comieron en Lima?", ["Paella", "Ceviche", "Tacos"], 1],
    ["¿Por qué no pudo salir del hotel?", ["Porque llovió", "Porque le dolió la cabeza", "Porque perdió el pasaporte"], 1],
    ["¿Qué les dijo el guía?", ["Que Machu Picchu se construyó en el siglo XV", "Que el hotel cerró", "Que el autobús llegó tarde"], 0]
  ],
  sp: [
    "¿Qué hiciste ayer por la tarde?",
    "Cuenta tu último viaje: ¿adónde fuiste, con quién y qué hiciste?",
    "¿Dónde estuviste el fin de semana pasado?",
    "¿Qué pasó en tu vida en un año importante (por ejemplo, en 2020)?",
    "¿Cuándo fue la última vez que comiste en un restaurante? ¿Qué pediste?",
    "Cuenta una anécdota divertida: ¿qué te pasó y qué dijiste?"
  ]
},

/* ───────────── 6. PRETÉRITO IMPERFECTO ───────────── */
{
  id: "a2-imperf",
  lvl: "A2",
  k: "g",
  t: "Pretérito imperfecto",
  fr: "L’imparfait (habitude ou action en cours dans le passé)",
  ic: "🕰️",
  th: `<div class="card"><h2>Pretérito imperfecto <span class="fr">(habitude ou action en cours dans le passé)</span></h2>
<table><tr><th></th><th>-AR jugar</th><th>-ER comer</th><th>-IR vivir</th></tr>
<tr><td>yo</td><td>jug<b class="reg">aba</b></td><td>com<b class="reg">ía</b></td><td>viv<b class="reg">ía</b></td></tr>
<tr><td>tú</td><td>jug<b class="reg">abas</b></td><td>com<b class="reg">ías</b></td><td>viv<b class="reg">ías</b></td></tr>
<tr><td>él/ella/usted</td><td>jug<b class="reg">aba</b></td><td>com<b class="reg">ía</b></td><td>viv<b class="reg">ía</b></td></tr>
<tr><td>nosotros</td><td>jug<b class="reg">ábamos</b></td><td>com<b class="reg">íamos</b></td><td>viv<b class="reg">íamos</b></td></tr>
<tr><td>vosotros</td><td>jug<b class="reg">abais</b></td><td>com<b class="reg">íais</b></td><td>viv<b class="reg">íais</b></td></tr>
<tr><td>ellos/ustedes</td><td>jug<b class="reg">aban</b></td><td>com<b class="reg">ían</b></td><td>viv<b class="reg">ían</b></td></tr></table>
<h3>Solo 3 irregulares <span class="fr">(seulement trois verbes irréguliers)</span></h3>
<table><tr><th></th><th>ser</th><th>ir</th><th>ver</th></tr>
<tr><td>yo</td><td class="irr">era</td><td class="irr">iba</td><td class="irr">veía</td></tr>
<tr><td>tú</td><td class="irr">eras</td><td class="irr">ibas</td><td class="irr">veías</td></tr>
<tr><td>él/ella</td><td class="irr">era</td><td class="irr">iba</td><td class="irr">veía</td></tr>
<tr><td>nosotros</td><td class="irr">éramos</td><td class="irr">íbamos</td><td class="irr">veíamos</td></tr>
<tr><td>vosotros</td><td class="irr">erais</td><td class="irr">ibais</td><td class="irr">veíais</td></tr>
<tr><td>ellos</td><td class="irr">eran</td><td class="irr">iban</td><td class="irr">veían</td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> La forma de <i>yo</i> y de <i>él/ella</i> es igual (yo jugaba / él jugaba). Usa el pronombre si no está claro. <span class="fr">Les formes de yo et él sont identiques ; ajoutez le pronom si nécessaire.</span></div></div>
<div class="card"><h3>¿Para qué sirve? <span class="fr">(à quoi sert-il ?)</span></h3>
<p>1️⃣ <b>Hábitos en el pasado:</b> De niño jugaba al fútbol todos los días. <span class="fr">Enfant, je jouais au football tous les jours.</span><br>2️⃣ <b>Descripciones:</b> La casa era grande y tenía un jardín. Hacía sol. <span class="fr">La maison était grande et avait un jardin. Il faisait beau.</span><br>3️⃣ <b>Edad y hora:</b> Tenía diez años. Eran las ocho. <span class="fr">J’avais dix ans. Il était huit heures.</span><br>4️⃣ <b>Acción en desarrollo</b> (+ indefinido): Leía cuando sonó el teléfono. <span class="fr">Je lisais quand le téléphone a sonné.</span></p>
<p>Marcadores: <b>antes, de niño/a, cuando era pequeño/a, siempre, todos los días, normalmente, a menudo, mientras</b>.</p>
<p>🌎 En Argentina y otros países se dice <i>de chico</i> = <i>de pequeño</i>. <span class="fr">« De chico » = quand on était enfant.</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Cuando fui niño, vivía en Quito. ✅ Cuando era niño, vivía en Quito. <span class="fr">Quand j’étais enfant, je vivais à Quito.</span><br>❌ Nosotros jugabamos. ✅ Nosotros jugábamos. <span class="fr">N’oubliez pas l’accent.</span><br>❌ Antes yo veo mucha tele. ✅ Antes yo veía mucha tele. <span class="fr">Je regardais beaucoup la télévision.</span><br>❌ Ayer era a la playa. ✅ Ayer fui a la playa. <span class="fr">Une action terminée → indefinido.</span></p></div>`,
  voc: [
    ["👶", "de niño", "enfant"],
    ["🔁", "antes", "avant, autrefois"],
    ["🧒", "era", "j’étais / il était"],
    ["🚶", "iba", "j’allais / il allait"],
    ["📺", "veía", "je regardais / il regardait"],
    ["🏖️", "todos los veranos", "chaque été"],
    ["⏱️", "mientras", "pendant que"],
    ["🏡", "vivía", "j’habitais / il habitait"],
    ["⚽", "jugaba", "je jouais / il jouait"]
  ],
  ex: [
    { q: "Cuando ___ niño, vivía en Quito.", o: ["era", "fui", "soy"], a: 0, t: "Quand j’étais enfant, je vivais à Quito." },
    { q: "Antes nosotros ___ a la playa todos los veranos.", o: ["íbamos", "ibamos", "vamos"], a: 0, t: "Nous allions à la plage tous les étés." },
    { q: "Mi abuela ___ el pelo largo y los ojos verdes.", o: ["tenía", "tenió", "tiene"], a: 0, t: "Ma grand-mère avait les cheveux longs et les yeux verts." },
    { q: "Yo leía cuando ___ el teléfono.", o: ["sonó", "sonía", "suena"], a: 0, t: "Je lisais quand le téléphone a sonné." },
    { q: "De pequeños, mis hermanos y yo ___ mucha televisión. (ver)", a: ["veíamos"], t: "Enfants, mes frères et sœurs et moi regardions beaucoup la télévision." },
    { q: "Antes tú ___ en Bogotá, ¿verdad? (vivir)", a: ["vivías"], t: "Tu habitais à Bogotá, n’est-ce pas ?" },
    { q: "La casa de mis abuelos ___ muy grande. (ser)", a: ["era"], t: "La maison de mes grands-parents était très grande." },
    { q: "Eran las diez y ___ mucho frío. (hacer)", a: ["hacía"], t: "Il était dix heures et il faisait très froid." },
    { w: "Cuando era pequeña, tenía un perro.", t: "Quand j’étais petite, j’avais un chien." },
    { w: "Todos los domingos comíamos en casa de mi abuela.", t: "Tous les dimanches, nous mangions chez ma grand-mère." },
    { w: "Mi padre trabajaba en un banco.", t: "Mon père travaillait dans une banque." },
    { w: "Mientras cocinaba, escuchaba la radio.", t: "Pendant que je cuisinais, j’écoutais la radio." }
  ],
  tx: {
    ti: "Mi infancia en Valparaíso",
    b: `Cuando <u>era</u> niño, <u>vivía</u> con mis padres y mi hermana en Valparaíso, en Chile. Nuestra casa <u>era</u> pequeña y azul, y <u>estaba</u> en un cerro con vistas al mar. Desde mi ventana <u>veía</u> los barcos del puerto.<br><br>Todos los días <u>iba</u> al colegio a pie con mi hermana. Por las tardes <u>jugábamos</u> al fútbol en la calle con los vecinos y mi madre siempre nos <u>llamaba</u> para merendar: <u>había</u> pan con palta y leche. Mi padre <u>trabajaba</u> en el puerto y <u>volvía</u> a casa muy cansado, pero los sábados nos <u>llevaba</u> a la playa.<br><br>En invierno <u>llovía</u> mucho y <u>hacía</u> frío, así que <u>leíamos</u> cómics en casa. <u>Éramos</u> una familia sencilla, pero muy feliz.`
  },
  q: [
    ["¿Cómo era la casa?", ["Grande y blanca", "Pequeña y azul", "Antigua y fea"], 1],
    ["¿Cómo iba al colegio?", ["En autobús", "En coche", "A pie"], 2],
    ["¿Dónde trabajaba su padre?", ["En el puerto", "En un banco", "En un colegio"], 0],
    ["¿Qué hacían en invierno?", ["Iban a la playa", "Leían cómics en casa", "Jugaban en la calle"], 1]
  ],
  sp: [
    "¿Dónde vivías cuando eras niño/a? ¿Cómo era tu casa?",
    "¿A qué jugabas de pequeño/a? ¿Con quién?",
    "¿Cómo era tu colegio? ¿Quién era tu profesor/a favorito/a?",
    "¿Qué hacías en verano cuando eras pequeño/a?",
    "Compara tu vida de antes con tu vida de ahora: ¿qué hacías antes que ya no haces?",
    "Describe a una persona importante de tu infancia: ¿cómo era?"
  ]
},

/* ───────────── 7. PRONOMBRES DE OBJETO ───────────── */
{
  id: "a2-pron",
  lvl: "A2",
  k: "g",
  t: "Pronombres de objeto directo e indirecto",
  fr: "Les pronoms compléments directs et indirects",
  ic: "🎁",
  th: `<div class="card"><h2>Pronombres de objeto <span class="fr">(pronoms compléments : me, le, la, les…)</span></h2>
<table><tr><th>persona</th><th>directo (¿qué? ¿a quién?)</th><th>indirecto (¿a quién?)</th></tr>
<tr><td>yo</td><td>me</td><td>me</td></tr>
<tr><td>tú</td><td>te</td><td>te</td></tr>
<tr><td>él/ella/usted</td><td><b class="reg">lo / la</b></td><td><b class="reg">le</b></td></tr>
<tr><td>nosotros</td><td>nos</td><td>nos</td></tr>
<tr><td>vosotros</td><td>os</td><td>os</td></tr>
<tr><td>ellos/ellas/ustedes</td><td><b class="reg">los / las</b></td><td><b class="reg">les</b></td></tr></table>
<p><b>Directo</b> = la cosa o persona que recibe la acción. <span class="fr">Le complément direct = qui / quoi.</span><br>¿Tienes el libro? Sí, <b>lo</b> tengo. <span class="fr">Tu as le livre ? Oui, je l’ai.</span><br>¿Ves a María? Sí, <b>la</b> veo. <span class="fr">Tu vois María ? Oui, je la vois.</span><br>Compro las flores → <b>Las</b> compro. <span class="fr">J’achète les fleurs → Je les achète.</span></p>
<p><b>Indirecto</b> = la persona que recibe algo. <span class="fr">Le complément indirect = à qui / pour qui.</span><br><b>Le</b> doy un regalo a mi madre. <span class="fr">J’offre un cadeau à ma mère.</span><br><b>Les</b> escribo a mis abuelos. <span class="fr">J’écris à mes grands-parents.</span></p></div>
<div class="card"><h3>Dos pronombres juntos <span class="fr">(deux pronoms ensemble)</span></h3>
<p>Orden: <b>indirecto + directo</b>. <span class="fr">Ordre : indirect + direct.</span><br>Me das el libro → <b>Me lo</b> das. <span class="fr">Tu me le donnes.</span></p>
<p><b class="irr">le / les + lo, la, los, las → se lo, se la, se los, se las</b><br>Le doy el libro a Juan → <b>Se lo</b> doy. <span class="fr">Je le lui donne.</span><br>Les envío las fotos → <b>Se las</b> envío. <span class="fr">Je les leur envoie.</span></p>
<div class="tip"><b>Truco / Astuce :</b> "Le lo" no existe en español. Cuando ves <i>le + lo</i>, cambia <i>le</i> por <i>se</i>: <b>se lo</b>. <span class="fr">« Le lo » n’existe jamais : il devient « se lo ».</span></div></div>
<div class="card"><h3>¿Dónde va el pronombre? <span class="fr">(position)</span></h3>
<table><tr><th>caso</th><th>ejemplo</th></tr>
<tr><td>verbo conjugado: antes</td><td><b>Lo</b> compro. <span class="fr">Je l’achète.</span></td></tr>
<tr><td>infinitivo: antes o detrás</td><td><b>Lo</b> voy a comprar. = Voy a comprar<b>lo</b>. <span class="fr">Je vais l’acheter.</span></td></tr>
<tr><td>gerundio: antes o detrás</td><td><b>La</b> estoy leyendo. = Estoy leyéndo<b>la</b>. <span class="fr">Je suis en train de le lire.</span></td></tr>
<tr><td>imperativo afirmativo: detrás</td><td>¡Cómpra<b>lo</b>! <span class="fr">Achète-le !</span></td></tr></table>
<p>🇪🇸 En España es normal usar <i>le</i> para un hombre: <i>Le vi ayer</i> (= <i>Lo vi ayer</i>, más común en Latinoamérica). <span class="fr">« Leísmo » : en Espagne, « le » remplace souvent le complément direct masculin.</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Quiero lo comprar. ✅ Lo quiero comprar. / Quiero comprarlo. <span class="fr">Je veux l’acheter.</span><br>❌ Le lo doy. ✅ Se lo doy. <span class="fr">Je le lui donne.</span><br>❌ ¿La paella? Lo como mañana. ✅ ¿La paella? La como mañana. <span class="fr">Paella est féminin.</span><br>❌ Estoy leyendola. ✅ Estoy leyéndola. <span class="fr">Ajoutez l’accent.</span></p></div>`,
  voc: [
    ["📕", "lo", "le (complément direct)"],
    ["🌸", "la", "la (complément direct)"],
    ["📚", "los", "les (masculin, complément direct)"],
    ["🍎", "las", "les (féminin, complément direct)"],
    ["🎁", "le", "lui (complément indirect)"],
    ["👨‍👩‍👧", "les", "leur (complément indirect)"],
    ["🔁", "se lo", "le / la / les lui / leur"],
    ["🤲", "dar", "donner"],
    ["✉️", "enviar", "envoyer"]
  ],
  ex: [
    { q: "¿Tienes las llaves? Sí, ___ tengo.", o: ["las", "los", "les"], a: 0, t: "Tu as les clés ? Oui, je les ai." },
    { q: "¿Has visto a Pedro? No, no ___ he visto.", o: ["lo", "la", "les"], a: 0, t: "Tu as vu Pedro ? Non, je ne l’ai pas vu. (En Espagne, « le he visto » est aussi courant.)" },
    { q: "Le doy el regalo a Ana. → ___ doy.", o: ["Se lo", "Le lo", "Lo le"], a: 0, t: "Je donne le cadeau à Ana. → Je le lui donne." },
    { q: "Voy a comprar el pan. → Voy a ___.", o: ["comprarlo", "lo comprar", "comprarla"], a: 0, t: "Je vais acheter le pain. → Je vais l’acheter." },
    { q: "¿La película? Sí, ya ___ he visto. (pronombre)", a: ["la"], t: "Le film ? Oui, je l’ai déjà vu." },
    { q: "Escribo un correo a mis padres. → ___ escribo un correo. (pronombre)", a: ["les"], t: "J’écris un courriel à mes parents. → Je leur écris un courriel." },
    { q: "¿Me dejas tu boli? Sí, te ___ dejo. (pronombre)", a: ["lo"], t: "Tu me prêteras ton stylo ? Oui, je te le prêterai." },
    { q: "¿El libro? Se ___ he dado a Luis. (pronombre)", a: ["lo"], t: "Le livre ? Je l’ai donné à Luis." },
    { w: "No te lo puedo contar.", t: "Je ne peux pas te le dire." },
    { w: "¿Me lo puedes repetir, por favor?", t: "Peux-tu me le répéter, s’il te plaît ?" },
    { w: "Quiero regalárselo a mi hermana.", t: "Je veux l’offrir à ma sœur." },
    { w: "Mis abuelos nos llaman cada domingo.", t: "Mes grands-parents nous appellent tous les dimanches." }
  ],
  tx: {
    ti: "El cumpleaños de Marta",
    b: `Mañana es el cumpleaños de mi hermana Marta. Ayer fui a una librería del centro de Madrid. Vi un libro de recetas mexicanas muy bonito y <u>lo</u> compré enseguida, porque a Marta <u>le</u> encanta cocinar. La dependienta <u>me</u> preguntó: «¿<u>Se lo</u> envuelvo?». <u>Le</u> dije que sí, y <u>me lo</u> envolvió con un papel rojo precioso.<br><br>También quiero dar<u>le</u> unas flores. Mis padres siempre <u>le</u> compran rosas, así que yo voy a comprar<u>le</u> girasoles. <u>Los</u> voy a recoger mañana por la mañana en la floristería de mi barrio.<br><br>Mis primos de Buenos Aires no pueden venir, pero <u>les</u> he enviado fotos de la fiesta del año pasado. Ellos <u>las</u> han visto y <u>me</u> han escrito: «¡Queremos una foto de la tarta!».`
  },
  q: [
    ["¿Qué regalo compró en la librería?", ["Una novela", "Un libro de recetas", "Un diccionario"], 1],
    ["¿De qué color es el papel del regalo?", ["Azul", "Rojo", "Verde"], 1],
    ["¿Qué flores va a comprar?", ["Rosas", "Girasoles", "Tulipanes"], 1],
    ["¿Qué quieren los primos?", ["Una foto de la tarta", "Un regalo", "Ir a la fiesta"], 0]
  ],
  sp: [
    "¿Qué regalo le hiciste a tu mejor amigo/a en su último cumpleaños? ¿Cuándo se lo diste?",
    "¿Llamas mucho a tus padres o abuelos? ¿Cuándo los llamas?",
    "¿Dónde compras la ropa? ¿La compras por internet?",
    "¿Qué le dices a un amigo cuando está triste?",
    "Tu amigo te pide tu coche (o carro). ¿Se lo dejas? ¿Por qué?",
    "Explica cómo tomas el café o el té: ¿lo tomas con leche? ¿Con azúcar?"
  ]
},

/* ───────────── 8. COMPARATIVOS Y SUPERLATIVOS ───────────── */
{
  id: "a2-comp",
  lvl: "A2",
  k: "g",
  t: "Comparativos y superlativos",
  fr: "Les comparatifs et les superlatifs",
  ic: "📏",
  th: `<div class="card"><h2>Comparativos <span class="fr">(comparer des choses et des personnes)</span></h2>
<table><tr><th>tipo</th><th>estructura</th><th>ejemplo</th></tr>
<tr><td>➕ superioridad</td><td><b class="reg">más</b> + adjetivo/nombre + <b class="reg">que</b></td><td>Madrid es más grande que Sevilla. <span class="fr">Madrid est plus grande que Séville.</span></td></tr>
<tr><td>➖ inferioridad</td><td><b class="reg">menos</b> + adjetivo/nombre + <b class="reg">que</b></td><td>El tren es menos caro que el avión. <span class="fr">Le train coûte moins cher que l’avion.</span></td></tr>
<tr><td>🟰 igualdad (adjetivo/adverbio)</td><td><b class="reg">tan</b> + adjetivo + <b class="reg">como</b></td><td>Ana es tan alta como Luis. <span class="fr">Ana est aussi grande que Luis.</span></td></tr>
<tr><td>🟰 igualdad (nombre)</td><td><b class="reg">tanto/a/os/as</b> + nombre + <b class="reg">como</b></td><td>Tengo tantos libros como tú. <span class="fr">J’ai autant de livres que toi.</span></td></tr>
<tr><td>🟰 igualdad (verbo)</td><td>verbo + <b class="reg">tanto como</b></td><td>Trabajo tanto como mi hermano. <span class="fr">Je travaille autant que mon frère.</span></td></tr></table>
<p>Con números: <b>más de / menos de</b>. Hay más de cien personas. <span class="fr">Il y a plus de cent personnes.</span></p></div>
<div class="card"><h3>Comparativos irregulares <span class="fr">(comparatifs irréguliers)</span></h3>
<table><tr><th>adjetivo / adverbio</th><th>comparativo</th><th>ejemplo</th></tr>
<tr><td>bueno / bien</td><td class="irr">mejor</td><td>Este café es mejor que el otro. <span class="fr">Ce café est meilleur que l’autre.</span></td></tr>
<tr><td>malo / mal</td><td class="irr">peor</td><td>Hoy el tiempo está peor que ayer. <span class="fr">Le temps est pire aujourd’hui qu’hier.</span></td></tr>
<tr><td>grande (edad)</td><td class="irr">mayor</td><td>Mi hermano es mayor que yo. <span class="fr">Mon frère est plus âgé que moi.</span></td></tr>
<tr><td>pequeño (edad)</td><td class="irr">menor</td><td>Laura es menor que Pablo. <span class="fr">Laura est plus jeune que Pablo.</span></td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> Para el tamaño usamos <i>más grande / más pequeño</i>; para la edad, <i>mayor / menor</i>. ¡Y nunca "más bueno" para comparar calidad: <i>mejor</i>! <span class="fr">La taille → más grande ; l’âge → mayor ; la qualité → mejor.</span></div></div>
<div class="card"><h3>Superlativos <span class="fr">(le plus…, très…)</span></h3>
<p><b>el / la / los / las</b> (+ nombre) + <b>más / menos</b> + adjetivo + <b>de</b><br>El Aconcagua es la montaña más alta de América. <span class="fr">L’Aconcagua est la plus haute montagne des Amériques.</span><br>Es el mejor restaurante de la ciudad. <span class="fr">C’est le meilleur restaurant de la ville.</span></p>
<p><b>Superlativo absoluto: -ísimo</b> = muy + adjetivo<br>caro → <span class="irr">carísimo</span>, fácil → <span class="irr">facilísimo</span>, grande → <span class="irr">grandísimo</span>, rico → <span class="irr">riquísimo</span> (c → qu), largo → <span class="irr">larguísimo</span> (g → gu), feliz → <span class="irr">felicísimo</span> (z → c)<br>La comida está buenísima. <span class="fr">La nourriture est vraiment bonne.</span></p>
<h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Es más bueno que el otro. ✅ Es mejor que el otro. <span class="fr">C’est mieux que l’autre.</span><br>❌ Es tan alto que yo. ✅ Es tan alto como yo. <span class="fr">Il est aussi grand que moi.</span><br>❌ Tengo más que veinte años. ✅ Tengo más de veinte años. <span class="fr">J’ai plus de vingt ans.</span><br>❌ La ciudad más bonita en España. ✅ La ciudad más bonita de España. <span class="fr">La plus belle ville d’Espagne.</span><br>❌ Es muy carísimo. ✅ Es carísimo. <span class="fr">C’est vraiment cher.</span></p></div>`,
  voc: [
    ["⬆️", "más", "plus"],
    ["⬇️", "menos", "moins / moins nombreux"],
    ["🟰", "tan… como", "aussi… que"],
    ["👍", "mejor", "meilleur(e)"],
    ["👎", "peor", "pire"],
    ["👴", "mayor", "plus âgé(e)"],
    ["👶", "menor", "plus jeune"],
    ["🏆", "el mejor", "le / la meilleur(e)"],
    ["🤩", "buenísimo", "très bon / très bien"],
    ["🏔️", "el más alto", "le / la plus grand(e)"]
  ],
  ex: [
    { q: "Mi hermano tiene 20 años y yo 25. Él es ___ que yo.", o: ["menor", "mayor", "peor"], a: 0, t: "Mon frère a 20 ans et moi, 25. Il est plus jeune que moi." },
    { q: "Esta paella es ___ que la de ayer.", o: ["mejor", "más mejor", "bien"], a: 0, t: "Cette paella est meilleure que celle d’hier." },
    { q: "Lucía es tan alta ___ su madre.", o: ["como", "que", "de"], a: 0, t: "Lucía est aussi grande que sa mère." },
    { q: "El Everest es la montaña más alta ___ mundo.", o: ["del", "en el", "que el"], a: 0, t: "L’Everest est la plus haute montagne du monde." },
    { q: "El avión es ___ rápido que el tren. (+)", a: ["más"], t: "L’avion est plus rapide que le train." },
    { q: "Yo no tengo ___ dinero como tú. (=)", a: ["tanto"], t: "Je n’ai pas autant d’argent que toi." },
    { q: "Hay ___ cincuenta personas en la fiesta. (+, con número)", a: ["más de"], t: "Il y a plus de cinquante personnes à la fête." },
    { q: "Este examen es muy fácil, es ___. (fácil + -ísimo)", a: ["facilísimo"], t: "Cet examen est très facile, c’est un jeu d’enfant." },
    { w: "Barcelona es más grande que Valencia.", t: "Barcelone est plus grande que Valence." },
    { w: "Mi hermana es la mayor de la familia.", t: "Ma sœur est la plus âgée de la famille." },
    { w: "Este restaurante es el mejor del barrio.", t: "Ce restaurant est le meilleur du quartier." },
    { w: "Hoy hace menos calor que ayer.", t: "Aujourd’hui, il fait moins chaud qu’hier." }
  ],
  tx: {
    ti: "¿Ciudad o pueblo?",
    b: `Me llamo Andrés y vivo en Bogotá, pero mis abuelos viven en Villa de Leyva, un pueblo pequeño de Colombia. Bogotá es mucho <u>más grande que</u> Villa de Leyva y tiene <u>más de</u> siete millones de habitantes. En la capital hay <u>más</u> trabajo y <u>más</u> cines, pero también hay <u>más</u> tráfico y ruido.<br><br>En el pueblo la vida es <u>más tranquila</u> y la gente es <u>tan amable como</u> en mi barrio, o incluso <u>más</u>. El aire es <u>mejor</u> y la comida de mi abuela está <u>riquísima</u>. Para mí, su ajiaco es <u>el mejor de</u> Colombia.<br><br>Mi hermana Laura es <u>menor que</u> yo y prefiere la ciudad, porque es <u>más divertida</u>. Yo creo que el pueblo es <u>el lugar más bonito del</u> mundo, aunque no tiene <u>tantas</u> tiendas <u>como</u> Bogotá.`
  },
  q: [
    ["¿Dónde viven los abuelos de Andrés?", ["En Bogotá", "En Villa de Leyva", "En Medellín"], 1],
    ["¿Qué hay más en la capital?", ["Tranquilidad", "Tráfico y ruido", "Aire limpio"], 1],
    ["¿Qué piensa Andrés del ajiaco de su abuela?", ["Que es el mejor de Colombia", "Que es peor que el de Bogotá", "Que es demasiado picante"], 0],
    ["¿Quién es Laura?", ["La abuela", "La hermana mayor", "La hermana menor"], 2]
  ],
  sp: [
    "Compara tu ciudad con otra ciudad que conoces: ¿cuál es más grande, más cara, más bonita?",
    "¿Eres mayor o menor que tus hermanos o primos? Compárate con ellos.",
    "¿Cuál es el mejor restaurante de tu ciudad? ¿Por qué?",
    "¿Qué es mejor: vivir en el campo o en la ciudad? Da tres razones.",
    "Describe el día más bonito de tu vida.",
    "¿Quién es la persona más divertida que conoces? ¿Es tan divertida como tú?"
  ]
}

);
