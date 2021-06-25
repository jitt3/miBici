/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {Link} from 'react-router-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={!isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.container}>
        <Link to="/map" underlayColor="#f0f4f7">
          <Text>Mapaasd</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;
