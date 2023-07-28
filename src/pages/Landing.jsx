import { useState, useEffect } from 'react';
import { useCounter } from '../hooks/counter';
import Form from '../components/Form';
import StepForm from '../components/StepForm';
import Input from '../components/Input';
import Button from '../components/Button';
import ProfileImage from '../components/ProfileImage';
import { validateValues, REGULAR_PATTERNS } from '../helpers';
import CheckBox from '../components/CheckBox';
import useSession from '../hooks/useSession';
import { CrossIcon, TwitterIcon, SignUpIcon, ArrowLeftIcon } from '../Icons';
import './Landing.css';

export default function Landing() {
    const [animation, setAnimation] = useState('');
    const [hideAnimation, setHideAnimation] = useState('');
    const { counter, increaseCounter, decreaseCounter } = useCounter(0);
    const { saveSession } = useSession();
    const [mode, setMode] = useState(true);
    const initialValue = {
        name: '',
        nickname: '',
        birthdate: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    }

    const [modalMode, setModalMode] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const [signUpType, setSignUpType] = useState(true);

    const [userData, setUserData] = useState(initialValue);

  
    const [nicknameError, setNicknameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [telephoneError, setTelephoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [birthdateError, setBirthdateError] = useState(false);
    const [preferences, setPreferences] = useState([]);

    const [profileImage, setProfileImage] = useState();

    useEffect(() => {
        if (mode)
            setAnimation('step-form--show-reverse');
        else
            setAnimation('step-form--show');
    }, [counter]);

    useEffect(() => {
        if (hideAnimation === '') return;

        setTimeout(() => {
            if (mode)
                increaseCounter();
            else
                decreaseCounter();
            setHideAnimation('');
        }, 500);
    }, [hideAnimation]);

    useEffect(()=> {
        console.dir(userData);
    }, [userData])

    const onCloseModal = (event) => {

    }

    const onInputChange = (value, name, maxLength)=>{        
            if(maxLength === 0){
                setUserData({...userData, [name]: value})
                return;
            }
            setUserData({...userData, [name]: value.slice(0, maxLength)})
    }

    const onSelectPreferences = (event) => {
        const val = event.target.value;
        const pref = preferences.find(preference => preference === val);
        if(!pref){
            setPreferences([...preferences, event.target.value]);
            return;
        }
        const newPrefs = preferences.filter(preference => preference !== val);
        setPreferences(newPrefs);
    }

    const onOpenSignUpModal = (event) => {
        setModalMode(true);
        setSignUpModal(true);
    }

    const onOpenSignInModal = (event) => {
        setModalMode(true);
        setSignUpModal(false);
    }

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

        saveSession(userData, 'SESSION_V0');
        navigate('/home');

        console.dir(userData);
    }

    const onSignIn = (event) => {
        event.preventDefault();

    }

    const cleanModalData = () => {
     setUserData(initialValue);
     setPreferences([]);
    }

    const onPreviousPage = (event) => {
        if (counter <= 0) {
            setModalMode(false);
            setSignUpModal(false);
            cleanModalData();
            return;
        }

        setHideAnimation('step-form--hide');
        setMode(false);
    }

    const onNextPage = (event) => {
        //First it should be validated current inputs of a form
        let valid = 0;
        if (counter === 0) {
            valid = validateValues([
              {value: name, pattern: REGULAR_PATTERNS.TEXT_PATTERN, setError: setNameError},
              signUpType ? 
              {value: telephone, pattern: REGULAR_PATTERNS.NUMBER_PATTERN, setError: setTelephoneError}
              : 
              {value: email, pattern: REGULAR_PATTERNS.EMAIL_PATTERN, setError: setEmailError} 
              ,
              {value: birthdate, pattern: REGULAR_PATTERNS.DATE_PATTERN, setError: setBirthdateError},
              
            ]);
        }
        else if (counter === 1) {
            valid = validateValues([
                { value: nickname, pattern: REGULAR_PATTERNS.WORD_PATTERN, setError: setNicknameError },
                { value: password, pattern: REGULAR_PATTERNS.PASSWORD_PATTERN, setError: setPasswordError }
            ]);
        }

        if (password !== confirmPassword && counter === 1) {
            valid++;
            setConfirmPasswordError(true)
        }

        if (valid) return;

        console.dir({
            name, nickname, email, password, confirmPassword
        });
        // Current page must hide with animation and set current page to next one
        setHideAnimation('step-form--hide-reverse');
        setMode(true);
    }

    return (
        <main className="landing">
            <aside className="landing__cover">
                <TwitterIcon stroke={'var(--doctor)'} fill={'var(--doctor)'} />
            </aside>
            <section className='landing__content'>
                <TwitterIcon width={50} height={50} />
                <h1>What's going on now?</h1>
                <h2>Join Twitter now.</h2>
                <section className='login__login-type'>
                    <button></button>
                    <p><span>o</span></p>
                    <button className="button button--primary button--full-width" onClick={onOpenSignUpModal}>Create an account</button>

                    <h3>Already have an account?</h3>
                    <button className="button button--fourth button--full-width" onClick={onOpenSignInModal}>Sign in</button>
                </section>
            </section>
            <dialog className={`flex flex--center-m flex--center-s wrapper wrapper--show ${modalMode ? '' : 'inactive'}`}>
                {
                    signUpModal ?
                        (
                            <Form onSubmitEvent={onSignUp} styleClasses={['form--md', 'form--paddlog', 'flex', 'flex--direction-v', 'flex--between', 'form--center', 'form--no-overflow', 'form--80']}>
                                <button className='button-close button--right' type='button' onClick={onPreviousPage}>
                                    {
                                        counter > 0
                                            ?
                                            <ArrowLeftIcon />
                                            :
                                            <CrossIcon width={15} height={15} strokeWidth={4} />
                                    }
                                </button>
                                <h2>Step {counter + 1} from {4}</h2>
                                <h2 className='subtitle'>Create an account</h2>
                                <StepForm active={counter === 0} showAnimation={animation} hideAnimation={hideAnimation}>
                                    <Input value={userData.name} onChangeInput={onInputChange} type={'text'} placeholder={'name'} message={'Please, enter your name'} error={nameError} maxLength={50} />
                                    {
                                        signUpType
                                            ?
                                            <Input value={userData.phone} onChangeInput={onInputChange} type={'number'} placeholder={'telephone'} message={'Please, enter a valid telephone'} error={telephoneError} />
                                            :
                                            <Input value={userData.email} onChangeInput={onInputChange} type={'email'} placeholder={'email'} message={"Enter a valid email"} error={emailError} />

                                    }
                                    <button className='button--block button-link button--right' onClick={(event) => setSignUpType(!signUpType)}> Use {signUpType ? 'email' : 'telephone'} </button>
                                    <h3 className='subtitle'>Birthdate</h3>
                                    <p className='info info--darker'>This information isn't gonna be public. Confirm you age even if your account if or enterprise purposes, pets or other stuff.</p>
                                    <Input value={userData.birthdate} onChangeInput={onInputChange} type={'date'} placeholder={'Birthdate'} message={"Please enter your birthdate"} error={birthdateError} />
                                </StepForm>
                                <StepForm active={counter === 1} showAnimation={animation} hideAnimation={hideAnimation}>
                                    <h3>Nickname</h3>
                                    <p className='info info--darker'>With a nickname users from all over the world can find you without knowing all your name</p>
                                    <Input value={userData.nickname} onChangeInput={onInputChange} type={'text'} placeholder={'nickname'} message={"A nickname can have symbols without white spaces"} error={nicknameError} />
                                    <Input value={userData.password} onChangeInput={onInputChange} type={'password'} placeholder={'password'} message={"A password must have an uppercase a lowercase a symbol and at least characters"} error={passwordError} />
                                    <Input value={userData.confirmPassword} onChangeInput={onInputChange} type={'password'} placeholder={'confirm password'} message={'Please, confirm your password by re-enetring the password'} error={confirmPasswordError} />
                                </StepForm>
                                <StepForm active={counter === 2} showAnimation={animation} hideAnimation={hideAnimation}>
                                    <ProfileImage placeholder={'Pick an Image for your profile'} image={profileImage} setImage={setProfileImage} />
                                </StepForm>
                                <StepForm active={counter === 3} showAnimation={animation} hideAnimation={hideAnimation}>
                                    <h2 className='subtitle'>Select your preferences</h2>
                                    <p className='info info--darker'>This will help us to know you a little bit about you</p>
                                    <section className='flex flex--gap-sm flex--center-m flex-wrap' onChange={onSelectPreferences}>
                                        <CheckBox placeholder='Art' />
                                        <CheckBox placeholder='Enterteinment' />
                                        <CheckBox placeholder='Sports' />
                                        <CheckBox placeholder='Videogames' />
                                        <CheckBox placeholder='News' />
                                        <CheckBox placeholder='Waether' />
                                        <CheckBox placeholder='Anime' />
                                        <CheckBox placeholder='Technologie' />
                                    </section>
                                </StepForm>
                                {
                                    counter !== 3
                                        ?
                                        <Button styleClasses={['button--primary', 'button--full-width', 'button--pd-bg']} onClickButton={onNextPage}>Next</Button>
                                        :
                                        <Button styleClasses={['button--primary', 'button--full-width', 'button--pd-bg']} type={'submit'}>
                                            <SignUpIcon width={15} height={15} stroke={'var(--nyanza)'} strokeWidth={4} />
                                            <span>Sign Up</span>
                                        </Button>
                                }
                            </Form>
                        )
                        :
                        (
                            <Form onSubmitEvent={onSignIn} styleClasses={['form--md', 'form--space', 'form--center', 'form--no-overflow']}>
                                <button className='button-close button--right' type='button' onClick={onCloseModal}>
                                    <CrossIcon width={15} height={15} strokeWidth={4} />
                                </button>
                                <h2>Login in Twitter</h2>
                                <Input value={userData.nickname} onChangeInput={onInputChange} type={'text'} placeholder={'nickname'} message={"A nickname can have symbols without white spaces"} error={nicknameError} />
                                <Input value={userData.password} onChangeInput={onInputChange} type={'password'} placeholder={'password'} message={"A password must have an uppercase a lowercase a symbol and at least characters"} error={passwordError} />
                                <Button styleClasses={['button--primary', 'button--gap-sm', 'button--right']} type={'submit'}>
                                    <SignUpIcon width={15} height={15} stroke={'var(--nyanza)'} strokeWidth={4} />
                                    <span>Sign Up</span>
                                </Button>
                            </Form>
                        )
                }
            </dialog>
        </main>
    )
}