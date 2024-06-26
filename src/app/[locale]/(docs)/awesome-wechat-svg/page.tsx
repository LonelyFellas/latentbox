import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";


export default function Page() {
  const t = useTranslations("docs.awesome-wechat-svg")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["yangzehaohandsome"]}
    >

      <SectionTitle title={t("title")} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.awesome-wechat-svg" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}