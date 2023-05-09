import Magician from '../Magician';

test('Base Magician Attack', () => {
    const character = new Magician('Name');
    expect(character.attack).toBe(10);
});

test('Base Magician Defence', () => {
    const character = new Magician('Name');
    expect(character.defence).toBe(40);
});
