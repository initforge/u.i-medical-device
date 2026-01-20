export default function FloatingButtons() {
    return (
        <div className="floating-buttons">
            <a href="https://zalo.me/096XXXXXXX" className="floating-btn zalo" title="Chat Zalo">
                <svg className="icon icon-lg icon-white">
                    <use href="#icon-zalo"></use>
                </svg>
            </a>
            <a href="https://m.me/abcmedical" className="floating-btn messenger" title="Messenger">
                <svg className="icon icon-lg icon-white">
                    <use href="#icon-messenger"></use>
                </svg>
            </a>
            <a href="tel:096XXXXXXX" className="floating-btn phone" title="Gọi ngay">
                <svg className="icon icon-lg icon-white">
                    <use href="#icon-phone"></use>
                </svg>
            </a>
        </div>
    );
}
