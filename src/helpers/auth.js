// import jwt_decode from "jwt-decode";

class Auth {
  login(email, password) {}

  signUp(email, password) {}

  logout() {}

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
