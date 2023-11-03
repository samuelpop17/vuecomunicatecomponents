<template>
  <div>
    <h1>Tabla de Multiplicar Router {{ this.$route.params.numero }}</h1>
    <table>
      <thead>
        <tr>
          <th>Multiplicando</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{ this.$route.params.numero }} x {{ i }}</td>
          <td>{{ i * parseInt(this.$route.params.numero) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar"
};
</script>
