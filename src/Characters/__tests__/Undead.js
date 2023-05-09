import Undead from '../Undead';

test('Base Undead Attack', () => {
    const character = new Undead('Name');
    expect(character.attack).toBe(25);
});

test('Base Undead Defence', () => {
    const character = new Undead('Name');
    expect(character.defence).toBe(25);
});
