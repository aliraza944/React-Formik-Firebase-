import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFormik from "./Components/Forms";
import SignIn from "./Components/SignIn";
import { auth } from "./Components/firebase";
const handleAuth = async () => {
  try {
    const user = await auth.currentUser;
    if (user !== null) {
      console.log(user.email);
    } else {
      console.log("no user present");
    }
  } catch (error) {
    if (error) console.log(error);
  }
};
const handleSignOut = async () => {
  try {
    const user = await auth.signOut();
  } catch (error) {
    if (error) console.log(error);
  }
};

function App() {
  return (
    <div className="App">
      <FormFormik />
      <SignIn />
      <button className="btn btn-primary mt-5" onClick={handleAuth}>
        check user
      </button>
      <button className="btn btn-primary mt-5 ml-5" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default App;
