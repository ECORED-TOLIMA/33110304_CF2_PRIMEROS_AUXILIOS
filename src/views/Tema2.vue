<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Medidas de bioseguridad en primeros auxilios
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema2/img01.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") La bioseguridad comprende el conjunto de medidas orientadas a prevenir la transmisión de enfermedades durante la atención de personas lesionadas o enfermas. En el contexto de los primeros auxilios, estas medidas no solo protegen a la víctima, sino también al primer respondiente y a terceros presentes en la escena.
        p(data-aos="fade-down") Antes de iniciar cualquier intervención, el primer respondiente debe valorar el entorno y adoptar conductas que minimicen el riesgo de exposición a agentes biológicos. La premisa fundamental es considerar todo fluido corporal como potencialmente contaminante, independientemente de la apariencia o del estado clínico de la persona atendida.
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema2/img02.svg", alt="Imagen decorativa").img90.m-auto
          h5.text-center Asumir que sangre, saliva y otras secreciones pueden ser fuentes de infección.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema2/img03.svg", alt="Imagen decorativa").img90.m-auto
          h5.text-center Utilizar barreras de protección cuando estén disponibles.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema2/img04.svg", alt="Imagen decorativa").img90.m-auto
          h5.text-center Evitar el contacto directo con fluidos corporales.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema2/img05.svg", alt="Imagen decorativa").img90.m-auto
          h5.text-center Realizar higiene de manos antes y después de la atención.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.px-4.py-3.mb-2
          p.mb-0 Estos lineamientos orientan la conducta del primer respondiente y refuerzan la necesidad de actuar bajo el criterio de precaución universal.
    p.mb-0(data-aos="fade-down") Además de aplicar estos principios, es indispensable reconocer que el manejo seguro de fluidos corporales y de los materiales utilizados durante la atención constituye una medida clave para prevenir la contaminación cruzada. La exposición directa a sangre, secreciones o elementos contaminados puede representar un riesgo de transmisión de agentes infecciosos, especialmente en escenarios prehospitalarios donde no siempre se cuenta con condiciones ideales.
    .row.BG01.justify-content-center.align-items-center.p-5.mb-0
      .col.col-lg-3.col-8.order-lg-2.order-2.mb-lg-0.mb-lg-4.mb-4
        figure
          img(src='@/assets/curso/tema2/img06.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2.mb-lg-5
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") Por ello, se recomienda:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 No manipular directamente sangre o secreciones.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Cubrir heridas con apósitos o materiales limpios.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Depositar los materiales contaminados en bolsas cerradas.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 No reutilizar elementos diseñados para un solo uso.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") La aplicación rigurosa de estas medidas reduce significativamente el riesgo de transmisión de infecciones como hepatitis B, hepatitis C o VIH, y protege tanto a la persona atendida como al primer respondiente durante la intervención.
</template>

<script>
export default {
  name: 'Tema2',
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
