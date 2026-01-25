import * as Yup from "yup"

export const signupSchema = Yup.object({
  name: Yup.string().min(2).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
})
