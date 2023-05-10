function LogIn({onChange, handleLogin}){
    return(
        <form>
        <input name="email" onInput={onChange}/>
        <input name="password" type="password" onInput={onChange}/>
        <input name="checkbox" type="checkbox" onChange={onChange}/>
        <button onClick={handleLogin}>Login</button>
    </form>
    )
    
}

export default LogIn;