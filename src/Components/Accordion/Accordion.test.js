import { render, cleanup} from '@testing-library/react'
import Accordion from "./Accordion"

afterAll(() => cleanup);
test("render accordion component", () =>{
  const {getByTestId} = render(<Accordion></Accordion>);
  expect(getByTestId("accordion")).toBeInTheDocument();
})