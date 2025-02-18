import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  display: {
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  inputText: {
    fontSize: 40,
    color: '#fff',
  },
  resultText: {
    fontSize: 30,
    color: '#888',
  },
  buttonsContainer: {
    paddingHorizontal: 10,
  },
  buttonsContainerLandscape: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  zeroButton: {
    width: 170, // Double size for "0"
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  operator: {
    backgroundColor: '#FF9500',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});
