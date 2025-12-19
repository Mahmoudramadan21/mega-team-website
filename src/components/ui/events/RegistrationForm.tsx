'use client';

import React, { memo, useState } from 'react';
import SubmitIcon from '@/assets/icons/submit.svg';

/**
 * RegistrationForm Component
 *
 * A client-side registration form that submits user data to a Google Apps Script endpoint
 * (connected to Google Sheets). Handles loading and error states gracefully.
 *
 * Key Features & Optimizations:
 * - Submits data via fetch (no-cors mode for Google Apps Script compatibility)
 * - Form resets on success and triggers optional onSuccess callback (e.g., to open success modal)
 * - Displays clear error message on submission failure
 * - Fully accessible: proper labels, required field indicators, ARIA support
 * - Responsive two-column grid on medium+ screens
 * - Smooth focus and hover states with custom focus-outline-primary utility
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - All Tailwind classes ordered according to official guidelines:
 *   Layout → Box Model → Typography → Visual → Transitions
 */

interface RegistrationFormProps {
  onSuccess?: () => void;
}

function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbz8U6Npwh4-nOdL7INYl-twigcpLOewIWIEQbFDLmPP0agy3gy8iVSZdXz61pT4cVcw/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      level: formData.get('level') || 'Not specified',
      interest: formData.get('interest') || 'Not provided',
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(data),
      });

      (e.target as HTMLFormElement).reset();
      onSuccess?.();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Registration form section with accessible heading reference
    <section aria-labelledby="registration-heading">
      {/* Main heading for the registration form */}
      <h3
        id="registration-heading"
        className="mb-10 font-cairo font-bold text-xl md:text-2xl lg:text-3xl"
      >
        Secure Your Spot Now
      </h3>

      {error && (
        // Error message displayed on submission failure
        <div className="mb-8 p-6 rounded-lg text-center font-semibold bg-red-100 text-red-800">
          Submission failed. Please try again later.
        </div>
      )}

      {/* Responsive form grid - single column on mobile, two columns on medium+ */}
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        {/* Full Name field */}
        <div>
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Enter your name"
            className="form-control focus-outline-primary"
          />
        </div>

        {/* Email Address field */}
        <div>
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your@email.com"
            className="form-control focus-outline-primary"
          />
        </div>

        {/* Phone Number field */}
        <div>
          <label htmlFor="phone" className="mb-2 block font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="+20 123 456 7890"
            className="form-control focus-outline-primary"
          />
        </div>

        {/* Academic Level dropdown */}
        <div>
          <label htmlFor="level" className="form-label">
            Academic Level
          </label>
          <select
            id="level"
            name="level"
            className="form-control focus-outline-primary"
          >
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
            <option>Graduate</option>
          </select>
        </div>

        {/* Interest / Motivation textarea - spans both columns on medium+ */}
        <div className="md:col-span-2">
          <label htmlFor="interest" className="form-label">
            Why do you want to attend?
          </label>
          <textarea
            id="interest"
            name="interest"
            rows={5}
            placeholder="Tell us about your interests and expectations..."
            className="resize-none form-control focus-outline-primary"
          />
        </div>

        {/* Submit button - full width and centered, spans both columns on medium+ */}
        <div className="md:col-span-2 mt-6 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 md:gap-4 py-5 w-full text-sm md:text-base font-semibold rounded-2xl cursor-pointer bg-primary-500 text-neutral-50 hover:bg-primary-400 disabled:opacity-70 disabled:cursor-not-allowed focus-ring transition-all duration-300"
          >
            <SubmitIcon className="h-6 w-6" aria-hidden="true" />
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default memo(RegistrationForm);