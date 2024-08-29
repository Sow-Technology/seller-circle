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
  otherTargetMarkets: z.string().default(""),
  otherMarketplaceInterest: z.string().default(""),
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
  currentChallengesOrGoals: z.string().optional(),
  service: z.string().optional(),
  businessNeeds: z.string().optional(),
  monthlyAdvertisingBudget: z.string().optional(),
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [AGoals, setAGoals] = useState([]);
  const [prefServices, setPrefServices] = useState([]);
  const [marketplaceInterest, setMarketplaceInterest] = useState([]);
  const [areasOfInterest, setAreasOfInterest] = useState([]);
  const [areasOfInterest2, setAreasOfInterest2] = useState([]);
  const [tMarkets, setTMarkets] = useState([]);
  const [advertisingFocusArea, setAdvertisingFocusArea] = useState([]);
  const handleMarketplaceInterestChange = (interest, isChecked) => {
    if (isChecked) {
      setMarketplaceInterest((prev) => [...prev, interest]);
    } else {
      setMarketplaceInterest((prev) =>
        prev.filter((service) => service !== interest)
      );
    }
  };
  const handleAGoalsChange = (serviceName, isChecked) => {
    if (isChecked) {
      setAGoals((prev) => [...prev, serviceName]);
    } else {
      setAGoals((prev) => prev.filter((service) => service !== serviceName));
    }
  };
  const handlePrefServicesChange = (serviceName, isChecked) => {
    if (isChecked) {
      setPrefServices((prev) => [...prev, serviceName]);
    } else {
      setPrefServices((prev) =>
        prev.filter((service) => service !== serviceName)
      );
    }
  };
  const handleAreasOfInterest = (interest, isChecked) => {
    if (isChecked) {
      setAreasOfInterest((prev) => [...prev, interest]);
    } else {
      setAreasOfInterest((prev) =>
        prev.filter((service) => service !== interest)
      );
    }
  };
  const handleAreasOfInterest2 = (interest, isChecked) => {
    if (isChecked) {
      setAreasOfInterest2((prev) => [...prev, interest]);
    } else {
      setAreasOfInterest2((prev) =>
        prev.filter((service) => service !== interest)
      );
    }
  };
  const handleTMarketChange = (tMarket, isChecked) => {
    if (isChecked) {
      setTMarkets((prev) => [...prev, tMarket]);
    } else {
      setTMarkets((prev) => prev.filter((service) => service !== tMarket));
    }
  };
  const handleAdvertisingFocusArea = (focus, isChecked) => {
    if (isChecked) {
      setAdvertisingFocusArea((prev) => [...prev, focus]);
    } else {
      setAdvertisingFocusArea((prev) =>
        prev.filter((service) => service !== focus)
      );
    }
  };
  console.log(areasOfInterest);
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
      otherTargetMarkets: "",
      audienceTargeting: false,
      creativeOptimisation: false,
      crossChannelAvertising: false,
      performanceReporting: false,
      fullFunnelStrategy: false,
      amazonStoreUrl: "",
      otherMarketplaceInterest: "",
      nPage: undefined, // or null, if you prefer
      ASIN: undefined, // or null, if you prefer
      advertisingBudget: undefined, // or null, if you prefer

      monthlyRevenue: undefined,
      brandName: "",
      currentChallengesOrGoals: "",
      service: "",
      businessNeeds: "",
      monthlyAdvertisingBudget: "",
      hearAboutUs: "",
      message: "",
    },
  });
  function splitFullName(fullName) {
    const [firstName, ...lastNameParts] = fullName.split(" ");
    const lastName = lastNameParts.join(" ");
    return { firstName, lastName };
  }

  const [token, setToken] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const values = form.getValues();
    if (
      values.otherMarketplaceInterest.length > 1 &&
      !marketplaceInterest.includes(values.otherMarketplaceInterest)
    ) {
      setMarketplaceInterest((prev) => [
        ...prev,
        values.otherMarketplaceInterest,
      ]);
    }

    if (
      values.otherAdvertisingGoal.length > 1 &&
      !AGoals.includes(values.otherAdvertisingGoal)
    ) {
      setAGoals((prev) => [...prev, values.otherAdvertisingGoal]);
    }
    console.log(tMarkets);
    // console.log(getArrayData);
    console.log("button clicked");
    try {
      toast.loading("Submitting...");
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
            primaryAdvertisingGoal: AGoals,
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
            primaryAdvertisingGoal: AGoals,
            businessNeeds: values.businessNeeds,
            hearAboutUs: values.hearAboutUs,
          };
          break;
        case "DSP":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            businessName: values.businessName,
            amazonStoreUrl: values.amazonStoreUrl,
            monthlyAdvertisingBudget: values.monthlyAdvertisingBudget,
            primaryAdvertisingGoals: AGoals,
            preferredServices: prefServices,
            businessNeeds: values.businessNeeds,
            hearAboutUs: values.hearAboutUs,
          };
          break;
        case "strategyAndConsulting":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            businessName: values.businessName,
            amazonStoreUrl: values.amazonStoreUrl,
            currentChallengesOrGoals: values.currentChallengesOrGoals,
            areasOfInterest: areasOfInterest,
            businessNeeds: values.businessNeeds,
            hearAboutUs: values.hearAboutUs,
          };
          break;
        case "globalLaunch":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            businessName: values.businessName,
            productDetails: values.productDetails,
            targetMarkets: tMarkets,
            currentChallengesOrGoals: values.currentChallengesOrGoals,
            areasOfInterest: areasOfInterest2,
            businessNeeds: values.businessNeeds,
            hearAboutUs: values.hearAboutUs,
          };
          break;
        case "marketplacesExpansion":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            businessName: values.businessName,
            marketplaceOfInterest: marketplaceInterest,
            targetMarkets: tMarkets,
            currentChallengesOrGoals: values.currentChallengesOrGoals,
            advertisingFocusArea,
            businessNeeds: values.businessNeeds,
            hearAboutUs: values.hearAboutUs,
          };
          break;
        case "basicA+":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            ASIN: +values.ASIN,
            service: values.service,
            additionalComments: values.message,
          };
          break;
        case "premiumA":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            ASIN: +values.ASIN,
            service: values.service,
            additionalComments: values.message,
          };
          break;
        case "brandStory":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            ASIN: +values.ASIN,
            service: values.service,
            additionalComments: values.message,
          };
          break;
        case "brandStore":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            nPage: +values.nPage,
            businessName: values.businessName,
            brandName: values.brandName,
            additionalComments: values.message,
          };
          break;
        case "brandVideo":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            businessName: values.businessName,
            service: values.service,
            additionalComments: values.message,
          };
          break;
        case "listingImageDesign":
          data = {
            fullName: values.fullName,
            workEmail: values.workEmail,
            phoneNumber: values.phoneNumber,
            businessName: values.businessName,
            service: values.service,
            additionalComments: values.message,
          };
          break;
      }
      let zohoData;
      switch (formType) {
        case "fullServiceManagement":
          const { firstName: fmFirstName, lastName: fmLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: fmFirstName,
            Last_Name: fmLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            Company: values.businessName,
            Monthly_Advertising_Budget: values.monthlyAdvertisingBudget,
            Monthly_Revenue: values.monthlyRevenue,
            Additional_Comments: values.message,
          };
          break;

        case "footer":
          const { firstName: footerFirstName, lastName: footerLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: footerFirstName,
            Last_Name: footerLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            Company: values.businessName,
            Website: values.amazonStoreUrl,
            Monthly_Advertising_Budget: values.monthlyAdvertisingBudget,
            Primary_Advertising_Goals: AGoals.join(",  "),
            Business_Needs: values.businessNeeds,
            Hear_About_Us: values.hearAboutUs,
          };
          break;

        case "advertising":
          const { firstName: advFirstName, lastName: advLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: footerFirstName,
            Last_Name: footerLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            Company: values.businessName,
            Website: values.amazonStoreUrl,
            Monthly_Advertising_Budget: values.monthlyAdvertisingBudget,
            Primary_Advertising_Goals: AGoals.join(",  "),
            Business_Needs: values.businessNeeds,
            Hear_About_Us: values.hearAboutUs,
          };
          break;

        case "DSP":
          const { firstName: dspFirstName, lastName: dspLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: dspFirstName,
            Last_Name: dspLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            Company: values.businessName,
            Website: values.amazonStoreUrl,
            Monthly_Advertising_Budget: values.monthlyAdvertisingBudget,
            Primary_Advertising_Goals: AGoals.join(",  "),
            Preferred_Services: prefServices.join(", "),
            Business_Needs: values.businessNeeds,
            Hear_About_Us: values.hearAboutUs,
          };
          break;

        case "strategyAndConsulting":
          const { firstName: stratFirstName, lastName: stratLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: stratFirstName,
            Last_Name: stratLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            Company: values.businessName,
            Website: values.amazonStoreUrl,
            Current_Challenges_Or_Goals: values.currentChallengesOrGoals,
            Areas_Of_Interest: areasOfInterest.join(", "),
            Business_Needs: values.businessNeeds,
            Hear_About_Us: values.hearAboutUs,
          };
          break;

        case "globalLaunch":
          const { firstName: globFirstName, lastName: globLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: globFirstName,
            Last_Name: globLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            Company: values.businessName,
            Product_Details: values.productDetails,
            Target_Markets: tMarkets.join(", "),
            Current_Challenges_Or_Goals: values.currentChallengesOrGoals,
            Areas_Of_Interest: areasOfInterest2.join(","),
            Business_Needs: values.businessNeeds,
            Hear_About_Us: values.hearAboutUs,
          };
          break;

        case "marketplacesExpansion":
          const { firstName: marketFirstName, lastName: marketLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: marketFirstName,
            Last_Name: marketLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            Company: values.businessName,
            Marketplace_Of_Interest: marketplaceInterest.join(", "),
            Target_Markets: tMarkets,
            Current_Challenges_Or_Goals: values.currentChallengesOrGoals,
            Advertising_Focus_Area: advertisingFocusArea.join(", "),
            Business_Needs: values.businessNeeds,
            Hear_About_Us: values.hearAboutUs,
          };
          break;

        case "basicA+":
          const { firstName: basicAFirstName, lastName: basicALastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: basicAFirstName,
            Last_Name: basicALastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            ASIN: +values.ASIN,
            Service: values.service,
            Additional_Comments: values.message,
          };
          break;

        case "premiumA":
          const { firstName: premiumAFirstName, lastName: premiumALastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: premiumAFirstName,
            Last_Name: premiumALastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            ASIN: +values.ASIN,
            Service: values.service,
            Additional_Comments: values.message,
          };
          break;

        case "brandStory":
          const { firstName: brandFirstName, lastName: brandLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: brandFirstName,
            Last_Name: brandLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            ASIN: +values.ASIN,
            Service: values.service,
            Additional_Comments: values.message,
          };
          break;

        case "brandStore":
          const { firstName: storeFirstName, lastName: storeLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: storeFirstName,
            Last_Name: storeLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            Number_Of_Pages: +values.nPage,
            Company: values.businessName,
            Brand_Name: values.brandName,
            Additional_Comments: values.message,
          };
          break;

        case "brandVideo":
          const { firstName: videoFirstName, lastName: videoLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: videoFirstName,
            Last_Name: videoLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            Company: values.businessName,
            Service: values.service,
            Additional_Comments: values.message,
          };
          break;

        case "listingImageDesign":
          const { firstName: listingFirstName, lastName: listingLastName } =
            splitFullName(values.fullName);
          zohoData = {
            Full_Name: values.fullName, // Full name for Zoho CRM
            First_Name: listingFirstName,
            Last_Name: listingLastName,
            Email: values.workEmail,
            Phone: values.phoneNumber,
            Company: values.businessName,
            Service: values.service,
            Additional_Comments: values.message,
          };
          break;
      }

      const response = await axios.post("/api/verify-turnstile", { token });
      console.log(response);
      if (token && response.data.success) {
        const response = await axios.post("/api/submit-form", {
          ...data,
          formType,
          zohoData,
        });
        toast.dismiss();
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
    <div className="bg-white shadow-2xl rounded-[19px] p-10 lg:min-w-[280px] min-w-[250px]   lg:max-w-[700px] lg:w-full m-2 max-lg:w-[98%]  relative">
      <Form {...form}>
        <form className="space-y-5 z-[39] relative">
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
                              onCheckedChange={(e) => {
                                field.onChange(e);
                                handleMarketplaceInterestChange("Amazon", e);
                              }}
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
                              onCheckedChange={(e) => {
                                field.onChange(e);
                                handleMarketplaceInterestChange("Walmart", e);
                              }}
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
                              onCheckedChange={(e) => {
                                field.onChange(e);
                                handleMarketplaceInterestChange("Flipkart", e);
                              }}
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
                              onCheckedChange={(e) => {
                                field.onChange(e);
                                handleTMarketChange("North America", e);
                              }}
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
                              onCheckedChange={(e) => {
                                field.onChange(e);
                                handleTMarketChange("Europe", e);
                              }}
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
                              onCheckedChange={(e) => {
                                field.onChange(e);
                                handleTMarketChange("Asia", e);
                              }}
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
                              onCheckedChange={(e) => {
                                field.onChange(e);
                                handleTMarketChange("Latin America", e);
                              }}
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
                              onCheckedChange={(e) => {
                                field.onChange(e);
                                handleTMarketChange("Middle East", e);
                              }}
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
                              onCheckedChange={(e) => {
                                field.onChange(e);
                                handleTMarketChange("Africa", e);
                              }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAdvertisingFocusArea(
                              "Multi-Channel Strategy",
                              e
                            );
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAdvertisingFocusArea(
                              "Marketplace Optimization",
                              e
                            );
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAdvertisingFocusArea("Targeted Campaigns", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAdvertisingFocusArea(
                              "Performance Analytics",
                              e
                            );
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAdvertisingFocusArea(
                              "Ad Spend Management",
                              e
                            );
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAdvertisingFocusArea("Creative Design", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAdvertisingFocusArea("Ongoing Support", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest("marketAnalysis", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest("strategyDevelopment", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest("performanceOptimization", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest("brandPositioning", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest("operationalEfficiency", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest("reportingAndInsights", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest("ongoingSupport", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest("newLaunchStrategy", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest2("Market Entry Analysis", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest2(
                              "Localized Strategy Development",
                              e
                            );
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest2(
                              "Cross Border Compliance",
                              e
                            );
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest2("Brand Adaptation", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest2("Channel Strategy", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest2("Performance Tracking", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAreasOfInterest2("Ongoing Support", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAGoalsChange("Increase Brand Visibility", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAGoalsChange("Drive Sales", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAGoalsChange("Improve ROI", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handleAGoalsChange("Launch New Products", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handlePrefServicesChange("Audience Targeting", e);
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handlePrefServicesChange(
                              "Creative Optimisation",
                              e
                            );
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handlePrefServicesChange(
                              "Cross Channel Advertising",
                              e
                            );
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handlePrefServicesChange(
                              "Performance Reporting",
                              e
                            );
                          }}
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
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            handlePrefServicesChange("Full Funnel Strategy", e);
                          }}
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
          <div className="max-w-[80vw] overflow-hidden">
            {" "}
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
              onSuccess={setToken}
            />
          </div>
        </form>
      </Form>
      <div className="z-10 relative mt-5 uppercase">
        {" "}
        <SendBtn disabled={isSubmitting} type="button" onClick={onSubmit}>
          {reqAudit ? "Request an Audit" : "Get a Quote"}
        </SendBtn>
      </div>
      <BorderBeam size={250} />
    </div>
  );
};

export default Pricing;
