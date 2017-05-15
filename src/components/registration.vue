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
  import * as firebase from '../utils/firebaseUtility'
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
          switch(this.nameInput) {
            case 'aaron-condon':
              firebase.imgAaronCondon.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Aaron')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'adam-grun':
              firebase.imgAdamGrun.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Adam')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'bentz':
              firebase.imgBentz.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Bentz')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'bob-temple':
              firebase.imgBobTemple.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Bob')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'juli-maxon':
              firebase.imgJuliMaxon.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Juli')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'julie-kimmel':
              firebase.imgJulieKimmel.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Julie')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'lisa-paulin':
              firebase.imgLisaPaulin.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Lisa')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'marcy-roll':
              firebase.imgMarcyRoll.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Marcy')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'michele-inskeep':
              firebase.imgInskeep.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Michele')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'todd-inskeep':
              firebase.imgInskeep.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Todd')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'mike-bassitt':
              firebase.imgBassitt.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Mike')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'laura-bassitt':
              firebase.imgBassitt.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Laura')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'shannon-allmon':
              firebase.imgShannonAllmon.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Shannon')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'stacy-gratz':
              firebase.imgStacyGratz.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Stacy')
              this.$store.dispatch('changeLoggedIn')
              break;
            case 'stephanie-temple':
              firebase.imgStephanieTemple.getDownloadURL().then((url) => {
                this.$store.dispatch('changeAvatarSrc', url)
              })
              this.$store.dispatch('changeUsername', 'Stephanie')
              this.$store.dispatch('changeLoggedIn')
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
          this.$store.dispatch('changeResourcesView', true)
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
  }
</style>
