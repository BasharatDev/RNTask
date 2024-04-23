import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import theme from '../utils/theme';

const CustomButton = ({title,customStyles, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={theme.activeOpacity} style={[styles.container,customStyles]}>
        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
container:{
    width:'90%',
    borderRadius:5,
    backgroundColor:theme.colors.black,
    alignItems:'center', 
    alignSelf:'center',
    marginTop:20
},
title:{
    fontSize:18,
    textAlign:'center',
    fontWeight:'bold',
    color:theme.colors.white,
    marginVertical:12
}
})


export default CustomButton