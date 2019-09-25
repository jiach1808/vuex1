 import Vuex from 'vuex'

  const Counter = {
                template:`<div>{{ sayHi }} {{ totalCount }} {{ count }} {{ message }}</div>`,
               
                data(){
                    return {
                        start:5,
                    }
                },
                computed:{
                    sayHi(){ return "Hi! this is wjc" },
                    ...Vuex.mapState({
                        title:"count",
                        count:(state)=>state.count,
                        message:function(state){ return state.message },
                        totalCount:function(state){
                            return this.start+state.count
                        }
                    })
                }
            }

   export default Counter         