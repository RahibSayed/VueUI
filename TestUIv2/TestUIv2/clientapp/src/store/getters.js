export default {
    animalsCount: (state) => {
        return state.cats.length + state.cats.length
    },
    getAllCats:(state) => {
        return state.pets.filter((pet) => {
            return pet.species === 'cat'
        })
    }
}