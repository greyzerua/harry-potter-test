import type { ComponentProps } from 'react'
import { NavLink } from 'react-router-dom'

import clsx from 'clsx'

import type { AppPage } from '../../constants/link-urls'
import { APP_LINK_URLS } from '../../constants/link-urls'

import styles from './app-link.module.css'

interface GetClassNameParameters {
    className?: string;
    dataHover?: string;
    isCurrentPage: boolean;
}

const getClassName = ({ className, dataHover, isCurrentPage }: GetClassNameParameters) =>
    clsx(styles['app-link'], className, dataHover && 'bold-hover', isCurrentPage && styles['app-link_active']);

type Props = ComponentProps<'a'> & {
    dataHover?: string;
    page: AppPage;
};

export const AppLink = ({ className, page, children, dataHover, ...restProps }: Props) => {
    const to = APP_LINK_URLS[page];

    return (
        <NavLink
            to={to}
            className={({ isActive }) => getClassName({ className, dataHover, isCurrentPage: isActive })}
            data-hover={dataHover}
            {...restProps}
        >
            {children}
        </NavLink>
    );
};