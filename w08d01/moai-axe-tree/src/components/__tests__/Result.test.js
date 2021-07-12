import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

// import the library that we are faking
import axios from 'axios';

// tell jest to fake the library
jest.mock('axios');

// setup some fake data
const data = [
  {
    id: 1,
    name: "Alice",
    points: 15
  },
  {
    id: 2,
    name: "Bob",
    points: 10
  },
  {
    id: 3,
    name: "Carolina",
    points: 5
  }
];

test('can display the results of an API request', () => {
  const {getByTestId, findByText} = render(<Result status="Waiting" />);

  const button = getByTestId('high-scores');

  axios.get.mockResolvedValue({ data });

  fireEvent.click(button);

  // return findByText('Carol', { exact: false }).then((res) => {
  //   // console.log(res);
  //   expect(res).toHaveTextContent('Dean');
  // });
  return findByText('Carol', { exact: false });
});

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
