<template>
  <div>
    <h1>Numero Doble</h1>
  </div>
</template>

<script>
export default {
name:"NumeroDoble",
mounted(){
    console.log(this.$route.params.numero)
    var parametro=this.$route.params.numero;
    if (parametro=="") {
        console.log("sin parametross")
    }else{
        console.log("parametross recibido: "+parametro)
    }
}
}
</script>

<style>

</style>