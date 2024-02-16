import { CourseCard } from "./components";
import { Button } from "../../common";

import styles from "./styles.module.css";
const ADD_NEW_COURSE = "Add new course";

export const Courses = ({ coursesList, authorsList, handleShowCourse }) => {
  const courses = [...coursesList];

  return courses.length ? (
    <>
      <div className={styles.panel}>
        <Button handleClick={() => null} buttonText={ADD_NEW_COURSE} />
      </div>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          authorsList={authorsList}
          handleShowCourse={handleShowCourse}
        />
      ))}
    </>
  ) : (
    <div>
      <h1>Your List Is Empty</h1>
      <p>'Add new course'</p>
      <Button buttonText="Add new course" data-testid="addCourse" />
    </div>
  );
};
