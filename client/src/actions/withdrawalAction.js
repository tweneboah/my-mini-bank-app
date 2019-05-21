const withdrawalAction = (id,name, amounWithdrawing,date, time) => {
   
    return {

        type: 'WITHDRAWAL',
        payload: {
            id:id,
         name:name,
         amounWithdrawing: amounWithdrawing,
         date: date,
         time: time
        }
    }
}

export default withdrawalAction;