import React, { useState } from "react";

import { Courses, Header } from "./components";

import styles from "./App.module.css";

// TODO: will be removed after API calls be added
import { mockedAuthorsList, mockedCoursesList } from "./constants";
import { CourseInfo } from "./components/CourseInfo";

function App() {
  const [showCourseId, setShowCourseId] = useState();

  return (
    <>
      <Header />
      <div className={styles.container}>
        {showCourseId ? (
          <CourseInfo
            coursesList={mockedCoursesList}
            showCourseId={showCourseId}
            authorsList={mockedAuthorsList}
            onBack={() => setShowCourseId(null)}
          />
        ) : (
          <Courses
            handleShowCourse={setShowCourseId}
            coursesList={mockedCoursesList}
            authorsList={mockedAuthorsList}
          />
        )}
      </div>
    </>
  );
}

export default App;
