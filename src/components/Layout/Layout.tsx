import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.wrap}>
            {children}
        </div>
    )
}

export default Layout