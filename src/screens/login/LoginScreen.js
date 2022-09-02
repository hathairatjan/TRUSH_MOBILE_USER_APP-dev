import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, Text} from 'react-native-paper';

import Styles from '../../Styles';
import {useAuth} from '../../contexts/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({navigation}) => {
  const {signInWithEmailAndPassword} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(email, password);
  };

  return (
    <React.Fragment>
      <ScrollView style={Styles.container}>
        <TextInput
          left={<Icon name="home" color="#c4c4c4" size={50} />}
          label={<Text style={{fontSize: 20}}> Email </Text>}
          mode="outlined"
          style={{height: 50, fontSize: 15, marginBottom: 8}}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label={<Text style={{fontSize: 20}}>Password</Text>}
          mode="outlined"
          style={{height: 50, fontSize: 15, marginBottom: 8}}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Button
          mode="contained"
          style={{height: 50, justifyContent: 'center'}}
          onPress={handleLogin}>
          Sign In
        </Button>
        <Text> or use one of your social profiles. </Text>
      </ScrollView>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 32,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text> Invalid username and / or password. </Text>
        <Button
          style={{padding: 0, margin: 0}}
          onPress={() => navigation.navigate('RegisterScreen')}>
          SIGN UP
        </Button>
      </View>
    </React.Fragment>
  );
};

export default LoginScreen;
