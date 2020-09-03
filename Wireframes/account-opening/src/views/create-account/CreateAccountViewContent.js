import React, { useReducer } from 'react'
import { Steps, Step } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
} from 'react-router-dom'

import * as actions from './state/actions';
import { initialState, stepsReducer} from './state/reducer';

import CustomerBasic from './CustomerBasicInfo/CustomerBasic'
import AccountSetupView from './account-setup/AccountSetupView'
import ComponentToPrint from './Terms&Condition/ComponentToPrint'
import FeedbackView from './Feedback/FeedbackView'

import './CreateAccountViewContent.module.css';
import ReviewAndSubmitView from './review-and-submit/ReviewSubmit'
import PostAccountFulfillmentView from './post-account-fulfillment/PostAccountFulfillmentView';

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

export const stepsConfig = {
  currentStepIndex: 0,
  steps: [
      {
          title: 'Customer Basic Info',
          key: 'basicInfo',
          component: <CustomerBasic />,
      },
      {
          title: 'Account Setup',
          key: 'accountSetup',
          component: <AccountSetupView />,
      },
      {
          title: 'Terms & Conditions',
          key: 'termsAndConditions',
          component: <ComponentToPrint />,
      },
      {
          title: 'Review & Submit',
          key: 'reviewAndSubmit',
          component: <ReviewAndSubmitView />,
      },
      {
          title: 'Post Account Opening Fulfillment',
          key: 'postAccountOpening',
          component: <PostAccountFulfillmentView />,
      },
      {
          title: 'Feedback',
          key: 'feedback',
          component: <FeedbackView />,
      }
  ]
}

export const StepContext = React.createContext({})

const CreateAccountViewContent = ({ }) => {
  const [stepsState, dispatch] = useReducer(stepsReducer, initialState)
  const history = useHistory()
  let match = useRouteMatch()
  const goToNextStep = (key, data) => {
    console.log(data);
    dispatch(actions.goToNext(key));
    dispatch(actions.saveStepData(key, data));
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
    <div style={{ margin: '10px 15px' }}>
      <StepContext.Provider value={{ goToNextStep, goToPreviousStep, state: stepsState }}>
        <Steps current={stepsState.currentStepIndex} size="small" type="navigation">
          <Step title="Customer Basic Info" />
          <Step title="Account Setup" />
          <Step title="Terms & Conditions" />
          <Step title="Review & Submit" />
          <Step title="Post Account Opening Fulfillment" />
          <Step title="Feedback" />
        </Steps>

        <Switch>
          <Route path={`${match.url}`} exact={true}>
            <Redirect to={`${match.path}/basicInfo`} />
          </Route>
          {stepsConfig.steps.map((step) => {
            return (
              <Route path={`${match.url}/${step.key}`}>{step.component}</Route>
            )
          })}
        </Switch>
      </StepContext.Provider>
    </div>
  )
}

export default CreateAccountViewContent
