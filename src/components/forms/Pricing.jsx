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
  workEmail: z.string().email(),
  phoneNumber: z
    .string()
    .min(7, {
      message: "Invalid phone number",
    })
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  ASIN: z.string(),
  message: z.string().optional(),
});

const Pricing = ({ services }) => {
  console.log(services);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      ASIN: "",
      message: "",
    },
  });
  const [token, setToken] = useState("");

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/sendEmail", {
        fullName: values.fullName,
        workEmail: values.workEmail,
        phoneNumber: values.phoneNumber,
        // brandName: values.brandName,
        // service: values.service,
        // service2: values.service2,
        message: values.message,
      });
      toast.success("We'll reach out to you soon!");
    } catch (err) {
      toast.error("Internal server error, Try again later!");
    } finally {
      setIsSubmitting(false);
    }
    console.log(values);
  };
  return (
    <div className="bg-white shadow-2xl rounded-[19px] p-10 min-w-[280px] max-w-[700px] w-full  relative">
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
            name="workEmail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Work Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput
                    {...field}
                    placeholder="Phone number"
                    defaultCountry="IN"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ASIN"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    min="1"
                    max="1000"
                    {...field}
                    placeholder="Enter the number of ASIN required"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="min-w-[150px]">
            {" "}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services?.map((service, idx) => (
                          <SelectItem key={idx} value={service}>
                            {service}{" "}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <div className="flex flex-row flex-wrap gap-5">
            <div className="min-w-[150px] lg:max-w-[50%]">
              {" "}
              <FormField
                control={form.control}
                name="brandName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Brand Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
         
          <div className="flex flex-row flex-wrap gap-5">
            <div className="min-w-[200px]">
              {" "}
              <FormField
                control={form.control}
                name="service2"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="service1">service1 </SelectItem>
                          <SelectItem value="service2">service2</SelectItem>
                          <SelectItem value="service3">service3</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div> */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Additional Comments"
                    className="border-b-2 border-r-2 border-[#F2F2F2] bg-[#CEEAF8]"
                    {...field}
                  />
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
            Get a Quote
          </SendBtn>
        </form>
      </Form>
      <BorderBeam size={250} />
    </div>
  );
};

export default Pricing;
