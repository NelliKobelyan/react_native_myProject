import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import { useEffect, useState } from 'react';
import LogIn from './components/LogIn';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

// function App() {
//   // const [list, setCount] = useState([1, 2, 3, 4, 5]);

//   // function changeList(){
//   //   setCount([...list, list.at(-1)+1])
//   // }
// // const [isChecked, setIsChecked] = useState(true);
// // const handleCheckboxChange = (event) => {
// //   setIsChecked(event.target.checked);
// // }
// // const useEffect = (() => {
// //   // const data = {email: document.forms[0].email.value,
// // 	// 	            password: document.forms[0].password.value};
// //   if (isChecked) {
// //     localStorage.setItem('myData', JSON.stringify(isChecked));
// //   } else {
// //     sessionStorage.setItem('myData', JSON.stringify(isChecked));
// //   }
// // }, [isChecked]);


// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [checkbox, setIsChecked] = useState(false);


// const useEffect=()=>{
//   localStorage.setItem('email', JSON.stringify(email));
//   localStorage.setItem('password', JSON.stringify(password));
// };


//   return (
//     <>
//     {/* <div>
//       <button onClick={changeList}>+</button>
//       {list.map((item, index)=><p key={index.toString()} style={{color: item%10?'black':'red'}}>{item} {!(item%10)?'Es hrashq em': ''}</p>)}
//       {/* <Counter count={}/>
//       <MyButton title={"+"} test={false} handleClick={changeCount}/>
//       <MyButton title={"-"} test={false} handleClick={changeCount2}/> */}
//     {/* </div> */}

// <form>
//   <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}></input><br></br>
//   <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input><br></br>
//   <input type='checkbox' value={checkbox}></input>
//   <label name="checkbox">Remember me</label><br></br>
//   <input type='submit' value='Submit' onClick={useEffect}></input>
// </form>
//     </>

//   );
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////

// function Valid() {
//   const storedUserInfo = JSON.parse(localStorage.getItem('userInfo')) || JSON.parse(sessionStorage.getItem('userInfo')) || null; // Получение сохраненной информации о пользователе из локального хранилища браузера
//   const [userInfo, setUserInfo] = useState(storedUserInfo); // Инициализация состояния пользовательской информации с помощью useState hook
//   const [email, setEmail] = useState(storedUserInfo?.email || ''); // Инициализация состояния электронной почты пользователя с помощью useState hook
//   const [password, setPassword] = useState(''); // Инициализация состояния пароля пользователя с помощью useState hook
//   const [remember, setRemember] = useState(false); // Инициализация состояния запоминания пользователя с помощью useState hook
//   function handleLogin(event) { // Функция для обработки события входа в систему
//     event.preventDefault(); // Отмена стандартного поведения браузера по умолчанию при отправке формы
//     const userInfo = { email, password }; // Создание объекта пользовательской информации из электронной почты и пароля пользователя
//     const storage = remember ? localStorage : sessionStorage; // Определение, должна ли информация о пользователе сохраняться в локальном или сеансовом хранилище браузера
//     storage.setItem('userInfo', JSON.stringify(userInfo)); // Сохранение информации о пользователе в выбранном хранилище браузера
//     setUserInfo(userInfo); // Обновление состояния пользовательской информации с помощью setUserInfo
//     setEmail(email); // Обновление состояния электронной почты пользователя с помощью setEmail
//   }
//   function handleLogout() { // Функция для обработки события выхода из системы
//     localStorage.removeItem('userInfo'); // Удаление информации о пользователе из локального хранилища браузера
//     sessionStorage.removeItem('userInfo'); // Удаление информации о пользователе из сеансового хранилища браузера
//     setUserInfo(null); // Обновление состояния пользовательской информации с помощью setUserInfo
//     setEmail(''); // Обновление состояния электронной почты пользователя с помощью setEmail
//   }
//   return (
//     <>
//       {userInfo ? (
//         <>
//           <p>Welcome, {email}!</p>
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <form onSubmit={handleLogin} className="form-container">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
//           <br />
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
//           <br />
//           <label htmlFor="remember">Remember me:</label>
//           <input type="checkbox" id="remember" checked={remember} onChange={() => setRemember(!remember)} />
//           <br />
//           <button type="submit">Login</button>
//         </form>
//       )}
//     </>
//   );
// }
// export default Valid;

////////////////////////////////////////////////////////////

// function App(){
//   const [count, setCount] = useState(0);

//   const changeCount = ()=>{
//     setCount(count+1)
//   }

//   return(
//     <div>
//       {count <= 10 ? <MyButton title={'+'} handleClick={changeCount} count={count} />: null}
//       <p>{count}</p>
//     </div>
//   )
// }

// export default App;

// function App(){
// const [formValues, setFormValues] = useState({email:'', password: '', remember: false});
// const [isLogedIn, setIsLogedIn] = useState(false);

//   const onChange = (event)=>{
//     if(event.target.name === 'remember'){
//       setFormValues({...formValues, [event.target.name]: event.target.checked})
//     }else{
//       setFormValues({...formValues, [event.target.name]: event.target.value})
//     }
//   }

//   const handleLogin = (event)=>{
//     event.preventDefault();
//     if(formValues.remember){
//       localStorage.setItem('userData', JSON.stringify(formValues));
//     }else{
//       sessionStorage.setItem('userData' ,JSON.stringify(formValues))
//     }
//     setIsLogedIn(true);
//   }

//   const logout = ()=>{
//     localStorage.clear();
//     sessionStorage.clear();
//     setIsLogedIn(false);
//   }

//   useEffect(()=>{
//     const userData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
//     if(userData){
//       setIsLogedIn(true);
//     }
//   }, [])
//   return(
//     <div>
//       {isLogedIn?
//         <div>
//           <p>Test</p>
//           <button onClick={logout}>Logout</button>
//         </div>
//       :<LogIn 
//       onChange={onChange} 
//       handleLogin={handleLogin}
//       />
//       }
//     </div>
//   );
// }

function App(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
      fetch('https://api.github.com/users').then(response => response.json()).then(data=>{
        setUsers(data);
      })
  }, [])

  return(
    <>
      {
        users.map(item=><div key={item.id}>
          <p>{item.id}</p>
          <img src={item.avatar_url} width={100}/>
        </div>)
      }
    </>
  )
}

export default App;