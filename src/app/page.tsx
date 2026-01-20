import Link from "next/link";
import Image from "next/image";
import "@/pages/home.css";

export default function HomePage() {
  const categories = [
    { slug: "dien-tim", name: "Máy điện tim", image: "/images/categories/may-dien-tim.jpg" },
    { slug: "sieu-am", name: "Máy siêu âm", image: "/images/categories/may-sieu-am.jpg" },
    { slug: "x-quang", name: "Máy X-Quang", image: "/images/categories/may-x-quang.jpg" },
    { slug: "noi-soi", name: "Máy nội soi", image: "/images/categories/may-noi-soi.jpg" },
    { slug: "gay-me", name: "Máy gây mê", image: "/images/categories/may-gay-me.jpg" },
    { slug: "xet-nghiem", name: "Thiết bị xét nghiệm", image: "/images/categories/thiet-bi-xet-nghiem.jpg" },
    { slug: "thu-y", name: "Thiết bị thú y", image: "/images/categories/thiet-bi-thu-y.jpg" },
    { slug: "hoa-chat", name: "Hóa chất y tế", image: "/images/categories/hoa-chat-y-te.jpg" },
  ];

  return (
    <>
      {/* Hero Slider */}
      <section className="hero">
        <div className="hero-slider">
          <div className="hero-slide active">
            <div className="hero-background">
              <div className="hero-gradient"></div>
            </div>
            <div className="container hero-container">
              <div className="hero-content">
                <h1 className="hero-promo">
                  <span className="promo-line-1">CUỐI NĂM BỨT TỐC</span>
                  <span className="promo-line-2">GIÁ SỐC SẬP SÀN</span>
                  <span className="promo-badge">GIẢM TỚI 12%</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <button className="hero-arrow hero-prev" aria-label="Previous">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>
        <button className="hero-arrow hero-next" aria-label="Next">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,6 15,12 9,18" />
          </svg>
        </button>
        <div className="hero-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Product Categories Grid - With Real Images */}
      <section className="categories section">
        <div className="container">
          <h2 className="section-title centered text-center">Danh Mục Sản Phẩm</h2>
          <div className="categories-image-grid">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/products?cat=${cat.slug}`} className="category-image-card">
                <div className="category-image-wrapper">
                  <img src={cat.image} alt={cat.name} className="category-image" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products section bg-light">
        <div className="container">
          <div className="section-header flex-between">
            <h2 className="section-title">Sản Phẩm Mới</h2>
            <Link href="/products" className="btn btn-outline">
              Xem tất cả
              <svg className="icon icon-sm">
                <use href="#icon-arrow-right"></use>
              </svg>
            </Link>
          </div>
          <div className="grid grid-4">
            {[
              { name: "Máy Siêu Âm Doppler Màu" },
              { name: "Monitor Theo Dõi Bệnh Nhân" },
              { name: "Bàn Mổ Điện Đa Năng CH-T300" },
              { name: "Máy Xét Nghiệm Sinh Hóa Tự Động" },
            ].map((product, i) => (
              <div key={i} className="product-card">
                <div className="product-img">
                  <div className="img-placeholder">Ảnh SP</div>
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="icon icon-sm" style={{ color: "#FFC107" }}>
                        <use href="#icon-star"></use>
                      </svg>
                    ))}
                  </div>
                  <h4 className="product-title">{product.name}</h4>
                  <a href="tel:0965588369" className="product-cta">
                    Liên Hệ: 096.55.88.369
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - "Bạn cần tư vấn?" */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-wrapper">
            {/* Left: Primary card */}
            <div className="cta-consultation">
              <div className="cta-text">
                <h2>Bạn cần tư vấn ?</h2>
                <p>Huynh Van Medical luôn sẵn sàng tư vấn những sản phẩm phù hợp nhất đến Quý khách hàng với cam kết về chất lượng sản phẩm.</p>
              </div>
              <div className="cta-image">
                <svg className="cta-avatar" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="48" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                  <circle cx="50" cy="35" r="15" fill="rgba(255,255,255,0.6)" />
                  <path d="M25 75c0-14 11-25 25-25s25 11 25 25" fill="rgba(255,255,255,0.6)" />
                </svg>
              </div>
            </div>

            {/* Right: Dark card with 3 CTAs */}
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

      {/* Features Bar - White background with outline icons */}
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

      {/* Partners */}
      <section className="partners section">
        <div className="container">
          <h2 className="section-title centered text-center">Đối Tác Tin Cậy</h2>
          <div className="partners-slider">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="partner-logo">
                <div className="logo-placeholder">Logo {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
