import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import useOrientation from '../../hooks/useOrientation';  // import your custom hook

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const isLandscape = useOrientation(); // Use the hook to get the orientation

const handlePress = (value: string) => {
  if (value === 'C') {
    setInput('');
    setResult('');
  } else if (value === '=') {
    try {
      const formattedInput = input.replace(/÷/g, '/').replace(/×/g, '*');
      // eslint-disable-next-line no-eval
      setResult(eval(formattedInput).toString());
    } catch (error) {
      setResult('Error');
    }
  } else {
    setInput(input + value);
  }
};


  const getButtons = () => {
    if (isLandscape) {
      return [
        ['6', '7', '8', '9', '±', 'C', '÷', '×'],
        ['5', '4', '3', '2', '1', '%', '-', '+'],
        ['0', '.', '='],
      ];
    }
    return [
      ['C', '±', '%', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
  };

  const buttons = getButtons();
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Display Section */}
      <View style={[styles.display, isLandscape && { flexDirection: 'column' }]}>
        <Text style={[styles.inputText, isLandscape && { fontSize: 40 }]}>
          {input || '0'}
        </Text>
        <Text style={[styles.resultText, isLandscape && { fontSize: 30 }]}>
          {result}
        </Text>
      </View>

      {/* Buttons Section */}
      <View style={[styles.buttonsContainer, isLandscape && { flexDirection: 'row-reverse', flexWrap: 'wrap' }]}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={[styles.row, isLandscape && { flexDirection: 'row' }]}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  btn === '0' ? styles.zeroButton : null,
                  ['÷', '×', '-', '+', '='].includes(btn) ? styles.operator : null,
                  isLandscape && { width: 80, height: 80 }
                ]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
