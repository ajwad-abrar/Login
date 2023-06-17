import './Form.css'

function Form(){
  const handleSubmit = (props) => {
    props.preventDefault();         //no reload
    const emailValue = props.target.elements.email.value;
    const passwordValue = props.target.elements.password.value;
    const rememberMeValue = props.target.elements.rememberMe.checked;
    console.log(emailValue);
    console.log(passwordValue);
    console.log(rememberMeValue);
  };

  return (
    <div className="center">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
        <h3>Email address</h3>
        <input type="email" name="email" />
        <h3>Password</h3>
        <input type="password" name="password" /><br/>
        <input type="checkbox" name="rememberMe"/>
        <label htmlFor="remember-me"> Remember Me </label><br></br>
        <input type="submit" name="submit" value="Submit" />
        </form>  
    </div>
  );

}

export default Form;
