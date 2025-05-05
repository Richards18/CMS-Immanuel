import React, {FC} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {COLORS} from '../Constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FONT_SIZE} from '../Constants/FontSize';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../Constants/ScreenNames';

interface Props {
  navigation: any;
}

const CustomMenuBar: FC<Props> = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
      {/* Header Section with Profile Image and Cancel Icon */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 10,
        }}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Icon name="close" size={30} color={COLORS.PrimaryColor} />
        </TouchableOpacity>
      </View>

      {/* Drawer Content */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{paddingTop: 20}}>
        {/* Drawer Items with Modern Design */}
        <DrawerItem
          label="முகப்பு"
          onPress={() => {
            navigation.navigate(SCREENS.HOME_SCREEN);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_16,
          }}
          icon={() => (
            <Icon name="home" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="செய்திகள்"
          onPress={() => {
            navigation.navigate(SCREENS.NEWS_SCREEN);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_16,
          }}
          icon={() => (
            <Icon name="newspaper" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="நிகழ்வுகள்"
          onPress={() => {}}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_16,
          }}
          icon={() => (
            <Icon name="calendar" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="புகைப்படங்கள்"
          onPress={() => {
            navigation.navigate(SCREENS.GALLERY_SCREEN);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_16,
          }}
          icon={() => (
            <Icon name="image" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="ஜெப விண்ணப்பம்"
          onPress={() => {
            navigation.navigate(SCREENS.PRAY_REQUEST);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_15,
          }}
          icon={() => (
            <Icon name="hand-left" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="நமது சபை"
          onPress={() => {
            navigation.navigate(SCREENS.OUR_CHURCH);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_16,
          }}
          icon={() => (
            <MaterialIcons
              name="church"
              size={22}
              color={COLORS.PrimaryColor}
            />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="தொடர்பு கொள்ள"
          onPress={() => {}}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_16,
          }}
          icon={() => (
            <Icon name="call" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        {/* Admin Login with a Distinct Background Color */}
        <DrawerItem
          label="Admin Login"
          onPress={() => {
            Linking.openURL('https://cmsimmanuelchurch.com/#/admin');
          }}
          labelStyle={{
            color: COLORS.White,
            fontSize: 18,
            marginLeft: -10,
          }}
          icon={() => <Icon name="log-in" size={22} color={COLORS.White} />}
          style={{
            marginVertical: 5,
            paddingVertical: 10,
            backgroundColor: '#FF5722', // Unique background for Admin Login
            borderRadius: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.1,
            shadowRadius: 3,
          }}
        />

        {/* Footer Section */}
        <View style={{marginTop: 30, paddingHorizontal: 20}}>
          <Text
            style={{
              color: COLORS.PrimaryColor,
              fontSize: 14,
              textAlign: 'center',
            }}>
            Version 1.0.0
          </Text>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomMenuBar;
