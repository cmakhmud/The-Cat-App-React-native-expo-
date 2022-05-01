import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewDetailed:{
        width:'100%',
        height:'100%',
        padding:10,
    },
    image:{
        width:150,
        height:150,
        borderWidth:2,
        borderRadius:100,
        resizeMode:"contain"
    },
    logoIconWrapper:{
        width:'100%',
        height:50,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
    },
    heartIcon:{
        width:50,
        height:50,
        resizeMode:'contain'
    },
    logo:{
        fontSize:30,
        fontWeight:'bold',
        width:'80%'
    },
    imageDesc:{
        width:'100%',
        height:'100%',
        borderWidth:2,
        borderRadius:10,
        padding:10,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    description:{
        fontSize:15,
        textAlign:"justify"
    },
    origin:{
        fontSize:15
    },
    header:{
        width:'100%',
        height:200,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
})