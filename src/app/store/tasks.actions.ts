import { createAction, props } from '@ngrx/store';
import { Task } from '../main-view/taskList';

// we create all the necessary actions. In brackets the first is the name of the object
// that the action will take care of and the second is action description
// Props define payload of the action
export const addNewProjectAction = createAction(
  '[Project] Add New Project',
  props<{ projectName: string }>()
);

export const addNewTaskAction = createAction(
  '[Task] Add New Task',
  props<{ projectName: string; task: Task }>()
);
export const deleteTaskAction = createAction(
  '[Task] Delete Task',
  props<{ task: Task }>()
);
export const toggleTaskCompleteAction = createAction(
  '[Task] Toggle Task Complete',
  props<{ task: Task }>()
);
export const toggleTaskImportantAction = createAction(
  '[Task] Toggle Task Important',
  props<{ task: Task }>()
);
export const editTaskAction = createAction(
  '[Task] Edit Task',
  props<{ task: Task; newTaskName: string }>()
);
