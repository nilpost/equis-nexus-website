import { HomePage } from "../components/home-page";
import { homeMetadata } from "../localized-metadata";

export const metadata = homeMetadata("es");

export default function SpanishHome() {
  return <HomePage locale="es" />;
}
