import Link from "next/link";
import "@/pages/home.css";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          <div className="hero-slide active">
            <div className="container">
              <div className="hero-content">
                <span className="hero-badge">Đối tác tin cậy của ngành y tế</span>
                <h1>Thiết Bị <span className="text-primary">Y Khoa</span> Chuyên Nghiệp</h1>
                <p>Chúng tôi cung cấp thiết bị y tế chất lượng cao với cam kết hỗ trợ kỹ thuật 24/7 và bảo hành chính hãng theo tiêu chuẩn Bộ Y tế.</p>
                <div className="hero-buttons">
                  <Link href="/products" className="btn btn-primary btn-lg">Xem Sản Phẩm</Link>
                  <Link href="/contact" className="btn btn-secondary btn-lg">Tư Vấn Miễn Phí</Link>
                </div>
              </div>
              <div className="hero-image">
                <div className="hero-image-placeholder">
                  <svg className="icon icon-2xl icon-primary">
                    <use href="#icon-medical"></use>
                  </svg>
                  <p>Hero Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Service Cards */}
      <section className="services-cards">
        <div className="container">
          <div className="grid grid-3">
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-emergency"></use>
                </svg>
              </div>
              <span className="service-label">Dịch vụ khẩn cấp</span>
              <h3>Hỗ Trợ Kỹ Thuật 24/7</h3>
              <p>Đội ngũ kỹ thuật viên sẵn sàng hỗ trợ mọi lúc mọi nơi, đảm bảo thiết bị hoạt động ổn định.</p>
              <Link href="/contact" className="service-link">
                Tìm hiểu thêm
                <svg className="icon icon-sm">
                  <use href="#icon-arrow-right"></use>
                </svg>
              </Link>
            </div>
            <div className="service-card featured">
              <div className="service-icon">
                <svg className="icon icon-xl icon-white">
                  <use href="#icon-clipboard"></use>
                </svg>
              </div>
              <span className="service-label">Tư vấn chuyên nghiệp</span>
              <h3>Giải Pháp Tổng Thể</h3>
              <p>Tư vấn và cung cấp giải pháp toàn diện cho các cơ sở y tế từ phòng khám đến bệnh viện lớn.</p>
              <Link href="/contact" className="service-link">
                Đặt lịch tư vấn
                <svg className="icon icon-sm">
                  <use href="#icon-arrow-right"></use>
                </svg>
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-clock"></use>
                </svg>
              </div>
              <span className="service-label">Giờ làm việc</span>
              <h3>Thời Gian Hoạt Động</h3>
              <div className="service-hours">
                <p>Thứ Hai - Thứ Sáu: <strong>8:00 - 18:00</strong></p>
                <p>Thứ Bảy: <strong>8:00 - 12:00</strong></p>
                <p>Hotline 24/7: <strong className="text-primary">096.XX.XX.XXX</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories section bg-light">
        <div className="container">
          <h2 className="section-title centered text-center">Danh Mục Sản Phẩm</h2>
          <div className="categories-grid">
            <Link href="/products?cat=sieu-am" className="category-item">
              <div className="category-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-imaging"></use>
                </svg>
              </div>
              <h4>Máy siêu âm</h4>
            </Link>
            <Link href="/products?cat=xet-nghiem" className="category-item">
              <div className="category-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-lab"></use>
                </svg>
              </div>
              <h4>Thiết bị xét nghiệm</h4>
            </Link>
            <Link href="/products?cat=dien-tim" className="category-item">
              <div className="category-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-medical"></use>
                </svg>
              </div>
              <h4>Máy điện tim</h4>
            </Link>
            <Link href="/products?cat=gay-me" className="category-item">
              <div className="category-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-surgery"></use>
                </svg>
              </div>
              <h4>Máy gây mê</h4>
            </Link>
            <Link href="/products?cat=noi-soi" className="category-item">
              <div className="category-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-microscope"></use>
                </svg>
              </div>
              <h4>Máy nội soi</h4>
            </Link>
            <Link href="/products?cat=x-quang" className="category-item">
              <div className="category-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-imaging"></use>
                </svg>
              </div>
              <h4>Máy X-Quang</h4>
            </Link>
            <Link href="/products?cat=thu-y" className="category-item">
              <div className="category-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-baby"></use>
                </svg>
              </div>
              <h4>Thiết bị thú y</h4>
            </Link>
            <Link href="/products?cat=hoa-chat" className="category-item">
              <div className="category-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-lab"></use>
                </svg>
              </div>
              <h4>Hóa chất y tế</h4>
            </Link>
            <Link href="/products?cat=vat-tu" className="category-item">
              <div className="category-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-clipboard"></use>
                </svg>
              </div>
              <h4>Vật tư tiêu hao</h4>
            </Link>
            <Link href="/products?cat=khac" className="category-item">
              <div className="category-icon">
                <svg className="icon icon-xl icon-primary">
                  <use href="#icon-bed"></use>
                </svg>
              </div>
              <h4>Thiết bị khác</h4>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products section">
        <div className="container">
          <div className="section-header flex-between">
            <h2 className="section-title">Sản Phẩm Nổi Bật</h2>
            <Link href="/products" className="btn btn-outline">
              Xem tất cả
              <svg className="icon icon-sm">
                <use href="#icon-arrow-right"></use>
              </svg>
            </Link>
          </div>
          <div className="grid grid-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="product-card">
                <div className="product-img">
                  <div className="img-placeholder">Ảnh SP {i}</div>
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="icon icon-sm" style={{ color: "#FFC107" }}>
                        <use href="#icon-star"></use>
                      </svg>
                    ))}
                  </div>
                  <h4 className="product-title">Máy Điện Tim 12 Kênh ECG-300G</h4>
                  <Link href="/products/1" className="product-cta">Liên Hệ: 096.XX.XX.XXX</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section bg-light">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <h2 className="section-title">Tại Sao Chọn Chúng Tôi?</h2>
              <p className="lead">Với hơn 10 năm kinh nghiệm trong ngành thiết bị y tế, chúng tôi tự hào là đối tác tin cậy của hàng trăm bệnh viện và phòng khám trên toàn quốc.</p>
              <ul className="feature-list">
                {[
                  { title: "Sản phẩm chính hãng", desc: "100% thiết bị có đầy đủ giấy tờ, chứng nhận Bộ Y tế" },
                  { title: "Bảo hành toàn quốc", desc: "Bảo hành tận nơi, linh kiện thay thế sẵn có" },
                  { title: "Giá cạnh tranh", desc: "Cam kết giá tốt nhất thị trường, thanh toán linh hoạt" },
                  { title: "Đào tạo sử dụng", desc: "Hướng dẫn vận hành miễn phí theo yêu cầu" },
                ].map((item, i) => (
                  <li key={i}>
                    <span className="check">
                      <svg className="icon icon-sm icon-white">
                        <use href="#icon-check"></use>
                      </svg>
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="why-us-image">
              <div className="img-placeholder large">
                <svg className="icon icon-2xl icon-primary">
                  <use href="#icon-medical"></use>
                </svg>
                <p>Ảnh Showroom / Đội Ngũ</p>
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
