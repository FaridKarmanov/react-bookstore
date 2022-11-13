import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "../../firebase";
import {
  FirebaseError,
  FirebaseErrorCode,
  getFirebaseError,
} from "../../utils";

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

export const fetchSignUp = createAsyncThunk<
  { userEmail: string; name: string },
  { email: string; password: string; name: string },
  { rejectValue: FirebaseError }
>(
  "user/fetchSignUp",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      sendEmailVerification(auth.currentUser as User);
      const userEmail = userCredential.user.email as string;
      return { userEmail, name };
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };

      return rejectWithValue(getFirebaseError(firebaseError.code));
    }
  }
);

export const fetchSignIn = createAsyncThunk<
  { userEmail: string; name: string },
  { email: string; password: string; name: string },
  { rejectValue: FirebaseError }
>(
  "user/fetchSignIn",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userEmail = userCredential.user.email as string;

      return { userEmail, name };
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };

      return rejectWithValue(getFirebaseError(firebaseError.code));
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSignUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSignUp.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = null;

      state.email = payload.userEmail;
      state.name = payload.name;
    });
    builder.addCase(fetchSignUp.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchSignIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSignIn.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = null;
      state.email = payload.userEmail;
      state.name = payload.name;
    });
    builder.addCase(fetchSignIn.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default userSlice.reducer;
