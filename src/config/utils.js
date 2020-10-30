const logOut = (loginType) => {
  if (loginType === "google") {
    // eslint-disable-next-line no-undef
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      localStorage.removeItem("googleToken");
      localStorage.removeItem("loginUser");
      console.log("Deslogou");
    });
    return;
  } else {
    return;
  }
};

export default logOut;
