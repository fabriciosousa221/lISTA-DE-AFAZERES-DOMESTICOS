import {View, Text, StyleSheet} from 'react-native'

 type Props ={
   periodo: string
   tarefas: string []
 }
export const Lista = (props: Props) => {
  return (
  <View>
  <Text style={styles.negrito}>  {props.periodo} </Text>
  <Text styles={styles.negrito} > {props.tarefas} </Text>
  </View>
  )
}

const styles = StyleSheet.create ({
  negrito: {
    fontWeight: 'bold',
  }
})

const style = StyleSheet.create ({
  negrito: {
    fontWeight: 'bold',
  }
})

