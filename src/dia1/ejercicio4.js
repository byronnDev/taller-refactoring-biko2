function AuthenticationManager() {
  let isLoggedIn = false;
  let username = "";

  function login(user, password) {
    const isAdminUser = (user === "admin" && password === "admin123");

    if (isAdminUser) {
      isLoggedIn = true;
      username = "admin";
      return;
    }
    isLoggedIn = false;
    username = "";
  }

  function displayStatus() {
    if (isLoggedIn) {
      console.log(`Logged in as ${username}`);
      return;
    }
    console.log("Not logged in");
  }

  return {
    login,
    displayStatus,
  };
}

const authManager = AuthenticationManager();
authManager.login("admin", "admin123");
authManager.displayStatus();
