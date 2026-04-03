"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { getServiceBySlug } from "@/components/services/serviceData";

export default function BrandExperiencePage() {
  return <ServicePageLayout data={getServiceBySlug("brand-experience")!} />;
}