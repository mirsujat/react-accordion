import { render, cleanup} from '@testing-library/react'
import AccordionSection from './AccordionSection';

afterEach(() => cleanup);
test("render AccordionSection component", () =>{
  const {getByTestId} = render(<AccordionSection></AccordionSection>);
  expect(getByTestId("accordion_button")).toBeInTheDocument();
});

