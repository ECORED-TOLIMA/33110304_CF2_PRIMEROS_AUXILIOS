<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Atención de traumatismos físicos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema5/img01.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Los traumatismos físicos corresponden a lesiones ocasionadas por la acción de fuerzas externas que pueden afectar tejidos blandos, huesos, articulaciones, vasos sanguíneos e incluso órganos internos. Estas lesiones pueden originarse por caídas, golpes, accidentes de tránsito, heridas cortopunzantes, quemaduras u otros eventos súbitos.
        p.mb-0(data-aos="fade-down") Su gravedad varía desde lesiones leves hasta situaciones que comprometen la vida, especialmente cuando existe hemorragia abundante, compromiso respiratorio, alteración del estado neurológico o sospecha de lesión en columna vertebral. Por esta razón, la atención debe realizarse de manera organizada, priorizando siempre las condiciones que representen mayor riesgo.
    p.mb-0(data-aos="fade-down") En el contexto de los primeros auxilios, la intervención frente a un traumatismo tiene como propósito:
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-3.px-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema5/img02.png", alt="Imagen decorativa")
            .col-lg-8.p-5
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-4")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img03.svg", alt="Imagen decorativa").img100.m-auto
                  p Controlar hemorragias y prevenir el estado de <em>shock</em>.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img04.svg", alt="Imagen decorativa").img100.m-auto
                  p Disminuir el dolor y limitar el daño tisular.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img05.svg", alt="Imagen decorativa").img100.m-auto
                  p Proteger estructuras lesionadas.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img06.svg", alt="Imagen decorativa").img100.m-auto
                  p Prevenir infecciones y complicaciones secundarias.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img07.svg", alt="Imagen decorativa").img100.m-auto
                  p Mantener la estabilidad del paciente hasta su traslado seguro.
    p.mb-0(data-aos="fade-down") La actuación del primer respondiente debe basarse en la valoración clínica previa, el aseguramiento del escenario y la aplicación de medidas de bioseguridad. La atención adecuada y oportuna puede reducir significativamente las secuelas y mejorar el pronóstico del paciente.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Heridas y hemorragias
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img08.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Las #[b heridas] corresponden a la pérdida de continuidad de la piel o de las mucosas como consecuencia de un agente externo. Generalmente se acompañan de dolor, sangrado y riesgo de contaminación. Su gravedad depende de la profundidad, extensión, mecanismo de lesión y estructuras comprometidas.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12.mb-4
        .tarjeta.tarjeta--C03.px-4.py-3
          p.mb-0 El manejo oportuno en primeros auxilios busca controlar el sangrado, prevenir la infección y evitar complicaciones posteriores.
      p.mb-4.text-center(data-aos="fade-down") De acuerdo con el mecanismo que las produce, pueden clasificarse en:
      .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--BG04.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/tema5/img09.svg' alt='AvatarTop')
            h4.text-center Cortantes
            p Ocasionadas por objetos afilados; presentan bordes regulares y sangrado variable.
          .tarjeta.tarjeta--BG04.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/tema5/img10.svg' alt='AvatarTop')
            h4.text-center Punzantes
            p Producidas por objetos puntiagudos que penetran profundamente; pueden generar daño interno no visible.
          .tarjeta.tarjeta--BG04.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/tema5/img11.svg' alt='AvatarTop')
            h4.text-center Laceraciones
            p Heridas irregulares causadas por desgarro de los tejidos.
          .tarjeta.tarjeta--BG04.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/tema5/img12.svg' alt='AvatarTop')
            h4.text-center Abrasiones
            p Lesiones superficiales por fricción, comúnmente conocidas como raspaduras.
          .tarjeta.tarjeta--BG04.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/tema5/img13.svg' alt='AvatarTop')
            h4.text-center Avulsiones
            p Desprendimiento parcial o total de tejido.
      .col.col-lg-10.col-12.mb-0
        .tarjeta.tarjeta--C03.px-4.py-3.mb-2
          p.mb-0 Algunas heridas pueden parecer leves externamente, pero comprometer estructuras profundas; por ello, la valoración debe ser cuidadosa.
    p.mb-0(data-aos="fade-down") La atención debe realizarse aplicando medidas de bioseguridad para proteger tanto al paciente como al primer respondiente.
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-3.px-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema5/img14.png", alt="Imagen decorativa")
            .col-lg-8.p-5
              p.text-center(data-aos="fade-down") Secuencia básica de actuación:
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img15.svg", alt="Imagen decorativa").img100.m-auto
                  p Utilizar elementos de protección personal (guantes, si están disponibles).
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img16.svg", alt="Imagen decorativa").img100.m-auto
                  p Controlar el sangrado mediante presión directa firme y sostenida.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img17.svg", alt="Imagen decorativa").img100.m-auto
                  p Si la herida es superficial, limpiar suavemente el área alrededor con agua limpia.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img18.svg", alt="Imagen decorativa").img100.m-auto
                  p Cubrir con apósito estéril o material limpio.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img19.svg", alt="Imagen decorativa").img100.m-auto
                  p Evitar la aplicación de sustancias no indicadas como café, polvos, cremas o remedios caseros.
    p.mb-4(data-aos="fade-down") Si existe un objeto incrustado, no debe retirarse, ya que puede estar actuando como mecanismo de contención del sangrado. En este caso, se debe estabilizar el objeto con apósitos alrededor y esperar atención especializada.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") La #[b hemorragia] es la salida de sangre secundaria a la ruptura de un vaso sanguíneo. Su control constituye una prioridad en primeros auxilios, debido a que la pérdida significativa de sangre puede conducir rápidamente a <em>shock</em> hipovolémico.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/tema5/img20.svg', alt='Imagen decorativa')
    p.mb-4.text-center(data-aos="fade-down") Tipos de hemorragia según el vaso afectado:
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img21.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Capilar
            h5.t2.mb-2 Capilar
            p.mb-0 Sangrado superficial, de menor intensidad y generalmente difuso.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img22.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Venosa
            h5.t2.mb-2 Venosa
            p.mb-0 Flujo continuo, de color rojo oscuro.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img23.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Arterial
            h5.t2.mb-2 Arterial
            p.mb-0 Sangre rojo brillante, que puede salir en forma pulsátil o a chorros.
    .row.justify-content-center
      .col.col-lg-10.col-12
        .cajon.cajon.C01.p-3
          p.text-center.mb-0(data-aos="fade-down") La hemorragia arterial suele ser la más grave y requiere intervención inmediata.
    .row.BG01.justify-content-center.align-items-center.p-5.mb-0
      .col.col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-lg-4.mb-4
        figure
          img(src='@/assets/curso/tema5/img24.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2.mb-lg-4
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") Las medidas iniciales de control de la hemorragia incluyen:
              ul.lista-ul--color(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Aplicar presión directa continua con apósito limpio o estéril.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Mantener la presión sin interrumpirla para verificar constantemente.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Colocar vendaje compresivo si es necesario para sostener la presión.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Elevar la extremidad afectada si no existe sospecha de fractura.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") El uso de torniquete está indicado únicamente en casos de hemorragia masiva que no responde a la presión directa y debe aplicarse por personal entrenado.
    .row.justify-content-center.align-items-stretch.mb-0.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C04.p-4.h-100.w-100
          .row.justify-content-center
            p.mb-2 #[b Signos de alarma]: la pérdida importante de sangre puede generar <em>shock</em> hipovolémico. El primer respondiente debe vigilar la aparición de:
            .col.col-lg-8.col-12.mb-2
              .tarjeta.tarjeta--blanca.px-4.py-3
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Palidez.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Sudoración fría.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Pulso rápido y débil.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Mareo o alteración del estado de conciencia.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Respiración acelerada.
            p.mb-0 La identificación temprana de estos signos exige activación inmediata del sistema de emergencias y vigilancia continua hasta el traslado.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema5/img25.jpg', alt='Imagen decorativa')
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Quemaduras
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema5/img26.png', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") Las quemaduras son lesiones que afectan la piel y, en algunos casos, los tejidos más profundos del cuerpo. Se producen por la acción de agentes térmicos (fuego, líquidos calientes y vapor), químicos (ácidos o álcalis), eléctricos o por radiación. Su gravedad depende de tres factores fundamentales: profundidad, extensión y localización.
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") En primeros auxilios, la atención inicial tiene como propósito detener el proceso de lesión, aliviar el dolor, prevenir infección y evitar complicaciones, manteniendo la estabilidad del paciente hasta su traslado.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Clasificación de las quemaduras
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Tipo de quemadura
                th(data-aos="fade-down")(style= "width: 25%") Características clínicas
                th(data-aos="fade-down")(style= "width: 25%") Sensibilidad
                th(data-aos="fade-down")(style= "width: 25%") Ejemplo frecuente
            tbody
              tr
                td(style="background-color: #F6F6F6")
                  .d-flex.align-items-center.gap-3
                    span Superficial.
                    img(src='@/assets/curso/tema5/img27.svg', style="width:65px")
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Enrojecimiento, piel seca y sin ampollas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Dolor intenso.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Exposición solar.
              tr
                td(data-aos="fade-down") 
                  .d-flex.align-items-center.gap-3
                    span Parcial.
                    img(src='@/assets/curso/tema5/img28.svg', style="width:65px")                  
                td(data-aos="fade-down") Ampollas y piel húmeda o brillante.
                td(data-aos="fade-down") Dolor intenso.
                td(data-aos="fade-down") Líquidos calientes.
              tr
                td(style="background-color: #F6F6F6")
                  .d-flex.align-items-center.gap-3
                    span Profunda.
                    img(src='@/assets/curso/tema5/img29.svg', style="width:65px")                
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Piel blanquecina, carbonizada o endurecida.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Puede haber poco dolor.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Fuego directo o electricidad.
    p(data-aos="fade-down") La identificación de la profundidad orienta la conducta inicial y la necesidad de traslado urgente.
    p.mb-4(data-aos="fade-down") En el manejo inicial de una quemadura en primeros auxilios, el primer respondiente debe actuar con rapidez y seguridad, aplicando medidas orientadas a limitar el daño y prevenir complicaciones.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema5/img30.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Se debe
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Retirar o aislar la fuente de calor o el agente causante.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Enfriar la zona con agua limpia a temperatura ambiente durante 10 a 20 minutos.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Retirar anillos, relojes o prendas ajustadas antes de que aparezca inflamación.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Cubrir con un apósito limpio, seco y no adherente.
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema5/img31.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") No se debe
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Aplicar hielo directamente sobre la lesión.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Reventar ampollas.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Aplicar cremas, aceites, pasta dental o remedios caseros.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Retirar ropa adherida a la piel.
    p.mb-4(data-aos="fade-down") Es importante tener presente algunas consideraciones específicas según el #[b agente causal], ya que cada tipo de quemadura implica riesgos particulares y requiere medidas diferenciadas en la atención inicial.
    .cajon.cajon.C02.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    p.mb-0(data-aos="fade-down") Además de las medidas iniciales, es fundamental identificar oportunamente los signos que indican mayor gravedad. Existen situaciones en las que la quemadura puede comprometer la vida o generar secuelas permanentes, por lo que se requiere activar de inmediato el sistema de emergencias y gestionar traslado urgente cuando la lesión:
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-3.px-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema5/img35.png", alt="Imagen decorativa")
            .col-lg-8.p-5
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-4")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img36.svg", alt="Imagen decorativa").img100.m-auto
                  p Es extensa y compromete una superficie corporal amplia.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img37.svg", alt="Imagen decorativa").img100.m-auto
                  p Es profunda o presenta áreas blanquecinas, carbonizadas o insensibles.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img38.svg", alt="Imagen decorativa").img100.m-auto
                  p Compromete cara, cuello, manos, pies, genitales o grandes articulaciones.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img39.svg", alt="Imagen decorativa").img100.m-auto
                  p Se acompaña de dificultad respiratoria o signos de inhalación de humo.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img40.svg", alt="Imagen decorativa").img100.m-auto
                  p Es de origen eléctrico o químico.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img41.svg", alt="Imagen decorativa").img100.m-auto
                  p Se presenta en niños pequeños, adultos mayores o personas con enfermedades crónicas.
    p.mb-0(data-aos="fade-down") La atención adecuada y oportuna de las quemaduras reduce el riesgo de infección, <em>shock</em> y secuelas permanentes. La valoración continua del estado general del paciente es fundamental hasta su entrega al personal de salud.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Lesiones osteomusculares
    .row.justify-content-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img42.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-1 Las lesiones osteomusculares afectan huesos, articulaciones, músculos, ligamentos y tendones. Son frecuentes en caídas, accidentes de tránsito, actividades deportivas y eventos laborales. Una manipulación inadecuada puede agravar el daño inicial y comprometer estructuras vasculares o nerviosas, por lo que requieren una actuación cuidadosa.
    p.mb-4.text-center(data-aos="fade-down") Entre las lesiones más comunes se encuentran:
    .row.justify-content-center.mb-0
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img43.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Esguince
            h5.t2.mb-2 Esguince
            p.mb-0 Lesión de los ligamentos producida por estiramiento excesivo o desgarro.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img44.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Luxación
            h5.t2.mb-2 Luxación
            p.mb-0 Desplazamiento de los huesos que conforman una articulación, perdiendo su posición normal.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img45.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Fractura
            h5.t2.mb-2 Fractura
            p.mb-0 Ruptura parcial o total de un hueso, que puede ser cerrada (sin herida externa) o abierta (con exposición ósea).
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-3.px-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema5/img46.png", alt="Imagen decorativa")
            .col-lg-8.p-5
              p.mt-4.text-lg-start.text-center.p-4(data-aos="fade-down") Los signos y síntomas pueden variar según la gravedad, pero generalmente incluyen:
              SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img47.svg", alt="Imagen decorativa").img100.m-auto
                  p Dolor localizado que aumenta con el movimiento.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img48.svg", alt="Imagen decorativa").img100.m-auto
                  p Inflamación y aumento de volumen.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img49.svg", alt="Imagen decorativa").img100.m-auto
                  p Deformidad visible o posición anormal de la extremidad.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img50.svg", alt="Imagen decorativa").img100.m-auto
                  p Incapacidad o limitación para mover la zona afectada.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img51.svg", alt="Imagen decorativa").img100.m-auto
                  p Crepitación (sensación o sonido de roce óseo).
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img52.svg", alt="Imagen decorativa").img100.m-auto
                  p Alteración de la sensibilidad (hormigueo o adormecimiento).
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img53.svg", alt="Imagen decorativa").img100.m-auto
                  p Disminución o ausencia del pulso distal en casos graves.
    .row.BG01.justify-content-center.align-items-center.p-5.mb-0
      .col.col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-lg-4.mb-4
        figure
          img(src='@/assets/curso/tema5/img54.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2.mb-lg-4
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") En el manejo inicial en primeros auxilios, el primer respondiente debe actuar bajo el principio de no agravar la lesión. Para ello:
              ul.lista-ul--color(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Inmovilizar la zona afectada en la posición encontrada.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Evitar intentar alinear fracturas o recolocar luxaciones.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Aplicar frío local de forma indirecta durante periodos cortos para disminuir inflamación y dolor.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Elevar la extremidad, si no existe sospecha de fractura grave o lesión de columna.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Vigilar pulso distal, coloración y sensibilidad antes y después de inmovilizar.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") En caso de fractura abierta, se debe cubrir la herida con apósito estéril sin ejercer presión directa sobre el hueso expuesto y activar el sistema de emergencias.
    p.mb-0(data-aos="fade-down") La inmovilización adecuada reduce el riesgo de lesiones adicionales en vasos sanguíneos, nervios y tejidos blandos, disminuye el dolor y facilita un traslado seguro. La vigilancia continua del estado circulatorio y neurológico es fundamental hasta la entrega del paciente al personal de salud.
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Amputación traumática
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema5/img55.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") La amputación traumática consiste en la separación total o parcial de una extremidad o segmento corporal como consecuencia de mecanismos de alta energía, tales como cortes profundos, aplastamientos, accidentes industriales, agrícolas o de tránsito. Se trata de una emergencia médica grave que exige actuación inmediata, organizada y técnicamente adecuada.
        .row.align-items-center.mb-2
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema5/img56.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            .cajon.cajon.C01.px-4.py-3
              p.mb-0(data-aos="fade-down") La prioridad inicial es controlar la hemorragia, ya que la pérdida masiva de sangre puede comprometer la vida en pocos minutos. De manera simultánea, se debe activar el sistema de emergencias y preparar el traslado urgente.
        p.mb-0(data-aos="fade-down") El manejo en primeros auxilios comprende dos componentes fundamentales: la atención del muñón y la preservación del segmento amputado.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Manejo en amputación traumática
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Manejo del muñón
                th(data-aos="fade-down")(style= "width: 60%") Preservación del segmento amputado
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Aplicar presión directa con apósito estéril o material limpio para controlar el sangrado.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Envolver el segmento amputado en gasa estéril ligeramente humedecida con solución salina o agua limpia.
              tr
                td(data-aos="fade-down") Elevar la extremidad, si no existe contraindicación.
                td(data-aos="fade-down") Colocar la parte envuelta dentro de una bolsa plástica limpia y cerrarla adecuadamente.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Colocar vendaje compresivo si el sangrado persiste.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Introducir la bolsa en otra bolsa o recipiente con hielo.
              tr
                td(data-aos="fade-down") Utilizar torniquete únicamente en caso de hemorragia masiva no controlable con presión directa y si se cuenta con entrenamiento.
                td(data-aos="fade-down") Evitar el contacto directo del tejido con hielo o agua. No sumergir directamente en líquidos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Vigilar signos de <em>shock</em>: palidez, sudoración fría, pulso débil, alteración del estado de conciencia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identificar la bolsa con datos del paciente y hora del evento si es posible.
    .row.justify-content-center.mb-0
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema5/img57.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Es fundamental recordar que la parte amputada no debe lavarse de manera agresiva, ni frotarse, ni exponerse directamente al hielo, ya que esto puede deteriorar el tejido y disminuir la posibilidad de reimplante quirúrgico.
        p(data-aos="fade-down") Durante todo el proceso, el paciente debe mantenerse en reposo, abrigado y bajo vigilancia constante de signos vitales, ya que existe alto riesgo de <em>shock</em> hipovolémico.
        p.mb-0(data-aos="fade-down") Una actuación rápida, organizada y técnicamente adecuada mejora significativamente el pronóstico, reduce complicaciones y aumenta la probabilidad de éxito en un eventual reimplante quirúrgico.
    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Inmovilización y vendaje
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img58.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La inmovilización es una técnica destinada a limitar el movimiento de una zona lesionada con el fin de prevenir complicaciones adicionales, disminuir el dolor y proteger estructuras internas como vasos sanguíneos, nervios y tejidos blandos. Su aplicación correcta es fundamental en el manejo de fracturas, luxaciones, esguinces y otras lesiones osteomusculares.
    p.mb-0(data-aos="fade-down") Una manipulación inadecuada puede agravar el daño inicial, provocar desplazamientos óseos o generar compromiso vascular y neurológico. Por ello, el primer respondiente debe actuar con cuidado, evitando movimientos innecesarios.
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-3.px-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema5/img59.png", alt="Imagen decorativa")
            .col-lg-8.p-5
              p.text-center(data-aos="fade-down") Para realizar una inmovilización segura se deben tener en cuenta los siguientes aspectos:
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img60.svg", alt="Imagen decorativa").img100.m-auto
                  p Mantener la extremidad en la posición en que fue encontrada, sin intentar alinear fracturas evidentes.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img61.svg", alt="Imagen decorativa").img100.m-auto
                  p Evitar movimientos bruscos o manipulaciones repetidas.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img62.svg", alt="Imagen decorativa").img100.m-auto
                  p Inmovilizar siempre la articulación superior e inferior al sitio de la lesión.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img63.svg", alt="Imagen decorativa").img100.m-auto
                  p Colocar férulas rígidas o improvisadas (tablas, cartón grueso o revistas enrolladas) cuando sea necesario.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img64.svg", alt="Imagen decorativa").img100.m-auto
                  p Verificar pulso, sensibilidad y movilidad distal antes y después del procedimiento.
    .row.justify-content-center.mb-0
      .col.col-lg-1.col-8.order-lg-1.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img65.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") El #[b vendaje] tiene como función principal estabilizar la férula o el elemento de soporte y mantener la zona lesionada en reposo.
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-3.px-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema5/img66.png", alt="Imagen decorativa")
            .col-lg-8.p-5
              p.text-center(data-aos="fade-down") Para su correcta aplicación se recomienda:
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-4")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img67.svg", alt="Imagen decorativa").img100.m-auto
                  p Colocarlo de manera firme, pero sin ejercer presión excesiva.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img68.svg", alt="Imagen decorativa").img100.m-auto
                  p Iniciarlo desde la zona distal hacia la proximal, asegurando uniformidad.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img69.svg", alt="Imagen decorativa").img100.m-auto
                  p Evitar pliegues que puedan generar puntos de presión.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img70.svg", alt="Imagen decorativa").img100.m-auto
                  p Dejar visibles los dedos en extremidades para vigilar color, temperatura y sensibilidad.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img71.svg", alt="Imagen decorativa").img100.m-auto
                  p Reevaluar pulso distal, movilidad y sensibilidad inmediatamente después de su colocación.
    p(data-aos="fade-down") Si se presentan signos como palidez, frialdad, hormigueo, aumento progresivo del dolor o hinchazón marcada, el vendaje debe aflojarse de inmediato.
    p.mb-4(data-aos="fade-down") La reevaluación periódica es fundamental, especialmente durante el traslado, ya que la inflamación puede aumentar con el paso de los minutos y comprometer la circulación.
    .row.justify-content-center.mb-0
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img72.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-3 Una técnica adecuada de inmovilización reduce el riesgo de lesión vascular, neurológica o agravamiento de fracturas. En conjunto con el manejo de heridas, hemorragias, quemaduras y amputaciones, estas acciones contribuyen a estabilizar al paciente y disminuir complicaciones antes de su traslado seguro.
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Quemaduras químicas',
        texto:
          'Requieren lavado inmediato y abundante con agua limpia durante al menos 20 minutos, incluso si el dolor disminuye. Si se trata de sustancias en polvo, estas deben retirarse previamente con cuidado antes del lavado. Es fundamental evitar el uso de sustancias neutralizantes, ya que pueden generar reacciones adicionales y agravar la lesión.',
        imagen: require('@/assets/curso/tema5/img32.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Quemaduras eléctricas',
        texto:
          'Pueden producir lesiones internas profundas que no siempre son visibles externamente. Existe riesgo de alteraciones cardíacas, arritmias y paro cardiorrespiratorio. Por esta razón, es indispensable vigilar signos vitales, estado neurológico y posibles puntos de entrada y salida de la corriente eléctrica.',
        imagen: require('@/assets/curso/tema5/img33.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Quemaduras por inhalación',
        texto:
          'Pueden presentarse cuando la persona ha estado expuesta a humo, gases o vapores calientes en espacios cerrados. Si se evidencian dificultad respiratoria, voz ronca, tos persistente, hollín en boca o nariz, o lesiones en rostro y cuello, se debe activar de inmediato el sistema de emergencias, ya que puede existir compromiso de la vía aérea.',
        imagen: require('@/assets/curso/tema5/img34.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
