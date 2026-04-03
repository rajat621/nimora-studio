"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { getServiceBySlug } from "@/components/services/serviceData";

export default function UXStrategyPage() {
  return <ServicePageLayout data={getServiceBySlug("ux-strategy")!} />;
}