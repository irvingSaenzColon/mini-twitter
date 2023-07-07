import { useState } from "react";
import Input from "../components/Input";


export default function SignUp(){
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [fathersName, setFathersName] = useState('');
    const [mothersName, setMothersName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [profileImage, setProfileImage] = useState();

    const onSignUp = (event) => {
        event.preventDefault();


    }

    return (
        <main>
            <h1>Sign Up</h1>
            <p>Welcome to mini twitter a social media with some cool features</p>
            <form>
                <Input value={name} setValue={setName} type={'text'} placeholder={'name'} />
                <div>
                    <Input value={fathersName} setValue={setFathersName} type={'text'} placeholder={"father's name"} />
                    <Input value={mothersName} setValue={setMothersName} type={'text'} placeholder={"mother's name"} />
                </div>
                <Input value={nickname} setValue={setNickname} type={'text'} placeholder={'nickname'} />
                <Input value={email} setValue={setEmail} type={'email'} placeholder={'email'} />
                <Input value={password} setValue={setPassword} type={'password'} placeholder={'password'} />
                <Input value={confirmPassword} setValue={setConfirmPassword} type={'password'} placeholder={'confirm password'} />
                <label htmlFor="">
                    <img src="" alt="" srcset="" />
                    <input type="file" accept="image/*" />
                </label>
                <button type="submit">Sign Up</button>

            </form>
        </main>
    )
}