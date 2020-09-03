import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'
import { Steps } from 'antd'

import styles from './StepsBuilder.module.css'

const StepsBuilder = ({ steps, size = 'small' }) => {
  const initialActiveStep =
    steps.findIndex((step) => step.initallySelected) || 0
  const [activeStep, setActiveStep] = useState(initialActiveStep)
  console.log('initiallyactivestep', steps, initialActiveStep)
  let match = useRouteMatch()
  console.log('match', match)
  return (
    <div className={styles.stepsContainer}>
      <Steps size={size} current={activeStep}>
        {steps.map((step) => (
          <Steps.Step title={step.title} />
        ))}
      </Steps>
      <Switch>
        <Route path={`${match.url}`} exact={true}>
          <Redirect to={`${match.path}/${steps[initialActiveStep].key}`} />
        </Route>
        {steps.map((step) => {
          return (
            <Route path={`${match.url}/${step.key}`}>{step.component}</Route>
          )
        })}
      </Switch>
    </div>
  )
}

export default StepsBuilder
