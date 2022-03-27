import { render, screen } from '@testing-library/react';
import HelloWorld from '../coponents/hello-world';

describe('<HelloWorld/>', () => {
    it('should render without crashing', () => {
      const { container } = render(<HelloWorld name={'World'}/>);
    
      expect(container).toHaveTextContent('Hello World');
    });
  });