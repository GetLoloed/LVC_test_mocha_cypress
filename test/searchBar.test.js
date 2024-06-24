import {expect} from 'chai';

// Définition de la fonction directement dans le fichier de test
function filterStations(stations, query) {
    if (!query) {
        return [];
    }
    query = query.toLowerCase();
    return stations.filter(station => station.toLowerCase().includes(query));
}

// Les tests pour la fonction filterStations
describe('Barre de recherche', () => {
    const gares = ['Paris Gare du Nord', 'Lyon Part-Dieu', 'Marseille Saint-Charles', 'Lille Flandres', 'Bordeaux Saint-Jean'];

    it('doit retourner une liste de gares qui correspondent à l\'entrée', () => {
        const resultat = filterStations(gares, 'Paris');
        expect(resultat).to.deep.equal(['Paris Gare du Nord']);
    });

    it('doit retourner plusieurs gares qui correspondent à l\'entrée', () => {
        const resultat = filterStations(gares, 'Saint');
        expect(resultat).to.deep.equal(['Marseille Saint-Charles', 'Bordeaux Saint-Jean']);
    });

    it('doit retourner une liste vide si aucune gare ne correspond à l\'entrée', () => {
        const resultat = filterStations(gares, 'Nice');
        expect(resultat).to.deep.equal([]);
    });

    it('doit être insensible à la casse', () => {
        const resultat = filterStations(gares, 'paris');
        expect(resultat).to.deep.equal(['Paris Gare du Nord']);
    });

    it('doit retourner une liste vide si l\'entrée est une chaîne vide', () => {
        const resultat = filterStations(gares, '');
        expect(resultat).to.deep.equal([]);
    });
});
