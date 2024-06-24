function search(origin, destination, date) {
    if (!origin || !destination || !date) {
        throw new Error('Invalid query');
    }
    return [
        { train: 'TGV', time: '10:00', price: 45 },
        { train: 'Intercités', time: '12:00', price: 35 }
    ];
}

module.exports = search;