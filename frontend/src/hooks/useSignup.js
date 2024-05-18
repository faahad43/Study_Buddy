import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext.jsx';

const useSignup = () => {
    
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async({firstname,lastname,username,email,password,confirmPassword,gender})=>{
      const success =  handleInputError({firstname,lastname,username,email,password,confirmPassword,gender});
      if (!success) return;
        
      setLoading(true)
      try{
        const res = await fetch('/api/auth/signup',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({firstname,lastname,username,email,password,confirmPassword,gender})
        })

        const data = await res.json();
        if(data.error){
          throw new Error(data.error)
        }
        //local storage
        localStorage.setItem('authUser',JSON.stringify(data)) 
         //context
         setAuthUser(data)

      }catch(error){
        toast.error(error.message)
      }finally{
        setLoading(false)
      }

    }

    return {signup,loading}

}

export default useSignup

function handleInputError({firstname,lastname,username,email,password,confirmPassword,gender}){
    if (!firstname || !lastname || !username || !email || !password || !confirmPassword || !gender ){
        toast.error('Please fill in all  fields');
        return false;
    }
    if(password !== confirmPassword){
        toast.error('Passwords do not match');
        return false;
    }
    if(password.length < 6){
        toast.error('Password must be at least 6 characters');
        return false;
    }
    return true
}