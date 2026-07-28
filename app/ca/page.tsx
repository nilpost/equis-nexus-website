import { HomePage } from "../components/home-page";
import { homeMetadata } from "../localized-metadata";

export const metadata = homeMetadata("ca");

export default function CatalanHome() {
  return <HomePage locale="ca" />;
}
