import NormalUser from "./pages/NormalUser";
import WriterUI from "./pages/WriterUI";
import AdminPanel from "./pages/AdminPanel";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NormalUser />} />
        <Route path="/writerUI" element={<WriterUI />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
};

export default App;
