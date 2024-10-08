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
  const [token, setToken] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const onSubmit = async (values) => {
    const { firstName: fmFirstName, lastName: fmLastName } = splitFullName(
      values.fullName
    );
    try {
      setIsSubmitting(true);

      const response = await axios.post("/api/verify-turnstile", { token });
      if (token && response.data.success) {
        const response = await axios.post("/api/submit-form", {
          ...values,
          zohoData: {
            Full_Name: values.fullName,
            Email: values.emaill,
            First_Name: fmFirstName,
            Last_Name: fmLastName,
          },
          formType: "newsletter",
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
  };

  return (
    <div className="bg-white shadow-2xl rounded-[19px] p-10 min-w-[280px] max-w-[700px] w-auto relative mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 z-[39] relative "
        >
          <div className="flex gap-2 flex-wrap w-full flex-auto ">
            {" "}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-full lg:w-[49%]">
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
                <FormItem className="w-full lg:w-[49%]">
                  <FormControl>
                    <Input placeholder=" Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
