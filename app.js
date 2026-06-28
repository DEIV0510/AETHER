/* ====================  CONFIG  ==================== */
const WHATSAPP_NUMBER = '573142617708'; // Colombia +57
const DEFAULT_MSG = 'Hola, quiero más información sobre los productos de Aether Solutions';

/* ====================  PRODUCTS  ==================== */
const IMG_DATA = {
  '5amino1mq': 'img/img_4.webp',
  'aod9604': 'img/img_5.webp',
  'bacwater_10ml': 'img/img_6.webp',
  'bacwater_20ml': 'img/img_7.webp',
  'bacwater_3ml': 'img/img_8.webp',
  'bacwater_5ml': 'img/img_9.webp',
  'bpc_tb_box': 'img/img_10.webp',
  'bpc_tb_combo': 'img/img_3.webp',
  'bpc157': 'img/img_11.webp',
  'cjc_5mg': 'img/img_12.webp',
  'ghkcu': 'img/img_13.webp',
  'ghkcu_box': 'img/img_14.webp',
  'ghrp2': 'img/img_15.webp',
  'ghrp6': 'img/img_16.webp',
  'glow': 'img/img_1.webp',
  'hghfrag': 'img/img_17.webp',
  'igf1lr3': 'img/img_18.webp',
  'ipamorelin_10mg': 'img/img_19.webp',
  'kisspeptin': 'img/img_20.webp',
  'melanotan': 'img/img_21.webp',
  'motsc': 'img/img_22.webp',
  'nad_box': 'img/img_23.webp',
  'nadplus': 'img/img_24.webp',
  'pt141': 'img/img_25.webp',
  'retatrutide_10mg': 'img/img_2.webp',
  'retatrutide_box': 'img/img_26.webp',
  'tb500': 'img/img_27.webp',
  'tesamorelin_10mg': 'img/img_28.webp',
  'tesamorelin_box': 'img/img_29.webp',
  'tirzepatide': 'img/img_30.webp',
};

const PRODUCTS = [
  // PERDIDA DE GRASA / METABOLICO
  {id:'retatrutide_10mg', cat:'metabolico', tag:'GLP', nombre:'Retatrutide', presentacion:'10 mg / vial', precio:650000, img:IMG_DATA['retatrutide_10mg'], desc:'Triple agonista GLP-1/GIP/Glucagón. Reduce el apetito, mejora la sensibilidad a la insulina y aumenta el gasto energético.', destacado:true},
  {id:'tirzepatide', cat:'metabolico', tag:'GLP', nombre:'Tirzepatide', presentacion:'10 mg / vial', precio:550000, img:IMG_DATA['tirzepatide'], desc:'Agonista dual GLP-1/GIP enfocado en control del apetito, regulación de glucosa y pérdida de grasa corporal.'},
  {id:'tirzepatide_20mg', cat:'metabolico', tag:'GLP', nombre:'Tirzepatide', presentacion:'20 mg / vial', precio:900000, img:'img/tirzepatide-20mg.webp', desc:'Péptido metabólico asociado a protocolos de pérdida de peso, regulación de saciedad, composición corporal, señalización incretínica y respuesta glucémica supervisada.'},
  {id:'5amino1mq', cat:'metabolico', tag:'Lipo', nombre:'5-Amino-1MQ', presentacion:'50 mg / vial', precio:320000, img:IMG_DATA['5amino1mq'], desc:'Modulador metabólico investigado por favorecer la oxidación de grasa y mejorar la composición corporal.'},
  {id:'aod9604', cat:'metabolico', tag:'Lipo', nombre:'AOD-9604', presentacion:'5 mg / vial', precio:230000, img:IMG_DATA['aod9604'], desc:'Fragmento derivado de HGH orientado a estimular la lipólisis y apoyar procesos de pérdida de grasa.'},
  {id:'aod9604_10mg', cat:'metabolico', tag:'Lipo', nombre:'AOD-9604', presentacion:'10 mg / vial', precio:490000, img:'img/aod9604-10mg.webp', desc:'Fragmento derivado de HGH en presentación de mayor concentración. Estimula la lipólisis y apoya la pérdida de grasa corporal sin efectos anabólicos.'},
  {id:'hghfrag', cat:'metabolico', tag:'Lipo', nombre:'HGH Fragment 176-191', presentacion:'5 mg / vial', precio:230000, img:IMG_DATA['hghfrag'], desc:'Fragmento específico de HGH enfocado en movilización y utilización de grasa corporal.'},
  {id:'motsc', cat:'metabolico', tag:'Mitocondrial', nombre:'MOTS-C', presentacion:'10 mg / vial', precio:320000, img:IMG_DATA['motsc'], desc:'Péptido mitocondrial relacionado con energía celular, sensibilidad a la insulina y rendimiento metabólico.'},
  {id:'tesamorelin_10mg', cat:'metabolico', tag:'GHRH', nombre:'Tesamorelin', presentacion:'10 mg / vial', precio:380000, img:IMG_DATA['tesamorelin_10mg'], desc:'Análogo de GHRH que estimula la liberación natural de hormona de crecimiento y favorece la reducción de grasa visceral.'},

  // CRECIMIENTO MUSCULAR
  {id:'igf1lr3', cat:'muscular', tag:'IGF', nombre:'IGF-1 LR3', presentacion:'1 mg / vial', precio:320000, img:IMG_DATA['igf1lr3'], desc:'Factor de crecimiento de acción prolongada asociado con ganancia muscular, recuperación y síntesis proteica.', destacado:true},
  {id:'ipamorelin_10mg', cat:'muscular', tag:'GH-Sec', nombre:'Ipamorelin', presentacion:'10 mg / vial', precio:250000, img:IMG_DATA['ipamorelin_10mg'], desc:'Secretagogo selectivo de GH enfocado en recuperación, descanso y soporte de composición corporal.'},
  {id:'cjc_5mg', cat:'muscular', tag:'GHRH', nombre:'CJC-1295 sin DAC', presentacion:'5 mg / vial', precio:250000, img:IMG_DATA['cjc_5mg'], desc:'Análogo de GHRH de acción corta que potencia los pulsos naturales de hormona de crecimiento.'},
  {id:'ghrp6', cat:'muscular', tag:'GHRP', nombre:'GHRP-6', presentacion:'5 mg / vial', precio:100000, img:IMG_DATA['ghrp6'], desc:'Secretagogo de GH conocido por estimular apetito, recuperación y soporte anabólico.'},
  {id:'ghrp2', cat:'muscular', tag:'GHRP', nombre:'GHRP-2', presentacion:'5 mg / vial', precio:100000, img:IMG_DATA['ghrp2'], desc:'Péptido estimulador de GH enfocado en recuperación, rendimiento y mejora de composición corporal. Versión más leve que GHRP-6.'},

  // CURATIVOS / REGENERACION
  {id:'combo_regen_total', cat:'regen', tag:'Combo', nombre:'Combo Regeneración Total', presentacion:'GHK-CU + Korageem + Zinc', precio:500000, img:'img/combo-rep-defensas.webp', desc:'Potencia tu estrategia de regeneración desde tres frentes: señalización celular, aporte de colágeno y soporte mineral. Ideal para piel, cabello, uñas, recuperación y bienestar integral.', destacado:true},
  {id:'combo_rep_defensas', cat:'regen', tag:'Combo', nombre:'Combo Reparación & Defensas', presentacion:'GHK-CU + Zinc', precio:420000, img:'img/combo-regen-total.webp', desc:'La combinación perfecta de GHK-CU con soporte mineral para la piel, sistema inmune y producción de colágeno.'},
  {id:'ghkcu', cat:'regen', tag:'Estética', nombre:'GHK-CU', presentacion:'50 mg / vial', precio:350000, img:IMG_DATA['ghkcu'], desc:'Péptido regenerativo con cobre asociado a producción de colágeno, reparación tisular y salud de piel y cabello.', destacado:true},
  {id:'glow', cat:'regen', tag:'Premium', nombre:'Glow Stack', presentacion:'70 mg / vial', precio:650000, img:IMG_DATA['glow'], desc:'Combinación enfocada en regeneración estética, calidad de piel, hidratación y recuperación celular.', destacado:true},
  {id:'bpc_tb_combo', cat:'regen', tag:'Combo', nombre:'BPC-157 + TB-500', presentacion:'20 mg / vial', precio:400000, img:IMG_DATA['bpc_tb_combo'], desc:'Stack regenerativo orientado a recuperación muscular, tendinosa y reparación de tejidos.'},
  {id:'tb500', cat:'regen', tag:'Recuperación', nombre:'TB-500', presentacion:'5 mg / vial', precio:250000, img:IMG_DATA['tb500'], desc:'Acelera recuperación de lesiones, mejora movilidad y reduce inflamación en músculos y tendones.'},
  {id:'bpc157', cat:'regen', tag:'Recuperación', nombre:'BPC-157', presentacion:'5 mg / vial', precio:250000, img:IMG_DATA['bpc157'], desc:'Péptido regenerativo que repara tejidos, reduce inflamación y brinda soporte sistémico al organismo.'},

  // OTROS
  {id:'melanotan', cat:'otros', tag:'Bronceado', nombre:'Melanotan II', presentacion:'10 mg / vial', precio:150000, img:IMG_DATA['melanotan'], desc:'Análogo melanocortínico que favorece el bronceado y puede influir sobre apetito y libido.'},
  {id:'pt141', cat:'otros', tag:'Vitalidad', nombre:'PT-141', presentacion:'10 mg / vial', precio:250000, img:IMG_DATA['pt141'], desc:'Péptido enfocado en deseo y función sexual mediante activación de receptores melanocortínicos.'},
  {id:'nadplus', cat:'longevidad', tag:'Anti-edad', nombre:'NAD+', presentacion:'500 mg / vial', precio:320000, img:IMG_DATA['nadplus'], desc:'Coenzima esencial para producción de energía celular, función mitocondrial y soporte antiedad.'},
  {id:'kisspeptin', cat:'otros', tag:'Hormonal', nombre:'Kisspeptin-10', presentacion:'10 mg / vial', precio:250000, img:IMG_DATA['kisspeptin'], desc:'Péptido relacionado con regulación hormonal y estimulación del eje reproductivo.'},

  // ============ LINEA PRIMEHACK · CAJAS PREMIUM ============
  {id:'retatrutide_20mg', cat:'metabolico', tag:'Caja Premium', nombre:'Retatrutide GLP 3-R 20mg', presentacion:'Caja · 20 mg / vial', precio:1350000, img:'img/retatrutide-20mg.webp', desc:'Triple agonista GLP-1/GIP/Glucagón en presentación de alta concentración 20mg. Para protocolos avanzados de pérdida de grasa y control metabólico.', destacado:true},
  {id:'retatrutide_box', cat:'metabolico', tag:'Caja Premium', nombre:'Retatrutide GLP 3-R', presentacion:'Caja · 10 mg / vial', precio:700000, img:IMG_DATA['retatrutide_box'], desc:'Triple agonista GLP-1/GIP/Glucagón en caja premium. Reduce el apetito, mejora la sensibilidad a la insulina y aumenta el gasto energético.', destacado:true},
  {id:'tesamorelin_box', cat:'metabolico', tag:'Caja Premium', nombre:'Tesamorelin GHRH', presentacion:'Caja · 10 mg / vial', precio:455000, img:IMG_DATA['tesamorelin_box'], desc:'Análogo de GHRH en caja premium. Estimula la liberación natural de hormona de crecimiento y favorece la reducción de grasa visceral.'},
  {id:'ghkcu_box', cat:'regen', tag:'Caja Premium', nombre:'GHK-CU Tripeptide', presentacion:'Caja · 50 mg / vial', precio:350000, img:IMG_DATA['ghkcu_box'], desc:'Péptido regenerativo con cobre en caja premium. Asociado a producción de colágeno, reparación tisular y salud de piel y cabello.', destacado:true},
  {id:'bpc_tb_box', cat:'regen', tag:'Caja Premium', nombre:'BPC 157 + TB 500 REGEN', presentacion:'Caja · 10 mg / vial', precio:400000, img:IMG_DATA['bpc_tb_box'], desc:'Stack regenerativo en caja premium. Orientado a recuperación muscular, tendinosa y reparación de tejidos.', destacado:true},
  {id:'nad_box', cat:'longevidad', tag:'Caja Premium', nombre:'NAD+ REDOX', presentacion:'Caja · 500 mg / vial', precio:320000, img:IMG_DATA['nad_box'], desc:'Coenzima NAD+ en caja premium. Esencial para producción de energía celular, función mitocondrial y soporte antiedad.', destacado:true},

  // AGUA BACTERIOSTATICA
  {id:'bacwater_3ml', cat:'agua', tag:'Diluyente', nombre:'BAC Water', presentacion:'3 ml', precio:20000, img:IMG_DATA['bacwater_3ml'], desc:'Agua estéril con conservante para reconstituir tus péptidos de forma segura.'},
  {id:'bacwater_5ml', cat:'agua', tag:'Diluyente', nombre:'BAC Water', presentacion:'5 ml', precio:25000, img:IMG_DATA['bacwater_5ml'], desc:'Presentación de 5 ml. Esencial para una correcta dilución y conservación.'},
  {id:'bacwater_10ml', cat:'agua', tag:'Diluyente', nombre:'BAC Water', presentacion:'10 ml', precio:50000, img:IMG_DATA['bacwater_10ml'], desc:'Mayor capacidad para protocolos extendidos o múltiples viales.'},
  {id:'bacwater_20ml', cat:'agua', tag:'Diluyente', nombre:'BAC Water', presentacion:'20 ml', precio:70000, img:IMG_DATA['bacwater_20ml'], desc:'La presentación más completa. Ideal para usuarios frecuentes.'},

  // ============ PRODUCTOS NUEVOS (2026) ============
  {id:'epithalon_50mg', cat:'longevidad', tag:'Longevidad', nombre:'Epithalon', presentacion:'50 mg / vial', precio:750000, img:'img/epithalon-50mg.webp', desc:'Péptido asociado a protocolos de longevidad celular, regulación circadiana, reparación biológica nocturna y soporte de procesos relacionados con envejecimiento saludable.'},
  {id:'dsip_10mg', cat:'longevidad', tag:'Descanso', nombre:'DSIP', presentacion:'10 mg / vial', precio:320000, img:'img/dsip-10mg.webp', desc:'Péptido relacionado con regulación del sueño, descanso profundo, recuperación neurofisiológica y modulación del sistema nervioso durante fases de reparación nocturna.'},
  {id:'ss31_10mg', cat:'longevidad', tag:'Mitocondrial', nombre:'SS-31', presentacion:'10 mg / vial', precio:250000, img:'img/ss31-10mg.webp', desc:'Péptido mitocondrial enfocado en función energética celular, estabilidad mitocondrial, soporte frente al estrés oxidativo y recuperación metabólica.'},
  {id:'klow_80mg', cat:'regen', tag:'Recuperación', nombre:'Klow', presentacion:'80 mg / vial', precio:850000, img:'img/klow-80mg.webp', desc:'Blend peptídico orientado a regeneración wellness, recuperación tisular, soporte estructural, balance inflamatorio y optimización de procesos de reparación física.'},
  {id:'selank_10mg', cat:'neuro', tag:'Calma', nombre:'Selank', presentacion:'10 mg / vial', precio:380000, img:'img/selank-10mg.webp', desc:'Péptido neurocognitivo enfocado en modulación del estrés, equilibrio emocional, claridad mental y soporte funcional del sistema nervioso.'},
  {id:'semax_10mg', cat:'neuro', tag:'Nootrópico', nombre:'Semax', presentacion:'10 mg / vial', precio:480000, img:'img/semax-10mg.webp', desc:'Péptido nootrópico asociado a soporte cognitivo, memoria, enfoque mental, plasticidad neuronal, neuroprotección y rendimiento intelectual.'},
  {id:'cjc_ipamorelin', cat:'muscular', tag:'GH-Sec', nombre:'CJC-1295 + Ipamorelin', presentacion:'10 mg / vial', precio:700000, img:'img/cjc-ipamorelin-10mg-v2.webp', desc:'Combinación de secretagogos asociada a soporte del eje GH/IGF-1, recuperación muscular, reparación nocturna, descanso profundo y composición corporal.'},
  {id:'epithalon_box', cat:'longevidad', tag:'Caja Premium', nombre:'Epithalon PrimeHack', presentacion:'Caja · 50 mg / vial', precio:900000, img:'img/epithalon-primehack-50mg.webp', desc:'Versión premium de Epithalon orientada a longevidad celular, regulación circadiana, reparación biológica, homeostasis celular y soporte de envejecimiento saludable.'}
];

/* ====================  PRODUCT DETAIL DATA  ==================== */
const PRODUCT_DETAIL = {
  retatrutide_10mg:{mecanismo:'Activa simultáneamente los receptores GLP-1, GIP y glucagón. Esta triple acción sinérgica reduce el apetito, mejora la sensibilidad a la insulina y eleva el gasto energético basal de forma sostenida.',beneficios:['Pérdida de peso de hasta 24.2% documentada en Phase 2','Reducción del 82% de grasa hepática en 24 semanas','Mejora HbA1c en pacientes con diabetes tipo 2','Triple mecanismo: apetito + insulina + gasto energético'],protocolo:'Administración subcutánea semanal. Ciclos de uso recomendados de 12–24 semanas con escalamiento progresivo. Se recomienda un período de descanso de 4–8 semanas entre ciclos.',stack:'Complementa con Tesamorelin para optimización metabólica completa. Compatible con MOTS-C para mayor eficiencia mitocondrial.',nota:'En Phase 2 (2023), participantes perdieron hasta 24.2% del peso en 48 semanas. Los estudios Phase 3 (programa TRIUMPH, 2024–2025) confirman resultados con mayor potencia de pérdida de grasa en población extendida.'},
  retatrutide_box:{mecanismo:'Activa simultáneamente los receptores GLP-1, GIP y glucagón. Esta triple acción sinérgica reduce el apetito, mejora la sensibilidad a la insulina y eleva el gasto energético basal de forma sostenida.',beneficios:['Pérdida de peso de hasta 24.2% documentada en Phase 2','Reducción del 82% de grasa hepática en 24 semanas','Mejora HbA1c en pacientes con diabetes tipo 2','Presentación PrimeHack premium en caja con sistema completo'],protocolo:'Administración subcutánea semanal. Ciclos de uso recomendados de 12–24 semanas con escalamiento progresivo. Se recomienda un período de descanso de 4–8 semanas entre ciclos.',stack:'Complementa con Tesamorelin para optimización metabólica completa. Compatible con MOTS-C para mayor eficiencia mitocondrial.',nota:'En Phase 2 (2023), participantes perdieron hasta 24.2% del peso en 48 semanas. Los estudios Phase 3 (programa TRIUMPH, 2024–2025) confirman resultados con mayor potencia de pérdida de grasa en población extendida.'},
  tirzepatide:{mecanismo:'Agonista dual de los receptores GLP-1 y GIP. El componente GIP actúa sobre la sensibilidad a la insulina y el metabolismo graso, mientras el GLP-1 suprime el apetito. Su combinación produce mayor reducción de peso que cada receptor activado individualmente.',beneficios:['Pérdida de peso media del 15–20% en estudios SURMOUNT','Reducción significativa de glucosa en ayunas','Mejora del perfil lipídico y presión arterial','Menor náusea comparado con otros GLP-1'],protocolo:'Administración subcutánea semanal con escalamiento progresivo por tolerancia. Ciclos de 12–24 semanas. Se recomienda un descanso de 4–8 semanas entre ciclos.',stack:'Puede combinarse con AOD-9604 para potenciar la lipólisis local. Compatible con MOTS-C para mejora mitocondrial.',nota:'FDA aprobó Tirzepatide (Zepbound/Mounjaro) en 2023 tras demostrar hasta 22.5% de reducción de peso en SURMOUNT-1 con 2,539 participantes.'},
  tirzepatide_20mg:{mecanismo:'Tirzepatide se relaciona con vías incretínicas involucradas en la señalización metabólica, regulación del apetito, saciedad y respuesta glucémica. Dentro de protocolos supervisados, se presenta como soporte avanzado para composición corporal y control metabólico, evitando promesas de resultados garantizados.',beneficios:['Apoya estrategias de control de peso y composición corporal','Favorece regulación del apetito y sensación de saciedad','Relacionado con señalización metabólica y respuesta glucémica','Requiere acompañamiento profesional, monitoreo y hábitos nutricionales'],protocolo:'Se comunica solo como parte de un manejo metabólico supervisado. No se publican dosis, frecuencia, vía, esquemas ni promesas de pérdida de peso.',stack:'SS-31, acompañamiento nutricional, entrenamiento, control metabólico y seguimiento profesional.'},
  '5amino1mq':{mecanismo:'Inhibe la enzima NNMT (nicotinamide N-methyltransferase), que regula los niveles intracelulares de NAD⁺. Al bloquear esta enzima, eleva el NAD⁺ disponible, activa SIRT1 y potencia la oxidación de grasas y la función mitocondrial de forma sostenida.',beneficios:['Aumenta la quema de grasa sin catabolismo muscular','Eleva los niveles de NAD⁺ intracelular','Activa SIRT1 para metabolismo y longevidad celular','Mejora la sensibilidad a la insulina'],protocolo:'Administración oral o subcutánea. Ciclos de 8–12 semanas seguidos de un descanso de 4 semanas antes de repetir.',stack:'Sinergia potente con NAD⁺ directo. Combina bien con MOTS-C y AOD-9604 para un stack metabólico integral.',nota:'El 5-Amino-1MQ es derivado del metabolismo de la vitamina B3. Estudios en ratones mostraron reducción del 10% del peso corporal en 11 días sin efectos adversos detectados.'},
  aod9604_10mg:{mecanismo:'Fragmento C-terminal sintético de HGH (aminoácidos 177-191), modificado con un puente disulfuro. En presentación de 10mg activa la lipólisis y receptores beta-adrenérgicos en tejido adiposo con mayor flexibilidad de fraccionamiento por ciclo.',beneficios:['Mayor rendimiento por vial — protocolo completo con menos reconstituciones','Estimula la quema de grasa sin afectar IGF-1 ni masa muscular','Inhibe la lipogénesis (formación de nueva grasa)','Presentación PrimePeak de alta concentración'],protocolo:'Administración subcutánea en ayunas. Ciclos de 8–12 semanas.',stack:'Ideal con Tirzepatide o Retatrutide para pérdida de grasa acelerada. Compatible con CJC-1295 + Ipamorelin.',nota:'La presentación 10mg de AOD-9604 permite gestionar un ciclo completo de 8 semanas con un solo vial, optimizando la logística y reduciendo el costo por dosis.'},
  retatrutide_20mg:{mecanismo:'Triple agonista de receptores GLP-1, GIP y glucagón en presentación de alta concentración. El 20mg ofrece mayor flexibilidad de fraccionamiento para protocolos extendidos con triple acción sinérgica sobre apetito, insulina y gasto energético.',beneficios:['Presentación de alta concentración para protocolos avanzados','Triple acción: apetito + sensibilidad insulínica + gasto energético','Pérdida de peso documentada hasta 24.2% en Phase 2','Línea PrimeHack premium — mayor flexibilidad de dosificación'],protocolo:'Administración subcutánea semanal con escalamiento progresivo. Ciclos de 12–24 semanas.',stack:'Complementa con Tesamorelin para optimización metabólica completa. Compatible con MOTS-C para mayor eficiencia mitocondrial.',nota:'La presentación 20mg del Retatrutide (programa TRIUMPH, estudios Phase 3 2024–2025) permite gestionar protocolos de mayor duración con menor número de reconstituciones.'},
  aod9604:{mecanismo:'Fragmento C-terminal sintético de HGH (aminoácidos 177-191), modificado con un puente disulfuro. Estimula la lipólisis y activa receptores beta-adrenérgicos en tejido adiposo sin los efectos anabólicos o sobre IGF-1 del HGH completo.',beneficios:['Estimula la quema de grasa sin aumentar IGF-1','No genera resistencia a la insulina como HGH completo','Inhibe la formación de nuevas células grasas (lipogénesis)','Perfil de seguridad favorable documentado en Phase 2B'],protocolo:'Administración subcutánea, preferiblemente en ayunas. Ciclos de 8–12 semanas con un período de descanso equivalente entre ciclos.',stack:'Combina muy bien con Tirzepatide para pérdida de grasa acelerada. Compatible con CJC-1295 + Ipamorelin en stacks de GH.',nota:'AOD-9604 completó exitosamente un ensayo clínico Phase 2B (METAOD006) aprobado por FDA para obesidad con excelente perfil de seguridad a 24 semanas.'},
  hghfrag:{mecanismo:'Fragmento de HGH (aminoácidos 176-191) que actúa directamente sobre receptores beta-3 adrenérgicos en tejido graso. Activa la lipólisis (degradación de triglicéridos) y puede inhibir la lipogénesis sin afectar los niveles de IGF-1 o glucosa.',beneficios:['Lipólisis localizada sin efecto anabólico sistémico','No eleva IGF-1 ni glucosa en sangre','Puede reducir grasa visceral y subcutánea','Metabolización rápida con vida media de ~30 minutos'],protocolo:'Administración subcutánea en ayunas, 2 veces al día. Ciclos de 8–12 semanas seguidos de un descanso de 4–8 semanas.',stack:'Ideal con CJC-1295/Ipamorelin para maximizar quema de grasa durante picos naturales de GH. Compatible con Tirzepatide.',nota:'A diferencia del HGH completo, el Fragment 176-191 no causa resistencia a la insulina ni acromegalia, siendo más seguro para protocolos prolongados de investigación.'},
  motsc:{mecanismo:'Péptido de 16 aminoácidos codificado en el ADN mitocondrial (gen 12S rRNA). Bajo estrés metabólico se transloca al núcleo celular y activa AMPK — el sensor maestro del metabolismo — mejorando captación de glucosa y oxidación de grasas en músculo esquelético.',beneficios:['Activa AMPK similar al efecto de la metformina','Mejora la sensibilidad a la insulina en músculo','Aumenta la eficiencia energética mitocondrial','Efectos documentados sobre envejecimiento en modelos animales'],protocolo:'Administración subcutánea, 2–3 veces por semana. Ciclos de 8–12 semanas con un descanso equivalente antes de repetir.',stack:'Excelente sinergia con NAD⁺ para soporte mitocondrial completo. Complementa GLP-1 agonistas en protocolos metabólicos avanzados.',nota:'MOTS-C fue descubierto en 2015 por el Dr. Pinchas Cohen (USC). Es uno de los pocos péptidos codificados en el ADN mitocondrial — no en el ADN nuclear.'},
  tesamorelin_10mg:{mecanismo:'Análogo estable del péptido liberador de hormona de crecimiento (GHRH). Se une a receptores GHRH en la hipófisis, estimulando síntesis y secreción de pulsos naturales de GH que a su vez elevan IGF-1 de forma fisiológica.',beneficios:['Reduce grasa visceral abdominal comprobadamente','Único análogo GHRH aprobado por FDA (Egrifta)','Preserva la pulsatilidad natural de la hormona de crecimiento','Mejora la composición corporal sin suprimir el eje hormonal'],protocolo:'Administración subcutánea diaria, preferiblemente en la noche. Ciclos de 3–6 meses seguidos de un período de descanso antes de reiniciar.',stack:'Potente combinación con Ipamorelin (1:1) para maximizar liberación de GH. Compatible con CJC-1295 sin DAC.',nota:'Tesamorelin es el único análogo de GHRH aprobado por FDA (2010) bajo el nombre Egrifta, para reducción de grasa visceral con evidencia clínica sólida.'},
  tesamorelin_box:{mecanismo:'Análogo estable del péptido liberador de hormona de crecimiento (GHRH). Se une a receptores GHRH en la hipófisis, estimulando síntesis y secreción de pulsos naturales de GH que a su vez elevan IGF-1 de forma fisiológica.',beneficios:['Reduce grasa visceral abdominal comprobadamente','Único análogo GHRH aprobado por FDA (Egrifta)','Preserva la pulsatilidad natural de la hormona de crecimiento','Presentación PrimeHack premium en caja'],protocolo:'Administración subcutánea diaria, preferiblemente en la noche. Ciclos de 3–6 meses seguidos de un período de descanso antes de reiniciar.',stack:'Potente combinación con Ipamorelin (1:1) para maximizar liberación de GH. Compatible con CJC-1295 sin DAC.',nota:'Tesamorelin es el único análogo de GHRH aprobado por FDA (2010) bajo el nombre Egrifta, para reducción de grasa visceral con evidencia clínica sólida.'},
  igf1lr3:{mecanismo:'Variante modificada de IGF-1 con sustitución Arg en posición 3 y extensión N-terminal de 13 aminoácidos. Reduce la afinidad por proteínas de unión (IGFBP), prolongando su vida media a 20–30 horas vs. los 15 minutos del IGF-1 nativo.',beneficios:['Estimula hiperplasia muscular — aumenta el número de fibras','Activa células satélite para generación de nuevo tejido muscular','Mejora la síntesis proteica y retención de nitrógeno','Aumenta la lipólisis por activación del receptor IGF-1R'],protocolo:'Administración subcutánea o intramuscular post-entrenamiento. Ciclos de 4 semanas seguidos de un descanso equivalente para evitar tolerancia.',stack:'Combina con Ipamorelin + CJC-1295 para un eje GH-IGF-1 completo. GHRP-6 potencia su liberación endógena.',nota:'A diferencia del IGF-1 nativo, el LR3 no estimula células adiposas de forma significativa. Su vida media prolongada permite una sola inyección diaria con cobertura de 24 horas.'},
  ipamorelin_10mg:{mecanismo:'Pentapéptido agonista selectivo del receptor de ghrelina (GHS-R1a). Estimula la hipófisis para liberar pulsos de GH sin afectar cortisol, prolactina ni ACTH. Es el secretagogo de GH más selectivo y limpio disponible en investigación.',beneficios:['Pulsos de GH sin elevación de cortisol ni prolactina','Mejora la calidad del sueño profundo y recuperación','Favorece recuperación muscular y articular','Compatible con uso continuo — desensibilización lenta'],protocolo:'Administración subcutánea 2–3 veces al día, especialmente antes de dormir. Ciclos de 12–16 semanas. Mejor combinado con CJC-1295 para mayor efecto sinérgico.',stack:'La combinación Ipamorelin + CJC-1295 produce pulsos de GH 6–10x mayores que cada uno solo. También complementa Tesamorelin.',nota:'Estudios comparativos demuestran que Ipamorelin produce la misma liberación de GH que GHRP-6 sin sus efectos sobre cortisol, apetito ni prolactina.'},
  cjc_5mg:{mecanismo:'Análogo del GHRH sin el grupo DAC (Drug Affinity Complex), con vida media corta similar al GHRH nativo (~30 min). Estimula la hipófisis a liberar GH en pulsos fisiológicos, preservando el patrón natural de secreción.',beneficios:['Pulsos fisiológicos de GH sin niveles basales elevados','Mejora composición corporal a largo plazo','Soporte para recuperación y calidad del sueño','Sin efecto taquifiláctico con uso continuado'],protocolo:'Administración subcutánea 2–3 veces al día, en los picos fisiológicos de GH (mañana y noche). Ciclos de 12–16 semanas. Combinar siempre con Ipamorelin.',stack:'Protocolo estándar: CJC-1295 sin DAC + Ipamorelin 1:1. La combinación más estudiada para secreción fisiológica de GH.',nota:'La versión SIN DAC tiene vida media de 30 minutos y produce un pico limpio de GH. La versión CON DAC dura 7–10 días, alterando la pulsatilidad natural.'},
  ghrp6:{mecanismo:'Hexapéptido sintético agonista de receptores GHS. Actúa sobre hipófisis e hipotálamo para liberar GH. También estimula la ghrelina, generando efecto orexigénico (aumenta el apetito) — particularmente útil en fases de volumen muscular.',beneficios:['Potente estimulación de GH para masa muscular','Efecto orexigénico — aumenta el apetito','Soporte anabólico para fases de construcción','Costo-efectivo comparado con otros secretagogos'],protocolo:'Administración subcutánea 2–3 veces al día en ayunas. Evitar alimentos 30 minutos antes y después de cada aplicación. Ciclos de 12–16 semanas.',stack:'Combinar con CJC-1295 sin DAC para efecto sinérgico. Evitar en protocolos de reducción de grasa por el efecto sobre el apetito.',nota:'GHRP-6 fue el primer péptido secretagogo de GH sintetizado (1977). Aunque menos selectivo que Ipamorelin, sigue siendo uno de los más potentes para estimulación de GH.'},
  ghrp2:{mecanismo:'Hexapéptido sintético agonista del receptor GHS-R1a. Similar a GHRP-6 pero con mayor potencia de liberación de GH y menor efecto sobre el apetito. Puede elevar moderadamente cortisol y prolactina a dosis altas.',beneficios:['Mayor pico de GH que GHRP-6 a dosis equivalentes','Menor estimulación del apetito que GHRP-6','Soporte para recuperación y composición corporal','Compatible con protocolos de mantenimiento'],protocolo:'Administración subcutánea 2–3 veces al día en ayunas. Ciclos de 12–16 semanas. Usar con CJC-1295 sin DAC para máximo efecto sinérgico.',stack:'Combinar con CJC-1295 sin DAC para sinergia 6–10x. Puede alternar con Ipamorelin para reducir tolerancia.',nota:'GHRP-2 produce pulsos de GH un 25–30% más altos que GHRP-6 pero puede elevar cortisol a dosis altas. Mantener dosis moderadas minimiza este efecto secundario.'},
  combo_regen_total:{mecanismo:'Sinergia de tres compuestos: GHK-CU activa la síntesis de colágeno y regula genes de regeneración tisular; Korageem aporta péptidos bioactivos de colágeno marino; el Zinc actúa como cofactor mineral esencial en más de 300 enzimas relacionadas con reparación celular y síntesis proteica.',beneficios:['Producción de colágeno potenciada desde tres frentes','Mejora visible de elasticidad, piel, cabello y uñas','Soporte inmunológico con zinc de alta biodisponibilidad','Protocolo integral de regeneración y bienestar'],protocolo:'Ciclos de 8–12 semanas.',stack:'Puede complementarse con BPC-157 para recuperación de tejidos blandos o con Glow Stack para efecto estético máximo.',nota:'La combinación GHK-CU + colágeno marino + zinc es uno de los protocolos más completos para regeneración cutánea y bienestar integral documentados en investigación.'},
  combo_rep_defensas:{mecanismo:'GHK-CU activa receptores en la superficie celular estimulando síntesis de colágeno I y III, regulación de metaloproteinasas y angiogénesis. El Zinc potencia su acción como cofactor mineral crítico para la función inmune, síntesis de proteínas estructurales y protección antioxidante.',beneficios:['Producción de colágeno y reparación tisular','Soporte del sistema inmune y defensas naturales','Salud de piel, cabello y tejido conectivo','Combo simple y de alta complementariedad'],protocolo:'Ciclos de 8–12 semanas.',stack:'Ideal para combinar con BPC-157 en protocolos de recuperación. Complementa el Glow Stack para resultados estéticos integrales.',nota:'El zinc es cofactor de más de 300 enzimas. Su combinación con GHK-CU potencia los efectos regenerativos de ambos compuestos de forma sinérgica.'},
  ghkcu:{mecanismo:'Tripéptido glicil-L-histidil-L-lisina complejado con cobre (Cu²⁺). Activa la síntesis de colágeno I y III, modula metaloproteinasas, estimula la angiogénesis y regula más de 4,000 genes relacionados con regeneración tisular.',beneficios:['Aumenta la producción de colágeno hasta un 70% en estudios','Mejora la elasticidad y textura de la piel','Fortalece el folículo piloso y reduce pérdida de cabello','Reduce inflamación y acelera cicatrización de heridas'],protocolo:'Administración subcutánea. Ciclos de 8–12+ semanas.',stack:'Sinergia óptima con BPC-157 para regeneración sistémica completa. El Glow Stack incluye GHK-CU como componente principal.',nota:'GHK-CU es producido naturalmente por el cuerpo. Sus niveles declinan de ~200 ng/mL a los 20 años a ~80 ng/mL a los 60. Modula más genes que cualquier otro péptido conocido.'},
  ghkcu_box:{mecanismo:'Tripéptido glicil-L-histidil-L-lisina complejado con cobre (Cu²⁺). Activa la síntesis de colágeno I y III, modula metaloproteinasas, estimula la angiogénesis y regula más de 4,000 genes relacionados con regeneración tisular.',beneficios:['Aumenta la producción de colágeno hasta un 70% en estudios','Mejora la elasticidad y textura de la piel','Fortalece el folículo piloso y reduce pérdida de cabello','Presentación premium PrimeHack en caja'],protocolo:'Administración subcutánea. Ciclos de 8–12+ semanas.',stack:'Sinergia óptima con BPC-157 para regeneración sistémica completa. El Glow Stack incluye GHK-CU como componente principal.',nota:'GHK-CU es producido naturalmente por el cuerpo. Sus niveles declinan de ~200 ng/mL a los 20 años a ~80 ng/mL a los 60. Modula más genes que cualquier otro péptido conocido.'},
  glow:{mecanismo:'Stack premium que combina GHK-CU, BPC-157 y péptidos regenerativos en un solo vial. El GHK-CU activa síntesis de colágeno, el BPC-157 modula el VEGF para neoangiogénesis y la combinación produce efectos sinérgicos en piel, cabello y recuperación celular.',beneficios:['Regeneración de piel y colágeno en sinergia comprobada','Mejora visiblemente la hidratación y luminosidad cutánea','Soporte para cabello, uñas y tejido conectivo','Efecto anti-envejecimiento multiobjetivo en un solo vial'],protocolo:'Administración subcutánea 1 vez al día. Ciclos de 8–12 semanas para resultados óptimos. Se puede repetir tras un descanso de 4–8 semanas.',stack:'Diseñado como stack completo. Puede complementarse con NAD⁺ para bienestar celular o PT-141 para vitalidad general.',nota:'El Glow Stack está formulado para maximizar sinergia entre péptidos regenerativos. La combinación logra efectos que ningún péptido individual alcanza por separado.'},
  bpc_tb_combo:{mecanismo:'BPC-157 activa la vía FAK-paxilina para migración de fibroblastos y regula el VEGF para angiogénesis. TB-500 regula la actina-beta-4 en células dañadas, promoviendo su migración hacia tejidos lesionados. Atacan la regeneración desde dos vías distintas y complementarias.',beneficios:['Recuperación de tendones y ligamentos significativamente acelerada','Reduce inflamación crónica en tejido muscular y articular','Soporte para articulaciones, tejido conectivo y fascia','Protocolo de recuperación preferido por atletas de alto rendimiento'],protocolo:'Ciclos de 6–12 semanas.',stack:'Conocido como el "Wolverine Stack". Se complementa con GHK-CU para regeneración dérmica y aceleración de cicatrización.',nota:'La combinación BPC-157 + TB-500 es llamada "Wolverine Stack" en comunidades de biohacking por sus efectos documentados en recuperación de lesiones difíciles.'},
  bpc_tb_box:{mecanismo:'BPC-157 activa la vía FAK-paxilina para migración de fibroblastos y regula el VEGF para angiogénesis. TB-500 regula la actina-beta-4 en células dañadas, promoviendo su migración hacia tejidos lesionados. Atacan la regeneración desde dos vías distintas y complementarias.',beneficios:['Recuperación de tendones y ligamentos significativamente acelerada','Reduce inflamación crónica en tejido muscular y articular','Soporte para articulaciones, tejido conectivo y fascia','Presentación premium PrimeHack en caja'],protocolo:'Ciclos de 6–12 semanas.',stack:'Conocido como el "Wolverine Stack". Se complementa con GHK-CU para regeneración dérmica y aceleración de cicatrización.',nota:'La combinación BPC-157 + TB-500 es llamada "Wolverine Stack" en comunidades de biohacking por sus efectos documentados en recuperación de lesiones difíciles.'},
  tb500:{mecanismo:'Fragmento sintético de la Timosina Beta-4 (aminoácidos 17-23), proteína natural involucrada en la polimerización de actina. Regula la actina-beta-4 en células dañadas, promoviendo su migración hacia zonas lesionadas y reduciendo la inflamación vía NF-κB.',beneficios:['Acelera recuperación de lesiones musculares y tendinosas','Mejora la flexibilidad y movilidad articular','Reduce cicatrices y fibrosis post-lesión','Promueve neoangiogénesis en tejidos dañados'],protocolo:'Ciclos de 6–12 semanas.',stack:'Combinar con BPC-157 para el "Wolverine Stack". Se complementa con GHK-CU para recuperación dérmica adicional.',nota:'La Timosina Beta-4 es producida naturalmente por el timo. TB-500 es su fracción activa más pequeña, concentrando los mismos efectos regenerativos en menor volumen.'},
  bpc157:{mecanismo:'Secuencia de 15 aminoácidos derivada del jugo gástrico humano (Body Protection Compound). Activa la vía FAK-paxilina para migración de fibroblastos, modula VEGF para angiogénesis y ejerce efectos neuroprotectores sistémicos documentados.',beneficios:['Acelera la curación de tendones, músculos y ligamentos','Protege y repara la mucosa gastrointestinal','Efectos neuroprotectores en modelos animales','Reduce inflamación sin suprimir el sistema inmune'],protocolo:'Ciclos de 6–12 semanas.',stack:'Sinergia óptima con TB-500 (Wolverine Stack). Puede combinarse con GHK-CU para regeneración tisular completa.',nota:'BPC-157 tiene más de 300 estudios publicados en modelos animales, documentando efectos regenerativos en más de 12 tipos de tejido distintos.'},
  melanotan:{mecanismo:'Análogo sintético de la α-MSH (hormona estimulante de melanocitos). Activa receptores melanocortínicos MC1R en melanocitos, estimulando producción de melanina y bronceado sin exposición solar. También actúa sobre MC3R y MC4R con efectos sobre apetito y libido.',beneficios:['Bronceado progresivo con mínima exposición solar','Puede reducir el apetito de forma secundaria','Efectos sobre libido documentados','Resultado visible en 1–2 semanas de uso regular'],protocolo:'Administración subcutánea. Fase de carga durante 1–2 semanas, luego mantenimiento 2–3 veces por semana. Resultados visibles en 1–3 semanas de uso.',stack:'Puede combinarse con PT-141 para efectos complementarios sobre libido. Algunos usuarios lo combinan con NAD⁺ para bienestar general.',nota:'Melanotan II activa los 5 receptores melanocortínicos (MC1–MC5) mientras que el bronceado natural solo activa MC1R, lo que explica sus efectos adicionales sobre apetito y función sexual.'},
  pt141:{mecanismo:'Péptido cíclico de 7 aminoácidos derivado de Melanotan II. Activa selectivamente los receptores melanocortínicos MC3R y MC4R en el sistema nervioso central, generando respuesta de deseo y función sexual sin actuar directamente sobre el sistema vascular.',beneficios:['Actúa directamente en el cerebro — no en vasos sanguíneos','Efectivo tanto en hombres como en mujeres','Inicio de efecto más rápido que fármacos PDE5 (sildenafil)','Puede funcionar cuando otros tratamientos convencionales fallan'],protocolo:'Administración subcutánea 45–60 minutos antes de la actividad. No usar más de 2 veces por semana para mantener la sensibilidad óptima a largo plazo.',stack:'Uso generalmente independiente. Puede complementarse con Kisspeptin-10 para soporte del eje hormonal.',nota:'PT-141 (Bremelanotide) fue aprobado por FDA en 2019 como Vyleesi para disfunción del deseo sexual hipoactivo en mujeres premenopáusicas — el único aprobado para este fin.'},
  nadplus:{mecanismo:'Coenzima esencial en más de 500 reacciones enzimáticas. Actúa como donante/aceptor de electrones en la cadena de transporte mitocondrial para producción de ATP. Activa sirtuinas (SIRT1-7) y PARPs que regulan reparación del ADN, inflamación y envejecimiento celular.',beneficios:['Aumenta la energía celular y función mitocondrial','Activa sirtuinas — proteínas clave de longevidad','Mejora la reparación del ADN y función cognitiva','Sus niveles declinan naturalmente más del 50% entre 30 y 70 años'],protocolo:'Infusión IV (mayor biodisponibilidad) o inyección subcutánea, 1–2 sesiones por semana. La administración oral tiene menor biodisponibilidad. Uso continuo recomendado para resultados acumulativos.',stack:'Sinergia natural con 5-Amino-1MQ y MOTS-C para optimización mitocondrial completa. Complementa cualquier protocolo anti-envejecimiento.',nota:'Los niveles de NAD⁺ caen más del 50% entre los 30 y los 70 años. Las sirtuinas activadas por NAD⁺ son los mismos mecanismos de longevidad que activa la restricción calórica.'},
  nad_box:{mecanismo:'Coenzima esencial en más de 500 reacciones enzimáticas. Actúa como donante/aceptor de electrones en la cadena de transporte mitocondrial para producción de ATP. Activa sirtuinas (SIRT1-7) y PARPs que regulan reparación del ADN, inflamación y envejecimiento celular.',beneficios:['Aumenta la energía celular y función mitocondrial','Activa sirtuinas — proteínas clave de longevidad','Mejora la reparación del ADN y función cognitiva','Presentación premium NAD+ REDOX en caja PrimeHack'],protocolo:'Infusión IV (mayor biodisponibilidad) o inyección subcutánea, 1–2 sesiones por semana. La administración oral tiene menor biodisponibilidad. Uso continuo recomendado para resultados acumulativos.',stack:'Sinergia natural con 5-Amino-1MQ y MOTS-C para optimización mitocondrial completa. Complementa cualquier protocolo anti-envejecimiento.',nota:'Los niveles de NAD⁺ caen más del 50% entre los 30 y los 70 años. Las sirtuinas activadas por NAD⁺ son los mismos mecanismos de longevidad que activa la restricción calórica.'},
  kisspeptin:{mecanismo:'Decapéptido neuroendocrino que activa el receptor KISS1R (GPR54) en neuronas GnRH del hipotálamo, estimulando la liberación de gonadotropinas. Esto activa el eje hipotálamo-hipófisis-gónadas para aumentar LH, FSH y testosterona/estrógeno de forma fisiológica.',beneficios:['Estimula el eje hormonal reproductivo de forma natural','Puede elevar testosterona sin suprimir el eje endógeno','Soporte para fertilidad masculina y femenina','Posibles efectos sobre libido y bienestar hormonal general'],protocolo:'Ciclos de 4–8 semanas.',stack:'Puede combinarse con PT-141 para efectos sobre libido. Compatible con protocolos de optimización hormonal masculina o femenina.',nota:'Kisspeptin es el "interruptor maestro" del sistema reproductivo. Mutaciones en el gen KISS1R causan hipogonadismo hipogonadotrófico — ausencia total de pubertad y fertilidad.'},
  bacwater_3ml:{mecanismo:'Agua estéril con 0.9% de alcohol bencílico como conservante antimicrobiano. El pH ligeramente ácido (4.5–7.0) estabiliza la mayoría de péptidos liofilizados. El alcohol bencílico inhibe el crecimiento bacteriano permitiendo múltiples extracciones del mismo vial.',beneficios:['Conservación del péptido hasta 4 semanas en refrigeración','Bacteriostasis con alcohol bencílico al 0.9%','Compatible con la mayoría de péptidos liofilizados','Presentación de 3 ml: ideal para 1–2 viales de péptido'],protocolo:'Inyectar el volumen calculado de BAC Water en el vial de péptido liofilizado. Deslizar por la pared del vial, nunca agitar. Refrigerar tras reconstitución y usar dentro de 4 semanas.',stack:'Esencial para todos los péptidos en formato polvo liofilizado del catálogo Aether.',nota:'El agua bacteriostática es diferente al agua estéril regular: el conservante permite extraer múltiples dosis del mismo vial durante semanas, algo imposible con agua estéril simple.'},
  bacwater_5ml:{mecanismo:'Agua estéril con 0.9% de alcohol bencílico como conservante antimicrobiano. El pH ligeramente ácido (4.5–7.0) estabiliza la mayoría de péptidos liofilizados. El alcohol bencílico inhibe el crecimiento bacteriano permitiendo múltiples extracciones del mismo vial.',beneficios:['Conservación del péptido hasta 4 semanas en refrigeración','Volumen de 5 ml: flexible para distintas diluciones','Compatible con la mayoría de péptidos liofilizados','Ideal para protocolos de dosificación moderada'],protocolo:'Inyectar el volumen calculado de BAC Water en el vial de péptido liofilizado. Deslizar por la pared del vial, nunca agitar. Refrigerar tras reconstitución y usar dentro de 4 semanas.',stack:'Compatible con todos los péptidos del catálogo. Ideal para péptidos que requieren mayor volumen de diluyente.',nota:'Con 5 ml de BAC Water se puede diluir un péptido de 5 mg a una concentración cómoda de trabajo, facilitando extracciones precisas con jeringa de insulina estándar.'},
  bacwater_10ml:{mecanismo:'Agua estéril con 0.9% de alcohol bencílico como conservante antimicrobiano. El pH ligeramente ácido (4.5–7.0) estabiliza la mayoría de péptidos liofilizados. El alcohol bencílico inhibe el crecimiento bacteriano permitiendo múltiples extracciones del mismo vial.',beneficios:['Volumen mayor para protocolos extendidos','Suficiente para reconstituir 2–3 viales simultáneamente','Conservación óptima hasta 4 semanas en frío','Reduce la frecuencia de reposición de diluyente'],protocolo:'Inyectar el volumen calculado de BAC Water en el vial de péptido liofilizado. Deslizar por la pared del vial, nunca agitar. Refrigerar tras reconstitución y usar dentro de 4 semanas.',stack:'Ideal para usuarios con múltiples péptidos activos en paralelo. Compatible con todo el catálogo Aether Solutions.',nota:'10 ml es el volumen recomendado para protocolos de más de 4 semanas o cuando se manejan stacks de 2 o más péptidos simultáneamente.'},
  bacwater_20ml:{mecanismo:'Agua estéril con 0.9% de alcohol bencílico como conservante antimicrobiano. El pH ligeramente ácido (4.5–7.0) estabiliza la mayoría de péptidos liofilizados. El alcohol bencílico inhibe el crecimiento bacteriano permitiendo múltiples extracciones del mismo vial.',beneficios:['Mayor capacidad disponible — nunca te quedas sin diluyente','Ideal para protocolos largos con múltiples péptidos','La opción más completa y económica del catálogo','Gestión de protocolo extendido con un solo vial'],protocolo:'Inyectar el volumen calculado de BAC Water en el vial de péptido liofilizado. Deslizar por la pared del vial, nunca agitar. Refrigerar tras reconstitución y usar dentro de 4 semanas.',stack:'La presentación definitiva para usuarios frecuentes. Compatible con todos los péptidos Aether Solutions.',nota:'Con 20 ml de BAC Water puedes gestionar protocolos de larga duración con múltiples péptidos simultáneos sin preocuparte por el diluyente disponible.'},
  epithalon_50mg:{mecanismo:'Epithalon se relaciona con procesos de regulación celular, ritmos circadianos y mantenimiento funcional asociado al envejecimiento saludable. Su uso dentro de protocolos wellness se enfoca en apoyar la reparación biológica nocturna, el equilibrio de ciclos de descanso y la homeostasis celular, siempre bajo criterio profesional.',beneficios:['Apoya procesos de homeostasis celular y envejecimiento saludable','Favorece la regulación de ciclos biológicos y descanso reparador','Asociado a investigación sobre telómeros, reparación celular y longevidad','Ideal como soporte en protocolos de recuperación, sueño y bienestar celular'],protocolo:'Orientado a bienestar celular, regulación del sueño y recuperación biológica, siempre bajo criterio profesional. No se publican dosis ni esquemas de uso.',stack:'DSIP, SS-31, Selank y protocolos de recuperación integral.'},
  dsip_10mg:{mecanismo:'DSIP se asocia con procesos de neuromodulación vinculados al descanso, la regulación de ciclos de sueño y la recuperación del sistema nervioso. Dentro de protocolos wellness, se presenta como soporte para mejorar la calidad del descanso y favorecer procesos de reparación nocturna.',beneficios:['Apoya la calidad del sueño y el descanso profundo','Favorece recuperación nocturna y equilibrio neurofisiológico','Relacionado con modulación del sistema nervioso y ciclos de descanso','Útil en protocolos donde el sueño y la recuperación son prioridad'],protocolo:'Enfocado en descanso, recuperación nocturna y equilibrio del sistema nervioso, bajo criterio profesional. No se comunican dosis ni esquemas de uso.',stack:'Epithalon, Selank, Semax y protocolos de control de estrés.'},
  ss31_10mg:{mecanismo:'SS-31 se relaciona con el soporte de la membrana mitocondrial, la eficiencia energética celular y la protección frente al daño oxidativo. Dentro de protocolos de longevidad y recuperación, se presenta como herramienta de soporte para optimizar función mitocondrial, vitalidad y resiliencia celular.',beneficios:['Apoya la función mitocondrial y producción energética celular','Favorece protección frente al estrés oxidativo','Enfocado en vitalidad, recuperación y rendimiento celular','Útil en protocolos de longevidad, fatiga y soporte metabólico'],protocolo:'Se integra en protocolos de soporte mitocondrial, fatiga celular, longevidad y recuperación, bajo criterio profesional. No se publican dosis ni esquemas de uso.',stack:'Epithalon, Tirzepatide, CJC-1295 + Ipamorelin y protocolos metabólicos.'},
  klow_80mg:{mecanismo:'Klow se presenta como un blend de soporte regenerativo enfocado en procesos de reparación tisular, modulación del desgaste físico y recuperación estructural. Su enfoque está relacionado con bienestar articular, soporte de tejidos y balance inflamatorio dentro de protocolos profesionales.',beneficios:['Apoya procesos de recuperación tisular y regeneración funcional','Enfocado en tejidos, piel, articulaciones y estructuras de soporte','Favorece el equilibrio inflamatorio dentro de protocolos supervisados','Útil en estrategias de recuperación avanzada y desgaste físico'],protocolo:'Soporte wellness y regenerativo bajo criterio profesional. No se detallan dosis, frecuencia, vía ni esquemas de aplicación.',stack:'SS-31, Epithalon, CJC-1295 + Ipamorelin y protocolos de recuperación física.'},
  selank_10mg:{mecanismo:'Selank se relaciona con procesos de modulación neuroquímica, respuesta al estrés y equilibrio del sistema nervioso. Su enfoque dentro de protocolos neurocognitivos está orientado a apoyar calma mental, estabilidad emocional y claridad cognitiva bajo acompañamiento profesional.',beneficios:['Apoya equilibrio emocional y respuesta adaptativa al estrés','Favorece claridad mental y estabilidad neurocognitiva','Enfocado en bienestar nervioso sin perfil estimulante agresivo','Útil en protocolos de enfoque, calma mental y rendimiento cognitivo'],protocolo:'Ideal para protocolos de estrés, enfoque, regulación emocional y bienestar neurocognitivo, bajo criterio profesional. No se comunican dosis ni esquemas de uso.',stack:'Semax, DSIP, Epithalon y protocolos de sueño/estrés.'},
  semax_10mg:{mecanismo:'Semax se asocia con procesos de señalización neurotrófica, plasticidad sináptica y soporte de funciones cognitivas. Dentro de protocolos profesionales, se presenta como herramienta de apoyo para enfoque, memoria, claridad mental y resiliencia neurológica.',beneficios:['Favorece concentración, memoria y claridad mental','Apoya procesos de plasticidad neuronal y función cognitiva','Enfocado en neuroprotección y rendimiento mental','Útil en protocolos de productividad, aprendizaje y desempeño cognitivo'],protocolo:'Soporte neurocognitivo dentro de una estrategia profesional. No se publican dosis, vía ni instrucciones de uso.',stack:'Selank, DSIP, SS-31 y protocolos de enfoque mental.'},
  cjc_ipamorelin:{mecanismo:'CJC-1295 + Ipamorelin se asocia con la estimulación pulsátil de GH mediante vías relacionadas con recuperación, reparación tisular y soporte anabólico supervisado. Su enfoque dentro de protocolos wellness está orientado a recuperación física, descanso reparador y composición corporal bajo evaluación profesional.',beneficios:['Apoya recuperación muscular, articular y tisular','Favorece descanso profundo y procesos de reparación nocturna','Asociado a soporte del eje GH/IGF-1 en protocolos supervisados','Útil en estrategias de composición corporal y recuperación física'],protocolo:'Soporte hormonal y de recuperación bajo criterio profesional. No se publican dosis, frecuencia, vía ni esquemas de uso.',stack:'SS-31, Epithalon, DSIP y protocolos de sueño/recuperación.'},
  epithalon_box:{mecanismo:'Epithalon PrimeHack se relaciona con procesos de homeostasis celular, regulación de ciclos biológicos y soporte funcional asociado a longevidad. Su enfoque premium está orientado a reparación biológica nocturna, equilibrio circadiano y mantenimiento celular dentro de protocolos supervisados.',beneficios:['Apoya procesos de longevidad celular y reparación biológica','Favorece regulación circadiana y descanso reparador','Relacionado con soporte telomérico y mantenimiento celular','Ideal para protocolos premium de bienestar, recuperación y envejecimiento saludable'],protocolo:'Orientado a protocolos de longevidad bajo criterio profesional. No se detallan dosis, frecuencia, vía ni instrucciones de uso.',stack:'DSIP, SS-31, Selank y estrategias de bienestar integral.'}
};

/* ====================  STATE  ==================== */
let cart = {}; // { id: qty }

/* ====================  HELPERS  ==================== */
const fmtCOP = n => '$' + n.toLocaleString('es-CO');
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const findP = id => PRODUCTS.find(p => p.id === id);

function buildWALink(text){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ====================  CATEGORY METADATA  ==================== */
const CAT_META = {
  metabolico: {
    label:'Pérdida de grasa / Metabólicos',
    sub:'GLP, lipolíticos, secretagogos GH y termogénicos',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s4 5 4 9a4 4 0 0 1-8 0c0-4 4-9 4-9z"/><path d="M12 11v0"/></svg>'
  },
  muscular: {
    label:'Desarrollo Muscular',
    sub:'IGF, secretagogos pulsátiles y señalizadores',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l4 0 0 4-4 0z"/><path d="M14 14l4 0 0 4-4 0z"/><path d="M10 10l4 4"/><path d="M2 18l4-4"/><path d="M18 6l4-4"/></svg>'
  },
  regen: {
    label:'Regeneración / Wellness',
    sub:'Cicatrización, articulaciones, piel y colágeno',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
  },
  longevidad: {
    label:'Longevidad / Anti-edad',
    sub:'NAD⁺, energía celular, mitocondrias y sirtuinas',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/></svg>'
  },
  neuro: {
    label:'Neuro-Cognitivo',
    sub:'Enfoque, memoria, calma mental y soporte nervioso',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>'
  },
  otros: {
    label:'Otros péptidos',
    sub:'Vitalidad, hormonal y estética',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 8.5 22 9.5 17 14.5 18.5 21.5 12 18 5.5 21.5 7 14.5 2 9.5 9 8.5 12 2"/></svg>'
  },
  agua: {
    label:'Agua bacteriostática',
    sub:'Diluyente estéril para reconstitución',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>'
  }
};

/* ====================  RENDER PRODUCTS  ==================== */
let _currentCat = null;
let _renderToken = 0;

function buildCard(p, idx){
  return `
    <article class="card" data-cat="${p.cat}" data-id="${p.id}" style="animation-delay:${idx*55}ms" onclick="handleCardClick(event,'${p.id}')">
      <span class="card-shine" aria-hidden="true"></span>
      ${p.tag ? `<span class="card-tag${p.destacado ? ' gold' : ''}">${p.tag}</span>` : ''}
      <div class="card-media">
        <img class="card-img" src="${p.img}" alt="${p.nombre} ${p.presentacion}" loading="lazy" decoding="async" fetchpriority="low" width="600" height="600">
      </div>
      <div class="card-body">
        <div>
          <div class="card-presentacion">${p.presentacion}</div>
          <h3 class="card-title">${p.nombre}</h3>
        </div>
        <p class="card-desc">${p.desc}</p>
        <div class="card-foot">
          <div>
            <small style="font-size:10px;color:var(--muted);letter-spacing:.15em;text-transform:uppercase">Desde</small>
            <div class="price">${fmtCOP(p.precio)}<small>COP</small></div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <button class="card-info-btn" onclick="event.stopPropagation();openDetail('${p.id}')" title="Ver más información" aria-label="Ver detalle del producto">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </button>
            <button class="add-btn" onclick="event.stopPropagation();addToCart('${p.id}', this)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Carrito
            </button>
            <a class="wa-mini" target="_blank" rel="noopener" onclick="event.stopPropagation()" href="${buildWALink('Hola, quiero más información sobre el producto: ' + p.nombre + ' ' + p.presentacion + ' (' + fmtCOP(p.precio) + ')')}" title="Consultar por WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function handleCardClick(e, id){
  if(e.target.closest('button, a')) return;
  openDetail(id);
}

/**
 * Discovery-based render. If filter is null/falsy, show the empty state.
 * Otherwise smoothly transition from current state to the new category.
 */
async function renderProducts(filter){
  const viewport = $('#catalogViewport');
  const section = $('#catalogo');
  const token = ++_renderToken;

  // 1. Fade out whatever is currently rendered
  const existingEmpty = viewport.querySelector('.catalog-empty');
  const existingHeader = viewport.querySelector('.cat-header');
  const existingGrid = viewport.querySelector('.products-grid');
  if(existingEmpty){ existingEmpty.classList.add('fade-out') }
  if(existingHeader){ existingHeader.classList.add('fade-out') }
  if(existingGrid){ existingGrid.classList.add('fade-out') }
  if(existingEmpty || existingHeader || existingGrid){
    await new Promise(r => setTimeout(r, 360));
  }
  if(token !== _renderToken) return;

  // 2. Update category theme + active state
  if(filter){
    section.dataset.cat = filter;
    _currentCat = filter;
  } else {
    delete section.dataset.cat;
    _currentCat = null;
  }
  $$('#filters .filter-btn').forEach(b => {
    const isActive = b.dataset.filter === filter;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-selected', isActive);
  });

  // 3. Empty state
  if(!filter){
    viewport.innerHTML = `
      <div class="catalog-empty" id="catalogEmpty">
        <div class="catalog-empty-orb"><span class="orb-aura" aria-hidden="true"><span class="orb-aura-pulse orb-aura-pulse-1"></span><span class="orb-aura-pulse orb-aura-pulse-2"></span><span class="orb-aura-glow"></span></span><span class="orb-sphere"><span class="orb-mist"></span><span class="orb-beam"></span><div class="orb-sword"><div class="orb-sword-flow"></div><svg viewBox="0 0 60 200" aria-hidden="true"><path d="M30 6 L36 100 L30 194 L24 100 Z" fill="rgba(168,85,247,.35)" stroke="rgba(236,228,255,.85)" stroke-width=".7"/><line x1="30" y1="14" x2="30" y2="186" stroke="rgba(255,255,255,.75)" stroke-width=".4"/><path d="M22 192 L38 192" stroke="rgba(196,165,255,.85)" stroke-width="1.4" stroke-linecap="round"/></svg></div><span class="orb-particles" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span></span></div>
        <h3>Descubre nuestro <span class="accent">catálogo completo</span></h3>
        <p>Más de 30 péptidos premium organizados por objetivo. Selecciona una categoría arriba para revelar los productos disponibles.</p>
        <div class="catalog-empty-hint">Toca una categoría</div>
      </div>
    `;
    return;
  }

  // 4. Render category header + grid with stagger
  // Orden: Combos primero → PrimeHack → FastMuscle
  const _catOrder = {Combo:0,'Caja Premium':1};
  const list = PRODUCTS.filter(p => p.cat === filter)
    .sort((a,b) => (_catOrder[a.tag]!==undefined?_catOrder[a.tag]:2) - (_catOrder[b.tag]!==undefined?_catOrder[b.tag]:2));
  const meta = CAT_META[filter] || { label:filter, sub:'', icon:'' };
  viewport.innerHTML = `
    <div class="cat-header">
      <div class="cat-header-info">
        <div class="cat-header-icon">${meta.icon}</div>
        <div class="cat-header-text">
          <h3>${meta.label}</h3>
          <p>${meta.sub}</p>
        </div>
      </div>
      <div class="cat-header-count">${list.length} producto${list.length===1?'':'s'}</div>
    </div>
    <div class="products-grid" id="productsGrid">
      ${list.map((p,i) => buildCard(p,i)).join('')}
    </div>
  `;
  initTilt();
}

function renderFeatured(){
  const grid = $('#featuredGrid');
  const FEAT_FIRST = ['retatrutide_box','ghkcu_box'];
  const allFeat = PRODUCTS.filter(p => p.destacado);
  const featured = [
    ...allFeat.filter(p => FEAT_FIRST.includes(p.id)).sort((a,b)=>FEAT_FIRST.indexOf(a.id)-FEAT_FIRST.indexOf(b.id)),
    ...allFeat.filter(p => !FEAT_FIRST.includes(p.id))
  ];
  const reta = PRODUCTS.find(p => p.id === 'retatrutide_box');
  const promoCard = reta ? `
    <article class="feat-card feat-promo reveal" style="cursor:pointer" onclick="document.getElementById('aliados').scrollIntoView({behavior:'smooth'})">
      <div class="feat-card-media">
        <img class="feat-card-img" src="${reta.img}" alt="Combo Retatrutide 10mg PrimeHack + Whey Gourmet Gratis" loading="lazy" decoding="async" width="600" height="600">
      </div>
      <div class="feat-card-body">
        <span class="feat-promo-badge">⚡ Combo exclusivo</span>
        <span class="feat-presentacion">Caja · 10 mg / vial · PrimeHack</span>
        <h3>Retatrutide <span style="color:var(--gold-1)">10mg</span></h3>
        <span class="feat-promo-free">🎁 + Whey Gourmet 2 lbs GRATIS</span>
        <p>Por tu compra de Retatrutide 10mg PrimeHack, recibe de regalo una Whey Gourmet Series 2 lbs — en alianza con Pronusa Suplementos.</p>
        <div class="price" style="font-size:22px;margin-top:4px">$750.000 <small>COP</small></div>
        <div class="feat-card-actions">
          <a class="add-btn" style="flex:1;justify-content:center;text-decoration:none;gap:7px" target="_blank" rel="noopener"
            onclick="event.stopPropagation()"
            href="${buildWALink('Hola, quiero el COMBO: Retatrutide 10mg PrimeHack ($750.000) + Whey Gourmet Series 2 lbs GRATIS (alianza Pronusa). ¿Cómo aplica la oferta?')}">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:15px;height:15px"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z"/></svg>
            Consultar combo
          </a>
        </div>
      </div>
    </article>
  ` : '';
  grid.innerHTML = promoCard + featured.map(p => `
    <article class="feat-card reveal" onclick="handleCardClick(event,'${p.id}')">
      <div class="feat-card-media">
        <img class="feat-card-img" src="${p.img}" alt="${p.nombre} ${p.presentacion}" loading="lazy" decoding="async" width="600" height="600">
      </div>
      <div class="feat-card-body">
        <span class="feat-presentacion">${p.presentacion}</span>
        <h3>${p.nombre}</h3>
        <p>${p.desc}</p>
        <div class="price">${fmtCOP(p.precio)} <small>COP</small></div>
        <div class="feat-card-actions">
          <button class="card-info-btn" onclick="event.stopPropagation();openDetail('${p.id}')" title="Ver más información" aria-label="Ver detalle del producto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </button>
          <button class="add-btn" onclick="event.stopPropagation();addToCart('${p.id}', this)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Añadir
          </button>
          <a class="wa-mini" target="_blank" rel="noopener" onclick="event.stopPropagation()" href="${buildWALink('Hola, quiero más información sobre el producto destacado: ' + p.nombre + ' ' + p.presentacion + ' (' + fmtCOP(p.precio) + ')')}">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');
  initRevealObserver();
}

/* ====================  PRODUCT DETAIL  ==================== */
function openDetail(id){
  const p = findP(id);
  if(!p) return;
  const det = PRODUCT_DETAIL[id] || {};
  const overlay = $('#detailOverlay');

  // Image
  const img = $('#detailImg');
  img.src = p.img;
  img.alt = p.nombre + ' ' + p.presentacion;

  // Badge
  const badge = $('#detailBadge');
  badge.textContent = p.tag || '';
  badge.className = 'detail-tag-badge' + (p.destacado ? ' gold' : '');
  badge.style.display = p.tag ? '' : 'none';

  // Header
  $('#detailPresent').textContent = p.presentacion;
  $('#detailName').textContent = p.nombre;
  $('#detailPrice').innerHTML = fmtCOP(p.precio);

  // Tabs content
  $('#tabDesc').textContent = p.desc || '';
  $('#tabMec').textContent = det.mecanismo || 'Información no disponible.';
  $('#tabProt').textContent = det.protocolo || 'Consultar asesoría personalizada.';

  // Activate first tab
  $$('#detailTabs .detail-tab').forEach(t => t.classList.remove('active'));
  $$('.detail-pane').forEach(p => p.classList.remove('active'));
  var _firstTab=$('#detailTabs .detail-tab:first-child'); if(_firstTab)_firstTab.classList.add('active');
  $('#tabDesc').classList.add('active');

  // Benefits
  const benList = $('#detailBenefits');
  if(det.beneficios && det.beneficios.length){
    benList.innerHTML = det.beneficios.map(b => `<li>${b}</li>`).join('');
    benList.style.display = '';
  } else {
    benList.style.display = 'none';
  }

  // Stack
  const stackRow = $('#detailStackRow');
  if(det.stack){
    $('#detailStackVal').textContent = det.stack;
    stackRow.style.display = '';
  } else {
    stackRow.style.display = 'none';
  }

  // Nota
  const notaEl = $('#detailNota');
  if(det.nota){
    $('#detailNotaVal').textContent = det.nota;
    notaEl.style.display = '';
  } else {
    notaEl.style.display = 'none';
  }

  // Actions
  $('#detailCartBtn').onclick = () => {
    addToCart(id, null);
    closeDetail();
  };
  $('#detailWaBtn').href = buildWALink(
    'Hola, quiero más información sobre: ' + p.nombre + ' ' + p.presentacion + ' (' + fmtCOP(p.precio) + ')'
  );

  // Tab switching
  $$('#detailTabs .detail-tab').forEach(tab => {
    tab.onclick = () => {
      $$('#detailTabs .detail-tab').forEach(t => t.classList.remove('active'));
      $$('.detail-pane').forEach(pn => pn.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.tab;
      const paneId = key === 'desc' ? 'tabDesc' : key === 'mec' ? 'tabMec' : 'tabProt';
      $('#' + paneId).classList.add('active');
    };
  });

  // Show
  document.body.style.overflow = 'hidden';
  overlay.classList.add('show');

  // Close on backdrop click
  overlay.onclick = (e) => { if(e.target === overlay) closeDetail(); };
}

function closeDetail(){
  $('#detailOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

// Close detail on Escape key
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    if($('#detailOverlay').classList.contains('show')) closeDetail();
  }
});

/* ====================  CART  ==================== */
function addToCart(id, btn){
  cart[id] = (cart[id] || 0) + 1;
  updateCartUI();
  showToast(`✓ ${findP(id).nombre} añadido al carrito`);
  if(btn){
    btn.classList.add('added');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Añadido`;
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Carrito`;
    }, 1400);
  }
}
function removeFromCart(id){
  delete cart[id];
  updateCartUI();
}
function changeQty(id, delta){
  cart[id] = Math.max(0, (cart[id] || 0) + delta);
  if(cart[id] === 0) delete cart[id];
  updateCartUI();
}

function updateCartUI(){
  const items = Object.entries(cart);
  const total = items.reduce((sum,[id,q]) => sum + ((findP(id)||{}).precio || 0) * q, 0);
  const totalItems = items.reduce((sum,[,q]) => sum + q, 0);
  const cc = $('#cartCount');
  cc.textContent = totalItems;
  cc.classList.toggle('show', totalItems > 0);
  $('#cartSubItems').textContent = totalItems + ' \u00edtem' + (totalItems !== 1 ? 's':'');
  $('#cartTotal').innerHTML = fmtCOP(total) + '<em>COP</em>';
  $('#checkoutBtn').disabled = totalItems === 0;
  const itemsEl = $('#cartItems');
  if(items.length === 0){
    itemsEl.innerHTML = `<div class="cart-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
      <div><strong style="color:var(--white);font-family:\'Cinzel\',serif">Tu carrito est\u00e1 vac\u00edo</strong><br>Agrega productos del cat\u00e1logo para comenzar.</div>
    </div>`;
  } else {
    itemsEl.innerHTML = items.map(([id,q]) => {
      const p = findP(id);
      const subt = p.precio * q;
      return `<div class="cart-item">
        <div class="cart-item-img"><img src="${p.img}" alt="" loading="lazy" decoding="async" width="80" height="80"></div>
        <div class="cart-item-info">
          <h4>${p.nombre}</h4>
          <div class="pr">${p.presentacion} \u00b7 ${fmtCOP(p.precio)}</div>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(\'${id}\',-1)">\u2212</button>
            <span class="qty-num">${q}</span>
            <button class="qty-btn" onclick="changeQty(\'${id}\',1)">+</button>
          </div>
        </div>
        <div class="cart-item-actions">
          <span class="total">${fmtCOP(subt)}</span>
          <button class="remove-btn" onclick="removeFromCart(\'${id}\')">Eliminar</button>
        </div>
      </div>`;
    }).join('');
  }
}

function toggleCart(){ $('#cartDrawer').classList.contains('open') ? closeCart() : openCart(); }
function openCart(){ $('#cartDrawer').classList.add('open'); $('#overlay').classList.add('show'); $('#cartDrawer').setAttribute('aria-hidden','false'); }
function closeCart(){ $('#cartDrawer').classList.remove('open'); $('#overlay').classList.remove('show'); $('#cartDrawer').setAttribute('aria-hidden','true'); }

/* ====================  CHECKOUT  ==================== */
function openCheckout(){
  if(Object.keys(cart).length === 0) return;
  closeCart();
  const items = Object.entries(cart);
  const total = items.reduce((sum,[id,q]) => sum + findP(id).precio * q, 0);
  const totalItems = items.reduce((sum,[,q]) => sum + q, 0);
  const sumEl = $('#modalSummary');
  sumEl.innerHTML = items.map(([id,q]) => {
    const p = findP(id);
    return `<div><span>${p.nombre} (${p.presentacion}) \u00d7 ${q}</span><span>${fmtCOP(p.precio*q)}</span></div>`;
  }).join('') + `<div><span>Total \u00b7 ${totalItems} \u00edtem(s)</span><strong>${fmtCOP(total)}</strong></div>`;
  $('#overlay').classList.add('show');
  $('#checkoutModal').classList.add('show');
}
function closeCheckout(){
  $('#checkoutModal').classList.remove('show');
  $('#overlay').classList.remove('show');
}

function enviarPedido(e){
  e.preventDefault();
  const nombre = $('#f_nombre').value.trim();
  const tel = $('#f_telefono').value.trim();
  const cedula = $('#f_cedula').value.trim();
  const ciudad = $('#f_ciudad').value.trim();
  const dpto = $('#f_departamento').value.trim();
  const dir = $('#f_direccion').value.trim();
  const notas = $('#f_notas').value.trim();
  const items = Object.entries(cart);
  const total = items.reduce((sum,[id,q]) => sum + findP(id).precio * q, 0);
  const totalItems = items.reduce((sum,[,q]) => sum + q, 0);
  let msg = `*Nuevo pedido \u2014 Aether Solutions*\n`;
  msg += `\n*\ud83d\udc64 Cliente:* ${nombre}`;
  msg += `\n*\ud83d\udcf1 Tel\u00e9fono:* ${tel}`;
  if(cedula) msg += `\n*\ud83e\udeaa C\u00e9dula:* ${cedula}`;
  msg += `\n\n*\ud83d\ude9a Env\u00edo*`;
  msg += `\n\u2022 Ciudad: ${ciudad}`;
  msg += `\n\u2022 Departamento: ${dpto}`;
  msg += `\n\u2022 Direcci\u00f3n: ${dir}`;
  if(notas) msg += `\n\u2022 Notas: ${notas}`;
  msg += `\n\n*\ud83d\uded2 Productos (${totalItems})*`;
  items.forEach(([id,q]) => {
    const p = findP(id);
    msg += `\n\u2022 ${p.nombre} (${p.presentacion}) \u00d7 ${q} = ${fmtCOP(p.precio*q)}`;
  });
  msg += `\n\n*\ud83d\udcb0 TOTAL: ${fmtCOP(total)} COP*`;
  msg += `\n\n_Enviado desde la tienda online de Aether Solutions._`;
  window.open(buildWALink(msg), '_blank');
  closeCheckout();
  showToast('\u2713 Pedido enviado a WhatsApp');
  setTimeout(() => {
    if(confirm('\u00bfVaciar el carrito ahora?')){
      cart = {};
      updateCartUI();
    }
  }, 1500);
}

/* ====================  TOAST  ==================== */
let toastTimer;
function showToast(msg){
  const t = $('#toast');
  $('#toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ====================  FILTERS (toggle behavior)  ==================== */
$$('#filters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    if(_currentCat === f){
      renderProducts(null);
    } else {
      renderProducts(f);
      setTimeout(() => {
        const target = $('#catalogViewport');
        if(target){
          const rect = target.getBoundingClientRect();
          if(rect.top < 80 || rect.top > window.innerHeight * .5){
            window.scrollTo({top: window.scrollY + rect.top - 100, behavior:'smooth'});
          }
        }
      }, 50);
    }
  });
});

/* ====================  SCROLL REVEAL  ==================== */
let revealObs;
function initRevealObserver(){
  if(!('IntersectionObserver' in window)) {
    $$('.reveal').forEach(el => el.classList.add('in'));
    return;
  }
  if(revealObs) revealObs.disconnect();
  revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        revealObs.unobserve(e.target);
      }
    });
  }, {threshold:.12, rootMargin:'0px 0px -50px 0px'});
  $$('.reveal').forEach(el => {
    if(!el.classList.contains('in')) revealObs.observe(el);
  });
}

/* ====================  3D TILT  ==================== */
function initTilt(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  if(reduceMotion || isCoarse) return;

  $$('.card').forEach(card => {
    let raf = 0;
    const onMove = e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;   // 0..1
      const py = (e.clientY - r.top) / r.height;   // 0..1
      const rx = (0.5 - py) * 10;  // tilt up/down (deg)
      const ry = (px - 0.5) * 12;  // tilt left/right (deg)
      if(raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.setProperty('--rx', rx.toFixed(2)+'deg');
        card.style.setProperty('--ry', ry.toFixed(2)+'deg');
        card.style.setProperty('--mx', (px*100).toFixed(1)+'%');
        card.style.setProperty('--my', (py*100).toFixed(1)+'%');
      });
    };
    card.addEventListener('mouseenter', () => card.classList.add('tilt-active'));
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', () => {
      card.classList.remove('tilt-active');
      card.style.removeProperty('--rx');
      card.style.removeProperty('--ry');
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
    });
  });
}

/* ====================  HERO SHOWCASE — AUTO ROTATOR  ==================== */
(function(){
  const stage = document.getElementById('showcaseStage');
  if(!stage) return;
  const slides = stage.querySelectorAll('.showcase-slide');
  const dots = stage.querySelectorAll('.showcase-dot');
  const nameEl = document.getElementById('showcaseName');
  const metaEl = document.getElementById('showcaseMeta');
  if(!slides.length || !nameEl || !metaEl) return;

  let i = 0;
  let timer = 0;
  let paused = false;
  const INTERVAL = 5200;

  function show(idx){
    i = ((idx % slides.length) + slides.length) % slides.length;
    slides.forEach((s,k) => s.classList.toggle('is-active', k === i));
    dots.forEach((d,k) => d.classList.toggle('is-active', k === i));
    const slide = slides[i];
    stage.dataset.theme = slide.dataset.theme || 'gold';
    nameEl.classList.add('is-changing');
    metaEl.classList.add('is-changing');
    setTimeout(() => {
      nameEl.textContent = slide.dataset.name || '';
      metaEl.innerHTML = slide.dataset.meta || '';
      nameEl.classList.remove('is-changing');
      metaEl.classList.remove('is-changing');
    }, 320);
  }
  function next(){ if(!paused) show(i+1); }
  function start(){ stop(); timer = setInterval(next, INTERVAL); }
  function stop(){ if(timer){ clearInterval(timer); timer = 0; } }

  dots.forEach((d, k) => d.addEventListener('click', () => { show(k); start(); }));
  stage.addEventListener('mouseenter', () => { paused = true; });
  stage.addEventListener('mouseleave', () => { paused = false; });

  // Pause when off-screen
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver(([e]) => { paused = !e.isIntersecting; }, {threshold:0.2});
    obs.observe(stage);
  }
  start();
})();

/* ====================  NAV SCROLL  ==================== */
window.addEventListener('scroll', () => {
  $('#nav').classList.toggle('scrolled', window.scrollY > 30);
});

/* ====================  WHATSAPP LINKS  ==================== */
['heroWA','ctaWA','footWA','fabWA'].forEach(id => {
  const el = document.getElementById(id);
  if(el) el.href = buildWALink(DEFAULT_MSG);
});

/* ====================  ESC TO CLOSE  ==================== */
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeCart(); closeCheckout(); }
});

/* ====================  CINEMATIC SCENE OBSERVER  ==================== */
(function(){
  if(!('IntersectionObserver' in window)) return;
  const sceneObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting && e.intersectionRatio > 0.15){
        e.target.classList.add('in-view');
      }
    });
  }, {threshold:[0, 0.15, 0.4], rootMargin:'-10% 0px -10% 0px'});
  document.querySelectorAll('section, header.hero').forEach(s => sceneObs.observe(s));

  let ticking = false;
  window.addEventListener('scroll', () => {
    if(!ticking){
      requestAnimationFrame(() => {
        const y = window.scrollY;
        document.documentElement.style.setProperty('--scroll-drift', `${-y * 0.05}px`);
        ticking = false;
      });
      ticking = true;
    }
  }, {passive:true});
})();

/* ====================  INIT  ==================== */
renderFeatured();
updateCartUI();
initRevealObserver();
// Note: no initial renderProducts() \u2014 catalog starts in discovery state
/* ====================  PRELOADER (auto-hide)  ==================== */
(function(){
  const pre = document.getElementById('preloader');
  function hidePre(){
    if(!pre) return;
    pre.style.transition = 'opacity 1s ease, visibility 1s';
    pre.style.opacity = '0';
    pre.style.visibility = 'hidden';
    document.body.classList.remove('loading');
    setTimeout(() => { if(pre.parentNode) pre.parentNode.removeChild(pre); }, 1100);
  }
  // Ocultar cuando el DOM esté listo — no esperar todas las imágenes
  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    setTimeout(hidePre, 900);
  } else {
    document.addEventListener('DOMContentLoaded', () => setTimeout(hidePre, 900));
    setTimeout(hidePre, 2500); // fallback máximo 2.5s
  }
})();

/* ====================  FEATURED CAROUSEL NAV (event delegation)  ==================== */
let _featAutoTimer = null;
let _featUserPause = false;
let _featBound = false;

function _featStep(){
  const grid = document.getElementById('featuredGrid');
  if(!grid) return 280;
  const first = grid.querySelector('.feat-card');
  if(!first) return Math.max(260, grid.clientWidth * 0.5);
  const styles = getComputedStyle(grid);
  const gap = parseFloat(styles.columnGap || styles.gap) || 18;
  return first.getBoundingClientRect().width + gap;
}

function _featGoto(dir){
  const grid = document.getElementById('featuredGrid');
  if(!grid) return;
  const step = _featStep();
  const max = grid.scrollWidth - grid.clientWidth;
  let target = grid.scrollLeft + (dir * step);
  if(dir > 0 && target > max - 4) target = 0;
  else if(dir < 0 && target < -4) target = max;
  grid.scrollTo({left: target, behavior: 'smooth'});
}

function _featPauseAuto(){
  clearInterval(_featAutoTimer);
  _featUserPause = true;
  clearTimeout(window._fcResume);
  window._fcResume = setTimeout(() => {
    _featUserPause = false;
    _featStartAuto();
  }, 9000);
}

function _featStartAuto(){
  clearInterval(_featAutoTimer);
  _featAutoTimer = setInterval(() => {
    if(_featUserPause) return;
    _featGoto(1);
  }, 4500);
}

// Single bind via event delegation on document — never gets removed by re-renders
function initFeaturedCarousel(){
  if(!_featBound){
    _featBound = true;
    document.addEventListener('click', function(e){
      const prev = e.target.closest('#featPrev');
      const next = e.target.closest('#featNext');
      if(prev){
        e.preventDefault(); e.stopPropagation();
        _featGoto(-1);
        _featPauseAuto();
      } else if(next){
        e.preventDefault(); e.stopPropagation();
        _featGoto(1);
        _featPauseAuto();
      }
    }, true); // capture phase to beat any other handler

    // Pause auto when user touches/scrolls/wheels grid
    document.addEventListener('touchstart', function(e){
      if(e.target.closest('#featuredGrid')) _featPauseAuto();
    }, {passive:true});
    document.addEventListener('wheel', function(e){
      if(e.target.closest('#featuredGrid')) _featPauseAuto();
    }, {passive:true});
  }

  const grid = document.getElementById('featuredGrid');
  if(!grid) return;

  // Smooth peek intro to hint swipeable
  setTimeout(() => {
    if(grid.scrollLeft === 0 && !_featUserPause){
      grid.scrollTo({left: 36, behavior:'smooth'});
      setTimeout(() => {
        if(!_featUserPause) grid.scrollTo({left: 0, behavior:'smooth'});
      }, 800);
    }
  }, 1600);

  // Start auto-advance
  setTimeout(_featStartAuto, 2800);
}
// Re-init after renderFeatured finishes
const _origRenderFeatured = renderFeatured;
renderFeatured = function(){
  _origRenderFeatured();
  setTimeout(initFeaturedCarousel, 120);
};

/* ====================  CINEMATIC SCENE OBSERVER  ==================== */
(function(){
  if(!('IntersectionObserver' in window)) return;
  const sceneObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting && e.intersectionRatio > 0.15){
        e.target.classList.add('in-view');
      }
    });
  }, {threshold:[0, 0.15, 0.4], rootMargin:'-10% 0px -10% 0px'});
  document.querySelectorAll('section, header.hero').forEach(s => sceneObs.observe(s));

  let ticking = false;
  window.addEventListener('scroll', () => {
    if(!ticking){
      requestAnimationFrame(() => {
        const y = window.scrollY;
        document.documentElement.style.setProperty('--scroll-drift', `${-y * 0.05}px`);
        ticking = false;
      });
      ticking = true;
    }
  }, {passive:true});
})();

/* ====================  INIT  ==================== */
renderFeatured();
updateCartUI();
initRevealObserver();
// Note: no initial renderProducts() \u2014 catalog starts in discovery state