import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('restaurantInfos가 3개 주어졌을 때', () => {
    const restaurantInfos = [
      {
        id: 1,
        name: '마녀주방',
        type: '한식',
        location: '서울시 강남구',
      },
      {
        id: 2,
        name: '시카고피자',
        type: '양식',
        location: '이태원동',
      },
      {
        id: 3,
        name: '키와미',
        type: '일식',
        location: '분당구 정자동',
      },
    ];

    it('restaurantInfo 리스트가 잘 출력된다.', () => {
      const { container } = render(<List restaurantInfos={restaurantInfos} />);

      restaurantInfos.forEach(({ name, type, location }) => {
        expect(container).toHaveTextContent(`${name} | ${type} | ${location}`);
      });
    });
  });
});