"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-left">
                        <a href="tel:096XXXXXXX">
                            <svg className="icon icon-sm">
                                <use href="#icon-phone"></use>
                            </svg>
                            096.XX.XX.XXX
                        </a>
                        <a href="mailto:info@example.com">
                            <svg className="icon icon-sm">
                                <use href="#icon-email"></use>
                            </svg>
                            info@example.com
                        </a>
                    </div>
                    <div className="top-bar-right">
                        <div className="social-links">
                            <a href="#" title="Facebook">
                                <svg className="icon icon-sm">
                                    <use href="#icon-facebook"></use>
                                </svg>
                            </a>
                            <a href="#" title="YouTube">
                                <svg className="icon icon-sm">
                                    <use href="#icon-youtube"></use>
                                </svg>
                            </a>
                            <a href="#" title="Zalo">
                                <svg className="icon icon-sm">
                                    <use href="#icon-zalo"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="main-header">
                <div className="container">
                    <Link href="/" className="logo">
                        <img src="/images/logo.png" alt="Huynh Van Medical" className="logo-img" />
                    </Link>

                    {/* Search Bar */}
                    <div className="header-search">
                        <input type="text" placeholder="Nhập sản phẩm bạn cần tìm..." className="search-input" />
                        <button className="search-btn">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Right Side Info */}
                    <div className="header-info hide-mobile">
                        <div className="info-lines">
                            <a href="#" className="info-line">Tham gia cộng đồng hỗ trợ</a>
                            <a href="#" className="info-line highlight">
                                <svg className="icon icon-sm" style={{ color: "#e74c3c" }}>
                                    <use href="#icon-support"></use>
                                </svg>
                                Giải pháp kinh doanh
                            </a>
                        </div>
                    </div>

                    <button className="mobile-menu-toggle" aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="nav-bar">
                <div className="container">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
                                Trang chủ
                            </Link>
                        </li>
                        <li className="nav-item has-dropdown">
                            <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
                                Giới thiệu
                                <svg className="icon icon-sm arrow">
                                    <use href="#icon-arrow-down"></use>
                                </svg>
                            </Link>
                            <div className="dropdown">
                                <Link href="/about#vision" className="dropdown-link">Tầm nhìn - Sứ mệnh</Link>
                                <Link href="/about#history" className="dropdown-link">Lịch sử phát triển</Link>
                                <Link href="/about#team" className="dropdown-link">Đội ngũ đồng hành</Link>
                            </div>
                        </li>
                        <li className="nav-item has-dropdown">
                            <Link href="/products" className={`nav-link ${pathname?.startsWith("/products") ? "active" : ""}`}>
                                Sản phẩm
                                <svg className="icon icon-sm arrow">
                                    <use href="#icon-arrow-down"></use>
                                </svg>
                            </Link>
                            <div className="dropdown">
                                <Link href="/products?cat=sieu-am" className="dropdown-link">Máy siêu âm</Link>
                                <Link href="/products?cat=xet-nghiem" className="dropdown-link">Thiết bị xét nghiệm</Link>
                                <Link href="/products?cat=dien-tim" className="dropdown-link">Máy điện tim</Link>
                                <Link href="/products?cat=gay-me" className="dropdown-link">Máy gây mê</Link>
                                <Link href="/products?cat=noi-soi" className="dropdown-link">Máy nội soi</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link href="/news" className={`nav-link ${pathname === "/news" ? "active" : ""}`}>
                                Tin tức
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
                                Liên hệ
                            </Link>
                        </li>
                    </ul>

                    {/* Hotline Badge */}
                    <div className="nav-hotline">
                        <span className="hotline-label">HOTLINE</span>
                        <a href="tel:096XXXXXXX" className="hotline-number">096.55.88.369</a>
                    </div>
                </div>
            </nav>
        </>
    );
}
