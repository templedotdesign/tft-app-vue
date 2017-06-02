<template>
  <div id='landing'>
    <div>
      <h1>We are Tons of Fun Travel</h1>
    </div>
    <div id='registration'>
      <input v-model='nameInput' class='reg-input' type='text' placeholder='enter username...'/>
      <input v-model='passwordInput' class='reg-input' type='text' placeholder='enter passkey...'/>
      <button class='reg-btn' @click='login()'>Log In</button>
    </div>
  </div>
</template>

<script>
  import * as firebase from '../../utils/firebaseUtility'

  export default {
    name: 'registrationVue',
    data() {
      return {
        nameInput: '',
        passwordInput: ''
      }
    },
    methods: {
      login() {
        if(this.passwordInput == this.agencyKey || this.passwordInput == this.adminKey) {
          const loweredName = this.nameInput.toLowerCase()
          const users = this.$store.getters.users
          let user = {}
          let favorites = []
          let userID = 0
          switch(loweredName) {
            case 'aaron-condon':
              firebase.imgAaronCondon.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Aaron')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'aaron-condon' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'adam-grun':
              firebase.imgAdamGrun.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Adam')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'adam-grun' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'john-bentz':
              firebase.imgBentz.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'John')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'john-bentz' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
              case 'dena-bentz':
                firebase.imgBentz.getDownloadURL().then((url) => {
                  this.$store.dispatch('changeAvatarSrc', url)
                })
                this.$store.dispatch('changeUsername', 'Dena')
                this.$store.dispatch('changeLandingView', true)
                this.$store.dispatch('changeRegistrationView', false)
                user = users.find((user) => { return user.username == 'dena-bentz' })
                userID = user.userID
                if(user.favorites) {
                  favorites = Object.values(user.favorites)
                  this.$store.dispatch('changeFavorites', favorites)
                }
                this.$store.dispatch('changeUserID', userID)
                break;
            case 'bob-temple':
              firebase.imgBobTemple.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Bob')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'bob-temple' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'juli-maxon':
              firebase.imgJuliMaxon.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Juli')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'juli-maxon' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'julie-kimmel':
              firebase.imgJulieKimmel.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Julie')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'julie-kimmel' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'lisa-paulin':
              firebase.imgLisaPaulin.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Lisa')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'lisa-paulin' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'marcy-roll':
              firebase.imgMarcyRoll.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Marcy')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'marcy-roll' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'michele-inskeep':
              firebase.imgInskeep.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Michele')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'michele-inskeep' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'todd-inskeep':
              firebase.imgInskeep.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Todd')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'todd-inskeep' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'mike-bassitt':
              firebase.imgBassitt.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Mike')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'mike-bassitt' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'laura-bassitt':
              firebase.imgBassitt.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Laura')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'laura-bassitt' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'shannon-allmon':
              firebase.imgShannonAllmon.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Shannon')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'shannon-allmon' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'stacy-gratz':
              firebase.imgStacyGratz.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Stacy')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'stacy-gratz' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            case 'stephanie-temple':
              firebase.imgStephanieTemple.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Stephanie')
              this.$store.dispatch('changeLandingView', true)
              this.$store.dispatch('changeRegistrationView', false)
              user = users.find((user) => { return user.username == 'stephanie-temple' })
              userID = user.userID
              if(user.favorites) {
                favorites = Object.values(user.favorites)
                this.$store.dispatch('changeFavorites', favorites)
              }
              this.$store.dispatch('changeUserID', userID)
              break;
            default:
              alert('unrecognized username')
              break;
          }
          if(this.passwordInput == this.adminKey) {
            this.$store.dispatch('changeAdminMode', true)
          } else {
            this.$store.dispatch('changeAdminMode', false)
          }
        } else {
          alert('incorrect agency key')
        }
      }
    },
    computed: {
      adminKey() {
        return this.$store.getters.adminKey
      },
      agencyKey() {
        return this.$store.getters.agencyKey
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  #landing {
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: #CF5300;
  }

  h1 {
    font-size: 5rem;
    color: white;
  }

  #registration {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
  }
  .reg-input {
    outline: none;
    border: none;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: .8rem;
    color: white;
    background-color: transparent;
    border-bottom: 1px solid white;
  }

  .reg-input::placeholder {
    color: white;
  }

  .reg-btn {
    flex-basis: 100px;
    padding: 25px 0;
    font-family: 'Raleway', sans-serif;
    color: white;
    border: 1px solid white;
    background-color: transparent;
    transition: .5s;
  }
  .reg-btn:hover {
    background-color: white;
    color: #CF5300;
    box-shadow: 1px 1px 5px black;
  }
</style>
