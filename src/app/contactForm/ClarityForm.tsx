// "use client";

// import { useState } from "react";
// import styles from "./ClarityConversation.module.css";

// export default function ClarityForm() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//     file: null as File | null,
//   });

//   const [errors, setErrors] = useState<any>({});

//   const validate = () => {
//     const newErrors: any = {};

//     if (!form.name.trim()) newErrors.name = "Full name is required";

//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
//     ) {
//       newErrors.email = "Invalid email address";
//     }

//     if (!form.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^[0-9]{10,15}$/.test(form.phone)) {
//       newErrors.phone = "Phone must be 10–15 digits";
//     }

//     if (!form.message.trim())
//       newErrors.message = "Project description is required";

//     if (form.file && form.file.size > 2 * 1024 * 1024)
//       newErrors.file = "File must be under 2MB";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e: any) => {
//     const { name, value, files } = e.target;

//     if (name === "file") {
//       setForm({ ...form, file: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Submitted", form);
//     }
//   };

//   return (
//     <section className={styles.formSection}>
//       <div className={styles.container}>
//         <div className={styles.card}>
//           <h2 className={styles.cardTitle}>
//             A short conversation to help you clarify your situation and decide
//             next steps no pressure, no pitch.
//           </h2>

//           <form onSubmit={handleSubmit} noValidate>
//             <div className={styles.singleRow}>
//               <div className={styles.field}>
//                 <label>
//                   Your Full Name <span>*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   className={errors.name ? styles.errorInput : ""}
//                 />
//                 {errors.name && (
//                   <p className={styles.errorText}>{errors.name}</p>
//                 )}
//               </div>
//             </div>

//             <div className={styles.row}>
//               <div className={styles.field}>
//                 <label>
//                   Email <span>*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className={errors.email ? styles.errorInput : ""}
//                 />
//                 {errors.email && (
//                   <p className={styles.errorText}>{errors.email}</p>
//                 )}
//               </div>

//               <div className={styles.field}>
//                 <label>
//                   Phone Number <span>*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   className={errors.phone ? styles.errorInput : ""}
//                 />
//                 {errors.phone && (
//                   <p className={styles.errorText}>{errors.phone}</p>
//                 )}
//               </div>
//             </div>

//             <div className={styles.singleRow}>
//               <div className={styles.field}>
//                 <label>Your Company Name (Optional)</label>
//                 <input
//                   type="text"
//                   name="company"
//                   value={form.company}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className={styles.singleRow}>
//               <div className={styles.field}>
//                 <label>
//                   How We Can Help <span>*</span>
//                 </label>
//                 <textarea
//                   rows={5}
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   className={errors.message ? styles.errorInput : ""}
//                 />
//                 {errors.message && (
//                   <p className={styles.errorText}>{errors.message}</p>
//                 )}
//               </div>
//             </div>

//             <div className={styles.singleRow}>
//               <div className={styles.field}>
//                 <label>
//                   If you have a requirement brief or document, share it here
//                 </label>
//                 <input
//                   type="file"
//                   name="file"
//                   onChange={handleChange}
//                   className={errors.file ? styles.errorInput : ""}
//                 />
//                 {errors.file && (
//                   <p className={styles.errorText}>{errors.file}</p>
//                 )}
//               </div>
//             </div>

//             <div className={styles.submitWrap}>
//               <button type="submit" className={styles.button}>
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import styles from "./ClarityConversation.module.css";

export default function ClarityForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    file: null as File | null,
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // ✅ Phone optional
    if (form.phone && !/^[0-9]{10,15}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 10–15 digits";
    }

    if (!form.message.trim())
      newErrors.message = "Project description is required";

    if (form.file && form.file.size > 2 * 1024 * 1024)
      newErrors.file = "File must be under 2MB";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value as any);
    });

    await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    alert("Message sent successfully!");
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.formContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            A short conversation to help you clarify your situation and decide
            next steps no pressure, no pitch.
          </h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.singleRow}>
              <div className={styles.field}>
                <label>
                  Your Full Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? styles.errorInput : ""}
                />
                {errors.name && <p className={styles.errorText}>{errors.name}</p>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email name"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? styles.errorInput : ""}
                />
                {errors.email && <p className={styles.errorText}>{errors.email}</p>}
              </div>

              <div className={styles.field}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className={errors.phone ? styles.errorInput : ""}
                />
                {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
              </div>
            </div>

            <div className={styles.singleRow}>
              <div className={styles.field}>
                <label>Your Company Name (Optional)</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.singleRow}>
              <div className={styles.field}>
                <label>
                  How We Can Help <span>*</span>
                </label>
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Describe your project"
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? styles.errorInput : ""}
                />
                {errors.message && <p className={styles.errorText}>{errors.message}</p>}
              </div>
            </div>

            <div className={styles.singleRow}>
              <div className={styles.fileWrapper}>
                <label className={styles.fileLabel}>
                  If you have a requirement brief or document, share it with us here.
                </label>

                <div className={styles.fileBox}>
                  <label className={styles.chooseBtn}>
                    Choose File
                    <input type="file" name="file" hidden onChange={handleChange} />
                  </label>
                  <span className={styles.fileHint}>
                    {form.file ? form.file.name : "File size not more than 2 MB"}
                  </span>
                </div>

                {errors.file && <p className={styles.errorText}>{errors.file}</p>}
              </div>
            </div>

            <div className={styles.submitWrap}>
              <button type="submit" className={styles.submitBtn}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}