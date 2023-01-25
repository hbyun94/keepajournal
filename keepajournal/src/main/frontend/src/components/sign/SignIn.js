import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const SignIn = ({setIsSignIn}) => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault()
        
        if(id === '' || id === null) {
            alert('아이디를 입력해주세요.')
            return;
        }

        if(pw === '' || pw === null) {
            alert('패스워드를 입력해주세요.')
            return;
        }
        
        axios.get('/api/handleSignIn', {
            params: {
                id,
                pw
            }
        })
        .then(response => {
            console.log(response.data)
            response.data === 'N' ? alert('틀림') : setIsSignIn(response.data)
            
        })
        .catch(error => console.log(error))
    }

    const handleId = (e) => {
        setId(e.target.value)
    }

    const handlePw = (e) => {
        setPw(e.target.value)
    }

    return (
        <div>
            <p>로그인 페이지</p>
            <p>id : {id}</p>
            <p>pw : {pw}</p>
            <form>
                <input value={id} onChange={handleId}></input>
                <input value={pw} onChange={handlePw}></input>
                <button onClick={handleSignIn}>버튼</button>
            </form>
        </div>
    );
};

export default SignIn;