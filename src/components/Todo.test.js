import { render, screen } from "@testing-library/react";
import Todo from "./Todo";
import "@testing-library/jest-dom";

test("renders correct task text", () => {
  const todo = { task: "Sample Task", done: false };
  render(<Todo todo={todo} />);

  const taskText = screen.getByText("Task: Sample Task. Completed? No");
  const taskText2 = screen.getByText(
    `Task: ${todo.task}. Completed? ${todo.done ? "Yes" : "No"}`
  );
  expect(taskText).toBeDefined();
  expect(taskText2).toBeDefined();
});

test("check correct render with querySelector", () => {
  const todo = { task: "Sample Task", done: false };
  const { container } = render(<Todo todo={todo} />);
  const div = container.querySelector(".task-container");
  expect(div).toHaveTextContent("Task: Sample Task. Completed? No");
});

test("check correct render with getByTestId", () => {
  const todo = { task: "Sample Task", done: false };
  render(<Todo todo={todo} />);

  const div = screen.getByTestId("task-id");
  expect(div).toHaveTextContent("Task: Sample Task. Completed? No");
});

test("check correct render with querySelector by targeting id", () => {
  const todo = { task: "Sample Task", done: false };
  const { container } = render(<Todo todo={todo} />);
  const div = container.querySelector("#task-id");
  expect(div).toHaveTextContent("Task: Sample Task. Completed? No");
});
