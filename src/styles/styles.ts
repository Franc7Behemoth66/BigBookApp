import { StyleSheet } from "react-native";
import colors from "./colors"

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
})
export const bookListStyles = StyleSheet.create({
  container: {
    flex : 1,
    padding : 16,
    backgroundColor: colors.white

  },
 title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.darkPurple,
    marginBottom: 16,
    textAlign: "center",


  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.lighterPurple,
    borderRadius: 50,
    marginHorizontal: 12,


  },
  item: {
    fontSize: 16,
    color: colors.purple,
    fontWeight: "500",
    paddingLeft: 4
  },
   separator: {
    height: 8
  }


}
)

export const bookDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighterPurple,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
    gap: 16,
  },
  titleContainer: {
    backgroundColor: colors.yellow,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: colors.darkPurple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  descriptionContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: colors.darkPurple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  author: {
    fontSize: 14,
    color: colors.darkPurple,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
  },
  description: {
    fontSize: 15,
    color: colors.darkGray,
    lineHeight: 26,
  },
  title: {
  fontSize: 22,
  fontWeight: '700',
  color: colors.darkPurple,
  textAlign: 'center',
},  
})