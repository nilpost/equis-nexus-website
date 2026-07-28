import { InvestorPage } from "../../components/investor-page";
import { loginMetadata } from "../../localized-metadata";

export const metadata = loginMetadata("ca");

export default function CatalanInvestorPage() {
  return <InvestorPage locale="ca" />;
}
