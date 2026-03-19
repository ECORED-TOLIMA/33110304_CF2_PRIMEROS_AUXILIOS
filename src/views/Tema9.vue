<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Parto de emergencia
    p.mb-4(data-aos="fade-down") El parto de emergencia se presenta cuando el nacimiento es inminente y no es posible trasladar a la gestante de manera segura a un centro de salud. Aunque estas situaciones no son frecuentes, requieren que el primer respondiente actúe con serenidad, organización y prioridades claras, asegurando la protección de la madre y del recién nacido.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La intervención en estos casos no busca sustituir la atención profesional, sino brindar apoyo inicial que mantenga condiciones higiénicas, proteja la vía aérea del bebé y controle riesgos inmediatos para la madre. Es fundamental crear un entorno lo más limpio y seguro posible, mantener la calma, acompañar a la gestante y preparar el traslado inmediato a un servicio de salud.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") El abordaje adecuado durante el parto de emergencia puede disminuir riesgos de complicaciones, facilitar la adaptación inicial del recién nacido y asegurar la seguridad de la madre hasta que se complete la atención especializada.
    separador
    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.1 Atención del nacimiento
    p.mb-4(data-aos="fade-down") Antes del nacimiento, es fundamental identificar signos de trabajo de parto avanzado que indiquen que el nacimiento es inminente. Entre estos signos se incluyen contracciones frecuentes e intensas, deseo involuntario de pujar, salida de líquido amniótico y la visualización de la cabeza del bebé en el canal de parto. La detección temprana permite preparar un entorno seguro y limpio, así como organizar la asistencia de manera adecuada tanto para la madre como para el recién nacido.
    .row.align-items-center.mb-4(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Preparación del entorno y medidas iniciales
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema9/img02.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Colocar a la madre en posición semisentada o acostada con rodillas flexionadas, asegurando comodidad y estabilidad.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema9/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Lavarse las manos y utilizar guantes si están disponibles.
      .col.col-lg-3.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema9/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Colocar material limpio debajo de la madre, como sábanas o mantas estériles.
      .col.col-lg-3.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema9/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center No intentar retrasar el parto; permitir que el nacimiento ocurra de manera natural.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Posiciones de trabajo de parto
        .row.justify-content-center
          .col-lg-12.col-12
            figure.desktop
              img(src='@/assets/curso/tema9/img06.svg', alt='En la figura 8 se presentan las diferentes posiciones que puede adoptar la gestante durante el trabajo de parto, para favorecer el descenso del bebé y facilitar un nacimiento seguro.')
        .col-12
          figure.movil
            img(src='@/assets/curso/tema9/img07.svg', alt='En la figura 8 se presentan las diferentes posiciones que puede adoptar la gestante durante el trabajo de parto, para favorecer el descenso del bebé y facilitar un nacimiento seguro.')
    p.mb-4(data-aos="fade-down") La figura presenta diferentes posiciones que puede adoptar la gestante durante el trabajo de parto. Estas posiciones favorecen el descenso del bebé, reducen la sensación de dolor y facilitan el proceso de nacimiento de manera segura. Estas referencias visuales ayudan al primer respondiente a mantener la seguridad y comodidad de la madre mientras se prepara para la atención del nacimiento.
    .row.justify-content-center.mb-0
      .col.col-lg-1.order-lg-1.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema9/img08.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Durante la salida del bebé, es importante sostener suavemente la cabeza para guiar el nacimiento sin ejercer tracción. El cuerpo debe salir de forma progresiva y natural, acompañando el proceso sin jalar ni presionar. Una vez que el recién nacido haya salido, se debe verificar inmediatamente que respire o llore, como signo de adaptación inicial adecuada.
      .col.col-lg-10.col-12.order-3
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") En Colombia, la atención materno-perinatal está regulada por la Resolución 3280 de 2018, que adopta la Ruta Integral de Atención en Salud Materno Perinatal. En un parto de emergencia, el rol del primer respondiente se limita a garantizar condiciones seguras, brindar acompañamiento y apoyo básico, y coordinar el traslado inmediato a un servicio de salud habilitado. Su actuación oportuna puede marcar la diferencia en la seguridad de la madre y del recién nacido.
    separador
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.2 Cuidados inmediatos del recién nacido
    p.mb-4(data-aos="fade-down") Tras el nacimiento, la atención inmediata del recién nacido se centra en asegurar la respiración adecuada, mantener la temperatura corporal y prevenir complicaciones mientras se organiza el traslado a un servicio de salud. El primer respondiente debe actuar con calma, recordando que la mayoría de los recién nacidos comienzan a respirar espontáneamente.
    .row.align-items-center.mb-4(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 a) Evaluación inicial
    .row.justify-content-center.mb-3(data-aos="flip-down")
      .col-lg-4.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema9/img09.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.align-items-center
            p.mb-0 Prestar atención si el bebé llora o respira.
      .col-lg-4.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema9/img10.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.align-items-center
            p.mb-0 Verificar el movimiento del tórax.
      .col-lg-4.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema9/img11.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.align-items-center
            p.mb-0 Evaluar la coloración de la piel, que debe tornarse progresivamente rosada.
    p.mb-4(data-aos="fade-down") Si el recién nacido no respira, se puede estimular suavemente frotando la espalda, mantener la vía aérea en posición neutra y, si se cuenta con entrenamiento, prepararse para realizar ventilaciones.
    .row.align-items-center.mb-4(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 b) Prevención de la hipotermia
    .row.BG01.justify-content-center.pt-5.pb-4.mb-4
      .col.col-lg-3.col-8.order-lg-1.order-1.mb-lg-0.mb-lg-3.mb-4
        figure
          img(src='@/assets/curso/tema9/img12.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2.mb-lg-4
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.px-4.py-5
              ul.lista-ul--color(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Secar al bebé de inmediato con material limpio.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Retirar telas húmedas o mojadas.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Cubrir con una manta seca.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Mantener contacto piel a piel con la madre para conservar el calor.
    .row.align-items-center.mb-4(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c) Vigilancia de la madre
    figure.mb-4
      img(src='@/assets/curso/tema9/img13.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Simultáneamente, se debe supervisar a la madre, prestando atención al sangrado vaginal, su estado de conciencia y comodidad. Un sangrado abundante es un signo de alarma que requiere traslado urgente.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") En un parto de emergencia, los cuidados inmediatos del recién nacido se concentran en tres aspectos esenciales: respiración, temperatura y vigilancia continua, garantizando la estabilidad del bebé hasta la llegada de atención especializada.
            .col.col-lg-auto.order-lg-2.order-1.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/tema9/img14.svg', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema9',
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
