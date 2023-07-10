import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { SignUpIcon } from "../Icons";
import './SignIn.css';

export default function SignIn(){

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = (event) => {
        event.preventDefault();
    }

    return (
        <main>
            <h1 className="title">Sign In</h1>
            <p className="info"></p>
            <Form styleClasses={['form--md','form--space']} onSubmitEvent={onSignIn}>
                <p className="info">You can login by your nickname or your email address</p>
                <Input value={userName} setValue={setUserName} type={'text'} placeholder={'User'} />
                <Input value={password} setValue={setPassword} type={'password'} placeholder={'password'} />
                <Button styleClasses={['button--primary', 'button--gap-sm', 'button--full-width']} type={'submit'}>
                <SignUpIcon width={15} height={15} stroke={'var(--nyanza)'} strokeWidth={4} />
                <span>Sign In</span>
              </Button>
            </Form>
            <p className="info">
                <span>If you don't have an account </span>
                <Link to={'../sign-up'}>sign up here</Link>

            </p>
        </main>
    );
}