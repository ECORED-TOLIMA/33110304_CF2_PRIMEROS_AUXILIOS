<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Soporte vital básico
    p.mb-4(data-aos="fade-down") El Soporte Vital Básico (SVB) comprende el conjunto de intervenciones inmediatas orientadas a mantener la oxigenación cerebral y la circulación sanguínea en situaciones que comprometen la vida, como el paro cardiorrespiratorio y la obstrucción grave de la vía aérea. Estas maniobras constituyen la primera respuesta ante emergencias críticas y pueden marcar la diferencia entre la vida y la muerte.
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema4/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") El SVB se fundamenta en la activación temprana del sistema de emergencias, el reconocimiento oportuno del paro, la aplicación inmediata de reanimación cardiopulmonar (RCP) de alta calidad y el uso precoz del desfibrilador externo automático (DEA) cuando esté disponible. La actuación organizada dentro de esta cadena de supervivencia incrementa significativamente las probabilidades de recuperación.
        p(data-aos="fade-down") La aplicación temprana y adecuada del Soporte Vital Básico aumenta de manera sustancial la supervivencia y disminuye el riesgo de daño neurológico irreversible, conforme a los lineamientos de la American Heart Association (2020). Por ello, el primer respondiente debe actuar con seguridad, rapidez y siguiendo una secuencia estructurada, evitando improvisaciones y priorizando siempre la calidad de las maniobras.
        .row.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 El aprendizaje y la práctica periódica de estas técnicas fortalecen la capacidad de respuesta ante eventos súbitos, permitiendo una intervención efectiva hasta la llegada del equipo especializado.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Reanimación cardiopulmonar (adulto, niño y lactante)
    p.mb-4(data-aos="fade-down") La reanimación cardiopulmonar (RCP) es una técnica destinada a mantener de manera artificial la circulación sanguínea y la oxigenación cuando el corazón y la respiración se han detenido.
    .row.justify-content-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img03.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-1 Ante una sospecha de paro cardiorrespiratorio, la actuación debe ser inmediata y organizada. En primer lugar, se verifica la seguridad del entorno. Luego se evalúa la respuesta mediante estímulos verbales y táctiles. Si la persona no responde y no presenta respiración normal, se activa el sistema de emergencias e inmediatamente se inician compresiones torácicas de alta calidad. Tan pronto como esté disponible, debe solicitarse o utilizarse un Desfibrilador Externo Automático (DEA).
    p.text-center.mb-4(data-aos="fade-down") Secuencia básica de actuación:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img04.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Verificar seguridad del entorno.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img05.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Evaluar respuesta.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img06.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Activar el sistema de emergencias.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img07.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Iniciar compresiones torácicas de alta calidad.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img08.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Utilizar el DEA lo antes posible.
    p.mb-4(data-aos="fade-down") A continuación, se describen las características técnicas de la RCP según el grupo etario:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Reanimación cardiopulmonar según grupo etario
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Aspecto
                th(data-aos="fade-down")(style= "width: 20%") Adulto
                th(data-aos="fade-down")(style= "width: 30%") Niño (1 año hasta inicio de pubertad)
                th(data-aos="fade-down")(style= "width: 30%") Lactante (menor de 1 año)
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ubicación de las compresiones.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Centro del tórax (mitad inferior del esternón).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Centro del tórax.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Centro del tórax, debajo de la línea intermamilar.
              tr
                td(data-aos="fade-down") Técnica de manos/dedos.
                td(data-aos="fade-down") Talón de una mano sobre la otra, dedos entrelazados.
                td(data-aos="fade-down") Una o dos manos según tamaño del niño.
                td(data-aos="fade-down") Dos dedos (un reanimador) o técnica de dos pulgares (dos reanimadores).
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Profundidad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 5 a 6 cm (sin exceder 6 cm).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Aproximadamente un tercio del diámetro anteroposterior del tórax.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Aproximadamente un tercio del diámetro torácico.
              tr
                td(data-aos="fade-down") Frecuencia.
                td(data-aos="fade-down") 100 a 120 compresiones por minuto.
                td(data-aos="fade-down") 100 a 120 compresiones por minuto.
                td(data-aos="fade-down") 100 a 120 compresiones por minuto.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Relación compresión/ventilación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30:2 si está entrenado.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30:2 con un reanimador.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30:2 con un reanimador.
              tr
                td(data-aos="fade-down") Si no está entrenado en ventilaciones.
                td(data-aos="fade-down") Solo compresiones continuas.
                td(data-aos="fade-down") Solo compresiones continuas.
                td(data-aos="fade-down") Solo compresiones continuas.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Uso de DEA.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Utilizar tan pronto esté disponible.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Utilizar con parches pediátricos si están disponibles.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Utilizar con parches pediátricos si están disponibles.
    .row.BG01.justify-content-center.pt-5.pb-0.mb-4
      .col.col-lg-3.col-8.order-lg-2.order-2.mb-lg-0.mb-lg-3.mb-4
        figure
          img(src='@/assets/curso/tema4/img09.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2.mb-lg-4
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") En este punto es importante precisar cuándo debe suspenderse la RCP. La reanimación se mantiene hasta que ocurra alguna de las siguientes situaciones:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Llegue personal de salud capacitado y asuma la atención.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 La persona recupere signos evidentes de vida, como respiración normal o movimiento.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 El reanimador presente agotamiento físico que le impida continuar con compresiones de calidad.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 El entorno se torne inseguro y represente riesgo para el primer respondiente.
      p.order-3.mb-4(data-aos="fade-down") La reanimación cardiopulmonar constituye una intervención crítica que exige técnica adecuada, rapidez y seguridad en la ejecución. La calidad de las compresiones es el factor determinante en la supervivencia durante un paro cardiorrespiratorio, de acuerdo con los lineamientos de la American Heart Association.
    .tarjeta.tarjeta--C05.p-4
      .row.justify-content-around.align-items-center
        .col.col-lg-1.d-none.d-lg-block
          img(src="@/assets/curso/tema4/img10.svg")
        .col.col-lg-9.col-12.mb-lg-0.mb-3
          h4 Técnicas de reanimación
          p.mb-0 Para ampliar la información sobre la técnica de RCP, se recomienda acceder al siguiente video.
        .col.col-lg-2.col-12.text-center.text-lg-start
          a.boton.color-acento-botones(href="https://www.youtube.com/embed/6fDvRfIwDbw?si=yX2WEcMI8smj-BpJ" target="_blank")
            span Abrir video
            i.fas.fa-file-video
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Uso del DEA
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C04.p-4.h-100.w-100
          .row.mb-2
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema4/img11.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 En el paro cardiorrespiratorio de origen súbito, la causa más frecuente en adultos es una alteración eléctrica del corazón, como la fibrilación ventricular o la taquicardia ventricular sin pulso. En estos casos, el corazón no logra contraerse de manera efectiva, lo que impide la circulación sanguínea.
          p.mb-0 La desfibrilación consiste en administrar una descarga eléctrica controlada con el fin de interrumpir la actividad eléctrica caótica y permitir que el corazón retome un ritmo organizado. Según la American Heart Association (2020), la desfibrilación temprana combinada con RCP de alta calidad constituye la intervención más eficaz para aumentar la supervivencia.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img12.png', alt='Imagen decorativa')
    .row.BG01.justify-content-center.pt-5.pb-0.mb-4
      .col.col-lg-3.col-8.order-lg-2.order-2.mb-lg-0.mb-lg-3.mb-4
        figure
          img(src='@/assets/curso/tema4/img13.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2.mb-lg-4
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.mb-4.text-bold(data-aos="fade-down") El Desfibrilador Externo Automático (DEA) es un dispositivo diseñado para:
              ul.lista-ul--color(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Analizar automáticamente el ritmo cardíaco.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Identificar ritmos desfibrilables.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Indicar o administrar la descarga únicamente cuando es necesaria.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Guiar al reanimador mediante instrucciones de voz.
    p.text-center.mb-4(data-aos="fade-down") Su uso está indicado cuando la persona:
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Está inconsciente.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img15.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center No respira o presenta respiración anormal.
      .col.col-lg-4.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center No responde a estímulos.
    p.mb-4(data-aos="fade-down") A continuación, se describe la secuencia para el uso del DEA:
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0.mb-3(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01.mb-3(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 a) Encender el equipo y seguir las instrucciones de voz
          .col-lg-12.mb-4
            .tarjeta.tarjeta--C04.px-4.py-3
              p.mb-0(data-aos="fade-down") Al activarlo, el dispositivo comienza a emitir indicaciones claras y precisas. Estas instrucciones deben seguirse estrictamente, ya que el equipo guía todo el procedimiento.
              br
      .col.col-lg-6.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0.mb-3(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01.mb-3(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 b) Exponer el tórax y asegurarse de que esté seco
          .col-lg-12
            .tarjeta.tarjeta--C04.px-4.py-3
              p.mb-0(data-aos="fade-down") Se debe retirar la ropa del pecho y verificar que la superficie esté completamente seca. Si el paciente está húmedo, debe secarse antes de colocar los parches para evitar interferencias en el análisis o riesgo durante la descarga.
    .row.align-items-center.mb-4(data-aos="flip-down")
      .col-auto.pe-0.mb-3(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01.mb-3(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c) Colocar los parches adhesivos según el esquema indicado
      .col-lg-12
        .tarjeta.tarjeta--C04.px-4.py-3
          p.mb-0(data-aos="fade-down") En adultos, un parche se ubica debajo de la clavícula derecha y el otro en el costado izquierdo, debajo de la axila. En niños, se deben utilizar parches pediátricos si están disponibles; si el tórax es pequeño y los parches se superponen, se coloca uno en el pecho y otro en la espalda.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-5.col-12.mb-lg-0.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Parches en adultos
        .row.justify-content-center
          .col-lg-12.col-12
            figure.desktop
              img(src='@/assets/curso/tema4/img17.svg', alt='En la figura 4 se presenta la ubicación de los parches del DEA en un adulto: uno colocado debajo de la clavícula derecha y el otro en el costado izquierdo, debajo de la axila, sobre el tórax descubierto.')
        .col-12
          figure.movil
            img(src='@/assets/curso/tema4/img18.svg', alt='En la figura 4 se presenta la ubicación de los parches del DEA en un adulto: uno colocado debajo de la clavícula derecha y el otro en el costado izquierdo, debajo de la axila, sobre el tórax descubierto.')
      .col.col-lg-5.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Parches en niños
        .row.justify-content-center
          .col-lg-12.col-12
            figure.desktop
              img(src='@/assets/curso/tema4/img19.svg', alt='En la figura 5 se presenta la ubicación de los parches del DEA en un niño: uno colocado en la parte anterior del tórax y el otro en la espalda, cuando el tamaño del pecho no permite ubicarlos en posición lateral sin que se superpongan.')
        .col-12
          figure.movil
            img(src='@/assets/curso/tema4/img20.svg', alt='En la figura 5 se presenta la ubicación de los parches del DEA en un niño: uno colocado en la parte anterior del tórax y el otro en la espalda, cuando el tamaño del pecho no permite ubicarlos en posición lateral sin que se superpongan.')
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12.order-lg-1.order-2
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0.mb-lg-2.mb-3(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01.mb-lg-2.mb-3(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 d) Permitir el análisis automático sin tocar al paciente
          .col-lg-12.mb-lg-2.mb-3
            .tarjeta.tarjeta--C04.px-4.py-3
              p.mb-0(data-aos="fade-down") Durante el análisis del ritmo cardíaco, nadie debe estar en contacto con la persona. El DEA determinará si el ritmo es desfibrilable.
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0.mb-lg-2.mb-3(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-10.col-9.titulo01.mb-lg-2.mb-3(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 e) Si el equipo indica descarga, verificar seguridad y presionar el botón (en equipos semiautomáticos)
          .col-lg-12.mb-lg-2.mb-3
            .tarjeta.tarjeta--C04.px-4.py-3
              p.mb-0(data-aos="fade-down") Antes de administrar la descarga, se debe confirmar que nadie esté tocando al paciente y anunciar en voz alta “¡Todos fuera!”. La descarga solo se aplica cuando el equipo lo indica.
        .row.align-items-center.mb-lg-0.mb-4(data-aos="flip-down")
          .col-auto.pe-0.mb-lg-2.mb-3(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-10.col-9.titulo01.mb-lg-2.mb-3(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 f) Reanudar inmediatamente las compresiones tras la descarga o tras el análisis si no se indica choque
          .col-lg-12
            .tarjeta.tarjeta--C04.px-4.py-3
              p.mb-0(data-aos="fade-down") Después de cada análisis o descarga, se deben reiniciar de inmediato las compresiones torácicas durante aproximadamente dos minutos, hasta que el equipo indique un nuevo análisis.
      .col.col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img21.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img22.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2.mb-4
        .cajon.cajon.C02.p-4
          p.mb-0(data-aos="fade-down") En Colombia, la disponibilidad del DEA está respaldada por la Ley 1831 de 2017 y la Resolución 3316 de 2019, que promueven su instalación en espacios de alta afluencia de público y su utilización por personal capacitado.
      .col.col-lg-10.col-12.order-3
        p.mb-0(data-aos="fade-down") La combinación de RCP de alta calidad y desfibrilación temprana constituye la intervención más efectiva frente al paro cardíaco súbito y puede marcar la diferencia en la supervivencia del paciente.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Obstrucción de vía aérea por cuerpo extraño (OVACE)
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img23.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La obstrucción de la vía aérea por cuerpo extraño es una emergencia que puede comprometer la vida en pocos minutos. Se produce cuando un objeto bloquea parcial o totalmente el paso del aire hacia los pulmones, impidiendo la adecuada oxigenación. El reconocimiento temprano y la intervención inmediata son fundamentales para evitar paro respiratorio y paro cardíaco secundario.
    p.mb-4(data-aos="fade-down") Para determinar la conducta adecuada, es indispensable diferenciar si la obstrucción es parcial o total, ya que cada situación exige una actuación distinta.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Tipos de obstrucción de la vía aérea por cuerpo extraño (OVACE)
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Aspecto
                th(data-aos="fade-down")(style= "width: 40%") Obstrucción parcial
                th(data-aos="fade-down")(style= "width: 40%") Obstrucción total
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Paso de aire.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Disminuido, pero presente.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ausente o casi inexistente.
              tr
                td(data-aos="fade-down") Capacidad para hablar.
                td(data-aos="fade-down") Puede hablar con dificultad.
                td(data-aos="fade-down") No puede hablar.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tos efectiva o ruidosa.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tos silenciosa o ausente.
              tr
                td(data-aos="fade-down") Respiración.
                td(data-aos="fade-down") Ruidosa.
                td(data-aos="fade-down") Ausente o muy limitada.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Signos característicos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Puede mantener postura activa.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Manos en el cuello (signo universal de asfixia) y posible cianosis.
              tr
                td(data-aos="fade-down") Conducta.
                td(data-aos="fade-down") Estimular la tos y vigilar.
                td(data-aos="fade-down") Intervención inmediata con maniobras de desobstrucción.
    p(data-aos="fade-down") La diferenciación entre obstrucción parcial y total permite determinar la conducta adecuada. Intervenir de manera incorrecta en una obstrucción parcial puede empeorar la situación, mientras que retrasar la acción en una obstrucción total puede comprometer la vida en pocos minutos.
    p.mb-4(data-aos="fade-down") Cuando la obstrucción es total y la persona permanece consciente, se deben aplicar maniobras específicas para generar presión interna y facilitar la expulsión del cuerpo extraño.
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.col-12.order-lg-1.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          h5.mb-4(data-aos="fade-down") Maniobra en adulto y niño consciente:
          ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-down")
            li
              .lista-ol--cuadro__vineta
                span.text-bold a)
              | Colocarse detrás de la persona.
            li
              .lista-ol--cuadro__vineta
                span.text-bold b)
              | Rodear el abdomen con los brazos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold c)
              | Colocar un puño entre el ombligo y el esternón.
            li
              .lista-ol--cuadro__vineta
                span.text-bold d)
              | Sujetar el puño con la otra mano.
            li
              .lista-ol--cuadro__vineta
                span.text-bold e)
              | Realizar compresiones rápidas hacia adentro y arriba.
      .col-lg-6.col-12.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Manejo en adulto y niño
        .row.justify-content-center
          .col-lg-12.col-12
            figure.desktop
              img(src='@/assets/curso/tema4/img24.svg', alt='En la figura 6 se presenta una persona ubicada detrás de un adulto o niño consciente, aplicando compresiones abdominales, con los brazos rodeando el abdomen y el puño colocado entre el ombligo y el esternón para realizar la maniobra de desobstrucción.')
        .col-12
          figure.movil
            img(src='@/assets/curso/tema4/img24.svg', alt='En la figura 6 se presenta una persona ubicada detrás de un adulto o niño consciente, aplicando compresiones abdominales, con los brazos rodeando el abdomen y el puño colocado entre el ombligo y el esternón para realizar la maniobra de desobstrucción.')
    p.mb-4(data-aos="fade-down") En los lactantes, la técnica varía debido a sus características anatómicas y al riesgo de lesión abdominal, por lo que no se realizan compresiones abdominales.
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.col-12.order-lg-1.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          h5.mb-4(data-aos="fade-down") Manejo en lactantes (menores de 1 año)
          ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-down")
            li
              .lista-ol--cuadro__vineta
                span.text-bold a)
              |  Colocar al lactante boca abajo sobre el antebrazo.
            li
              .lista-ol--cuadro__vineta
                span.text-bold b)
              |  Sostener cabeza y cuello.
            li
              .lista-ol--cuadro__vineta
                span.text-bold c)
              |  Aplicar cinco golpes firmes entre los omóplatos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold d)
              |  Voltear al lactante boca arriba.
            li
              .lista-ol--cuadro__vineta
                span.text-bold e)
              |  Realizar cinco compresiones torácicas con dos dedos.
      .col-lg-6.col-12.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Manejo en lactantes
        .row.justify-content-center
          .col-lg-12.col-12
            figure.desktop
              img(src='@/assets/curso/tema4/img25.svg', alt='En la figura 7 se presenta un lactante, colocado boca abajo sobre el antebrazo del reanimador, quien sostiene la cabeza y el cuello mientras aplica golpes firmes entre los omóplatos para desobstruir la vía aérea.')
        .col-12
          figure.movil
            img(src='@/assets/curso/tema4/img26.svg', alt='En la figura 7 se presenta un lactante, colocado boca abajo sobre el antebrazo del reanimador, quien sostiene la cabeza y el cuello mientras aplica golpes firmes entre los omóplatos para desobstruir la vía aérea.')
    .row.justify-content-center.mb-0
      .col.col-lg-auto.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img27.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2.mb-4
        .cajon.cajon.C01.px-4.py-3
          h5(data-aos="fade-down") Consideraciones importantes
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 No golpear la espalda si la persona puede toser eficazmente.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 No introducir los dedos en la boca si no se visualiza el objeto.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Mantener vigilancia continua después de la expulsión, ya que pueden persistir complicaciones.
      .col.col-lg-10.col-12.order-3
        p(data-aos="fade-down") La obstrucción de la vía aérea es una emergencia súbita que exige reconocimiento rápido, intervención inmediata y técnica adecuada según la edad del paciente. La aplicación correcta de estas maniobras puede evitar consecuencias fatales.
        p.mb-0(data-aos="fade-down") Con esto se completa el bloque de Soporte Vital Básico. En el siguiente apartado se abordará la atención de traumatismos físicos, aplicando principios de control de hemorragias, manejo de heridas e inmovilización.
</template>

<script>
export default {
  name: 'Tema4',
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
