export const loginCredentials = async ({
  credential,
}: {
  credential: {
    email: string;
    password: string;
  };
}) => {
  try {
    const response = await fetch(`${process.env.API_URL}/auths/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginOauth = async ({
  credential,
}: {
  credential: {
    email: string;
    imageProfile: string;
    fullName: string;
  };
}) => {
  try {
    const response = await fetch(`${process.env.API_URL}/auths/login-google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credential.email,
        fullName: credential.fullName,
        imageProfile: credential.imageProfile,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/users/email/${email}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (email: string, password: string, username: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/auths/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (token: string, formData: FormData) => {
  try {
    const response = await fetch(`${process.env.API_URL}/users`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (token: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/users/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (token: string, id: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/posts/likes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const followUser = async (token: string, id: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/users/follow/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addToHistory = async (token: string, id: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/histories/${id}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteHistory = async (token: string, id: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/histories/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const clearHistory = async (token: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/histories/`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addComment = async (token: string, postId: string, text: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/comments/${postId}`, {
      method: 'POST',
      body: JSON.stringify({
        text,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const replyComment = async (token: string, commentId: string, text: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/comments/replies/${commentId}`, {
      method: 'POST',
      body: JSON.stringify({
        text,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (token: string, formData: FormData) => {
  try {
    const response = await fetch(`${process.env.API_URL}/posts`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
