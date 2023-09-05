<template>
    <div class="p-8 flex flex-col items-center justify-center gap-8">
        
        <!-- <div class="flex justify-center gap-3">
            <RouterLink :to='{name:"byLetter", params:{letter}}' v-for="letter of letters" :key="letter">
                {{letter }}
            </RouterLink>
        </div> -->
        <LetterBlock :letters="letters"/>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 w-full">
            <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow-md rounded-xl">
                <CardItem :meal = 'meal' :isRouter="true"/>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import axiosClient from '../AxiosClient'
import CardItem from "../components/CardItem.vue"
import LetterBlock from "../components/LetterBlock.vue"
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = ref([])


onMounted(async ()=>{
    const res = await axiosClient.get('/search.php?f=a')
    meals.value = res.data.meals
})


</script>