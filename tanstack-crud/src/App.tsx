import Form from "./components/userModal"
import Users from "./pages/usersList"
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex justify-center my-4">
        <button
          onClick={openModal}
          className="bg-blue-400 rounded shadow-lg p-2 text-white cursor-pointer"
        >
          Create User
        </button>
      </div>
      {showModal && <Form onClose={closeModal} />}
      <Users />
    </>
  );
}

export default App
