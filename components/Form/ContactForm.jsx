"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import {
  Loader2,
} from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const ContactValidation = z.object({
    name: z
      .string()
      .min(3, { message: "Name cannot be empty" })
      .max(40, { message: "Name is too long" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().regex(/^\d{11}$/, { message: "Invalid phone number" }),
    message: z
      .string()
      .nonempty()
      .min(3, { message: "Minimum of 3 characters" }),
  });

  const form = useForm({
    resolver: zodResolver(ContactValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true); // Set loading state to true during submission

      const response = await fetch("/api/nodemailer/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading state back to false after submission (whether successful or not)
    }
  };

  useEffect(() => {
    let timeout;
    if (isSubmitted) {
      timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000); // Set the timeout for 5 seconds
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isSubmitted]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full text-gray-700 rounded-xl shadow shadow-blue-300 p-7 gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="account-form_input no-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  {...field}
                  className="account-form_input no-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Type in your Message"
                  {...field}
                  className="account-form_input no-focus dark:text-slate-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className={`bg-secondary-color rounded-xl text-white hover:bg-blue-700 p-6 text-xl ${
            isLoading ? "cursor-not-allowed" : "" // Disable button during loading
          }`}
        >
          {isLoading ? <Loader2 /> : "Submit"}
        </Button>

        {isSubmitted ? (
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-semibold text-secondary-color">
              Form Submitted Successfully!
            </h3>
          </div>
        ) : (
          ""
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
