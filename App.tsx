import {View, Text, StyleSheet} from 'react-native'
import {Lista} from './components/Lista'


function App (){
  return (
    <View>
    <Text style={styles.negrito}>Lista de Afazeres Domésticos </Text>
    <Lista periodo= 'Manhã' tarefas={[
      '1. lavar as roupas sujas. \n',
      ' 2. Lavar e guardar a louça. \n',
      ' 3. Limpar a pia da cozinha. \n',
      ' 4. Preparar o almoço. \n',
      ' 5. Colocar as roupas no varal. \n',
      
    ]}/ >
   
    <Lista  periodo= 'Tarde' tarefas={[
      ' 1. Limpar a mesa da cozinha. \n',
      ' 2. Varrer e passa o pano nos cômodos da casa. \n',
      ' 3. Lavar e guarda a louça. \n',
      ' 4. Limpar a pia da cozinha. \n',
      ' 5. Tirar as roupas do varal. \n',
      
    ]}/ >

    <Lista periodo= 'Noite' tarefas={[
      '1. Levar o cachorro para passar \n',
      ' 2. Limpar os calçados utilizados durante o dia. \n ',
      '3. Preparar o jantar \n' ,
      
    ]}/ >
    
    </View>
  )
}

const styles = StyleSheet.create ({
  negrito: {
    fontWeight: 'bold',
    fontSize: 19
  }
})

const style = StyleSheet.create ({
  negro: {
    fontWeight: 'bold',
  }
})
export default App
