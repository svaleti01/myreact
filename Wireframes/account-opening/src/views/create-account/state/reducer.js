
import Immutable from 'immutable';
import * as actions from './actions';

export const initialState = {
    currentStepIndex: 0,
    steps: [
        {
            title: 'Customer Basic Info',
            data: {},
            complete: true,
            initallySelected: true,
            key: 'basicInfo',
        },
        {
            title: 'Account Setup',
            data: {},
            complete: false,
            key: 'accountSetup',
        },
        {
            title: 'Terms & Conditions',
            data: {},
            complete: false,
            key: 'termsAndConditions',
        },
        {
            title: 'Review & Submit',
            data: {},
            complete: false,
            key: 'reviewAndSubmit',
        },
        {
            title: 'Post Account Opening Fulfillment',
            data: {},
            complete: false,
            key: 'postAccountOpening',
        },
        {
            title: 'Feedback',
            data: {},
            complete: false,
            key: 'feedback'
        }
    ]
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
            console.log('step data 2', action.data)
            return {
                ...state,
                steps: state.steps.map((step, index) =>
                    index === stepIndex
                        ? { ...step, data: Immutable.Map({}).merge(action.data).toJS() }
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