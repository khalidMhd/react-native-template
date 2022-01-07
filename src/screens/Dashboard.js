import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import * as SecureStore from 'expo-secure-store';
import { useSelector } from 'react-redux'
import { localStore } from '../helpers/LocatStore';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../core/theme'
import Auth from '../helpers/auth'

export default function Dashboard({ navigation }) {
  const [userData, setUserData] = useState({})

  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;

  const logout = async () => {
    await SecureStore.deleteItemAsync("userInfo")
    navigation.reset({
      index: 0,
      routes: [{ name: 'StartScreen' }],
    })
  }
  
  useEffect(() => {

    Auth({navigation})

    localStore.function().then(data => {
      setUserData(JSON.parse(data))
    })

  }, [])

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        <Icon name="user" size={20} color={theme.colors.primary}/>  Login as: {userData?.data?.name}
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => logout()}
      >
        Logout
      </Button>
    </Background>
  )
}
