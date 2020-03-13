import Firebase from 'firebase';
import moment from 'moment';
import { hydrate } from 'react-dom';

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
    this.storage = Firebase.storage();
  }

  async isLoggedIn() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
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
          isAdmin: false,
          pictureUrl: null,
          location: null
        });
    }
    catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  /* CR(U)D part of the registration process. This function will also be called on the profile page where the user can update their details */
  updateUser(fullName, firstName, secondName, heightFt, heightIn, currentWeight, goalWeight, gender, dobDay, dobMonth, dobYear, location) {
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
          heightIn: heightIn,
          location: location
        })
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  /* Image handling (Firebase Storage) */
  async pictureUpload(image) {
    try {
      await this.storage
        .ref(`images/${this.auth.currentUser.uid}/profilepic.jpg`)
        .put(image)

      const pictureUrl = await this.getPicture()

      this.db.doc(`users/${this.auth.currentUser.uid}`)
        .update({
          pictureUrl: pictureUrl
        })
      return true
    } catch {
      return false
    }
  }

  async getPicture() {
    const ref = this.storage.ref(`images/${this.auth.currentUser.uid}`)

    return ref
      .child("profilepic.jpg")
      .getDownloadURL()
      .then(pictureUrl => {
        return pictureUrl
      })
  }

  addWorkout(deadlift, benchPress, shoulderPress, squat) {
    var user = this.auth.currentUser;
    var timeStamp = new Date() //moment().format('MMMM Do YYYY, h:mm:ss a')

    try {
      this.db.collection("users")
        .doc(`${user.uid}`)
        .collection("workouts")
        .doc(`${timeStamp}`)
        .set({
          deadlift: deadlift,
          benchPress: benchPress,
          shoulderPress: shoulderPress,
          squat: squat,
          timeStamp: timeStamp
        })

      this.db.collection("users")
        .doc(`${user.uid}`)
        .collection("workouts")
        .doc('Latest-Workout')
        .set({
          deadlift: deadlift,
          benchPress: benchPress,
          shoulderPress: shoulderPress,
          squat: squat,
          timeStamp: timeStamp
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

  async getWorkoutField(field) {
    const data = await this.db.doc(`users/${this.auth.currentUser.uid}/workouts/Latest-Workout`).get()

    return data.get(field)
  }



  /*  getLatestWorkout(field) {
 
     var ref = this.db.doc(`users/${this.auth.currentUser.uid}`).collection("workouts")
 
     ref.orderBy("timeStamp", "desc").limit(1).get().then((snapshot) => {
       snapshot.docs.forEach(async doc => {
 
         const data = await this.db.doc(`users/${this.auth.currentUser.uid}/workouts/${doc.id}`).get()
         return data.get(field)
       })
     })
   } 

  /* async getWorkoutFields(field) {
    const hey = this.getLatestWorkout()

    const data = await this.db.doc(`users/${this.auth.currentUser.uid}/workouts/${hey}`).get()

    return data.get(field)
  } */

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
