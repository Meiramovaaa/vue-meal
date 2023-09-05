<template>
    <div class="p-8 flex flex-col gap-4">
        <CardItem :meal = 'meal' :isRouter="false"/>

        <div class="flex justify-around">
            <div class="flex gap-3">
                <span class="font-bold">Category</span>
                {{ meal.strCategory }}
            </div>
            <div class="flex gap-3">
                <span class="font-bold">Area</span>
                {{ meal.strArea }}
            </div>
            <div class="flex gap-3">
                <span class="font-bold">Tags</span>
                {{ meal.strTags }}
            </div>
        </div>
        <div >
            
            <div class="flex justify-around">
                <div class="flex flex-col gap-3">
                    <h2 class="text-md font-bold">Ingredients</h2>
                    <div v-for="(el, ind) of new Array(20)" class="flex flex-col gap-3">
                        <div v-if="meal[`strIngredient${ind+1}`]">
                            {{ ind+1 }}.{{ meal[`strIngredient${ind+1}`] }}
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-3">
                    <h2 class="text-md font-bold">Measures</h2>
                    <div v-for="(el, ind) of new Array(20)" class="flex flex-col gap-3">
                        <div v-if="meal[`strMeasure${ind+1}`]">
                            {{ ind+1 }}.{{ meal[`strMeasure${ind+1}`] }}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import {onMounted,computed } from 'vue'
    import {useRoute} from 'vue-router'
    import store from '../store/index'
    import CardItem from '../components/CardItem.vue'
    const route = useRoute()
    const meal = computed(() => store.state.meal)
    onMounted(()=>{
        if(route.params.id){
            getMeal()
        }
    })
    function getMeal(){
        store.dispatch("getDetailMeal", route.params.id)
    }
</script>