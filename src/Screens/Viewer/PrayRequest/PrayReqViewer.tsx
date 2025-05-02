import React, { FC } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../Constants/Colors';
import { FONT_SIZE } from '../../../Constants/FontSize';

interface Props {
    navigation: any;
}

const PrayReqViewer: FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                {/* Header */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: COLORS.PrimaryColor,
                    padding: 15,
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color={COLORS.PrimaryColor} />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: FONT_SIZE.font_24,
                            fontWeight: 'bold',
                            color: COLORS.PrimaryColor,
                            textAlign: 'center',
                            flex: 1,
                        }}>
                        ஜெப விண்ணப்பம்
                    </Text>
                </View>

                {/* Description */}
                <Text
                    style={{
                        fontSize: FONT_SIZE.font_16,
                        color: COLORS.Black,
                        textAlign: 'center',
                        lineHeight: 27,
                        marginBottom: 25,
                        letterSpacing: 0.1,
                        marginTop: 10
                    }}>
                    உங்களுக்கு ஜெப உதவி தேவையெனில், கீழே கொடுக்கப்பட்டுள்ள விவரங்களை type செய்து சமர்ப்பிக்கவும். உங்களுக்காக ஜெபிக்கப்படும்.
                </Text>

                {/* Form */}
                <View
                    style={{
                        backgroundColor: COLORS.PrayRequest,
                        padding: 20,
                        borderRadius: 12,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 2,
                    }}>
                    {/* Name */}
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{
                            fontSize: FONT_SIZE.font_14,
                            color: COLORS.Black,
                            marginBottom: 5,
                            fontWeight: 'bold'
                        }}>
                            பெயர்
                        </Text>
                        <TextInput
                            placeholder="பெயர்"
                            placeholderTextColor={COLORS.Gray}
                            style={{
                                height: 44,
                                borderColor: COLORS.Gray,
                                borderWidth: 1,
                                borderRadius: 8,
                                paddingHorizontal: 10,
                                fontSize: FONT_SIZE.font_16,
                                color: COLORS.Black,
                                backgroundColor: COLORS.White,
                            }}
                        />
                    </View>

                    {/* Phone Number */}
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{
                            fontSize: FONT_SIZE.font_14,
                            color: COLORS.Black,
                            marginBottom: 5,
                            fontWeight: 'bold'

                        }}>
                            கைபேசி எண்
                        </Text>
                        <TextInput
                            placeholder="கைபேசி எண்"
                            placeholderTextColor={COLORS.Gray}
                            keyboardType="phone-pad"
                            style={{
                                height: 44,
                                borderColor: COLORS.Gray,
                                borderWidth: 1,
                                borderRadius: 8,
                                paddingHorizontal: 10,
                                fontSize: FONT_SIZE.font_16,
                                color: COLORS.Black,
                                backgroundColor: COLORS.White,
                            }}
                        />
                    </View>

                    {/* Prayer Request */}
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{
                            fontSize: FONT_SIZE.font_14,
                            color: COLORS.Black,
                            marginBottom: 5,
                            fontWeight: 'bold'

                        }}>
                            குறிப்புகள்
                        </Text>
                        <TextInput
                            placeholder="ஜெப விண்ணப்பம் குறிப்புகள்"
                            placeholderTextColor={COLORS.Gray}
                            multiline
                            numberOfLines={5}
                            textAlignVertical="top"
                            style={{
                                height: 120,
                                borderColor: COLORS.Gray,
                                borderWidth: 1,
                                borderRadius: 8,
                                paddingHorizontal: 10,
                                paddingTop: 10,
                                fontSize: FONT_SIZE.font_16,
                                color: COLORS.Black,
                                backgroundColor: COLORS.White,
                            }}
                        />
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: COLORS.PrimaryColor,
                            paddingVertical: 14,
                            borderRadius: 8,
                            marginTop: 10,
                            alignItems: 'center',
                        }}>
                        <Text style={{
                            color: COLORS.White,
                            fontSize: FONT_SIZE.font_16,
                            fontWeight: 'bold',
                        }}>
                            சமர்ப்பிக்கவும்
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default PrayReqViewer;
