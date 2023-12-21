import { createReducer, on } from '@ngrx/store';
import { TaskList } from '../main-view/taskList';
import {
  addNewProjectAction,
  addNewTaskAction,
  deleteTaskAction,
  editTaskAction,
  toggleTaskCompleteAction,
  toggleTaskImportantAction,
} from './tasks.actions';

const initialState: TaskList[] = [
  {
    projectName: 'Errands',
    tasks: [
      {
        id: 1,
        taskName: 'Go shopping',
        completed: false,
        important: false,
      },
    ],
  },
];

export const TasksReducer = createReducer(
  initialState,
  on(addNewProjectAction, (state, { projectName }) => {
    let newProject: TaskList = {
      projectName: projectName,
      tasks: [],
    };
    return [...state, newProject];
  }),
  on(addNewTaskAction, (state, { projectName, task }) => {
    let projectIndex = state.findIndex(
      (item) => item.projectName === projectName
    );
    let updatedProjectTasks = [...state[projectIndex].tasks, task];
    let updatedState = [...state];
    updatedState[projectIndex] = {
      projectName: projectName,
      tasks: updatedProjectTasks,
    };
    return updatedState;
  }),
  on(deleteTaskAction, (state, { task }) => {
    const updatedState = state.map((project) => {
      const updatedTasks = project.tasks.filter((item) => item.id !== task.id);
      return { ...project, tasks: updatedTasks };
    });
    return updatedState;
  }),
  on(toggleTaskImportantAction, (state, { task }) => {
    const updatedState = state.map((project) => {
      const updatedTasks = project.tasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, important: !task.important };
        }
        return item;
      });
      return { ...project, tasks: updatedTasks };
    });
    return updatedState;
  }),
  on(toggleTaskCompleteAction, (state, { task }) => {
    const updatedState = state.map((project) => {
      const updatedTasks = project.tasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return { ...project, tasks: updatedTasks };
    });
    return updatedState;
  }),
  on(editTaskAction, (state, { task, newTaskName }) => {
    const updatedState = state.map((project) => {
      const updatedTasks = project.tasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, taskName: newTaskName };
        }
        return item;
      });
      return { ...project, tasks: updatedTasks };
    });
    return updatedState;
  })
);
