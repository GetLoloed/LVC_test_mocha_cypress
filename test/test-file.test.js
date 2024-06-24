import search from "./search.js";
import {expect} from 'chai';

describe('functionnalité de recherche', function() {
    it('doit retourner un resulter selon les elements entrer', function() {
        const results = search('Paris', 'Lyon', '2024-06-24');
        expect(Array.isArray(results), 'Resultat doit etre un tableau');
        expect(results.length > 0, 'résultat ne doit pas etre un tableau vide');
    });

});
