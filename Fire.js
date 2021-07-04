import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCj4cvAzFrcNaVPkGneLF6f49ZFGy5EZ-4",
        authDomain: "chatappnew-36ad3.firebaseapp.com",
        projectId: "chatappnew-36ad3",
        storageBucket: "chatappnew-36ad3.appspot.com",
        messagingSenderId: "504507929464",
        appId: "1:504507929464:web:74ea9760afdf6f6be4ae8d",
        measurementId: "G-229VTZYHYG",
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timeStamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timeStamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timeStamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
