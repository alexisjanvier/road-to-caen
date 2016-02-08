import city from './paris'
import { assert } from 'chai';

describe('city', () => {
        it('should export "Paris" as city', () => {
            assert.equal(city, 'Paris');
        });
});
