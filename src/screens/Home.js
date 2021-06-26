import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';
import Button from '../components/Button';
import Loading from '../components/Loading';
import Text from '../components/Text';
import {colors} from '../utils/helper';

const reviewSchema = yup.object({
  name: yup
    .string()
    .required('Required Field')
    .min(6, 'Name must contain more than 6 characters'),
  email: yup.string().required('Required Field').email('Email must be valid'),
  password: yup
    .string()
    .required('Required Field')
    .min(8, 'Password must be more than 8 characters'),
});

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [passwordHide, setPasswordHide] = useState(true);

  const handleSubmit = async values => {
    alert('Call api');
    console.log(values);

    // setLoading(true);
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <ScrollView>
        <View style={styles.imageWrapper}></View>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={reviewSchema}
          onSubmit={values => {
            handleSubmit(values);
          }}>
          {props => {
            return (
              <View style={{margin: 20}}>
                <Text
                  bold
                  color={colors.black}
                  style={{
                    fontSize: 30,
                    marginVertical: 50,
                  }}>
                  Create an Account
                </Text>
                <Text style={{marginBottom: 10}} color={colors.lightGrey}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidi minim
                </Text>
                <TextInput
                  placeholder="Name"
                  style={styles.inputStyle}
                  onChangeText={props.handleChange('name')}
                  value={props.values.name}
                />
                {props.errors.name && props.touched.name && (
                  <View style={{marginTop: 5, marginBottom: 7}}>
                    <Text color="red">{props.errors.name}</Text>
                  </View>
                )}
                <TextInput
                  placeholder="Email Address"
                  style={styles.inputStyle}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
                {props.errors.email && props.touched.email && (
                  <View style={{marginTop: 5, marginBottom: 7}}>
                    <Text color="red">{props.errors.email}</Text>
                  </View>
                )}
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    placeholder="Password"
                    style={styles.inputStyle}
                    secureTextEntry={passwordHide ? true : false}
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
                  />
                  <TouchableOpacity
                    style={{position: 'absolute', right: 15}}
                    onPress={() => setPasswordHide(!passwordHide)}>
                    <Text bold style={{color: 'blue'}} color={colors.blue}>
                      {passwordHide ? 'Show' : 'Hide'}
                    </Text>
                  </TouchableOpacity>
                </View>
                {props.errors.password && props.touched.password && (
                  <View style={{marginTop: 5, marginBottom: 7}}>
                    <Text color="red">{props.errors.password}</Text>
                  </View>
                )}
                <Button
                  title="CREATE AN ACCOUNT"
                  style={{marginTop: 10}}
                  color={colors.blue}
                  textColor={colors.background}
                  onPress={() => props.handleSubmit()}
                />
                <Text
                  style={{marginTop: 15, lineHeight: 20}}
                  color={colors.lightGrey}>
                  By tapping Sign up, you accept all our{' '}
                  <Text bold color={colors.blue}>
                    terms
                  </Text>{' '}
                  and{' '}
                  <Text bold color={colors.blue}>
                    conditions
                  </Text>
                  .
                </Text>
                <Text
                  style={{alignSelf: 'center', marginTop: 40, marginBottom: 10}}
                  color={colors.lightGrey}>
                  Already have an account?
                </Text>
                <Button
                  title="SIGN IN"
                  style={{marginTop: 10}}
                  color={colors.lightBlue}
                  textColor={colors.black}
                />
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
});
