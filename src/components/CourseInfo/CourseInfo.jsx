import { Button } from "../../common";
import { formatCreationDate, getCourseDuration } from "../../helpers";

import styles from "./styles.module.css";

export const CourseInfo = ({
  coursesList,
  authorsList,
  onBack,
  showCourseId,
}) => {
  const course = coursesList.find((item) => item.id === showCourseId);
  const { id, title, creationDate, duration, description } = course;
  const authors = authorsList.filter((author) =>
    course.authors.includes(author.id)
  );

  return (
    <div data-testid="courseInfo">
      <Button buttonText="Back" handleClick={onBack} />
      <h1>{title}</h1>
      <div className={styles.courseInfo}>
        <p className={styles.description}>{description}</p>
        <div>
          <p>
            <b>ID: </b>
            {id}
          </p>
          <p>
            <b>Duration: </b>
            {getCourseDuration(duration)}
          </p>
          <p>
            <b>Created: </b>
            {formatCreationDate(creationDate)}
          </p>
          <div>
            <b>Authors</b>
            <ul className={styles.authorsList}>
              {authors.map((author) => (
                <li key={author.id}>{author.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
