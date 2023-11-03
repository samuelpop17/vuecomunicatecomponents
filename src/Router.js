import {createWebHistory, createRouter} from 'vue-router';
import PadreDeporte from './components/PadreDeporte.vue';
import HomeComponent from './components/HomeComponent.vue';
import PadreNumero from './components/PadreNumero.vue';
import ComicsComponent from './components/ComicsComponent.vue';
import SeleccionMultiple from './components/SeleccionMultiple.vue';
import EjemploChekbox from './components/EjemploChekbox.vue';
import NumeroDoble from './components/NumeroDoble.vue';
import TablaMultiplicarRouter from './components/TablaMultiplicarRouter.vue'
const myRoutes = [
    {
        path: "/", component: HomeComponent
    }, 
    {
        path: "/deportes", component: PadreDeporte
    },
    {
        path: "/numeros", component: PadreNumero
    }, 
    {
        path: "/comics", component: ComicsComponent
    },
    {
        path: "/seleccionmultiple", component: SeleccionMultiple
    },
    {
        path: "/checkbox", component: EjemploChekbox
    },
    {
        path: "/numerodoble/:numero?", component: NumeroDoble
    },
    {
        path: "/tablamultiplicar/:numero?", component: TablaMultiplicarRouter
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;