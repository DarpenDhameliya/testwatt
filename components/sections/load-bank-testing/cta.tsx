import { CtaBand } from "@/components/ui";

export default function LoadBankTestingCta() {
  return (
    <CtaBand
      heading="Ready to schedule your load test?"
      body="Describe your equipment and site. We will provide a test specification and cost proposal."
      actions={[{ label: "Request a Test", to: "/contact", variant: "primary" }]}
    />
  );
}
