// "use server";

// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
// import { auth } from "@/lib/auth";
// import { dbConnect } from "@/lib/dbConnect";
// import User from "@/models/userSchema";
// import { redirect } from "next/navigation";

// const login = async (formData) => {
//   let errorMessage = "";

//   try {
//     const email = formData.get("email");
//     const password = formData.get("password");

//     const response = await fetch(
//       `${process.env.NEXT_BASE_URL}/api/auth/login`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       },
//     );

//     const data = await response.json();

//     if (data?.error) {
//       errorMessage = data.error;
//     }
//   } catch (error) {
//     errorMessage = "Something went wrong! Please try again.";
//     console.error("Login error:", error);
//   }
//   if (errorMessage) {
//     redirect(`/login?error=${encodeURIComponent(errorMessage)}`);
//   } else {
//     redirect("/dev");
//   }
// };

// export { login };
