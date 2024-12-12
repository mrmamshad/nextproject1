import { doSocialLogin } from "../actions";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LoginForm = () => {
    return (
        <form action={doSocialLogin} className="flex gap-2 ">
            <button 
                type="submit" 
                name="action" 
                value="google">
                <FaGoogle size={27}  />
               
            </button>

            <button 
               
                type="submit" 
                name="action" 
                value="github">
                <FaGithub size={27}  />
            </button>
        </form>
    );
};

export default LoginForm;
