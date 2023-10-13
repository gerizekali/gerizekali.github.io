var img = document.getElementById("avatar");
var yazi = document.getElementById("yazi")

const discordId = "829022776953798716"

const apiURL = `https://api.lanyard.rest/v1/users/${discordId}/`;


fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    var avatarURL = `https://cdn.discordapp.com/avatars/${discordId}/${data.data.discord_user.avatar}`;
    var displayName = data.data.discord_user.display_name;

    img.src = avatarURL;
    yazi.textContent = displayName
    
  })
  .catch(error => {
    console.error("api error: ", error);
  });
