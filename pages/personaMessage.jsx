import { useState } from "react";

import { Modal } from "react-responsive-modal";

export default function PersonalMessage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="absolute bottom-0 right-0 m-12">
        <i
          className="fas fa-info-circle text-3xl animate-bounce text-gray-400 hover:text-gray-600"
          onClick={() => setShowModal(!showModal)}
        ></i>
      </button>

      <Modal open={showModal} onClose={() => setShowModal(!showModal)}>
        <div className="w-full animate-pulse  max-w-lg mt-8">
          <p className="text-sm text-justify">
            Hi, I hope you like my proposed solution, I can continue to improve,
            I consider myself capable and very determined to learn many more
            things, thank you for considering me as a candidate in the
            application process.
          </p>
          <p className="py-4">Developed with:</p>
          <ul>
            <li>NextJS</li>
            <li>React</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
      </Modal>
    </>
  );
}
