import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { BiBuildingHouse } from 'react-icons/bi';
import { StyledTopContact } from './TopContact';

function TopContact() {
  const { t } = useTranslation();
  return (
    <StyledTopContact>
      <ul className="list">
        <li className="element">
          <Link href="https://phongvu.vn/contact">
            <BiBuildingHouse className="element__icon" />
            <p>{t('showroom-system')}</p>
          </Link>
        </li>
        <li className="element">
          <Link href="tel:18006867">
            <BiBuildingHouse className="element__icon" />
            <p>{t('shopping-advice')}</p>
            <span>18006865</span>
          </Link>
        </li>
        <li className="element">
          <Link href="tel:18006865">
            <BiBuildingHouse className="element__icon" />
            <p>{t('customer-service')}</p>
            <span>18006865</span>
          </Link>
        </li>
        <li className="element">
          <BiBuildingHouse className="element__icon" />
          <p>{t('tech-news')}</p>
        </li>
        <li className="element">
          <BiBuildingHouse className="element__icon" />
          <p>{t('build-configuration')}</p>
        </li>
      </ul>
    </StyledTopContact>
  );
}

export default TopContact;
