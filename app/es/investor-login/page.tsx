import { InvestorPage } from "../../components/investor-page";
import { loginMetadata } from "../../localized-metadata";

export const metadata = loginMetadata("es");

export default function SpanishInvestorPage() {
  return <InvestorPage locale="es" />;
}
