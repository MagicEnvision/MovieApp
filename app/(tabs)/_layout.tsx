import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const _layout = () => {
  return (
    <Tabs 
    // screenOptions={{
    //     tabBarShowLabel: false,
    //     tabBarStyle: {
    //         padding: 0 ,
    //         margin: 0
    //     }
    // }}
    >
        <Tabs.Screen 
        name ="index"
        options={{
            title: 'Home',
            headerShown: false, 
            tabBarIcon: ({focused}) => (
                <>
                <ImageBackground 
                source={images.highlight}
                className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'

                >
                    <Image source={images.home}
                    tintColor="#151312"
                    className='size-5'/>
                    <Text>Home</Text>
                </ImageBackground>
                </>
            )
           
        }}
        />
        <Tabs.Screen 
        name='search'
        options={{
            title: 'Search',
            headerShown: false
        }}
        />
        <Tabs.Screen 
        name ="profile"
        options={{
            title: 'Home',
            headerShown: false
        }}
        />
        <Tabs.Screen 
        name='saved'
        options={{
            title: 'Search',
            headerShown: false
        }}
        />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})