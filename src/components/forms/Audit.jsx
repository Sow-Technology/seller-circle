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
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";

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
  brandName: z
    .string()
    .min(2, {
      message: "Please enter at least 2 characters",
    })
    .max(50, {
      message: "Please enter at msost 50 characters",
    }),
  service: z.array(z.string()),
  // service2: z.string().min(2, {
  //   message: "Please select a service.",
  // }),
  message: z.string().optional(),
});

const Audit = ({ footer }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState("");
  console.log(token);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      brandName: "",
      service: "",
      // service2: "",
      message: "",
    },
  });
  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);

      const response = await axios.post("/api/verify-turnstile", { token });
      console.log(response);
      if (response.data.success) {
        const response = await axios.post("/api/submit-form", {
          fullName: values.fullName,
          workEmail: values.workEmail,
          phoneNumber: values.phoneNumber,
          brandName: values.brandName,
          service: values.service,
          message: values.message,
          formType: "contact",
        });
        console.log(response);
        toast.success("We'll reach out to you soon!");
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
          <div className="flex flex-row flex-wrap gap-5">
            <div className="min-w-[150px] flex-1 lg:max-w-[50%]">
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
            <div className="min-w-[150px] flex-1">
              {" "}
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <MultiSelector
                        onValuesChange={field.onChange}
                        values={field.value}
                      >
                        <MultiSelectorTrigger>
                          <MultiSelectorInput placeholder="Select services" />
                        </MultiSelectorTrigger>
                        <MultiSelectorContent>
                          <MultiSelectorList>
                            {services.map((service, idx) => (
                              <MultiSelectorItem
                                key={idx}
                                value={service.priority || service.name}
                              >
                                {service.priority || service.name}
                              </MultiSelectorItem>
                            ))}
                          </MultiSelectorList>
                        </MultiSelectorContent>
                      </MultiSelector>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* <div className="flex flex-row flex-wrap gap-5">
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
                    placeholder="Message"
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
            {footer
              ? "Request a Audit"
              : (pathname == "/" && "Contact us") ||
                (pathname == "/pricing" && "Request a quote") ||
                (pathname == "/full-service-management" && "Request a audit") ||
                (pathname == "/amazon-advertising" && "Request a audit") ||
                (pathname == "/creative-services" && "Get a Custom Quote") ||
                "LETS AUDIT"}
          </SendBtn>
        </form>
      </Form>
      <BorderBeam size={250} />
    </div>
  );
};

export default Audit;
