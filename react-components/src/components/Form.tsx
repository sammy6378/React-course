import React, { useState } from "react";


interface formData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    agreeTerms: boolean;
    [key: string]: string | boolean;
}

function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [inputValue, setInputValue] = useState<formData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreeTerms: false
    });

    const inputProps = [
      {
        label: "FirstName",
        name: 'firstName',
        type: "text",
      },
      {
        label: "LastName",
        name: 'lastName',
        type: "text",
      },
      {
        label: "Email",
        name:"email",
        type: "email",
      },
      {
        label: "Password",
        name: "password",
        type: "password",
      },
    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value, type, checked} = event.target;
        setInputValue(prev =>({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        setIsSubmitting(true);
        alert("submitted")
        setIsSubmitting(false)
    }
  return (
    <div className="flex justify-center items-start">
      <div className="bg-white rounded-md p-3 shadow-lg min-w-sm ">
        <form className="p-2" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-2xl font-mono text-blue-300 font-bold text-center">
              Sign Up
            </h2>
          </div>
          {inputProps.map((input) => (
            <div className="">
              <div className="flex flex-col font-mono mt-2">
                <label htmlFor={input.name}>{input.label}</label>
                <input
                  type={input.type}
                  name={input.name}
                  value={inputValue[input.name] as string}
                  onChange={handleChange}
                  className="outline-none bg-slate-50 border border-gray-200 rounded-md py-1 px-2"
                />
              </div>
            </div>
          ))}
          <div className="mt-3 flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              checked={inputValue.agreeTerms}
              onChange={handleChange}
            />
            <p>I agree to the terms and Policy.</p>
          </div>
          <div className="flex justify-center my-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-300 px-4 py-2 rounded-md text-white font-bold cursor-pointer w-full"
            >
              {isSubmitting ? "Sending Request" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
      <div>
        <pre>{JSON.stringify(inputValue, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Form