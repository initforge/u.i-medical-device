import Link from "next/link";
import "@/pages/products.css";

export default function ProductsPage() {
    const products = [
        { id: 1, name: "Máy Điện Tim 12 Kênh ECG-300G" },
        { id: 2, name: "Monitor Theo Dõi Bệnh Nhân PM-9000" },
        { id: 3, name: "Máy Xét Nghiệm Sinh Hóa Tự Động BA-400" },
        { id: 4, name: "Nồi Hấp Tiệt Trùng 50 Lít BKQ-B50" },
        { id: 5, name: "Máy Siêu Âm Doppler Màu 4D" },
        { id: 6, name: "Máy Đo Huyết Áp Tự Động HEM-7120" },
        { id: 7, name: "Máy Đo SpO2 Fingertip Pulse Oximeter" },
        { id: 8, name: "Bàn Mổ Đa Năng Điện CH-T300" },
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <div className="container">
                    <ul className="breadcrumb-list">
                        <li><Link href="/">Trang chủ</Link></li>
                        <li><span className="current">Sản phẩm</span></li>
                    </ul>
                </div>
            </div>

            {/* Products Section */}
            <section className="products-section section">
                <div className="container">
                    <div className="products-layout">
                        {/* Sidebar */}
                        <aside className="sidebar">
                            <div className="sidebar-title">DANH MỤC SẢN PHẨM</div>
                            <ul className="sidebar-menu">
                                {[
                                    { slug: "sieu-am", name: "Máy siêu âm" },
                                    { slug: "xet-nghiem", name: "Thiết bị xét nghiệm" },
                                    { slug: "dien-tim", name: "Máy điện tim" },
                                    { slug: "gay-me", name: "Máy gây mê" },
                                    { slug: "noi-soi", name: "Máy nội soi" },
                                    { slug: "x-quang", name: "Máy X-Quang" },
                                    { slug: "thu-y", name: "Thiết bị thú y" },
                                    { slug: "hoa-chat", name: "Hóa chất y tế" },
                                    { slug: "vat-tu", name: "Vật tư tiêu hao" },
                                    { slug: "khac", name: "Thiết bị khác" },
                                ].map((cat) => (
                                    <li key={cat.slug} className="sidebar-item">
                                        <Link href={`/products?cat=${cat.slug}`} className="sidebar-link">
                                            {cat.name} <span className="arrow">›</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {/* Products Grid */}
                        <div className="products-main">
                            <div className="products-header">
                                <h1>Tất Cả Sản Phẩm</h1>
                                <div className="products-sort">
                                    <label>Sắp xếp:</label>
                                    <select className="form-control" style={{ width: "auto" }}>
                                        <option>Mới nhất</option>
                                        <option>Tên A-Z</option>
                                        <option>Tên Z-A</option>
                                    </select>
                                </div>
                            </div>

                            <div className="products-grid">
                                {products.map((product) => (
                                    <div key={product.id} className="product-card">
                                        <Link href={`/products/${product.id}`} className="product-img">
                                            <div className="img-placeholder">Ảnh SP</div>
                                        </Link>
                                        <div className="product-info">
                                            <div className="product-rating">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <svg key={star} className="icon icon-sm" style={{ color: "#FFC107" }}>
                                                        <use href="#icon-star"></use>
                                                    </svg>
                                                ))}
                                            </div>
                                            <h4 className="product-title">
                                                <Link href={`/products/${product.id}`}>{product.name}</Link>
                                            </h4>
                                            <a href="tel:096XXXXXXX" className="product-cta">Liên Hệ: 096.XX.XX.XXX</a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="pagination">
                                <a href="#" className="page-link active">1</a>
                                <a href="#" className="page-link">2</a>
                                <a href="#" className="page-link">3</a>
                                <span className="page-dots">...</span>
                                <a href="#" className="page-link">10</a>
                                <a href="#" className="page-link next">Tiếp →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
