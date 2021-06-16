import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import "./styles.scss"
import { updateDetailsUser } from "actions/user.action";
import { useEffect } from 'react';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from 'constant/user.constant';

function ProfileScreen(props) {
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  const userUpdate = useSelector(state => state.userUpdate)
  const { loading, error, success } = userUpdate

  const dispatch = useDispatch()
  const [name, setName] = useState(userInfo.name || "")
  const [password, setPassword] = useState("********")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [active, setActive] = useState("")
  const email = userInfo.email

  const handleFormSubmit = (e) => {
    e.preventDefault()

    dispatch(updateDetailsUser({ _id: userInfo._id, name, email, password, confirmPassword }))
  }

  const defaultDetailsUser = () => {
    setName(userInfo.name)
    setPassword("********")
    setConfirmPassword("")
  }

  useEffect(() => {
    switch (active) {
      case "name":
        defaultDetailsUser()
        setName("")
        break
      case "password":
        defaultDetailsUser()
        setPassword("")
        break
      default:
        defaultDetailsUser()
        break
    }
  }, [active])

  useEffect(() => {
    if (success) {
      setActive("")
    }
  }, [success])

  useEffect(() => {
    dispatch({ type: USER_UPDATE_PROFILE_RESET })
  }, [props.location, dispatch])

  return (
    <div className="profile-screen">
      <div className="profile-screen__container">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter name"
              value={name}
              disabled={!(active === "name")}
              required
              className={classNames({ "active": active === "name" })}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <i onClick={() => setActive("name")} className="fas fa-cog" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              disabled={true}
            ></input>
            <i className="fas fa-cog none" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              placeholder="Enter new password"
              value={password}
              disabled={!(active === "password")}
              required
              className={classNames({ "active": active === "password" })}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <i onClick={() => setActive("password")} className="fas fa-cog" />
          </div>

          {loading && <LoadingBox />}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          {success && <MessageBox>User profile updated successful</MessageBox>}

          <div id="confirmPassword" className={classNames({ "displayOn": active })}>
            <label htmlFor="confirmPassword">Confirm your password to change profile</label>
            <input
              id="confirmPassword"
              type="text"
              placeholder="Confirm password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <div>
              <button type="submit" className="primary" >
                Update
              </button>
              <button type="button" className="primary" onClick={() => setActive("")}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileScreen;