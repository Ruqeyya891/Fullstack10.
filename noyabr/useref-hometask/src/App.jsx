import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const submittedRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) {
      toast.error("Input boş ola bilməz!");
      return;
    }

    if (value === submittedRef.current) {
      toast.error("Bu məlumat artıq göndərilib!");
      return;
    }

    submittedRef.current = value;
    console.log(value);
    toast.success("Success!");
    inputRef.current.value = "";
  };

  return (
    <div className="container">
      <Toaster />

      <form onSubmit={handleSubmit}>
        <h2>Form Submit</h2>

        <input
          type="text"
          ref={inputRef}
          placeholder="Məlumat daxil et"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
