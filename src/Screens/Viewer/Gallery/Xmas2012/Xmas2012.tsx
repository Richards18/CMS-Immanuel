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

const screenWidth = Dimensions.get('window').width;

const Xmas2012: FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageSources = [
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_2.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_3.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_1.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_4.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_5.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_6.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_7.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_8.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_9.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_10.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_11.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_12.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_13.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_14.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_15.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_16.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_17.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_18.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_19.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_20.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_21.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_22.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_23.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_24.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_25.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_26.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_27.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_28.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_29.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_30.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_31.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_32.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_33.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_34.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_35.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_36.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_37.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_38.jpg'),
    require('../../../../Assets/Gallery/Xmas2012/Xmas2012_39.jpg'),
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
      <StatusBar
        backgroundColor={COLORS.PrimaryColor}
        barStyle="light-content"
      />

      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.PrimaryColor,
          paddingHorizontal: 10,
          height: 80,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          elevation: 4,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{padding: 4, marginRight: 15}}>
          <Ionicons name="arrow-back" size={24} color={COLORS.White} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: FONT_SIZE.font_18,
            fontWeight: 'bold',
            color: COLORS.White,
            flex: 1,
            textAlign: 'center',
            marginLeft: -20,
          }}>
          கிறிஸ்துமஸ் மரவிழா கொண்டாட்டம் 2012
        </Text>
      </View>

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

export default Xmas2012;
