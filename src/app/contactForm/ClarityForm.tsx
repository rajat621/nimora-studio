
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
  const [showAlert, setShowAlert] = useState(false);

  const validate = () => {
    const newErrors: any = {};
if (!form.name.trim()) {
  newErrors.name = "Full name is required";
} else if (!/^[a-zA-Z][a-zA-Z\s.'-]*$/.test(form.name)) {
  newErrors.name = "Enter a valid name";
}    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (form.phone && !/^[0-9]{10,15}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 10–15 digits";
    }
    if (!form.message.trim()) newErrors.message = "Project description is required";
    if (form.file && form.file.size > 2 * 1024 * 1024) newErrors.file = "File must be under 2MB";
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

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);

    if (!response.ok) {
      setErrors({ api: result.error || "Unable to send message. Please try again." });
      return;
    }

    // Reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      file: null,
    });
    setErrors({});

    // Show custom alert
    setShowAlert(true);
  };

  return (
    <>
      {/* Custom Alert Modal */}
      {showAlert && (
        <div className={styles.alertOverlay}>
          <div className={styles.alertBox}>
            <div className={styles.alertIcon}>✓</div>
            <h3 className={styles.alertTitle}>Message Sent!</h3>
            <p className={styles.alertMessage}>
              Thank you for reaching out. We'll get back to you shortly.
            </p>
            <button
              className={styles.alertBtn}
              onClick={() => setShowAlert(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}

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
                  <label>Your Full Name <span>*</span></label>
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
                  <label>Email <span>*</span></label>
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
                  <label>How We Can Help <span>*</span></label>
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

              <div className={styles.fileRow}>
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
              {errors.api && <p className={styles.errorText}>{errors.api}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}