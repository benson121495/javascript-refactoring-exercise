

const processTransactions = transActions => {
    if (!transActions) throw new Error("Undefined collection of transactions");
    let txCount = {};
    transActions.forEach(tx => txCount[tx] = (txCount[tx] || 0) + 1);
    let sortedTx = Object.entries(txCount).sort(([a, countA], [b, countB]) => countB - countA || a.localeCompare(b));  
    return sortedTx.map(([key, value]) => `${key} ${value}`);
};

module.exports = processTransactions;

