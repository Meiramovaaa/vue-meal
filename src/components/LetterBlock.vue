<template>
    <div class="flex justify-center gap-3">
        <RouterLink :to='{name:"byLetter", params:{letter}}' v-for="letter of letters" :key="letter">
            {{letter }}
        </RouterLink>
    </div>
</template>

<script>
    import {RouterLink} from 'vue-router'
    
    export default {
        name:"LetterBlock",
        props:{
            letters:[]
        }
    }
</script>