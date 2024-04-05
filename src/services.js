export const createUser = async (data) => {
  const response = await fetch("http://localhost:4000/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Network Error");
  }
};

export const login = async (data) => {
  const response = await fetch("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response.ok);

  if (!response.ok) {
    throw new Error("Network Error");
  }

  return await response.json();
};

export const getCourses = async () => {
  const response = await fetch("http://localhost:4000/courses/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response.ok);

  if (!response.ok) {
    throw new Error("Network Error");
  }

  return await response.json();
};

export const getAuthors = async () => {
  const response = await fetch("http://localhost:4000/authors/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response.ok);

  if (!response.ok) {
    throw new Error("Network Error");
  }

  return await response.json();
};

export const getCurrentUser = async (token) => {
  const response = await fetch("http://localhost:4000/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!response.ok) {
    throw new Error("Network Error");
  }

  return await response.json();
};

export const updateCourseService = async (data, token) => {
  const response = await fetch(`http://localhost:4000/courses/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      duration: data.duration,
      authors: data.authors,
    }),
  });

  if (!response.ok) {
    throw new Error("Network Error");
  }
  return await response.json();
};

export const logout = async (token) => {
  const response = await fetch("http://localhost:4000/logout", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!response.ok) {
    throw new Error("Network Error");
  }
};

export const deleteCourseService = async (id, token) => {
  const response = await fetch(`http://localhost:4000/courses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!response.ok) {
    throw new Error("Network error");
  }
};

export const createCourse = async (data, token) => {
  const { title, description, duration, authors } = data;
  const response = await fetch("http://localhost:4000/courses/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      title,
      description,
      duration,
      authors,
    }),
  });

  if (!response.ok) {
    throw new Error("Network error");
  }

  return await response.json();
};

export const createAuthor = async (data, token) => {
  const response = await fetch("http://localhost:4000/authors/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network error");
  }

  return await response.json();
};
