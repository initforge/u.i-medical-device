import Link from "next/link";
import "@/pages/news.css";

export default function NewsPage() {
    const articles = [
        { id: 1, title: "Tổng quan đèn đọc phim X-quang chẩn đoán hình ảnh", date: "19/01/2024", desc: "Tìm hiểu về các loại đèn đọc phim X-quang từ truyền thống đến hiện đại..." },
        { id: 2, title: "Hướng dẫn sử dụng nồi hấp tiệt trùng trong y tế", date: "15/01/2024", desc: "Quy trình vận hành, bảo dưỡng và những lưu ý quan trọng..." },
        { id: 3, title: "Máy đo SpO₂: Thiết bị theo dõi oxy máu cần thiết", date: "10/01/2024", desc: "Nguyên lý hoạt động, cách sử dụng và tiêu chí lựa chọn..." },
        { id: 4, title: "Máy xét nghiệm nước tiểu: Nguyên lý và ứng dụng", date: "05/01/2024", desc: "Tổng quan về máy phân tích nước tiểu, các thông số xét nghiệm..." },
        { id: 5, title: "Xu hướng công nghệ thiết bị y tế năm 2024", date: "01/01/2024", desc: "Những công nghệ mới trong ngành thiết bị y tế, AI trong chẩn đoán..." },
        { id: 6, title: "Tiêu chuẩn phòng xét nghiệm theo quy định Bộ Y tế", date: "28/12/2023", desc: "Hướng dẫn thiết lập phòng xét nghiệm đạt chuẩn..." },
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <div className="container">
                    <ul className="breadcrumb-list">
                        <li><Link href="/">Trang chủ</Link></li>
                        <li><span className="current">Tin tức</span></li>
                    </ul>
                </div>
            </div>

            {/* News Section */}
            <section className="news-section section">
                <div className="container">
                    <div className="news-layout">
                        {/* News Grid */}
                        <div className="news-main">
                            <h1 className="page-title">Tin Tức & Bài Viết</h1>

                            <div className="news-grid">
                                {articles.map((article) => (
                                    <article key={article.id} className="news-card">
                                        <Link href={`/news/${article.id}`} className="news-img">
                                            <div className="img-placeholder">Ảnh bài viết</div>
                                        </Link>
                                        <div className="news-content">
                                            <span className="news-date">{article.date}</span>
                                            <h3><Link href={`/news/${article.id}`}>{article.title}</Link></h3>
                                            <p>{article.desc}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="pagination">
                                <a href="#" className="page-link active">1</a>
                                <a href="#" className="page-link">2</a>
                                <a href="#" className="page-link">3</a>
                                <a href="#" className="page-link next">Tiếp →</a>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="sidebar">
                            <div className="sidebar-title">DANH MỤC SẢN PHẨM</div>
                            <ul className="sidebar-menu">
                                <li className="sidebar-item">
                                    <Link href="/products?cat=san-phu" className="sidebar-link">Khoa Sản - Phụ</Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link href="/products?cat=ngoai" className="sidebar-link">Khoa Ngoại</Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link href="/products?cat=xet-nghiem" className="sidebar-link">Khoa Xét Nghiệm</Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link href="/products?cat=chan-doan" className="sidebar-link">Chẩn Đoán Hình Ảnh</Link>
                                </li>
                            </ul>

                            <div className="sidebar-widget">
                                <h4>Bài viết nổi bật</h4>
                                <ul className="popular-posts">
                                    {articles.slice(0, 3).map((article) => (
                                        <li key={article.id}>
                                            <Link href={`/news/${article.id}`}>
                                                <span className="post-title">{article.title.substring(0, 30)}...</span>
                                                <span className="post-date">{article.date}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
