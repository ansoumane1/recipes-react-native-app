import {StyleSheet} from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        flex:1,
        borderRadius:10,
        padding:15,
    },
    text: {
        color: colors.white,
        fontSize:16,
        fontWeight: 500
    }

});

export default styles;