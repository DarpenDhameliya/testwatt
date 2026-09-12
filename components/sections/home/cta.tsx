import { CtaBand } from "@/components/ui";

export default function HomeCta() {
  return (
    <CtaBand
      heading="Ready to test at full nameplate load?"
      body="Tell us what equipment needs testing, servicing or upgrading. Our engineers will respond with a clear proposal."
      actions={[
        { label: "Request a Test", to: "/contact", variant: "primary" },
        { label: "Explore Services", to: "/load-bank-testing", variant: "outline-light" },
      ]}
    />
  );
}
