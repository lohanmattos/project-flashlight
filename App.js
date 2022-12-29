import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image , TouchableOpacity, Alert} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';


const App = () => {
  const [toggler, setToggler] = useState(false);

  const handleChangeToggle = () => {
    setToggler(oldToggler => !oldToggler);
  }

  useEffect(() => {
    //Liga flash do Celular
    Torch.switchState(toggler)
  },[toggler]);

  useEffect(() => {
    const subscription = RNShake.addListener(()=>{
      setToggler(oldToggler => !oldToggler);
    });

    return () => subscription.remove();
  },[]);


  return <View style={ toggler ? style.containerLight : style.container}>
        <TouchableOpacity onPress={handleChangeToggle}>
          <Image
            style={toggler ? style.lightinOn : style.lightinOff}
            source={toggler? require('./assets/icons/eco-light.png')
            :require('./assets/icons/eco-light-off.png')}
          />

        <Image
            style={style.dioLogo}
            source={toggler? require('./assets/icons/logo-dio.png')
            :require('./assets/icons/logo-dio-white.png')}
        />
        </TouchableOpacity>
    </View>;
}

export default App;


const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightinOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightinOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  lightinOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  }
})