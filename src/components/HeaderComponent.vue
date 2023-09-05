<template>
    <header class="shadow-md bg-white h-16 flex justify-around items-center">
      <RouterLink :to="{name:'home'}">Home</RouterLink>
     <div class="flex items-center gap-4 h-full">
      <RouterLink class="flex items-center transition px-2 hover:bg-purple-200 h-full" :to="{name:'byName'}">Search meals</RouterLink>
      <RouterLink class="flex items-center transition px-2 hover:bg-purple-200 h-full" :to="{name:'byLetter'}">Meals by letter</RouterLink>
      <RouterLink class="flex items-center transition px-2 hover:bg-purple-200 h-full" :to="{name:'byIngredient'}">Meals by ingredients</RouterLink>
     </div>
    </header>
</template>