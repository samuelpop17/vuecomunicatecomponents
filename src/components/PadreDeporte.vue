<template>
    <div>
        <h1>Padre deporte component</h1>
        <ul>
            <li v-for="depor in deportes" :key="depor">
                <HijoDeporte :nombredeporte="depor" v-on:seleccionarFavorito="seleccionarFavorito"/> 
            </li>
        </ul>
       
    </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue'

export default {
    name:"PadreDeporte",
    components:{
        HijoDeporte
    },
    methods:{
        seleccionarFavorito(nombre){
            console.log("padre deportes activado"+nombre)
    this.favorito=nombre
        }
    },
    data(){
        return{
            favorito:null,
            deportes:["futbol","balonceto","tenis","voley","ajedrez","gerra"]
        }
    }
        
    
}
</script>