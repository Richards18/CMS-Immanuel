import React, {FC, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {FONT_SIZE} from '../../../../Constants/FontSize';
import {COLORS} from '../../../../Constants/Colors';
import Header from '../../../../Header/Header';

const screenWidth = Dimensions.get('window').width;

const WomensFestival: FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageSources = [
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest1.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest2.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest3.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest4.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest5.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest6.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest7.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest8.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest9.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest10.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest11.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest12.jpeg'),
    require('../../../../Assets/Gallery/WomensFest/Womens_Fest13.jpeg'),
  ];

  const openModal = (image: any) => {
    setSelectedImage(image);
    setLoadingImage(true);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const renderImageItem = ({item}: {item: any}) => (
    <TouchableOpacity
      onPress={() => openModal(item)}
      style={{
        width: (screenWidth - 48) / 2,
        margin: 8,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: COLORS.TextInput,
      }}>
      <Image
        source={item}
        style={{width: '100%', height: 150}}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
      <Header title="பெண்கள் பண்டிகை 2023" screen="WOMENS_FEST" />

      {/* Title */}
      <View style={{padding: 16}}>
        <Text
          style={{
            color: COLORS.ButtonColor,
            fontSize: FONT_SIZE.font_18,
            fontWeight: 'bold',
          }}>
          முகப்பு / புகைப்படத் தொகுப்பு
        </Text>
      </View>

      {/* Grid of Images */}
      <FlatList
        data={imageSources}
        renderItem={renderImageItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{paddingHorizontal: 8, paddingBottom: 20}}
      />

      {/* Image Preview Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={closeModal}
              style={{position: 'absolute', top: 50, right: 30, zIndex: 2}}>
              <Ionicons name="close-circle" size={44} color={COLORS.White} />
            </TouchableOpacity>

            {selectedImage ? (
              <>
                {loadingImage && (
                  <ActivityIndicator size="large" color={COLORS.White} />
                )}
                <Image
                  source={selectedImage}
                  style={{
                    width: '90%',
                    height: '80%',
                    borderRadius: 10,
                  }}
                  resizeMode="contain"
                  onLoadEnd={() => setLoadingImage(false)}
                />
              </>
            ) : (
              <Text style={{color: 'white'}}>Loading image...</Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default WomensFestival;
