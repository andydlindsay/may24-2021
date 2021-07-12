import React from 'react';
import Game from '../Game';
import { render, fireEvent, prettyDOM } from '@testing-library/react';

describe('tests for Game component', () => {

  test('clicking on the robot head toggles the cheating state', () => {
    const { container, getByTestId, debug } = render(<Game />);
    // console.log(container);
    // console.log(prettyDOM(container));
    // debug();

    // getByTestId(container, 'robot-head');
    const robotHeadIcon = getByTestId('robot-head');

    fireEvent.click(robotHeadIcon);
    
    expect(robotHeadIcon).toHaveClass('cheating');
    
    fireEvent.click(robotHeadIcon);
    
    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
