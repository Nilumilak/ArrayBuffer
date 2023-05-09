import Swordsman from '../Swordsman';

test('Base Swordsman Attack', () => {
    const character = new Swordsman('Name');
    expect(character.attack).toBe(40);
});

test('Base Swordsman Defence', () => {
    const character = new Swordsman('Name');
    expect(character.defence).toBe(10);
});
