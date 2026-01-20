import "@/pages/contact.css";

export default function ContactPage() {
    return (
        <>
            {/* Breadcrumb */}
            <section className="breadcrumb-bar">
                <div className="container">
                    <nav className="breadcrumb">
                        <a href="/">Trang chủ</a>
                        <span className="separator">&gt;</span>
                        <span>Liên hệ</span>
                    </nav>
                </div>
            </section>

            {/* Contact Banner */}
            <section className="contact-banner">
                <div className="banner-image">
                    <div className="banner-overlay">
                        <svg viewBox="0 0 100 80" fill="none" className="banner-icon">
                            <rect x="5" y="15" width="60" height="45" rx="4" stroke="white" strokeWidth="2" />
                            <path d="M5 22L35 45L65 22" stroke="white" strokeWidth="2" />
                            <circle cx="75" cy="35" r="20" stroke="white" strokeWidth="2" />
                            <path d="M75 25v10l7 5" stroke="white" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main section">
                <div className="container">
                    <div className="contact-grid-2col">
                        {/* Left: Company Info */}
                        <div className="contact-info">
                            <div className="company-logo">
                                <div className="logo-icon">
                                    <svg className="icon icon-lg">
                                        <use href="#icon-medical"></use>
                                    </svg>
                                </div>
                                <span className="logo-text">ABC<strong>Medical</strong></span>
                            </div>
                            <ul className="contact-details">
                                <li>
                                    <div className="detail-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div className="detail-text">
                                        <strong>Địa chỉ</strong>
                                        <span>Khu BTM Đại Kim, Phương Định Công, TP. Hà Nội</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="detail-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div className="detail-text">
                                        <strong>Hotline</strong>
                                        <span>096.55.88.369</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="detail-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div className="detail-text">
                                        <strong>Email</strong>
                                        <span>info@abcmedical.com</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Liên hệ ngay với chúng tôi để nhận tư vấn tốt Nhất</h2>
                            <form className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="text" placeholder="Tên của bạn" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" placeholder="Số điện thoại của bạn" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="email" placeholder="Email của bạn" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Chủ đề" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Nội dung" rows={4}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">LIÊN HỆ NGAY</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Cards */}
            <section className="office-cards section">
                <div className="container">
                    <div className="office-grid">
                        {/* Active Card */}
                        <div className="office-card active">
                            <h4>Văn phòng Hà Nội</h4>
                            <div className="office-info">
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>Khu BTM Đại Kim, Phương Định Công, TP. Hà Nội</span>
                                </div>
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>096.55.88.369</span>
                                </div>
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <span>info@abcmedical.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Other Office Cards */}
                        <div className="office-card">
                            <h4>Văn phòng HCM</h4>
                            <div className="office-info">
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>Số 273/1/14, Tô Hiến Thành, TP. HCM</span>
                                </div>
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>096.55.88.369</span>
                                </div>
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <span>info@abcmedical.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="office-card">
                            <h4>Kho Hà Nội</h4>
                            <div className="office-info">
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>Phố Hồng Quang, Đông Côi, TP. Hà Nội</span>
                                </div>
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>096.55.88.369</span>
                                </div>
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <span>info@abcmedical.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="office-card">
                            <h4>Hỗ trợ Kỹ thuật</h4>
                            <div className="office-info">
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>Hà Nội & Hồ Chí Minh</span>
                                </div>
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>096.55.88.369</span>
                                </div>
                                <div className="office-row">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <span>info@abcmedical.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section with Overlay */}
            <section className="map-section">
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2954619774257!2d105.83858731540352!3d20.97800008601655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acf8f817abab%3A0x1b7c5d5e3eb64b9b!2zxJDhuqFpIEtpbSwgSG_DoG5nIE1haSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1642686000000!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="ABC Medical Location"
                    ></iframe>

                    {/* Map Overlay */}
                    <div className="map-overlay">
                        <div className="map-info-card">
                            <h4>Công Ty TNHH ABC Medical</h4>
                            <p>Khu BTM Đại Kim, Phương Định Công</p>
                            <p>Hoàng Mai, Hà Nội 100000</p>
                            <div className="rating">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} viewBox="0 0 24 24" fill="#FFC107">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <a href="#" className="map-link">Xem bản đồ chi tiết</a>
                        </div>

                        <div className="hotline-cards">
                            <div className="hotline-card">
                                <div className="hotline-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="hotline-info">
                                    <span>HOTLINE</span>
                                    <strong>096.55.88.369</strong>
                                </div>
                            </div>
                            <div className="hotline-card">
                                <div className="hotline-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
                                        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                                    </svg>
                                </div>
                                <div className="hotline-info">
                                    <span>HỖ TRỢ KỸ THUẬT</span>
                                    <strong>096.55.88.369</strong>
                                </div>
                            </div>
                            <div className="hotline-card">
                                <div className="hotline-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12,6 12,12 16,14" />
                                    </svg>
                                </div>
                                <div className="hotline-info">
                                    <span>ZALO CSKH</span>
                                    <strong>096.55.88.369</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="container">
                    <div className="cta-wrapper">
                        <div className="cta-consultation">
                            <div className="cta-text">
                                <h2>Bạn cần tư vấn ?</h2>
                                <p>ABC Medical luôn sẵn sàng tư vấn những sản phẩm phù hợp nhất đến Quý khách hàng với cam kết về chất lượng sản phẩm.</p>
                            </div>
                            <div className="cta-image">
                                <svg className="cta-avatar" viewBox="0 0 100 100" fill="none">
                                    <circle cx="50" cy="50" r="48" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                    <circle cx="50" cy="35" r="15" fill="rgba(255,255,255,0.6)" />
                                    <path d="M25 75c0-14 11-25 25-25s25 11 25 25" fill="rgba(255,255,255,0.6)" />
                                </svg>
                            </div>
                        </div>
                        <div className="cta-support">
                            <h3>Liên hệ với chúng tôi để được hỗ trợ tốt nhất</h3>
                            <div className="cta-items">
                                <div className="cta-item">
                                    <div className="cta-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20,6 9,17 4,12" />
                                        </svg>
                                    </div>
                                    <div className="cta-label">
                                        <span>SẢN PHẨM</span>
                                        <strong>CHÍNH HÃNG</strong>
                                    </div>
                                </div>
                                <div className="cta-item">
                                    <div className="cta-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div className="cta-label">
                                        <span>HOTLINE</span>
                                        <strong>096.55.88.369</strong>
                                    </div>
                                </div>
                                <div className="cta-item">
                                    <div className="cta-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                    </div>
                                    <div className="cta-label">
                                        <span>CHAT VỚI</span>
                                        <strong>CHUYÊN VIÊN</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Bar */}
            <section className="features-bar">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="1" y="3" width="15" height="13" rx="2" />
                                    <circle cx="5.5" cy="18.5" r="2.5" />
                                    <circle cx="18.5" cy="18.5" r="2.5" />
                                    <path d="M16 8h4l3 5v4h-7V8z" />
                                </svg>
                            </div>
                            <div className="feature-text">
                                <strong>Vận chuyển</strong>
                                <span>An toàn và nhanh chóng</span>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                    <line x1="7" y1="7" x2="7.01" y2="7" />
                                </svg>
                            </div>
                            <div className="feature-text">
                                <strong>Giá Tốt</strong>
                                <span>Mức giá cạnh tranh</span>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                            </div>
                            <div className="feature-text">
                                <strong>Sản Phẩm</strong>
                                <span>Gần 1000 sản phẩm</span>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
                                    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                                </svg>
                            </div>
                            <div className="feature-text">
                                <strong>Hỗ trợ</strong>
                                <span>Đội ngũ chuyên nghiệp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
