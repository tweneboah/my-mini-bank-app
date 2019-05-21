
const initialState = {
    depositAccount:[],
    withdrawalAccount: [],
    totalAcount: [],
    customers: []

}
const accountReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DEPOSIT':
        return {
            ...state,
          depositAccount: [...state.depositAccount,  parseInt(action.payload.amountDeposited)],
          customers: [...state.customers, action.payload]
        }
       case 'WITHDRAWAL':
       return {
           ...state,
           withdrawalAccount: [...state.withdrawalAccount, parseInt(action.payload.amounWithdrawing)],
           customers: [...state.customers, action.payload]
       }
        default:
        return state
    }
}

export default accountReducer;