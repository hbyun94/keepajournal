import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [hello, setHello] = useState('')

   useEffect(() => {
       axios.get('/api/hello')
       .then(response => setHello(response.data))
       .catch(error => console.log(error))
   }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
            <p> 두번째 커밋 연습입니다.</p>
            <p> 세번째 클론 받아서 커밋 연습입니다.</p>
        </div>
    );
}

export default App;