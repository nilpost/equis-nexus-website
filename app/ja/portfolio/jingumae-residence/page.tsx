import { AssetPage } from "../../../components/asset-page";
import { assetMetadata } from "../../../localized-metadata";

export const metadata = assetMetadata("ja");

export default function JapaneseAssetPage() {
  return <AssetPage locale="ja" />;
}
