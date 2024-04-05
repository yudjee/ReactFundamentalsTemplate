import React from "react";

import { Button } from "../../../../common";
import { SHOW_COURSE } from "./constants";
import { getCourseDuration, formatCreationDate } from "../../../../helpers";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthorsSelector,
  getUserRoleSelector,
  getUserTokenSelector,
} from "../../../../store/selectors";
import { deleteCourseThunk } from "../../../../store/thunks/coursesThunk";
import { MyLink } from "../../../../common/MyLink";

import deleteIcon from "../../../../assets/deleteButtonIcon.svg";
import editIcon from "../../../../assets/editButtonIcon.svg";

export const CourseCard = ({ course }) => {
  const { title, description, authors, duration, creationDate, id } = course;
  const dispatch = useDispatch();
  const allAuthors = useSelector(getAuthorsSelector);
  const userRole = useSelector(getUserRoleSelector);
  const token = useSelector(getUserTokenSelector);
  const getAuthors = () => {
    return allAuthors
      .filter((author) => authors.includes(author.id))
      .map((item) => item.name)
      .join(", ");
  };
  return (
    <div className={styles.cardContainer} data-testid="courseCard">
      <div className={styles.cardText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.cardDetails}>
        <p>
          <b>Authors: </b>
          {getAuthors()}
        </p>
        <p>
          <b>Duration:</b>
          <span>{getCourseDuration(duration)}</span>
        </p>
        <p>
          <b>Created: </b>
          <span>{formatCreationDate(creationDate)}</span>
        </p>
        <div className={styles.buttonsContainer}>
          <MyLink to={`/courses/${id}`}>{SHOW_COURSE}</MyLink>
          {userRole === "admin" && (
            <>
              <Button
                buttonText={<img src={deleteIcon} alt="delete" />}
                handleClick={() => dispatch(deleteCourseThunk(id, token))}
                data-testid="deleteCourse"
              />
              <MyLink to={`/courses/update/${id}`} data-testid="updateCourse">
                <img src={editIcon} alt="edit" />
              </MyLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
