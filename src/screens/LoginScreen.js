import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { connect } from 'react-redux'

import { authenticate, signInWithGoogleAsync } from '../utils/userAuthentication';
import { fetchUser, setUser } from '../actions/userActions'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.props.fetchUser()
  }

  _login = () => {
    console.log('clicked')
    signInWithGoogleAsync().then(user => {
      this.props.setUser(user)
    })
  }

  _logout = () => {
    this.props.setUser(null)
  }

  render() {
    if(authenticate(this.props.user)) {
      return (
        <View>
          <Button
          style={{ alignContent: 'center'}}
          onPress={() => this._logout()}
          icon={{ name: 'google', type: 'font-awesome'}}
          title='Log Out'
          />
          <Text h3>{this.props.user.name}</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Button
            style={{ alignContent: 'center'}}
            onPress={() => this._login()}
            icon={{ name: 'google', type: 'font-awesome'}}
            title='Login With Google'
          />
        </View>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {setUser, fetchUser})(LoginScreen) 