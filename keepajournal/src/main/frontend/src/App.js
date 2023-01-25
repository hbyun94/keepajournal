import React, {useState} from 'react';
import Main from './components/main/Main';
// import axios from 'axios';
import SignIn from './components/sign/SignIn';

function App() {
   const [isSignin, setIsSignIn] = useState('N')

//    useEffect(() => {
//        axios.get('/api/hello')
//        .then(response => setHello(response.data))
//        .catch(error => console.log(error))
//    }, []);

    return (
        <div>
            {isSignin === 'N' ? <SignIn setIsSignIn={setIsSignIn} /> : <Main />}
            

            {/* 백엔드에서 가져온 데이터입니다 : {hello}
            <p> 두번째 커밋 연습입니다.</p>
            <p> 세번째 클론 받아서 커밋 연습입니다.</p> */}
        </div>
    );
}

export default App;