import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
  User,
} from "firebase/auth";

interface UserState {
  isAuth: boolean;
  email: string | null;
  name: string | null;
  isLoading: boolean;
  error: null | string;
}

const initialState: UserState = {
  isAuth: false,
  email: null,
  name: null,
  isLoading: false,
  error: null,
};

// export const fetchSignUpUser = createAsyncThunk<
//   { email: string; userName: string },
//   { email: string; name: string; password: string }
// >("user/fetchSignUpUser", async ({ email, password, name }) => {
//   try {
//     const auth = getAuth();
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     sendEmailVerification(auth.currentUser as User);
//     const email = userCredential.user.email as string;
//   } catch (error) {}
// });

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // builder.addCase();
  },
});

export default userSlice.reducer;
