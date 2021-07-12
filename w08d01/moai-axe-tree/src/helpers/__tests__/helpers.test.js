import { announceResult, randomRobotSelector } from '../helpers';

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('randomRobotSelector function', () => {

  test('given cheating is "true", function returns winning choice', () => {
    const playerSelection = 'Axe';
    const cheating = true;

    const actual = randomRobotSelector(playerSelection, cheating);
    const expected = 'Moai';

    expect(actual).toBe(expected);
  });

  test('given cheating is "false", function returns a valid choice', () => {
    const playerSelection = 'Axe';
    const cheating = false;

    const actual = randomRobotSelector(playerSelection, cheating);
    // Moai, Axe, Tree
    const options = ['Moai', 'Axe', 'Tree'];
    // expect(options.includes(actual)).toBe(true);
    expect(options).toContain(actual);
  });

});
