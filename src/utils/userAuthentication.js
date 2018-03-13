import Expo from 'expo'

const ANDROID_ID = '59442394661-ntdadk8apn72scr87ha1r44cqsjcddfd.apps.googleusercontent.com'
const IOS_ID = '59442394661-qrl5ht17pf4q9ra63ccq3hnas0jr0pki.apps.googleusercontent.com'
const SUCCESS = 'success'

export const signInWithGoogleAsync = async () => {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: ANDROID_ID,
      iosClientId: IOS_ID,
      scopes: ['profile', 'email'],
    })

    if (result.type === SUCCESS) {
      return result.user
    } else {
      return { cancelled: true }
    }
  } catch(e) {
    return { error: true }
  }
}

export const authenticate = (user) => {
  if (user !== null ) {
    return true
  }
}