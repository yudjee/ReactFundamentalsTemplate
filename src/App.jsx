import React, { useEffect } from "react";

import { Courses, Header, CourseForm } from "./components";

import styles from "./App.module.css";

// TODO: will be removed after API calls be added
import { Login } from "./components/Login";
import { CourseInfo } from "./components/CourseInfo";
import { Registration } from "./components/Registration";
import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesThunk } from "./store/thunks/coursesThunk";
import { getAuthorsThunk } from "./store/thunks/authorsThunk";
import { getUserThunk } from "./store/thunks/userThunk";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { getUserTokenSelector } from "./store/selectors";

function App() {
  const token = useSelector(getUserTokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesThunk());
    dispatch(getAuthorsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getUserThunk(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={token ? <Courses /> : <Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseInfo />} />

          <Route
            path="/courses/add"
            element={
              <PrivateRoute>
                <CourseForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/courses/update/:courseId"
            element={
              <PrivateRoute>
                <CourseForm />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
