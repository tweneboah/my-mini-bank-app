
const depositAction = (id,name, amountDeposited,date, time) => {
   
    return {

        type: 'DEPOSIT',
        payload: {
            id:id,
         name:name,
         amountDeposited: amountDeposited,
         time: time,
         date: date
        }
    }
}

export default depositAction;