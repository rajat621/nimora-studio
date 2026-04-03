"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { getServiceBySlug } from "@/components/services/serviceData";

export default function ProductDesignPage() {
  return <ServicePageLayout data={getServiceBySlug("product-design")!} />;
}