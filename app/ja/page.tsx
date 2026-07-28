import { HomePage } from "../components/home-page";
import { homeMetadata } from "../localized-metadata";

export const metadata = homeMetadata("ja");

export default function JapaneseHome() {
  return <HomePage locale="ja" />;
}
