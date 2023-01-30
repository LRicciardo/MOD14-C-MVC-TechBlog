// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  get_emoji: () => {
const emojiList = [`💻`,`⚙️`,`💡`,`😀`,`😃`, `😄`, `😁`, `😆`, `😅`, `😂`, `🤣`, `🥲`, `🥹`, `😊`, `😇`, `🙂`, `🙃`, `😉`, `😌`, `😍`, `🥰`, `😘`, `😙`, `😚`, `😋`, `😛`, `😝`, `😜`, `🤪`, `🤨`, `🧐`, `🤓`, `😎`, `🥸`, `🤩`, `🥳`, `😏`, `😒`, `😞`, `😔`, `😟`, `😕`, `🙁`, `☹️`, `😣`, `😖`, `😫`, `😩`, `🥺`, `😢`, `😭`, `😮‍💨`, `😤`, `😠`, `😡`, `🤬`, `🤯`, `😳`, `🥵`, `🥶`, `😱`, `😨`, `😰`, `😥`, `😓`, `🫣`, `🤗`, `🫡`, `🤔`, `🫢`, `🤭`, `🤫`, `🤥`, `😶`, `😶‍🌫️`, `😐`, `😑`, `😬`, `🫠`, `🙄`, `😯`, `😦`, `😧`, `😮`, `😲`, `🥱`, `😴`, `🤤`, `😪`, `😵`, `😵‍💫`, `🫥`, `🤐`, `🥴`, `🤢`, `🤮`, `🤧`, `😷`, `🤒`, `🤕`, `🤑`, `🤠`, `😈`, `👿`, `👹`, `👺`, `🤡`, `💩`, `👻`, `💀`, `☠️`, `👽`, `👾`, `🤖`, `🎃`, `😺`, `😸`, `😹`, `😻`, `😼`, `😽`, `🙀`, `😿`, `😾`, `☺️`];
    
  return `<span for="img" aria-label="emoji">${getRandomArrItem(emojiList)}</span>`;
 
  },

  getSessionData: () => {
    return { 
      // save the user in session storage
      logged_in: req.session.logged_in,
      logged_username: req.session.logged_user_name,
      logged_user_email: req.session.user_email,
      logged_admin: req.session.user_admin
    }
  },
};