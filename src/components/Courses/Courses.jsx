import React, { useEffect, useState } from "react";

import { CourseCard, SearchBar } from "./components";
import { ADD_NEW_COURSE } from "./constants";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import {
  getAuthorsSelector,
  getCoursesSelector,
  getUserRoleSelector,
} from "../../store/selectors";
import { MyLink } from "../../common/MyLink";

export const Courses = () => {
  const allCourses = useSelector(getCoursesSelector);
  const authorsList = useSelector(getAuthorsSelector);
  const [courses, setCourses] = useState(allCourses);
  const role = useSelector(getUserRoleSelector);

  const handleSearch = (value) => {
    const searchedCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().indexOf(value) >= 0 ||
        course.id.indexOf(value) >= 0
    );

    setCourses(searchedCourses);
  };

  useEffect(() => {
    setCourses(allCourses);
  }, [allCourses]);

  return courses.length ? (
    <>
      <div className={styles.panel}>
        <SearchBar getSearchValue={handleSearch} />
        <MyLink to={"/courses/add"}>{ADD_NEW_COURSE}</MyLink>
      </div>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} authorsList={authorsList} />
      ))}
    </>
  ) : (
    <>
      {role === "admin" ? (
        <div>
          <h1>Your List Is Empty</h1>
          <MyLink to={"/courses/add"} data-testid="addCourse">
            Add new course
          </MyLink>
        </div>
      ) : (
        <div>You don't have permissions</div>
      )}
    </>
  );
};
