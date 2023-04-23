import { Route, createBrowserRouter, createHashRouter, createRoutesFromElements } from "react-router-dom";
import RequireAuth from "../hoc/RequireAuth";
import ContactsPage from "../pages/ContactsPage";
import LoginPage from "../pages/LoginPage";

export const router = createHashRouter(createRoutesFromElements(
   <>
      <Route path='/' element={<RequireAuth><ContactsPage /></RequireAuth>} />
      <Route path="/login" element={<LoginPage />} />
   </>

))