import React from 'react';

import { render } from '@testing-library/react';

import List from './List';


describe('<List />', () => {
  test('할 일이 없으면 할 일이 없다고 보여주기', () => {
    const tasks = [];
    const { container } = render((
      <List
        tasks={tasks}
      />
    ));

    expect(container).toHaveTextContent('할 일이 없어요!');
  });

  test('할 일이 있으면 목록보여주기', () => {
    const tasks = [{
      id: 1,
      title: '책읽기',
    }];

    const { container } = render((
      <List
        tasks={tasks}
      />
    ));

    expect(container).toHaveTextContent('책읽기');
  });
});
