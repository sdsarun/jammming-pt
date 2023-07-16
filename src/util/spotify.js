// const clientSecret = "dbebd0c1d5694351aa2c7f2219e833b6";

const spotify = {
  userToken: "",
  getAccessToken: function () {
    if (this.userToken) return this.userToken;
    this.authorization();
  },
  generateRandomString: function (length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  },
  authorization: function() {
    let stateKey = "spotify_auth_state"

    let client_id = '';
    let redirect_uri = 'http://localhost:5173/';

    let state = this.generateRandomString(16);

    localStorage.setItem(stateKey, state);
    let scope = 'user-read-private user-read-email';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);
    url += "&show_dialog=true";

    location.href = url;
  },
  search: async function() {
    const rs = await fetch("https://api.spotify.com/v1/search?type=track&q=weekend", {
      headers: {
        Authorization: `Bearer BQAu48bPgeaL9s6eXscfe5TlmR0z8J7t-EtgR-9f3iMMclXmc9DEmvo_T_D7lZ4eteNbw7MVmjwnZAihETbtGuMI_JU6-3bkoXq7zKx7nto3sk8x_BVfW-XAAJnEXd1i32kfPwe627ttJ2abZ2Vo6U1afbZxN9wUomFEIemBF1GOocROykzYU9mH6f97Sw`
      }
    })
    const json = await rs.json();
    console.log(json);
  }
};


export {
  spotify
}