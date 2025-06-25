import { useState } from "react";
import { toast } from "sonner";
import { useCreateUser } from "../hooks/useUserHook";


interface formData {
    full_name: string;
    username: string;
    phone_number: string;
    email: string;
    password: string;
}

function Form({onClose}: {onClose: () => void}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [inputValue, setInputValue] = useState<formData>({
        full_name: '',
        username: '',
        phone_number: '',
        email: '',
        password: ''
    });

    const inputProps = [
      {
        label: "FullName",
        name: 'full_name',
        type: "text",
      },
      {
        label: "UserName",
        name: 'username',
        type: "text",
      },
      {
        label: "Email",
        name:"email",
        type: "email",
      },
      {
        label: "Phone Number",
        name:"phone_number",
        type: "phone",
      },
      {
        label: "Password",
        name: "password",
        type: "password",
      },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const createUser = useCreateUser();

    const handleSubmit = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        // send to api
        await createUser.mutateAsync();
        setIsSubmitting(true);
        toast.success("submitted")
        setIsSubmitting(false)
    }
  return (
    <div className="fixed inset-0 bg-[#546e7a93] bg-opacity-40 flex justify-center items-center z-50">
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
                  value={inputValue[input.name as keyof formData]}
                  onChange={handleChange}
                  className="outline-none bg-white border border-gray-200 rounded-md py-1 px-2"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-center my-4 space-x-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-300 px-4 py-2 rounded-md text-white font-bold cursor-pointer w-full"
            >
              {isSubmitting ? "Sending Request" : "Sign Up"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-300 px-4 py-2 rounded-md text-white font-bold cursor-pointer w-full"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form