const Register = () => {
  return (
    <div className="space-x-2 text-lg">
      <a href="/sign-up">
        <button className="border-none py-[6px] px-3 leading-4 rounded-xl bg-blue-400/50 hover:bg-blue-400 transition-all duration-300 ease-in">
          Login
        </button>
      </a>
      <a href="/sign-up">
        <button className="border-none py-[6px] px-3 leading-4 rounded-xl bg-red-400/50 hover:bg-red-400 transition-all duration-300 ease-in">
          Register
        </button>
      </a>
    </div>
  );
};

export default Register;
