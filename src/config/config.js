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
          fullName: "",
          firstName: "",
          secondName: "",
          currentWeight: 0,
          dobDay: 0,
          dobMonth: 0,
          dobYear: 0,
          email: user.email,
          gender: null,
          goalWeight: 0,
          heightFt: 0,
          heightIn: 0,
          isAdmin: false
        });
    }
    catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  /* CR(U)D part of the registration process. This function will also be called on the profile page where the user can update their details */
  updateUser(fullName, firstName, secondName, heightFt, heightIn, currentWeight, goalWeight, gender, dobDay, dobMonth, dobYear) {
    var user = this.auth.currentUser;
    try {
      return this.db.collection("users")
        .doc(`${user.uid}`)
        .update({
          fullName: fullName,
          firstName: firstName,
          secondName: secondName,
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

  addWorkout(deadlift, benchPress, shoulderPress, squat) {
    var user = this.auth.currentUser;

    try {
      return this.db.collection("users")
        .doc(`${user.uid}`)
        .collection("workouts")
        .add({
          deadlift: deadlift,
          benchPress: benchPress,
          shoulderPress: shoulderPress,
          squat: squat,
          timeStamp: new Date()
        })
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  /* C(R)UD */
  async getUserField(field) {
    //sets 'data' to a function which retrieves data in the given field
    const data = await this.db.doc(`users/${this.auth.currentUser.uid}`).get()
    //giving the field
    return data.get(field)
  }

  getUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
  }

  updateName(displayName) {
    return this.auth.currentUser.updateProfile({
      displayName: displayName
    })
  }

  getUserInitials() {
    return this.auth.currentUser.displayName
      .split(" ")
      .map(x => x.charAt(0))
      .join("")
      .toUpperCase()
  }

  async logout() {
    await this.auth.signOut().catch(error => {
      console.log(error)
    })
  }
}

export default new FB();
