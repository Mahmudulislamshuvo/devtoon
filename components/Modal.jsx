"use client";

import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, message, onConfirm, confirmText = "Confirm", cancelText = "Cancel", isDestructive = false }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Dialog */}
      <div className="glass-card relative z-10 w-full max-w-md rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <h3 className="text-xl font-bold text-on-surface mb-2">
          {title}
        </h3>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          {message}
        </p>
        
        <div className="flex items-center justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-white/5 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isDestructive 
                ? "bg-red-500/20 text-red-500 hover:bg-red-500/30 border border-red-500/50" 
                : "bg-primary text-on-primary hover:bg-primary-container"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
