import * as React from 'react';
import { render } from '@testing-library/react';

import { Login } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Login  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Login />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
