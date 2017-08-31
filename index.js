import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { 
  AdMobBanner, 
  AdMobInterstitial, 
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';

export default class RNAdmobExample extends Component {
  constructor(props) {
    super(props);
  
    this.state = { };
    AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
  }

  bannerError(err) {
    console.log(err);
  }
 
  render() {
    return (
      <View
        style={{
          marginTop: 100,
          alignItems: 'center',
        }}>
        <Text>"Merhaba Dünya." - Bilgisayar ®</Text>

        <TouchableOpacity
          onPress={() => {
            AdMobRewarded.setTestDeviceID('EMULATOR');
            AdMobRewarded.requestAd(error => {
              AdMobRewarded.showAd((error) => {});
            });
          }}>
          <Text>Tam Ekran</Text>
        </TouchableOpacity>

        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError} />
      </View>
    );
  }
}

AppRegistry.registerComponent('RNAdmobExample', () => RNAdmobExample);
