import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HomeProfile from '../../components/molecules/HomeProfile';
import { DoctorCategory, RatedDoctor, NewsItem } from '../../components/molecules';
import { fonts, colors, getData } from '../../utils';
import { Gap } from '../../components/atoms';
import {JSONCategoryDoctor, TopRateDoctor, GoodNews, DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';

const Docter = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.content} >
                <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.wrapperSection}>
                    <Gap height={30}/>
                    <HomeProfile onPress={ () => navigation.navigate('UserProfile')}/>
                    <Text style={styles.welcome} >Mau konsultasi dengan siapa hari ini?</Text>
                </View>
                <View style={styles.wrapperScroll} >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <View style={styles.category}>
                            <Gap width={32}/>
                            {
                                JSONCategoryDoctor.data.map(item => {
                                    return <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate('ChooseDoctor')} />
                                })
                            }
                            <Gap width={22}/>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.wrapperSection} >
                    <Text style={styles.sectionLabel} >Top Rated Doctors</Text>
                        <RatedDoctor avatar={DummyDoctor1}  name="Alexa Rachel" desc="Psikiater" onPress={() => navigation.navigate('DoctorProfile')} />
                        <RatedDoctor avatar={DummyDoctor2}  name="Sunny Frank" desc="Dentist" onPress={() => navigation.navigate('DoctorProfile')} />
                        <RatedDoctor avatar={DummyDoctor3}  name="Poo Minn" desc="Padiatrist" onPress={() => navigation.navigate('DoctorProfile')} />
                    <Text style={styles.sectionLabel} >Good News</Text>
                </View>
                {
                    GoodNews.data.map(item => {
                        return <NewsItem key={item.id} judul={item.judul} date={item.date} />
                    })
                }
                <Gap height={30}/>
                </ScrollView>
            </View>
        </View>
        
    )
}

export default Docter

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.secondary,
        flex : 1
    },
    content : {
        backgroundColor : colors.white,
        flex : 1,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
    },
    welcome : {
        fontSize : 20,
        fontFamily: fonts.primary[600],
        color : colors.text.primary,
        marginTop : 30,
        marginBottom : 16,
        maxWidth : 209
    },
    category : {
        flexDirection : "row"
    },
    wrapperScroll: {
        marginHorizontal: -16
    },
    wrapperSection : {
        paddingHorizontal : 16,
    },
    sectionLabel : {
        fontSize : 16,
        fontFamily :fonts.primary[600],
        color: colors.text.primary,
        marginTop : 30,
        marginBottom : 16
    }
})
