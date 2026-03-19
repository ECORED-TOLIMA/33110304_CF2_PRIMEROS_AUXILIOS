<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda la valoración, atención básica y transferencia en primeros auxilios, brindando a los aprendices las herramientas para identificar, estabilizar y priorizar la atención de personas ante situaciones críticas. Incluye el estudio de la anatomía y fisiología aplicada de los sistemas cardiovascular, respiratorio y osteomuscular, la aplicación de medidas de bioseguridad, la valoración clínica mediante la secuencia ABCDE, el examen físico céfalo-caudal y la medición de signos vitales según la edad. Además, desarrolla competencias en soporte vital básico, manejo de obstrucción de vía aérea, traumatismos físicos, inmovilización, movilización y traslado seguro, así como en la atención de emergencias clínicas, lesiones por agentes externos, partos de emergencia y monitoreo continuo. Todo ello permite a los aprendices intervenir de manera organizada, segura y fundamentada, garantizando la protección de la vida y la integridad de las personas hasta la entrega al personal de salud especializado.
    .row.justify-content-center
      .col-lg-12.col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un esquema de los contenidos del componente formativo, en el que se describen la valoración clínica, la atención básica y la transferencia en primeros auxilios, incluyendo anatomía y fisiología, medidas de bioseguridad, soporte vital, manejo de traumatismos, emergencias y cuidados especiales, exponiendo la relación entre cada área y su aplicación para preservar la vida y la integridad del paciente.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
