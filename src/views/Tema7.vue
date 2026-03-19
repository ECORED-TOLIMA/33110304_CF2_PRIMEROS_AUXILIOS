<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Emergencias clínicas
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Las emergencias clínicas corresponden a alteraciones súbitas del estado de salud que comprometen funciones vitales sin que necesariamente exista un trauma previo. Pueden afectar la respiración, la circulación, el sistema nervioso o el metabolismo, y evolucionar rápidamente hacia un desenlace fatal si no se identifican y manejan de manera oportuna.
        br
        br
        p.mb-0(data-aos="fade-down") Durante la valoración primaria (ABCDE), muchas de estas situaciones pueden detectarse tempranamente. Sin embargo, el primer respondiente debe reconocer signos específicos que orienten la intervención inicial mientras se activa el sistema de emergencias y se organiza el traslado.
    p.mb-4(data-aos="fade-down") A continuación, se presentan las principales emergencias clínicas, sus signos de alerta y la actuación inicial recomendada.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Principales emergencias clínicas y actuación inicial
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de emergencia
                th(data-aos="fade-down")(style= "width: 35%") Signos de alerta
                th(data-aos="fade-down")(style= "width: 35%") Actuación inicial
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alteraciones respiratorias.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dificultad para respirar.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Respiración muy rápida o muy lenta.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Uso de músculos accesorios.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Aleteo nasal.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Cianosis.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Incapacidad para hablar frases completas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mantener vía aérea permeable.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Colocar en posición semiincorporada si está consciente.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Aflojar prendas ajustadas.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Vigilar signos vitales.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Prepararse para iniciar RCP si es necesario.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Activar sistema de emergencias.
              tr
                td(data-aos="fade-down") Alteraciones circulatorias (síndrome coronario agudo).
                td(data-aos="fade-down") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dolor opresivo en el pecho.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Irradiación a brazo izquierdo, cuello o mandíbula.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Sudoración fría.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Náuseas.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Sensación de muerte inminente.
                td(data-aos="fade-down") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mantener reposo absoluto.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Colocar en posición cómoda.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Vigilar signos vitales.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Activar sistema de emergencias inmediatamente.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alteraciones neurológicas (evento cerebrovascular o convulsiones).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Asimetría facial.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Debilidad en un brazo.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dificultad para hablar.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Convulsiones.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Pérdida de conciencia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 No dar alimentos ni líquidos.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mantener vía aérea permeable.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Proteger la cabeza durante convulsiones.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 No sujetar con fuerza.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 No introducir objetos en la boca.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Colocar en posición lateral tras la crisis.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Activar urgencias inmediatamente.
              tr
                td(data-aos="fade-down") Alteraciones metabólicas (por ejemplo la hipoglucemia).
                td(data-aos="fade-down") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Sudoración fría.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Temblor.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Palidez.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mareo.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Confusión.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Visión borrosa.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Irritabilidad.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Pérdida de conciencia en casos graves.
                td(data-aos="fade-down") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Si está consciente y puede tragar: administrar bebida azucarada o azúcar disuelta en agua.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Reevaluar en pocos minutos.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Si está inconsciente: no administrar nada por vía oral.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Colocar en posición lateral.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Activar sistema de emergencias.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ahogamiento.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Antecedente de inmersión o sumersión.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dificultad respiratoria.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Tos persistente.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Cianosis.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alteración del estado de conciencia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Garantizar seguridad del rescatista.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Retirar del agua.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Evaluar respiración inmediatamente.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Si no respira, iniciar RCP.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Si respira, posición lateral.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Abrigar para prevenir hipotermia.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Activar emergencias.
    p.mb-4(data-aos="fade-down") Más allá de las características específicas de cada emergencia clínica, existen principios comunes de actuación que orientan la intervención del primer respondiente. Estos lineamientos permiten priorizar la seguridad, reducir riesgos adicionales y garantizar una respuesta organizada mientras se gestiona el traslado del paciente.
    .row.BG01.justify-content-center.pt-5.pb-4.mb-4
      .col.col-lg-4.col-8.order-lg-1.order-1.mb-lg-0.mb-lg-3.mb-4
        figure
          img(src='@/assets/curso/tema7/img02.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2.mb-lg-4
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              ul.lista-ul--color(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Toda dificultad respiratoria o dolor torácico debe considerarse potencialmente grave.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 El tiempo es un factor determinante en eventos cardíacos y neurológicos.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Nunca se deben administrar líquidos a personas con alteración del estado de conciencia.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 La vigilancia continua es fundamental hasta la entrega al personal de salud.
    p.mb-0(data-aos="fade-down") Las alteraciones metabólicas, neurológicas y respiratorias pueden evolucionar rápidamente hacia compromiso vital. La identificación temprana, la actuación organizada y la activación oportuna del sistema de emergencias son determinantes para mejorar el pronóstico.
</template>

<script>
export default {
  name: 'Tema7',
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
