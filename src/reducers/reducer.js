export const updateReducer =(state, action)=>{
    switch (action.type) {

        case 'update':
            {
                //what we should use shallow or deep?and why?
                // const copyUpdateState = [...state]//deep copy of list
                const copyUpdateState = state //shallow copy of list
                const stateIndex = state.findIndex((item)=>{return item.id === action.data.id})
                copyUpdateState.splice(stateIndex, 1, action.data)
                console.log('copyUpdateState',copyUpdateState);
                return copyUpdateState
            }
        default:
            return state;
    }
}

export const reducer = (state ,action)=>{
    switch (action.type) {
        case 'add':
            {
                const copyAddState = state
                copyAddState.push(action.data)
                console.log('copyAddState',copyAddState);
                return copyAddState
            }
        case 'delete':
            {
                // console.log('state',state);
                const copyDeleteState = state
                // console.log('copyDeleteState',copyDeleteState);
                const deleteStateIndex = state.findIndex((item)=>{return item.id === action.data.id})
                // console.log('deleteStateIndex',deleteStateIndex);
                copyDeleteState.splice(deleteStateIndex , 1)
                console.log('copyDeleteState',copyDeleteState);
                return copyDeleteState
            }
        default:
            return state
    }
}



// const reducer =(state, action) =>{
//     switch (action.type) {
//       case 'add':
//         {
//           const copyAddState = [...state]
//           copyAddState.push(action.data )
//           return copyAddState
          
//         }
//       case 'edit':
//         {
//           const copyEditState = [...state]
//           const stateEditIndex = state.findIndex((item)=>{return item.id === action.data.id})
//           copyEditState.splice(stateEditIndex, 1, action.data)
//           console.log('copyEditState',copyEditState);
//           return copyEditState


//           // console.log("stateEditIndex",stateEditIndex);
//         }
//       case 'delete':
//         {
//           const stateDeleteIndex = state.findIndex((item)=>{return item.id === action.data.id})
//           const copyDeleteState = [...state]
//           copyDeleteState.splice(stateDeleteIndex, 1)
//           return copyDeleteState
//         }
//       }
//     }