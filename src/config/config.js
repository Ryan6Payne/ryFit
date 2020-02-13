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

  register(email, password) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(this.addUser);
  }

  /* called as part of the registration process to initialize database document (auth uid == db uid)*/
  addUser = ({ user }) => {
    try {
      return this.db.collection("users")
        .doc(`${user.uid}`)
        .set({
          currentWeight: 0,
          dobDay: 0,
          dobMonth: 0,
          dobYear: 0,
          email: user.email,
          gender: true,
          goalWeight: 0,
          heightFt: 0,
          heightIn: 0
        });
    }
    catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  /* CR(U)D part of the registration process. This function will also be called on the profile page where the user can update their details */
  updateUser(heightFt, heightIn, currentWeight, goalWeight, gender, dobDay, dobMonth, dobYear) {
    var user = Firebase.auth().currentUser;
    try {
      return this.db.collection("users")
        .doc(`${user.uid}`)
        .set({
          currentWeight: currentWeight,
          dobDay: dobDay,
          dobMonth: dobMonth,
          dobYear: dobYear,
          gender: gender,
          email: user.email,
          goalWeight: goalWeight,
          heightFt: heightFt,
          heightIn: heightIn
        })
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  getUsername() {
    return Firebase.auth().currentUser && Firebase.auth().currentUser.displayName
  }

  updateName(displayName) {
    return Firebase.auth().currentUser.updateProfile({
      displayName: displayName
    })
  }

  async logout() {
    await this.auth.signOut().catch(error => {
      console.log(error)
    })
  }
}

export default new FB();
