import React, { useReducer } from 'react'
import Immutable from 'immutable'
import { Steps, Step } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
} from 'react-router-dom'

import StepsBuilder from '../../../common/steps-builder/StepsBuilder'

import AboutYou from './about-you/AboutYou'
import Options from './options/Options'

/*const steps = [
  { title: 'About you', key: 'about', component: <AboutYou /> },
  {
    title: 'Options',
    initallySelected: true,
    key: 'options',
    component: <Options />,
  },
  { title: 'Funding', key: 'funding', component: <AboutYou /> },
  { title: 'Review', key: 'review', component: <AboutYou /> },
  { title: 'Terms', key: 'terms', component: <AboutYou /> },
]*/
//import * as actions from '../actions/todo-actions'
const STEPS_SET_CURRENT_STEP = 'STEPS_SET_CURRENT_STEP'
const STEPS_SET_STEP_COMPLETION_STATUS = 'STEPS_SET_STEP_COMPLETION_STATUS'
const STEPS_SAVE_STEP_DATA = 'STEPS_SAVE_STEP_DATA'
const STEPS_GOTO_NEXT = 'STEPS_GOTO_NEXT'
const STEPS_GOTO_PREVIOUS = 'STEPS_GOTO_PREVIOUS'

const setCurrentStep = (key) => ({
  type: STEPS_SET_CURRENT_STEP,
  key,
})

const setStepCompletionStatus = (key, status) => ({
  type: STEPS_SET_STEP_COMPLETION_STATUS,
  key,
  status,
})

const saveStepData = (data, key) => ({
  type: STEPS_SAVE_STEP_DATA,
  key,
  data,
})

const goToNext = (key) => ({
  type: STEPS_GOTO_NEXT,
  key,
})

const goToPrevious = (key) => ({
  type: STEPS_GOTO_PREVIOUS,
  key,
})

const formData = {
  aboutYou: {
    firstName: { value: '', display: '' },
    lastName: { value: '', display: '' },
  },
}

const initialState = {
  currentStepIndex: 0,
  steps: [
    {
      title: 'About you',
      data: {},
      complete: false,
      key: 'about',
      component: <AboutYou />,
    },
    {
      title: 'Options',
      data: {},
      complete: false,
      initallySelected: true,
      key: 'options',
      component: <Options />,
    },
    {
      title: 'Funding',
      data: {},
      complete: false,
      key: 'funding',
      component: <AboutYou />,
    },
    {
      title: 'Review',
      data: {},
      complete: false,
      key: 'review',
      component: <AboutYou />,
    },
    {
      title: 'Terms',
      data: {},
      complete: false,
      key: 'terms',
      component: <AboutYou />,
    },
  ],
}

const actions = {
  STEPS_SET_CURRENT_STEP,
  STEPS_SET_STEP_COMPLETION_STATUS,
  STEPS_SAVE_STEP_DATA,
  STEPS_GOTO_NEXT,
  STEPS_GOTO_PREVIOUS,
  goToNext,
  goToPrevious,
}
export const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STEPS_SET_CURRENT_STEP: {
      const index = state.steps.findIndex((step) => step.key === action.key)
      return {
        ...state,
        currentStepIndex: index,
      }
    }
    case actions.STEPS_SET_STEP_COMPLETION_STATUS: {
      const stepIndex = state.steps.findIndex((step) => step.key === action.key)
      return {
        ...state,
        steps: state.steps.map((step, index) =>
          index === stepIndex ? { ...step, complete: action.status } : step
        ),
      }
    }
    case actions.STEPS_SAVE_STEP_DATA: {
      const stepIndex = state.steps.findIndex((step) => step.key === action.key)
      return {
        ...state,
        steps: state.steps.map((step, index) =>
          index === stepIndex
            ? { ...step, data: Immutable.Map({}).merge(action.data) }
            : step
        ),
      }
    }
    case actions.STEPS_GOTO_NEXT: {
      const stepIndex = state.steps.findIndex((step) => step.key === action.key)
      return {
        ...state,
        currentStepIndex:
          stepIndex === state.steps.length - 1
            ? state.currentStepIndex
            : state.currentStepIndex + 1,
      }
    }
    case actions.STEPS_GOTO_PREVIOUS: {
      const stepIndex = state.steps.findIndex((step) => step.key === action.key)
      return {
        ...state,
        currentStepIndex:
          stepIndex === 0 ? state.currentStepIndex : state.currentStepIndex - 1,
      }
    }
  }
}
export const StepContext = React.createContext({})

const StepBuilderViewContent = ({}) => {
  const [stepsState, dispatch] = useReducer(stepsReducer, initialState)
  const history = useHistory()
  let match = useRouteMatch()
  const goToNextStep = (key) => {
    dispatch(actions.goToNext(key))
    const stepIndex = stepsState.steps.findIndex((step) => step.key === key)
    const nextStepKey = stepsState.steps[stepIndex + 1].key
    history.push(`${match.url}/${nextStepKey}`)
  }
  const goToPreviousStep = (key) => {
    dispatch(actions.goToPrevious(key))
    const stepIndex = stepsState.steps.findIndex((step) => step.key === key)
    const previousStepKey = stepsState.steps[stepIndex - 1].key
    history.push(`${match.url}/${previousStepKey}`)
  }
  const { Step } = Steps
  return (
    <StepContext.Provider value={{ goToNextStep, goToPreviousStep }}>
      <Steps current={stepsState.currentStepIndex}>
        <Step title="About you" />
        <Step title="Options" />
        <Step title="Funding" />
        <Step title="Review" />
        <Step title="Terms" />
      </Steps>

      <Switch>
        <Route path={`${match.url}`} exact={true}>
          <Redirect to={`${match.path}/about`} />
        </Route>
        {initialState.steps.map((step) => {
          return (
            <Route path={`${match.url}/${step.key}`}>{step.component}</Route>
          )
        })}
      </Switch>
    </StepContext.Provider>
  )
}

export default StepBuilderViewContent
