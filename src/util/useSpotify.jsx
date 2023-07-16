import { useEffect, useState } from "react";

export default function useSpotify() {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("spotify_access_token") ?? "";
  });

  function generateRandomString() {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  function authorization() {
    let stateKey = "spotify_auth_state"

    let client_id = '7505cb9d312241aab74ffb8706c5ba58';
    let redirect_uri = 'http://localhost:5173/';

    let state = generateRandomString(16);

    localStorage.setItem(stateKey, state);
    let scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);
    url += "&show_dialog=true";

    location = url;
  }

  async function save(name, uris) {
    let userToken = token;
    let headers = {
      "Authorization": `Bearer ${userToken}`,
      "Content-Type": "application/json",
    };

    console.log(userToken);
    console.log(headers);

    const rs = await fetch("https://api.spotify.com/v1/me", {headers: headers});
    if (rs.ok) {
      const json = await rs.json();
      const { id: userId } = json;
      const body = {
        "name" : name,
      }
      const createNewPlaylist = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          headers: headers,
          body: JSON.stringify(body),
          method: "POST",
        },
      )
      if (createNewPlaylist.ok) {
        const { id: playlistId } = await createNewPlaylist.json();
        const body = {
          "uris": uris,
        }
        const addTracksToPlaylist = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
          }
        );
      }
    }
  }

  async function query(songSearch) {
    const url = `https://api.spotify.com/v1/search?type=track&q=${songSearch}`;
    const rs = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (rs.ok) {
      const json = await rs.json();
      const { items } = json.tracks;

      const resultSet = [];
      for (let i = 0; i < items.length; i++) {
        const { id, name, artists, album, uri } = items[i];
        resultSet.push({
          id,
          name,
          artist: artists[0].name,
          album: album.name,
          uri
        })
      }
      return resultSet;
    }
    return {};
  }

  useEffect(() => {
    let accessToken = location.href.match(/access_token=([^&]*)/);
    let expiresIn = location.href.match(/expires_in=([^&]*)/);
    if (accessToken && expiresIn) {
      setToken(accessToken[1]);
      window.history.pushState('Access Token', null, '/');
      localStorage.setItem("spotify_access_token", accessToken[1]);
    }
    console.log("Hello World", token);
  }, [token])

  return {
    token,
    authorization,
    query,
    save
  }
}