import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { OpenSans_600SemiBold, OpenSans_400Regular, useFonts } from '@expo-google-fonts/open-sans';
import AppNavigator from './src/components/AppNavigator';


const App: React.FC = (): JSX.Element => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    OpenSans_600SemiBold, OpenSans_400Regular
  });


  useEffect(() => {
    (async () => {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Ionicons.font);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    </>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});

export default App;
