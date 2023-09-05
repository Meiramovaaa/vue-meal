<template>
    <div class="p-8">
        <input type="text" name="" id="" class="rounded border-2 border-gray-200 w-full" placeholder="Serch for meals"
            v-model="keyword" @change="searchMeals">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow-md rounded-xl">
            <CardItem :meal = 'meal' :isRouter="true"/>
        </div>
    </div>
</template>

<script setup>
import { ref , onMounted} from 'vue'
import { computed } from 'vue'
import store from '../store/index'
import {useRoute} from 'vue-router'
import CardItem from '../components/CardItem.vue'
// import CardItem from '../components/'
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()
function searchMeals() {
    store.dispatch('searchMeal', keyword.value)
}
onMounted(()=>{
    keyword.value = route.params.name
    if(keyword.value) searchMeals()
})
</script>