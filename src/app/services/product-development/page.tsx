"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { getServiceBySlug } from "@/components/services/serviceData";

export default function ProductDevelopmentPage() {
  return <ServicePageLayout data={getServiceBySlug("product-development")!} />;
}