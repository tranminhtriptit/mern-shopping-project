import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import "./styles.scss"
import { register, registerThrowError } from 'actions/user.action';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';

function RegisterScreen(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassowrd, setConfirmPassword] = useState("")
  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { userInfo, loading, error } = userRegister

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassowrd) {
      dispatch(registerThrowError("Password not confirmed!"))
    } else {
      dispatch(register(name, password, email))
    }
  }

  useEffect(() => {
    if (userInfo) {
      if (!error) {
        props.history.push("/")
      }
    }
  }, [userInfo, props.history, error])

  return (
    <div className="register-screen">
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Sign In</h1>
        </div>

        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            placeholder="Enter name"
            required
            onChange={e => setName(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={e => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={e => setConfirmPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <label />
          <button className="primary" type="submit">
            Register
          </button>
        </div>

        <div>
          <div>
            Already have an account? {" "}
            <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;