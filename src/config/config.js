import Firebase from 'firebase';

const firebaseConfiguration = {
  apiKey: 'AIzaSyAVcSaQwD31GIwSBi0LteRefgKfsYFe7yQ',
  authDomain: 'ryfit-33fb8.firebaseapp.com',
  databaseURL: 'https://ryfit-33fb8.firebaseio.com',
  projectId: 'ryfit-33fb8',
  storageBucket: 'ryfit-33fb8.appspot.com',
  messagingSenderId: '344003560407',
  appId: '1:344003560407:web:b0d2c654c5bc331e544192',
  measurementId: 'G-HQK43DV8FJ'
};

class FB {
  constructor() {
    Firebase.initializeApp(firebaseConfiguration);
    this.auth = Firebase.auth();
    this.db = Firebase.firestore();
  }

  async login(email, password) {
    const user = await this.auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
    return user;
  }

  async register(email, password) {
    const reg = await this.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
    return reg;
  }

  async logout() {
    await this.auth.signOut().catch(error => {
      console.log(error)
    })
  }
}


export default new FB();
