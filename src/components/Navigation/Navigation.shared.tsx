import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import React from "react";
import { NavRoutes } from "../../models";

// types/navigation.ts
export interface NavigationItemProps {
  name: string;
  handleClick: () => void;
}


// GraphQL query for fetching a collection of nav items ...
export const queryNavItems = `
query GetNavItemCollection($locale1: String!, $locale2: String!) {
  en: navigationItemCollection(locale: $locale1) { 
    items {
      name
      route
    } 
  }
  fr: navigationItemCollection(locale: $locale2) { 
    items {
      name
      route
    } 
  }
}
`;


export const LogoAndBrand = ({ onClick }: { onClick: () => void }) => {
  return (
    <span className="navbar-brand" onClick={onClick}>
      <img
        src="/images/logo-light.png"
        className="img-fluid"
        alt="Eric Njanga"
      />
    </span>
  );
};


export const ContactButton = ({ onClick }: { onClick: () => void }) => {
  // For extracting localised content from "i18n.ts" file based on the currently active locale
  const { t } = useTranslation();

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Button
          icon="chat"
          ariaLabel={t("contactCTAalt")}
          onClickHandler={onClick}
        >
          {t("contactCTA")}
        </Button>
      </li>
    </ul>
  );
};




/**
 *
 * @param param0
 * @returns
 */
export const NavigationItem = React.memo(
  ({ name, handleClick }: NavigationItemProps) => {
    return (
      <li className="nav-item">
        {/** Note: I had to use ARIA because <span /> isn't semantically correct to express links */}
        <span
          className="nav-link"
          role="link"
          tabIndex={0}
          onClick={() => handleClick()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick();
            }
          }}
        >
          {name}
        </span>
      </li>
    );
  }
);


/**
 *
 * @param param0
 * @returns
 */
export const NavigationListOfItems = React.memo(
  ({
    items,
    handleClick,
  }: {
    items: [{ name: string; route: NavRoutes }];
    handleClick: (routeValue: string, route: NavRoutes) => void;
  }) => {
    return (
      <ul className="navbar-nav mx-auto">
        {items.length &&
          items.map(
            (navItem: { name: string; route: NavRoutes }, index: number) => (
              <NavigationItem
                key={index}
                name={navItem.name}
                handleClick={() =>
                  handleClick(navItem.route, `${navItem.route}`)
                }
              />
            )
          )}
      </ul>
    );
  }
);