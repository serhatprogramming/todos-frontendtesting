import { render, screen } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";
import userEvent from "@testing-library/user-event";

test("calls setTask when textbox value changes", async () => {
  const user = userEvent.setup();
  const mockSetTask = jest.fn();

  render(
    <NewTodoForm handleNewTodo={() => {}} task="" setTask={mockSetTask} />
  );

  const textbox = screen.getByRole("textbox");
  await user.type(textbox, "add");
  // mockSetTask is supposed to be called in every keypress
  expect(mockSetTask).toHaveBeenCalledWith("a");
  expect(mockSetTask).toHaveBeenCalledWith("d");
  expect(mockSetTask).toHaveBeenCalledWith("d");
  // mockSetTask is supposed to be called 3 times in total
  expect(mockSetTask.mock.calls).toHaveLength(3);
});

test("calls handleNewTodo when submit the form", async () => {
  const mockHandleNewTodo = jest.fn((e) => e.preventDefault());
  const user = userEvent.setup();
  const mockSetTask = jest.fn();

  render(
    <NewTodoForm
      handleNewTodo={mockHandleNewTodo}
      task=""
      setTask={mockSetTask}
    />
  );

  const textbox = screen.getByRole("textbox");
  const submitButton = screen.getByText("Add to the list");

  await user.type(textbox, "x");
  await user.click(submitButton);

  expect(mockHandleNewTodo.mock.calls).toHaveLength(1);
  expect(mockSetTask).toHaveBeenCalledWith("x");
  expect(mockSetTask.mock.calls).toHaveLength(1);
});
