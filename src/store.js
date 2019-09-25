import Vuex from 'vuex'
function createStore(){
    return    new Vuex.Store({
                state: {
                    count: 10,
                    message:"Hello Vuex",
                },
                mutations: {
                    increment (state) {
                    state.count++
                    }
                }
            })

}
export default createStore



          
