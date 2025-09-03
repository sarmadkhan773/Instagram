import SignUp from "./components/SignUp";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50">
      <main className="flex flex-col md:flex-row items-center justify-center flex-1 gap-12">
        <LoginForm />
      </main>
        <SignUp />

      <Footer />
    </div>
  );
}

export default App;
