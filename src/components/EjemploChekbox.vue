<template>
  <div>
    <h1>Ejemplo Checkbox</h1>
    <button @click="agregarNumeroAleatorio">Generar Checkbox</button>
    <div>
      <label v-for="(numero, index) in numeros" :key="index">
        <input type="checkbox" :value="numero" v-model="checkboxValues" /> {{ numero }}
      </label>
    </div>
    <h2>La suma total es: {{ sumaTotal }}</h2>
  </div>
</template>

<script>
export default {
  name: "EjemploCheckbox",
  data() {
    return {
      numeros: [14, 22, 25],
      checkboxValues: [] // Array para almacenar los valores seleccionados
    };
  },
  computed: {
    sumaTotal() {
      // Suma los valores seleccionados en los checkboxes
      return this.checkboxValues.reduce((total, valor) => total + valor, 0);
    }
  },
  methods: {
    agregarNumeroAleatorio() {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(numeroAleatorio);
    }
  }
};
</script>


<style>

</style>