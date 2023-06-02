import React, { useEffect, useState  } from "react";

interface IState{

user: {

email: string;

password: string;

};



}



const Login = () => {
    
    const initialValues = {  email: "", password: "" };
    const [state, setState] = useState<IState>({

user: {

email:"",

password:""

},

});
const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

    setState({
    
    user: {
    
    ...state.user,
    
    [event.target.name]: event.target.value,
    
    },
    
    });
    
    };

    const handlesubmit =(event: React.ChangeEvent<HTMLInputElement>):void=>{
event.preventDefault();
setFormErrors(validate(formValues));
    setIsSubmit(true);


    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
       
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };
    
    
    
  return (
    <div className="relative flex flex-col  justify-center min-h-screen overflow-hidden">
    <div className=" p-6 m-auto bg-white rounded-md  lg:max-w-xl">

        
        <img alt='petals'className=" w-[61px] h-[49px] ml-36 " src="https://s3-alpha-sig.figma.com/img/6fdc/89e1/8c73671940a6f474158b15da4e60dcba?Expires=1686528000&Signature=mNfhH1DjBfNYqeEgUzwMUx4egTuaJ0zVS6zY3H-wMtNYvcdVAgVsDudmso-oeoYjgHanApNR~Lzqt~A2qW~KE1LTGZaVWTDFz8SzIz~Y5-IGtkluO4ygKVIe3OHX4zlump-ZfDTKNyBFbFXoqe3AQaK4IZFDW5DSrTEdRx5JhzeH71eUf7Eo-JeMjzNIeb8PNnw1kpf3lymGHZq8Nt-WUssvDSRhrE7PQ2CmAxFWJ~hsRlUW0Ozlt~JwQgHSuVB6b5ZnPPaMoar0S6qgnfahM6AMwZixysi3xWp5O3aZSsblKOr7K-EsgzPTzaoJ~2HO0-1sL4sWnyb~uNGCJAzLBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>

        

     
        <div className="flex justify-center   space-x-3">

        <h1 className="text-3xl font-semibold  text-black ">
           Welcome 
        </h1>
        <h1 className="text-3xl font-semibold  text-green-600 ">
             Back!
        </h1>
       
        </div>
        <p className="mt-2 text-xs font-light text-center text-gray-300">
            
            Glad to see you,Again!
        </p>

        <form className="mt-6 ">
            <div className="mb-2">
                <label
                   
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email" 
                    placeholder='Enter your email'
                    className="block w-[360px] px-4 py-2 mt-2 bg-white border rounded-md  "
                />
            </div>
            <div className="mb-2">
                <label
                  
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    placeholder='Enter your password'
                    className="block w-[360px] px-4 py-2 mt-2 bg-white border rounded-md "
                />
            </div>
            <a
                href="#"
                className="text-xs ml-64 text-gray-400 hover:underline"
            >
                Forget Password?
            </a>
            <div className="mt-6 drop-shadow-2xl">
                <button className="w-[360px] drop-shadow-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-black focus:outline-none focus:bg-black">
                    Login
                </button>
            </div>
        </form>

        <p className="mt-24 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a
                href="#"
                className="font-medium text-green-600 hover:underline"
            >
                Sign up
            </a>
        </p>

    </div>
</div>
  )
}

export default Login
