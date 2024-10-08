
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// // Validation Schema using Yup
// const schema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   phone: yup.string().required('Phone number is required').min(10, 'Must be at least 10 digits'),
//   cityResidence: yup.string().required('Current city is required'),
//   cityInterest: yup.string().required('Franchisee city is required'),
//   brand: yup.string().required('Please select a brand'),
// });

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 border-2 border-orange-400 rounded-md mt-9 ">
//       <h2 className="text-center text-xl md:text-3xl font-semibold text-orange-500">Franchisee Enquiry Form</h2>
      
//       {/* Name Field */}
//       <div>
//         <input
//           {...register('name')}
//           className={`border p-2 w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//           placeholder="Name *"
//         />
//         {errors.name && <p className="text-red-500">{errors.name.message}</p>}
//       </div>

//       {/* Email Field */}
//       <div>
//         <input
//           {...register('email')}
//           className={`border p-2 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//           placeholder="Email *"
//         />
//         {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//       </div>

//       {/* Phone Number Field */}
//       <div>
//         <input
//           {...register('phone')}
//           className={`border p-2 w-full ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//           placeholder="Phone Number *"
//         />
//         {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
//       </div>

//       {/* Current City of Residence Field */}
//       <div>
//         <input
//           {...register('cityResidence')}
//           className={`border p-2 w-full ${errors.cityResidence ? 'border-red-500' : 'border-gray-300'}`}
//           placeholder="Current city of residence *"
//         />
//         {errors.cityResidence && <p className="text-red-500">{errors.cityResidence.message}</p>}
//       </div>

//       {/* Franchisee City Interested in Field */}
//       <div>
//         <input
//           {...register('cityInterest')}
//           className={`border p-2 w-full ${errors.cityInterest ? 'border-red-500' : 'border-gray-300'}`}
//           placeholder="Franchisee City Interested in *"
//         />
//         {errors.cityInterest && <p className="text-red-500">{errors.cityInterest.message}</p>}
//       </div>

//       {/* Brand Dropdown Field */}
//       <div>
//         <select
//           {...register('brand')}
//           className={`border p-2 w-full ${errors.brand ? 'border-red-500' : 'border-gray-300'}`}
//         >
//           <option value="">Select Brand *</option>
//           <option value="LegalEdge By Toprankers">LegalEdge By Toprankers</option>
//           <option value="SuperGrads By Toprankers">SuperGrads By Toprankers</option>
//           <option value="LegalEdge + SuperGrads By Toprankers">LegalEdge + SuperGrads By Toprankers</option>
//           <option value="Judiciary Gold By Toprankers">Judiciary Gold By Toprankers</option>
//           <option value="CreativeEdge By Toprankers">CreativeEdge By Toprankers</option>
//         </select>
//         {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
//       </div>

//       {/* Submit Button */}
//       <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-md">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;



import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify'; // Import toast

// Validation Schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required').min(10, 'Must be at least 10 digits'),
  cityResidence: yup.string().required('Current city is required'),
  cityInterest: yup.string().required('Franchisee city is required'),
  brand: yup.string().required('Please select a brand'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // reset form after successful submission
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Show success toast message
    toast.success('Form submitted successfully!');
    
    // Reset form fields
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 border-2 border-orange-400 rounded-md mt-9">
      <h2 className="text-center text-xl md:text-3xl font-semibold text-orange-500">Franchisee Enquiry Form</h2>
      
      {/* Name Field */}
      <div>
        <input
          {...register('name')}
          className={`border p-2 w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Name *"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <input
          {...register('email')}
          className={`border p-2 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Email *"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Phone Number Field */}
      <div>
        <input
          {...register('phone')}
          className={`border p-2 w-full ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Phone Number *"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      {/* Current City of Residence Field */}
      <div>
        <input
          {...register('cityResidence')}
          className={`border p-2 w-full ${errors.cityResidence ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Current city of residence *"
        />
        {errors.cityResidence && <p className="text-red-500">{errors.cityResidence.message}</p>}
      </div>

      {/* Franchisee City Interested in Field */}
      <div>
        <input
          {...register('cityInterest')}
          className={`border p-2 w-full ${errors.cityInterest ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Franchisee City Interested in *"
        />
        {errors.cityInterest && <p className="text-red-500">{errors.cityInterest.message}</p>}
      </div>

      {/* Brand Dropdown Field */}
      <div>
        <select
          {...register('brand')}
          className={`border p-2 w-full ${errors.brand ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select Brand *</option>
          <option value="LegalEdge By Toprankers">LegalEdge By Toprankers</option>
          <option value="SuperGrads By Toprankers">SuperGrads By Toprankers</option>
          <option value="LegalEdge + SuperGrads By Toprankers">LegalEdge + SuperGrads By Toprankers</option>
          <option value="Judiciary Gold By Toprankers">Judiciary Gold By Toprankers</option>
          <option value="CreativeEdge By Toprankers">CreativeEdge By Toprankers</option>
        </select>
        {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default Form;
