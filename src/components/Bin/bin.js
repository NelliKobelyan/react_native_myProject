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

// function App(){
//   const [users, setUsers] = useState([]);

//   useEffect(()=>{
//       fetch('https://api.github.com/users').then(response => response.json()).then(data=>{
//         setUsers(data);
//       })
//   }, [])

//   return(
//     <>
//       {
//         users.map(item=><div key={item.id}>
//           <p>{item.id}</p>
//           <img src={item.avatar_url} width={100}/>
//         </div>)
//       }
//     </>
//   )
// }

// function App(){
// const [count, setCount] = useState(0);

// const changeCount=(value)=>{
//   setCount(count+value);
// }

// const value = {
//   count: count,
//   changeCount: changeCount
// }

//   return(
//     <Context.Provider value ={value}>
//       <>
//     <CountCard/>
//     <ActionList/>
//     </>
//     </Context.Provider>
//   )
// }

// function App(){

//   // const [list, setList] = useState([]);
//   // const [input, setInput] = useState("");

//   // const addTodo = (todo) => {
//   //   const newTodo = {
//   //     id: Math.random(),
//   //     todo: todo,
//   //   };

//   //   setList([...list, newTodo]);
//   // }

//   return(
//     <div>
//       {/* <h1>LIST</h1>
//       <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
//       <button onClick={() => addTodo(input)}>Add</button>
//       <ul>
//         {list.map((todo) =>(
//           <li key={todo.id}>
//             {todo.todo}
//             <button>&times;</button>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   )
// }

// const list = [];

// function App(){
// const [users, setUsers] = useState(list);

// const dispatchUserEvent = (actionType, payload) =>{
//   switch(actionType){
//     case 'Add_List':
//       setUsers([...users, payload.newUser])
//       return;
//     case 'Remove_List':
//       setUsers(user.filter(user => user.id === user.payload.userId))
//       return;

//       default:
//         return;
//   }
// }

//   return(
//     <div>
//       <Context.Provider value={{users, dispatchUserEvent}}>
//         <AddUser/>
//         <UserList/>
//         <User/>
//       </Context.Provider>
      
//     </div>
//   )
// }


// import React, { useState, useContext } from 'react';
// const DeleteItemContext = React.createContext(null);
// function App() {
//   const [newItem, setNewItem] = useState('');
//   const [items, setItems] = useState([]);
//   function addItem() {
//     const item = {
//       id: Math.floor(Math.random() * 1000),
//       value: newItem
//     };
//     setItems(oldList => [...oldList, item]);
//     setNewItem("");
//   }
//   function deleteItem(id) {
//     setItems(oldList => oldList.filter(item => item.id !== id));
//   }
//   return (
//     <div className='App'>
//       <h1>TODO LIST</h1>
//       <input
//         type="text"
//         placeholder="Add an item..."
//         value={newItem}
//         onChange={e => setNewItem(e.target.value)}
//       />
//       <button onClick={addItem}>Add</button>
//       <DeleteItemContext.Provider value={deleteItem}>
//         <ItemList items={items} />
//       </DeleteItemContext.Provider>
//     </div>
//   );
// }
// function ItemList({ items }) {
//   const deleteItem = useContext(DeleteItemContext);
//   return (
//     <ul>
//       {items.map(item => (
//         <Item key={item.id} item={item} deleteItem={deleteItem} />
//       ))}
//     </ul>
//   );
// }
// function Item({ item, deleteItem }) {
//   return (
//     <li>
//       {item.value}
//       <button onClick={() => deleteItem(item.id)}>Delete</button>
//     </li>
//   );
// }

//function App(){

    //   const [name, setName] = useState("");
    //   const [surname, setSurname] = useState("");
    //   const [count, setCount] = useState(0);
    
    //   const user = useMemo(()=>{
    //     console.log("ok");
    //     return{
    //       name: name,
    //       surname: surname
    //      } 
    //   }, [name, surname]);
    
    
    //   return(
    //     <div>
    //       <button onClick={()=>setCount(count + 1)}>{count}</button>
    //       <br/>
    //       <input 
    //       type="text" 
    //       value={name} 
    //       onChange={e=>setName(e.target.value)}/>
    
    //       <input
    //       type="text"
    //       value={surname}
    //       onChange={e=>setSurname(e.target.value)}
    //       />
    //       <p>{JSON.stringify(user)}</p>
    //     </div>
    //   )
    // }