



 const initialState=[
        {id:1,firstname:"Jaya" , lastname:"Sahu" , status:"true"},
        {id:2,firstname:"Anil Kumar" , lastname:"Sahu" , status:"false"}
    ]


export const contactReducers = (state=initialState , action) =>{
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state , action.payload]
            return state;
        case "UPDATE_CONTACT":
                const updatedState = state.map(contact=>contact.id === action.payload.id ? action.payload : contact)
                state = updatedState
                return state;  
        case "DELETE_CONTACT":
            const filterContact = state.filter(contact=>contact.id !== action.payload) 
            state = filterContact
            return state;         
        default:
            return state
    }
}