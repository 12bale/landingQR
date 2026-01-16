import React, { useState } from "react";
import { motion } from "framer-motion"; // 애니메이션 라이브러리

const InvitationCard = () => {
  // 1. 상태 관리 (기본값 설정)
  const [guestInfo] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      name: params.get("name") || "VIP 게스트",
      company: params.get("company") || "환영합니다",
      seat: params.get("seat") || "현장 안내",
    };
  });

  // 3. 애니메이션 설정 (순차적 등장)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3, // 0.3초 간격으로 내부 요소 등장
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // 배경 (모바일 꽉 차게, 중앙 정렬)
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* 카드 컨테이너 */}
      <motion.div
        className="bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 상단 장식용 헤더 (브랜드 컬러) */}
        <div className="h-4 bg-blue-600 w-full"></div>

        <div className="p-8 text-center">
          {/* 로고나 행사명 */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm font-semibold tracking-widest mb-6"
          >
            2026 AI CLOUD CONFERENCE
          </motion.p>

          {/* 환영 문구 */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="block text-gray-500 text-lg mb-1">
              {guestInfo.company}
            </span>
            <h1 className="text-3xl font-bold text-gray-900">
              <span className="text-blue-600">{guestInfo.name}</span> 님
            </h1>
            <p className="text-gray-400 text-sm mt-2">방문을 환영합니다.</p>
          </motion.div>

          {/* 티켓 점선 효과 */}
          <div className="relative border-t-2 border-dashed border-gray-200 my-8">
            <div className="absolute -left-10 -top-3 w-6 h-6 bg-gray-100 rounded-full"></div>
            <div className="absolute -right-10 -top-3 w-6 h-6 bg-gray-100 rounded-full"></div>
          </div>

          {/* 좌석 정보 (가장 중요한 정보) */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-2xl p-6 border border-blue-100"
          >
            <p className="text-blue-500 text-sm font-medium mb-2">
              지정 좌석 번호
            </p>
            <p className="text-4xl font-extrabold text-blue-900 tracking-wider">
              {guestInfo.seat}
            </p>
          </motion.div>

          {/* 안내 메시지 */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xs mt-8"
          >
            * 입장 시 본 화면을 스태프에게 보여주세요.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default InvitationCard;
