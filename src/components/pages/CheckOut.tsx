import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function CheckOut() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="py-4">
          <Link to="/" className="text-gray-600">
            {t("Account")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/" className="text-gray-600">
            {t("My Account")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/" className="text-gray-600">
            {t("Product")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/" className="text-gray-600">
            {t("View Cart")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/Cart"> {t("CheckOut")}</Link>
        </div>
      </div>
    </>
  );
}
