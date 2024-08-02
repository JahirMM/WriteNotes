interface ModalProps {
  children: React.ReactNode;
}
function Modal({ children }: ModalProps) {
  return (
    <div className="bg-[rgba(0,0,0,.5)] h-screen w-screen fixed top-0 left-0 z-50 flex justify-center items-center">
      {children}
    </div>
  );
}

export default Modal;
