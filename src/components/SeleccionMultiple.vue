<template>
  <div>

    <h1>seleccion multiple</h1>
<form v-on:submit.prevent="mostrarSeleccionados()">
    
    <select size="8" id="" multiple v-model="opcionesSeleccionadas">

        <option v-for="opt in opciones" :key="opt">{{opt}}</option>

    </select>
     <button>
                Mostrar seleccionados
            </button>

</form>
<h2>{{seleccionados}}</h2>
  </div>
</template>

<script>
export default {
name:"SeleccionMultiple",
methods:{
    mostrarSeleccionados(){
        this.seleccionados="";
        for(var opt of this.opcionesSeleccionadas){
            this.seleccionados+=opt+",";
        }
    }
},
data(){
    return{
        opciones:["A","B","C","D","E","F","Opcion T"],
        opcionesSeleccionadas:[],
        seleccionados:""
    }
}
}
</script>

<style>

</style>