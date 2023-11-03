<template>
  <div>
    <h1>Menú Aleatorio</h1>
    <ul id="menu">
      <li v-for="item in menuItems" :key="item">
        <router-link :to="'/tablamultiplicar/'+item">numero {{ item }}| </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuAleatorio",
  data() {
    return {
      menuItems: []
    };
  },
  created() {
    this.generarMenuAleatorio();
  },
  methods: {
    generarMenuAleatorio() {
      this.menuItems = [];

      for (let i = 1; i <= 10; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 17) + 1;
        
        this.menuItems.push(numeroAleatorio);
      }
    }
  }
};
</script>
