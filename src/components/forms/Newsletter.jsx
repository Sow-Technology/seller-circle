"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SendBtn } from "../buttons/SendBtn";
import { PhoneInput } from "../ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import axios from "axios";
import { BorderBeam } from "../ui/border-beam";
import { services } from "@/lib/data";
import { usePathname } from "next/navigation";
import { Turnstile } from "@marsidev/react-turnstile";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Please enter at least 2 characters",
    })
    .max(50, {
      message: "Please enter at msost 50 characters",
    }),
  email: z.string().email(),
});

const Newsletter = ({ footer }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });
  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);

      const response = await axios.post("/api/verify-turnstile", { token });
      if (response.data.success) {
        const response = await axios.post("/api/sendEmail", {
          fullName: values.fullName,
          workEmail: values.workEmail,
          phoneNumber: values.phoneNumber,
          brandName: values.brandName,
          service: values.service,
          // service2: values.service2,
          message: values.message,
        });
        toast.success("Thank you for subscribing us!");
      } else {
        toast.error("Invalid Captcha! Please try again later");
      }
    } catch (err) {
      toast.error("Internal server error, Try again later!");
    } finally {
      setIsSubmitting(false);
    }
    console.log(values);
  };
  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/verify-turnstile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
  };
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-2xl rounded-[19px] p-10 min-w-[280px] max-w-[700px] w-auto relative mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 z-[39] relative"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder=" Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
            onSuccess={setToken}
          />

          <SendBtn type="submit" disabled={isSubmitting}>
            Submit
          </SendBtn>
        </form>
      </Form>
      <BorderBeam size={250} />
    </div>
  );
};

export default Newsletter;
