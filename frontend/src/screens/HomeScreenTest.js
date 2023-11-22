import React, { useReducer} from 'react'

function valueReducer(state,action){
    if(action === 'increment'){
        return state+1
    }else {
        return state-1 
    }
 
}

const HomeScreenTest = () => {
    // const[value,setValue]=useState(0)
    const [value,dispatch]=useReducer(valueReducer,0)

  return (
    <div>

        <h1>{value}</h1>
        <button onClick={()=>
            dispatch('increment')}>
                increment</button>
        <button onClick={()=>
             dispatch('dicrement')}>
                dicrement</button>

    </div>
  )
}

export default HomeScreenTest