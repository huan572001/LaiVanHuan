import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import RouteApp from "./routes/RouteApp";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleID } from "./constant/auth";
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <GoogleOAuthProvider clientId={googleID}>
          <AuthProvider>
            <RouteApp />
          </AuthProvider>
        </GoogleOAuthProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
