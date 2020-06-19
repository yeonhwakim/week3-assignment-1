import React from 'react';

import { render } from '@testing-library/react';

import Page from './Page';

describe('<Page />', () => {
  test('To-do 타이틀이 보인다.', () => {
    const taskTitle = '';
    const tasks = [];
    const onChange = jest.fn();

    const { getByText } = render((
      <Page
        taskTitle={taskTitle}
        tasks={tasks}
        onChange={onChange}
      />
    ));

    getByText('To-do');
  });

  test('Input 컴포넌트와 List 컴포넌트', () => {
    const taskTitle = '';
    const tasks = [];
    const onChange = jest.fn();

    const { getByText } = render((
      <Page
        taskTitle={taskTitle}
        tasks={tasks}
        onChange={onChange}
      />
    ));

    getByText('추가');
    getByText('할 일이 없어요!');
  });
});
