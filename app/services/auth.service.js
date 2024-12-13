/**
 * 1
 * auth for login
 * @param {object} user user info like email and password
 * @returns {object} payload
 */
export const loginService = async (user) => {
  const { email, password } = user;
  const res = await fetch(
    `${process.env.BASE_URL}/auths/login`,
    {
      method: "POST",
      body: JSON.stringify({ email, password }),
    },
    {
      next: {
        tag: ["loginService"],
      },
    }
  );
  const { token } = await res.json();
  return token;
};

/**
 * 2
 * auth for register
 * @param {object} user user info like username email and password confirm password profile img
 * @returns {object} payload
 */
export const registerService = async (req) => {
  const { userName, email, password, confirmPassword, profileImage } = req;
  const res = await fetch(
    `${process.env.BASE_URL}/auths/register`,
    {
      method: "POST",
      body: JSON.stringify({
        userName,
        email,
        password,
        confirmPassword,
        profileImage,
      }),
    },
    {
      next: {
        tag: ["registerService"],
      },
    }
  );
  const user = await res.json();
  return user;
};

/**
 * 3
 * auth for resend email
 * @param {string} email user email
 * @returns {object} payload
 */
export const resendEmailServive = async (email) => {
  const res = await fetch(
    `${process.env.BASE_URL}/auths/resend`,
    {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    },
    {
      next: {
        tag: ["resendEmailServive"],
      },
    }
  );
  const data = await res.json();
  return data;
};

/**
 * 4
 * auth for reset password with email
 * @param {object} user user new password
 * @returns {object} payload
 */
export const resetEmailServive = async ({ password, confirmPassword }) => {
  const res = await fetch(
    `${process.env.BASE_URL}/auths/Reset`,
    {
      method: "PUT",
      body: JSON.stringify({
        password,
        confirmPassword,
      }),
    },
    {
      next: {
        tag: ["resetEmailServive"],
      },
    }
  );
  const data = await res.json();
  return data;
};

/**
 * 5
 * auth for forget password with email
 * @param {object} user user new password
 * @returns {object} payload
 */
export const forgetPassword = async ({ password, confirmPassword }) => {
  const res = await fetch(
    `${process.env.BASE_URL}/auths/forget`,
    {
      method: "PUT",
      body: JSON.stringify({
        password,
        confirmPassword,
      }),
    },
    {
      next: {
        tag: ["forgetPassword"],
      },
    }
  );
  const data = await res.json();
  return data;
};

/**
 * 6
 * auth for verify otp
 * @param {string} otpCode otp code for verify
 * @returns {object} payload
 */
export const verifyEmail = async (otpCode) => {
  const res = await fetch(
    `${process.env.BASE_URL}/auths/verify`,
    {
      method: "PUT",
      body: JSON.stringify({ otpCode }),
    },
    {
      next: {
        tag: ["verifyEmail"],
      },
    }
  );
  const data = await res.json();
  return data;
};
