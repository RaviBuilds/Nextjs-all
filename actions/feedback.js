"use server";

import { connectDB } from "@/lib/dbConnect.js";
import { Feedback } from "@/models/Feedback.model";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function processFeedback(formData) {
  //here extracted all the data from the native formData object
  const name = formData.get("name");
  const points = formData.get("points");
  const feedback = formData.get("feedback");

  if (!name || !points || !feedback) {
    return { error: "Please fill out all the details", success: null };
  }
  console.log("Name:", name);
  console.log("Points:", points);
  console.log("Feedback:", feedback);
  //connect to mongoDB

  await connectDB();

  //perform the DB operations

  try {
    await Feedback.create({
      name: name,
      points: points,
      feedback: feedback,
    });
    revalidatePath("/dashboard");
    redirect("/dashboard/success");
    console.log("DB written done");
    return { error: null, success: "Feedback saved!!" };
  } catch (error) {
    console.error("Error Occured:", error);
    return { error: "Failed to process feedback", success:null};
  }
}
