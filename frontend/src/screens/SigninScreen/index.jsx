import React from 'react';

import "./styles.scss"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from 'actions/user.action';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { useEffect } from 'react';

function SigninScreen(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const userSignin = useSelector(state => state.userSignin)
  const { loading, error, userInfo } = userSignin

  const handleFormSubmit = (e) => {
    e.preventDefault()

    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (userInfo) {
      if (!error) {
        props.history.push("/")
      }
    }
  }, [userInfo, props.history, error])

  return (
    <div className="signin-screen">
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Sign In</h1>
        </div>

        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}

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
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>

        <div>
          <div>
            New customer? {" "}
            <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SigninScreen;