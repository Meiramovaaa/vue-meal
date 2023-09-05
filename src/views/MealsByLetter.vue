<template>
    <div class="p-8 flex flex-col items-center justify-center gap-8">

        <LetterBlock :letters="letters" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 w-full">
            <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow-md rounded-xl">
                <CardItem :meal='meal' :isRouter="true" />
            </div>
        </div>
    </div>
</template>
<script setup>
    import CardItem from "../components/CardItem.vue"
    import LetterBlock from "../components/LetterBlock.vue"
    import {computed, onMounted, watch} from 'vue'
    import {useRoute} from 'vue-router'
    import store from "../store";
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const route = useRoute()
    const meals = computed(()=>store.state.mealByLetter)
    watch(route, ()=>{
        store.dispatch('getMealByLetter', route.params.letter)
    })
    onMounted(()=>{
        store.dispatch('getMealByLetter', route.params.letter)
    })
</script>

   
   

