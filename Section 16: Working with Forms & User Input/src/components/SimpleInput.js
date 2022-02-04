// import { useEffect, useRef, useState } from 'react'
import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))

  // const nameInputRef = useRef() // Only grabs when needed
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  // const [formIsValid, setFormIsValid] = useState(false)
  // const [enteredName, setEnteredName] = useState('') // Updates every key
  // stroke const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  // Updates every keystroke
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  // const enteredNameIsValid = enteredName.trim() !== ''
  // const nameInputIsValid = !enteredNameIsValid && enteredNameTouched

  // const enteredEmailIsValid =
  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail) const
  // emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false

  // useEffect(() => {
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }
  // }, [enteredNameIsValid])

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log('Name Input is valid!')
  //   }
  // }, [enteredNameIsValid])

  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value)
  //
  //   if (event.target.value.trim() !== '') {
  //     setEnteredNameIsValid(true)
  //     return
  //   }
  // }

  // const nameInputBlurHandler = event => {
  //   setEnteredNameTouched(true)
  //
  //   if (enteredName.trim() === '') {
  //     setEnteredNameIsValid(false)
  //     return
  //   }
  // }

  // const emailInputChangeHandler = event => {
  //   setEnteredEmail(event.target.value)
  // }

  // const emailInputBlurHandler = event => {
  //   setEnteredEmailTouched(true)
  // }

  const formSubmissionHandler = event => {
    event.preventDefault()

    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false)
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }

    // setEnteredNameIsValid(true)
    // console.log(enteredName)

    // If we want to set value to empty string
    // setEnteredName('')
    // setEnteredNameTouched(false)
    // setEnteredEmail('')
    // setEnteredEmailTouched(false)
    resetNameInput()
    resetEmailInput()

    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue)
    // Not ideal, should not manipulate the dom
    // nameInputRef.current.value = ''
  }

  const inputClasses = nameInputHasError && emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}/>
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
        <label htmlFor="email">Your Email</label>
        <input
          // ref={nameInputRef}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}/>
        {emailInputHasError && (
          <p className="error-text">Must be valid Email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
