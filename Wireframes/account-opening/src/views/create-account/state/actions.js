export const STEPS_SET_CURRENT_STEP = 'STEPS_SET_CURRENT_STEP'
export const STEPS_SET_STEP_COMPLETION_STATUS = 'STEPS_SET_STEP_COMPLETION_STATUS'
export const STEPS_SAVE_STEP_DATA = 'STEPS_SAVE_STEP_DATA'
export const STEPS_GOTO_NEXT = 'STEPS_GOTO_NEXT'
export const STEPS_GOTO_PREVIOUS = 'STEPS_GOTO_PREVIOUS'

export const setCurrentStep = (key) => ({
  type: STEPS_SET_CURRENT_STEP,
  key,
})

export const setStepCompletionStatus = (key, status) => ({
  type: STEPS_SET_STEP_COMPLETION_STATUS,
  key,
  status,
})

export const saveStepData = (key, data) => ({
  type: STEPS_SAVE_STEP_DATA,
  key,
  data,
})

export const goToNext = (key) => ({
  type: STEPS_GOTO_NEXT,
  key,
})

export const goToPrevious = (key) => ({
  type: STEPS_GOTO_PREVIOUS,
  key,
})