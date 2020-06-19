import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('할 일을 입력하고, 입력하면 입력창이 비워진다.', () => {
  test('할 일 라벨, 인풋창, 추가버튼이 있다.', () => {
    const { getByText, getByPlaceholderText } = render((
      <Input />
    ));

    getByText('할 일');
    getByText('추가');
    getByPlaceholderText('할 일을 입력해 주세요');
  });

  test('할 일을 입력한다.', () => {
    const { getByPlaceholderText } = render((
      <Input />
    ));

    const input = getByPlaceholderText('할 일을 입력해 주세요');

    expect(input).toHaveAttribute('value', '');
    fireEvent.change(input, { target: { value: '뭐라도 하기' } });
    expect(input.value).toBe('뭐라도 하기');
  });

  test('추가를 클릭하면 입력창이 초기화된다.', () => {
    const { getByText, getByPlaceholderText } = render((
      <Input />
    ));

    const input = getByPlaceholderText('할 일을 입력해 주세요');

    expect(input).toHaveAttribute('value', '');
    fireEvent.change(input, { target: { value: '뭐라도 하기' } });
    expect(input.value).toBe('뭐라도 하기');

    fireEvent.click(getByText('추가'));
    expect(input).toHaveAttribute('value', '');
  });
});
