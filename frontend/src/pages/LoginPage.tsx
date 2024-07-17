// COMPONENT
import LoginForm from "@/auth/login/components/LoginForm";

// ICON
import Moon from "@/icons/Moon";

function LoginPage() {
  return (
    <main className="h-screen flex items-center justify-center sm:gap-4 sm:justify-between">
      <div className="hidden overflow-auto h-full w-1/2 sm:flex">
        <img
          src="/login/imgLogin.jpg"
          alt="login image"
          className="h-full w-full"
        />
      </div>
      <LoginForm />
      <div className="absolute top-4 right-4" typeof="submit">
        <Moon width={20} height={20} fill="#000" />
      </div>
    </main>
  );
}

export default LoginPage;
