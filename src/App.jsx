import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";
import Notes from "./routes/Notes";
import NoteDetail from "./routes/NoteDetail";
import NewNote from "./routes/NewNote";
import ArchivedNotes from "./routes/ArchivedNotes";
import Login from "./routes/Login";
import IsLoggedIn from "./middlewares/IsLoggedIn";
import IsNotLoggedIn from "./middlewares/isNotLoggedIn";
import Register from "./routes/Register";
import { UserContextProvider } from "./contexts/UserContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { LangContextProvider } from "./contexts/LangContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route element={<IsLoggedIn />}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Notes />} />
          <Route path="/archives" element={<ArchivedNotes />} />
          <Route path="/note/:id" element={<NoteDetail />} />
          <Route path="/note/new" element={<NewNote />} />
        </Route>
      </Route>
      <Route element={<IsNotLoggedIn />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <ThemeContextProvider>
      <LangContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </LangContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
