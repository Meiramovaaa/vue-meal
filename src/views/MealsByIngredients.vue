<template>
    <div class="p-8 flex flex-col gap-8">
        <div class="flex justify-center gap-8">
            <div v-for="cat in categs" :key="cat" class="flex gap-4">
                <RouterLink :to="{name:'byIngredient', params:{ing:cat.strCategory}}">
                    <h2 class="font-semibold">{{ cat.strCategory }}</h2>
                </RouterLink>
            </div>
        </div>
       
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 w-full">
            <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow-md rounded-xl">
                <RouterLink :to="{name:'mealDetails', params:{id:meal.idMeal}}">
                    <img loading="lazy" :src="meal.strMealThumb" :alt="meal.strMeal" class="h-60 object-cover w-full rounded-t" v-show="!isRouter">
                    <div class="p-3  flex flex-col gap-4">
                        <h3 class="font-bold">{{ meal.strMeal }}</h3>
                    </div>
                </RouterLink>
                
            </div>
        </div>
    </div>
</template>
<script setup>
    import store from '../store';
    import {computed, onMounted, watch} from 'vue'
    import {useRoute, RouterLink} from 'vue-router'
    const categs = computed(()=> store.state.allCategs)
    const meals = computed(()=> store.state.mealByCategs)
    const route = useRoute()
    watch(route, ()=>{
        store.dispatch('getMealByGets', route.params.ing)
    })
    onMounted(()=>{
        store.dispatch('getAllCategs')
    })
</script>

   
   

