import axiosClient from '../axiosClient'
export function searchMeal({ commit }, keyword) {
    axiosClient.get(`/search.php?s=${keyword}`)
        .then(({ data }) => {
            commit("setSearchedMeals", data.meals)
        })
}

export function getDetailMeal({ commit }, id) {

    axiosClient.get(`/lookup.php?i=${id}`)
        .then(({ data }) => {
            commit("setDetailMeal", data.meals[0])
        })
}

export function getMealByLetter({ commit }, letter) {

    axiosClient.get(`/search.php?f=${letter}`)
        .then(({ data }) => {
            commit("setMealByLetter", data.meals)
        })
}
// setAllIngredients

export function getAllCategs({ commit }) {
    axiosClient.get(`/categories.php`)
        .then(({ data }) => {
            commit("setAllCategs", data.categories)
        })
}

export function getMealByGets({ commit }, get) {

    axiosClient.get(`/filter.php?c=${get}`)
        .then(({ data }) => {
            commit("setMealByCategs", data.meals)
        })
}