import { AssetPage } from "../../../components/asset-page";
import { assetMetadata } from "../../../localized-metadata";

export const metadata = assetMetadata("es");

export default function SpanishAssetPage() {
  return <AssetPage locale="es" />;
}
