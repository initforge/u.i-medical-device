import "@/pages/about.css";

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Giới Thiệu</h1>
                    <p>Đối tác tin cậy trong ngành thiết bị y tế</p>
                </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2 className="section-title">Tầm Nhìn & Sứ Mệnh</h2>
                            <p className="lead">Trở thành đối tác hàng đầu trong lĩnh vực cung cấp thiết bị y tế tại Việt Nam.</p>
                            <p>Chúng tôi cam kết mang đến những giải pháp y tế tiên tiến, góp phần nâng cao chất lượng chăm sóc sức khỏe cho cộng đồng.</p>
                            <ul className="feature-list">
                                <li>
                                    <span className="check">
                                        <svg className="icon icon-sm icon-white"><use href="#icon-check"></use></svg>
                                    </span>
                                    <div>
                                        <strong>Chất lượng hàng đầu</strong>
                                        <p>100% sản phẩm chính hãng, đạt tiêu chuẩn quốc tế</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="check">
                                        <svg className="icon icon-sm icon-white"><use href="#icon-check"></use></svg>
                                    </span>
                                    <div>
                                        <strong>Dịch vụ tận tâm</strong>
                                        <p>Hỗ trợ kỹ thuật 24/7, bảo hành tận nơi</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="about-image">
                            <div className="img-placeholder large">
                                <svg className="icon icon-2xl icon-primary">
                                    <use href="#icon-medical"></use>
                                </svg>
                                <p>Ảnh Showroom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section id="history" className="section bg-light">
                <div className="container">
                    <h2 className="section-title centered text-center">Lịch Sử Phát Triển</h2>
                    <div className="timeline">
                        {[
                            { year: "2014", title: "Thành lập công ty", desc: "Khởi đầu với đội ngũ 5 người, chuyên phân phối thiết bị y tế cơ bản" },
                            { year: "2017", title: "Mở rộng quy mô", desc: "Phát triển đội ngũ 30 nhân viên, mở văn phòng tại TP.HCM" },
                            { year: "2020", title: "Đối tác chiến lược", desc: "Ký kết hợp tác với các thương hiệu y tế hàng đầu thế giới" },
                            { year: "2024", title: "Vươn tầm quốc tế", desc: "Mở rộng thị trường xuất khẩu sang các nước Đông Nam Á" },
                        ].map((item, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-year">{item.year}</div>
                                <div className="timeline-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="section">
                <div className="container">
                    <h2 className="section-title centered text-center">Đội Ngũ Đồng Hành</h2>
                    <div className="grid grid-4">
                        {[
                            { name: "Nguyễn Văn A", role: "Giám đốc" },
                            { name: "Trần Thị B", role: "Phó Giám đốc" },
                            { name: "Lê Văn C", role: "Trưởng phòng KD" },
                            { name: "Phạm Thị D", role: "Trưởng phòng KT" },
                        ].map((member, i) => (
                            <div key={i} className="team-card">
                                <div className="team-avatar">
                                    <div className="img-placeholder">Avatar</div>
                                </div>
                                <h4>{member.name}</h4>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
