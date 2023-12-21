import { createReducer, on } from '@ngrx/store';
import { TaskList } from '../main-view/taskList';
import {
  addNewProjectAction,
  addNewTaskAction,
  deleteTaskAction,
} from './tasks.actions';

const initialState: TaskList[] = [
  {
    projectName: '',
    tasks: [],
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
  on(deleteTaskAction, (state, { projectName, task }) => {
    let projectIndex = state.findIndex(
      (item) => item.projectName === projectName
    );
    let taskIndex = state[projectIndex].tasks.findIndex(
      (item) => (item.id === task.id)
    );
    let updatedState = [...state];
    updatedState[projectIndex].tasks.splice(taskIndex, 1);
    return updatedState;
  })
);
