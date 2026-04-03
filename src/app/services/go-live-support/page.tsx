"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { getServiceBySlug } from "@/components/services/serviceData";

export default function GoLiveSupportPage() {
  return <ServicePageLayout data={getServiceBySlug("go-live-support")!} />;
}