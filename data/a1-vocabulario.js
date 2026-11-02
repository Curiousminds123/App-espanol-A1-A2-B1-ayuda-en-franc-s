/* Camino al Español · Nivel A1 · contenido */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "a1-saludos",
  lvl: "A1",
  k: "v",
  t: "Saludos y presentaciones",
  fr: "Salutations et présentations",
  ic: "👋",
  th: `<div class="card"><h2>Saludar y despedirse <span class="fr">(saluer et prendre congé)</span></h2>
<table><tr><th>Español</th><th>Français</th><th>¿Cuándo? <span class="fr">(quand ?)</span></th></tr>
<tr><td>¡Hola!</td><td>Bonjour ! / Salut !</td><td>siempre <span class="fr">(toujours)</span></td></tr>
<tr><td>Buenos días</td><td>bonjour</td><td>por la mañana, hasta la comida <span class="fr">(jusqu’au déjeuner)</span></td></tr>
<tr><td>Buenas tardes</td><td>bon après-midi / bonsoir</td><td>por la tarde <span class="fr">(après-midi)</span></td></tr>
<tr><td>Buenas noches</td><td>bonsoir / bonne nuit</td><td>por la noche <span class="fr">(la nuit)</span></td></tr>
<tr><td>Adiós</td><td>au revoir</td><td>siempre</td></tr>
<tr><td>Hasta luego / Hasta mañana</td><td>à plus tard / à demain</td><td>siempre</td></tr>
<tr><td>Chao / Chau</td><td>salut</td><td>informal, muy común en Latinoamérica</td></tr></table>
<p>¿Qué tal? <span class="fr">Comment vas-tu ? / Ça va ?</span> — Bien, gracias. ¿Y tú? <span class="fr">Bien, merci. Et toi ?</span><br>¿Cómo estás? <span class="fr">Comment vas-tu ?</span> — Muy bien. / Regular. / Mal. <span class="fr">Très bien. / Comme ci, comme ça. / Mal.</span></p></div>
<div class="card"><h3>Presentarse <span class="fr">(se présenter)</span></h3>
<p>Me llamo Lucía. <span class="fr">Je m’appelle Lucía.</span><br>Soy de México. <span class="fr">Je viens du Mexique.</span><br>Tengo veinte años. <span class="fr">J’ai vingt ans.</span><br>Vivo en Madrid. <span class="fr">J’habite à Madrid.</span><br>Te presento a mi amigo Pablo. <span class="fr">Je te présente mon ami Pablo.</span><br>¡Mucho gusto! / ¡Encantado! / ¡Encantada! <span class="fr">Ravi(e) de te rencontrer !</span></p>
<div class="tip"><b>Truco / Astuce :</b> Un homme dit <b>encantado</b>, une femme dit <b>encantada</b>. <b>Mucho gusto</b> convient à tout le monde. En Espagne, on se salue souvent avec <b>dos besos</b> 😘😘 (deux bises sur les joues) ; dans une grande partie de l’Amérique latine, avec une seule bise.</div></div>
<div class="card"><h3>Tú o usted <span class="fr">(tutoiement et vouvoiement)</span></h3>
<table><tr><th></th><th>Informal (tú)</th><th>Formal (usted)</th></tr>
<tr><td>Prénom</td><td>¿Cómo te llamas?</td><td>¿Cómo se llama?</td></tr>
<tr><td>Origine</td><td>¿De dónde eres?</td><td>¿De dónde es?</td></tr>
<tr><td>Comment vas-tu ?</td><td>¿Cómo estás?</td><td>¿Cómo está?</td></tr></table>
<p>On emploie <b>tú</b> avec les amis, la famille et les jeunes. On utilise <b>usted</b> avec les personnes âgées, au travail ou avec des inconnus. En Amérique latine, <b>usted</b> est plus courant qu’en Espagne. Pour s’adresser à un groupe : <b>vosotros</b> (Espagne, informel) / <b>ustedes</b> (formel, et partout en Amérique latine).</p>
<h3>Cortesía <span class="fr">(formules de politesse)</span></h3>
<p>Por favor <span class="fr">s’il vous plaît</span> · Gracias <span class="fr">merci</span> · De nada <span class="fr">de rien</span> · Perdón / Disculpe <span class="fr">pardon / excusez-moi</span> · Lo siento <span class="fr">Je suis désolé(e)</span></p></div>`,
  voc: [
    ["👋", "hola", "bonjour"],
    ["🌅", "buenos días", "bonjour (le matin)"],
    ["🌇", "buenas tardes", "bon après-midi"],
    ["🌙", "buenas noches", "bonsoir / bonne nuit"],
    ["🚶", "adiós", "au revoir"],
    ["🔜", "hasta luego", "à plus tard"],
    ["🙏", "por favor", "s’il vous plaît"],
    ["💐", "gracias", "merci"],
    ["😊", "de nada", "de rien"],
    ["😔", "lo siento", "Je suis désolé(e)"],
    ["🤝", "mucho gusto", "ravi(e) de te rencontrer"],
    ["🏷️", "el nombre", "prénom"],
    ["🔤", "el apellido", "nom de famille"],
    ["🌎", "el país", "pays"],
    ["🧑‍🤝‍🧑", "el amigo / la amiga", "ami(e)"],
    ["🧓", "usted", "vous (vouvoiement)"],
    ["😘", "el beso", "bise"]
  ],
  ex: [
    { q: "Son las nueve de la mañana. Dices: «___».", o: ["Buenos días", "Buenas noches", "Buenas tardes"], a: 0, t: "Il est neuf heures du matin : bonjour." },
    { q: "—Gracias. —___.", o: ["De nada", "Lo siento", "Hasta luego"], a: 0, t: "Merci. — De rien." },
    { q: "Hablas con tu profesor mayor: «¿Cómo ___ usted?»", o: ["está", "estás", "estáis"], a: 0, t: "Comment allez-vous ? (formel : usted + está)" },
    { q: "Ana es una mujer. Dice: «¡___!»", o: ["Encantada", "Encantado", "Encantados"], a: 0, t: "Une femme dit « encantada »." },
    { q: "¿Cómo te ___? — Me llamo Diego.", a: ["llamas"], t: "Comment t’appelles-tu ? — Je m’appelle Diego." },
    { q: "¿De dónde ___? — Soy de Colombia. (ser, tú)", a: ["eres"], t: "D’où viens-tu ? — Je viens de Colombie." },
    { q: "—Adiós, hasta ___. (à plus tard)", a: ["luego"], t: "Au revoir, à plus tard." },
    { q: "Mucho ___. (ravi(e) de te rencontrer)", a: ["gusto"], t: "Ravi(e) de te rencontrer." },
    { w: "Me llamo Carmen y soy de Sevilla.", t: "Je m’appelle Carmen et je viens de Séville." },
    { w: "¿Cómo se llama usted, por favor?", t: "Comment vous appelez-vous, s’il vous plaît ? (formel)" },
    { w: "Te presento a mi amiga Sofía.", t: "Je te présente mon amie Sofía." },
    { w: "Bien, gracias. ¿Y tú?", t: "Bien, merci. Et toi ?" }
  ],
  tx: { ti: "El primer día de clase", b: `Es lunes y es el primer día de clase en una escuela de idiomas de Barcelona. La profesora entra y dice: «<u>¡Buenos días</u> a todos! <u>Me llamo</u> Marta y <u>soy de</u> Valencia».<br><br>Un chico levanta la mano: «<u>Hola</u>, me llamo Kenji. Soy de Japón y <u>tengo</u> veintidós <u>años</u>». A su lado, una chica dice: «Yo soy Amanda, de Brasil. <u>Mucho gusto</u>».<br><br>Un señor mayor llega tarde. «<u>Perdón</u>, <u>lo siento</u>», dice. La profesora pregunta: «¿Cómo <u>se llama usted</u>?». «Me llamo Robert y soy de Canadá. <u>Encantado</u>». A las dos, la clase termina. Todos dicen: «¡<u>Hasta mañana</u>!».` },
  q: [
    ["¿De dónde es la profesora?", ["De Barcelona", "De Valencia", "De Brasil"], 1],
    ["¿Cuántos años tiene Kenji?", ["Veinte", "Veintidós", "Doce"], 1],
    ["¿Por qué dice Robert «lo siento»?", ["Porque llega tarde", "Porque está enfermo", "Porque no habla español"], 0],
    ["¿Por qué la profesora usa «usted» con Robert?", ["Porque es su amigo", "Porque es un niño", "Porque es un señor mayor"], 2]
  ],
  sp: [
    "¿Cómo te llamas y de dónde eres?",
    "¿Cuántos años tienes y dónde vives?",
    "Preséntate a un compañero nuevo de clase (nombre, país, edad).",
    "Saluda de manera formal a la directora de tu escuela y pregúntale cómo está.",
    "¿Cómo saludas a tus amigos en tu país? ¿Con besos, con la mano?",
    "Despídete de un amigo: vas a verlo mañana."
  ]
},
{
  id: "a1-num",
  lvl: "A1",
  k: "v",
  t: "Números, fecha y hora",
  fr: "Nombres, date et heure",
  ic: "🔢",
  th: `<div class="card"><h2>Los números <span class="fr">(nombres)</span></h2>
<table><tr><th>0–15</th><th>16–29</th><th>30–100+</th></tr>
<tr><td>0 cero, 1 uno, 2 dos, 3 tres, 4 cuatro, 5 cinco</td><td>16 dieciséis, 17 diecisiete, 18 dieciocho, 19 diecinueve</td><td>30 treinta, 31 treinta y uno, 40 cuarenta</td></tr>
<tr><td>6 seis, 7 siete, 8 ocho, 9 nueve, 10 diez</td><td>20 veinte, 21 veintiuno, 22 veintidós</td><td>50 cincuenta, 60 sesenta, 70 setenta</td></tr>
<tr><td>11 once, 12 doce, 13 trece, 14 catorce, 15 quince</td><td>23 veintitrés, 26 veintiséis</td><td>80 ochenta, 90 noventa, 100 cien, 101 ciento uno, 200 doscientos, 1000 mil</td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> De 16 à 29, les nombres s’écrivent en <b>un seul mot</b> (dieciocho, veintiocho). À partir de 31, on utilise <b>y</b> : treinta <b>y</b> cinco, noventa <b>y</b> nueve. Mais jamais après les centaines : ciento cinco (105), et non <s>ciento y cinco</s>. <b>Uno</b> devient <b>un</b> devant un nom masculin : <b>un</b> libro, veinti<b>ún</b> años.</div></div>
<div class="card"><h3>La hora <span class="fr">(dire l’heure)</span></h3>
<p>¿Qué hora es? <span class="fr">Quelle heure est-il ?</span><br>Es <b>la</b> una. <span class="fr">Il est une heure.</span> · Son <b>las</b> tres. <span class="fr">Il est trois heures.</span><br>Son las tres <b>y cuarto</b>. <span class="fr">3 h 15</span> · Son las tres <b>y media</b>. <span class="fr">3 h 30</span> · Son las cuatro <b>menos cuarto</b>. <span class="fr">3 h 45</span><br>Son las ocho <b>de la mañana / de la tarde / de la noche</b>. <span class="fr">8 h / 20 h</span><br>¿A qué hora...? — <b>A las</b> diez. <span class="fr">À quelle heure… ? — À dix heures.</span><br>Es mediodía. / Es medianoche. <span class="fr">Il est midi. / Il est minuit.</span></p></div>
<div class="card"><h3>La fecha <span class="fr">(la date)</span></h3>
<p>¿Qué día es hoy? <span class="fr">Quelle est la date d’aujourd’hui ?</span> — Hoy es <b>el</b> 15 de octubre. <span class="fr">Nous sommes le 15 octobre.</span><br>Mi cumpleaños es <b>el</b> 3 de mayo. <span class="fr">Mon anniversaire est le 3 mai.</span><br>Nací en 1998 (mil novecientos noventa y ocho). <span class="fr">Je suis né(e) en 1998.</span></p>
<p>En espagnol, on utilise les nombres cardinaux pour les dates (el 3 de mayo), mais <b>el primero</b> ou <b>el uno</b> pour le premier du mois. Nombres ordinaux : primero, segundo, tercero, cuarto, quinto <span class="fr">(1er, 2e, 3e, 4e, 5e)</span> → Vivo en el <b>tercer</b> piso. <span class="fr">J’habite au troisième étage.</span> (primero/tercero → <b>primer/tercer</b> devant un nom masculin)</p></div>`,
  voc: [
    ["0️⃣", "cero", "zéro"],
    ["5️⃣", "cinco", "cinq"],
    ["🔟", "diez", "dix"],
    ["💯", "cien", "cent"],
    ["🕐", "la una", "une heure"],
    ["🕒", "las tres", "trois heures"],
    ["🕧", "las doce y media", "midi et demi"],
    ["⏰", "la hora", "heure"],
    ["⏱️", "el minuto", "minute"],
    ["🕛", "el mediodía", "midi"],
    ["📅", "la fecha", "date"],
    ["🎂", "el cumpleaños", "anniversaire"],
    ["🗓️", "el año", "année"],
    ["🥇", "primero", "premier / première"],
    ["🥈", "segundo", "deuxième"],
    ["🥉", "tercero", "troisième"],
    ["☎️", "el número de teléfono", "numéro de téléphone"]
  ],
  ex: [
    { q: "15 =", o: ["cinco", "quince", "cincuenta"], a: 1, t: "15 = quince" },
    { q: "Son las dos ___ (2:30).", o: ["y media", "y cuarto", "menos cuarto"], a: 0, t: "Il est deux heures et demie." },
    { q: "___ la una y diez.", o: ["Es", "Son", "Está"], a: 0, t: "Il est une heure dix. (la una → es)" },
    { q: "Mi cumpleaños es ___ 7 de julio.", o: ["el", "en", "a"], a: 0, t: "Mon anniversaire est le 7 juillet." },
    { q: "Escribe el número: 21 (antes de «años») → Tengo ___ años.", a: ["veintiún", "veintiun"], t: "J’ai vingt et un ans." },
    { q: "Escribe el número: 100 → ___ euros.", a: ["cien"], t: "Cent euros." },
    { q: "Son las seis ___ cuarto. (5:45)", a: ["menos"], t: "Il est six heures moins le quart." },
    { q: "La clase empieza ___ las nueve. (at)", a: ["a"], t: "Le cours commence à neuf heures." },
    { w: "¿Qué hora es, por favor?", t: "Quelle heure est-il, s’il vous plaît ?" },
    { w: "Son las ocho y cuarto de la mañana.", t: "Il est huit heures et quart du matin." },
    { w: "Hoy es el doce de octubre.", t: "Nous sommes le 12 octobre." },
    { w: "Mi número de teléfono es el 612 345 678.", t: "Mon numéro de téléphone est le 612 345 678." }
  ],
  tx: { ti: "Un día con Valeria", b: `Valeria vive en Buenos Aires, en el <u>tercer</u> piso de un edificio grande. Hoy es <u>el 20 de marzo</u> y es su <u>cumpleaños</u>: tiene <u>treinta y un</u> años.<br><br>Se levanta <u>a las siete y media</u> y desayuna con su hermano. Trabaja en una tienda desde <u>las nueve</u> hasta <u>la una y cuarto</u>. A <u>mediodía</u>, su madre la llama por teléfono y canta «Feliz cumpleaños».<br><br>Por la tarde, Valeria compra una tarta por <u>quince</u> mil pesos. La fiesta es <u>a las nueve de la noche</u> en su casa. Vienen <u>doce</u> amigos. A <u>medianoche</u>, todos bailan y comen tarta. ¡Qué buen día!` },
  q: [
    ["¿Cuántos años tiene Valeria hoy?", ["Treinta", "Treinta y uno", "Trece"], 1],
    ["¿A qué hora se levanta?", ["A las siete y media", "A las nueve", "A la una y cuarto"], 0],
    ["¿En qué piso vive?", ["En el primero", "En el segundo", "En el tercero"], 2],
    ["¿Cuántos amigos van a la fiesta?", ["Diez", "Doce", "Quince"], 1]
  ],
  sp: [
    "¿Qué hora es ahora?",
    "¿Cuándo es tu cumpleaños?",
    "¿A qué hora te levantas y a qué hora venirs?",
    "Di tu número de teléfono (o un número inventado) en español.",
    "Cuenta de diez en diez hasta cien.",
    "¿Qué día es hoy? Di la fecha completa."
  ]
},
{
  id: "a1-fam",
  lvl: "A1",
  k: "v",
  t: "Familia y amigos",
  fr: "La famille et les amis",
  ic: "👨‍👩‍👧",
  th: `<div class="card"><h2>La familia <span class="fr">(famille)</span></h2>
<table><tr><th>Masculino</th><th>Femenino</th><th>Français</th></tr>
<tr><td>el padre (papá)</td><td>la madre (mamá)</td><td>père / mère</td></tr>
<tr><td>el hermano</td><td>la hermana</td><td>frère / sœur</td></tr>
<tr><td>el hijo</td><td>la hija</td><td>fils / fille</td></tr>
<tr><td>el abuelo</td><td>la abuela</td><td>grand-père / grand-mère</td></tr>
<tr><td>el tío</td><td>la tía</td><td>oncle / tante</td></tr>
<tr><td>el primo</td><td>la prima</td><td>cousin(e)</td></tr>
<tr><td>el marido / el esposo</td><td>la mujer / la esposa</td><td>mari / femme</td></tr>
<tr><td>el novio</td><td>la novia</td><td>petit ami / petite amie</td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> Le masculin pluriel peut désigner les deux sexes : <b>los padres</b> = les parents, <b>los hermanos</b> = les frères et sœurs, <b>los hijos</b> = les enfants. ¿Tienes hermanos? <span class="fr">Tu as des frères et sœurs ?</span></div></div>
<div class="card"><h3>Describir el físico <span class="fr">(description physique)</span></h3>
<p><b>Ser</b> + adjetivo: Es <b>alto / bajo</b> <span class="fr">grand(e) / petit(e)</span>, <b>delgado / gordo</b> <span class="fr">mince / gros(se)</span>, <b>joven / mayor</b> <span class="fr">jeune / âgé(e)</span>, <b>rubio / moreno</b> <span class="fr">blond / brun</span>, <b>guapo</b> <span class="fr">beau / belle</span>.<br><b>Tener</b> + rasgo: Tiene el pelo <b>largo / corto / rizado</b> <span class="fr">cheveux longs / courts / bouclés</span>. Tiene los ojos <b>azules / verdes / marrones</b> <span class="fr">yeux bleus / verts / marron</span>. Lleva gafas. <span class="fr">Il / Elle porte des lunettes.</span></p>
<p>Les adjectifs s’accordent : mi hermano es alt<b>o</b>, mi hermana es alt<b>a</b>, mis primos son alt<b>os</b>. Les adjectifs en -e ou se terminant par une consonne ne changent pas selon le genre : joven, amable, inteligente.</p></div>
<div class="card"><h3>El carácter <span class="fr">(personnalité)</span></h3>
<p>simpático/a <span class="fr">gentil / gentille, sympathique</span> · antipático/a <span class="fr">désagréable</span> · divertido/a <span class="fr">amusant</span> · serio/a <span class="fr">sérieux / sérieuse</span> · trabajador/a <span class="fr">travailleur / travailleuse</span> · perezoso/a <span class="fr">paresseux / paresseuse</span> · tímido/a <span class="fr">timide</span> · amable <span class="fr">gentil / gentille</span> · inteligente <span class="fr">intelligent(e)</span></p>
<p>Mi abuela es muy simpática y divertida. <span class="fr">Ma grand-mère est très gentille et amusante.</span><br>Mi mejor amigo se llama Iker. <span class="fr">Mon meilleur ami s’appelle Iker.</span><br>🌎 Au Mexique, <b>mamá</b> et <b>papá</b> sont très courants ; en Argentine, on entend aussi <b>la vieja / el viejo</b> (familier) pour dire maman et papa.</p></div>`,
  voc: [
    ["👨", "el padre", "père"],
    ["👩", "la madre", "mère"],
    ["👦", "el hermano", "frère"],
    ["👧", "la hermana", "sœur"],
    ["👶", "el hijo", "fils"],
    ["👴", "el abuelo", "grand-père"],
    ["👵", "la abuela", "grand-mère"],
    ["🧔", "el tío", "oncle"],
    ["👱‍♀️", "la prima", "cousine"],
    ["💑", "el novio", "petit ami"],
    ["💍", "el marido", "mari"],
    ["🤝", "el amigo", "ami(e)"],
    ["🦒", "alto", "grand(e)"],
    ["🐭", "bajo", "petit(e)"],
    ["👱", "rubio", "blond(e)"],
    ["😄", "simpático", "gentil / gentille, sympathique"],
    ["😳", "tímido", "timide"],
    ["👓", "las gafas", "lunettes"]
  ],
  ex: [
    { q: "La madre de mi madre es mi ___.", o: ["tía", "abuela", "prima"], a: 1, t: "La mère de ma mère est ma grand-mère." },
    { q: "El hijo de mi tío es mi ___.", o: ["primo", "hermano", "sobrino"], a: 0, t: "Le fils de mon oncle est mon cousin." },
    { q: "Mi hermana es muy ___.", o: ["simpática", "simpático", "simpáticos"], a: 0, t: "Ma sœur est très gentille." },
    { q: "Mi padre ___ los ojos azules.", o: ["tiene", "es", "está"], a: 0, t: "Mon père a les yeux bleus." },
    { q: "Mis abuelos son ___. (mayor)", a: ["mayores"], t: "Mes grands-parents sont âgés." },
    { q: "Mi novia ___ el pelo largo y rizado. (tener)", a: ["tiene"], t: "Ma petite amie a de longs cheveux bouclés." },
    { q: "Lo contrario de «alto» es ___.", a: ["bajo"], t: "Le contraire de « grand » est « petit »." },
    { q: "Lo contrario de «trabajador» es ___.", a: ["perezoso"], t: "Le contraire de « travailleur / travailleuse » est « paresseux / paresseuse »." },
    { w: "Tengo dos hermanos y una hermana.", t: "J’ai deux frères et une sœur." },
    { w: "Mi abuela es baja y muy divertida.", t: "Ma grand-mère est petite et très drôle." },
    { w: "Mi mejor amigo se llama Mateo.", t: "Mon meilleur ami s’appelle Mateo." },
    { w: "¿Cómo es tu madre?", t: "Comment est ta mère ?" }
  ],
  tx: { ti: "La familia de Julia", b: `Me llamo Julia y vivo en Bogotá con mi familia. Mi <u>padre</u> se llama Andrés: es <u>alto</u>, <u>moreno</u> y muy <u>trabajador</u>. Mi <u>madre</u>, Patricia, es profesora. Es <u>baja</u>, tiene el <u>pelo rizado</u> y es muy <u>divertida</u>.<br><br>Tengo un <u>hermano</u> pequeño, Tomás. Tiene ocho años y es un poco <u>perezoso</u>, pero es muy <u>simpático</u>. Los domingos comemos en casa de mis <u>abuelos</u>. Mi <u>abuela</u> cocina muy bien y mi <u>abuelo</u> <u>lleva gafas</u> y cuenta historias.<br><br>Mi <u>mejor amiga</u> se llama Daniela. Es <u>rubia</u>, tiene los <u>ojos verdes</u> y es un poco <u>tímida</u>. ¡Es como una <u>hermana</u> para mí!` },
  q: [
    ["¿Cómo es el padre de Julia?", ["Bajo y rubio", "Alto y moreno", "Alto y rubio"], 1],
    ["¿Qué hace la madre de Julia?", ["Es profesora", "Es cocinera", "Es médica"], 0],
    ["¿Cuántos años tiene Tomás?", ["Seis", "Ocho", "Diez"], 1],
    ["¿Cómo es Daniela?", ["Morena y muy habladora", "Rubia y un poco tímida", "Alta y perezosa"], 1]
  ],
  sp: [
    "¿Cuántas personas hay en tu familia? ¿Quiénes son?",
    "¿Tienes hermanos? ¿Cómo se llaman y cuántos años tienen?",
    "Describe el físico de tu madre o de tu padre.",
    "¿Cómo es tu mejor amigo o amiga? Describe su carácter.",
    "Describe a una persona famosa y tus compañeros adivinan quién es.",
    "¿Con qué persona de tu familia hablas más? ¿Por qué?"
  ]
},
{
  id: "a1-casa",
  lvl: "A1",
  k: "v",
  t: "La casa",
  fr: "La maison",
  ic: "🏠",
  th: `<div class="card"><h2>Tipos de vivienda <span class="fr">(types de logement)</span></h2>
<p><b>el piso</b> <span class="fr">appartement</span> = <b>el apartamento / el departamento</b> <span class="fr">(Amérique latine)</span><br><b>la casa</b> <span class="fr">maison</span> · <b>el chalé</b> <span class="fr">maison individuelle</span> · <b>el estudio</b> <span class="fr">studio</span> · <b>el edificio</b> <span class="fr">immeuble</span></p>
<p>Vivo en un piso pequeño en el centro. <span class="fr">J’habite dans un petit appartement au centre.</span><br>Mi casa tiene jardín. <span class="fr">Ma maison a un jardin.</span></p></div>
<div class="card"><h3>Las habitaciones y los muebles <span class="fr">(pièces et meubles)</span></h3>
<table><tr><th>Habitación</th><th>Muebles y objetos</th></tr>
<tr><td>el salón <span class="fr">salon</span></td><td>el sofá, la mesa, la televisión, la lámpara, la estantería <span class="fr">(étagères)</span></td></tr>
<tr><td>la cocina <span class="fr">cuisine</span></td><td>la nevera <span class="fr">(réfrigérateur)</span>, el horno <span class="fr">(four)</span>, el microondas, el fregadero <span class="fr">(évier)</span></td></tr>
<tr><td>el dormitorio <span class="fr">chambre</span></td><td>la cama, el armario <span class="fr">(armoire)</span>, la mesilla <span class="fr">(table de nuit)</span></td></tr>
<tr><td>el baño <span class="fr">salle de bains</span></td><td>la ducha, la bañera, el lavabo <span class="fr">(lavabo)</span>, el espejo <span class="fr">(miroir)</span></td></tr>
<tr><td>otros <span class="fr">autres</span></td><td>el comedor, el pasillo <span class="fr">(couloir)</span>, la terraza, el jardín, el garaje</td></tr></table>
<p>🌎 Latinoamérica: <b>la recámara / la habitación</b> (chambre), <b>la sala</b> (salon), <b>el refrigerador / la heladera</b> (réfrigérateur), <b>el clóset</b> (armoire).</p></div>
<div class="card"><h3>Hay / Está <span class="fr">(existence et localisation)</span></h3>
<p>En mi dormitorio <b>hay</b> una cama y un armario. <span class="fr">Dans ma chambre, il y a un lit et une armoire.</span><br>La cama <b>está</b> al lado de la ventana. <span class="fr">Le lit est à côté de la fenêtre.</span><br>Preposiciones: <b>encima de</b> <span class="fr">sur</span>, <b>debajo de</b> <span class="fr">sous</span>, <b>al lado de</b> <span class="fr">à côté de</span>, <b>delante de</b> <span class="fr">devant</span>, <b>detrás de</b> <span class="fr">derrière</span>, <b>entre</b> <span class="fr">entre</span>.</p>
<div class="tip"><b>Truco / Astuce :</b> <b>Hay</b> + un/una/números/rien (Hay <b>un</b> sofá, hay <b>dos</b> sillas, hay libros). <b>Está/Están</b> + el/la/mi (<b>El</b> sofá está en el salón). ❌ <s>Hay el sofá</s> → ✅ Hay un sofá. À retenir : de + el = <b>del</b> → al lado <b>del</b> sofá.</div></div>`,
  voc: [
    ["🏠", "la casa", "maison"],
    ["🏢", "el piso", "appartement"],
    ["🛋️", "el sofá", "canapé"],
    ["🛏️", "la cama", "lit"],
    ["🍳", "la cocina", "cuisine"],
    ["🛁", "la bañera", "baignoire"],
    ["🚿", "la ducha", "douche"],
    ["🚽", "el baño", "salle de bains"],
    ["🪑", "la silla", "chaise"],
    ["🪞", "el espejo", "miroir"],
    ["🚪", "la puerta", "porte"],
    ["🪟", "la ventana", "fenêtre"],
    ["💡", "la lámpara", "lampe"],
    ["📺", "la televisión", "télévision"],
    ["🧊", "la nevera", "réfrigérateur"],
    ["🌳", "el jardín", "jardin"],
    ["🔑", "la llave", "clé"],
    ["🪜", "la escalera", "escalier"]
  ],
  ex: [
    { q: "Duermo en el ___.", o: ["dormitorio", "baño", "garaje"], a: 0, t: "Je dors dans la chambre." },
    { q: "En el salón ___ un sofá grande.", o: ["hay", "está", "es"], a: 0, t: "Dans le salon, il y a un grand canapé." },
    { q: "La leche está en la ___.", o: ["nevera", "ducha", "cama"], a: 0, t: "Le lait est dans le réfrigérateur." },
    { q: "El gato está ___ la mesa. 🐈⬇️", o: ["debajo de", "encima de", "detrás de"], a: 0, t: "Le chat est sous la table." },
    { q: "Las llaves ___ encima de la mesa. (estar)", a: ["están"], t: "Les clés sont sur la table." },
    { q: "Me ducho en el ___. (salle de bains)", a: ["baño"], t: "Je prends une douche dans la salle de bains." },
    { q: "La lámpara está al lado ___ sofá. (de + el)", a: ["del"], t: "La lampe est à côté du canapé." },
    { q: "En la cocina ___ cuatro sillas. (haber)", a: ["hay"], t: "Dans la cuisine, il y a quatre chaises." },
    { w: "Mi piso tiene dos dormitorios y un baño.", t: "Mon appartement a deux chambres et une salle de bains." },
    { w: "La televisión está en el salón.", t: "La télévision est dans le salon." },
    { w: "Vivo en una casa con jardín.", t: "J’habite dans une maison avec un jardin." },
    { w: "¿Dónde está el baño, por favor?", t: "Où se trouve la salle de bains, s’il vous plaît ?" }
  ],
  tx: { ti: "Se alquila piso en Granada", b: `Hola, soy Nacho. Busco compañero para mi <u>piso</u> en el centro de Granada. Es un piso moderno en el cuarto piso de un <u>edificio</u> con ascensor.<br><br>Tiene tres <u>dormitorios</u>, un <u>salón</u> grande, una <u>cocina</u> y dos <u>baños</u>. En el salón <u>hay</u> un <u>sofá</u> muy cómodo, una <u>televisión</u> y una <u>estantería</u> con muchos libros. La cocina tiene <u>nevera</u>, <u>horno</u> y <u>microondas</u>.<br><br>Tu dormitorio tiene una <u>cama</u>, un <u>armario</u> y una mesa <u>al lado de</u> la <u>ventana</u>. Desde la <u>terraza</u> se ve la Alhambra. El alquiler es de 300 euros al mes. ¡Escríbeme!` },
  q: [
    ["¿Cuántos dormitorios tiene el piso?", ["Dos", "Tres", "Cuatro"], 1],
    ["¿Qué hay en el salón?", ["Una cama y un armario", "Un sofá, una televisión y una estantería", "Un horno y una nevera"], 1],
    ["¿Dónde está la mesa del dormitorio?", ["Al lado de la ventana", "Debajo de la cama", "En la terraza"], 0],
    ["¿Qué se ve desde la terraza?", ["El mar", "La Alhambra", "Un jardín"], 1]
  ],
  sp: [
    "¿Vives en un piso o en una casa? ¿Cómo es?",
    "¿Cuántas habitaciones tiene tu casa?",
    "Describe tu dormitorio: ¿qué hay y dónde está cada cosa?",
    "¿Cuál es tu habitación favorita de la casa? ¿Por qué?",
    "Describe la casa de tus sueños.",
    "¿Qué hay en tu cocina?"
  ]
},
{
  id: "a1-comida",
  lvl: "A1",
  k: "v",
  t: "Comida y bebida",
  fr: "La nourriture et les boissons",
  ic: "🍎",
  th: `<div class="card"><h2>Las comidas del día <span class="fr">(repas de la journée)</span></h2>
<table><tr><th>Comida</th><th>Verbo</th><th>Hora en España</th></tr>
<tr><td>el desayuno <span class="fr">petit-déjeuner</span></td><td>desayunar</td><td>7:00–9:00</td></tr>
<tr><td>la comida / el almuerzo <span class="fr">déjeuner</span></td><td>comer / almorzar</td><td>14:00–15:30</td></tr>
<tr><td>la merienda <span class="fr">goûter</span></td><td>merendar</td><td>17:30–18:30</td></tr>
<tr><td>la cena <span class="fr">dîner</span></td><td>cenar</td><td>21:00–22:30</td></tr></table>
<p>🌎 En Espagne, on mange tard ! Dans une grande partie de l’Amérique latine, <b>el almuerzo</b> est le mot courant pour le déjeuner, et on dîne plus tôt.</p></div>
<div class="card"><h3>Alimentos y bebidas <span class="fr">(nourriture et boissons)</span></h3>
<p><b>Frutas:</b> la manzana, el plátano (<i>banana</i> en Latinoamérica), la naranja, las fresas <span class="fr">pomme, banane, orange, fraises</span><br><b>Verduras:</b> el tomate, la lechuga, la cebolla, la patata (<i>papa</i> en Latinoamérica) <span class="fr">tomate, laitue, oignon, pomme de terre</span><br><b>Proteínas:</b> el pollo, la carne, el pescado, los huevos, el jamón, el queso <span class="fr">poulet, viande, poisson, œufs, jambon, fromage</span><br><b>Otros:</b> el pan, el arroz, la pasta, el azúcar, la sal <span class="fr">pain, riz, pâtes, sucre, sel</span><br><b>Bebidas:</b> el agua, la leche, el café, el té, el zumo (<i>jugo</i> en Latinoamérica), la cerveza, el vino <span class="fr">eau, lait, café, thé, jus, bière, vin</span></p>
<div class="tip"><b>Truco / Astuce :</b> <b>Agua</b> est féminin, mais prend <b>el</b> au singulier : <b>el</b> agua fr<b>ía</b>, <b>las</b> aguas. Pour parler de ses goûts, on utilise <b>me gusta</b> + singulier, <b>me gustan</b> + pluriel : Me gust<b>a</b> el queso. Me gust<b>an</b> las fresas.</div></div>
<div class="card"><h3>En el mercado <span class="fr">(au marché)</span></h3>
<p>Cantidades: <b>un kilo de</b> naranjas, <b>medio kilo de</b> tomates, <b>cien gramos de</b> jamón, <b>una docena de</b> huevos, <b>una botella de</b> agua, <b>un litro de</b> leche, <b>una barra de</b> pan, <b>una lata de</b> atún <span class="fr">un kilo, un demi-kilo, 100 g, une douzaine, une bouteille, un litre, une miche, une boîte</span></p>
<p>—¿Qué le pongo? <span class="fr">Que désirez-vous ?</span> —Quería un kilo de manzanas, por favor. <span class="fr">Je voudrais un kilo de pommes, s’il vous plaît.</span><br>—¿Algo más? <span class="fr">Autre chose ?</span> —No, nada más. ¿Cuánto es? <span class="fr">Non, c’est tout. Combien ça coûte ?</span> —Son cuatro euros con cincuenta. <span class="fr">Ça fait 4,50 €.</span></p></div>`,
  voc: [
    ["🍎", "la manzana", "pomme"],
    ["🍌", "el plátano", "banane"],
    ["🍊", "la naranja", "orange"],
    ["🍓", "la fresa", "fraise"],
    ["🍅", "el tomate", "tomate"],
    ["🥔", "la patata", "pomme de terre"],
    ["🥚", "el huevo", "œuf"],
    ["🍗", "el pollo", "poulet"],
    ["🐟", "el pescado", "poisson"],
    ["🧀", "el queso", "fromage"],
    ["🍞", "el pan", "pain"],
    ["🍚", "el arroz", "riz"],
    ["💧", "el agua", "eau"],
    ["🥛", "la leche", "lait"],
    ["☕", "el café", "café"],
    ["🧃", "el zumo", "jus"],
    ["🍷", "el vino", "vin"],
    ["🥐", "el desayuno", "petit-déjeuner"]
  ],
  ex: [
    { q: "Por la mañana tomo el ___.", o: ["desayuno", "cena", "merienda"], a: 0, t: "Le matin, je prends mon petit-déjeuner." },
    { q: "Quería una ___ de agua, por favor.", o: ["botella", "docena", "barra"], a: 0, t: "Je voudrais une bouteille d’eau, s’il vous plaît." },
    { q: "Me ___ mucho las naranjas.", o: ["gustan", "gusta", "gusto"], a: 0, t: "J’aime beaucoup les oranges." },
    { q: "¿Qué es una fruta?", o: ["la fresa", "la cebolla", "el queso"], a: 0, t: "Une fraise est un fruit." },
    { q: "Una ___ de huevos (12), por favor.", a: ["docena"], t: "Une douzaine d’œufs, s’il vous plaît." },
    { q: "Me ___ el café con leche. (gustar)", a: ["gusta"], t: "J’aime le café au lait." },
    { q: "En España la ___ es a las diez de la noche. (dîner)", a: ["cena"], t: "En Espagne, on dîne à dix heures du soir." },
    { q: "—¿Cuánto ___? —Son tres euros. (ser)", a: ["es"], t: "Combien ça coûte ? — Trois euros." },
    { w: "Quería un kilo de tomates, por favor.", t: "Je voudrais un kilo de tomates, s’il vous plaît." },
    { w: "Para desayunar tomo café con tostadas.", t: "Au petit-déjeuner, je prends du café avec des tartines." },
    { w: "No me gusta el pescado.", t: "Je n’aime pas le poisson." },
    { w: "¿Algo más? No, nada más, gracias.", t: "Autre chose ? Non, c’est tout, merci." }
  ],
  tx: { ti: "De compras en el mercado", b: `Es sábado por la mañana y Rosa va al <u>mercado</u> de su barrio en Valencia. Primero va a la frutería. «Buenos días. <u>Quería</u> <u>un kilo de</u> <u>naranjas</u> y <u>medio kilo de</u> <u>fresas</u>, por favor». El frutero pregunta: «<u>¿Algo más?</u>». «Sí, unos <u>plátanos</u>».<br><br>Después compra <u>una barra de</u> <u>pan</u>, <u>una docena de</u> <u>huevos</u> y <u>doscientos gramos de</u> <u>queso</u>. En la pescadería compra <u>pescado</u> para la <u>cena</u>. «<u>¿Cuánto es?</u>», pregunta. «Doce euros con veinte».<br><br>A Rosa <u>le gusta</u> mucho el mercado porque los productos son frescos. Al final, toma un <u>café con leche</u> en un bar y vuelve a casa.` },
  q: [
    ["¿Cuántas naranjas compra Rosa?", ["Medio kilo", "Un kilo", "Una docena"], 1],
    ["¿Qué compra en la pescadería?", ["Pescado para la cena", "Queso", "Huevos"], 0],
    ["¿Cuánto paga en la pescadería?", ["Diez euros", "Doce euros con veinte", "Veinte euros"], 1],
    ["¿Por qué le gusta el mercado?", ["Porque es barato", "Porque está cerca", "Porque los productos son frescos"], 2]
  ],
  sp: [
    "¿Qué tomas normalmente para desayunar?",
    "¿A qué hora venirs y a qué hora cenas?",
    "¿Qué comida te gusta mucho? ¿Y qué comida no te gusta?",
    "Estás en el mercado: pide tres productos con sus cantidades.",
    "¿Cuál es un plato típico de tu país? ¿Qué lleva?",
    "¿Qué bebes durante el día?"
  ]
},
{
  id: "a1-ciudad",
  lvl: "A1",
  k: "v",
  t: "La ciudad y el transporte",
  fr: "La ville et les transports",
  ic: "🏙️",
  th: `<div class="card"><h2>Lugares de la ciudad <span class="fr">(lieux en ville)</span></h2>
<table><tr><th>Español</th><th>Français</th><th>Español</th><th>Français</th></tr>
<tr><td>la calle</td><td>rue</td><td>la plaza</td><td>place</td></tr>
<tr><td>el banco</td><td>banque</td><td>la farmacia</td><td>pharmacie</td></tr>
<tr><td>el hospital</td><td>hôpital</td><td>el supermercado</td><td>supermarché</td></tr>
<tr><td>el museo</td><td>musée</td><td>la iglesia</td><td>église</td></tr>
<tr><td>el parque</td><td>parc</td><td>la estación</td><td>gare</td></tr>
<tr><td>el restaurante</td><td>restaurant</td><td>la parada de autobús</td><td>arrêt de bus</td></tr>
<tr><td>el cine</td><td>cinéma</td><td>la oficina de correos</td><td>bureau de poste</td></tr></table>
<p>En mi barrio hay un parque y dos supermercados. <span class="fr">Dans mon quartier, il y a un parc et deux supermarchés.</span><br>¿Hay una farmacia por aquí? <span class="fr">Y a-t-il une pharmacie dans le coin ?</span></p></div>
<div class="card"><h3>El transporte <span class="fr">(transports)</span></h3>
<p>Voy <b>en</b> autobús / metro / tren / coche / bici / avión / taxi. <span class="fr">Je prends le bus / le métro / le train / la voiture / le vélo / l’avion / le taxi.</span><br>Pero: Voy <b>a pie</b> / Voy <b>andando</b>. <span class="fr">Je marche / J’y vais à pied.</span></p>
<p>🌎 <b>el coche</b> (Spain) = <b>el carro</b> (Mexico, Colombia…) = <b>el auto</b> (Argentina, Chile). <b>El autobús</b> = <b>el camión</b> (Mexico), <b>el colectivo</b> (Argentina), <b>la guagua</b> (Canarias, Cuba). <b>Coger</b> el autobús (Spain) = <b>tomar</b> el autobús (Amérique latine).</p>
<div class="tip"><b>Truco / Astuce :</b> On utilise <b>en</b> + moyen de transport (en tren, en metro) et <b>a</b> + destination (voy <b>a</b> la playa, voy <b>al</b> centro). À retenir : a + el = <b>al</b>.</div></div>
<div class="card"><h3>Pedir y dar direcciones <span class="fr">(demander et indiquer son chemin)</span></h3>
<p>Perdone, ¿dónde está el museo? <span class="fr">Excusez-moi, où se trouve le musée ?</span><br>¿Cómo voy a la estación? <span class="fr">Comment aller à la gare ?</span><br>Sigue todo recto. <span class="fr">Continuez tout droit.</span><br>Gira a la derecha / a la izquierda. <span class="fr">Tournez à droite / à gauche.</span><br>Toma la primera / segunda calle. <span class="fr">Prenez la première / la deuxième rue.</span><br>Está en la esquina / enfrente del banco / cerca / lejos. <span class="fr">C’est au coin de la rue / en face de la banque / près / loin.</span></p></div>`,
  voc: [
    ["🚌", "el autobús", "bus"],
    ["🚇", "el metro", "métro"],
    ["🚆", "el tren", "train"],
    ["🚗", "el coche", "voiture"],
    ["🚲", "la bicicleta", "vélo"],
    ["✈️", "el avión", "avion"],
    ["🚕", "el taxi", "taxi"],
    ["🏦", "el banco", "banque"],
    ["💊", "la farmacia", "pharmacie"],
    ["🏥", "el hospital", "hôpital"],
    ["🏛️", "el museo", "musée"],
    ["⛪", "la iglesia", "église"],
    ["🌳", "el parque", "parc"],
    ["🎬", "el cine", "cinéma"],
    ["🛒", "el supermercado", "supermarché"],
    ["🚉", "la estación", "gare"],
    ["⬆️", "todo recto", "tout droit"],
    ["➡️", "a la derecha", "à droite"]
  ],
  ex: [
    { q: "Voy al trabajo ___ metro.", o: ["en", "a", "de"], a: 0, t: "Je vais au travail en métro." },
    { q: "Para comprar medicinas voy a la ___.", o: ["farmacia", "iglesia", "estación"], a: 0, t: "Pour acheter des médicaments, je vais à la pharmacie." },
    { q: "⬅️ Gira a la ___.", o: ["izquierda", "derecha", "esquina"], a: 0, t: "Tournez à gauche." },
    { q: "En México, «el coche» se dice...", o: ["el carro", "la guagua", "el colectivo"], a: 0, t: "Au Mexique, on dit « el carro » pour une voiture." },
    { q: "Voy ___ centro en autobús. (a + el)", a: ["al"], t: "Je vais au centre en bus." },
    { q: "No tengo coche, voy a ___. (on foot)", a: ["pie"], t: "Je n’ai pas de voiture, j’y vais à pied." },
    { q: "Perdone, ¿dónde ___ la estación? (estar)", a: ["está"], t: "Excusez-moi, où est la gare ?" },
    { q: "Sigue todo ___ y gira a la derecha. (straight)", a: ["recto"], t: "Continuez tout droit et tournez à droite." },
    { w: "¿Hay un banco por aquí cerca?", t: "Y a-t-il une banque près d’ici ?" },
    { w: "Toma la segunda calle a la izquierda.", t: "Prenez la deuxième rue à gauche." },
    { w: "El museo está enfrente del parque.", t: "Le musée est en face du parc." },
    { w: "Normalmente voy a la universidad en bici.", t: "Je vais généralement à l’université à vélo." }
  ],
  tx: { ti: "Perdido en Ciudad de México", b: `Liam es irlandés y está de vacaciones en Ciudad de México. Hoy quiere visitar el <u>Museo</u> Nacional de Antropología, pero no sabe dónde está. Pregunta a una señora en la <u>plaza</u>: «<u>Perdone</u>, ¿cómo voy al museo?».<br><br>La señora es muy amable: «Está un poco <u>lejos</u>. Puedes tomar el <u>metro</u> en la <u>estación</u> de la <u>esquina</u>. O puedes ir en <u>camión</u>: la <u>parada</u> está <u>enfrente del</u> <u>banco</u>».<br><br>Liam decide ir en metro. Al salir, <u>sigue todo recto</u>, <u>gira a la derecha</u> y entra en el <u>parque</u> de Chapultepec. ¡Allí está el museo! Después de la visita, vuelve al hotel en <u>taxi</u> porque está muy cansado.` },
  q: [
    ["¿De dónde es Liam?", ["De México", "De Irlanda", "De Inglaterra"], 1],
    ["¿Dónde está la parada del camión?", ["Enfrente del banco", "En la esquina", "En el parque"], 0],
    ["¿Cómo va Liam al museo?", ["En camión", "A pie", "En metro"], 2],
    ["¿Por qué vuelve en taxi?", ["Porque llueve", "Porque está cansado", "Porque el metro está cerrado"], 1]
  ],
  sp: [
    "¿Qué lugares hay en tu barrio?",
    "¿Cómo vas al trabajo o a clase? ¿Cuánto tiempo tardas?",
    "Explica a un turista cómo ir de tu casa a la estación más cercana.",
    "¿Cuál es tu lugar favorito de tu ciudad? ¿Por qué?",
    "¿Qué medio de transporte prefieres? ¿Por qué?",
    "Pregunta a una persona en la calle dónde está una farmacia."
  ]
},
{
  id: "a1-tiempo",
  lvl: "A1",
  k: "v",
  t: "Días, meses y el tiempo",
  fr: "Les jours, les mois et la météo",
  ic: "🌦️",
  th: `<div class="card"><h2>Los días y los meses <span class="fr">(jours et mois)</span></h2>
<table><tr><th>Días de la semana</th><th>Meses del año</th></tr>
<tr><td>lunes <span class="fr">lundi</span>, martes <span class="fr">mardi</span>, miércoles <span class="fr">mercredi</span>, jueves <span class="fr">jeudi</span>, viernes <span class="fr">vendredi</span>, sábado <span class="fr">samedi</span>, domingo <span class="fr">dimanche</span></td><td>enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre</td></tr></table>
<div class="tip"><b>Truco / Astuce :</b> Les jours et les mois s’écrivent en <b>minuscule</b> : el lunes, en abril. « Le lundi » = <b>el</b> lunes (sans préposition !) ; « tous les lundis » = <b>los</b> lunes. « En mai » = <b>en</b> mayo. ❌ <s>en el lunes</s> → ✅ el lunes. « Le week-end » = <b>el fin de semana</b>.</div></div>
<div class="card"><h3>Las estaciones <span class="fr">(saisons)</span></h3>
<p>🌸 la primavera <span class="fr">printemps</span> · ☀️ el verano <span class="fr">été</span> · 🍂 el otoño <span class="fr">automne</span> · ❄️ el invierno <span class="fr">hiver</span></p>
<p>En España, el verano es en julio y agosto. En Argentina y Chile, ¡el verano es en diciembre y enero! <span class="fr">En Argentine et au Chili, l’été tombe en décembre et janvier !</span></p></div>
<div class="card"><h3>¿Qué tiempo hace? <span class="fr">(quel temps fait-il ?)</span></h3>
<table><tr><th>Hace + nom</th><th>Verbo</th><th>Hay / Está</th></tr>
<tr><td>Hace calor. <span class="fr">Il fait chaud.</span></td><td>Llueve. <span class="fr">Il pleut.</span></td><td>Hay niebla. <span class="fr">Il y a du brouillard.</span></td></tr>
<tr><td>Hace frío. <span class="fr">Il fait froid.</span></td><td>Nieva. <span class="fr">Il neige.</span></td><td>Hay tormenta. <span class="fr">Il y a un orage.</span></td></tr>
<tr><td>Hace sol. <span class="fr">Il y a du soleil.</span></td><td>Truena. <span class="fr">Il tonne.</span></td><td>Está nublado. <span class="fr">Le ciel est nuageux.</span></td></tr>
<tr><td>Hace viento. <span class="fr">Il y a du vent.</span></td><td></td><td>Estamos a 25 grados. <span class="fr">Il fait 25 degrés.</span></td></tr>
<tr><td>Hace buen / mal tiempo. <span class="fr">Il fait beau / mauvais.</span></td><td></td><td></td></tr></table>
<p>Hace <b>mucho</b> calor (et non <s>muy calor</s>). <span class="fr">Il fait très chaud.</span> En Amérique latine, on entend aussi <b>Hay sol</b> ou <b>Está soleado</b>.</p></div>`,
  voc: [
    ["📅", "el lunes", "lundi"],
    ["🎉", "el viernes", "vendredi"],
    ["🛌", "el domingo", "dimanche"],
    ["🏖️", "el fin de semana", "week-end"],
    ["🗓️", "el mes", "mois"],
    ["🌸", "la primavera", "printemps"],
    ["☀️", "el verano", "été"],
    ["🍂", "el otoño", "automne"],
    ["⛄", "el invierno", "hiver"],
    ["🥵", "hace calor", "il fait chaud"],
    ["🥶", "hace frío", "il fait froid"],
    ["🌞", "hace sol", "il y a du soleil"],
    ["💨", "hace viento", "il y a du vent"],
    ["🌧️", "llueve", "il pleut"],
    ["🌨️", "nieva", "il neige"],
    ["☁️", "está nublado", "le ciel est nuageux"],
    ["⛈️", "la tormenta", "orage"],
    ["🌡️", "la temperatura", "température"]
  ],
  ex: [
    { q: "El día después del martes es el ___.", o: ["miércoles", "jueves", "lunes"], a: 0, t: "Le lendemain de mardi, c’est mercredi." },
    { q: "🥶 Hace mucho ___.", o: ["frío", "sol", "calor"], a: 0, t: "Il fait très froid." },
    { q: "Tengo clase de inglés ___ lunes y los miércoles.", o: ["los", "en", "el"], a: 0, t: "J’ai cours d’anglais le lundi et le mercredi." },
    { q: "En Chile, en enero es ___.", o: ["verano", "invierno", "otoño"], a: 0, t: "Au Chili, janvier est en été." },
    { q: "Hoy ___ calor, estamos a 35 grados. (hacer)", a: ["hace"], t: "Aujourd’hui, il fait chaud, 35 degrés." },
    { q: "🌧️ Hoy no voy al parque porque ___. (llover)", a: ["llueve"], t: "Je ne vais pas au parc aujourd’hui parce qu’il pleut." },
    { q: "El último mes del año es ___.", a: ["diciembre"], t: "Le dernier mois de l’année est décembre." },
    { q: "☁️ El cielo está ___. (cloudy)", a: ["nublado"], t: "Le ciel est nuageux." },
    { w: "Mi cumpleaños es en septiembre.", t: "Mon anniversaire est en septembre." },
    { w: "En invierno nieva mucho en las montañas.", t: "En hiver, il neige beaucoup dans les montagnes." },
    { w: "¿Qué tiempo hace hoy en Lima?", t: "Quel temps fait-il aujourd’hui à Lima ?" },
    { w: "Los sábados juego al fútbol con mis amigos.", t: "Le samedi, je joue au football avec mes amis." }
  ],
  tx: { ti: "Dos amigas, dos estaciones", b: `Hoy es <u>domingo</u>, 15 de <u>enero</u>. Lucía vive en Salamanca y hace una videollamada con su amiga Camila, de Buenos Aires.<br><br>«¡Aquí <u>hace</u> mucho <u>frío</u>!», dice Lucía. «<u>Estamos a</u> dos <u>grados</u>, <u>está nublado</u> y ahora <u>nieva</u> un poco. Es pleno <u>invierno</u>».<br><br>Camila se ríe: «Pues aquí es <u>verano</u>. <u>Hace</u> mucho <u>calor</u> y <u>hace sol</u>. Estamos a treinta grados. Este <u>fin de semana</u> voy a la playa con mi familia».<br><br>Lucía prefiere la <u>primavera</u>, porque no hace ni frío ni calor. A Camila le gusta el <u>otoño</u>, en <u>abril</u> y <u>mayo</u>. Las dos quieren viajar juntas en <u>julio</u>, pero ¿adónde? ¿Al calor o al frío?` },
  q: [
    ["¿Qué tiempo hace en Salamanca?", ["Hace sol y calor", "Hace frío y está nublado", "Llueve y hace viento"], 1],
    ["¿Qué estación es en Buenos Aires?", ["Verano", "Invierno", "Otoño"], 0],
    ["¿Qué hace Camila este fin de semana?", ["Va a la montaña", "Va a la playa", "Visita a Lucía"], 1],
    ["¿Por qué prefiere Lucía la primavera?", ["Porque llueve", "Porque hace mucho calor", "Porque no hace ni frío ni calor"], 2]
  ],
  sp: [
    "¿Qué día de la semana prefieres? ¿Por qué?",
    "¿Qué haces normalmente los fines de semana?",
    "¿Qué tiempo hace hoy en tu ciudad?",
    "¿Cuál es tu estación favorita y qué tiempo hace en esa estación?",
    "¿En qué mes es tu cumpleaños? ¿Qué tiempo hace normalmente ese día?",
    "Presenta el pronóstico del tiempo para mañana como en la televisión."
  ]
}
);
