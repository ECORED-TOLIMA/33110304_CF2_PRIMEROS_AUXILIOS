<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Valoración clínica
    p.mb-4(data-aos="fade-down") La valoración clínica es el proceso sistemático mediante el cual el primer respondiente identifica alteraciones que pueden comprometer la vida y establece prioridades de atención. Se fundamenta en la aplicación de un método estructurado que permite actuar con objetividad, reducir errores y orientar decisiones oportunas en situaciones de emergencia.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img01.png', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p(data-aos="fade-down") Este proceso no se limita a una revisión superficial, sino que implica analizar de manera ordenada las condiciones del paciente, reconocer signos de gravedad y determinar la necesidad de activar el Sistema de Emergencias Médicas. La valoración debe realizarse de forma secuencial, dinámica y continua, ya que el estado de la persona puede cambiar en cualquier momento.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") En primeros auxilios, la valoración clínica se organiza en etapas complementarias que incluyen la identificación inmediata de amenazas vitales, la exploración detallada posterior, la revisión física sistemática del cuerpo y la interpretación adecuada de los signos vitales según el grupo etario. La correcta aplicación de este procedimiento permite priorizar la atención, disminuir complicaciones y contribuir a una respuesta segura, técnica y responsable ante la emergencia.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Valoración primaria (ABCDE)
    p.mb-4(data-aos="fade-down") La valoración primaria tiene como propósito identificar y tratar de manera inmediata las alteraciones que comprometen la vida. Se fundamenta en el enfoque internacional ABCDE, recomendado en la atención prehospitalaria por la American Heart Association (2020), y debe aplicarse de forma ordenada, sin omitir ningún paso.
    .tarjeta.tarjeta--BG03.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row.py-5.px-4(titulo="a.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 A – Airway (Vía aérea).
            p.mb-0 Se verifica que la vía aérea esté permeable. Se comprueba si la persona habla o responde, se observan posibles cuerpos extraños visibles y se realiza apertura de la vía aérea mediante la maniobra frente-mentón o tracción mandibular si existe sospecha de trauma. En casos de posible lesión cervical, se mantiene control manual de la columna. Una vía aérea obstruida impide el paso de oxígeno y puede provocar paro respiratorio en pocos minutos.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img02.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="b.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 B – Breathing (Respiración).
            p.mb-0 Se evalúa si la persona respira adecuadamente, observando frecuencia, profundidad, simetría torácica y presencia de sonidos anormales. También se identifican signos de dificultad respiratoria. Si no hay respiración, se inicia el protocolo de reanimación; si existe dificultad, se mantiene la vía aérea permeable y se realiza monitoreo continuo.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img03.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="c.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 C – Circulation (Circulación).
            p.mb-0 Se valora el pulso, la coloración y temperatura de la piel, el llenado capilar y la presencia de hemorragias externas. Ante sangrado severo, se aplica presión directa inmediata, vendaje compresivo y elevación de la extremidad si es posible. La pérdida masiva de sangre puede conducir rápidamente a estado de <em>shock</em>.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img04.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="d.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 D – Disability (Estado neurológico).
            p.mb-0 Se evalúa el nivel de conciencia mediante la escala AVDI: Alerta, responde a la Voz, responde al Dolor o Inconsciente. También se observan pupilas y respuesta motora básica. Alteraciones en este componente pueden indicar compromiso neurológico, metabólico o circulatorio.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img05.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="e.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 E – Exposure (Exposición).
            p.mb-0 Consiste en revisar el cuerpo para identificar lesiones no evidentes inicialmente, exponiendo solo lo necesario, preservando la dignidad del paciente y previniendo la hipotermia.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img06.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Una vez controladas las amenazas vitales, se procede a la valoración secundaria.
    separador    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Valoración secundaria
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img07.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .tarjeta.tarjeta--C01.px-4.py-3.mb-2
          p.mb-0 La valoración secundaria se realiza una vez han sido identificadas y controladas las amenazas inmediatas para la vida durante la valoración primaria. Su propósito es identificar lesiones no evidentes, recopilar antecedentes relevantes y obtener una visión integral del estado del paciente.
        p.mb-0(data-aos="fade-down") Esta fase inicia con un interrogatorio estructurado, especialmente si el paciente se encuentra consciente y puede responder.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Esquema SAMPLE
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Letra
                th(data-aos="fade-down")(style= "width: 30%") Significado
                th(data-aos="fade-down")(style= "width: 50%") Orientación de la pregunta

            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") S
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Signos y síntomas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Qué siente, dónde le duele y desde cuándo presenta el síntoma?

              tr
                td(data-aos="fade-down") A
                td(data-aos="fade-down") Alergias.
                td(data-aos="fade-down") ¿Es alérgico a algún medicamento o sustancia?
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") M
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Medicamentos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Toma algún tratamiento actualmente?

              tr
                td(data-aos="fade-down") P
                td(data-aos="fade-down") Patologías previas.
                td(data-aos="fade-down") ¿Tiene enfermedades diagnosticadas?
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") L
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Última ingesta.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Cuándo comió o bebió por última vez?

              tr
                td(data-aos="fade-down") E
                td(data-aos="fade-down") Evento desencadenante.
                td(data-aos="fade-down") ¿Qué ocurrió exactamente?
    p(data-aos="fade-down") El interrogatorio estructurado mediante el esquema SAMPLE permite anticipar posibles complicaciones y orientar la toma de decisiones iniciales. No obstante, esta información debe complementarse con la observación directa y la exploración física básica, siempre que las condiciones del paciente lo permitan.
    p.mb-4(data-aos="fade-down") En este sentido, el primer respondiente debe:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img08.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Identificar dolor localizado mediante preguntas específicas o respuesta al movimiento.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img09.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Observar inflamaciones, deformidades o cambios visibles en la anatomía.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Detectar sangrados no evidentes o signos de hemorragia interna.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Valorar movilidad y sensibilidad en las extremidades, comparando ambos lados del cuerpo.
    p.mb-4(data-aos="fade-down") La vigilancia continua durante la valoración secundaria es fundamental para identificar cambios clínicos que puedan indicar deterioro del estado general del paciente. La condición de una persona lesionada puede modificarse en minutos, por lo que la reevaluación constante permite intervenir de manera oportuna y prevenir complicaciones.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Una vez recopilada la información del interrogatorio estructurado y realizada la observación inicial, se procede a efectuar una revisión física sistemática y ordenada del cuerpo, conocida como examen céfalo–caudal, el cual se desarrolla en el siguiente apartado.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/tema3/img12.svg', alt='Imagen decorativa')
    separador    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Examen físico céfalo-caudal
    p.mb-4(data-aos="fade-down") El examen físico céfalo–caudal es una exploración sistemática, ordenada y comparativa del cuerpo que se realiza desde la cabeza hasta las extremidades inferiores. Su finalidad es identificar lesiones traumáticas, alteraciones clínicas o signos de deterioro que no hayan sido detectados durante la valoración primaria.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Este procedimiento se ejecuta únicamente cuando la persona se encuentra relativamente estable y no existen amenazas inmediatas para la vida. Debe realizarse con respeto, cuidado y preservando en todo momento la dignidad, la privacidad y el confort térmico del paciente. La revisión se desarrolla siguiendo el orden anatómico, permitiendo una exploración metódica y evitando omisiones.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Cabeza y rostro")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Heridas, hematomas o deformidades.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Sangrado por nariz u oídos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Estado y reacción pupilar.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Alteraciones en la simetría facial.
          .row(numero="2" titulo="Cuello")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Dolor a la palpación.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Deformidades visibles.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Desviación traqueal.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Sensibilidad alterada.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Presencia de enfisema subcutáneo.
          .row(numero="3" titulo="Tórax")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Simetría en la expansión respiratoria.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Dolor localizado.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Deformidades visibles.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Dificultad respiratoria asociada.
          .row(numero="4" titulo="Abdomen")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Distensión o rigidez.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Dolor a la palpación.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Presencia de hematomas o heridas.
          .row(numero="5" titulo="Pelvis")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Dolor o inestabilidad.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Dificultad para movilizar extremidades inferiores.
          .row(numero="6" titulo="Extremidades superiores e inferiores")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Deformidades o angulaciones anormales.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Crepitación ósea.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Movilidad limitada o dolor al movimiento.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Alteraciones en sensibilidad, coloración o pulso distal.
      .col-lg-6.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img13.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") La exploración debe realizarse de manera comparativa entre ambos lados del cuerpo, ya que la asimetría puede indicar lesión estructural o compromiso vascular.
    .row.justify-content-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img14.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2.mb-3
        .cajon.cajon.C01.px-4.py-3.mb-2
          p.mb-0 Durante el examen físico, el primer respondiente debe prestar especial atención a signos de alarma como sangrado activo difícil de controlar, deformidades evidentes en extremidades o columna, dolor intenso progresivo, alteración del estado neurológico o asimetría respiratoria. La identificación temprana de estos hallazgos exige vigilancia continua y posible priorización en la atención.
      .col.col-lg-10.col-12.order-lg-3.order-3
        .cajon.cajon.C05.px-4.py-3
          p.mb-0 El examen céfalo–caudal complementa la valoración primaria y secundaria, fortalece la toma de decisiones y contribuye a una atención más segura antes del traslado o activación del Sistema de Emergencias Médicas. 
    p.mb-0(data-aos="fade-down") Posteriormente, el control de signos vitales permitirá objetivar el estado fisiológico y monitorear la evolución del paciente.
    separador    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Signos vitales por grupos etarios
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img15.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los signos vitales constituyen indicadores objetivos del funcionamiento de los sistemas cardiovascular, respiratorio y neurológico. Su medición sistemática permite identificar alteraciones tempranas, detectar deterioro clínico y evaluar la respuesta a las intervenciones realizadas durante la atención inicial. Además, proporcionan información precisa para la entrega del paciente al personal de salud.
    p.mb-4(data-aos="fade-down") En primeros auxilios, los signos vitales prioritarios incluyen la frecuencia cardíaca, el pulso, la frecuencia respiratoria y la valoración básica del estado neurológico. Su interpretación debe realizarse considerando que los valores normales varían según la edad, el estado fisiológico y las condiciones individuales.
    .row.align-items-center.mb-4(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 a) Frecuencia cardíaca y pulso
    p.mb-4(data-aos="fade-down") La frecuencia cardíaca corresponde al número de latidos del corazón por minuto, mientras que el pulso es la onda de presión generada por la contracción cardíaca y perceptible en arterias periféricas. Durante su evaluación se debe valorar:
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Número de pulsaciones por minuto.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img17.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Intensidad (fuerte, débil o filiforme).
      .col.col-lg-3.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img18.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Ritmo (regular o irregular).
      .col.col-lg-3.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Simetría bilateral.
    p.mb-4(data-aos="fade-down") Un pulso rápido y débil puede indicar estado de <em>shock</em> o compromiso circulatorio. La ausencia de pulso en una persona inconsciente constituye una emergencia que exige iniciar reanimación cardiopulmonar según los lineamientos vigentes de la American Heart Association (2020).
    .row.align-items-center.mb-4(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 b) Frecuencia respiratoria
    p.mb-4(data-aos="fade-down") Corresponde al número de respiraciones por minuto y debe evaluarse de forma discreta para evitar que la persona modifique voluntariamente su patrón ventilatorio. La valoración debe incluir no solo la frecuencia, sino el análisis integral del patrón respiratorio.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Patrón respiratorio
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down") Frecuencia
                th(data-aos="fade-down") Profundidad
                th(data-aos="fade-down") Ritmo
                th(data-aos="fade-down") Simetría
                th(data-aos="fade-down") Esfuerzo respiratorio
                th(data-aos="fade-down") Ruidos respiratorios
            tbody
              tr
                td(data-aos="fade-down") Número de respiraciones por minuto, identificando taquipnea o bradipnea.
                td(data-aos="fade-down") Superficial, normal o profunda.
                td(data-aos="fade-down") Regular o irregular.
                td(data-aos="fade-down") Expansión torácica bilateral uniforme o asimétrica.
                td(data-aos="fade-down") Uso de músculos accesorios, tiraje intercostal, retracciones o aleteo nasal.
                td(data-aos="fade-down") Presencia de sibilancias, estridor o ronquidos.
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12
        .cajon.cajon.C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Una respiración muy rápida, muy lenta, irregular o superficial puede indicar alteración en la oxigenación o compromiso sistémico, lo que exige vigilancia continua y eventual activación del sistema de emergencias.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/tema3/img20.svg', alt='Imagen decorativa')
    .row.align-items-center.mb-4(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c) Estado neurológico y reflejo pupilar
    p.mb-4(data-aos="fade-down") La valoración neurológica básica complementa la medición de los signos vitales. Además de la escala AVDI, se recomienda revisar:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img21.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Tamaño pupilar.
          .col-xl.col-lg-6.tarjeta.tarjeta--C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img22.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Simetría entre ambas pupilas.
          .col-xl.col-lg-6.tarjeta.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img23.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Reacción a la luz
    p.mb-4(data-aos="fade-down") Pupilas desiguales, muy dilatadas, muy contraídas o sin reacción luminosa pueden indicar compromiso neurológico y requieren atención prioritaria.
    .row.align-items-center.mb-4(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 d) Valores orientativos por grupos etarios
    p.mb-4(data-aos="fade-down") Los valores normales de los signos vitales varían según la edad y constituyen un referente fundamental para interpretar adecuadamente el estado clínico de la persona atendida. Conocer estos rangos permite identificar desviaciones que pueden indicar compromiso fisiológico, deterioro temprano o necesidad de activación del sistema de emergencias. A continuación, se presentan valores orientativos que sirven como guía para la valoración inicial:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Esquema SAMPLE
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Grupo etario
                th(data-aos="fade-down")(style= "width: 40%") Frecuencia cardíaca (lat/min)
                th(data-aos="fade-down")(style= "width: 40%") Frecuencia respiratoria (resp/min)
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Lactantes
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 100-160
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30-60
              tr
                td(data-aos="fade-down") Niños
                td(data-aos="fade-down") 80-130
                td(data-aos="fade-down") 20-30
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Adultos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 60-100
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 12-20
              tr
                td(data-aos="fade-down") Adulto mayor
                td(data-aos="fade-down") 60-100*
                td(data-aos="fade-down") 12-20
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12
        .cajon.cajon.C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") *En el adulto mayor los valores pueden variar según condición clínica, uso de medicamentos y nivel de actividad física.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/tema3/img24.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La valoración objetiva mediante signos vitales sustenta la intervención con datos clínicos medibles, fortalece la toma de decisiones y permite monitorear la evolución del paciente hasta su transferencia. Estos parámetros constituyen la base para la aplicación del Soporte Vital Básico en situaciones de paro cardiorrespiratorio u obstrucción de la vía aérea.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
