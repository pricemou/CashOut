import React from 'react';
import {Text, View} from 'react-native';

// import packer
import { Appbar } from 'react-native-paper';
import Styles from './NavBarStyle';

const NavBar = () => {
  return (
    <Appbar.Header style={Styles.wrapper}>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => console.log('Pressed archive')}
        />
        <Text style={Styles.context}>Retrait</Text>
    </Appbar.Header>
  );
};


export default NavBar;