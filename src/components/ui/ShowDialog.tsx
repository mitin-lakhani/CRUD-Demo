import { Dialog } from "@headlessui/react";
import type { FC } from "react";

export interface ConfirmDialogProps {
  isOpen: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  title = "Confirmation",
  message,
  confirmText = "OK",
  cancelText = "Cancel",
  onConfirm,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
          <Dialog.Title className="text-lg font-semibold">
            {title}
          </Dialog.Title>

          <Dialog.Description className="mt-2 text-gray-600">
            {message}
          </Dialog.Description>

          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              {confirmText}
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1 border rounded text-black"
            >
              {cancelText}
            </button>

            
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ConfirmDialog;
