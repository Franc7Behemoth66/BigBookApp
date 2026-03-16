import { Image, StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import colors from "../styles/colors"
import { useState } from "react"
import { icon_close, icon_search } from "../Assets/Images"

type TextfieldProps = TextInputProps & {
  searchable?: boolean
  onIconPress?: () => void
}

export const Textfield = (props: TextfieldProps) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View 
      style={{
        ...styles.textfieldContainer, 
        borderColor: isFocused ? colors.lightPurple : "transparent"
      }}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <TextInput 
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.textfield} />
        {props.searchable ? (
          <TouchableOpacity onPress={props.value ? props.onIconPress : undefined} style={{flex: 1, alignItems: "center"}}>
            <Image 
              source={props.value ? icon_close : icon_search} 
              resizeMode="contain" 
              style={{
                width: 25, 
                height: 25, 
                tintColor: props.value ? colors.brightRed : colors.purple
              }} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textfieldContainer: {
     height: 50,
    backgroundColor: colors.yellow,
    marginHorizontal: 8,
    borderRadius: 20,
    borderWidth: 5,
    justifyContent: "center",

  },
  textfield: {
    flex: 7,
    height: 40,
    backgroundColor: colors.yellow,
    marginHorizontal: 10,
    fontSize: 18,
    color: colors.brightGreen,

    
  }
})