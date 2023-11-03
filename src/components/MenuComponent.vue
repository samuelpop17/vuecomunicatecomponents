<template>
    <ul id="menu">
        <li>
            <router-link to="/">Home | </router-link>
        </li>
        <li>
            <router-link to="/deportes">Padre Deportes | </router-link>
        </li>
        <li>
            <router-link to="/numeros">Sumar números | </router-link>
        </li>
        <li>
            <router-link to="/comics">Comics | </router-link>
        </li>
        <li>
            <router-link to="/seleccionmultiple">Selección múltiple |</router-link>
        </li>
         <li>
            <router-link to="/checkbox"> checkbox | </router-link>
        </li>
        <li>
            <router-link to="/numerodoble/77"> NumeroDoble params |</router-link>
        </li>
         <li>
            <router-link to="/numerodoble"> NumeroDoble |</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>
    ul#menu li {
        display: inline
    }
</style>