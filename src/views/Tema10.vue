<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Monitoreo, registro y vigilancia
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema10/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La atención en primeros auxilios no termina después de aplicar una intervención. Una vez estabilizada la persona, es fundamental mantener vigilancia continua hasta la llegada del personal de salud o durante el traslado, ya que el estado clínico puede cambiar rápidamente. El monitoreo constante permite detectar deterioros tempranos, evaluar la efectividad de las acciones realizadas y garantizar una transferencia segura e informada.
    .BG02.mb-4(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.py-3.px-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema10/img02.png", alt="Imagen decorativa")
        .col-lg-8
          p.mt-4.text-center(data-aos="fade-down") Durante la vigilancia, se deben reconocer signos de empeoramiento, tales como:
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema10/img03.svg", alt="Imagen decorativa").img100.m-auto
              p Aumento de la dificultad respiratoria o cambios en el patrón respiratorio.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema10/img04.svg", alt="Imagen decorativa").img100.m-auto
              p Disminución del nivel de conciencia o confusión.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema10/img05.svg", alt="Imagen decorativa").img100.m-auto
              p Pulso débil, irregular o acelerado.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema10/img06.svg", alt="Imagen decorativa").img100.m-auto
              p Palidez progresiva o sudoración fría.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema10/img07.svg", alt="Imagen decorativa").img100.m-auto
              p Sangrado persistente o aumento de la hemorragia.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema10/img08.svg", alt="Imagen decorativa").img100.m-auto
              p Aparición de convulsiones o movimientos anormales.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema10/img09.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") La identificación temprana de estos cambios permite priorizar acciones inmediatas y comunicar la situación de forma clara y precisa al personal de emergencias, facilitando la continuidad de la atención.
        p.mb-0(data-aos="fade-down") El proceso de primeros auxilios concluye con la entrega organizada del paciente al personal de salud. Esta fase es clave para asegurar la continuidad del cuidado y minimizar riesgos derivados de información incompleta o interpretaciones personales. La comunicación debe ser clara, objetiva y estructurada, evitando suposiciones no verificadas.
    p.text-center.mb-4(data-aos="fade-down") Durante la transferencia, se recomienda proporcionar información relevante sobre:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema10/img10.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Datos básicos del paciente (si se conocen).
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema10/img11.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Mecanismo del evento o causa de la lesión.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema10/img12.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Hallazgos de la valoración primaria y secundaria.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema10/img13.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Signos vitales registrados y cualquier cambio observado durante el monitoreo.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img08.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Intervenciones realizadas y la respuesta del paciente a las mismas.
    p.mb-0(data-aos="fade-down") Una secuencia lógica para el registro y la comunicación puede resumirse como: qué ocurrió, qué se encontró, qué se hizo y cómo respondió el paciente. Este enfoque sistemático facilita la comprensión inmediata del estado del paciente y optimiza la intervención del personal de salud.
</template>

<script>
export default {
  name: 'Tema10',
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
