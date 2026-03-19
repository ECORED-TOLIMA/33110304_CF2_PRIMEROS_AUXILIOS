<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  </template>
<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión y aplicación conceptual de los principios de valoración clínica, soporte vital básico, atención de traumatismos, emergencias clínicas y transferencia asistencial, conforme a los protocolos y lineamientos establecidos para primeros auxilios.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'El enfoque ABCDE permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diagnosticar enfermedades.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Determinar antecedentes familiares.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar amenazas inmediatas a la vida.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Clasificar heridas leves.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'La “B” en el ABCDE corresponde a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Balance.', esCorrecta: false },
            { id: 'b', texto: 'Breathing (respiración).', esCorrecta: true },
            { id: 'c', texto: 'Break (romper).', esCorrecta: false },
            { id: 'd', texto: 'Boca.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La frecuencia respiratoria corresponde al número de respiraciones por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Minuto', esCorrecta: true },
            { id: 'b', texto: 'Segundo.', esCorrecta: false },
            { id: 'c', texto: 'Año.', esCorrecta: false },
            { id: 'd', texto: 'Trimestre.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La profundidad correcta en RCP adulto es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '5 a 6 cm.', esCorrecta: true },
            { id: 'b', texto: '8 cm.', esCorrecta: false },
            { id: 'c', texto: '2 cm.', esCorrecta: false },
            { id: 'd', texto: '3 a 4 cm.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'La frecuencia de compresiones en RCP es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '140 por minuto.', esCorrecta: false },
            { id: 'b', texto: '60 a 80 por minuto.', esCorrecta: false },
            { id: 'c', texto: '100 a 120 por minuto.', esCorrecta: true },
            { id: 'd', texto: '80 a 90 por minuto.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'En OVACE en adulto consciente se realiza:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo ventilaciones.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Golpes en la espalda únicamente.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Compresiones abdominales.', esCorrecta: true },
            { id: 'd', texto: 'RCP inmediata.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'En lactante con OVACE se realizan:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo observación.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Cinco golpes firmes entre los omóplatos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Compresiones abdominales.', esCorrecta: false },
            { id: 'd', texto: 'Maniobra de Heimlich.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'La primera medida ante hemorragia externa es:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Presión directa.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Elevar sin controlar sangrado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Retirar objetos incrustados.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Aplicar hielo.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'Ante una fractura evidente se debe:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aplicar calor.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Inmovilizar en posición encontrada.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Intentar alinear el hueso.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Movilizar para comprobar dolor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'El shock se caracteriza por:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Piel caliente.', esCorrecta: false },
            { id: 'b', texto: 'Piel fría y pulso débil.', esCorrecta: true },
            { id: 'c', texto: 'Pulso lento y fuerte.', esCorrecta: false },
            { id: 'd', texto: 'Presión elevada.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        // Continúa mismo patrón (imagen vuelve a 1)
        {
          id: 11,
          texto: 'En hipoglicemia con paciente consciente se debe:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inducir vómito.', esCorrecta: false },
            { id: 'b', texto: 'Colocar boca abajo.', esCorrecta: false },
            { id: 'c', texto: 'No administrar nada.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Administrar bebida azucarada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'En un evento cerebrovascular no se debe:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Vigilar signos vitales.', esCorrecta: false },
            { id: 'b', texto: 'Mantener vía aérea.', esCorrecta: false },
            { id: 'c', texto: 'Activar emergencias.', esCorrecta: false },
            { id: 'd', texto: 'Dar líquidos.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La posición lateral de seguridad se usa cuando:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hay paro cardíaco.', esCorrecta: false },
            {
              id: 'b',
              texto: 'El paciente está inconsciente pero respira.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Hay hemorragia activa.', esCorrecta: false },
            { id: 'd', texto: 'Hay fractura abierta.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'En quemaduras no se debe:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Enfriar con agua.', esCorrecta: false },
            { id: 'b', texto: 'Cubrir con apósito limpio.', esCorrecta: false },
            { id: 'c', texto: 'Reventar ampollas.', esCorrecta: true },
            { id: 'd', texto: 'Retirar fuente de calor.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'En lesión eléctrica lo primero es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Movilizar rápidamente.', esCorrecta: false },
            { id: 'b', texto: 'Cortar la fuente eléctrica.', esCorrecta: true },
            { id: 'c', texto: 'Tocar al paciente.', esCorrecta: false },
            { id: 'd', texto: 'Aplicar vendaje.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'En una convulsión no se debe:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Introducir objetos en la boca.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Proteger la cabeza.', esCorrecta: false },
            { id: 'c', texto: 'Retirar objetos cercanos.', esCorrecta: false },
            { id: 'd', texto: 'Vigilar respiración.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'La movilización en bloque busca:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sentar al paciente.', esCorrecta: false },
            { id: 'b', texto: 'Girar por partes.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Mantener alineación cabeza–cuello–tronco.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mover extremidades primero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'En amputación traumática la parte amputada debe:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Lavarse con jabón.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Envolverse en gasa y colocarse en bolsa.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Desecharse.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Colocarse directamente en hielo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'El monitoreo posterior permite:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evitar traslado.', esCorrecta: false },
            { id: 'b', texto: 'Suspender vigilancia.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Detectar deterioro temprano.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Finalizar atención.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'El proceso de primeros auxilios concluye con la entrega organizada del paciente al:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reclusorio.', esCorrecta: false },
            { id: 'b', texto: 'Parque más próximo.', esCorrecta: false },
            { id: 'c', texto: 'Personal de salud.', esCorrecta: true },
            { id: 'd', texto: 'Arquitecto.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la valoración, atención y traslado en primeros auxilios, demostrando comprensión de las técnicas y acciones necesarias para actuar de manera segura y efectiva ante situaciones de emergencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
