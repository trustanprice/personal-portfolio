import { render, screen, fireEvent } from "@testing-library/react";
import ExpandableDetails from "./ExpandableDetails";

// jsdom has no layout engine, so fake the measured height of the description.
// (The collapsed height and slack fall back to 150px / 50px without the CSS.)
const realRect = Element.prototype.getBoundingClientRect;

function fakeTextHeight(height) {
  jest.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(function rect() {
    if (this.classList.contains("expandable-inner")) {
      if (height instanceof Error) throw height;
      return { top: 0, left: 0, right: 300, bottom: height, width: 300, height, x: 0, y: 0 };
    }
    return realRect.call(this);
  });
}

beforeAll(() => {
  // jsdom doesn't implement line boxes; with none, the cut stays at the target height.
  if (!Range.prototype.getClientRects) Range.prototype.getClientRects = () => [];
});

afterEach(() => jest.restoreAllMocks());

const renderDetails = () =>
  render(
    <ExpandableDetails>
      <p>First paragraph of a project description.</p>
      <p>Second paragraph.</p>
    </ExpandableDetails>
  );

test("a short description renders in full with no button", () => {
  fakeTextHeight(180); // only 30px past the 150px collapsed height: not worth collapsing
  const { container } = renderDetails();
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
  expect(container.firstChild).toHaveClass("expandable");
  expect(container.firstChild).not.toHaveClass("is-collapsible");
  expect(screen.getByText("Second paragraph.")).toBeInTheDocument();
});

test("a long description collapses behind an accessible Show more button", () => {
  fakeTextHeight(420);
  const { container } = renderDetails();
  const button = screen.getByRole("button", { name: /show more/i });
  const region = container.querySelector(".expandable-content");
  expect(container.firstChild).toHaveClass("is-collapsible");
  expect(button).toHaveAttribute("aria-expanded", "false");
  expect(button).toHaveAttribute("aria-controls", region.id);
  expect(region.id).not.toBe("");
});

test("the button expands and collapses the description", () => {
  fakeTextHeight(420);
  const { container } = renderDetails();
  fireEvent.click(screen.getByRole("button", { name: /show more/i }));
  const button = screen.getByRole("button", { name: /show less/i });
  expect(button).toHaveAttribute("aria-expanded", "true");
  expect(container.firstChild).toHaveClass("is-expanded");
  fireEvent.click(button);
  expect(screen.getByRole("button", { name: /show more/i })).toHaveAttribute("aria-expanded", "false");
  expect(container.firstChild).not.toHaveClass("is-expanded");
});

test("if measuring fails, the text simply stays in full", () => {
  fakeTextHeight(new Error("no layout"));
  const { container } = renderDetails();
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
  expect(container.firstChild).not.toHaveClass("is-collapsible");
});
