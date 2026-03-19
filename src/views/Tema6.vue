<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Movilización y traslado
    p.mb-4(data-aos="fade-down") La movilización y el traslado del paciente constituyen una fase crítica dentro de la atención en primeros auxilios. Un movimiento inadecuado puede agravar lesiones existentes, especialmente en casos de trauma craneoencefálico, fracturas o sospecha de lesión en la columna vertebral.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Antes de movilizar a una persona lesionada, el primer respondiente debe realizar una valoración cuidadosa del estado general, identificar posibles lesiones y determinar si el traslado es realmente necesario. No todas las situaciones requieren mover al paciente de inmediato; en muchos casos, es más seguro mantenerlo en la posición encontrada hasta la llegada de ayuda especializada.
    p.mb-4(data-aos="fade-down") La movilización solo debe realizarse cuando:
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img02.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center El entorno representa un peligro inminente (incendio, riesgo de explosión o colapso estructural).
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Es necesario acceder a la vía aérea o realizar maniobras de reanimación.
      .col.col-lg-4.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Se requiere traslado urgente a un centro asistencial y no hay posibilidad de esperar asistencia profesional.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C03.px-4.py-3
          p.mb-0.text-center La prioridad siempre es proteger la vida, sin generar daño adicional.
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Técnicas básicas
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema6/img05.png', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Las técnicas de movilización deben aplicarse según el estado del paciente, el tipo de lesión, el entorno y el número de personas disponibles para ayudar. La decisión de movilizar siempre debe basarse en el principio de no agravar la lesión existente.
        p.mb-0(data-aos="fade-down") Antes de iniciar cualquier desplazamiento, es fundamental realizar una valoración rápida que permita identificar signos de compromiso neurológico, fracturas evidentes o sospecha de lesión en columna vertebral.
    p.mb-4(data-aos="fade-down") A continuación, se presentan los principios generales de movilización, los cuales deben aplicarse en todos los casos:
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .row.justify-content-center.align-items-center.g-0
          .col-lg-12.order-lg-2.order-2
            .cajon.cajon.C03.p-4
              .col-lg-12
                .tarjeta.clr--pink.p-4.rounded-0.h-100
                  .tarjeta.bg-white.p-4
                    //- #t_1_4.titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
                    //-   h2 Pódcast
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Pódcast"
                    :audio="require('@/assets/curso/audio/Podcast_CF01_11220133.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-lg-12.col-12.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema6/img06.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Antes de aplicar cualquier técnica de movilización, el primer respondiente debe analizar cuidadosamente la escena, el estado clínico del paciente y los riesgos potenciales del entorno. La decisión de mover a una persona lesionada no debe tomarse de manera automática; debe responder a criterios de seguridad, necesidad clínica y disponibilidad de apoyo. Solo cuando el traslado sea indispensable, se procede a seleccionar la técnica más adecuada, procurando siempre proteger la columna vertebral y minimizar movimientos innecesarios.
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C05" data-aos="zoom-in")
      .row.justify-content-center(titulo="Movilización de emergencia (arrastre)")
        .col-lg-6.order-lg-1.order-2
          p Se utiliza cuando existe riesgo inmediato para la vida, como incendio, explosión, colapso estructural o presencia de gases tóxicos. En estos casos, la prioridad es retirar rápidamente al paciente de la zona de peligro. Técnicas más empleadas:
          ul.lista-ul
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Arrastre por los hombros, sujetando por axilas y manteniendo la cabeza alineada.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Arrastre con manta o sábana, que permite mayor estabilidad.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Arrastre por la ropa (si el material es resistente).
          p.mb-0 Aunque esta técnica prioriza la rapidez sobre la precisión, siempre que sea posible debe protegerse la cabeza y el cuello durante el desplazamiento.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema6/img07.jpg', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Movilización con ayuda en paciente consciente")
        .col-lg-6.order-lg-1.order-2
          p Se aplica cuando el paciente está estable, consciente y puede colaborar parcialmente. Técnicas frecuentes:
          ul.lista-ul
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Técnica de apoyo lateral, en la que el paciente se sostiene del auxiliador.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Técnica de silla humana, realizada por dos auxiliadores que forman un asiento con sus brazos.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Transporte asistido, brindando soporte en hombros o cintura.
          p.mb-0 Estas técnicas deben evitarse si existe sospecha de fractura inestable o lesión vertebral.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema6/img08.jpg', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Movilización en paciente inconsciente")
        .col-lg-6.order-lg-1.order-2
          p Si el paciente está inconsciente, pero respira y no se sospecha trauma vertebral, debe colocarse en posición lateral de seguridad para mantener la vía aérea permeable y prevenir broncoaspiración. Durante la movilización se debe:
          ul.lista-ul
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Mantener alineación corporal.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Vigilar constantemente la respiración.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Revisar cambios en coloración o esfuerzo respiratorio.
          p.mb-0 Si existe sospecha de lesión cervical, se debe evitar la rotación del cuerpo y esperar apoyo especializado o utilizar técnicas de movilización en bloque.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema6/img09.jpg', alt="Imagen decorativa")
    p.mb-4(data-aos="fade-down") La movilización adecuada del paciente constituye una responsabilidad técnica que exige criterio, coordinación y conocimiento de las condiciones clínicas presentes. Aplicar la técnica correcta según el estado de conciencia, el tipo de lesión y el entorno reduce el riesgo de complicaciones secundarias, especialmente aquellas relacionadas con la columna vertebral y el compromiso neurológico. Una actuación organizada y segura garantiza un traslado más protegido hasta la llegada del personal de salud o el ingreso al centro asistencial.
    .tarjeta.tarjeta--C05.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col.col-lg-1.d-none.d-lg-block
          img(src="@/assets/curso/tema6/img10.svg")
        .col.col-lg-9.col-12.mb-lg-0.mb-3
          h4 Métodos manuales de transporte de pacientes
          p.mb-0 Para ampliar la información sobre las técnicas de movilización, se recomienda acceder al siguiente video.
        .col.col-lg-2.col-12.text-center.text-lg-start
          a.boton.color-acento-botones(href="https://www.youtube.com/embed/gSFK0j8W7KA?si=aPPHl3SwlfS0Yptj" target="_blank")
            span Abrir video
            i.fas.fa-file-video
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Uso de tabla espinal
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema6/img11.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") La tabla espinal es un dispositivo rígido diseñado para el traslado seguro de pacientes con sospecha de lesión en la columna vertebral. Su objetivo principal es mantener la alineación del eje cabeza–cuello–tronco, limitar movimientos innecesarios y reducir el riesgo de daño neurológico secundario durante la movilización y el transporte.
        p(data-aos="fade-down") Su utilización está indicada principalmente en situaciones de trauma de alta energía, tales como caídas desde altura, accidentes de tránsito, atropellamientos, impacto directo sobre la cabeza o la espalda, pérdida de conciencia asociada a trauma o presencia de dolor cervical, dorsal o lumbar posterior al evento. También debe considerarse cuando existen alteraciones neurológicas como debilidad, hormigueo o pérdida de sensibilidad en extremidades.
        .row.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema6/img12.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Antes de iniciar el procedimiento, es fundamental realizar estabilización manual de la columna cervical, manteniendo la cabeza en posición neutra. Si se dispone de collar cervical, este debe colocarse sin suspender la alineación manual.
    p.mb-4(data-aos="fade-down") El traslado hacia la tabla se efectúa mediante técnica en bloque, idealmente con la participación de al menos tres auxiliadores:
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Un auxiliador estabiliza cabeza y cuello y dirige la maniobra.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Los demás coordinan el giro del cuerpo como una unidad, evitando torsiones o flexiones.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          h5.mb-3(data-aos="fade-down") Una vez ubicado el paciente sobre la tabla:
          ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-down")
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Se centra el cuerpo correctamente.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Se fijan primero el tórax y la pelvis con correas.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Se inmovilizan las extremidades si es necesario.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Finalmente, se estabiliza la cabeza con dispositivos laterales y correas frontales.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img15.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C03.px-4.py-3
          p.mb-0.text-center Durante todo el procedimiento se debe vigilar respiración, pulso y estado de conciencia.
    p.mb-4(data-aos="fade-down") Una movilización inadecuada puede ocasionar agravamiento de fracturas vertebrales, lesión medular secundaria, compromiso neurológico irreversible, aumento del dolor o incluso hemorragia interna adicional. Por ello, la aplicación de esta técnica exige coordinación, comunicación clara entre los auxiliadores y criterio clínico para determinar su indicación.
    .row.justify-content-center.mb-0
      .col.col-lg-1.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema6/img16.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") La tabla espinal constituye una herramienta fundamental en el manejo del trauma; sin embargo, su uso debe ser racional y basado en la valoración del riesgo–beneficio para el paciente.

</template>

<script>
export default {
  name: 'Tema6',
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
