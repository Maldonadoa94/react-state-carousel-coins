import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

 // Smoke Test
 test('Carousel component renders without crashing', () => {
  render(<Carousel />);
});

  // Snapshot Test
test('Carousel component matches the snapshot', () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});


// New test to check the left arrow functionality
test('clicking the left arrow moves to the previous image', () => {
  const { getByTestId } = render(<Carousel />);
  
  // Click the right arrow to move to the second image
  fireEvent.click(getByTestId('right-arrow'));

  // Click the left arrow to move back to the first image
  fireEvent.click(getByTestId('left-arrow'));

  // Check that the image displayed is the first image
  expect(getByTestId('carousel-image')).toHaveAttribute('src', 'path-to-first-image'); // Replace with actual path or alt text
});
