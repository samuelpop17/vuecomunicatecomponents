<template>
  <div>
    <h1>Padre Numero Component</h1>
    <h1>La suma es: {{resultado}}</h1>
    <button @click="agregarNumeroAleatorio()">Agregar número aleatorio</button>
    <li v-for="nume in numeros" :key="nume">
      <HijoNumero :numerosselct="nume" v-on:seleccionarNumero="sumarNumero" />
    </li>
  </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue'

export default {
  name: "PadreNumero",
  components: {
    HijoNumero
  },
  methods: {
    agregarNumeroAleatorio() {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(numeroAleatorio);
    },
    sumarNumero(numero) {
      this.resultado += numero;
    }
  },
  data() {
    return {
      resultado: 0,
      numeros: [14, 22, 35]
    };
  }
};
</script>
