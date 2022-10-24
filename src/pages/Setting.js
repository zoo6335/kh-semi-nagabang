import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const memberObj = {
    id: "",
    pwd: "",
    name:"",
    addr: "",
    mail:"",
    phone:""
};

const Setting = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [addr, setAddr] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [submit, setSubmit] = useState(false); // 서버로 전송할 수 있는지 조건 체크
    const [resData, setResData] = useState(''); // 서버에서 응답으로 받는 결과데이터

    // 이벤트 체크 함수 생성
    const onChangeId = (e) => setId(e.target.value); // : 현재 이벤트가 발생한 input창의 값을 useState에 세팅할거다 !
    const onChangePwd = (e) => setPwd(e.target.value);
    const onChangeName = (e) => setName(e.target.value);
    const onChangeAddr = (e) => setAddr(e.target.value);
    const onChangeMail = (e) => setMail(e.target.value);
    const onChangePhone = (e) => {
        setPhone(e.target.value);
        isSubmit();
    };

    // 서버에게 회원가입 정보를 전송할 지 여부를 마지막에서 판단하려공
    const isSubmit = () => {
        if(id && pwd && name && addr && mail && phone) setSubmit(true);  // : 서버에 전송할 수 있는 조건이 만들어짐
    };

    // 전송버튼이 눌려지면 동작하는 함수. 함수가 비동기 통신을 해야하므로 async 키워드 추가(비동기 동작을 내부적으로 깔끔하게 돌아 갈 수 있도록 보통 이렇게 한댜)
    const onSubmit = async () => {
        memberObj.id = id;       // useState를 통해서 만들어진 값을 객체에 넣음
        memberObj.pwd = pwd;
        memberObj.name = name;
        memberObj.addr = addr;
        memberObj.mail = mail;
        memberObj.phone = phone;

        try {
            // 서버에 대한 요청을 비동기로 처리함
            const res = await axios.post('http://localhost:3000/posts', memberObj, 'application/json'); // : 대기 해라! - 정해져있는 패턴 : axios 쓰기 위해서 
            setResData(res.data);

        } catch (e) {
            console.log(e);
        };
    }


    return (
        <div>
            <h1>회원정보 설정</h1>
            <Link to="/">홈으로 이동 💨</Link>
            <br/>
            <input type="text" placeholder="아이디 입력" value={id} onChange={onChangeId} />
            <br/>
            <input type="password" placeholder="비밀번호 입력" value={pwd} onChange={onChangePwd} />
            <br/>
            <input type="text" placeholder="이름 입력" value={name} onChange={onChangeName} />
            <br/>
            <input type="text" placeholder="주소 입력" value={addr} onChange={onChangeAddr} />
            <br/>
            <input type="email" placeholder="메일 입력" value={mail} onChange={onChangeMail} />
            <br/>
            <input type="tell" placeholder="전화번호 입력" value={phone} onChange={onChangePhone} />
            <br/>
            {/* 조건부 렌더링 */}
            {submit && <button onClick={onSubmit}>전송</button>}
            {/* JSON.stringify: js값을 JSON 문자열로 파싱 */}
            {resData && <textarea rows={7} value={JSON.stringify(resData, null, 2)} readOnly={true} />}
        </div>
    )   
}

export default Setting;