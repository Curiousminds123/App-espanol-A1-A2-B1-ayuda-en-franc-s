/* Camino al Español · Nivel B1 · contenido */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "b1-pasados",
  lvl: "B1",
  k: "g",
  t: "Contraste de pasados",
  fr: "Comparer les temps du passé",
  ic: "🕰️",
  th: `<div class="card"><h2>Tres pasados <span class="fr">(trois temps du passé)</span></h2>
<table><tr><th>Tiempo</th><th>Uso</th><th>Ejemplo</th></tr>
<tr><td><b>Pretérito perfecto</b><br>he hablado</td><td>Pasado conectado con el presente: <i>hoy, esta semana, este año, ya, todavía no, nunca, alguna vez</i></td><td>Hoy <b class="reg">he comido</b> paella. <span class="fr">J’ai mangé de la paella aujourd’hui.</span></td></tr>
<tr><td><b>Indefinido</b><br>hablé</td><td>Acción terminada en un momento concreto: <i>ayer, el lunes, en 2019, hace dos años</i></td><td>Ayer <b class="reg">comí</b> paella. <span class="fr">J’ai mangé de la paella hier.</span></td></tr>
<tr><td><b>Imperfecto</b><br>hablaba</td><td>Descripción, contexto, hábitos del pasado: <i>siempre, todos los días, de niño, antes</i></td><td>De niño <b class="reg">comía</b> paella los domingos. <span class="fr">Enfant, je mangeais de la paella le dimanche.</span></td></tr></table>
<p>En Latinoamérica y en Canarias se usa mucho más el indefinido: <i>Hoy comí paella.</i> <span class="fr">En Amérique latine, l’indefinido remplace souvent le passé composé.</span></p></div>
<div class="card"><h2>Acción y fondo <span class="fr">(action et arrière-plan)</span></h2>
<p>Imagina una película 🎬: el <b>imperfecto</b> es el decorado (cómo era todo, qué pasaba) y el <b>indefinido</b> son las acciones que hacen avanzar la historia.</p>
<p><span class="irr">Hacía</span> sol y <span class="irr">había</span> mucha gente en la playa. De repente, <b class="reg">empezó</b> a llover. <span class="fr">Il faisait beau et il y avait beaucoup de monde sur la plage. Soudain, il s’est mis à pleuvoir.</span></p>
<h3>Acción interrumpida <span class="fr">(action interrompue)</span></h3>
<p>Imperfecto (acción en progreso) + <b>cuando</b> + indefinido (acción que interrumpe):<br>
<b>Estaba</b> en la ducha <b>cuando sonó</b> el teléfono. <span class="fr">J’étais sous la douche quand le téléphone a sonné.</span><br>
<b>Dormía</b> tranquilamente <b>cuando llegaste</b>. <span class="fr">Je dormais paisiblement quand tu es arrivé(e).</span></p>
<h3>Mientras / cuando</h3>
<p><b>Mientras</b> + imperfecto = dos acciones a la vez: <i>Mientras yo cocinaba, él ponía la mesa.</i> <span class="fr">Pendant que je cuisinais, il mettait la table.</span><br>
<b>Cuando</b> + indefinido = una acción después de otra: <i>Cuando llegué, cenamos.</i> <span class="fr">Quand je suis arrivé(e), nous avons dîné.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Pregúntate: ¿la acción <i>avanza</i> la historia (→ indefinido) o <i>describe</i> la situación (→ imperfecto)? <span class="fr">Fait-elle avancer le récit ou décrit-elle le décor ?</span></div></div>
<div class="card"><h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Ayer he ido al cine. ✅ Ayer <b>fui</b> al cine. <span class="fr">« Ayer » situe l’action dans une période terminée → indefinido.</span><br>
❌ Cuando era niño, fui al parque cada día. ✅ Cuando era niño, <b>iba</b> al parque cada día. <span class="fr">Habitudes → imparfait.</span><br>
❌ Leí cuando sonó el timbre. ✅ <b>Leía</b> cuando sonó el timbre. <span class="fr">L’action en cours → imparfait.</span><br>
❌ El concierto era fantástico (y ya terminó). ✅ El concierto <b>fue</b> fantástico. <span class="fr">Évaluation d’un événement terminé → indefinido.</span></p></div>`,
  voc: [
    ["📅","ayer","hier"],
    ["⏳","mientras","pendant que"],
    ["⚡","de repente","soudain"],
    ["🧒","de niño","enfant"],
    ["🔁","siempre","toujours"],
    ["☀️","esta mañana","ce matin"],
    ["🗓️","hace dos años","il y a deux ans"],
    ["🔔","sonar","sonner"],
    ["🌧️","empezar a llover","se mettre à pleuvoir"],
    ["🏖️","había","il y avait"]
  ],
  ex: [
    { q: "Ayer ___ al cine con mis primos.", o: ["he ido","fui","iba"], a: 1, t: "Hier, je suis allé(e) au cinéma avec mes cousins." },
    { q: "Cuando era pequeña, ___ en un pueblo de Asturias.", o: ["viví","he vivido","vivía"], a: 2, t: "Quand j’étais petit(e), j’habitais dans un village des Asturies." },
    { q: "Esta semana ___ mucho trabajo.", o: ["he tenido","tenía","tuve"], a: 0, t: "Cette semaine, j’ai eu beaucoup de travail. (Espagne)" },
    { q: "Yo ___ la tele cuando se fue la luz.", o: ["vi","veía","he visto"], a: 1, t: "Je regardais la télévision quand le courant s’est coupé." },
    { q: "Mientras mi madre ___, mi padre lavaba los platos.", o: ["cocinaba","cocinó","ha cocinado"], a: 0, t: "Pendant que ma mère cuisinait, mon père faisait la vaisselle." },
    { q: "Caminábamos por la calle cuando ___ a Marta. (ver, nosotros)", a: ["vimos"], t: "Nous marchions dans la rue quand nous avons vu Marta." },
    { q: "De niño, siempre ___ al fútbol en el parque. (jugar, yo)", a: ["jugaba"], t: "Enfant, je jouais toujours au football dans le parc." },
    { q: "En 2020 mis padres ___ a México. (viajar)", a: ["viajaron"], t: "En 2020, mes parents ont voyagé au Mexique." },
    { q: "¿___ alguna vez en Buenos Aires? (estar, tú, perfecto)", a: ["has estado"], t: "Es-tu déjà allé(e) à Buenos Aires ?" },
    { w: "Estaba en la ducha cuando sonó el teléfono.", t: "J’étais sous la douche quand le téléphone a sonné." },
    { w: "De repente empezó a llover muy fuerte.", t: "Soudain, il s’est mis à pleuvoir très fort." },
    { w: "Hoy no he desayunado nada todavía.", t: "Je n’ai encore rien pris au petit-déjeuner aujourd’hui." }
  ],
  tx: { ti: "Un viaje inolvidable", b: `El verano pasado <u>fui</u> a Cartagena de Indias con mi amiga Valeria. <u>Hacía</u> mucho calor y las calles <u>estaban</u> llenas de color y de música. El primer día <u>paseamos</u> por la ciudad amurallada y <u>comimos</u> pescado frito en un restaurante pequeño.<br><br>El tercer día <u>pasó</u> algo increíble. <u>Estábamos</u> en la playa y Valeria <u>leía</u> un libro <u>mientras</u> yo <u>tomaba</u> el sol. <u>De repente</u>, un hombre <u>se acercó</u> y nos <u>preguntó</u>: «¿Sois españolas?». ¡<u>Era</u> Andrés, un compañero del colegio! No lo <u>veíamos</u> desde hacía quince años. Esa noche <u>cenamos</u> los tres juntos y <u>hablamos</u> durante horas de cuando <u>éramos</u> niños y <u>jugábamos</u> en el patio.<br><br>Este año <u>he vuelto</u> a hablar con Andrés varias veces y ya <u>hemos planeado</u> otro viaje: esta vez, a Lima. ¡Qué pequeño es el mundo!` },
  q: [
    ["¿Qué tiempo hacía en Cartagena?", ["Llovía mucho","Hacía mucho calor","Hacía frío"], 1],
    ["¿Qué hacía Valeria cuando llegó el hombre?", ["Tomaba el sol","Comía pescado","Leía un libro"], 2],
    ["¿Quién era Andrés?", ["Un compañero del colegio","Un camarero","El novio de Valeria"], 0],
    ["¿Qué han hecho este año?", ["Han viajado a Lima","Han planeado otro viaje","Han vuelto a Cartagena"], 1]
  ],
  sp: [
    "¿Qué has hecho hoy? Cuenta tres cosas.",
    "¿Qué hiciste el fin de semana pasado?",
    "¿Cómo era tu vida cuando tenías diez años? ¿Qué hacías los veranos?",
    "Cuenta una anécdota: ¿qué estabas haciendo cuando pasó algo inesperado?",
    "Describe tu primer día de trabajo o de clase: ¿cómo era el lugar y qué pasó?",
    "¿Cuál es el mejor viaje que has hecho? ¿Adónde fuiste y cómo fue?"
  ]
},
{
  id: "b1-plusc",
  lvl: "B1",
  k: "g",
  t: "Pretérito pluscuamperfecto",
  fr: "Le plus-que-parfait",
  ic: "⏮️",
  th: `<div class="card"><h2>Pluscuamperfecto <span class="fr">(plus-que-parfait)</span></h2>
<p>Se forma con el imperfecto de <b>haber</b> + participio. <span class="fr">Imparfait de « haber » + participe passé.</span></p>
<table><tr><th></th><th>haber</th><th>-AR</th><th>-ER / -IR</th></tr>
<tr><td>yo</td><td>había</td><td rowspan="6">habl<b class="reg">ado</b></td><td rowspan="6">com<b class="reg">ido</b> / viv<b class="reg">ido</b></td></tr>
<tr><td>tú</td><td>habías</td></tr><tr><td>él/ella/usted</td><td>había</td></tr><tr><td>nosotros/as</td><td>habíamos</td></tr><tr><td>vosotros/as</td><td>habíais</td></tr><tr><td>ellos/ellas/ustedes</td><td>habían</td></tr></table>
<h3>Participios irregulares <span class="fr">(participes passés irréguliers)</span></h3>
<table><tr><th>infinitivo</th><th>participio</th><th>infinitivo</th><th>participio</th></tr>
<tr><td>hacer</td><td class="irr">hecho</td><td>ver</td><td class="irr">visto</td></tr>
<tr><td>decir</td><td class="irr">dicho</td><td>volver</td><td class="irr">vuelto</td></tr>
<tr><td>escribir</td><td class="irr">escrito</td><td>poner</td><td class="irr">puesto</td></tr>
<tr><td>abrir</td><td class="irr">abierto</td><td>romper</td><td class="irr">roto</td></tr>
<tr><td>morir</td><td class="irr">muerto</td><td>descubrir</td><td class="irr">descubierto</td></tr></table></div>
<div class="card"><h2>¿Cuándo se usa? <span class="fr">(quand l’emploie-t-on ?)</span></h2>
<p>Para una acción <b>anterior</b> a otra acción del pasado. <span class="fr">Une action qui a eu lieu avant une autre action passée.</span></p>
<p>Cuando llegué a la estación, el tren ya <b>había salido</b>. <span class="fr">Quand je suis arrivé(e) à la gare, le train était déjà parti.</span><br>
Lucía estaba nerviosa porque nunca <b>había volado</b>. <span class="fr">Lucía était nerveuse parce qu’elle n’avait jamais pris l’avion.</span></p>
<h3>Ya / todavía no en el pasado</h3>
<p><b>ya</b> + había… = <i>already</i>: A las diez ya <b>habíamos cenado</b>. <span class="fr">À dix heures, nous avions déjà dîné.</span><br>
<b>todavía no / aún no</b> + había… = <i>not yet</i>: Cuando me llamaste, todavía no <b>había terminado</b>. <span class="fr">Quand tu m’as appelé(e), je n’avais pas encore terminé.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Dibuja una línea del tiempo ⬅️: primero pasa la acción en pluscuamperfecto, después la acción en indefinido. <span class="fr">Le plus-que-parfait = le « passé antérieur à un autre passé ».</span> En el habla de muchos países latinoamericanos a veces se usa el indefinido: <i>Cuando llegué, el tren ya salió</i> (informal).</div></div>
<div class="card"><h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Cuando llegué, el tren ya ha salido. ✅ Cuando llegué, el tren ya <b>había salido</b>.<br>
❌ Nunca había veído esa película. ✅ Nunca había <b>visto</b> esa película.<br>
❌ Había lo hecho. ✅ <b>Lo había hecho.</b> <span class="fr">Les pronoms se placent avant « había », jamais entre « había » et le participe : « ya lo había hecho ».</span><br>
❌ Había hecho los deberes ayer. ✅ <b>Hice</b> los deberes ayer. <span class="fr">Employez-le uniquement lorsqu’il existe une relation d’antériorité ou de postériorité.</span></p></div>`,
  voc: [
    ["🚉","ya había salido","était déjà parti(e)"],
    ["⌛","todavía no","pas encore"],
    ["✅","ya","déjà"],
    ["🔙","antes","avant"],
    ["📝","escrito","écrit"],
    ["🔨","roto","cassé"],
    ["🚪","abierto","ouvert"],
    ["👀","visto","vu"],
    ["🛠️","hecho","fait"],
    ["✈️","nunca había volado","n’avait jamais pris l’avion"]
  ],
  ex: [
    { q: "Cuando llegamos al cine, la película ya ___.", o: ["empezó","había empezado","ha empezado"], a: 1, t: "Quand nous sommes arrivés au cinéma, le film avait déjà commencé." },
    { q: "Estaba nervioso porque nunca ___ en público.", o: ["había hablado","hablaba","habló"], a: 0, t: "Il était nerveux parce qu’il n’avait jamais parlé en public." },
    { q: "Cuando me llamaste, todavía no ___ el informe.", o: ["he terminado","terminé","había terminado"], a: 2, t: "Quand tu m’as appelé(e), je n’avais pas encore terminé le rapport." },
    { q: "Ana no fue a la fiesta porque ya ___ otros planes.", o: ["había hecho","había hacido","hacía"], a: 0, t: "Ana n’est pas allée à la fête parce qu’elle avait déjà d’autres projets." },
    { q: "Al llegar a casa vi que alguien ___ la ventana. (abrir)", a: ["había abierto"], t: "En rentrant chez moi, j’ai vu que quelqu’un avait ouvert la fenêtre." },
    { q: "Nosotros nunca ___ un volcán antes de ir a Guatemala. (ver)", a: ["habíamos visto"], t: "Nous n’avions jamais vu de volcan avant d’aller au Guatemala." },
    { q: "Les conté que ya ___ el libro. (escribir, yo)", a: ["había escrito"], t: "Je leur ai dit que j’avais déjà écrit le livre." },
    { q: "¿Vosotros ya ___ cuando llegó Pablo? (cenar)", a: ["habíais cenado"], t: "Avais-tu déjà dîné quand Pablo est arrivé ?" },
    { q: "El vaso estaba en el suelo: el gato lo ___. (romper)", a: ["había roto"], t: "Le verre était par terre : le chat l’avait cassé." },
    { w: "Cuando llegué, el tren ya había salido.", t: "Quand je suis arrivé(e), le train était déjà parti." },
    { w: "Nunca había probado la comida peruana.", t: "Je n’avais jamais goûté la cuisine péruvienne." },
    { w: "Todavía no habían abierto la tienda.", t: "Ils n’avaient pas encore ouvert le magasin." }
  ],
  tx: { ti: "Una mañana desastrosa", b: `El lunes pasado fue un día horrible para Javier. Esa noche no <u>había dormido</u> bien porque sus vecinos <u>habían organizado</u> una fiesta. Por la mañana se despertó tarde: <u>no había puesto</u> la alarma.<br><br>Salió de casa corriendo, pero cuando llegó a la parada, el autobús <u>ya había pasado</u>. Tomó un taxi y, al llegar a la oficina, se dio cuenta de que <u>se había dejado</u> la cartera en casa. Una compañera, Rocío, le prestó dinero para pagar.<br><br>A las diez tenía una reunión muy importante con unos clientes de Monterrey. Javier estaba tranquilo porque el viernes <u>ya había preparado</u> la presentación. Sin embargo, cuando abrió el ordenador, descubrió que <u>no había guardado</u> el archivo. Por suerte, Rocío <u>había hecho</u> una copia y se la envió en un minuto.<br><br>La reunión fue un éxito. Esa tarde Javier invitó a Rocío a un café: nunca <u>había tenido</u> una compañera tan generosa.` },
  q: [
    ["¿Por qué no había dormido bien Javier?", ["Porque estaba enfermo","Porque sus vecinos hicieron una fiesta","Porque trabajó toda la noche"], 1],
    ["¿Qué pasó en la parada?", ["El autobús ya había pasado","Perdió la cartera","Encontró a Rocío"], 0],
    ["¿Qué problema tuvo con el ordenador?", ["Se rompió","No tenía batería","No había guardado el archivo"], 2],
    ["¿Cómo solucionó Rocío el problema?", ["Hizo la presentación ella","Tenía una copia del archivo","Llamó a los clientes"], 1]
  ],
  sp: [
    "Cuenta un día en que todo salió mal. ¿Qué había pasado antes?",
    "¿Qué cosas nunca habías hecho antes de cumplir dieciocho años?",
    "Antes de empezar a estudiar español, ¿habías estudiado otros idiomas?",
    "Recuerda una vez que llegaste tarde a algo. ¿Qué había pasado ya cuando llegaste?",
    "¿Qué habías aprendido ya a los diez años y qué todavía no?",
    "Cuenta la primera vez que viajaste en avión. ¿Habías volado antes?"
  ]
},
{
  id: "b1-porpara",
  lvl: "B1",
  k: "g",
  t: "Por y para",
  fr: "Por et para",
  ic: "🎯",
  th: `<div class="card"><h2>Por y para <span class="fr">(deux mots pour « pour », « par », « à travers »…)</span></h2>
<table><tr><th>PARA ➡️ (destino, objetivo)</th><th>POR 🔄 (causa, medio, recorrido)</th></tr>
<tr><td><b>Finalidad</b>: Estudio español <b>para</b> trabajar en Chile. <span class="fr">afin de</span></td><td><b>Causa</b>: Lo hice <b>por</b> ti. / Cerraron <b>por</b> la lluvia. <span class="fr">à cause de, pour le bien de</span></td></tr>
<tr><td><b>Destinatario</b>: Este regalo es <b>para</b> ti. <span class="fr">pour (destinataire)</span></td><td><b>Lugar de paso</b>: Paseamos <b>por</b> el parque. <span class="fr">à travers, autour de</span></td></tr>
<tr><td><b>Dirección</b>: Salgo <b>para</b> Lima mañana. <span class="fr">vers</span></td><td><b>Medio</b>: Te llamo <b>por</b> teléfono. / Lo envié <b>por</b> correo. <span class="fr">par (moyen)</span></td></tr>
<tr><td><b>Plazo</b>: Necesito el informe <b>para</b> el lunes. <span class="fr">d’ici (échéance)</span></td><td><b>Tiempo aproximado</b>: <b>por</b> la mañana, <b>por</b> Navidad. <span class="fr">dans, autour de</span></td></tr>
<tr><td><b>Opinión</b>: <b>Para</b> mí, es la mejor serie. <span class="fr">à mon avis</span></td><td><b>Precio / intercambio</b>: Lo compré <b>por</b> 20 euros. <span class="fr">pour (prix)</span></td></tr>
<tr><td><b>Comparación</b>: <b>Para</b> ser junio, hace frío. <span class="fr">pour (considération)</span></td><td><b>Agente de la pasiva</b>: escrito <b>por</b> Isabel Allende. <span class="fr">par</span></td></tr>
<tr><td><b>Utilidad</b>: una taza <b>para</b> el café. <span class="fr">pour (usage)</span></td><td><b>Frecuencia</b>: dos veces <b>por</b> semana; 10 % (diez <b>por</b> ciento). <span class="fr">par</span></td></tr></table></div>
<div class="card"><h2>Expresiones fijas <span class="fr">(expressions figées)</span></h2>
<p><b>por fin</b> <span class="fr">enfin</span> · <b>por supuesto</b> <span class="fr">bien sûr</span> · <b>por eso</b> <span class="fr">c’est pourquoi</span> · <b>por ejemplo</b> <span class="fr">par exemple</span> · <b>por favor</b> <span class="fr">s’il vous plaît</span> · <b>por cierto</b> <span class="fr">au fait</span> · <b>por lo menos</b> <span class="fr">au moins</span> · <b>por si acaso</b> <span class="fr">au cas où</span> · <b>por primera vez</b> <span class="fr">pour la première fois</span></p>
<p><b>para siempre</b> <span class="fr">pour toujours</span> · <b>para nada</b> <span class="fr">pas du tout</span> · <b>para colmo</b> <span class="fr">pour couronner le tout</span> · <b>¿para qué?</b> <span class="fr">dans quel but ?</span> · <b>no es para tanto</b> <span class="fr">ce n’est pas grave</span></p>
<p><b>¿Por qué?</b> pregunta la causa; <b>¿para qué?</b> pregunta el objetivo. <span class="fr">« Pourquoi ? » ou « Dans quel but ? »</span><br>
¿Por qué estudias español? —Porque me encanta. ¿Para qué? —Para viajar.</p>
<div class="tip"><b>Truco / Astuce :</b> <b>Para</b> mira hacia delante ➡️ (meta, destino, fecha límite). <b>Por</b> mira hacia atrás o alrededor 🔄 (causa, camino, medio). <span class="fr">« Para » indique un objectif ; « por » exprime la cause ou le trajet.</span></div></div>
<div class="card"><h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Gracias para tu ayuda. ✅ Gracias <b>por</b> tu ayuda.<br>
❌ Estudio por aprobar el examen. ✅ Estudio <b>para</b> aprobar el examen.<br>
❌ Voy a estar en Madrid para tres días. ✅ Voy a estar en Madrid tres días / <b>durante</b> tres días.<br>
❌ Te llamo para teléfono. ✅ Te llamo <b>por</b> teléfono.</p></div>`,
  voc: [
    ["🏁","por fin","enfin"],
    ["👍","por supuesto","bien sûr"],
    ["♾️","para siempre","pour toujours"],
    ["☂️","por si acaso","au cas où"],
    ["💡","por ejemplo","par exemple"],
    ["🙏","por favor","s’il vous plaît"],
    ["🎁","para ti","pour toi"],
    ["📞","por teléfono","au téléphone"],
    ["🗣️","por cierto","au fait"],
    ["🎯","para qué","dans quel but"]
  ],
  ex: [
    { q: "Este regalo es ___ mi abuela.", o: ["por","para"], a: 1, t: "Ce cadeau est pour ma grand-mère." },
    { q: "Muchas gracias ___ la invitación.", o: ["por","para"], a: 0, t: "Merci beaucoup pour l’invitation." },
    { q: "Necesito terminar el proyecto ___ el viernes.", o: ["por","para"], a: 1, t: "Je dois terminer le projet d’ici vendredi." },
    { q: "Me gusta pasear ___ el centro de Quito.", o: ["por","para"], a: 0, t: "J’aime me promener dans le centre de Quito." },
    { q: "Compré esta bici ___ 150 euros.", o: ["para","por"], a: 1, t: "J’ai acheté ce vélo pour 150 euros." },
    { q: "Llevo paraguas por si ___. (expresión: au cas où)", a: ["acaso"], t: "Je prends un parapluie au cas où." },
    { q: "¡Por ___ llegas! Te estábamos esperando. (enfin)", a: ["fin"], t: "Tu es enfin là ! Nous t’attendions." },
    { q: "Ahorro dinero ___ comprar un coche. (afin de)", a: ["para"], t: "J’économise pour acheter une voiture." },
    { q: "Voy al gimnasio tres veces ___ semana. (per)", a: ["por"], t: "Je vais à la salle de sport trois fois par semaine." },
    { w: "Te quiero y te querré para siempre.", t: "Je t’aime et je t’aimerai toujours." },
    { w: "El museo está cerrado por obras.", t: "Le musée est fermé pour travaux de rénovation." },
    { w: "Por supuesto que vendré a tu fiesta.", t: "Bien sûr, je viendrai à ta fête." }
  ],
  tx: { ti: "Mensaje desde Oaxaca", b: `Querida Sofía:<br><br>¡<u>Por fin</u> tengo un rato <u>para</u> escribirte! Llegué a Oaxaca hace una semana y estoy encantada. Vine <u>para</u> hacer un curso de cocina mexicana, pero también paseo mucho <u>por</u> la ciudad. <u>Por</u> las mañanas voy a clase y <u>por</u> la tarde visito mercados. Ayer compré un mantel precioso <u>por</u> solo doscientos pesos. ¡Es <u>para</u> ti!<br><br><u>Por cierto</u>, el profesor del curso es muy simpático. Dice que <u>para</u> ser extranjera, cocino muy bien el mole. <u>Por supuesto</u>, no es verdad, pero me gusta oírlo.<br><br>El único problema es que llueve mucho <u>por</u> la tarde, así que siempre llevo chubasquero <u>por si acaso</u>. El sábado salgo <u>para</u> Puebla en autobús y vuelvo a Madrid a finales de mes. Tengo que estar en la oficina <u>para</u> el día treinta.<br><br>Te llamo <u>por</u> teléfono el domingo. ¡Gracias <u>por</u> cuidar de mi gato!<br><br>Un abrazo,<br>Marina` },
  q: [
    ["¿Para qué fue Marina a Oaxaca?", ["Para trabajar en un mercado","Para hacer un curso de cocina","Para visitar a Sofía"], 1],
    ["¿Cuánto costó el mantel?", ["Doscientos pesos","Treinta euros","Veinte pesos"], 0],
    ["¿Por qué lleva siempre chubasquero?", ["Porque hace frío","Porque es un regalo","Porque llueve mucho por la tarde"], 2],
    ["¿Qué hace Sofía por Marina?", ["Cuida de su gato","Le envía dinero","Le reserva el autobús"], 0]
  ],
  sp: [
    "¿Para qué estudias español? Da por lo menos dos razones.",
    "¿Por qué lugares te gusta pasear en tu ciudad?",
    "¿Qué regalo has comprado recientemente? ¿Para quién era y por cuánto lo compraste?",
    "¿Qué cosas llevas siempre en la mochila por si acaso?",
    "Para ti, ¿cuál es la mejor época del año para viajar? ¿Por qué?",
    "Da las gracias a alguien por algo importante que hizo por ti."
  ]
},
{
  id: "b1-fut",
  lvl: "B1",
  k: "g",
  t: "Futuro simple",
  fr: "Le futur simple",
  ic: "🔮",
  th: `<div class="card"><h2>Futuro simple <span class="fr">(futur + verbe)</span></h2>
<p>Infinitivo completo + terminaciones (iguales para -ar, -er, -ir). <span class="fr">Infinitif entier + les mêmes terminaisons pour tous les verbes.</span></p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr>
<tr><td>yo</td><td>hablar<b class="reg">é</b></td><td>comer<b class="reg">é</b></td><td>vivir<b class="reg">é</b></td></tr>
<tr><td>tú</td><td>hablar<b class="reg">ás</b></td><td>comer<b class="reg">ás</b></td><td>vivir<b class="reg">ás</b></td></tr>
<tr><td>él/ella/usted</td><td>hablar<b class="reg">á</b></td><td>comer<b class="reg">á</b></td><td>vivir<b class="reg">á</b></td></tr>
<tr><td>nosotros/as</td><td>hablar<b class="reg">emos</b></td><td>comer<b class="reg">emos</b></td><td>vivir<b class="reg">emos</b></td></tr>
<tr><td>vosotros/as</td><td>hablar<b class="reg">éis</b></td><td>comer<b class="reg">éis</b></td><td>vivir<b class="reg">éis</b></td></tr>
<tr><td>ellos/ustedes</td><td>hablar<b class="reg">án</b></td><td>comer<b class="reg">án</b></td><td>vivir<b class="reg">án</b></td></tr></table>
<h3>Irregulares <span class="fr">(radicaux irréguliers, mêmes terminaisons)</span></h3>
<table><tr><th>infinitivo</th><th>raíz</th><th>yo</th><th>infinitivo</th><th>raíz</th><th>yo</th></tr>
<tr><td>tener</td><td class="irr">tendr-</td><td>tendré</td><td>hacer</td><td class="irr">har-</td><td>haré</td></tr>
<tr><td>salir</td><td class="irr">saldr-</td><td>saldré</td><td>decir</td><td class="irr">dir-</td><td>diré</td></tr>
<tr><td>poner</td><td class="irr">pondr-</td><td>pondré</td><td>poder</td><td class="irr">podr-</td><td>podré</td></tr>
<tr><td>venir</td><td class="irr">vendr-</td><td>vendré</td><td>saber</td><td class="irr">sabr-</td><td>sabré</td></tr>
<tr><td>querer</td><td class="irr">querr-</td><td>querré</td><td>haber</td><td class="irr">habr-</td><td>habrá (hay)</td></tr></table></div>
<div class="card"><h2>Usos <span class="fr">(emplois)</span></h2>
<p>🔮 <b>Predicciones</b>: Mañana <b>lloverá</b> en el norte. <span class="fr">Demain, il pleuvra dans le nord.</span><br>
🤝 <b>Promesas</b>: Te lo <b>diré</b> mañana, te lo prometo. <span class="fr">Je te le dirai demain, promis.</span><br>
📅 <b>Planes lejanos o poco seguros</b>: Algún día <b>viviré</b> en la costa. <span class="fr">Un jour, je vivrai sur la côte.</span><br>
🤔 <b>Conjetura en el presente</b> (suposición): ¿Dónde <b>estará</b> Pedro? —<b>Estará</b> en el atasco. <span class="fr">Je me demande où est Pedro. — Il est probablement dans les embouteillages.</span><br>
¿Qué hora es? —No sé, <b>serán</b> las cinco. <span class="fr">Je ne sais pas, il doit être environ cinq heures.</span></p>
<div class="tip"><b>Truco / Astuce :</b> Para planes seguros y cercanos se usa más <b>ir a + infinitivo</b>: <i>Esta noche voy a cenar con Ana.</i> El futuro simple suena más lejano, más formal o más hipotético. <span class="fr">« Ir a » pour les projets définis ; le futur pour les prédictions, promesses et suppositions.</span></div></div>
<div class="card"><h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Yo teneré tiempo. ✅ Yo <b>tendré</b> tiempo.<br>
❌ Nosotros haceremos la cena. ✅ Nosotros <b>haremos</b> la cena.<br>
❌ Mañana habrán muchas personas. ✅ Mañana <b>habrá</b> muchas personas. <span class="fr">« Habrá » (il y aura) est toujours au singulier.</span><br>
❌ Hablare contigo. ✅ <b>Hablaré</b> contigo. <span class="fr">N’oubliez pas l’accent.</span></p></div>`,
  voc: [
    ["🔮","predecir","prédire"],
    ["🤝","prometer","promettre"],
    ["🌅","mañana","demain"],
    ["🗓️","el año que viene","l’année prochaine"],
    ["✨","algún día","un jour"],
    ["🌍","el futuro","le futur"],
    ["🤔","suponer","supposer"],
    ["⏰","dentro de diez años","dans dix ans"],
    ["🧳","saldré","je partirai"],
    ["📦","tendré","j’aurai"]
  ],
  ex: [
    { q: "El año que viene ___ un curso de fotografía. (hacer, yo)", a: ["haré"], t: "L’année prochaine, je suivrai un cours de photographie." },
    { q: "Mañana ___ de casa a las seis. (salir, nosotros)", a: ["saldremos"], t: "Demain, nous partirons de chez nous à six heures." },
    { q: "Te lo prometo: no se lo ___ a nadie. (decir, yo)", a: ["diré"], t: "Je te promets que je ne le dirai à personne." },
    { q: "¿___ venir a mi boda? (poder, tú)", a: ["podrás"], t: "Pourras-tu venir à mon mariage ?" },
    { q: "Dentro de diez años los coches ___ solos.", o: ["conducirán","conduciran","conduzcarán"], a: 0, t: "Dans dix ans, les voitures se conduiront toutes seules." },
    { q: "Mañana ___ mucha gente en el concierto.", o: ["habrán","habrá","haberá"], a: 1, t: "Il y aura beaucoup de monde au concert demain." },
    { q: "Marta no contesta. ___ en la ducha.", o: ["Estará","Estaría","Estuvo"], a: 0, t: "Marta ne répond pas. Elle est probablement sous la douche." },
    { q: "Si estudias, ___ el examen sin problema.", o: ["aprobarás","aprobaste","aprobabas"], a: 0, t: "Si tu étudies, tu réussiras facilement l’examen." },
    { w: "¿Dónde estarán mis llaves?", t: "Où mes clés peuvent-elles bien être ?" },
    { w: "Algún día viviremos cerca del mar.", t: "Un jour, nous vivrons près de la mer." },
    { w: "Mañana lloverá en el norte de España.", t: "Demain, il pleuvra dans le nord de l’Espagne." },
    { w: "Te prometo que te llamaré esta noche.", t: "Je te promets que je t’appellerai ce soir." }
  ],
  tx: { ti: "La pitonisa del barrio", b: `Todos los jueves, doña Remedios lee el futuro en una pequeña tienda de Valparaíso. Esta semana la visitó Tomás, un estudiante de veintidós años muy preocupado por su futuro.<br><br>—Veo muchas cosas buenas —le dijo ella—. Primero, <u>terminarás</u> la carrera sin problemas y <u>encontrarás</u> trabajo muy pronto. <u>Tendrás</u> que viajar mucho por tu empresa. <u>Saldrás</u> de Chile y <u>vivirás</u> unos años en Europa.<br><br>—¿Y el amor? —preguntó Tomás.<br><br>—<u>Conocerás</u> a una persona especial en un aeropuerto. Al principio no <u>querrás</u> hablar con ella, pero después <u>harán</u> un viaje juntos y <u>será</u> el inicio de una gran historia.<br><br>Tomás salió de la tienda muy contento. Mientras caminaba, pensó: «¿<u>Será</u> verdad? ¿Cuánto <u>habrá pagado</u> mi madre por este regalo?». Esa noche llamó a su amiga Inés y le dijo: «No sé si me lo creo, pero te prometo una cosa: <u>podré</u> contarte la historia dentro de diez años».` },
  q: [
    ["¿Dónde trabaja doña Remedios?", ["En un aeropuerto","En una tienda de Valparaíso","En una universidad"], 1],
    ["Según ella, ¿dónde vivirá Tomás unos años?", ["En Europa","En Chile","En Argentina"], 0],
    ["¿Dónde conocerá Tomás a una persona especial?", ["En la universidad","En el trabajo","En un aeropuerto"], 2],
    ["¿Qué piensa Tomás al salir?", ["Que todo es mentira","Que su madre pagó la visita","Que tiene que llamar a su madre"], 1]
  ],
  sp: [
    "¿Cómo será tu vida dentro de diez años?",
    "¿Qué harás el próximo verano? ¿Adónde irás?",
    "Haz tres predicciones sobre el mundo en el año 2050.",
    "Haz una promesa a un amigo o a una amiga: ¿qué harás por él o por ella?",
    "Mira a tu alrededor: ¿qué hora será? ¿Qué estarán haciendo tus amigos ahora?",
    "¿Crees que algún día hablarás español perfectamente? ¿Qué tendrás que hacer?"
  ]
},
{
  id: "b1-cond",
  lvl: "B1",
  k: "g",
  t: "Condicional",
  fr: "Le conditionnel",
  ic: "💭",
  th: `<div class="card"><h2>Condicional simple <span class="fr">(conditionnel + verbe)</span></h2>
<p>Como el futuro: infinitivo completo + terminaciones del imperfecto de -er/-ir. <span class="fr">Infinitif entier + terminaisons en -ía.</span></p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr>
<tr><td>yo</td><td>hablar<b class="reg">ía</b></td><td>comer<b class="reg">ía</b></td><td>vivir<b class="reg">ía</b></td></tr>
<tr><td>tú</td><td>hablar<b class="reg">ías</b></td><td>comer<b class="reg">ías</b></td><td>vivir<b class="reg">ías</b></td></tr>
<tr><td>él/ella/usted</td><td>hablar<b class="reg">ía</b></td><td>comer<b class="reg">ía</b></td><td>vivir<b class="reg">ía</b></td></tr>
<tr><td>nosotros/as</td><td>hablar<b class="reg">íamos</b></td><td>comer<b class="reg">íamos</b></td><td>vivir<b class="reg">íamos</b></td></tr>
<tr><td>vosotros/as</td><td>hablar<b class="reg">íais</b></td><td>comer<b class="reg">íais</b></td><td>vivir<b class="reg">íais</b></td></tr>
<tr><td>ellos/ustedes</td><td>hablar<b class="reg">ían</b></td><td>comer<b class="reg">ían</b></td><td>vivir<b class="reg">ían</b></td></tr></table>
<p>Irregulares: las mismas raíces que el futuro. <span class="fr">Les mêmes radicaux irréguliers qu’au futur.</span><br>
tener → <span class="irr">tendría</span> · salir → <span class="irr">saldría</span> · hacer → <span class="irr">haría</span> · decir → <span class="irr">diría</span> · poder → <span class="irr">podría</span> · poner → <span class="irr">pondría</span> · venir → <span class="irr">vendría</span> · saber → <span class="irr">sabría</span> · querer → <span class="irr">querría</span> · haber → <span class="irr">habría</span></p></div>
<div class="card"><h2>Usos <span class="fr">(emplois)</span></h2>
<p>🙏 <b>Peticiones educadas</b>: ¿<b>Podría</b> abrir la ventana, por favor? <span class="fr">Pourriez-vous ouvrir la fenêtre, s’il vous plaît ?</span> / ¿Te <b>importaría</b> ayudarme? <span class="fr">Cela vous dérangerait-il de m’aider ?</span><br>
💡 <b>Consejos</b>: <b>Deberías</b> descansar más. <span class="fr">Tu devrais te reposer davantage.</span> / <b>Yo que tú</b>, <b>hablaría</b> con ella. <span class="fr">À ta place, je lui parlerais.</span> / <b>Yo en tu lugar</b>, no lo <b>compraría</b>. <span class="fr">À ta place, je ne l’achèterais pas.</span><br>
🌟 <b>Deseos</b>: Me <b>gustaría</b> conocer Cuba. <span class="fr">J’aimerais visiter Cuba.</span> / Me <b>encantaría</b> ir contigo. <span class="fr">J’adorerais y aller avec toi.</span><br>
🤔 <b>Hipótesis</b>: ¿Qué <b>harías</b> con un millón de euros? —<b>Viajaría</b> por todo el mundo. <span class="fr">Que ferais-tu avec un million d’euros ? — Je voyagerais partout dans le monde.</span></p>
<p>👀 <b>Avance</b> <span class="fr">(aperçu)</span>: en las frases con <b>si</b> + imperfecto de subjuntivo usamos condicional: <i>Si <b>tuviera</b> tiempo, <b>aprendería</b> a tocar la guitarra.</i> <span class="fr">Si j’avais le temps, j’apprendrais à jouer de la guitare.</span> Estudiarás esta estructura en el nivel B2; de momento, aprende la frase de memoria.</p>
<div class="tip"><b>Truco / Astuce :</b> Condicional = futuro + <b>-ía</b>. Si sabes <i>tendré</i>, ya sabes <i>tendría</i>. <span class="fr">Si vous connaissez le radical du futur, vous connaissez le conditionnel.</span> Para pedir en un bar, «¿Me pondría un café?» o «Querría un café» suena más amable que «Quiero un café».</div></div>
<div class="card"><h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Me gustaré ir. ✅ Me <b>gustaría</b> ir. <span class="fr">Un souhait → conditionnel, pas futur.</span><br>
❌ ¿Poderías ayudarme? ✅ ¿<b>Podrías</b> ayudarme?<br>
❌ Si tendría dinero, viajaría. ✅ Si <b>tuviera</b> dinero, viajaría. <span class="fr">N’utilisez jamais le conditionnel après « si ».</span><br>
❌ Yo que tú, hablo con él. ✅ Yo que tú, <b>hablaría</b> con él.</p></div>`,
  voc: [
    ["🌟","me gustaría","j’aimerais"],
    ["😍","me encantaría","j’adorerais"],
    ["🙋","¿podría…?","pourriez-vous… ? (formel)"],
    ["☝️","deberías","tu devrais"],
    ["🪞","yo que tú","si j’étais toi"],
    ["🔄","en tu lugar","à ta place"],
    ["🤷","¿te importaría…?","cela te dérangerait-il… ?"],
    ["💰","un millón","un million"],
    ["🧭","aconsejar","conseiller"]
  ],
  ex: [
    { q: "Me ___ visitar Machu Picchu algún día.", o: ["gustaré","gustaría","gusta"], a: 1, t: "J’aimerais visiter le Machu Picchu un jour." },
    { q: "¿___ cerrar la puerta, por favor? (usted)", o: ["Podría","Podrá","Pudo"], a: 0, t: "Pourriez-vous fermer la porte, s’il vous plaît ?" },
    { q: "Si tuviera tiempo, ___ un curso de baile.", o: ["haré","hacía","haría"], a: 2, t: "Si j’avais le temps, je suivrais un cours de danse." },
    { q: "Estás muy cansado. ___ dormir más.", o: ["Deberías","Debías","Deberás"], a: 0, t: "Tu es très fatigué(e). Tu devrais dormir davantage." },
    { q: "Yo que tú, no ___ ese coche tan caro. (comprar)", a: ["compraría"], t: "Si j’étais toi, je n’achèterais pas une voiture aussi chère." },
    { q: "¿Qué ___ tú en mi lugar? (hacer)", a: ["harías"], t: "Que ferais-tu à ma place ?" },
    { q: "Con más dinero, nosotros ___ en el campo. (vivir)", a: ["viviríamos"], t: "Avec plus d’argent, nous vivrions à la campagne." },
    { q: "Yo en tu lugar se lo ___ a tus padres. (decir)", a: ["diría"], t: "À ta place, je le dirais à tes parents." },
    { q: "¿Te ___ ayudarme con la mudanza? (importar)", a: ["importaría"], t: "Cela te dérangerait-il de m’aider à déménager ?" },
    { w: "Me encantaría ir contigo al concierto.", t: "J’adorerais aller au concert avec toi." },
    { w: "¿Podría traernos la cuenta, por favor?", t: "Pourriez-vous nous apporter l’addition, s’il vous plaît ?" },
    { w: "Yo que tú, hablaría con ella.", t: "À ta place, je lui parlerais." }
  ],
  tx: { ti: "Consultorio sentimental", b: `<u>Querida Clara</u>: tengo treinta años y trabajo en un banco en Bogotá. Gano bien, pero no soy feliz. <u>Me gustaría</u> dejarlo todo y abrir una pequeña cafetería, pero mi familia dice que es una locura. ¿Qué <u>harías</u> tú? —Andrés<br><br>Querido Andrés: entiendo muy bien tu situación. <u>Yo que tú</u>, no <u>dejaría</u> el trabajo mañana mismo, pero tampoco <u>olvidaría</u> tu sueño. <u>Deberías</u> hacer un plan. Primero, <u>podrías</u> ahorrar dinero durante un año. También <u>sería</u> buena idea hacer un curso de barista los fines de semana. <u>Yo en tu lugar</u>, <u>hablaría</u> con personas que ya tienen una cafetería: te <u>darían</u> consejos muy útiles.<br><br>Sobre tu familia: <u>tendrías</u> que explicarles tu plan con calma. Seguro que <u>estarían</u> más tranquilos con números concretos. Y piensa en esto: si no lo intentaras nunca, ¿no te <u>arrepentirías</u>? A mí me <u>encantaría</u> tomar un café en tu cafetería algún día. ¡Mucha suerte!<br><br>Un abrazo, Clara` },
  q: [
    ["¿Qué le gustaría hacer a Andrés?", ["Trabajar en un banco","Abrir una cafetería","Estudiar en Bogotá"], 1],
    ["¿Qué le aconseja Clara primero?", ["Ahorrar dinero durante un año","Dejar el trabajo mañana","Hablar con su jefe"], 0],
    ["¿Con quién debería hablar Andrés, según Clara?", ["Con un abogado","Con su banco","Con personas que ya tienen una cafetería"], 2],
    ["¿Qué le gustaría a Clara?", ["Trabajar con Andrés","Tomar un café en su cafetería","Conocer a su familia"], 1]
  ],
  sp: [
    "¿Qué harías con un millón de euros?",
    "¿Dónde te gustaría vivir y por qué?",
    "Un amigo quiere dejar su trabajo para viajar un año. ¿Qué le aconsejarías?",
    "Pide tres cosas de forma educada en un hotel: usa «¿Podría…?» y «¿Le importaría…?».",
    "Si tuvieras un día libre mañana, ¿qué harías? (Usa: si tuviera…, haría…)",
    "¿Qué persona famosa te gustaría conocer? ¿Qué le preguntarías?"
  ]
},
{
  id: "b1-imp",
  lvl: "B1",
  k: "g",
  t: "Imperativo",
  fr: "L’impératif",
  ic: "👉",
  th: `<div class="card"><h2>Imperativo afirmativo <span class="fr">(ordres affirmatifs)</span></h2>
<table><tr><th></th><th>hablar</th><th>comer</th><th>escribir</th></tr>
<tr><td>tú</td><td>habl<b class="reg">a</b></td><td>com<b class="reg">e</b></td><td>escrib<b class="reg">e</b></td></tr>
<tr><td>usted</td><td>habl<b class="reg">e</b></td><td>com<b class="reg">a</b></td><td>escrib<b class="reg">a</b></td></tr>
<tr><td>vosotros/as</td><td>habl<b class="reg">ad</b></td><td>com<b class="reg">ed</b></td><td>escrib<b class="reg">id</b></td></tr>
<tr><td>ustedes</td><td>habl<b class="reg">en</b></td><td>com<b class="reg">an</b></td><td>escrib<b class="reg">an</b></td></tr></table>
<p><b>Tú</b> = 3.ª persona del presente (él habla → ¡habla!). <b>Usted/ustedes</b> = presente de subjuntivo (cambia la vocal: a ↔ e). <b>Vosotros</b> = infinitivo con <b>-d</b>. En Latinoamérica se usa <b>ustedes</b> en lugar de vosotros. <span class="fr">« Ustedes » remplace « vosotros » en Amérique latine.</span></p>
<h3>Irregulares (tú) <span class="fr">(formes irrégulières de tú)</span></h3>
<table><tr><th>decir</th><th>hacer</th><th>ir</th><th>poner</th><th>salir</th><th>ser</th><th>tener</th><th>venir</th></tr>
<tr><td class="irr">di</td><td class="irr">haz</td><td class="irr">ve</td><td class="irr">pon</td><td class="irr">sal</td><td class="irr">sé</td><td class="irr">ten</td><td class="irr">ven</td></tr></table>
<p>Usted: <span class="irr">diga, haga, vaya, ponga, salga, sea, tenga, venga</span>. Los cambios de raíz se mantienen: cierra, vuelve, pide / cierre, vuelva, pida.</p></div>
<div class="card"><h2>Imperativo negativo <span class="fr">(ordres négatifs)</span></h2>
<p><b>no</b> + presente de subjuntivo para todas las personas: <span class="fr">no + subjonctif présent.</span></p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>hacer</th><th>ir</th></tr>
<tr><td>tú</td><td>no habl<b class="reg">es</b></td><td>no com<b class="reg">as</b></td><td class="irr">no hagas</td><td class="irr">no vayas</td></tr>
<tr><td>usted</td><td>no habl<b class="reg">e</b></td><td>no com<b class="reg">a</b></td><td class="irr">no haga</td><td class="irr">no vaya</td></tr>
<tr><td>vosotros/as</td><td>no habl<b class="reg">éis</b></td><td>no com<b class="reg">áis</b></td><td class="irr">no hagáis</td><td class="irr">no vayáis</td></tr>
<tr><td>ustedes</td><td>no habl<b class="reg">en</b></td><td>no com<b class="reg">an</b></td><td class="irr">no hagan</td><td class="irr">no vayan</td></tr></table>
<h3>Pronombres <span class="fr">(place des pronoms)</span></h3>
<p>✅ Afirmativo: pronombres <b>detrás y unidos</b> (¡ojo con la tilde!): <b>dímelo</b>, <b>cómpralo</b>, <b>siéntese</b>, <b>dáselo</b>. <span class="fr">Attaché à la fin : dis-le-moi, achète-le, assieds-toi, donne-le-lui.</span><br>
🚫 Negativo: pronombres <b>delante y separados</b>: <b>no me lo digas</b>, <b>no lo compres</b>, <b>no se siente</b>. <span class="fr">Avant le verbe : ne me le dis pas, ne l’achète pas.</span><br>
Reflexivos con vosotros: se pierde la -d: <b>sentaos</b>, <b>levantaos</b> (pero <i>idos</i>).</p>
<div class="tip"><b>Truco / Astuce :</b> Orden de los pronombres: primero la persona (<b>me, te, se</b>), después la cosa (<b>lo, la</b>). Le/les + lo → <b>se lo</b>: <i>Dáselo</i>, no «dálelo». <span class="fr">La personne avant la chose ; le + lo devient se lo.</span></div></div>
<div class="card"><h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ ¡No habla! ✅ ¡No <b>hables</b>!<br>
❌ No dímelo. ✅ <b>No me lo digas.</b><br>
❌ Dime lo. ✅ <b>Dímelo.</b> <span class="fr">(un seul mot, avec un accent)</span><br>
❌ ¡Hace los deberes! ✅ ¡<b>Haz</b> los deberes!<br>
❌ Sentados, por favor. ✅ <b>Sentaos</b> (vosotros) / <b>Siéntense</b> (ustedes), por favor.</p></div>`,
  voc: [
    ["👉","¡ven!","viens !"],
    ["🛠️","¡haz!","fais !"],
    ["🗣️","¡dímelo!","dis-le-moi !"],
    ["🤐","¡no me lo digas!","ne me le dis pas !"],
    ["🪑","¡siéntese!","asseyez-vous !"],
    ["🚶","¡ve!","va !"],
    ["🍽️","¡pon la mesa!","mets la table !"],
    ["⏸️","¡espera!","attends !"],
    ["🙌","¡ten cuidado!","fais attention !"],
    ["🚪","¡sal!","sors !"]
  ],
  ex: [
    { q: "Pablo, ___ la mesa, por favor. (poner, tú)", a: ["pon"], t: "Pablo, mets la table, s’il te plaît." },
    { q: "Señora, ___ por aquí, por favor. (venir, usted)", a: ["venga"], t: "Madame, veuillez passer par ici, s’il vous plaît." },
    { q: "Niños, no ___ en la calle. (jugar, vosotros)", a: ["juguéis"], t: "Les enfants, ne jouez pas dans la rue." },
    { q: "Tengo la carta. ¿La quieres? —Sí, ___. (dar, tú + me + la)", a: ["dámela"], t: "J’ai la lettre. Tu la veux ? — Oui, donne-la-moi." },
    { q: "Es un secreto: no ___ a nadie.", o: ["lo digas","dilo","lo dices"], a: 0, t: "C’est un secret : ne le dites à personne." },
    { q: "___ los deberes antes de cenar. (tú)", o: ["Hace","Haz","Hagas"], a: 1, t: "Fais tes devoirs avant le dîner." },
    { q: "Pasen, pasen, y ___, por favor. (ustedes)", o: ["siéntense","siéntanse","se sienten"], a: 0, t: "Entrez, entrez et asseyez-vous, s’il vous plaît." },
    { q: "No ___ tarde, la película empieza a las nueve. (tú, llegar)", o: ["llegas","llega","llegues"], a: 2, t: "Ne sois pas en retard, le film commence à neuf heures." },
    { q: "Chicos, ___ ya, que perdemos el tren. (levantarse, vosotros)", o: ["levantaos","levantados","levantarse"], a: 0, t: "Les amis, levez-vous maintenant, sinon nous allons rater le train." },
    { w: "Por favor, dímelo antes del viernes.", t: "Dis-le-moi avant vendredi, s’il te plaît." },
    { w: "No te preocupes, todo saldrá bien.", t: "Ne t’inquiète pas, tout ira bien." },
    { w: "Gire a la derecha en el semáforo.", t: "Tournez à droite au feu." }
  ],
  tx: { ti: "Instrucciones para la casa de la playa", b: `Hola, Lucas y Elena: ¡bienvenidos a la casa! Aquí tenéis unas instrucciones. <u>Leedlas</u> con atención, por favor.<br><br>Las llaves están en la cocina. Al salir, <u>cerrad</u> siempre la puerta con llave y <u>no dejéis</u> las ventanas abiertas: a veces hay mucho viento. Si tenéis frío, <u>encended</u> la calefacción, pero <u>no la pongáis</u> muy alta.<br><br>Para la compra, <u>id</u> al mercado del pueblo: el pescado es fresquísimo. <u>Pedidle</u> a Manolo, el pescadero, sardinas; son las mejores. <u>Decidle</u> que sois amigos míos.<br><br>El perro de la vecina se llama Rufo y viene todas las mañanas. Es muy bueno, pero <u>no le deis</u> comida, porque está a dieta.<br><br>Si hay algún problema, <u>llamadme</u> por teléfono. Y si no contesto, <u>escribidme</u> un mensaje. Por último, <u>disfrutad</u> mucho y <u>no os preocupéis</u> por nada. ¡Ah! Y antes de iros, <u>sacad</u> la basura, por favor.<br><br>Un beso,<br>Carmen` },
  q: [
    ["¿Por qué no deben dejar las ventanas abiertas?", ["Porque entra el perro","Porque a veces hay mucho viento","Porque hace calor"], 1],
    ["¿Qué deben pedir en el mercado?", ["Sardinas","Pan","Carne"], 0],
    ["¿Por qué no deben dar comida a Rufo?", ["Porque muerde","Porque no es suyo","Porque está a dieta"], 2],
    ["¿Qué tienen que hacer antes de irse?", ["Llamar a Carmen","Sacar la basura","Dar de comer al perro"], 1]
  ],
  sp: [
    "Da cinco consejos a un estudiante nuevo de español (usa tú).",
    "Explica a un turista cómo llegar desde tu casa al centro (usa usted).",
    "Tu amigo se queda en tu casa una semana. Dale instrucciones: ¿qué debe hacer y qué no?",
    "Da tres órdenes negativas a unos niños (usa vosotros o ustedes).",
    "Explica una receta fácil con imperativos: corta, pon, mezcla…",
    "¿Qué consejos darías a alguien para dormir bien? Usa «no + subjuntivo»."
  ]
},
{
  id: "b1-subj",
  lvl: "B1",
  k: "g",
  t: "Presente de subjuntivo",
  fr: "Le subjonctif présent",
  ic: "🌈",
  th: `<div class="card"><h2>Presente de subjuntivo <span class="fr">(subjonctif présent)</span></h2>
<p>Toma la forma <b>yo</b> del presente, quita la <b>-o</b> y usa la vocal "contraria": -ar → <b>e</b>, -er/-ir → <b>a</b>. <span class="fr">Prenez la forme de « yo », supprimez -o et changez la voyelle.</span></p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th><th>tener (tengo)</th></tr>
<tr><td>yo</td><td>habl<b class="reg">e</b></td><td>com<b class="reg">a</b></td><td>viv<b class="reg">a</b></td><td>teng<b class="reg">a</b></td></tr>
<tr><td>tú</td><td>habl<b class="reg">es</b></td><td>com<b class="reg">as</b></td><td>viv<b class="reg">as</b></td><td>teng<b class="reg">as</b></td></tr>
<tr><td>él/ella/usted</td><td>habl<b class="reg">e</b></td><td>com<b class="reg">a</b></td><td>viv<b class="reg">a</b></td><td>teng<b class="reg">a</b></td></tr>
<tr><td>nosotros/as</td><td>habl<b class="reg">emos</b></td><td>com<b class="reg">amos</b></td><td>viv<b class="reg">amos</b></td><td>teng<b class="reg">amos</b></td></tr>
<tr><td>vosotros/as</td><td>habl<b class="reg">éis</b></td><td>com<b class="reg">áis</b></td><td>viv<b class="reg">áis</b></td><td>teng<b class="reg">áis</b></td></tr>
<tr><td>ellos/ustedes</td><td>habl<b class="reg">en</b></td><td>com<b class="reg">an</b></td><td>viv<b class="reg">an</b></td><td>teng<b class="reg">an</b></td></tr></table>
<p>Igual: hacer → <i>haga</i>, decir → <i>diga</i>, poner → <i>ponga</i>, salir → <i>salga</i>, venir → <i>venga</i>, conocer → <i>conozca</i>. Cambios de raíz: querer → <i>quiera</i> (pero <i>queramos</i>), poder → <i>pueda</i>, pedir → <i>pida</i>, dormir → <i>duerma</i> (<i>durmamos</i>).</p>
<h3>Totalmente irregulares <span class="fr">(entièrement irrégulier)</span></h3>
<table><tr><th>ser</th><th>estar</th><th>ir</th><th>haber</th><th>saber</th><th>dar</th><th>ver</th></tr>
<tr><td class="irr">sea</td><td class="irr">esté</td><td class="irr">vaya</td><td class="irr">haya</td><td class="irr">sepa</td><td class="irr">dé</td><td class="irr">vea</td></tr></table></div>
<div class="card"><h2>Usos <span class="fr">(emplois)</span></h2>
<p>El subjuntivo aparece casi siempre después de <b>que</b> cuando hay <b>dos sujetos diferentes</b>. <span class="fr">Principalement après « que » lorsque les sujets sont différents.</span></p>
<p>🌟 <b>Deseos</b>: <b>Ojalá</b> <b>haga</b> sol mañana. <span class="fr">J’espère qu’il fera beau demain.</span> / <b>Quiero que</b> <b>vengas</b> a mi fiesta. <span class="fr">Je veux que tu viennes à ma fête.</span> / ¡Que <b>tengas</b> buen viaje! <span class="fr">Bon voyage !</span><br>
😊 <b>Emoción</b>: <b>Me alegra que</b> <b>estés</b> aquí. <span class="fr">Je suis content(e) que tu sois là.</span> / Me molesta que <b>lleguen</b> tarde. <span class="fr">Cela m’agace qu’ils arrivent en retard.</span><br>
🤔 <b>Duda</b>: <b>No creo que</b> <b>sea</b> verdad. <span class="fr">Je ne crois pas que ce soit vrai.</span> / Quizás <b>venga</b> Marta. <span class="fr">Marta viendra peut-être.</span><br>
💡 <b>Consejos y recomendaciones</b>: Te <b>recomiendo que</b> <b>pruebes</b> el ceviche. <span class="fr">Je te recommande de goûter le ceviche.</span> / <b>Es importante que</b> <b>duermas</b> bien. <span class="fr">Il est important que tu dormes bien.</span><br>
📅 <b>Cuando + subjuntivo</b> (futuro): <b>Cuando</b> <b>tenga</b> dinero, compraré una moto. <span class="fr">Quand j’aurai de l’argent, j’achèterai une moto.</span> (Pero hábito → indicativo: <i>Cuando tengo dinero, lo gasto.</i>)</p>
<div class="tip"><b>Truco / Astuce :</b> Mismo sujeto → infinitivo; sujetos diferentes → que + subjuntivo. <i>Quiero <b>viajar</b></i> (yo-yo) / <i>Quiero que <b>viajes</b></i> (yo-tú). Y recuerda: <b>creo que</b> + indicativo, <b>no creo que</b> + subjuntivo.</div></div>
<div class="card"><h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Quiero que tú vienes. ✅ Quiero que <b>vengas</b>.<br>
❌ Cuando llegarás, llámame. ✅ Cuando <b>llegues</b>, llámame.<br>
❌ Creo que sea difícil. ✅ Creo que <b>es</b> difícil. / No creo que <b>sea</b> difícil.<br>
❌ Quiero que yo aprenda. ✅ Quiero <b>aprender</b>.</p></div>`,
  voc: [
    ["🙏","ojalá","j’espère / espérons"],
    ["🎉","me alegra que","je suis content(e) que"],
    ["🤨","no creo que","je ne crois pas que"],
    ["💡","te recomiendo que","je te recommande de / que"],
    ["❗","es importante que","il est important que"],
    ["🔜","cuando llegues","quand tu arriveras"],
    ["🌦️","quizás","peut-être"],
    ["😤","me molesta que","cela m’ennuie que"],
    ["✈️","¡que tengas buen viaje!","bon voyage !"],
    ["🤞","esperar que","espérer que"]
  ],
  ex: [
    { q: "Ojalá ___ buen tiempo el fin de semana. (hacer)", a: ["haga"], t: "J’espère qu’il fera beau ce week-end." },
    { q: "Mis padres quieren que yo ___ medicina. (estudiar)", a: ["estudie"], t: "Mes parents veulent que j’étudie la médecine." },
    { q: "Me alegra mucho que ___ aquí. (estar, tú)", a: ["estés"], t: "Je suis vraiment content(e) que tu sois là." },
    { q: "Cuando ___ a Lima, llámame. (llegar, tú)", a: ["llegues"], t: "Quand tu arriveras à Lima, appelle-moi." },
    { q: "Es importante que ___ la verdad. (decir, vosotros)", a: ["digáis"], t: "Il est important que tu dises la vérité." },
    { q: "No creo que Luis ___ en casa ahora.", o: ["está","esté","estará"], a: 1, t: "Je ne crois pas que Luis soit à la maison en ce moment." },
    { q: "Creo que este restaurante ___ muy bueno.", o: ["es","sea","ser"], a: 0, t: "Je pense que ce restaurant est très bon." },
    { q: "Te recomiendo que ___ el museo del Prado.", o: ["visitas","visitar","visites"], a: 2, t: "Je te recommande de visiter le musée du Prado." },
    { q: "Quiero ___ un café antes de la clase.", o: ["tomar","que tome","tome"], a: 0, t: "Je veux prendre un café avant le cours. (même sujet → infinitif)" },
    { w: "Ojalá podamos vernos pronto.", t: "J’espère que nous pourrons nous revoir bientôt." },
    { w: "Cuando sea mayor, viviré en Barcelona.", t: "Quand je serai grand(e), je vivrai à Barcelone." },
    { w: "Me molesta que no me escuches.", t: "Cela m’agace que tu ne m’écoutes pas." }
  ],
  tx: { ti: "Carta a mi hija", b: `Querida Paula:<br><br>Mañana empiezas tu año de intercambio en Montevideo y estoy muy emocionada. <u>Me alegra mucho que tengas</u> esta oportunidad, aunque te voy a echar de menos.<br><br>Antes de que te vayas, quiero darte unos consejos. <u>Es importante que comas</u> bien y que <u>duermas</u> lo suficiente. <u>Te recomiendo que hables</u> con tus compañeros uruguayos y que no <u>pases</u> todo el día con otros estudiantes españoles: así aprenderás mucho más. También <u>quiero que</u> me <u>escribas</u> por lo menos una vez a la semana.<br><br>Tu padre dice que exagero. <u>No cree que sea</u> necesario llamarte todos los días, y probablemente tiene razón. <u>Ojalá</u> la familia de acogida <u>sea</u> tan simpática como parece en las fotos.<br><br><u>Cuando llegues</u>, mándame un mensaje, aunque <u>sea</u> muy tarde. Y <u>cuando vuelvas</u> en junio, haremos una gran fiesta. <u>¡Que tengas</u> un viaje estupendo!<br><br>Te quiere,<br>Mamá` },
  q: [
    ["¿Adónde va Paula?", ["A Buenos Aires","A Montevideo","A Madrid"], 1],
    ["¿Qué le recomienda su madre?", ["Hablar con compañeros uruguayos","Llamar todos los días a su padre","Estar con estudiantes españoles"], 0],
    ["¿Qué opina el padre?", ["Que Paula no debe ir","Que la familia es antipática","Que no es necesario llamarla cada día"], 2],
    ["¿Qué harán cuando Paula vuelva?", ["Un viaje","Una gran fiesta","Una cena en Montevideo"], 1]
  ],
  sp: [
    "¿Qué deseos tienes para el próximo año? Usa «ojalá».",
    "¿Qué quieres que hagan tus amigos o tu familia por ti?",
    "¿Qué te molesta que hagan otras personas? ¿Y qué te alegra?",
    "Un amigo va a visitar tu país. ¿Qué le recomiendas que haga?",
    "¿Qué harás cuando termines tus estudios o cuando te jubiles?",
    "Di tres cosas que no crees que sean verdad y explica por qué."
  ]
},
{
  id: "b1-indir",
  lvl: "B1",
  k: "g",
  t: "Estilo indirecto",
  fr: "Le discours indirect",
  ic: "💬",
  th: `<div class="card"><h2>Estilo indirecto <span class="fr">(discours indirect)</span></h2>
<p>Contamos lo que dijo otra persona con <b>decir que</b>, <b>preguntar si</b>, <b>pedir que</b>… <span class="fr">On rapporte les paroles de quelqu’un.</span></p>
<h3>1. Información → decir que</h3>
<p>«Estoy cansada.» → Ana <b>dice que</b> está cansada. <span class="fr">(discours rapporté au présent : temps inchangé)</span><br>
«Estoy cansada.» → Ana <b>dijo que</b> <b>estaba</b> cansada. <span class="fr">(discours rapporté au passé : changement des temps)</span></p>
<h3>2. Preguntas → preguntar si / preguntar + interrogativo</h3>
<p>«¿Tienes hambre?» → Me <b>preguntó si</b> tenía hambre. <span class="fr">Elle m’a demandé si j’avais faim.</span><br>
«¿Dónde vives?» → Me <b>preguntó dónde</b> vivía. <span class="fr">Il m’a demandé où j’habitais.</span></p>
<h3>3. Órdenes y peticiones → decir/pedir que + subjuntivo</h3>
<p>«Cierra la puerta.» → Me <b>dice que</b> <b>cierre</b> la puerta. / Me <b>dijo que</b> <b>cerrara</b> la puerta. <span class="fr">Elle m’a dit de fermer la porte.</span><br>
<i>(cerrara = imperfecto de subjuntivo; a nivel B1 basta con reconocerlo.)</i></p></div>
<div class="card"><h2>Cambios de tiempo <span class="fr">(concordance des temps au discours indirect au passé)</span></h2>
<table><tr><th>Estilo directo</th><th>Estilo indirecto (dijo que…)</th></tr>
<tr><td>presente: «Vivo en Quito.»</td><td>imperfecto: vivía en Quito</td></tr>
<tr><td>indefinido: «Fui al médico.»</td><td>pluscuamperfecto: había ido (o fue) al médico</td></tr>
<tr><td>perfecto: «He terminado.»</td><td>pluscuamperfecto: había terminado</td></tr>
<tr><td>futuro: «Te llamaré.»</td><td>condicional: me llamaría</td></tr>
<tr><td>ir a: «Voy a salir.»</td><td>iba a salir</td></tr>
<tr><td>imperativo: «Ven.»</td><td>que + imperfecto de subjuntivo: que fuera</td></tr>
<tr><td>imperfecto: «Era tarde.»</td><td class="irr">no cambia: era tarde</td></tr></table>
<h3>Otros cambios <span class="fr">(autres changements)</span></h3>
<p>Pronombres y posesivos: «<b>Mi</b> casa es grande» → dijo que <b>su</b> casa era grande.<br>
Tiempo y lugar: hoy → <b>aquel día</b> · mañana → <b>al día siguiente</b> · ayer → <b>el día anterior</b> · aquí → <b>allí</b> · este → <b>ese/aquel</b>.<br>
Verbos: venir → <b>ir</b>, traer → <b>llevar</b>: «Ven aquí» → me dijo que fuera allí.</p>
<div class="tip"><b>Truco / Astuce :</b> Si el verbo introductor está en presente (<i>dice, pregunta</i>), no cambies el tiempo: solo los pronombres. Si está en pasado (<i>dijo, preguntó</i>), "retrocede" un paso en el tiempo. <span class="fr">Verbe introducteur au présent → pas de changement de temps ; au passé → concordance des temps.</span></div></div>
<div class="card"><h3>Errores frecuentes <span class="fr">(erreurs fréquentes)</span></h3>
<p>❌ Me preguntó que si tenía hambre. ✅ Me preguntó <b>si</b> tenía hambre. <span class="fr">(dans un registre soutenu)</span><br>
«¿Vienes a mi casa?» → ❌ Me preguntó si venía a mi casa. ✅ Me preguntó si <b>iba</b> a <b>su</b> casa. <span class="fr">Changez les pronoms, les possessifs et venir → ir.</span><br>
❌ Dijo que vendrá mañana (ya pasó). ✅ Dijo que <b>vendría</b> al día siguiente.<br>
❌ Me dijo que cierro la puerta. ✅ Me dijo que <b>cerrara</b> la puerta.</p></div>`,
  voc: [
    ["🗣️","decir que","dire que"],
    ["❓","preguntar si","demander si"],
    ["🙏","pedir que","demander à quelqu’un de"],
    ["📢","contar","raconter"],
    ["💬","comentar","commenter"],
    ["✋","explicar","expliquer"],
    ["📆","al día siguiente","le lendemain"],
    ["⏪","el día anterior","la veille"],
    ["📍","allí","là-bas"],
    ["🔁","repetir","répéter"]
  ],
  ex: [
    { q: "«Tengo frío.» → Marta dice que ___ frío.", o: ["tiene","tenía","tuvo"], a: 0, t: "Marta dit qu’elle a froid." },
    { q: "«Vivo en Quito.» → Carlos dijo que ___ en Quito.", o: ["vive","vivía","viviría"], a: 1, t: "Carlos a dit qu’il habitait à Quito." },
    { q: "«¿Quieres un café?» → Me preguntó ___ quería un café.", o: ["que","si","qué"], a: 1, t: "Il m’a demandé si je voulais un café." },
    { q: "«Te llamaré mañana.» → Dijo que me ___ al día siguiente.", o: ["llamará","llamaría","llamaba"], a: 1, t: "Elle a dit qu’elle m’appellerait le lendemain." },
    { q: "«He perdido las llaves.» → Dijo que ___ las llaves. (perder)", a: ["había perdido"], t: "Il a dit qu’il avait perdu les clés." },
    { q: "«¿Dónde trabajas?» → Me preguntó dónde ___. (trabajar)", a: ["trabajaba"], t: "Elle m’a demandé où je travaillais." },
    { q: "«Voy a salir.» → Dijo que ___ a salir. (ir)", a: ["iba"], t: "Il a dit qu’il allait sortir." },
    { q: "«Abre la ventana.» → Mi madre me dice que ___ la ventana. (abrir)", a: ["abra"], t: "Ma mère me dit d’ouvrir la fenêtre." },
    { q: "«Mi coche es nuevo.» → Dijo que ___ coche era nuevo. (posesivo)", a: ["su"], t: "Il a dit que sa voiture était neuve." },
    { w: "Me preguntó si quería ir al cine.", t: "Elle m’a demandé si je voulais aller au cinéma." },
    { w: "Dijo que estaba muy cansado.", t: "Il a dit qu’il était très fatigué." },
    { w: "Nos pidió que llegáramos temprano.", t: "Il nous a demandé d’arriver tôt." }
  ],
  tx: { ti: "La entrevista de trabajo", b: `Ayer Lorena tuvo una entrevista de trabajo en una agencia de viajes de Sevilla. Por la noche se lo contó todo a su amiga Itziar.<br><br>—Al principio, la directora me <u>preguntó cómo me llamaba</u> y <u>de dónde era</u>. Le <u>dije que era</u> de Valencia, pero que <u>vivía</u> en Sevilla desde hacía tres años. Luego me <u>preguntó si hablaba</u> otros idiomas. Le <u>expliqué que hablaba</u> inglés y francés y que el año anterior <u>había hecho</u> un curso de portugués en Lisboa.<br><br>—¿Y te <u>preguntó por qué</u> querías el trabajo?<br><br>—Sí. Le <u>contesté que</u> me <u>encantaba</u> viajar y que <u>quería</u> ayudar a la gente a organizar sus vacaciones. Ella <u>comentó que</u> mi currículum <u>era</u> muy interesante. Al final me <u>dijo que</u> me <u>llamaría</u> al día siguiente y me <u>pidió que llevara</u> mis títulos originales.<br><br>Esta mañana ha sonado el teléfono a las nueve. Era la directora: <u>ha dicho que</u> Lorena <u>empieza</u> el lunes.` },
  q: [
    ["¿Dónde vive Lorena?", ["En Valencia","En Lisboa","En Sevilla"], 2],
    ["¿Qué curso había hecho el año anterior?", ["De francés","De portugués","De inglés"], 1],
    ["¿Qué le pidió la directora?", ["Que llevara sus títulos originales","Que hablara en inglés","Que volviera el lunes"], 0],
    ["¿Qué ha dicho la directora esta mañana?", ["Que la llamará otro día","Que Lorena empieza el lunes","Que necesita más información"], 1]
  ],
  sp: [
    "¿Qué te dijo tu mejor amigo/a la última vez que hablasteis?",
    "Recuerda una entrevista o un examen oral: ¿qué te preguntaron?",
    "¿Qué te decían tus padres cuando eras pequeño/a? Usa «me decían que…».",
    "Cuenta una noticia que has leído esta semana: ¿qué decía?",
    "Tu compañero te dice: «Mañana no puedo venir a clase porque estoy enfermo». Cuéntaselo al profesor.",
    "¿Qué te pidió alguien recientemente? ¿Lo hiciste?"
  ]
}
);
