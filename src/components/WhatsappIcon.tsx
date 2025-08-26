import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { whatsappTranslations } from './../locales/whatsapp';

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [delayTime, setDelayTime] = useState(10000);
  const [audioReady, setAudioReady] = useState(false);
  const phoneNumber = "+201010095991";
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isUnlockedRef = useRef(false);
  const { t } = useLanguage();

  useEffect(() => {
    // تهيئة الصوت عند أول تفاعل
    const unlockAudio = () => {
      if (!isUnlockedRef.current) {
        audioRef.current = new Audio("/sound/whatsapp-message-for-iphone.mp3");
        // محاولة تشغيل وإيقاف الصوت للحصول على الإذن
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // تم التشغيل بنجاح
              audioRef.current?.pause();
              audioRef.current.currentTime = 0;
              isUnlockedRef.current = true;
              setAudioReady(true);
            })
            .catch(error => {
              console.warn("لسه الصوت مش مسموح، جرب تتفاعل تاني", error);
              // محاولة بديلة: ننتظر حتى يصبح الصوت جاهزاً
              audioRef.current.load();
              isUnlockedRef.current = true;
              setAudioReady(true);
            });
        }
      }
    };

    document.addEventListener("click", unlockAudio, { once: true });
    document.addEventListener("scroll", unlockAudio, { once: true });

    return () => {
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("scroll", unlockAudio);
    };
  }, []);

  useEffect(() => {
    const triggerMessage = () => {
      setIsVisible(true);

      // تشغيل الصوت عند ظهور الرسالة إذا كان جاهزاً
      if (audioReady && audioRef.current && isUnlockedRef.current) {
        try {
          audioRef.current.currentTime = 0; // إعادة تعيين الصوت إلى البداية
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.warn("فشل تشغيل الصوت:", error);
            });
          }
        } catch (error) {
          console.error("خطأ في تشغيل الصوت:", error);
        }
      }

      setTimeout(() => {
        setIsVisible(false);
        setDelayTime((prev) => prev * 2);
      }, 5000);
    };

    const show = setTimeout(triggerMessage, delayTime);
    return () => clearTimeout(show);
  }, [delayTime, audioReady]);

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-button-container fixed bottom-5 right-5 z-50">
      <div className="flex row-reverse items-center gap-3">
        <button
          className="whatsapp-btn bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg transition-colors duration-300"
          aria-label="فتح محادثة واتساب"
          onClick={openWhatsApp}
        >
          <FaWhatsapp className="h-8 w-8" />
        </button>
        {isVisible && (
          <div className="whatsapp-message bg-white text-black px-5 py-3 rounded-full shadow-lg font-semibold whitespace-nowrap animate-fadeIn">
            {t.whatsapp.whatsappMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default WhatsAppButton;