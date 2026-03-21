"use client";

import { processFeedback } from "@/actions/feedback";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

// nested helper component

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 p-2 text-white"
    >
      {pending ? "Booking..." : "Confirm Booking"}
    </button>
  );
}

export default function FeedbackPage() {
  const [state, formAction, isPending] = useActionState(processFeedback, {
    error: null,
    success: null,
  });

  return (
    <div className="h-full w-full p-6 flex flex-col items-center gap-8">
      <h2 className="text-2xl mb-4">Please enter the feedback</h2>
      <form
        action={formAction}
        className="flex flex-col items-center gap-4 justify-center"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border-amber-50 border-1 p-1 mb-2"
        />
        <input
          type="number"
          name="points"
          placeholder="Points"
          className="border-amber-50 border-1 p-1 mb-2"
        />
        <input
          type="text"
          name="feedback"
          placeholder="Your Feedback"
          className="border-amber-50 border-1 p-1 mb-2"
        />
        <SubmitButton />
        {state.error && <p className="text-red-500 font-bold">{state.error}</p>}
        {state.success && (
          <p className="text-green-500 font-bold">{state.success}</p>
        )}
      </form>
    </div>
  );
}
