import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCounter } from "../hooks/counter";
import Input from "../components/Input";
import Form from "../components/Form";
import ProfileImage from "../components/ProfileImage";
import Button from "../components/Button";
import Radio from "../components/Radio/inpus";
import Group from "../components/Group";
import StepForm from "../components/StepForm";
import { SignUpIcon } from "../Icons";
import './SignUp.css';
import { validateValues, REGULAR_PATTERNS } from "../helpers";
import useSession from "../hooks/useSession";

export default function SignUp(){
  const navigate = useNavigate();
  const {saveSession} = useSession();

  const [animation, setAnimation] = useState('');
  const [hideAnimation, setHideAnimation] = useState('');
  const {counter, increaseCounter, decreaseCounter} = useCounter(0);
  const [mode, setMode] = useState(true);

  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [telephone, setTelephone] = useState('');
  const [telephoneError, setTelephoneError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [birthdate, setBirthdate] = useState('');
  const [birthdateError, setBirthdateError] = useState(false);

  const [profileImage, setProfileImage] = useState();

  useEffect(()=>{
    if(mode)
        setAnimation('step-form--show-reverse');
    else
        setAnimation('step-form--show');
  }, [counter]);

  useEffect(() => {
      if(hideAnimation === '') return;

      setTimeout(()=> {
          if(mode)
              increaseCounter();
          else 
              decreaseCounter();
          setHideAnimation('');
      }, 500);
  }, [hideAnimation]);


  const onSignUp = (event) => {
      event.preventDefault();
      // fetch data an prepare everything to login
      const userData = {
        name,
        birthdate,
        nickname,
        email,
        password,
        profileImage
      };

      saveSession( userData, 'SESSION_V0' );
      navigate('/sign-in');

      console.dir(userData);
  }

  const onPreviousPage = (event) => {
    if(counter <= 0) return;

    setHideAnimation('step-form--hide');
    setMode(false);
  }

  const onNextPage = (event) => {
    //First it should be validated current inputs of a form
    let valid = 0;
    if(counter === 0) {
      valid = validateValues([
        {value: name, pattern: REGULAR_PATTERNS.TEXT_PATTERN, setError: setNameError},
        {value: email, pattern: REGULAR_PATTERNS.EMAIL_PATTERN, setError: setEmailError},
        {value: birthdate, pattern: REGULAR_PATTERNS.DATE_PATTERN, setError: setBirthdateError}
      ]);
    }
    else if(counter === 1){
      valid = validateValues([
        {value: nickname, pattern: REGULAR_PATTERNS.WORD_PATTERN, setError: setNicknameError},
        {value: password, pattern: REGULAR_PATTERNS.PASSWORD_PATTERN, setError: setPasswordError}
      ]);
    }

    if(valid) return;
    console.log('It was a validated ', valid);
    console.dir({
      name, fathersName, mothersName, nickname, email, password, confirmPassword
    });
    // Current page must hide with animation and set current page to next one
    setHideAnimation('step-form--hide-reverse');
    setMode(true);
  }

  return (
      <main className='signup-page'>
        <h1 className="title">Sign Up</h1>
        <p className="info">Welcome to mini twitter a social media with some cool features</p>
        <Form onSubmitEvent={onSignUp} styleClasses={['form--md','form--space']}>
          <StepForm active={counter === 0} showAnimation = {animation} hideAnimation={hideAnimation}>
          <h2 className="subtitle">Personal Data</h2>
            <Input value={name} setValue={setName} type={'text'} placeholder={'name'} message={'Please, enter your name'} error = {nameError} />
            <Input value={telephone} setValue={setTelephone} type={'text'} placeholder={'telephone'} message={'Please, enter a valid telephone'} error = {telephoneError} />
            <Input value={email} setValue={setEmail} type={'email'} placeholder={'email'} message={"Enter a valid email"} error={emailError}/>
            <Input value={birthdate} setValue={setBirthdate} type={'date'} placeholder={'Birthdate'} message={"Please enter your birthdate"} error={birthdateError}/>
          </StepForm>
          <StepForm active={counter === 1} showAnimation = {animation} hideAnimation={hideAnimation}>
            <h2 className="subtitle">Account Data</h2>
            <Input value={nickname} setValue={setNickname} type={'text'} placeholder={'nickname'} message={"A nickname can have symbols without white spaces"} error={nicknameError} />
            <Input value={password} setValue={setPassword} type={'password'} placeholder={'password'} message={"A password must have an uppercase a lowercase a symbol and at least characters"} error={passwordError} />
            <Input value={confirmPassword} setValue={setConfirmPassword} type={'password'} placeholder={'confirm password'} />
            
          </StepForm>
          <StepForm active={counter === 2} showAnimation = {animation} hideAnimation={hideAnimation}>
            <h2 className="subtitle">Profile Image</h2>
            <ProfileImage placeholder={'Pick an Image for your profile'} image={profileImage} setImage={setProfileImage} />
          </StepForm>
          <Group styleClasses={['group--space-between']}>
          {
            counter > 0 && <Button styleClasses={['button--secondary']} onClickButton={onPreviousPage}>Previous</Button>
          }
          {
            counter < 2 
            ?
            <Button styleClasses={['button--right', 'button--primary']} onClickButton={onNextPage}>Next</Button>
            :
            <Button styleClasses={['button--primary', 'button--gap-sm', 'button--right']} type={'submit'}>
              <SignUpIcon width={15} height={15} stroke={'var(--nyanza)'} strokeWidth={4} />
              <span>Sign Up</span>
            </Button>
          }
          </Group>
            
        </Form>
        <p className="info">
          <span>Have an account already? </span>
          <Link to={'../sign-in'}>sign in here</Link>
        </p>
          
      </main>
  )
}