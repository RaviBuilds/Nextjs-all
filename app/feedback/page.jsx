import { processFeedback } from "@/actions/feedback";

export default function feedbackPage() {
  return (
    <div className="h-full w-full p-6 flex flex-col items-center gap-8">
      <h2 className="text-2xl mb-4">Please enter the feedback</h2>
      <form
        action={processFeedback}
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
        <button type="submit" className="border-amber-50 border-1 p-2 mb-2">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
