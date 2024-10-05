import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FeedbackCollection = () => {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Feedback submitted:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-lg shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold text-[#00263E]">
            Feedback Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Feedback Type Dropdown */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="feedbackType" className="text-[#00263E]">
                Feedback Type
              </Label>
              <Select
                onValueChange={(value) =>
                  setValue("feedbackType", value, { shouldValidate: true })
                }>
                <SelectTrigger className="w-full border border-[#FF006B] rounded-lg focus:ring-2 focus:ring-[#FF006B]">
                  <SelectValue placeholder="Select feedback type" />
                </SelectTrigger>
                <SelectContent className="rounded-lg shadow-lg border border-[#FF006B]">
                  <SelectItem
                    className=" text-black hover:bg-gray-100"
                    value="Course">
                    Course
                  </SelectItem>
                  <SelectItem
                    className=" text-black hover:bg-gray-100"
                    value="Assignment">
                    Assignment
                  </SelectItem>
                  <SelectItem
                    className=" text-black hover:bg-gray-100"
                    value="General">
                    General
                  </SelectItem>
                  <SelectItem
                    className=" text-black hover:bg-gray-100"
                    value="Bug Report">
                    Bug Report
                  </SelectItem>
                  <SelectItem
                    className=" text-black hover:bg-gray-100"
                    value="Feature Request">
                    Feature Request
                  </SelectItem>
                  <SelectItem
                    className=" text-black hover:bg-gray-100"
                    value="Other">
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.feedbackType && (
                <p className="text-red-500 text-sm">
                  Feedback type is required
                </p>
              )}
            </div>

            {/* Feedback Textarea */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="feedback" className="text-[#00263E]">
                Your Feedback
              </Label>
              <Textarea
                id="feedback"
                name="feedback"
                placeholder="Write your feedback here..."
                {...register("feedback", { required: true })}
                className="w-full border border-[#FF006B] rounded-lg focus:ring-2 focus:ring-[#FF006B]"
              />
              {errors.feedback && (
                <p className="text-red-500 text-sm">Feedback is required</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#FF006B] hover:bg-pink-600 text-white py-2 rounded-lg">
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackCollection;
