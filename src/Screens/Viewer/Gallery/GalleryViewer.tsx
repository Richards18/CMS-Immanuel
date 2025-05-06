import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../Constants/Colors';
import {FONT_SIZE} from '../../../Constants/FontSize';
import {SCREENS} from '../../../Constants/ScreenNames';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Header from '../../../Header/Header';

interface Props {
  navigation: any;
}

const GalleryViewer: FC<Props> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const galleryItems = [
    {
      screen: SCREENS.WOMENS_FEST,
      image: require('../../../Assets/Gallery/WomensFest/Womens_Fest3.jpeg'),
      title: 'பெண்கள் பண்டிகை 2023',
    },
    {
      screen: SCREENS.HEMA_JOHN,
      image: require('../../../Assets/Gallery/HemaJohnMusic/HemaJohn1.jpeg'),
      title: 'ஹேமா ஜான் இசை நிகழ்ச்சி 2023',
    },
    {
      screen: SCREENS.BHAJAN_SERMON,
      image: require('../../../Assets/Gallery/BhajanSermon/BhajanSermon1.jpeg'),
      title: 'பஜனை பிரசங்கம் 2023',
    },
    {
      screen: SCREENS.ASANAM_2023,
      image: require('../../../Assets/Gallery/Asanam2023/Asanam2023_1.jpeg'),
      title: 'பிரதிஷ்டை மற்றும் அசன பண்டிகை 2023',
    },
    {
      screen: SCREENS.DIAMOND_JUBILEE,
      image: require('../../../Assets/Gallery/DiamondJubilee/Diamond1.jpeg'),
      title: 'வைர விழா பூத்தக வெளியீட்டு 2023',
    },
    {
      screen: SCREENS.VBS_2023,
      image: require('../../../Assets/Gallery/VBS2023/VBS2023_1.jpeg'),
      title: 'பவள விழா மண்டபம் தரப்பு மற்றும் V.B.S கலை நிகழ்ச்சிகள் 2023',
    },
    {
      screen: SCREENS.XMAS_2018,
      image: require('../../../Assets/Gallery/Xmas2018/Xmas2018_1.jpeg'),
      title: 'கிறிஸ்துமஸ் மரவிழா கொண்டாட்டம் 2018',
    },
    {
      screen: SCREENS.XMAS_2012,
      image: require('../../../Assets/Gallery/Xmas2012/Xmas2012_1.jpg'),
      title: 'கிறிஸ்துமஸ் மரவிழா கொண்டாட்டம் 2012',
    },
    {
      screen: SCREENS.HILL_PEOPLE,
      image: require('../../../Assets/Gallery/HillPeople2014/HillPeople2014_1.jpg'),
      title: 'மலை வாழ் மக்கள் சுற்றுப்பயணம் 2014',
    },
    {
      screen: SCREENS.SILVER_JUBILEE,
      image: require('../../../Assets/Gallery/SilverJubilee/SilverJubilee1.jpg'),
      title: '25 ஆண்டு வெள்ளி விழா கொண்டாட்டம்',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
      {/* Header */}

      <Header title="நிகழ்வுகளின் புகைப்படத்தொகுப்பு" screen="GALLERY_SCREEN" />

      {/* Loading Skeleton or Content */}
      {isLoading ? (
        <View style={{flex: 1, padding: 16}}>
          <SkeletonPlaceholder borderRadius={10}>
            {[...Array(6)].map((_, index) => (
              <View key={index} style={{marginBottom: 16}}>
                <View style={{width: '100%', height: 180, borderRadius: 10}} />
                <View
                  style={{
                    marginTop: 10,
                    height: 20,
                    width: '70%',
                    alignSelf: 'center',
                    borderRadius: 4,
                  }}
                />
              </View>
            ))}
          </SkeletonPlaceholder>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{padding: 16}}>
          <Text
            style={{
              fontSize: FONT_SIZE.font_14,
              color: COLORS.PrimaryColor,
              marginBottom: 20,
              textAlign: 'justify',
            }}>
            CMS பரி. இம்மானுவேல் தேவாலயத்தை ஆத்துமாக்களை தேவ அன்பிற்குள்ளாக
            இணைக்கும் இடமாக்கிய ஆராதனை மற்றும் சிறப்பு பண்டிகை கொண்டாட்டங்களை
            காண புகைப்படத் தொகுப்பை புரட்டுங்கள்.
          </Text>

          {galleryItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              onPress={() => navigation.navigate(item.screen)}
              style={{
                backgroundColor: '#f9f9f9',
                borderRadius: 10,
                overflow: 'hidden',
                marginBottom: 16,
                elevation: 2,
              }}>
              <Image
                source={item.image}
                style={{width: '100%', height: 180}}
                resizeMode="cover"
              />
              <View style={{padding: 10}}>
                <Text
                  style={{
                    fontSize: FONT_SIZE.font_14,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: COLORS.PrimaryColor,
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default GalleryViewer;
