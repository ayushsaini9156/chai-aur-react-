import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 px-4">
      <div className="w-full max-w-md bg-gray-800 text-orange-500 rounded-2xl shadow-lg p-6 space-y-5">
        <h1 className="text-2xl font-bold text-center text-white">
          🔐 Password Generator
        </h1>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="flex-1 px-3 py-2 rounded-lg text-black bg-white outline-none"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 transition text-white rounded-lg shadow-md"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-white font-medium">
              Length: <span className="text-orange-400">{length}</span>
            </label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              id="length"
              onChange={(e) => setLength(e.target.value)}
              className="w-2/3"
            />
          </div>

          <div className="flex justify-between items-center">
            <label
              htmlFor="numberInput"
              className="flex items-center gap-2 text-white"
            >
              <input
                type="checkbox"
                id="numberInput"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-orange-500"
              />
              Include Numbers
            </label>

            <label
              htmlFor="charInput"
              className="flex items-center gap-2 text-white"
            >
              <input
                type="checkbox"
                id="charInput"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="accent-orange-500"
              />
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
