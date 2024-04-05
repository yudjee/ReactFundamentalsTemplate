import {
  updateCourse,
  setCourses,
  saveCourse,
  deleteCourse,
} from "../slices/coursesSlice";
import {
  createCourse,
  deleteCourseService,
  getCourses,
  updateCourseService,
} from "../../services";

export const updateCourseThunk = (data, token) => {
  return async function (dispatch) {
    const newCourse = await updateCourseService(data, token);

    dispatch(updateCourse(newCourse.result));
  };
};

export const deleteCourseThunk = (id, token) => {
  return async function (dispatch) {
    await deleteCourseService(id, token);

    dispatch(deleteCourse(id));
  };
};

export const createCourseThunk = (data, token) => {
  return async function (dispatch) {
    const result = await createCourse(data, token);

    dispatch(saveCourse(result.result));
  };
};

export const getCoursesThunk = () => async (dispatch) => {
  const response = await getCourses();

  dispatch(setCourses(response.result));
};
