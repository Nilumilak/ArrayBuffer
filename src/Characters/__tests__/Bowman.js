import Bowman from '../Bowman';

test('Base Bowman Attack', () => {
    const character = new Bowman('Name');
    expect(character.attack).toBe(25);
});

test('Base Bowman Defence', () => {
    const character = new Bowman('Name');
    expect(character.defence).toBe(25);
});
