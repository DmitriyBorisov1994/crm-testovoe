import { Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RequireAuth from "../hoc/RequireAuth";
import ContactsPage from "../pages/ContactsPage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter(createRoutesFromElements(
   <>
      <Route path='/' element={<RequireAuth />} >
         <Route index element={<ContactsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
   </>

))