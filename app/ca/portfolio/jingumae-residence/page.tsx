import { AssetPage } from "../../../components/asset-page";
import { assetMetadata } from "../../../localized-metadata";

export const metadata = assetMetadata("ca");

export default function CatalanAssetPage() {
  return <AssetPage locale="ca" />;
}
