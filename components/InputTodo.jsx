import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const InputTodo = () => {
    const [createInputText, setCreateInputText] = useState('');

    return(
        <TextInput
          style={styles.textInput}
          placeholder="Enter item"
          value={createInputText}
        />
    )
};
export default InputTodo;