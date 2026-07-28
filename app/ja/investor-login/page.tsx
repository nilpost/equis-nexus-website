import { InvestorPage } from "../../components/investor-page";
import { loginMetadata } from "../../localized-metadata";

export const metadata = loginMetadata("ja");

export default function JapaneseInvestorPage() {
  return <InvestorPage locale="ja" />;
}
