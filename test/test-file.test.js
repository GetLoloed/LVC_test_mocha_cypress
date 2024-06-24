const assert = require('assert');
const search = require('../search.js');

describe('functionnalité de recherche', function() {
    it('doit retourner un resulter selon les elements entrer', function() {
        const results = search('Paris', 'Lyon', '2024-06-24');
        assert(Array.isArray(results), 'Resultat doit etre un tableau');
        assert(results.length > 0, 'résultat ne doit pas etre un tableau vide');
    });

});