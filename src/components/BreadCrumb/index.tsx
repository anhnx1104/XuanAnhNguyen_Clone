import { Fragment } from 'react';
import { StyledBreadCrumb } from './BreadCrumb';
import { BiChevronRight } from 'react-icons/bi';
import Section from '@components/Elements/Section';
import Link from 'next/link';

interface BreadCrumb {
  name: string;
  link: string;
}

interface Props {
  breadCrumbs: BreadCrumb[];
  current: string;
}

const BreadCrumb = (props: Props) => {
  const { breadCrumbs, current } = props;
  return (
    <Section>
      <StyledBreadCrumb>
        <Link href="/">
          Trang chủ
          <div className="item__icon">
            <BiChevronRight className="item__icon" />
          </div>
        </Link>
        {breadCrumbs?.map((item, index) => (
          <Link
            key={index}
            href={{
              pathname: '/search',
              query: item.link,
            }}
          >
            {item.name}
            <div className="item__icon">
              <BiChevronRight className="item__icon" />
            </div>
          </Link>
        ))}
        <div className="item current">{current}</div>
      </StyledBreadCrumb>
    </Section>
  );
};

export default BreadCrumb;
