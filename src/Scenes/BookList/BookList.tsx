import { useNavigation } from "@react-navigation/native"
import { useContext, useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator, Alert } from "react-native"
import { BackendContext } from "../../Services/BackendProvider"
import { bookListStyles } from "../../styles/styles"
import { Textfield } from "../../Components/Textfield"
import colors from "../../styles/colors"
import { icon_info } from "../../Assets/Images"

export const BookList = () => {
  const navigation = useNavigation<any>()
  const backendService = useContext(BackendContext)
  const { t } = useTranslation()

  const [query, setQuery] = useState("")
  const [libri, setLibri] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

 const fetchBookList = () => {
  // Correzione Null Safety: Interrompi se il servizio non è disponibile
  if (!backendService?.beService) {
      console.warn("Backend service non disponibile");
      return;
  }

  setLoading(true)
  backendService.beService.getBookList(`query=${query}`).then((listResponse) => {
    console.log("RISPOSTA API:", JSON.stringify(listResponse))
    setLibri(listResponse?.books.flat() ?? [])
    setLoading(false)
  }).catch((error) => {
    setLoading(false)
    Alert.alert("Error fetching book list", error.message)
  })
}
  // Un solo useEffect con debouncing da 500ms
  useEffect(() => {
    if (query.length < 3) {
      setLibri([])
      return
    }

    const delayDebounceFn = setTimeout(() => {
      fetchBookList()
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  
  return (
    <View style={bookListStyles.container}>
      <Text style={bookListStyles.title}>{t("book_list")}</Text>
      <Textfield
        style={{ color: colors.brightGreen }}
        searchable
        placeholderTextColor={colors.purple}
        placeholder="Cerca libro..."
        value={query}
        onChangeText={setQuery}
        onIconPress={() => setQuery("")}
      />
      <Text style={bookListStyles.separator}></Text>

      {loading && <ActivityIndicator color={colors.purple} style={{ marginTop: 20 }} />}

      <FlatList
        data={libri}
        keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("BookDetail", { bookId: item.id })}
          >
            <View style={bookListStyles.row}>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={icon_info}
                  style={{ width: 25, height: 25, tintColor: colors.yellow }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={bookListStyles.item}>{item.title}</Text>
                <Text style={{ color: colors.purple, fontSize: 12 }}>
                  {item.authors?.[0]?.name ?? "Autore sconosciuto"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={bookListStyles.separator} />}
      />
    </View>
  )
}
