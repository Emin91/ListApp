import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    borderRadius: 3,
    flexDirection: 'row',
    backgroundColor: '#08DBA5',
    marginBottom: 5,
  },
  headerTitle: {
    flex: 0.75,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: '#0F2635',
  },
  headerCount: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    borderWidth: 4,
    borderColor: '#04956C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 15,
    color: '#0F2635',
  },
});

export default styles;
