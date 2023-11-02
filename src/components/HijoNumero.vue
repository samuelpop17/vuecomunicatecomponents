<template>
    <div>
        <h2>Numero hijo {{numerosselct}}</h2>
        <button @click="sumarNumero(numerosselct)">sumar </button>
    </div>
</template>

<script>
export default {
  name: "HijoNumero",
  props: ["numerosselct"],
  methods: {
    sumarNumero(numerosselct) {
      this.$emit("seleccionarNumero", numerosselct);
    }
  },
  mounted() {}
};
</script>
