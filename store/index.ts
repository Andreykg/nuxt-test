export interface GeneralState {
    list: string[];
}

export const state = () => ({
    list: ['Masha', 'Dima']
})

export const mutations = {
    addNewItem(state: GeneralState, item: string) {
        console.log(123,item)
        state.list.push(item)
    },
    removeItem(state: GeneralState, item: string) {
        state.list.splice(state.list.indexOf(item), 1)
    },
}