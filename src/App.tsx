import { Routes, Route } from "react-router-dom";

import {
  //Home,
  Home23,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
} from "@/_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupModalForm from "@/_auth/forms/signupForm/SignupModalForm.tsx";
import SigninModalForm from "@/_auth/forms/signinForm/SigninModalForm.tsx";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";


const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninModalForm />} />
          <Route path="/sign-up" element={<SignupModalForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          {/*<Route index element={<Home />} />*/}
          <Route index element={<Home23 />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
