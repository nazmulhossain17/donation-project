'use client'
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <p>Are you sure you want to delete this post?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 mr-2"
                onClick={onConfirm}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
