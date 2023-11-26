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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Notes />} />
      <Route path="/archives" element={<ArchivedNotes />} />
      <Route path="/note/:id" element={<NoteDetail />} />
      <Route path="/note/new" element={<NewNote />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
