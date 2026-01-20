import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/* Newsletter - Dark brown background */}
            <div className="newsletter-bar">
                <div className="container">
                    <div className="newsletter-text">
                        <span>Nhập Email để nhận thông tin khuyến mãi từ ABC Medical</span>
                    </div>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Email thường dùng" required />
                        <button type="submit" className="btn btn-primary">Đăng ký</button>
                    </form>
                </div>
            </div>

            {/* Main Footer */}
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <Link href="/" className="logo">
                                <div className="logo-icon">
                                    <svg className="icon icon-lg icon-white">
                                        <use href="#icon-medical"></use>
                                    </svg>
                                </div>
                                <div className="logo-text">ABC<span>Medical</span></div>
                            </Link>
                            <p>Nhà cung cấp thiết bị y khoa với hơn 30 danh mục và 1000+ loại sản phẩm đa dạng.</p>
                            <div className="footer-social">
                                <a href="#" title="Facebook">
                                    <svg className="icon">
                                        <use href="#icon-facebook"></use>
                                    </svg>
                                </a>
                                <a href="#" title="YouTube">
                                    <svg className="icon">
                                        <use href="#icon-youtube"></use>
                                    </svg>
                                </a>
                                <a href="#" title="Zalo">
                                    <svg className="icon">
                                        <use href="#icon-zalo"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Chính sách</h4>
                            <ul className="footer-links">
                                <li><a href="#">Chính sách bảo hành</a></li>
                                <li><a href="#">Chính sách đổi trả</a></li>
                                <li><a href="#">Chính sách thanh toán</a></li>
                                <li><a href="#">Chính sách vận chuyển</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Liên kết</h4>
                            <ul className="footer-links">
                                <li><Link href="/about">Giới thiệu</Link></li>
                                <li><Link href="/products">Sản phẩm</Link></li>
                                <li><Link href="/news">Tin tức</Link></li>
                                <li><Link href="/contact">Liên hệ</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Hotline</h4>
                            <ul className="footer-links">
                                <li><strong style={{ color: "var(--primary)", fontSize: "1.25rem" }}>096.XX.XX.XXX</strong></li>
                                <li>Email: info@example.com</li>
                                <li>Hỗ trợ kỹ thuật 24/7</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Footer Contact */}
            <div className="footer-contact">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-item">
                            <div className="icon">
                                <svg className="icon icon-lg icon-primary">
                                    <use href="#icon-location"></use>
                                </svg>
                            </div>
                            <h5>Văn phòng Hà Nội</h5>
                            <p>[Địa chỉ văn phòng HN]</p>
                            <a href="tel:096XXXXXXX">096.XX.XX.XXX</a>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <svg className="icon icon-lg icon-primary">
                                    <use href="#icon-location"></use>
                                </svg>
                            </div>
                            <h5>Văn phòng TP.HCM</h5>
                            <p>[Địa chỉ văn phòng HCM]</p>
                            <a href="tel:096XXXXXXX">096.XX.XX.XXX</a>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <svg className="icon icon-lg icon-primary">
                                    <use href="#icon-warehouse"></use>
                                </svg>
                            </div>
                            <h5>Kho Hàng</h5>
                            <p>[Địa chỉ kho hàng]</p>
                            <a href="tel:096XXXXXXX">096.XX.XX.XXX</a>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <svg className="icon icon-lg icon-primary">
                                    <use href="#icon-support"></use>
                                </svg>
                            </div>
                            <h5>Hỗ trợ kỹ thuật</h5>
                            <p>Hotline 24/7</p>
                            <a href="tel:096XXXXXXX">096.XX.XX.XXX</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="copyright">
                <p>© 2024 - CÔNG TY ABC MEDICAL. Đã đăng ký bản quyền.</p>
            </div>
        </>
    );
}
