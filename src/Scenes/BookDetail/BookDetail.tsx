import { useEffect, useState, useContext } from "react"
import { Text, View, ActivityIndicator,ScrollView } from "react-native"
import { BackendContext } from "../../Services/BackendProvider"
import colors from "../../styles/colors"
import { bookDetailStyles } from "../../styles/styles"


export const BookDetail = ({ route }: any) => {
  const backendService = useContext(BackendContext)
  const { bookId } = route.params  // prende l'ID passato dalla BookList

  const [book, setBook] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    backendService?.beService.getBookDetails(bookId)
      .then((data) => {
        setBook(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <ActivityIndicator />

  return (

    <ScrollView 
  style={bookDetailStyles.container}
  contentContainerStyle={bookDetailStyles.scrollContent}
>
  <View style={bookDetailStyles.titleContainer}>
    <Text style={bookDetailStyles.title}>{book?.title}</Text>
    <Text style={bookDetailStyles.author}>{book?.authors?.[0]?.name}</Text>
  </View>
  <View style={bookDetailStyles.descriptionContainer}>
    <Text style={bookDetailStyles.description}>{book?.description}</Text>
  </View>
</ScrollView>


  )
}
