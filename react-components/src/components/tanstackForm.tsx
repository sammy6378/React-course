// import { useForm } from "@tanstack/react-form"
// import { validateSchema } from "../utils/signupValidation"
// import type { z } from "zod";

// // interface formData {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// //   password: string;
// //   agreeTerms: boolean;
// // }

// type formData = z.infer<typeof validateSchema>;

// // const validateField = <T,>(value: T, schema: z.ZodType<T>) => {
// //   const result = schema.safeParse(value);
// //   if (!result.success) {
// //     return result.error.issues[0]?.message || "Validation error";
// //   }
// //   return undefined;
// // }

// function TanstackForm() {
//     const {
//         Field,
//         handleSubmit,
//         reset,
//         Subscribe
//     } = useForm({
//         defaultValues: {
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//             agreeTerms:false
//         } as formData,

//         validators:{
//             onChange: validateSchema
//         },
        
//         onSubmit: async ({value}) =>{
//             const validate = validateSchema.safeParse(value);
//             if(!validate.success){
//                 console.error("Validation failed:", validate.error.issues);
//                 return;
//             }
//             alert("Form submitted successfully!");

//             // Reset form after successful submission
//             reset();
//         }
//     })

//   return (
//     <div className="flex justify-center items-start">
//       <div className="bg-white rounded-md p-3 shadow-lg min-w-sm ">
//         <form
//           className="p-2"
//           onSubmit={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             handleSubmit();
//           }}
//         >
//           <div>
//             <h2 className="text-2xl font-mono text-blue-300 font-bold text-center">
//               Sign Up
//             </h2>
//           </div>
//           <div className="flex flex-col font-mono mt-2">
//             <Field
//               name="firstName"
//               // validators={{
//               //   onChange: ({ value }) =>
//               //     validateField(value, validateSchema.shape.firstName),
//               //   onBlur: ({ value }) =>
//               //     validateField(value, validateSchema.shape.firstName),
//               // }}
//               children={(field) => (
//                 <div className="flex flex-col font-mono mt-2">
//                   <label htmlFor={field.name}>First Name</label>
//                   <input
//                     type="text"
//                     name={field.name}
//                     value={field.state.value}
//                     onChange={(e) => field.handleChange(e.target.value)}
//                     onBlur={field.handleBlur}
//                     className={`outline-none bg-slate-50 border border-gray-200 rounded-md py-1 px-2 ${
//                       field.state.meta.errors.length > 0
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-300"
//                     }`}
//                     placeholder="Enter your first name"
//                   />
//                   {field.state.meta.errors.length > 0 && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {String(field.state.meta.errors[0])}
//                     </p>
//                   )}
//                 </div>
//               )}
//             />

//             {/* last name */}
//             <Field
//               name="lastName"
//               // validators={{
//               //   onChange: ({ value }) =>
//               //     validateField(value, validateSchema.shape.lastName),
//               //   onBlur: ({ value }) =>
//               //     validateField(value, validateSchema.shape.lastName),
//               // }}
//               children={(field) => (
//                 <div className="flex flex-col font-mono mt-2">
//                   <label htmlFor={field.name}>Last Name</label>
//                   <input
//                     type="text"
//                     name={field.name}
//                     value={field.state.value}
//                     onChange={(e) => field.handleChange(e.target.value)}
//                     onBlur={field.handleBlur}
//                     className={`outline-none bg-slate-50 border border-gray-200 rounded-md py-1 px-2 ${
//                       field.state.meta.errors.length > 0
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-300"
//                     }`}
//                     placeholder="Enter your last name"
//                   />
//                   {field.state.meta.errors.length > 0 && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {String(field.state.meta.errors[0])}
//                     </p>
//                   )}
//                 </div>
//               )}
//             />

//             {/* email */}
//             <Field
//               name="email"
//               // validators={{
//               //   onChange: ({ value }) =>
//               //     validateField(value, validateSchema.shape.email),
//               //   onBlur: ({ value }) =>
//               //     validateField(value, validateSchema.shape.email),
//               // }}
//               children={(field) => (
//                 <div className="flex flex-col font-mono mt-2">
//                   <label htmlFor={field.name}>Email</label>
//                   <input
//                     type="text"
//                     name={field.name}
//                     value={field.state.value}
//                     onChange={(e) => field.handleChange(e.target.value)}
//                     onBlur={field.handleBlur}
//                     className={`outline-none bg-slate-50 border border-gray-200 rounded-md py-1 px-2 ${
//                       field.state.meta.errors.length > 0
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-300"
//                     }`}
//                     placeholder="Enter your Email"
//                   />
//                   {field.state.meta.errors.length > 0 && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {String(field.state.meta.errors[0])}
//                     </p>
//                   )}
//                 </div>
//               )}
//             />

//             {/* password */}
//             <Field
//               name="password"
//               // validators={{
//               //   onChange: ({ value }) =>
//               //     validateField(value, validateSchema.shape.password),
//               //   onBlur: ({ value }) =>
//               //     validateField(value, validateSchema.shape.password),
//               // }}
//               children={(field) => (
//                 <div className="flex flex-col font-mono mt-2">
//                   <label htmlFor={field.name}>Password</label>
//                   <input
//                     type="text"
//                     name={field.name}
//                     value={field.state.value}
//                     onChange={(e) => field.handleChange(e.target.value)}
//                     onBlur={field.handleBlur}
//                     className={`outline-none bg-slate-50 border border-gray-200 rounded-md py-1 px-2 ${
//                       field.state.meta.errors.length > 0
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-300"
//                     }`}
//                     placeholder="Enter your Password"
//                   />
//                   {field.state.meta.errors.length > 0 && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {String(field.state.meta.errors[0])}
//                     </p>
//                   )}
//                 </div>
//               )}
//             />
//           </div>
//           <div className="mt-3 flex items-center space-x-2">
//             <Field
//               name="agreeTerms"
//               // validators={{
//               //   onChange: ({ value }) =>
//               //     validateField(value, validateSchema.shape.agreeTerms),
//               //   onBlur: ({ value }) =>
//               //     validateField(value, validateSchema.shape.agreeTerms),
//               // }}
//               children={(field) => (
//                 <div>
//                   <input
//                     type="checkbox"
//                     name={field.name}
//                     checked={field.state.value}
//                     onChange={(e) => field.handleChange(e.target.checked)}
//                     onBlur={field.handleBlur}
//                   />
//                   {field.state.meta.errors.length > 0 && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {String(field.state.meta.errors[0])}
//                     </p>
//                   )}
//                 </div>
//               )}
//             />
//             <p>I agree to the terms and Policy.</p>
//           </div>
//           <div className="pt-4">
//             <Subscribe
//               selector={(state) => [state.canSubmit, state.isSubmitting]}
//               children={([canSubmit, isSubmitting]) => (
//                 <button
//                   type="submit"
//                   disabled={!canSubmit}
//                   className={`w-full py-2 px-4 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     canSubmit
//                       ? "bg-blue-600 hover:bg-blue-700 text-white"
//                       : "bg-gray-400 cursor-not-allowed text-gray-200"
//                   }`}
//                 >
//                   {isSubmitting ? "Submitting..." : "Sign Up"}
//                 </button>
//               )}
//             />
//           </div>
//         </form>
//       </div>
//       <Subscribe
//         selector={(state) => state.values}
//         children={(values) => (
//           <div className="mt-8 p-4 bg-gray-100 rounded-md">
//             <h3 className="text-lg font-medium mb-2">Form Data (Debug)</h3>
//             <pre className="text-xs overflow-auto max-h-40 text-gray-600">
//               {JSON.stringify(values, null, 2)}
//             </pre>
//           </div>
//         )}
//       />
//     </div>
//   );
// }

// export default TanstackForm

import { useForm } from "@tanstack/react-form";
import { validateSchema } from "../utils/signupValidation";
import type { z } from "zod";

type FormData = z.infer<typeof validateSchema>;

// Field configuration object
const fieldConfigs = [
  {
    name: "firstName" as keyof FormData,
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    validator: (value: string) => {
      const result = validateSchema.shape.firstName.safeParse(value);
      return result.success ? undefined : result.error.issues[0]?.message;
    },
  },
  {
    name: "lastName" as keyof FormData,
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    validator: (value: string) => {
      const result = validateSchema.shape.lastName.safeParse(value);
      return result.success ? undefined : result.error.issues[0]?.message;
    },
  },
  {
    name: "email" as keyof FormData,
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    validator: (value: string) => {
      const result = validateSchema.shape.email.safeParse(value);
      return result.success ? undefined : result.error.issues[0]?.message;
    },
  },
  {
    name: "password" as keyof FormData,
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    validator: (value: string) => {
      const result = validateSchema.shape.password.safeParse(value);
      return result.success ? undefined : result.error.issues[0]?.message;
    },
  },
] as const;

function TanstackForm() {
  const { Field, handleSubmit, reset, Subscribe } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreeTerms: false,
    } as FormData,

    onSubmit: async ({ value }) => {
      const validate = validateSchema.safeParse(value);
      if (!validate.success) {
        console.error("Validation failed:", validate.error.issues);
        return;
      }
      alert("Form submitted successfully!");
      reset();
    },
  });

  return (
    <div className="flex justify-center items-start">
      <div className="bg-white rounded-md p-3 shadow-lg min-w-sm">
        <form
          className="p-2"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
          }}
        >
          <div>
            <h2 className="text-2xl font-mono text-blue-300 font-bold text-center">
              Sign Up
            </h2>
          </div>

          <div className="flex flex-col font-mono mt-2">
            {/* Dynamic input fields */}
            {fieldConfigs.map((config) => (
              <Field
                key={config.name}
                name={config.name}
                validators={{
                  onChange: ({ value }) => config.validator(value as string),
                  onBlur: ({ value }) => config.validator(value as string),
                }}
                children={(field) => (
                  <div className="flex flex-col font-mono mt-2">
                    <label htmlFor={field.name}>{config.label}</label>
                    <input
                      type={config.type}
                      name={field.name}
                      value={field.state.value as string}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className={`outline-none bg-slate-50 border border-gray-200 rounded-md py-1 px-2 ${
                        field.state.meta.errors.length > 0
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder={config.placeholder}
                    />
                    {field.state.meta.errors.length > 0 && (
                      <p className="mt-1 text-sm text-red-600">
                        {String(field.state.meta.errors[0])}
                      </p>
                    )}
                  </div>
                )}
              />
            ))}
          </div>

          {/* Terms checkbox - separate since it's different */}
          <div className="mt-3 flex items-center space-x-2">
            <Field
              name="agreeTerms"
              validators={{
                onChange: ({ value }) => {
                  const result =
                    validateSchema.shape.agreeTerms.safeParse(value);
                  return result.success
                    ? undefined
                    : result.error.issues[0]?.message;
                },
                onBlur: ({ value }) => {
                  const result =
                    validateSchema.shape.agreeTerms.safeParse(value);
                  return result.success
                    ? undefined
                    : result.error.issues[0]?.message;
                },
              }}
              children={(field) => (
                <div>
                  <input
                    type="checkbox"
                    name={field.name}
                    checked={field.state.value}
                    onChange={(e) => field.handleChange(e.target.checked)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 text-sm text-red-600">
                      {String(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />
            <p>I agree to the terms and Policy.</p>
          </div>

          <div className="pt-4">
            <Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`w-full py-2 px-4 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    canSubmit
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-400 cursor-not-allowed text-gray-200"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Sign Up"}
                </button>
              )}
            />
          </div>
        </form>
      </div>

      <Subscribe
        selector={(state) => state.values}
        children={(values) => (
          <div className="mt-8 p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-medium mb-2">Form Data</h3>
            <pre className="text-xs overflow-auto max-h-40 text-gray-600">
              {JSON.stringify(values, null, 2)}
            </pre>
          </div>
        )}
      />
    </div>
  );
}

export default TanstackForm;