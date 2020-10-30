/* eslint-disable no-unused-vars */
export const initFbsdk = () => {
  return new Promise((resolve) => {
    window.fbAsyncInit = (function () {
      // eslint-disable-next-line no-undef
      FB.init({
        appId: "2839321293018839",
        cookie: true,
        xfbml: true,
        version: "v8.0",
      });
    })(
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk")
    );
  });
};
