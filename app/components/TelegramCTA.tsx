import React from "react";

const TELEGRAM_URL = "https://t.me/+nRSW8hi2MXhiYzdl";

const TelegramIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.941z" />
  </svg>
);

const TelegramCTA = () => {
  return (
    <section className="py-4 md:py-5 bg-white">
      <div className="flex justify-center px-4">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 md:gap-2.5 bg-white text-sky-500 hover:text-white hover:bg-sky-500 border-2 border-sky-500 px-5 md:px-8 py-2 md:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          <TelegramIcon size={20} />
          <span className="text-sm md:text-base font-bold tracking-tight">
            Join Our Telegram Channel
          </span>
          <TelegramIcon size={20} />
        </a>
      </div>
    </section>
  );
};

export default TelegramCTA;
