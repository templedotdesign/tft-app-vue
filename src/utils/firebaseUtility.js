import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBS5Zczgs8sJOrnfdWLfSsXSIMjJ4g5glE",
  authDomain: "tft-info.firebaseapp.com",
  databaseURL: "https://tft-info.firebaseio.com",
  projectId: "tft-info",
  storageBucket: "tft-info.appspot.com",
  messagingSenderId: "560074087980"
}

const firebaseApp = firebase.initializeApp(config)
const database = firebase.database()
const storage = firebase.storage()

export const agencyKeyRef = database.ref('agencyKey')
export const resourcesRef = database.ref('resources')
export const learningResourcesRef = database.ref('learningResources')

export const imgAaronCondon = storage.ref('aaron-condon.jpg')
export const imgAdamGrun = storage.ref('adam-grun.jpg')
export const imgBentz = storage.ref('bentz.jpg')
export const imgBobTemple = storage.ref('bob-temple.jpg')
export const imgJuliMaxon = storage.ref('juli-maxon.jpg')
export const imgJulieKimmel = storage.ref('julie-kimmel.jpg')
export const imgLisaPaulin = storage.ref('lisa-paulin.jpg')
export const imgMarcyRoll = storage.ref('marcy-roll.jpg')
export const imgInskeep = storage.ref('michele-todd-inskeep.jpg')
export const imgBassitt = storage.ref('mike-laura-bassitt.jpg')
export const imgShannonAllmon = storage.ref('shannon-allmon.jpg')
export const imgStacyGratz = storage.ref('stacy-gratz.jpg')
export const imgStephanieTemple = storage.ref('stephanie-temple.jpg')
