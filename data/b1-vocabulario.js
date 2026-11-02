/* Camino al Español · Nivel B1 · vocabulario */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "b1-medio",
  lvl: "B1",
  k: "v",
  t: "Medio ambiente",
  fr: "L’environnement",
  ic: "🌍",
  th: `<div class="card"><h2>El medio ambiente <span class="fr">(environnement)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>el cambio climático</td><td>changement climatique</td></tr>
<tr><td>el calentamiento global</td><td>réchauffement climatique</td></tr>
<tr><td>la contaminación</td><td>pollution</td></tr>
<tr><td>los residuos / la basura</td><td>déchets / ordures</td></tr>
<tr><td>reciclar, reutilizar, reducir</td><td>recycler, réutiliser, réduire</td></tr>
<tr><td>las energías renovables</td><td>énergie renouvelable</td></tr>
<tr><td>la sequía / las inundaciones</td><td>sécheresse / inondations</td></tr>
<tr><td>las especies en peligro de extinción</td><td>espèces menacées</td></tr>
<tr><td>malgastar / ahorrar agua</td><td>gaspiller / économiser l’eau</td></tr>
</table></div>
<div class="card"><h3>Los contenedores de reciclaje <span class="fr">(conteneurs de tri)</span></h3>
<p>🟡 <b>amarillo</b>: plásticos, latas y envases <span class="fr">plastiques, canettes et emballages</span><br>
🔵 <b>azul</b>: papel y cartón <span class="fr">papier et carton</span><br>
🟢 <b>verde</b>: vidrio <span class="fr">verre</span><br>
🟤 <b>marrón</b>: residuos orgánicos <span class="fr">déchets organiques</span></p>
<div class="tip"><b>Truco / Astuce :</b> En España se dice <i>la basura</i> y <i>el contenedor</i>; en México también se oye <i>el bote de basura</i>, y en Argentina <i>el tacho</i>. En casi toda Latinoamérica <i>el carro</i> = <i>el coche</i>.</div></div>
<div class="card"><h3>Dar tu opinión <span class="fr">(donner son opinion)</span></h3>
<p><b>Creo que</b> / <b>Pienso que</b> + indicativo: Creo que el reciclaje es necesario. <span class="fr">Je pense que le recyclage est nécessaire.</span><br>
<b>En mi opinión</b>, / <b>Para mí</b>, / <b>A mi modo de ver</b>, … <span class="fr">À mon avis…</span><br>
<b>No creo que</b> + subjuntivo: No creo que sea demasiado tarde. <span class="fr">Je ne crois pas qu’il soit trop tard.</span><br>
<b>Estoy de acuerdo con</b>… / <b>No estoy de acuerdo con</b>… <span class="fr">Je suis d’accord / Je ne suis pas d’accord avec…</span><br>
<b>Es importante que</b> + subjuntivo: Es importante que todos reciclemos. <span class="fr">Il est important que nous recyclions tous.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Afirmación → indicativo (<i>creo que <u>es</u></i>); negación → subjuntivo (<i>no creo que <u>sea</u></i>).</div></div>`,
  voc: [
    ["🌡️", "el calentamiento global", "réchauffement climatique"],
    ["🏭", "la contaminación", "pollution"],
    ["♻️", "reciclar", "recycler"],
    ["🗑️", "el contenedor", "poubelle, conteneur"],
    ["☀️", "la energía solar", "énergie solaire"],
    ["💨", "la energía eólica", "énergie éolienne"],
    ["🌳", "el bosque", "forêt"],
    ["🔥", "el incendio forestal", "feu de forêt"],
    ["🏜️", "la sequía", "sécheresse"],
    ["🌊", "la inundación", "inondation"],
    ["🐼", "la especie en peligro de extinción", "espèce menacée"],
    ["🚲", "el transporte sostenible", "transport durable"],
    ["🛍️", "la bolsa de plástico", "sac plastique"],
    ["💧", "ahorrar agua", "économiser l’eau"],
    ["🌱", "ecológico", "écologique, biologique"],
    ["🌫️", "el humo", "fumée"]
  ],
  ex: [
    { q: "Creo que el cambio climático ___ un problema muy grave.", o: ["es", "sea", "ser"], a: 0, t: "Je pense que le changement climatique est un problème très grave. (creo que + indicatif)" },
    { q: "No creo que ___ demasiado tarde para actuar.", o: ["es", "sea", "está"], a: 1, t: "Je ne crois pas qu’il soit trop tard pour agir. (no creo que + subjonctif)" },
    { q: "Las botellas de vidrio van al contenedor…", o: ["amarillo", "azul", "verde"], a: 2, t: "Les bouteilles en verre vont dans le conteneur vert." },
    { q: "Cuando no llueve durante muchos meses, hay una…", o: ["inundación", "sequía", "tormenta"], a: 1, t: "Quand il ne pleut pas pendant des mois, il y a une sécheresse." },
    { q: "Hay que ___ el papel y el cartón en el contenedor azul. (recycler)", a: ["reciclar"], t: "Il faut recycler le papier et le carton dans le conteneur bleu." },
    { q: "Cierra el grifo mientras te lavas los dientes para ___ agua. (économiser)", a: ["ahorrar"], t: "Ferme le robinet pendant que tu te brosses les dents pour économiser l’eau." },
    { q: "En mi ___, deberíamos usar más la bicicleta. (opinion)", a: ["opinión", "opinion"], t: "À mon avis, nous devrions utiliser davantage le vélo." },
    { q: "Los coches y las fábricas producen mucha ___. (pollution)", a: ["contaminación", "contaminacion"], t: "Les voitures et les usines produisent beaucoup de pollution." },
    { w: "Creo que debemos reducir el uso del plástico.", t: "Je pense qu’il faut réduire l’utilisation du plastique." },
    { w: "No estoy de acuerdo con esa idea.", t: "Je ne suis pas d’accord avec cette idée." },
    { w: "El oso polar está en peligro de extinción.", t: "L’ours polaire est une espèce menacée." },
    { w: "Es importante que todos reciclemos en casa.", t: "Il est important que nous recyclions tous à la maison." }
  ],
  tx: {
    ti: "Un barrio más verde",
    b: `Me llamo Lucía y vivo en Valencia. Hace dos años, mi barrio organizó un proyecto para cuidar el <u>medio ambiente</u>. Al principio, muchos vecinos no sabían <u>reciclar</u> bien y tiraban todo al mismo <u>contenedor</u>. Ahora separamos los <u>residuos</u>: el plástico al amarillo, el papel al azul y el vidrio al verde.<br><br>También pusimos <u>placas solares</u> en el tejado del colegio y creamos un huerto <u>ecológico</u> donde los niños aprenden a cultivar tomates. Además, el ayuntamiento abrió un carril bici y ahora mucha gente va al trabajo en bicicleta en lugar de en coche.<br><br><u>En mi opinión</u>, estos cambios pequeños son muy importantes. <u>Creo que</u> el <u>cambio climático</u> es el mayor problema de nuestra generación, pero <u>no creo que</u> sea imposible solucionarlo. Mi abuelo, que vive en un pueblo con <u>sequía</u> casi todos los veranos, dice que ya es hora de actuar. Estoy totalmente de acuerdo con él.`
  },
  q: [
    ["¿Qué problema tenían los vecinos al principio?", ["No tenían contenedores", "No separaban la basura", "No tenían agua"], 1],
    ["¿Dónde pusieron las placas solares?", ["En el tejado del colegio", "En el ayuntamiento", "En casa de Lucía"], 0],
    ["¿Cómo va mucha gente al trabajo ahora?", ["En coche", "En autobús", "En bicicleta"], 2],
    ["¿Qué opina Lucía del cambio climático?", ["Que no es un problema real", "Que es grave pero tiene solución", "Que es imposible solucionarlo"], 1]
  ],
  sp: [
    "¿Qué haces tú en casa para cuidar el medio ambiente?",
    "En tu opinión, ¿cuál es el problema medioambiental más grave hoy? ¿Por qué?",
    "¿Cómo se recicla en tu ciudad? Explica el sistema.",
    "¿Estás de acuerdo con prohibir los coches en el centro de las ciudades? Da tu opinión.",
    "¿Qué cambios has notado en el clima de tu país en los últimos años?",
    "Propón tres ideas para hacer tu barrio más sostenible."
  ]
},
{
  id: "b1-tec",
  lvl: "B1",
  k: "v",
  t: "Tecnología e internet",
  fr: "La technologie et Internet",
  ic: "💻",
  th: `<div class="card"><h2>Dispositivos y aplicaciones <span class="fr">(appareils et applications)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>el móvil (España) / el celular (Latinoamérica)</td><td>téléphone portable, téléphone cellulaire</td></tr>
<tr><td>el ordenador (España) / la computadora (Latinoamérica)</td><td>ordinateur</td></tr>
<tr><td>el portátil / la laptop</td><td>ordinateur portable</td></tr>
<tr><td>la tableta</td><td>tablette</td></tr>
<tr><td>la aplicación (la app)</td><td>application</td></tr>
<tr><td>la pantalla / el teclado / el ratón</td><td>écran / clavier / souris</td></tr>
<tr><td>el cargador / la batería</td><td>chargeur / batterie</td></tr>
<tr><td>la red wifi / la contraseña</td><td>réseau Wi-Fi / mot de passe</td></tr>
</table></div>
<div class="card"><h3>Verbos de internet <span class="fr">(verbes liés à Internet)</span></h3>
<table><tr><th>Español</th><th>Français</th><th>Ejemplo</th></tr>
<tr><td>descargar / bajar</td><td>télécharger</td><td>Descargué la app ayer. <span class="fr">J’ai téléchargé l’application hier.</span></td></tr>
<tr><td>subir</td><td>téléverser / publier</td><td>Subo fotos a Instagram. <span class="fr">Je publie des photos sur Instagram.</span></td></tr>
<tr><td>compartir</td><td>partager</td><td>Comparte el enlace. <span class="fr">Partagez le lien.</span></td></tr>
<tr><td>navegar</td><td>naviguer sur Internet</td><td>Navego por internet. <span class="fr">Je navigue sur Internet.</span></td></tr>
<tr><td>conectarse</td><td>se connecter</td><td>No me puedo conectar. <span class="fr">Je n’arrive pas à me connecter.</span></td></tr>
<tr><td>seguir</td><td>suivre</td><td>Sigo a muchos artistas. <span class="fr">Je suis beaucoup d’artistes.</span></td></tr>
<tr><td>borrar / guardar</td><td>supprimer / enregistrer</td><td>Guarda el archivo. <span class="fr">Enregistrez le fichier.</span></td></tr>
</table></div>
<div class="card"><h3>Seguridad en internet <span class="fr">(sécurité en ligne)</span></h3>
<p>Usa una <b>contraseña segura</b>. <span class="fr">Utilisez un mot de passe robuste.</span><br>
No abras enlaces sospechosos. <span class="fr">N’ouvrez pas les liens suspects.</span><br>
Cuidado con los <b>datos personales</b> y la <b>privacidad</b>. <span class="fr">Faites attention aux données personnelles et à la vie privée.</span><br>
Si alguien te acosa, <b>bloquéalo</b> y <b>denúncialo</b>. <span class="fr">Si quelqu’un vous harcèle, bloquez-le et signalez-le.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Muchos verbos vienen del inglés: <i>chatear, tuitear, hacer clic, wasapear</i> (enviar un WhatsApp). Son muy coloquiales pero se usan mucho.</div></div>`,
  voc: [
    ["📱", "el móvil", "téléphone portable"],
    ["💻", "el portátil", "ordinateur portable"],
    ["🖥️", "el ordenador", "ordinateur"],
    ["⌨️", "el teclado", "clavier"],
    ["🖱️", "el ratón", "souris"],
    ["🔋", "la batería", "batterie"],
    ["🔌", "el cargador", "chargeur"],
    ["📶", "la conexión", "connexion, signal"],
    ["🔑", "la contraseña", "mot de passe"],
    ["📥", "descargar", "télécharger"],
    ["📤", "subir", "téléverser, publier"],
    ["🔗", "el enlace", "lien"],
    ["👍", "el me gusta", "mention « J’aime »"],
    ["💬", "el mensaje", "message"],
    ["🔒", "la privacidad", "vie privée"],
    ["🎮", "el videojuego", "jeu vidéo"],
    ["📸", "la publicación", "publication (réseaux sociaux)"]
  ],
  ex: [
    { q: "En México no dicen «el móvil», dicen…", o: ["el celular", "el portátil", "el teclado"], a: 0, t: "Au Mexique, on dit « el celular » pour désigner le téléphone portable." },
    { q: "Me he quedado sin ___; necesito el cargador.", o: ["batería", "contraseña", "pantalla"], a: 0, t: "Ma batterie est déchargée ; j’ai besoin du chargeur." },
    { q: "Para entrar en tu cuenta necesitas tu…", o: ["ratón", "contraseña", "enlace"], a: 1, t: "Pour te connecter à ton compte, tu as besoin de ton mot de passe." },
    { q: "No abras ese correo: el enlace parece…", o: ["sospechoso", "guardado", "conectado"], a: 0, t: "N’ouvre pas ce courriel : le lien semble suspect." },
    { q: "Ayer ___ una aplicación nueva para aprender idiomas. (descargar, pretérito, yo)", a: ["descargué", "descargue"], t: "Hier, j’ai téléchargé une nouvelle application de langues." },
    { q: "¿Me puedes ___ el enlace por WhatsApp? (partager, infinitif)", a: ["compartir", "pasar", "mandar", "enviar"], t: "Peux-tu partager le lien avec moi sur WhatsApp ?" },
    { q: "Mi hermana ___ fotos a Instagram todos los días. (subir, presente)", a: ["sube"], t: "Ma sœur publie des photos sur Instagram tous les jours." },
    { q: "No olvides ___ el documento antes de cerrar. (économiser)", a: ["guardar"], t: "N’oublie pas d’enregistrer le document avant de fermer." },
    { q: "La red ___ del hotel no funciona bien. (wifi)", a: ["wifi"], t: "Le réseau Wi-Fi de l’hôtel ne fonctionne pas bien." },
    { w: "Nunca compartas tu contraseña con nadie.", t: "Ne partage jamais ton mot de passe avec qui que ce soit." },
    { w: "Sigo a muchos cocineros en las redes sociales.", t: "Je suis beaucoup de chefs sur les réseaux sociaux." },
    { w: "¿Me ayudas a descargar esta aplicación?", t: "Tu m’aides à télécharger cette application ?" }
  ],
  tx: {
    ti: "Una semana sin pantallas",
    b: `Diego tiene veinte años, estudia en Bogotá y pasa unas siete horas al día con el <u>celular</u>. Por la mañana mira sus <u>redes sociales</u>, en clase toma apuntes en el <u>portátil</u> y por la noche juega a <u>videojuegos</u> en línea con sus amigos.<br><br>Un día, su profesora propuso un reto: pasar una semana sin <u>conectarse</u> a internet en el tiempo libre. Diego aceptó, aunque al principio le pareció imposible. El primer día se sentía nervioso y quería <u>descargar</u> los mensajes cada cinco minutos. Pero poco a poco empezó a leer, a salir a correr y a hablar más con su familia.<br><br>Al final de la semana, Diego <u>subió</u> una <u>publicación</u> para <u>compartir</u> su experiencia. Escribió que la tecnología es muy útil, pero que hay que usarla con cuidado. También aprendió algo sobre seguridad: ahora usa una <u>contraseña</u> diferente para cada <u>aplicación</u> y piensa dos veces antes de publicar sus <u>datos personales</u>.`
  },
  q: [
    ["¿Cuántas horas al día usaba Diego el celular?", ["Unas tres", "Unas siete", "Unas diez"], 1],
    ["¿Quién le propuso el reto?", ["Su madre", "Un amigo", "Su profesora"], 2],
    ["¿Cómo se sentía Diego el primer día?", ["Nervioso", "Feliz", "Aburrido pero tranquilo"], 0],
    ["¿Qué cambió Diego sobre la seguridad?", ["Borró todas sus redes", "Usa una contraseña distinta para cada app", "Compró un móvil nuevo"], 1]
  ],
  sp: [
    "¿Cuántas horas al día usas el móvil? ¿Crees que es demasiado?",
    "¿Qué aplicaciones son imprescindibles para ti? ¿Por qué?",
    "¿Qué redes sociales usas y qué sueles subir o compartir?",
    "Da tres consejos a un amigo para estar seguro en internet.",
    "¿Podrías pasar una semana sin internet? Explica por qué sí o por qué no.",
    "En tu opinión, ¿la tecnología nos acerca o nos aleja de las personas?"
  ]
},
{
  id: "b1-emoc",
  lvl: "B1",
  k: "v",
  t: "Sentimientos y personalidad",
  fr: "Les sentiments et la personnalité",
  ic: "😊",
  th: `<div class="card"><h2>Expresar sentimientos <span class="fr">(exprimer ses sentiments)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>estar contento/a, alegre</td><td>être heureux / joyeux</td></tr>
<tr><td>estar triste, deprimido/a</td><td>être triste, déprimé</td></tr>
<tr><td>estar enfadado/a (Esp.) / enojado/a (Lat.)</td><td>être en colère</td></tr>
<tr><td>estar preocupado/a, nervioso/a</td><td>être inquiet, nerveux</td></tr>
<tr><td>estar orgulloso/a de</td><td>être fier de</td></tr>
<tr><td>estar harto/a de</td><td>en avoir assez de</td></tr>
<tr><td>tener celos / tener miedo</td><td>être jaloux / avoir peur</td></tr>
</table></div>
<div class="card"><h3>Ponerse, sentirse, estar <span class="fr">(devenir, se sentir, être)</span></h3>
<p><b>ponerse</b> + adjetivo = cambio rápido de emoción <span class="fr">changement brusque d’humeur</span><br>
Me pongo nervioso antes de los exámenes. <span class="fr">Je suis nerveux / nerveuse avant les examens.</span><br>
Se puso roja cuando la vio. <span class="fr">Elle a rougi en la voyant.</span><br>
<b>sentirse</b> + adjetivo/adverbio = cómo te sientes por dentro <span class="fr">ce que l’on ressent à l’intérieur</span><br>
Hoy me siento solo. <span class="fr">Aujourd’hui, je me sens seul(e).</span> · Me siento fatal. <span class="fr">Je me sens très mal.</span><br>
<b>estar harto de</b> + nombre/infinitivo <span class="fr">en avoir assez de</span><br>
Estoy harta de esperar. <span class="fr">J’en ai assez d’attendre.</span><br>
<b>me da</b> + nombre: me da miedo, me da vergüenza, me da pena <span class="fr">ça me fait peur, ça me gêne, ça m’attriste</span></p>
<div class="tip"><b>Truco / Astuce :</b> <i>Ser</i> + adjetivo = personalidad (<i>Es nervioso</i> = c’est une personne nerveuse). <i>Estar</i> + adjetivo = estado (<i>Está nervioso</i> = il est nerveux en ce moment).</div></div>
<div class="card"><h3>La personalidad y las relaciones <span class="fr">(personnalité et relations)</span></h3>
<table><tr><th>Positivo 👍</th><th>Negativo 👎</th></tr>
<tr><td>simpático, amable <span class="fr">gentil(le), aimable</span></td><td>antipático, borde (Esp.) <span class="fr">désagréable, impoli(e)</span></td></tr>
<tr><td>generoso <span class="fr">généreux / généreuse</span></td><td>tacaño <span class="fr">radin(e)</span></td></tr>
<tr><td>trabajador <span class="fr">travailleur / travailleuse</span></td><td>vago, flojo (Lat.) <span class="fr">paresseux / paresseuse</span></td></tr>
<tr><td>sincero <span class="fr">honnête</span></td><td>mentiroso <span class="fr">menteur / menteuse, malhonnête</span></td></tr>
<tr><td>tranquilo <span class="fr">calme</span></td><td>impaciente <span class="fr">impatient(e)</span></td></tr>
</table>
<p>llevarse bien/mal con <span class="fr">bien / mal s’entendre avec</span> · enamorarse de <span class="fr">tomber amoureux / amoureuse de</span> · discutir <span class="fr">se disputer</span> · hacer las paces <span class="fr">se réconcilier</span> · romper con <span class="fr">rompre avec</span></p></div>`,
  voc: [
    ["😄", "alegre", "joyeux / joyeuse"],
    ["😢", "triste", "triste"],
    ["😠", "enfadado", "en colère"],
    ["😟", "preocupado", "inquiet / inquiète"],
    ["😳", "la vergüenza", "gêne"],
    ["😨", "el miedo", "peur"],
    ["😒", "los celos", "jalousie"],
    ["🥱", "aburrido", "ennuyé(e)"],
    ["😤", "harto", "lassé(e)"],
    ["🏅", "orgulloso", "fier / fière"],
    ["🤗", "cariñoso", "affectueux / affectueuse"],
    ["😇", "sincero", "honnête, sincère"],
    ["🤑", "tacaño", "radin(e)"],
    ["🙄", "antipático", "désagréable"],
    ["😌", "tranquilo", "calme"],
    ["😍", "enamorarse de", "tomber amoureux / amoureuse de"],
    ["🤝", "llevarse bien con", "bien s’entendre avec"],
    ["💔", "romper con", "rompre avec"]
  ],
  ex: [
    { q: "Siempre me ___ nervioso cuando hablo en público.", o: ["pongo", "siento de", "estoy"], a: 0, t: "Je suis toujours nerveux / nerveuse quand je parle en public." },
    { q: "Mi jefe nunca invita a nada; es muy…", o: ["generoso", "tacaño", "cariñoso"], a: 1, t: "Mon patron ne paie jamais rien ; il est très radin." },
    { q: "Estoy ___ de trabajar los fines de semana.", o: ["harto", "contento", "orgulloso"], a: 0, t: "J’en ai assez de travailler le week-end." },
    { q: "Lo contrario de «trabajador» es…", o: ["sincero", "vago", "tranquilo"], a: 1, t: "Le contraire de « travailleur / travailleuse » est « paresseux / paresseuse »." },
    { q: "Hoy me ___ un poco triste. (sentirse, yo)", a: ["siento"], t: "Aujourd’hui, je me sens un peu triste." },
    { q: "Ana y su hermano se ___ muy bien. (llevar)", a: ["llevan"], t: "Ana et son frère s’entendent très bien." },
    { q: "Me da ___ hablar delante de tanta gente. (embarrassment)", a: ["vergüenza", "verguenza"], t: "Parler devant tant de monde me gêne." },
    { q: "Ayer discutimos, pero hoy hemos hecho las ___. (se réconcilier)", a: ["paces"], t: "Nous nous sommes disputés hier, mais nous nous sommes réconciliés aujourd’hui." },
    { w: "Mi abuela está muy orgullosa de mí.", t: "Ma grand-mère est très fière de moi." },
    { w: "Se puso muy contento con la noticia.", t: "Cette nouvelle l’a rendu très heureux." },
    { w: "Marta se enamoró de un chico argentino.", t: "Marta est tombée amoureuse d’un Argentin." },
    { w: "No me llevo bien con mi compañero.", t: "Je ne m’entends pas bien avec mon collègue." }
  ],
  tx: {
    ti: "Dos hermanas muy diferentes",
    b: `Carmen y Elena son hermanas, pero tienen personalidades muy distintas. Carmen es <u>tranquila</u>, <u>trabajadora</u> y muy <u>sincera</u>: siempre dice lo que piensa. Elena, en cambio, es más <u>impaciente</u> y se <u>pone nerviosa</u> por cualquier cosa, aunque también es muy <u>cariñosa</u> y <u>generosa</u>.<br><br>De pequeñas, discutían mucho. Elena tenía <u>celos</u> de su hermana porque sacaba mejores notas, y Carmen estaba <u>harta de</u> que Elena le cogiera la ropa sin pedir permiso. Sin embargo, siempre hacían <u>las paces</u> antes de dormir.<br><br>Ahora viven en ciudades diferentes: Carmen en Sevilla y Elena en Lima, donde trabaja como enfermera. Hablan por videollamada todos los domingos y <u>se llevan</u> mejor que nunca. Cuando Elena <u>se siente</u> sola o <u>preocupada</u>, llama a Carmen, que siempre la escucha. Y Carmen dice que está muy <u>orgullosa de</u> su hermana pequeña, que ha sido muy valiente al empezar una vida nueva en otro país.`
  },
  q: [
    ["¿Cómo es Carmen?", ["Impaciente y nerviosa", "Tranquila y sincera", "Tacaña y antipática"], 1],
    ["¿Por qué tenía celos Elena de pequeña?", ["Porque Carmen sacaba mejores notas", "Porque Carmen tenía más ropa", "Porque Carmen tenía novio"], 0],
    ["¿Dónde vive Elena ahora?", ["En Sevilla", "En Bogotá", "En Lima"], 2],
    ["¿Qué siente Carmen por su hermana?", ["Está harta de ella", "Está orgullosa de ella", "Tiene miedo por ella"], 1]
  ],
  sp: [
    "Describe tu personalidad con cuatro adjetivos y da ejemplos.",
    "¿Qué situaciones te ponen nervioso o nerviosa?",
    "¿De qué estás harto o harta últimamente? Explica por qué.",
    "Describe a tu mejor amigo o amiga. ¿Por qué os lleváis tan bien?",
    "¿De qué te sientes más orgulloso u orgullosa en tu vida?",
    "¿Qué haces cuando discutes con alguien? ¿Cómo hacéis las paces?"
  ]
},
{
  id: "b1-medios",
  lvl: "B1",
  k: "v",
  t: "Medios de comunicación y noticias",
  fr: "Les médias et l’actualité",
  ic: "📰",
  th: `<div class="card"><h2>Los medios de comunicación <span class="fr">(médias)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>la prensa / el periódico / el diario</td><td>la presse / le journal / le quotidien</td></tr>
<tr><td>la revista</td><td>magazine</td></tr>
<tr><td>la televisión / la cadena / el canal</td><td>télévision / réseau / chaîne</td></tr>
<tr><td>la radio / la emisora</td><td>radio / station de radio</td></tr>
<tr><td>el telediario (Esp.) / el noticiero (Lat.)</td><td>journal télévisé</td></tr>
<tr><td>el/la periodista, el/la reportero/a</td><td>journaliste, reporter</td></tr>
<tr><td>el/la presentador/a</td><td>présentateur / présentatrice</td></tr>
<tr><td>el pódcast, el blog, la prensa digital</td><td>podcast, blog, presse en ligne</td></tr>
</table></div>
<div class="card"><h3>Las secciones de un periódico <span class="fr">(rubriques du journal)</span></h3>
<p>📌 <b>la portada</b> <span class="fr">une</span> · 🌐 <b>internacional</b> <span class="fr">actualité internationale</span> · 🏛️ <b>política / nacional</b> <span class="fr">politique / national</span> · 💶 <b>economía</b> <span class="fr">entreprise</span> · ⚽ <b>deportes</b> <span class="fr">sports</span> · 🎭 <b>cultura y espectáculos</b> <span class="fr">arts et divertissement</span> · ✍️ <b>opinión</b> <span class="fr">opinion</span> · 🌦️ <b>el tiempo</b> <span class="fr">météo</span> · 📢 <b>los anuncios</b> <span class="fr">publicités</span></p>
<p>Una noticia tiene <b>el titular</b> <span class="fr">gros titre</span>, <b>el subtítulo</b> <span class="fr">sous-titre</span> y <b>el cuerpo</b> <span class="fr">corps</span>. Los titulares usan a menudo el presente y omiten artículos: <i>«Detienen a dos ladrones en Valencia»</i> <span class="fr">Deux voleurs arrêtés à Valence</span>.</p></div>
<div class="card"><h3>Noticias falsas <span class="fr">(fausses informations)</span></h3>
<p>Las <b>noticias falsas</b> (o <i>bulos</i>, en España) se <b>difunden</b> muy rápido por las redes. <span class="fr">Les fausses informations se propagent très vite sur les réseaux sociaux.</span><br>
Antes de compartir, hay que <b>comprobar la fuente</b> y <b>contrastar la información</b>. <span class="fr">Avant de partager, vérifiez la source et recoupez les informations.</span><br>
Según el periódico… / Al parecer… / Se dice que… <span class="fr">Selon le journal… / Apparemment… / On dit que…</span></p>
<div class="tip"><b>Truco / Astuce :</b> <i>La noticia</i> = une nouvelle (<i>una noticia</i>, une information). <i>Las noticias</i> = l’actualité en général ou le journal télévisé. ¡No digas «un nuevo»!</div></div>`,
  voc: [
    ["📰", "el periódico", "journal"],
    ["📖", "la revista", "magazine"],
    ["📺", "el telediario", "journal télévisé"],
    ["📻", "la emisora", "station de radio"],
    ["🎙️", "el/la periodista", "journaliste"],
    ["🧑‍💼", "el/la presentador/a", "présentateur / présentatrice"],
    ["🗞️", "el titular", "gros titre"],
    ["📌", "la portada", "une"],
    ["⚽", "la sección de deportes", "rubrique des sports"],
    ["🌦️", "el pronóstico del tiempo", "prévisions météo"],
    ["📢", "el anuncio", "publicité"],
    ["🎧", "el pódcast", "podcast"],
    ["🤥", "la noticia falsa", "fausse information"],
    ["🔍", "la fuente", "source"],
    ["🎤", "la entrevista", "entretien"],
    ["🔴", "en directo", "live"]
  ],
  ex: [
    { q: "En Latinoamérica, el programa de noticias de la tele se llama…", o: ["el noticiero", "el periódico", "la emisora"], a: 0, t: "En Amérique latine, le journal télévisé s’appelle « el noticiero »." },
    { q: "La primera página de un periódico es…", o: ["la portada", "el titular", "la revista"], a: 0, t: "La première page d’un journal s’appelle la une." },
    { q: "Los resultados del fútbol están en la sección de…", o: ["economía", "deportes", "opinión"], a: 1, t: "Les résultats de football se trouvent dans la rubrique des sports." },
    { q: "Antes de compartir una noticia, hay que comprobar…", o: ["la fuente", "el anuncio", "la emisora"], a: 0, t: "Avant de partager une information, il faut vérifier la source." },
    { q: "He leído una ___ muy interesante sobre el clima. (piece of news)", a: ["noticia"], t: "J’ai lu une nouvelle très intéressante sur le climat." },
    { q: "El partido se emite en ___ esta noche. (live)", a: ["directo"], t: "Le match est retransmis en direct ce soir." },
    { q: "Mi tía es ___ y trabaja en un diario de Buenos Aires. (journalist)", a: ["periodista"], t: "Ma tante est journaliste et travaille pour un quotidien de Buenos Aires." },
    { q: "Según el pronóstico del ___, mañana va a llover. (météo)", a: ["tiempo"], t: "Selon les prévisions météo, il va pleuvoir demain." },
    { w: "Escucho la radio todas las mañanas.", t: "J’écoute la radio tous les matins." },
    { w: "Esa noticia falsa se difundió por internet.", t: "Cette fausse information s’est répandue sur Internet." },
    { w: "Según el periódico, el alcalde va a dimitir.", t: "Selon le journal, le maire va démissionner." },
    { w: "La presentadora entrevistó a un actor famoso.", t: "Le présentateur a interviewé un acteur célèbre." }
  ],
  tx: {
    ti: "¿Verdad o bulo?",
    b: `El lunes pasado, un mensaje se hizo viral en las <u>redes sociales</u>: «Cierran todas las playas de Málaga por un tiburón». En pocas horas, miles de personas lo habían <u>compartido</u>. Pablo, un estudiante de <u>periodismo</u>, sospechó enseguida. El <u>titular</u> era muy alarmista y el mensaje no citaba ninguna <u>fuente</u>.<br><br>Pablo decidió <u>contrastar la información</u>. Primero buscó en la <u>prensa digital</u> y en la <u>portada</u> de los principales <u>periódicos</u>, pero no encontró nada. Después escuchó una <u>emisora</u> de radio local y, por último, vio el <u>telediario</u> de la noche. Nadie hablaba del tiburón.<br><br>Al día siguiente, el ayuntamiento confirmó que era una <u>noticia falsa</u>: la foto del tiburón era de Australia y tenía cinco años. Pablo escribió un artículo en el blog de su universidad explicando cómo detectar <u>bulos</u>. Su consejo principal es sencillo: «Antes de compartir, lee la noticia completa, comprueba quién la publica y busca otras fuentes».`
  },
  q: [
    ["¿Qué decía el mensaje viral?", ["Que había un incendio en Málaga", "Que cerraban las playas por un tiburón", "Que llegaba una tormenta"], 1],
    ["¿Por qué sospechó Pablo?", ["Porque no citaba ninguna fuente", "Porque lo envió un amigo", "Porque estaba en inglés"], 0],
    ["¿De dónde era realmente la foto?", ["De Málaga", "De México", "De Australia"], 2],
    ["¿Dónde publicó Pablo su artículo?", ["En el telediario", "En el blog de su universidad", "En una revista"], 1]
  ],
  sp: [
    "¿Cómo te informas normalmente: prensa, televisión, radio o redes sociales?",
    "¿Qué sección del periódico lees primero? ¿Por qué?",
    "Cuenta una noticia importante que has leído o escuchado esta semana.",
    "¿Alguna vez has creído una noticia falsa? ¿Qué pasó?",
    "Da tres consejos para detectar noticias falsas.",
    "En tu opinión, ¿los periodistas tienen demasiado poder? Justifica tu respuesta."
  ]
},
{
  id: "b1-cultura",
  lvl: "B1",
  k: "v",
  t: "Cultura hispana y fiestas",
  fr: "La culture hispanique et les fêtes",
  ic: "🎉",
  th: `<div class="card"><h2>Fiestas del mundo hispano <span class="fr">(fêtes du monde hispanique)</span></h2>
<table><tr><th>Fiesta</th><th>¿Dónde y cuándo?</th><th>¿Qué se hace?</th></tr>
<tr><td>💀 Día de Muertos</td><td>México, 1 y 2 de noviembre</td><td>Se ponen <b>altares</b> con <b>ofrendas</b>, flores de cempasúchil y calaveras de azúcar para recordar a los difuntos. <span class="fr">Des autels ornés d’offrandes, de soucis et de crânes en sucre rendent hommage aux morts.</span></td></tr>
<tr><td>🐂 San Fermín</td><td>Pamplona (España), 6–14 de julio</td><td>Los <b>encierros</b>: la gente corre delante de los toros. Todos visten de blanco con un pañuelo rojo. <span class="fr">Les taureaux courent dans les rues ; tout le monde porte du blanc avec un foulard rouge.</span></td></tr>
<tr><td>☀️ Inti Raymi</td><td>Cusco (Perú), 24 de junio</td><td>La fiesta inca del Sol, con <b>desfiles</b>, música y ceremonias en Sacsayhuamán. <span class="fr">La fête inca du Soleil, avec des défilés et des cérémonies.</span></td></tr>
<tr><td>✝️ Semana Santa</td><td>marzo o abril</td><td><b>Procesiones</b> con pasos y nazarenos, sobre todo en Sevilla y Guatemala (alfombras de flores). <span class="fr">Processions, notamment à Séville et au Guatemala.</span></td></tr>
<tr><td>🎄 Navidad</td><td>24 de diciembre – 6 de enero</td><td>Nochebuena, Nochevieja (12 uvas en España), los <b>Reyes Magos</b> y las <b>posadas</b> en México. <span class="fr">le réveillon de Noël, le réveillon du Nouvel An, les Rois mages, les posadas.</span></td></tr>
</table></div>
<div class="card"><h3>Costumbres <span class="fr">(coutumes)</span></h3>
<p>la <b>sobremesa</b>: quedarse hablando en la mesa después de comer <span class="fr">discuter à table après le repas</span><br>
la <b>siesta</b>, el <b>tapeo</b> (ir de tapas) <span class="fr">sieste, sortie pour manger des tapas</span><br>
dar <b>dos besos</b> al saludar (España) / un beso (gran parte de Latinoamérica) <span class="fr">deux bises / une bise pour se saluer</span><br>
la <b>quinceañera</b>: fiesta de los 15 años de una chica en Latinoamérica <span class="fr">fête des quinze ans d’une jeune fille</span><br>
el <b>santo</b>: el día del santo de tu nombre <span class="fr">ta fête</span></p>
<div class="tip"><b>Truco / Astuce :</b> Para hablar de costumbres usa el <b>se impersonal</b>: <i>En Navidad <u>se come</u> turrón. En México <u>se celebran</u> las posadas.</i> (verbo en singular o plural según el nombre)</div></div>`,
  voc: [
    ["💀", "la calavera", "skull"],
    ["🕯️", "la vela", "candle"],
    ["🌼", "la ofrenda", "offering"],
    ["🐂", "el encierro", "bull run"],
    ["🧣", "el pañuelo", "foulard, mouchoir"],
    ["☀️", "el dios Sol", "le dieu Soleil"],
    ["💃", "el desfile", "défilé"],
    ["⛪", "la procesión", "procession"],
    ["🎄", "la Nochebuena", "réveillon de Noël"],
    ["🍇", "las doce uvas", "les douze raisins"],
    ["👑", "los Reyes Magos", "les Rois mages"],
    ["🎆", "los fuegos artificiales", "feux d’artifice"],
    ["🎭", "el disfraz", "costume"],
    ["🥘", "el plato típico", "plat typique"],
    ["🎶", "la música tradicional", "musique traditionnelle"],
    ["😴", "la siesta", "sieste"],
    ["👗", "la quinceañera", "fête des quinze ans"]
  ],
  ex: [
    { q: "El Día de Muertos se celebra sobre todo en…", o: ["México", "España", "Argentina"], a: 0, t: "Le Jour des morts est célébré principalement au Mexique." },
    { q: "En San Fermín, la gente corre delante de los toros en…", o: ["las procesiones", "los encierros", "las posadas"], a: 1, t: "Pendant les fêtes de San Fermín, les gens courent devant les taureaux lors des encierros." },
    { q: "El Inti Raymi es la fiesta inca del…", o: ["Sol", "Mar", "Maíz"], a: 0, t: "Inti Raymi est la fête inca du Soleil." },
    { q: "En España, en Nochevieja se comen doce…", o: ["turrones", "uvas", "calaveras"], a: 1, t: "En Espagne, le soir du Nouvel An, on mange douze raisins." },
    { q: "En Navidad ___ turrón en España. (comer, se impersonal)", a: ["se come"], t: "À Noël, on mange du turrón en Espagne." },
    { q: "Los niños españoles reciben regalos de los Reyes ___ el 6 de enero. (Wise)", a: ["magos"], t: "Les enfants espagnols reçoivent des cadeaux des Rois mages le 6 janvier." },
    { q: "Después de comer, nos quedamos charlando en la ___. (discussion après le repas)", a: ["sobremesa"], t: "Après le déjeuner, nous sommes restés à discuter à table." },
    { q: "En Sevilla, durante la Semana Santa, hay muchas ___. (processions)", a: ["procesiones"], t: "À Séville, il y a de nombreuses processions pendant la Semaine sainte." },
    { w: "En Pamplona todos visten de blanco y rojo.", t: "À Pampelune, tout le monde s’habille en blanc et rouge." },
    { w: "Las familias ponen altares con fotos y flores.", t: "Les familles dressent des autels avec des photos et des fleurs." },
    { w: "En México se celebran las posadas en diciembre.", t: "Au Mexique, les posadas sont célébrées en décembre." },
    { w: "Al final de la fiesta hay fuegos artificiales.", t: "À la fin de la fête, il y a des feux d’artifice." }
  ],
  tx: {
    ti: "Un año de fiestas",
    b: `Sofía es una periodista chilena que pasó un año viajando para escribir un libro sobre las <u>fiestas</u> hispanas. En abril estuvo en Sevilla durante la <u>Semana Santa</u>. Le impresionó el silencio de las <u>procesiones</u> por la noche, con miles de <u>velas</u> encendidas.<br><br>En junio viajó a Cusco para ver el <u>Inti Raymi</u>. Cientos de actores vestidos de incas representaron la ceremonia al <u>dios Sol</u>, con <u>música tradicional</u> y bailes. En julio corrió… bueno, miró desde un balcón los <u>encierros</u> de <u>San Fermín</u>, con su <u>pañuelo</u> rojo.<br><br>Su fiesta favorita, sin embargo, fue el <u>Día de Muertos</u> en Oaxaca. Una familia la invitó a su casa y le explicó el significado del <u>altar</u>: las <u>ofrendas</u> de comida, las flores naranjas y las <u>calaveras</u> de azúcar sirven para dar la bienvenida a los difuntos. «No es una fiesta triste», le dijo la abuela, «es una celebración de la vida». Sofía terminó el año en Madrid, comiendo las <u>doce uvas</u> en Nochevieja.`
  },
  q: [
    ["¿De dónde es Sofía?", ["De México", "De Chile", "De España"], 1],
    ["¿Qué le impresionó de la Semana Santa en Sevilla?", ["El ruido de la música", "El silencio de las procesiones", "Los fuegos artificiales"], 1],
    ["¿Cómo vio Sofía los encierros de San Fermín?", ["Corriendo delante de los toros", "Por televisión", "Desde un balcón"], 2],
    ["Según la abuela, ¿qué es el Día de Muertos?", ["Una celebración de la vida", "Una fiesta muy triste", "Una fiesta solo para niños"], 0]
  ],
  sp: [
    "¿Cuál es la fiesta más importante de tu país? Descríbela.",
    "¿Qué fiesta hispana te gustaría conocer en persona? ¿Por qué?",
    "¿Cómo celebras tú la Navidad o el Año Nuevo?",
    "Compara una costumbre de tu país con una costumbre española o latinoamericana.",
    "¿Qué opinas de los encierros de San Fermín? Da tu opinión.",
    "Explica a un amigo extranjero qué se hace en un cumpleaños en tu cultura."
  ]
},
{
  id: "b1-frases",
  lvl: "B1",
  k: "v",
  t: "Frases hechas y coloquiales",
  fr: "Les expressions idiomatiques et familières",
  ic: "💬",
  th: `<div class="card"><h2>Frases hechas <span class="fr">(expressions idiomatiques)</span></h2>
<table><tr><th>Expresión</th><th>Significado</th><th>Ejemplo</th></tr>
<tr><td>estar en las nubes</td><td>estar distraído <span class="fr">être dans la lune</span></td><td>Perdona, estaba en las nubes. <span class="fr">Désolé(e), j’étais dans la lune.</span></td></tr>
<tr><td>costar un ojo de la cara</td><td>ser muy caro <span class="fr">coûter les yeux de la tête</span></td><td>Este móvil cuesta un ojo de la cara. <span class="fr">Ce téléphone coûte une fortune.</span></td></tr>
<tr><td>ser pan comido</td><td>ser muy fácil <span class="fr">être très facile</span></td><td>El examen fue pan comido. <span class="fr">L’examen était très facile.</span></td></tr>
<tr><td>tomar el pelo</td><td>engañar en broma <span class="fr">faire marcher quelqu’un</span></td><td>¿Me estás tomando el pelo? <span class="fr">Tu me fais marcher ?</span></td></tr>
<tr><td>meter la pata</td><td>cometer un error <span class="fr">faire une gaffe</span></td><td>Metí la pata con mi jefa. <span class="fr">J’ai fait une gaffe devant mon patron.</span></td></tr>
<tr><td>echar una mano</td><td>ayudar <span class="fr">donner un coup de main</span></td><td>¿Me echas una mano? <span class="fr">Tu peux me donner un coup de main ?</span></td></tr>
<tr><td>no tener pelos en la lengua</td><td>decir lo que piensas <span class="fr">dire franchement ce que l’on pense</span></td><td>Mi abuela no tiene pelos en la lengua. <span class="fr">Ma grand-mère ne mâche pas ses mots.</span></td></tr>
<tr><td>estar hecho polvo</td><td>estar muy cansado <span class="fr">être épuisé(e)</span></td><td>Después del viaje estoy hecho polvo. <span class="fr">Je suis épuisé(e) après le voyage.</span></td></tr>
<tr><td>ponerse las pilas</td><td>empezar a esforzarse <span class="fr">se reprendre</span></td><td>Tienes que ponerte las pilas. <span class="fr">Tu dois te reprendre.</span></td></tr>
</table>
<div class="tip"><b>Truco / Astuce :</b> En las frases hechas el verbo se conjuga, pero el resto no cambia: <i>Yo <u>meto</u> la pata, tú <u>metiste</u> la pata, ellos <u>han metido</u> la pata.</i></div></div>
<div class="card"><h3>Palabras coloquiales <span class="fr">(mots familiers)</span></h3>
<table><tr><th>Palabra</th><th>¿Dónde?</th><th>Significado</th></tr>
<tr><td>guay</td><td>🇪🇸 España</td><td>genial <span class="fr">chouette</span></td></tr>
<tr><td>vale</td><td>🇪🇸 España</td><td>de acuerdo <span class="fr">d’accord</span></td></tr>
<tr><td>tío / tía</td><td>🇪🇸 España</td><td>amigo, persona <span class="fr">pote, mec</span></td></tr>
<tr><td>chévere</td><td>🇻🇪 🇨🇴 🇵🇪 Caribe y Andes</td><td>genial <span class="fr">sympa, génial</span></td></tr>
<tr><td>órale</td><td>🇲🇽 México</td><td>¡vale!, ¡vamos!, ¡qué sorpresa! <span class="fr">D’accord ! Allez ! Waouh !</span></td></tr>
<tr><td>padre / qué padre</td><td>🇲🇽 México</td><td>genial <span class="fr">chouette</span></td></tr>
<tr><td>bacán</td><td>🇨🇱 🇵🇪 Chile, Perú</td><td>genial <span class="fr">chouette</span></td></tr>
<tr><td>che / boludo</td><td>🇦🇷 Argentina</td><td>llamar a un amigo (boludo es vulgar con desconocidos) <span class="fr">salut / mon pote</span></td></tr>
<tr><td>la plata / la pasta</td><td>Latinoamérica / España</td><td>el dinero <span class="fr">argent, fric</span></td></tr>
</table></div>`,
  voc: [
    ["☁️", "estar en las nubes", "être dans la lune"],
    ["👁️", "costar un ojo de la cara", "coûter les yeux de la tête"],
    ["🍞", "ser pan comido", "être très facile"],
    ["💇", "tomar el pelo", "faire marcher quelqu’un"],
    ["🦶", "meter la pata", "faire une gaffe"],
    ["🤲", "echar una mano", "donner un coup de main"],
    ["👅", "no tener pelos en la lengua", "dire franchement ce que l’on pense"],
    ["🔋", "ponerse las pilas", "se reprendre"],
    ["😵", "estar hecho polvo", "être épuisé"],
    ["😎", "guay", "chouette (Espagne)"],
    ["👌", "vale", "d’accord (Espagne)"],
    ["🌴", "chévere", "super (Caraïbes, Colombie)"],
    ["🌮", "órale", "d’accord ! / waouh ! (Mexique)"],
    ["🤙", "bacán", "super (Chili, Pérou)"],
    ["💵", "la plata", "argent (Amérique latine)"],
    ["🧉", "che", "salut (Argentine)"]
  ],
  ex: [
    { q: "Este examen es muy fácil; es…", o: ["pan comido", "un ojo de la cara", "hecho polvo"], a: 0, t: "Cet examen est très facile, c’est un jeu d’enfant." },
    { q: "Le dije a Marta que su novio era feo… ¡y era su hermano! Metí…", o: ["la mano", "la pata", "el pelo"], a: 1, t: "J’ai dit à Marta que son petit ami était moche… et c’était son frère ! J’ai fait une gaffe." },
    { q: "En México, para decir «¡vale, vamos!», se dice…", o: ["¡guay!", "¡órale!", "¡che!"], a: 1, t: "Au Mexique, « órale ! » signifie « d’accord, allons-y ! »." },
    { q: "En Colombia, una fiesta «chévere» es una fiesta…", o: ["aburrida", "muy cara", "estupenda"], a: 2, t: "En Colombie, une fête « chévere » est une super fête." },
    { q: "Esta chaqueta me costó un ojo de la ___. (face)", a: ["cara"], t: "Cette veste m’a coûté les yeux de la tête." },
    { q: "¿Me ___ una mano con la mudanza? (echar, tú, presente)", a: ["echas"], t: "Tu me donneras un coup de main pour le déménagement ?" },
    { q: "No me tomes el ___; eso no puede ser verdad. (hair)", a: ["pelo"], t: "Ne me fais pas marcher, ce n’est pas possible." },
    { q: "Si quieres aprobar, tienes que ponerte las ___. (batteries)", a: ["pilas"], t: "Si tu veux réussir, tu dois te reprendre." },
    { w: "Perdona, no te escuchaba; estaba en las nubes.", t: "Désolé(e), je n’écoutais pas ; j’étais dans la lune." },
    { w: "Mi abuela no tiene pelos en la lengua.", t: "Ma grand-mère ne mâche pas ses mots." },
    { w: "Después de la mudanza estoy hecho polvo.", t: "Après le déménagement, je suis épuisé(e)." },
    { w: "¡Qué guay! Vale, nos vemos a las ocho.", t: "Génial ! D’accord, à huit heures." }
  ],
  tx: {
    ti: "Un intercambio muy coloquial",
    b: `Tom es un estudiante inglés que vive en Madrid y tiene un intercambio de idiomas con Andrés, un chico de Bogotá. Tom habla bien español, pero las <u>frases hechas</u> le parecen un misterio.<br><br>El primer día, su compañera de piso le dijo: «¡Qué <u>guay</u> tu camiseta, <u>tío</u>!». Tom no entendía por qué lo llamaba «tío». Luego, en clase, el profesor le preguntó algo y Tom no respondió porque <u>estaba en las nubes</u>. «<u>Ponte las pilas</u>», le dijo el profesor, y Tom buscó unas pilas en su mochila. ¡Qué vergüenza! Había <u>metido la pata</u>.<br><br>Andrés le <u>echó una mano</u>: le explicó que en Colombia dicen <u>chévere</u> en lugar de «guay», y que en México un amigo suyo siempre dice <u>órale</u>. También le advirtió: «A veces la gente te va a <u>tomar el pelo</u>, pero no te preocupes». Ahora Tom entiende casi todo. Dice que aprender expresiones coloquiales no es <u>pan comido</u>, pero que es la parte más divertida del idioma.`
  },
  q: [
    ["¿De dónde es Andrés?", ["De Madrid", "De Bogotá", "De México"], 1],
    ["¿Por qué no respondió Tom al profesor?", ["Porque estaba distraído", "Porque estaba enfadado", "Porque no tenía pilas"], 0],
    ["¿Qué hizo Tom cuando el profesor dijo «ponte las pilas»?", ["Se puso a estudiar", "Buscó pilas en su mochila", "Salió de clase"], 1],
    ["¿Qué opina Tom de las expresiones coloquiales?", ["Que son fáciles", "Que son aburridas", "Que son difíciles pero divertidas"], 2]
  ],
  sp: [
    "Cuenta una vez en la que metiste la pata. ¿Qué pasó?",
    "¿Qué cosa te parece pan comido y qué cosa te cuesta mucho?",
    "Nombra algo que cuesta un ojo de la cara en tu ciudad.",
    "¿Cuándo fue la última vez que echaste una mano a alguien?",
    "¿Conoces alguna frase hecha de tu idioma? Explícala en español.",
    "¿Qué palabras coloquiales en español te gustan más: guay, chévere, órale o bacán? ¿Por qué?"
  ]
},
{
  id: "b1-laboral",
  lvl: "B1",
  k: "v",
  t: "Mundo laboral y entrevistas",
  fr: "Le monde du travail et les entretiens d’embauche",
  ic: "💼",
  th: `<div class="card"><h2>Buscar trabajo <span class="fr">(chercher un emploi)</span></h2>
<table><tr><th>Español</th><th>Français</th></tr>
<tr><td>la oferta de empleo / el puesto de trabajo</td><td>offre d’emploi / poste</td></tr>
<tr><td>el currículum (CV) / la carta de presentación</td><td>CV, résumé / cover letter</td></tr>
<tr><td>la experiencia laboral / la formación</td><td>expérience professionnelle / formation</td></tr>
<tr><td>solicitar un puesto / enviar la candidatura</td><td>postuler à un emploi / envoyer sa candidature</td></tr>
<tr><td>el/la candidato/a, el/la entrevistador/a</td><td>candidat(e), recruteur / recruteuse</td></tr>
<tr><td>el contrato indefinido / temporal</td><td>contrat à durée indéterminée / contrat temporaire</td></tr>
<tr><td>a tiempo completo / a media jornada</td><td>à temps plein / à temps partiel</td></tr>
<tr><td>el sueldo / el salario (bruto, neto)</td><td>salaire (brut, net)</td></tr>
<tr><td>contratar / despedir / estar en paro (Esp.), desempleado</td><td>embaucher / licencier / être au chômage</td></tr>
</table></div>
<div class="card"><h3>En la entrevista: registro formal <span class="fr">(registre formel)</span></h3>
<p>En una entrevista se habla de <b>usted</b> (en España, algunas empresas modernas usan <i>tú</i>; en Latinoamérica, <i>usted</i> es más habitual). <span class="fr">Utilisez « usted » lors des entretiens.</span><br>
Encantado/a de conocerle. <span class="fr">Ravi(e) de vous rencontrer.</span><br>
¿Podría hablarme de su experiencia? <span class="fr">Pourriez-vous me parler de votre expérience ?</span><br>
Mis puntos fuertes son la organización y el trabajo en equipo. <span class="fr">Mes points forts sont l’organisation et le travail en équipe.</span><br>
Me gustaría saber cuáles serían mis funciones. <span class="fr">J’aimerais savoir quelles seraient mes fonctions.</span><br>
Quedo a la espera de su respuesta. <span class="fr">Dans l’attente de votre réponse.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Usa el <b>condicional</b> para ser más cortés: <i>quería → <u>querría</u>, puede → <u>podría</u>, me gusta → <u>me gustaría</u></i>. En un correo formal: <i>Estimado/a Sr./Sra. …</i> y <i>Atentamente / Un cordial saludo</i>.</div></div>
<div class="card"><h3>En la oficina <span class="fr">(au bureau)</span></h3>
<p>el/la jefe/a, el/la compañero/a, el equipo <span class="fr">patron, collègue, équipe</span><br>
la reunión, el plazo, el proyecto <span class="fr">réunion, échéance, projet</span><br>
pedir un aumento / pedir vacaciones / estar de baja <span class="fr">demander une augmentation / des congés / être en arrêt maladie</span><br>
teletrabajar (trabajar desde casa) <span class="fr">travailler à distance</span><br>
el horario flexible, hacer horas extra <span class="fr">horaires flexibles, faire des heures supplémentaires</span></p></div>`,
  voc: [
    ["📄", "el currículum", "CV"],
    ["✉️", "la carta de presentación", "lettre de motivation"],
    ["📢", "la oferta de empleo", "offre d’emploi"],
    ["🤝", "la entrevista de trabajo", "entretien d’embauche"],
    ["🧑‍💼", "el/la candidato/a", "candidat(e)"],
    ["📝", "el contrato", "contrat"],
    ["💰", "el sueldo", "salaire"],
    ["⏰", "el horario", "emploi du temps, horaires de travail"],
    ["👔", "el/la jefe/a", "patron / patronne"],
    ["👥", "el/la compañero/a de trabajo", "collègue"],
    ["📊", "la reunión", "réunion"],
    ["📅", "el plazo", "date limite"],
    ["🏠", "teletrabajar", "travailler à domicile"],
    ["📈", "el aumento de sueldo", "augmentation de salaire"],
    ["🚪", "despedir", "licencier"],
    ["✅", "contratar", "embaucher"],
    ["🏖️", "las vacaciones pagadas", "congés payés"]
  ],
  ex: [
    { q: "Un contrato sin fecha de fin es un contrato…", o: ["temporal", "indefinido", "a media jornada"], a: 1, t: "Un contrat sans date de fin est un contrat à durée indéterminée." },
    { q: "En una entrevista formal, lo más adecuado es decir:", o: ["¿Qué tal, tío?", "Encantada de conocerle.", "¡Hola, guapo!"], a: 1, t: "Lors d’un entretien formel, la formule la plus adaptée est « ravi(e) de vous rencontrer »." },
    { q: "Trabajo cuatro horas al día: trabajo a…", o: ["tiempo completo", "media jornada", "horas extra"], a: 1, t: "Je travaille quatre heures par jour : à temps partiel." },
    { q: "Al final de un correo formal escribes:", o: ["Un beso", "Atentamente", "Chao"], a: 1, t: "À la fin d’un courriel formel, on écrit « veuillez agréer mes salutations distinguées »." },
    { q: "Envié mi ___ y una carta de presentación a la empresa. (CV)", a: ["currículum", "curriculum", "cv", "currículo", "curriculo"], t: "J’ai envoyé mon CV et une lettre de motivation à l’entreprise." },
    { q: "¿___ hablarme de su experiencia laboral? (poder, usted, condicional)", a: ["podría", "podria"], t: "Pourriez-vous me parler de votre expérience professionnelle ?" },
    { q: "La empresa va a ___ a cinco personas nuevas este mes. (to hire)", a: ["contratar"], t: "L’entreprise va embaucher cinq nouvelles personnes ce mois-ci." },
    { q: "El ___ para entregar el proyecto es el viernes. (deadline)", a: ["plazo"], t: "La date limite de remise du projet est vendredi." },
    { w: "Me gustaría solicitar el puesto de recepcionista.", t: "J’aimerais postuler au poste de réceptionniste." },
    { w: "Mis puntos fuertes son la organización y la puntualidad.", t: "Mes points forts sont l’organisation et la ponctualité." },
    { w: "Mañana tenemos una reunión con el jefe.", t: "Demain, nous avons une réunion avec le patron." },
    { w: "Quedo a la espera de su respuesta.", t: "Dans l’attente de votre réponse." }
  ],
  tx: {
    ti: "Mi primera entrevista",
    b: `Valentina terminó la carrera de Marketing en Montevideo y estuvo seis meses buscando trabajo. Cada semana leía las <u>ofertas de empleo</u> y enviaba su <u>currículum</u> con una <u>carta de presentación</u>. Por fin, una empresa de turismo la llamó para una <u>entrevista</u>.<br><br>Esa mañana se puso su mejor chaqueta y llegó diez minutos antes. La <u>entrevistadora</u> fue muy amable: «Buenos días, señorita Pérez. ¿Podría hablarme de su <u>experiencia laboral</u>?». Valentina explicó que había hecho unas prácticas en una agencia y que sus <u>puntos fuertes</u> eran la creatividad y el <u>trabajo en equipo</u>. Después preguntó por el <u>horario</u> y el <u>sueldo</u>, con mucha educación: «Me gustaría saber qué tipo de <u>contrato</u> ofrecen».<br><br>Una semana después recibió un correo: «Estimada señorita Pérez: Nos complace comunicarle que ha sido seleccionada para el <u>puesto</u>». Era un contrato <u>temporal</u> de seis meses, <u>a tiempo completo</u>, con posibilidad de <u>teletrabajar</u> dos días a la semana. Valentina lo celebró con su familia esa misma noche.`
  },
  q: [
    ["¿Cuánto tiempo estuvo Valentina buscando trabajo?", ["Seis meses", "Un año", "Dos semanas"], 0],
    ["¿Qué puntos fuertes mencionó en la entrevista?", ["La puntualidad y los idiomas", "La creatividad y el trabajo en equipo", "La paciencia y la informática"], 1],
    ["¿Cómo le comunicaron la noticia?", ["Por teléfono", "En persona", "Por correo"], 2],
    ["¿Qué tipo de contrato le ofrecieron?", ["Indefinido a media jornada", "Temporal a tiempo completo", "Temporal a media jornada"], 1]
  ],
  sp: [
    "Describe tu trabajo ideal: horario, sueldo, compañeros y lugar.",
    "Preséntate como si estuvieras en una entrevista de trabajo (usa usted).",
    "¿Cuáles son tus puntos fuertes y tus puntos débiles en el trabajo?",
    "¿Prefieres teletrabajar o ir a la oficina? Explica por qué.",
    "Pide a tu jefe un aumento de sueldo de forma educada.",
    "¿Qué consejos darías a alguien que tiene su primera entrevista?"
  ]
}
);
