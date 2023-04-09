import Link from "next/link";
import { useRouter } from "next/router";

function SettingsMenu() {
    const router = useRouter();
    return (
        <>
            {/* <li className={router.pathname == "/" ? "active" : ""}>
                            <Link href="/">
                                <a>
                                    <span>
                                        <i className="bi bi-house"></i>
                                    </span>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </Link>
                            </li> */}

            <ul className="settings-menu">
                <li
                    className={
                        router.pathname == "/settings" ? "active" : ""
                    }
                >
                    <Link href="/settings">
                        <a>Profile</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/application"
                            ? "active"
                            : ""
                    }
                >
                    <Link href="/application">
                        <a>Application</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/security" ? "active" : ""
                    }
                >
                    <Link href="/security">
                        <a>Security</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/log" ? "active" : ""
                    }
                >
                    <Link href="/log">
                        <a>Log</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/payment"
                            ? "active"
                            : ""
                    }
                >
                    <Link href="/payment">
                        <a>Payment Method</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/apis" ? "active" : ""
                    }
                >
                    <Link href="/apis">
                        <a>API</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}
export default SettingsMenu;
