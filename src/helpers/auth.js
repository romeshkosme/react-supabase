// import jwt_decode from "jwt-decode";
import { supabase } from "../helpers/supabase.config";

class Auth {
  login(email, password) {}

  signUp(email, password) {}

  async logout() {
    return await supabase.auth.signOut()
  }

  isAuthenticated() {
    const token = localStorage.getItem("supabase.auth.token");
    if (
      token &&
      JSON.parse(token).currentSession &&
      JSON.parse(token).currentSession.access_token
    ) {
      return true;
    }
    return false;
  }
}

let _auth = null;

const getAuth = () => {
  if (!_auth) {
    _auth = new Auth();
  }
  return _auth;
};

export { getAuth };
