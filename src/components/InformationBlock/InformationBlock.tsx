import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../utils/contexts";
import Preloader from "../Preloader/Preloader";
import Heading from "../Heading/Heading";

import { useContentful } from "../../hooks/useContentful";
import { queryKeyData } from "./InformationBlock.shared";
import { queryData } from "../../libs/queries";



const InformationBlock = ({ id, hSize = '3' }: { id: string, hSize?: '1' | '2' | '3' | '4' | '5' | '6' }) => {
  // For extracting localised content from "i18n.ts" file based on the currently active locale
  const { t } = useTranslation();

  // Getting the currently active locale...
  const activeLang = useContext(LanguageContext);

  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */
  const { data, isLoading, error } = useContentful({
    query: queryData.infoBlockById,
    variables: { blockId: id, locale1: "en-CA", locale2: "fr" },
    queryKey: `${queryKeyData}-${id}`,
  });

  // Display a placeholder is there is no modal context or the data fetching is not yet completed
  if (isLoading) {
    return <Preloader />;
  }
  // Display an error messaye if there was problem fetching data
  if (error) return <p>{t("ErrorLoadingPosts")}</p>;
  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */


  return (
    <div>
    {data && activeLang && (
      <>
        <Heading h={hSize} className="Hero-title">
          {data[activeLang]?.title}
        </Heading>
        <div
          className="About-description"
          dangerouslySetInnerHTML={{
            __html: String(
              data[activeLang]?.description?.json?.content[0]
                ?.content[0]?.value ?? ""
            ),
          }}
        />
        {/* <div>{documentToReactComponents(data.pageSection.description.json)}</div> */}
      </>
    )}
    </div>
  );
};

export default InformationBlock;