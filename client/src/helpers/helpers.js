   //SUM
 const displayingTotalDeposit = () => {
    let initialDeposit = 0
    this.props.account.depositAccount.forEach((item) => {
        return initialDeposit += item
    })

    return initialDeposit
}

export default displayingTotalDeposit