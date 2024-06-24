const { expect } = require('chai');
const { filterStations } = require('../searchBar.js');

describe('Search Bar', () => {
    const stations = ['Paris Gare du Nord', 'Lyon Part-Dieu', 'Marseille Saint-Charles', 'Lille Flandres', 'Bordeaux Saint-Jean'];

    it('should return a list of stations that match the input', () => {
        const result = filterStations(stations, 'Paris');
        expect(result).to.deep.equal(['Paris Gare du Nord']);
    });

    it('should return multiple stations that match the input', () => {
        const result = filterStations(stations, 'Saint');
        expect(result).to.deep.equal(['Marseille Saint-Charles', 'Bordeaux Saint-Jean']);
    });

    it('should return an empty list if no stations match the input', () => {
        const result = filterStations(stations, 'Nice');
        expect(result).to.deep.equal([]);
    });

    it('should be case insensitive', () => {
        const result = filterStations(stations, 'paris');
        expect(result).to.deep.equal(['Paris Gare du Nord']);
    });

    it('should return an empty list if the input is an empty string', () => {
        const result = filterStations(stations, '');
        expect(result).to.deep.equal([]);
    });
});
