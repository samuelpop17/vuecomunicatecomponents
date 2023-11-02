<template>
    <div>
        <h2>{{nombredeporte}}</h2>
        <button @click="seleccionarFavorito()">seleccionar Favorito</button>
    </div>
</template>

<script>
export default {
    name:"HijoDeporte",
    props:[ "nombredeporte" ],
    methods:{
        seleccionarFavorito(){
            console.log("favorito seleccionado")
            this.$emit("seleccionarFavorito", this.nombredeporte)
        }
    },
    mounted(){
        console.log(this.nombredeporte)
    }
}
</script>