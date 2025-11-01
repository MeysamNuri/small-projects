import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  // props here
  onEyeClose: Dispatch<SetStateAction<boolean>>;
}

export default function LoginForm({ onEyeClose }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username && password) {
      alert(`Welcome, ${username}! 👋`);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      {/* Username Input */}
      <div>
        <label className="block mb-1.5 text-sm font-medium text-stone-700">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 text-[15px] rounded-lg border-2 text-stone-500 border-stone-200 outline-none transition-colors focus:border-indigo-500"
        />
      </div>

      {/* Password Input */}
      <div>
        <label className="block mb-1.5 text-sm font-medium text-stone-700">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => onEyeClose(true)}
          onBlur={() => onEyeClose(false)}
          className="w-full px-4 py-3 text-[15px] rounded-lg border-2 text-stone-500 border-stone-200 outline-none transition-colors focus:border-indigo-500"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-3 text-base font-semibold rounded-lg border-none bg-linear-to-r from-stone-600 to-stone-800 text-white cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
      >
        Sign In
      </button>
    </div>
  );
}
