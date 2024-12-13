import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { authOptions } from "../api/auth/[...nextauth]/route";
import pRetry from "p-retry";
// import { error } from "console";

export const registerService = async (reqData) => {
  console.log("Request : ", reqData);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auths/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: reqData.username,
        email: reqData.email,
        password: reqData.password,
        confirmPassword: reqData.confirmPassword,
        profileImage: "lol",
      }),
    }
  );
  const data = await response.json();
  console.log("serviced", data);
  if (data.status === 400) {
    toast.error(data.errors ? data.errors.password : data.title, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
    return null;
  } else {
    toast.success(
      "Register Successfully. Please check your email to get OTP code",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      }
    );
    return data;
  }
};

export const verifyRegisterService = async (otpreq) => {
  console.log("otpcode", otpreq);
  const verify = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auths/verify?otpCode=${otpreq}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let isVerify;

  const data = await verify.json();
  console.log("Status : ", data);

  // switch (data.detail) {
  //   case "Invalid OTP Code":
  //     toast.error(data.detail, {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       // transition: Bounce,
  //     });
  //     isVerify = false;
  //     return isVerify;
  //   // case 400:
  //   //   toast.error(data.detail, {
  //   //     position: "top-right",
  //   //     autoClose: 2000,
  //   //     hideProgressBar: false,
  //   //     closeOnClick: true,
  //   //     pauseOnHover: true,
  //   //     draggable: true,
  //   //     progress: undefined,
  //   //     theme: "light",
  //   //     // transition: Bounce,
  //   //   });
  //   //   isVerify = false;
  //   //   return isVerify;
  //   case "Your account is verify already":
  //     toast.success(`Verify Successfully`, {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  // }

  if (data.detail === "Your account is verify already") {
    toast.success(`Verify Successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // isVerify = true;
    return data;
  } else {
    return {
      errors: data.detail,
    };
  }

  // if (verify.status == 400) {
  //   toast.error(`Something wrong....`, {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     // transition: Bounce,
  //   });
  //   return false;
  // } else {
  //   toast.success(`Verify Successfully`, {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  //   isVerify = true;
  // }
};

export const resendOTPService = async (email) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auths/resend?email=${email}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);
  if (data.status !== 400 && data.status !== 404) {
    toast.success(
      `${data.detail} OTP code renew. Please check your email again`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      }
    );
    return data;
  } else {
    toast.error(`${data.detail}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
    return null;
  }
};

export const forgotEnterEmailService = async ({email}) => {
  console.log(JSON.stringify(email))
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auths/resend?email=${email}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
console.log(response)
  const data = await response.json();
  console.log(data);
  if (data.status === 400 ) {
    toast.error(`${data.detail}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
    return data;
  } else {
    toast.success(
      `${data.detail}`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      }
    );
    return data;
  }
};

export const forgotResetService = async (req, email) => {
  console.log("email",email)
  console.log("passreq",req)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auths/forget?email=${email}`,
    {
      method: "PUT",
      body: JSON.stringify({
        password: req.password,
        confirmPassword: req.confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },

    }
  );

  const data = await response.json();
  console.log("forgotsss", data);
  return data;
};
