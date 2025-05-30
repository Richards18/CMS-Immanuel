import React, { FC, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../Constants/Colors';
import { FONT_SIZE } from '../../../Constants/FontSize';
import WorshipOrders from '../../../Modal/WorshipOrders';
import SpecialWorships from '../../../Modal/SpecialWorships';
import PrayerSupport from '../../../Modal/PrayerSupport';
import UpcomingPrayers from '../../../Modal/UpcomingPrayers';
import HistoryOfChurch from '../../../Modal/HistoryOfChurch';
import ImportantEvents from '../../../Modal/ImportantEvents';
import BirthdayWish from '../../../Modal/BirthdayWish';
import PhotoGallery from '../../../Modal/PhotoGallery';
import DonationModal from '../../../Modal/Donation';
import WeddingWish from '../../../Modal/WeddingWish';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

interface Props {
  renderMenuIcon: () => void;
  navigation: any;
}

const HomeViewer: FC<Props> = props => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 8,
          backgroundColor: COLORS.White,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 6,
        }}>
        <Image
          source={require('../../../Assets/ChurchLogo.png')}
          style={{ width: 180, height: 50 }}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => props.renderMenuIcon()}>
          <Ionicons name="menu" size={32} color={COLORS.PrimaryColor} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Welcome Text */}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: COLORS.Black,
              fontSize: FONT_SIZE.font_20,
              fontWeight: '900',
              lineHeight: 28,
              textAlign: 'center',
              marginBottom: 12,
            }}>
            {/* CMS பரி. இம்மானுவேல் தேவாலயத்திற்கு உங்களை அன்புடன் வரவேற்கிறோம்! */}
            {t('welcome_header')}
          </Text>

          <Text
            style={{
              color: COLORS.Black,
              fontSize: FONT_SIZE.font_16,
              fontWeight: '700',
              textAlign: 'center',
              marginTop: 10,
              lineHeight: 22,
            }}>
            விசுவாசம், அன்பு மற்றும் ஐக்கியம்
          </Text>
        </View>

        {/* Descriptive Text */}
        <View style={{ marginTop: 20 }}>
          {[
            `நம்முடைய ஆண்டவராகிய இயேசு கிறிஸ்துவின் ஈடு இணையற்ற நாமத்தினாலே எமது ஆலய முகநூல் பக்கத்திற்கு அன்புடன் வரவேற்கிறோம்.`,
            `கிறிஸ்துவின் மேல் நாங்கள் வைத்திருக்கும் விசுவாசத்துடனே, அவருடைய திவ்விய அன்பினை ஒருவருக்கொருவர் பகிர்ந்து, ஐக்கியத்துடனே திருச்சபை குடும்ப உறுப்பினர்கள் அனைவருமாக ஒன்றாக கூடி, ஆலயத்திலே ஆண்டவரை ஆராதித்து மற்றவர்களுக்குச் சேவை செய்வதே எங்கள் பிரதான நோக்கம்.`,
            `கிறிஸ்துவை விசுவாசித்து ஆண்டவருடன் உள்ள உறவை ஆழப்படுத்த விரும்புகிற யாவரையும், குடும்பமாக வந்து எங்களுடன் இணைந்து ஆண்டவரை ஆராதிக்க அன்போடு அழைக்கிறோம்.`,
            `நாம் ஒருமித்து ஆண்டவருடைய நாமத்தை உயர்த்துவோமாக. ஆமென்.`,
          ].map((para, index) => (
            <Text
              key={index}
              style={{
                color: COLORS.Black,
                fontSize: FONT_SIZE.font_16,
                fontWeight: '300',
                marginTop: index === 0 ? 0 : 12,
                lineHeight: 24,
                textAlign: 'center',
              }}>
              {para}
            </Text>
          ))}
        </View>

        {/* Watch Latest Worship Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: 300,
            height: 40,
            backgroundColor: COLORS.ButtonColor,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            alignSelf: 'center',
            borderRadius: 25,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 6,
            marginBottom: 5,
          }}
          onPress={() =>
            Linking.openURL('https://www.youtube.com/@cmsimmanuel4864/streams')
          }>
          <Text
            style={{
              color: COLORS.White,
              fontSize: FONT_SIZE.font_14,
              fontWeight: '600',
              letterSpacing: 1,
              // textAlign: 'center',
            }}>
            சமீபத்திய ஆராதனையை காண
          </Text>
        </TouchableOpacity>

        {/* Cards */}
        <WorshipOrders />
        <SpecialWorships />
        <PrayerSupport />
        <UpcomingPrayers />
        <HistoryOfChurch />
        <ImportantEvents />
        <BirthdayWish />
        <WeddingWish />
        <DonationModal />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeViewer;
