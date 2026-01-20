import Link from "next/link";
import "@/pages/contact.css";

export default function ContactPage() {
    return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <div className="container">
                    <ul className="breadcrumb-list">
                        <li><Link href="/">Trang chủ</Link></li>
                        <li><span className="current">Liên hệ</span></li>
                    </ul>
                </div>
            </div>

            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Liên Hệ</h1>
                    <p>Bạn cần tư vấn? Hãy liên hệ ngay với chúng tôi!</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Thông Tin Liên Hệ</h2>

                            <div className="info-card">
                                <div className="info-icon">
                                    <svg className="icon"><use href="#icon-location"></use></svg>
                                </div>
                                <div>
                                    <h4>Văn Phòng Hà Nội</h4>
                                    <p>[Địa chỉ văn phòng Hà Nội - Cần cập nhật]</p>
                                    <a href="tel:096XXXXXXX">096.XX.XX.XXX</a>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <svg className="icon"><use href="#icon-location"></use></svg>
                                </div>
                                <div>
                                    <h4>Văn Phòng TP.HCM</h4>
                                    <p>[Địa chỉ văn phòng TP.HCM - Cần cập nhật]</p>
                                    <a href="tel:096XXXXXXX">096.XX.XX.XXX</a>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <svg className="icon"><use href="#icon-warehouse"></use></svg>
                                </div>
                                <div>
                                    <h4>Kho Hàng</h4>
                                    <p>[Địa chỉ kho hàng - Cần cập nhật]</p>
                                    <a href="tel:096XXXXXXX">096.XX.XX.XXX</a>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <svg className="icon"><use href="#icon-support"></use></svg>
                                </div>
                                <div>
                                    <h4>Hỗ Trợ Kỹ Thuật</h4>
                                    <p>Hotline 24/7</p>
                                    <a href="tel:096XXXXXXX" className="hotline">096.XX.XX.XXX</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Gửi Yêu Cầu Tư Vấn</h2>
                            <form className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Họ và tên *</label>
                                        <input type="text" className="form-control" placeholder="Nhập họ và tên" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Số điện thoại *</label>
                                        <input type="tel" className="form-control" placeholder="Nhập số điện thoại" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Nhập email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Đơn vị công tác</label>
                                        <input type="text" className="form-control" placeholder="Tên bệnh viện/phòng khám" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Sản phẩm quan tâm</label>
                                    <select className="form-control">
                                        <option value="">Chọn danh mục sản phẩm</option>
                                        <option>Khoa Sản - Phụ</option>
                                        <option>Khoa Ngoại</option>
                                        <option>Khoa Xét Nghiệm</option>
                                        <option>Chẩn Đoán Hình Ảnh</option>
                                        <option>Thiết bị khác</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Nội dung yêu cầu *</label>
                                    <textarea className="form-control" rows={5} placeholder="Mô tả chi tiết nhu cầu của bạn..." required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg w-full">
                                    Gửi Yêu Cầu Tư Vấn
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-placeholder">
                    <svg className="icon icon-2xl icon-primary">
                        <use href="#icon-location"></use>
                    </svg>
                    <p>[Nhúng Google Maps tại đây]</p>
                    <small>Thay thế bằng iframe Google Maps với địa chỉ thực tế</small>
                </div>
            </section>
        </>
    );
}
