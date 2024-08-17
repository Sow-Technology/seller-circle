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
import { Checkbox } from "../ui/checkbox";

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
  ASIN: z.string().optional(),
  brandPositioning: z.boolean().default(false),
  operationalEfficiency: z.boolean().default(false),
  reportingAndInsights: z.boolean().default(false),
  ongoingSupport: z.boolean().default(false),
  newLaunchStrategy: z.boolean().default(false),
  marketEntryAnalysis: z.boolean().default(false),
  localizedStrategyDevelopment: z.boolean().default(false),
  crossBorderCompliance: z.boolean().default(false),
  brandAdaptation: z.boolean().default(false),
  channelStrategy: z.boolean().default(false),
  performanceTracking: z.boolean().default(false),
  increaseBrandVisibility: z.boolean().default(false),
  driveSales: z.boolean().default(false),
  improveROI: z.boolean().default(false),
  launchNewProducts: z.boolean().default(false),
  otherAdvertisingGoal: z.string().default(""),
  audienceTargeting: z.boolean().default(false),
  creativeOptimisation: z.boolean().default(false),
  crossChannelAvertising: z.boolean().default(false),
  performanceReporting: z.boolean().default(false),
  fullFunnelStrategy: z.boolean().default(false),

  // Number fields
  nPage: z.number().min(1).max(1000).optional(), // Optional field
  advertisingBudget: z.number().optional(), // Optional field

  // String fields
  monthlyRevenue: z.string().optional(),

  brandName: z.string().optional(),
  amazonStoreUrl: z.string().url("Invalid URL format").optional(),
  businessName: z.string().optional(),
  service: z.string().optional(),
  businessNeeds: z.string().optional(),
  hearAboutUs: z.string().optional(),
  message: z.string().optional(),
});

const Pricing = ({
  services,
  brandName,
  businessName,
  nPage,
  ASIN = true,
  monthlyRevenue,
  advertisingBudget,
  businessDetails,
  monthlyAdvertisingBudget,
  primaryAdvertisingGoals,
  additionalInfo,
  preferredServices,
  quoteReq,
  consulting,
  challenges,
  intrest,
  productDetails,
  launch,
  targetMarkets,
  interest2,
  IN,
  reqAudit,
  interest3,
  advertisingFocus,
  formType,
}) => {
  console.log(services);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      ASIN: undefined,
      brandPositioning: false,
      operationalEfficiency: false,
      reportingAndInsights: false,
      ongoingSupport: false,
      newLaunchStrategy: false,
      marketEntryAnalysis: false,
      localizedStrategyDevelopment: false,
      crossBorderCompliance: false,
      brandAdaptation: false,
      channelStrategy: false,
      performanceTracking: false,
      increaseBrandVisibility: false,
      driveSales: false,
      improveROI: false,
      launchNewProducts: false,
      otherAdvertisingGoal: "",
      audienceTargeting: false,
      creativeOptimisation: false,
      crossChannelAvertising: false,
      performanceReporting: false,
      fullFunnelStrategy: false,
      amazonStoreUrl: "",
      nPage: undefined, // or null, if you prefer
      ASIN: undefined, // or null, if you prefer
      advertisingBudget: undefined, // or null, if you prefer

      monthlyRevenue: undefined,
      brandName: "",
      service: "",
      businessNeeds: "",
      hearAboutUs: "",
      message: "",
    },
  });
  const [token, setToken] = useState("");

  const onSubmit = async (val) => {
    const values = form.getValues();

    console.log("button clicked");
    try {
      setIsSubmitting(true);
      let data;
      switch (formType) {
        case "fullServiceManagement":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            businessName: values.businessName,
            monthlyAdvertisingBudget: values.monthlyAdvertisingBudget,
            monthlyRevenue: values.monthlyRevenue,
            additionalComments: values.message,
          };
          break;
        case "footer":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            businessName: values.businessName,
            amazonStoreUrl: values.amazonStoreUrl,
            monthlyAdvertisingBudget: values.monthlyAdvertisingBudget,
            primaryAdvertisingGoals: values.primaryAdvertisingGoals,
            businessNeeds: values.businessNeeds,
            hearAboutUs: values.hearAboutUs,
          };
          break;
        case "advertising":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            businessName: values.businessName,
            amazonStoreUrl: values.amazonStoreUrl,
            monthlyAdvertisingBudget: values.monthlyAdvertisingBudget,
            primaryAdvertisingGoals: values.primaryAdvertisingGoals,
            businessNeeds: values.businessNeeds,
            hearAboutUs: values.hearAboutUs,
          };
          break;
      }
      console.log(data);
      const response = await axios.post("/api/verify-turnstile", { token });
      console.log(response);
      if (true || (token && response.data.success)) {
        const response = await axios.post("/api/submit-form", {
          ...data,
          formType,
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
          {businessName && (
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Business Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {businessDetails && (
            <>
              <span className="my-1 font-medium block">Business Details:</span>
              {productDetails ? (
                <>
                  {" "}
                  <FormField
                    control={form.control}
                    name="productDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder={`Product Details:`}
                            className="border-b-2 border-r-2 border-[#F2F2F2] bg-[#CEEAF8]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              ) : interest3 ? (
                <>
                  <span className="my-1 font-medium block">
                    Marketplace(s) of Interest:
                  </span>

                  <div className="flex gap-2 flex-wrap items-center">
                    <FormField
                      control={form.control}
                      name="amazon"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-[#CEEAF8]">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Amazon </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="walmart"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Walmart</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="flipkart"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Flipkart</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="otherMarketplaceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="other" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              ) : (
                <>
                  <FormField
                    control={form.control}
                    name="amazonStoreUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Amazon Store URL (if applicable)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              {targetMarkets && (
                <>
                  <span className="my-1 font-medium block">
                    Target Markets:
                  </span>

                  <div className="flex gap-2 flex-wrap items-center">
                    <FormField
                      control={form.control}
                      name="northAmerica"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-[#CEEAF8]">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>North America </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="europe"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Europe</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="asia"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Asia</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="latinAmerica"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Latin America</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="middleEast"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Middle East</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="africa"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Africa</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="otherTargetMarkets"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="other" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}
            </>
          )}
          {monthlyAdvertisingBudget && (
            <FormField
              control={form.control}
              name="monthlyAdvertisingBudget"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Monthly advertising budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {monthlyAdvertisingBudget?.map((service, idx) => (
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
          )}
          {challenges && (
            <FormField
              control={form.control}
              name="currentChallengesOrGoals"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Current Challenges or Goals"
                      className="border-b-2 border-r-2 border-[#F2F2F2] bg-[#CEEAF8]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {advertisingFocus && (
            <>
              <span className="my-1 font-medium block">
                Advertsing Focus Area:
              </span>

              <div className="flex gap-2 flex-wrap items-center">
                <FormField
                  control={form.control}
                  name="Multi-Channel Strategy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-[#CEEAF8]">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Multi-Channel Strategy </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Marketplace Optimization"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Marketplace Optimization</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Targeted Campaigns"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Targeted Campaigns</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Performance Analytics"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Performance Analytics</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Ad Spend Management"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Ad Spend Management</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Creative Design"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Creative Design</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Ongoing Support"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Ongoing Support</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}
          {intrest && (
            <>
              <span className="my-1 font-medium block">Areas of Interest:</span>

              <div className="flex gap-2 flex-wrap items-center">
                <FormField
                  control={form.control}
                  name="marketAnalysis"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-[#CEEAF8]">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Market Analysis</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="strategyDevelopment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Strategy Development</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="performanceOptimization"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Performace Optimization</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="brandPositioning"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Brand Positioning</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="operationalEfficiency"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Operational Efficiency</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="reportingAndInsights"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Reporting and Insights</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ongoingSupport"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Ongoing Support</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newLaunchStrategy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>New Launch Strategy</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}
          {interest2 && (
            <>
              <span className="my-1 font-medium block">Areas of Interest:</span>

              <div className="flex gap-2 flex-wrap items-center">
                <FormField
                  control={form.control}
                  name="marketEntryAnalysis"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-[#CEEAF8]">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Market Entry Analysis </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="localizedStrategyDevelopment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Localized Strategy Development</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="crossBorderCompliance"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Cross-Border Compliance</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="brandAdaptation"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Brand Adaptation</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="channelStrategy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Channel Strategy</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="performanceTracking"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Performance Tracking</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ongoingSupport"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Ongoing Support</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}
          {primaryAdvertisingGoals && (
            <>
              <span className="my-1 font-medium block">
                Primary Advertising Goal:
              </span>

              <div className="flex gap-2 flex-wrap items-center">
                <FormField
                  control={form.control}
                  name="increaseBrandVisibility"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-[#CEEAF8]">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Increase Brand Visiblity</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="driveSales"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Drive Sales</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="improveROI"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Improve ROI</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="launchNewProducts"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Launch New Products</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="otherAdvertisingGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="other" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}
          {preferredServices && (
            <>
              <span className="my-1 font-medium block">
                Preferred Services:
              </span>

              <div className="flex gap-2 flex-wrap items-center">
                <FormField
                  control={form.control}
                  name="audienceTargeting"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-[#CEEAF8]">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Audience Targeting </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="creativeOptimisation"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Creative Optimisation</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="crossChannelAvertising"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Cross-Channel Advertising</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="performanceReporting"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Performance Reporting</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fullFunnelStrategy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-[#CEEAF8] p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Full Funnel Strategy</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}
          {nPage && (
            <FormField
              control={form.control}
              name={"nPage"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      max="1000"
                      {...field}
                      placeholder={"Enter the number of pages"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {!nPage && ASIN && (
            <FormField
              control={form.control}
              name={"ASIN"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      max="1000"
                      {...field}
                      placeholder={"Enter the number of ASIN required"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {monthlyRevenue && (
            <>
              {" "}
              <FormField
                control={form.control}
                name="monthlyRevenue"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your monthly revenue" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {monthlyRevenue?.map((service, idx) => (
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
            </>
          )}
          {advertisingBudget && (
            <FormField
              control={form.control}
              name={"advertisingBudget"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      placeholder={"Enter your advertising budget(optional)"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {brandName && (
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
          )}
          {services && (
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
          )}
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
          {additionalInfo ? (
            <>
              {" "}
              <span className="my-1 font-medium block">
                Additional Information
              </span>
              <FormField
                control={form.control}
                name="businessNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder={`Describe Your Business & ${
                          consulting
                            ? "Consulting "
                            : launch
                            ? "Launch"
                            : "Advertising "
                        }Needs:`}
                        className="border-b-2 border-r-2 border-[#F2F2F2] bg-[#CEEAF8]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hearAboutUs"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="How Did You Hear About Us?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[
                            "Google Search",
                            "Amazon",
                            "Social Media",
                            "Referral",
                            "Other",
                          ].map((service, idx) => (
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
            </>
          ) : (
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
          )}
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
            onSuccess={setToken}
          />
          <SendBtn type="submit" disabled={isSubmitting} onClick={onSubmit}>
            {reqAudit ? "Request a Audit" : "Get a Quote"}
          </SendBtn>
        </form>
      </Form>
      <BorderBeam size={250} />
    </div>
  );
};

export default Pricing;
